/**
 * Write side: apply proposed changes back into an i18n `.ts` source file, safely, via the TypeScript
 * compiler API. We locate each target string literal by walking the AST along its path (starting with
 * the locale key), then splice replacements from end to start so offsets stay valid. Only plain string
 * and no-substitution template literals are edited; anything else (template with `${}`, computed
 * value) is reported as skipped rather than risked. Pure string-in/string-out.
 */

import ts from 'typescript';
import type { PathSeg } from './extract';

/** A change addressed by its full AST path: [localeKey, ...leafPath]. */
export interface AstChange {
  path: PathSeg[];
  after: string;
}

export interface ApplyResult {
  text: string;
  applied: number;
  skipped: { path: PathSeg[]; reason: string }[];
}

function propName(name: ts.PropertyName): string | undefined {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return name.text;
  return undefined;
}

/** Find the exported `Record<Locale, …>` object literal — the one whose properties include `en`. */
function findDictionaryObject(sf: ts.SourceFile): ts.ObjectLiteralExpression | undefined {
  let found: ts.ObjectLiteralExpression | undefined;
  const visit = (node: ts.Node): void => {
    if (found) return;
    if (
      ts.isObjectLiteralExpression(node) &&
      node.properties.some((p) => ts.isPropertyAssignment(p) && propName(p.name) === 'en')
    ) {
      found = node;
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return found;
}

/** Descend from the dictionary object along a path to the value node it addresses. */
function navigate(root: ts.Node, path: PathSeg[]): ts.Node | undefined {
  let cur: ts.Node = root;
  for (const seg of path) {
    if (ts.isObjectLiteralExpression(cur)) {
      const prop = cur.properties.find(
        (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && propName(p.name) === String(seg),
      );
      if (!prop) return undefined;
      cur = prop.initializer;
    } else if (ts.isArrayLiteralExpression(cur)) {
      const idx = Number(seg);
      if (!Number.isInteger(idx) || idx < 0 || idx >= cur.elements.length) return undefined;
      cur = cur.elements[idx];
    } else {
      return undefined;
    }
  }
  return cur;
}

const singleQuote = (s: string): string =>
  `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;

const backtick = (s: string): string =>
  `\`${s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\``;

export function applyChanges(sourceText: string, fileName: string, changes: AstChange[]): ApplyResult {
  const sf = ts.createSourceFile(fileName, sourceText, ts.ScriptTarget.ES2020, true);
  const root = findDictionaryObject(sf);
  if (!root) throw new Error(`Could not locate a Record<Locale> object literal in ${fileName}`);

  const edits: { start: number; end: number; text: string }[] = [];
  const skipped: { path: PathSeg[]; reason: string }[] = [];

  for (const change of changes) {
    const node = navigate(root, change.path);
    if (!node) { skipped.push({ path: change.path, reason: 'path-not-found' }); continue; }
    if (ts.isStringLiteral(node)) {
      edits.push({ start: node.getStart(sf), end: node.getEnd(), text: singleQuote(change.after) });
    } else if (ts.isNoSubstitutionTemplateLiteral(node)) {
      edits.push({ start: node.getStart(sf), end: node.getEnd(), text: backtick(change.after) });
    } else {
      skipped.push({ path: change.path, reason: `unsupported-node-${ts.SyntaxKind[node.kind]}` });
    }
  }

  edits.sort((a, b) => b.start - a.start); // apply end -> start so earlier offsets stay valid
  let text = sourceText;
  for (const e of edits) text = text.slice(0, e.start) + e.text + text.slice(e.end);
  return { text, applied: edits.length, skipped };
}

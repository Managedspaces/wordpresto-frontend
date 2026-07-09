/**
 * Validates that all required agent-readiness resources exist and are well-formed.
 * Run: node scripts/validate-agent-resources.mjs  (or via prebuild)
 */
import { existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const requiredFiles = [
  // LLM / context files
  'llms.txt',
  'llm.txt',
  'llms-full.txt',
  'sitemap.md',
  // Direct URL mirrors
  'index.md',
  'workflow-demo/index.md',
  'workers/index.md',
  'workers/seo/index.md',
  'pricing/index.md',
  // Legacy mirrors (read by generate-llms.mjs)
  'pages/index.md',
  'pages/workflow-demo.md',
  'pages/workers/index.md',
  'pages/pricing.md',
  // Discovery files
  '.well-known/mcp.json',
  '.well-known/webmcp.json',
  '.well-known/ai-plugin.json',
  '.well-known/api-catalog',
  '.well-known/api.json',
  '.well-known/agent-skills/index.json',
  '.well-known/skills/index.json',
  '.well-known/agent-skills/read-wordpresto-site/SKILL.md',
  '.well-known/agent-skills/summarise-wordpresto/SKILL.md',
  '.well-known/agent-skills/compare-wordpresto-workflows/SKILL.md',
  '.well-known/oauth-authorization-server',
  '.well-known/oauth-protected-resource',
  '.well-known/openid-configuration',
  // Agent metadata
  'agents.json',
  // Standard
  'robots.txt',
];

const jsonFiles = [
  '.well-known/mcp.json',
  '.well-known/webmcp.json',
  '.well-known/ai-plugin.json',
  '.well-known/api-catalog',
  '.well-known/api.json',
  '.well-known/agent-skills/index.json',
  '.well-known/skills/index.json',
  '.well-known/oauth-authorization-server',
  '.well-known/oauth-protected-resource',
  '.well-known/openid-configuration',
  'agents.json',
];

let ok = true;

const missing = requiredFiles.filter((f) => !existsSync(join(PUBLIC_DIR, f)));
if (missing.length) {
  console.error('Missing agent readiness resources:');
  for (const f of missing) console.error(`  - public/${f}`);
  ok = false;
}

for (const file of jsonFiles) {
  const path = join(PUBLIC_DIR, file);
  if (!existsSync(path)) continue;
  try {
    JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    console.error(`Invalid JSON in public/${file}: ${err.message}`);
    ok = false;
  }
}

const llmsPath = join(PUBLIC_DIR, 'llms.txt');
if (existsSync(llmsPath)) {
  const llms = readFileSync(llmsPath, 'utf8');
  for (const expected of ['/index.md', '/workflow-demo/index.md', '/workers/index.md', '/llms-full.txt', '/sitemap.md']) {
    if (!llms.includes(expected)) {
      console.error(`public/llms.txt does not reference ${expected}`);
      ok = false;
    }
  }
}

if (!ok) process.exit(1);
console.log('✓ Agent readiness resources validated');

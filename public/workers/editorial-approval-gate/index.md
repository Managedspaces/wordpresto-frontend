---
title: "Editorial Approval Gate Worker | WordPresto"
description: "Dana reads the existing worker outputs and produces a conservative approval gate, telling the human reviewer whether content appears ready for review, needs revision, or is blocked."
canonical: "https://wordpresto.com/workers/editorial-approval-gate/"
worker: "Dana"
role: "Editorial Approval Gate Worker"
stage: "Editorial approval gate"
output: "Approval gate review"
---

# Check whether the work is ready for human approval.

Dana reads the existing worker outputs and produces a conservative approval gate, telling the human reviewer whether content appears ready for review, needs revision, or is blocked.

---

Approval should not be a feeling. Before content moves forward, the editor needs to know whether the key checks are clean, whether blockers remain, and whether anything still needs revision, evidence or specialist review. Dana reads the existing worker outputs and produces a conservative approval gate. She does not approve automatically. She tells the human reviewer whether the content appears ready for review, needs revision, or is blocked.

## Content moves forward because everyone assumes someone else checked it.

A page may have good copy, but still contain unresolved evidence gaps, accessibility issues, metadata problems, trust concerns, CMS handoff blockers or editorial risk. If those issues are scattered across worker outputs, they are easy to miss. Dana brings the final review state into one gate.

## A conservative final gate before content moves forward.

Dana reviews already-computed worker outputs and determines whether the content appears ready for human editorial review. She does not certify compliance, publish content, or approve automatically.

### Checks

- Approval report state
- Editorial risk and claims issues
- Evidence gaps
- Accessibility status
- SEO metadata and SERP snippet readiness
- Schema and trust signals
- CMS handoff blockers
- Draft quality and review status

### Improves

- Approval confidence
- Editorial governance
- Visibility of blockers
- Readiness before handoff or publishing workflow

### Prepares

- Approval gate decision
- Readiness score
- Blocker list
- Prioritised recommendations

### Surfaces for human review

- Hard blockers
- Revision items
- Missing review evidence
- Reasons content should not move forward yet

## What Dana works from, and what she produces.

### Works from

- Review summary
- Review queue
- Evidence gap review
- Editorial risk findings
- Accessibility, metadata, schema and trust outputs

### Produces

- Approval gate review
- Gate decision
- Readiness score
- Blocker list
- Prioritised recommendations

## When to use Dana

### A page is close to final approval.

Dana checks whether unresolved worker findings still block progress.

### Multiple review workers have run.

She combines the state into one clear readiness gate.

### A draft is moving towards CMS handoff.

Dana flags blockers before handoff creates operational risk.

### The editor needs a conservative decision point.

She gives approved-for-review only when the checks are clean enough.

### Governance matters.

Dana keeps risk, evidence and accessibility issues visible before sign-off.

### A page should not move forward yet.

She explains why and lists the highest-priority actions.

## Dana gates readiness. Humans approve.

Dana does not approve content automatically, certify compliance, publish, or write to a CMS. Her job is to make the approval state visible so a human reviewer can decide.

### Boundary checklist

- Dana gates readiness, she never approves content herself.
- Compliance (legal, medical, financial, accessibility) is never certified by Dana.
- Blockers are always surfaced, never hidden to make content look ready.
- The gate decision is conservative — unclear or unresolved items default to needing revision.

### Will not

- Approve content automatically
- Certify legal, medical, financial or accessibility compliance
- Publish or hand off content by herself
- Hide blockers to make content appear ready
- Rewrite or apply fixes

## Workers Dana works alongside.

- **Helen — Review Worker**: Summarises findings and review actions before the final gate. Output: Review summary.
- **Sam — Safe Change Planner**: Turns findings into proposed changes Dana can assess for blockers. Output: Change plan.
- **review_queue**: Organises unresolved items Dana can treat as approval blockers. Output: Review queue.

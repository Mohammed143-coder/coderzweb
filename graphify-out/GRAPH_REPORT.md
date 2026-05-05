# Graph Report - .  (2026-05-05)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 99 nodes · 59 edges · 44 communities (42 shown, 2 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `860032e0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]

## God Nodes (most connected - your core abstractions)
1. `useScrollReveal()` - 16 edges
2. `getImagePath()` - 4 edges
3. `Providers()` - 2 edges
4. `Video()` - 2 edges
5. `getBlogData()` - 2 edges
6. `ModernFAQ()` - 2 edges
7. `Hero()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Video()` --calls--> `useScrollReveal()`  [INFERRED]
  components/Video/index.tsx → lib/useScrollReveal.ts
- `ModernFAQ()` --calls--> `useScrollReveal()`  [INFERRED]
  components/Common/ModernFAQ.jsx → lib/useScrollReveal.ts
- `Hero()` --calls--> `useScrollReveal()`  [INFERRED]
  components/Hero/index.tsx → lib/useScrollReveal.ts
- `getBlogData()` --calls--> `getImagePath()`  [INFERRED]
  components/Blog/blogData.tsx → lib/utils.ts

## Communities (44 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (4): ModernFAQ(), Hero(), useScrollReveal(), Video()

## Knowledge Gaps
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 3 inferred relationships involving `useScrollReveal()` (e.g. with `Video()` and `ModernFAQ()`) actually correct?**
  _`useScrollReveal()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._
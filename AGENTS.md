---
name: "Prettier-Config-Repository-Instructions"
description: "Instructions for maintaining the shared prettier-config-nick2bad4u package."
applyTo: "**"
---

# Repository Instructions

This repository publishes a shared Prettier config package. Keep changes focused
on the package behavior, generated shims, tests, and release validation that
support that package.

## Engineering Posture

- Be direct and critical about technical tradeoffs. Call out incorrect
  assumptions, over-engineering, fragile config, package-surface risks, and
  dependency choices that would hurt consumers.
- Prefer modern, stable, idiomatic TypeScript and Node.js ESM patterns, but
  follow the repository's existing conventions unless they are clearly harmful.
- Make focused, maintainable changes. Avoid unrelated rewrites, new
  abstractions, or new dependencies unless they solve a concrete problem.
- Inspect before editing, implement the smallest correct change, validate with
  the relevant scripts, and review the diff before finishing.

## Source Of Truth

- `src/prettier.config.mts` and `src/preset.mts` are the source files for
  published package behavior.
- Root package files such as `prettier.config.mjs`, `preset.mjs`,
  `index.d.ts`, and `prettier.config.d.mts` are tiny shims into generated
  `dist/` output. Do not hand-edit them to change behavior.
- `dist/`, coverage output, caches, and other generated folders are inspection
  targets, not source-of-truth editing targets.
- If behavior needs changes in both `src/prettier.config.mts` and
  `src/preset.mts`, update both before running `npm run build` so generated
  output is never based on a partially updated source state.

## Config Changes

- Keep Prettier override option objects explicit, typed, and easy to review.
- Add or update supported file patterns in the relevant existing override
  before creating a new near-duplicate override block.
- Keep plugin-dependent options inside the override that uses the matching
  plugin.
- Keep Prettier plugin packages that consumers need at runtime in
  `dependencies`, not only `devDependencies`.
- Use `unknown`, type guards, precise generics, or Prettier-provided types
  instead of `any`.
- Prefer standard library APIs and existing repository helpers over adding
  helper dependencies.

## Fixtures And Tests

- When adding a new supported file type, add an idempotent fixture under
  `test/fixtures/formatting/` and include its filename in the fixture list in
  `test/preset.test.ts`.
- When changing behavior for an existing supported file type, update the
  existing fixture in place unless a separate fixture demonstrates a genuinely
  different file family.
- The fixture idempotence coverage is in `test/preset.test.ts`; run
  `npm run test` after supported-file or formatting-behavior changes.
- Add targeted Vitest assertions when changing exported options, override
  composition, consumer customization behavior, or package entrypoint behavior.

## Validation

- Run `npm run build` after source changes so `dist/` and the root shims are
  regenerated from source.
- If `npm run build` fails, fix the source or build configuration before moving
  on. Do not patch generated output by hand to hide the failure.
- For source behavior changes, run at least `npm run build` and
  `npm run test`.
- For broad repo or config changes, run `npm run lint:all`.
- If exports, entrypoints, public types, package metadata, dependency placement,
  or packed files change, run `npm run lint:package` so package-json sorting,
  dry-run packing, `publint`, and `attw` all execute.
- For release readiness, run `npm run lint:all` and `npm run release:verify`.

## Sync And Generated Surfaces

- Before changing a config, package metadata mirror, Node version file, peer
  dependency range, README table, or generated package surface, check whether a
  matching script already owns it.
- Use existing sync scripts such as `npm run sync:peer-prettier-range` and
  `npm run sync:node-version-files` instead of hand-editing mirrors.
- If a sync or validation script fails or times out, report the captured output,
  identify whether the failure is in source or generated output, and fix it
  before continuing unless explicitly told otherwise.

## Tooling Discipline

- Read files before editing them. Use `apply_patch` for manual edits.
- Put transient logs and large command outputs under `temp/`, not the repository
  root.
- Respect a dirty worktree. Do not revert unrelated user changes.
- Do not delete and recreate mature config files casually; adapt them.

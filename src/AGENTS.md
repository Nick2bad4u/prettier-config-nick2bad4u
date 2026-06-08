# Source Instructions

These instructions apply to files under `src/`.

## Source Of Truth

- Treat `src/prettier.config.mts` and `src/preset.mts` as the source files for the published package behavior.
- Do not edit root package artifacts such as `prettier.config.mjs`, `preset.mjs`, `index.d.ts`, or `prettier.config.d.mts` to change behavior. They are root shims into generated `dist/` output.
- Run `npm run build` after source changes so `dist/` is regenerated and root shims remain stable.

## Config Changes

- Keep Prettier override option objects explicit and typed.
- Add or update supported file patterns in the relevant override instead of duplicating near-identical override blocks.
- Keep plugin-dependent options inside the override that uses the matching plugin.
- Use `unknown`, type guards, precise generics, or Prettier-provided types instead of `any`.

## Validation

- When adding or changing a supported file type, add or update an idempotent fixture under `test/fixtures/formatting/`.
- For a new supported file type, add a new fixture and include its filename in the fixture list in `test/preset.test.ts`.
- For an existing supported file type, update the existing fixture in place unless a separate fixture covers a genuinely different file family.
- Verify formatting behavior with `npm run test`; the fixture idempotence coverage lives in `test/preset.test.ts`.
- If exports, entrypoints, public types, package metadata, dependency placement, or packed files are affected, also run `npm run lint:package`.

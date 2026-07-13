# Maintainer guide: shared Prettier config

## 1) Update formatting options

1. Edit `src/prettier.config.mts`.
2. Prefer updating existing `overrides` entries over adding redundant ones.
3. Keep plugin-dependent options inside the relevant file-pattern override.
4. Preserve cross-platform defaults (for example `endOfLine: "lf"` in overrides where needed).
5. Keep key ordering stable and plugin lists explicit so repo linting stays warning-free.
6. Run `npm run build` to regenerate the `dist/` implementation before testing or publishing.

## 2) Add or remove Prettier plugins

1. Update plugin references in `src/prettier.config.mts`.
2. Keep plugin packages in `dependencies` (runtime for consuming projects), not only `devDependencies`.
3. Add or update formatting fixtures under `test/fixtures/formatting/`.
4. Re-run package and test validation to confirm plugin resolution still works.

## 2a) Future plugin considerations

- `prettier-plugin-embed` may be useful for formatting embedded SQL, XML, shell,
  TOML, and other template literals in JavaScript/TypeScript files.
- Do not add it as a broad default without fixtures. It overrides embedded
  language formatting through the ESTree printer, so it can rewrite tagged
  template contents across every consuming project.
- If adopted, start narrowly with SQL tags/comments, keep
  `embeddedLanguageFormatting: "auto"`, and test interactions with the existing
  JS/TS plugins before publishing.

## 3) Keep package exports/types aligned

1. `src/preset.mts` should keep exporting the shared config as both default and named `config`.
2. Root `preset.mjs`, `prettier.config.mjs`, `index.d.ts`, and `prettier.config.d.mts` should stay as small shims into `dist/`.
3. Keep `package.json` `exports`, `main`, `types`, and `files` in sync with the root shims and generated `dist/` artifacts.

## 4) Validation checklist (required)

Run before pushing:

```sh
npm run lint:all
npm run release:verify
```

Optional release notes preview:

```sh
npm run changelog:preview
```

If `git-cliff` reports missing refs locally, ensure your local branch has at least one commit and tracks the expected branch ref.

## Maintainer guide: shared Prettier config

### 1) Update formatting options

1. Edit `.prettierrc` and mirror the same JSON in `.prettierrc.json`.
2. Prefer updating existing `overrides` entries over adding redundant ones.
3. Keep plugin-dependent options inside the relevant file-pattern override.
4. Preserve cross-platform defaults (for example `endOfLine: "lf"` in overrides where needed).
5. Keep key ordering stable in `.prettierrc.json` so repo linting stays warning-free.

### 2) Add or remove Prettier plugins

1. Update plugin references in `.prettierrc`.
2. Keep plugin packages in `dependencies` (runtime for consuming projects), not only `devDependencies`.
3. Re-run package and test validation to confirm plugin resolution still works.

### 3) Keep package exports/types aligned

1. `preset.mjs` should keep exporting the shared config as both default and named `config`.
2. `index.d.ts` should continue typing the export as `Readonly<prettier.Config>`.
3. Keep `package.json` `exports`, `main`, `types`, and `files` in sync.

### 4) Validation checklist (required)

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

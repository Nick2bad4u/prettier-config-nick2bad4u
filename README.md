# prettier-config-nick2bad4u

[![npm license.](https://flat.badgen.net/npm/license/prettier-config-nick2bad4u?color=purple)](https://github.com/Nick2bad4u/prettier-config-nick2bad4u/blob/main/LICENSE) [![npm total downloads.](https://flat.badgen.net/npm/dt/prettier-config-nick2bad4u?color=pink)](https://www.npmjs.com/package/prettier-config-nick2bad4u) [![latest GitHub release.](https://flat.badgen.net/github/release/Nick2bad4u/prettier-config-nick2bad4u?color=cyan)](https://github.com/Nick2bad4u/prettier-config-nick2bad4u/releases) [![GitHub stars.](https://flat.badgen.net/github/stars/Nick2bad4u/prettier-config-nick2bad4u?color=yellow)](https://github.com/Nick2bad4u/prettier-config-nick2bad4u/stargazers) [![GitHub forks.](https://flat.badgen.net/github/forks/Nick2bad4u/prettier-config-nick2bad4u?color=green)](https://github.com/Nick2bad4u/prettier-config-nick2bad4u/forks) [![GitHub open issues.](https://flat.badgen.net/github/open-issues/Nick2bad4u/prettier-config-nick2bad4u?color=red)](https://github.com/Nick2bad4u/prettier-config-nick2bad4u/issues) [![codecov.](https://codecov.io/gh/Nick2bad4u/prettier-config-nick2bad4u/branch/main/graph/badge.svg)](https://codecov.io/gh/Nick2bad4u/prettier-config-nick2bad4u)

Shared Prettier config for Nick2bad4u projects.

## Install

```sh
npm install --save-dev prettier prettier-config-nick2bad4u
```

This package ships the Prettier plugins used by the config, so consumers only need `prettier` plus this package.

The package is ESM-first and exports the config from `preset.mjs`.

## Usage

### Option 1: package.json (recommended)

```json
{
 "prettier": "prettier-config-nick2bad4u"
}
```

### Option 2: prettier.config.mjs

```js
import prettierConfig from "prettier-config-nick2bad4u";

export default prettierConfig;
```

### Option 2a: named import

```js
import { config } from "prettier-config-nick2bad4u";

export default config;
```

### Option 3: extend with local overrides

```js
import prettierConfig from "prettier-config-nick2bad4u";

export default {
 ...prettierConfig,
 printWidth: 100,
};
```

### Option 4: create config with extensionless file customization

Use `createConfig` when you want to add or replace extensionless JSON/INI files
without duplicating override internals.

#### Merge your files with package defaults

```js
import { createConfig } from "prettier-config-nick2bad4u";

export default createConfig({
 extensionlessJsonFiles: ["**/.my-json-rc"],
 extensionlessIniFiles: ["**/.my-ini-rc"],
});
```

#### Replace package defaults with your own lists

```js
import { createConfig } from "prettier-config-nick2bad4u";

export default createConfig({
 extensionlessJsonFiles: ["**/.custom-json-rc"],
 extensionlessIniFiles: ["**/.custom-ini-rc"],
 replaceDefaultExtensionlessJsonFiles: true,
 replaceDefaultExtensionlessIniFiles: true,
});
```

#### Reuse exported default lists/options

```js
import {
 createConfig,
 defaultExtensionlessIniFiles,
 defaultExtensionlessJsonFiles,
 extensionlessIniOptions,
 extensionlessJsonOptions,
} from "prettier-config-nick2bad4u";

const myJsonFiles = [...defaultExtensionlessJsonFiles, "**/.my-extra-json-rc"];

export default createConfig({
 extensionlessJsonFiles: myJsonFiles,
 replaceDefaultExtensionlessJsonFiles: true,
});

// You can also spread option presets if you build your own override blocks:
void extensionlessIniOptions;
void extensionlessJsonOptions;
```

> `.editorconfig` and `.gitconfig` are treated as INI-like files.
> `.browserlistrc` is **not** INI/properties syntax, so it is not included in
> the extensionless INI defaults.

### Option 5: inherit existing override options for specific files

Use `inheritedOverrides` when you want one file (or file group) to keep the
same plugin/options behavior from a base override and only change a small delta
(for example `printWidth`).

```js
import { createConfig } from "prettier-config-nick2bad4u";

export default createConfig({
 inheritedOverrides: [
  {
   inheritFrom: "*.ts",
   files: "src/shared-config.ts",
   options: {
    printWidth: 140,
   },
  },
 ],
});
```

This keeps TypeScript override behavior (plugins and related options) and only
overrides `printWidth` for `src/shared-config.ts`.

### Option 6: use exported common override option presets

For advanced local configs, you can directly use option presets exported by the
package.

```js
import prettierConfig, {
 jsonOverrideOptions,
 typescriptOverrideOptions,
} from "prettier-config-nick2bad4u";

export default {
 ...prettierConfig,
 overrides: [
  ...(prettierConfig.overrides ?? []),
  {
   files: "src/shared-config.ts",
   options: {
    ...typescriptOverrideOptions,
    printWidth: 140,
   },
  },
  {
   files: "config/custom.json",
   options: {
    ...jsonOverrideOptions,
    printWidth: 120,
   },
  },
 ],
};
```

Available named override option presets:

- `typescriptOverrideOptions`
- `jsonOverrideOptions`
- `packageJsonOverrideOptions`
- `htmlOverrideOptions`
- `userJavaScriptOverrideOptions`
- `markdownOverrideOptions`
- `mdxOverrideOptions`
- `yamlOverrideOptions`
- `tomlOverrideOptions`
- `xmlOverrideOptions`
- `phpOverrideOptions`
- `sqlOverrideOptions`
- `powershellOverrideOptions`
- `codeownersOverrideOptions`
- `shellOverrideOptions`
- `propertiesOverrideOptions`
- `iniOverrideOptions`
- `extensionlessJsonOptions`
- `extensionlessIniOptions`

### Option 7: full manual options block (most explicit, zero magic)

The simplest and most robust approach when `inheritedOverrides` doesn't behave
as expected: just paste the full options block directly. Every plugin and option
is explicitly present, so there is nothing implicit to break.

```js
import prettierConfig from "prettier-config-nick2bad4u";

export default {
 ...prettierConfig,
 overrides: [
  ...(prettierConfig.overrides ?? []),
  {
   files: "src/shared-config.ts",
   options: {
    endOfLine: "lf",
    jsdocBracketSpacing: false,
    jsdocCapitalizeDescription: true,
    jsdocCommentLineStrategy: "keep",
    jsdocDescriptionTag: false,
    jsdocDescriptionWithDot: false,
    jsdocEmptyCommentStrategy: "keep",
    jsdocKeepUnParseAbleExampleIndent: false,
    jsdocLineWrappingStyle: "greedy",
    jsdocPreferCodeFences: true,
    jsdocPrintWidth: 80,
    jsdocSeparateReturnsFromParam: true,
    jsdocSeparateTagGroups: true,
    jsdocSpaces: 1,
    jsdocVerticalAlignment: false,
    multilineArraysWrapThreshold: 2,
    multilineTypeUnionsWrapThreshold: 2,
    plugins: [
     "@softonus/prettier-plugin-duplicate-remover",
     "prettier-plugin-multiline-arrays-2",
     "prettier-plugin-jsdoc",
     "prettier-plugin-interpolated-html-tags",
     "prettier-plugin-merge",
    ],
    printWidth: 140, // your override
    tsdoc: true,
    useTabs: false,
   },
  },
 ],
};
```

This is the recommended fallback if you ever find plugin behavior not applying
correctly: copy the relevant options block from the named presets above and
paste it in verbatim.

### Option 8: legacy/manual override inheritance (kept for compatibility)

If you prefer the original manual discovery approach, this still works:

```js
import prettierConfig from "prettier-config-nick2bad4u";

const tsOverride = (prettierConfig.overrides ?? []).find(
 (override) => Array.isArray(override.files) && override.files.includes("*.ts")
);

export default {
 ...prettierConfig,
 overrides: [
  ...(prettierConfig.overrides ?? []),
  {
   files: "src/shared-config.ts",
   options: {
    ...(tsOverride?.options ?? {}),
    printWidth: 140,
   },
  },
 ],
};
```

## What this config includes

- Base formatting options (quotes, semicolons, trailing commas, tab width, etc.)
- File-specific overrides for JS/TS, Astro, Markdown, JSON, TOML, HTML, XML, PowerShell, INI, SQL, shell, and properties files
- Plugin-backed formatting for JSDoc, sorted JSON/package.json, and additional language formats

## Package surface

- Default export: the shared Prettier config object
- Named export: `config`
- Named exports: `createConfig`, `defaultExtensionlessJsonFiles`, `defaultExtensionlessIniFiles`, `extensionlessJsonOptions`, `extensionlessIniOptions`, `typescriptOverrideOptions`, `jsonOverrideOptions`, `packageJsonOverrideOptions`, `htmlOverrideOptions`, `userJavaScriptOverrideOptions`, `markdownOverrideOptions`, `mdxOverrideOptions`, `astroOverrideOptions`, `yamlOverrideOptions`, `tomlOverrideOptions`, `xmlOverrideOptions`, `phpOverrideOptions`, `sqlOverrideOptions`, `powershellOverrideOptions`, `codeownersOverrideOptions`, `shellOverrideOptions`, `propertiesOverrideOptions`, `iniOverrideOptions`
- TypeScript source: `src/prettier.config.mts` and `src/preset.mts`
- Root shims: `prettier.config.mjs`, `preset.mjs`, `index.d.ts`, and `prettier.config.d.mts`
- Generated package implementation: `dist/`

## Development checks

```sh
npm run build
npm run lint:all
npm run coverage
npm run release:verify
```

For maintainers, see [MAINTAINER_GUIDE.md](./MAINTAINER_GUIDE.md).

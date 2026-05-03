# prettier-config-nick2bad4u

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

const myJsonFiles = [
    ...defaultExtensionlessJsonFiles,
    "**/.my-extra-json-rc",
];

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

## What this config includes

- Base formatting options (quotes, semicolons, trailing commas, tab width, etc.)
- File-specific overrides for JS/TS, Markdown, JSON, TOML, HTML, XML, PowerShell, INI, SQL, shell, and properties files
- Plugin-backed formatting for JSDoc, sorted JSON/package.json, and additional language formats

## Package surface

- Default export: the shared Prettier config object
- Named export: `config`
- Named exports: `createConfig`, `defaultExtensionlessJsonFiles`, `defaultExtensionlessIniFiles`, `extensionlessJsonOptions`, `extensionlessIniOptions`
- Published files: `prettier.config.mjs`, `preset.mjs`, and `index.d.ts`

## Development checks

```sh
npm run lint:all
npm run coverage
npm run release:verify
```

For maintainers, see [MAINTAINER_GUIDE.md](./MAINTAINER_GUIDE.md).

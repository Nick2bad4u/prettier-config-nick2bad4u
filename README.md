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

## What this config includes

- Base formatting options (quotes, semicolons, trailing commas, tab width, etc.)
- File-specific overrides for JS/TS, Markdown, JSON, TOML, HTML, INI, SQL, shell, and properties files
- Plugin-backed formatting for JSDoc, sorted JSON/package.json, and additional language formats

## Package surface

- Default export: the shared Prettier config object
- Named export: `config`
- Published files: `.prettierrc`, `.prettierrc.json`, `preset.mjs`, and `index.d.ts`

## Development checks

```sh
npm run lint:all
npm run coverage
npm run release:verify
```

For maintainers, see [MAINTAINER_GUIDE.md](./MAINTAINER_GUIDE.md).

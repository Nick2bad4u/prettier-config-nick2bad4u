/**
 * Example Prettier config for consuming "prettier-config-nick2bad4u".
 *
 * Copy this file to a new project as `prettier.config.mjs` and customize.
 *
 * API summary: createConfig(options?) options.inheritedOverrides — per-file
 * overrides that inherit an existing base override's full options and only
 * apply deltas on top. options.extensionlessJsonFiles — extra extensionless
 * globs to treat as JSON. options.extensionlessIniFiles — extra extensionless
 * globs to treat as INI. options.replaceDefaultExtensionlessJsonFiles — replace
 * rather than merge defaults. options.replaceDefaultExtensionlessIniFiles —
 * replace rather than merge defaults.
 *
 * @see https://github.com/Nick2bad4u/prettier-config-nick2bad4u#readme
 */

import { createConfig } from "prettier-config-nick2bad4u";

/** @type {import("prettier").Config} */
const localConfig = createConfig({
    // ------------------------------------------------------------------
    // Per-file overrides that inherit a base override's options/plugins
    // and only change the delta you specify.
    //
    // inheritFrom must match one of the base override file patterns, e.g.:
    //   "*.ts"   — TypeScript (JS/TS/MJS/CJS/JSX/TSX)
    //   "*.json" — generic JSON (excluding package.json)
    //   "*.md"   — Markdown
    //   "*.mdx"  — MDX
    //   "*.astro" — Astro
    //   "*.yaml" — YAML (also applies to *.yml and .yamllint)
    //   "*.toml" — TOML
    //   "*.xml"  — XML-family (XML/XSD/XSL/XAML)
    //   "*.php"  — PHP
    //   "*.sql"  — SQL
    //   "*.ps1"  — PowerShell (PS1/PSM1/PSD1)
    //   "*.sh"   — Shell scripts
    //   "*.ini"  — INI files
    //   "*.properties" — Java .properties files
    //   "*.user.js"    — Userscripts
    //   "*.html"       — HTML
    //   "**/CODEOWNERS" or "CODEOWNERS" — CODEOWNERS
    //   "**/package.json" — package.json / package-lock.json
    // ------------------------------------------------------------------
    inheritedOverrides: [
        // Example: increase print width for a wide shared config file,
        // while keeping all TypeScript plugin behavior intact.
        {
            files: "**/src/shared-config.ts",
            inheritFrom: "*.ts",
            options: {
                printWidth: 140,
            },
        },

        // Example: relax JSON sort for a specific config file.
        {
            files: "**/config/custom-settings.json",
            inheritFrom: "*.json",
            options: {
                printWidth: 120,
            },
        },

        // Example: wider markdown for auto-generated docs.
        // {
        //     inheritFrom: "*.md",
        //     files: "docs/**/*.md",
        //     options: {
        //         printWidth: 100,
        //     },
        // },
    ],

    // ------------------------------------------------------------------
    // Alternative: full manual options block.
    // If plugin behavior isn't applying correctly with inheritedOverrides,
    // copy the full options block from the exported presets and paste it
    // verbatim. This is the most explicit and reliable approach.
    //
    // inheritedOverrides: [
    //     {
    //         files: "src/shared-config.ts",
    //         inheritFrom: "*.ts",
    //         options: {
    //             endOfLine: "lf",
    //             jsdocBracketSpacing: false,
    //             jsdocCapitalizeDescription: true,
    //             jsdocCommentLineStrategy: "keep",
    //             jsdocDescriptionTag: false,
    //             jsdocDescriptionWithDot: false,
    //             jsdocEmptyCommentStrategy: "keep",
    //             jsdocKeepUnParseAbleExampleIndent: false,
    //             jsdocLineWrappingStyle: "greedy",
    //             jsdocPreferCodeFences: true,
    //             jsdocPrintWidth: 80,
    //             jsdocSeparateReturnsFromParam: true,
    //             jsdocSeparateTagGroups: true,
    //             jsdocSpaces: 1,
    //             jsdocVerticalAlignment: false,
    //             multilineArraysWrapThreshold: 2,
    //             plugins: [
    //                 "@softonus/prettier-plugin-duplicate-remover",
    //                 "prettier-plugin-multiline-arrays",
    //                 "prettier-plugin-jsdoc",
    //                 "prettier-plugin-interpolated-html-tags",
    //                 "prettier-plugin-merge",
    //             ],
    //             printWidth: 140, // your override
    //             tsdoc: true,
    //             useTabs: false,
    //         },
    //     },
    // ],

    // ------------------------------------------------------------------
    // Extensionless file overrides.
    // Add any filenames with no extension that should be parsed as JSON
    // or INI. Merged with the package defaults unless you set
    // replaceDefault* to true.
    // ------------------------------------------------------------------

    // extensionlessJsonFiles: [".babelrc", ".stylelintrc"],
    // extensionlessIniFiles: ["myconfig"],

    // replaceDefaultExtensionlessJsonFiles: false,
    // replaceDefaultExtensionlessIniFiles: false,
});

export default localConfig;

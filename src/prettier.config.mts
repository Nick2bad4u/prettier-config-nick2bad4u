/**
 * Prettier configuration for Nick2Bad4U's projects
 *
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://www.schemastore.org/prettierrc/
 */

import type { Config } from "prettier";

/** Options for building a customized shared Prettier configuration. */
export interface CreateConfigOptions {
    /** Additional extensionless INI-like file globs to include. */
    extensionlessIniFiles?: readonly string[];
    /** Additional extensionless JSON-like file globs to include. */
    extensionlessJsonFiles?: readonly string[];
    /**
     * Additional file-targeted overrides that inherit options from existing
     * base overrides.
     */
    inheritedOverrides?: readonly InheritedOverrideConfig[];
    /** Replace default INI-like globs instead of merging with them. */
    replaceDefaultExtensionlessIniFiles?: boolean;
    /** Replace default JSON-like globs instead of merging with them. */
    replaceDefaultExtensionlessJsonFiles?: boolean;
}

/**
 * Configuration for appending an override that inherits from an existing base
 * override.
 */
export interface InheritedOverrideConfig {
    /** Optional file pattern(s) to exclude from the inherited override. */
    excludeFiles?: OverrideFiles;
    /** File pattern(s) for the new inherited override to target. */
    files: OverrideFiles;
    /**
     * Existing base override file pattern(s) to inherit options from (for
     * example "*.ts").
     */
    inheritFrom: OverrideFiles;
    /**
     * Additional override options merged on top of the inherited source
     * options.
     */
    options?: Readonly<PluginAwarePrettierOptions>;
}

type ConfigOverride = ConfigOverrides extends readonly (infer Override)[]
    ? Override
    : never;
type ConfigOverrides = NonNullable<Config["overrides"]>;
type OverrideFiles = ConfigOverride["files"];
type PluginAwarePrettierOptions = Partial<Config>;
type ReadonlyOverrideFiles = readonly string[] | string;

const normalizeOverrideFiles = (files: ReadonlyOverrideFiles): OverrideFiles =>
    typeof files === "string" ? files : [...files];

/** Default extensionless JSON-like globs used by this shared configuration. */
export const defaultExtensionlessJsonFiles: readonly string[] = Object.freeze([
    "**/.all-contributorsrc",
    "**/.djlintrc",
    "**/.hintrc",
    "**/.htmlhintrc",
    "**/.madgerc",
]);

/** Default extensionless INI-like globs used by this shared configuration. */
export const defaultExtensionlessIniFiles: readonly string[] = Object.freeze([
    "**/.editorconfig",
    "**/.gitconfig",
]);

/** Shared option preset used for extensionless JSON-like override blocks. */
export const extensionlessJsonOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        jsonRecursiveSort: false,
        jsonSortOrder: '{"*": "numeric"}',
        multilineArraysWrapThreshold: 2,
        parser: "json",
        plugins: [
            "prettier-plugin-sort-json",
            "prettier-plugin-multiline-arrays",
        ],
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used for extensionless INI-like override blocks. */
export const extensionlessIniOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        iniSpaceAroundEquals: true,
        parser: "ini",
        plugins: ["prettier-plugin-ini"],
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by the primary JS/TS override block. */
export const typescriptOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
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
        plugins: [
            "@softonus/prettier-plugin-duplicate-remover",
            "prettier-plugin-multiline-arrays",
            "prettier-plugin-jsdoc",
            "prettier-plugin-interpolated-html-tags",
            "prettier-plugin-merge",
        ],
        tsdoc: true,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by the generic JSON override block. */
export const jsonOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        jsonRecursiveSort: false,
        jsonSortOrder: '{"*": "numeric"}',
        multilineArraysWrapThreshold: 2,
        plugins: [
            "prettier-plugin-sort-json",
            "prettier-plugin-multiline-arrays",
        ],
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by the package.json/package-lock override block. */
export const packageJsonOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        multilineArraysWrapThreshold: 2,
        plugins: [
            "prettier-plugin-packagejson",
            "prettier-plugin-multiline-arrays",
        ],
        tabWidth: 4,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by HTML override blocks. */
export const htmlOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        htmlWhitespaceSensitivity: "strict",
        plugins: ["@softonus/prettier-plugin-duplicate-remover"],
        printWidth: 80,
        singleAttributePerLine: true,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by *.user.js override blocks. */
export const userJavaScriptOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        printWidth: 80,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by Markdown override blocks. */
export const markdownOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
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
        plugins: ["prettier-plugin-jsdoc"],
        tabWidth: 1,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by MDX override blocks. */
export const mdxOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
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
        plugins: ["prettier-plugin-jsdoc"],
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by Astro override blocks. */
export const astroOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        parser: "astro",
        plugins: ["prettier-plugin-astro"],
        printWidth: 100,
        tabWidth: 4,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by YAML override blocks. */
export const yamlOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        parser: "yaml",
        plugins: ["prettier-plugin-yaml"],
        tabWidth: 4,
        useTabs: false,
        yamlQuoteKeys: false,
        yamlQuoteValues: true,
        yamlQuoteValuesMatching: "^(?:yes|no|on|off)$",
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by TOML override blocks. */
export const tomlOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        alignComments: true,
        alignEntries: true,
        allowedBlankLines: 1,
        arrayAutoCollapse: true,
        arrayAutoExpand: true,
        compactArrays: false,
        compactEntries: false,
        compactInlineTables: false,
        endOfLine: "lf",
        indentEntries: true,
        indentTables: true,
        plugins: ["prettier-plugin-toml"],
        printWidth: 120,
        reorderKeys: false,
        tabWidth: 4,
        trailingComma: "none",
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by XML-family override blocks. */
export const xmlOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        bracketSameLine: false,
        endOfLine: "lf",
        plugins: ["@prettier/plugin-xml"],
        printWidth: 80,
        singleAttributePerLine: false,
        tabWidth: 2,
        useTabs: false,
        xmlQuoteAttributes: "preserve",
        xmlSelfClosingSpace: true,
        xmlSortAttributesByKey: false,
        xmlWhitespaceSensitivity: "strict",
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by PHP override blocks. */
export const phpOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        braceStyle: "per-cs",
        endOfLine: "lf",
        phpVersion: "auto",
        plugins: ["@prettier/plugin-php"],
        printWidth: 80,
        singleQuote: false,
        tabWidth: 4,
        trailingCommaPHP: true,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by SQL override blocks. */
export const sqlOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        dataTypeCase: "preserve",
        denseOperators: false,
        endOfLine: "lf",
        expressionWidth: 50,
        formatter: "sql-formatter",
        functionCase: "preserve",
        identifierCase: "preserve",
        indentStyle: "standard",
        keywordCase: "preserve",
        language: "sqlite",
        linesBetweenQueries: 1,
        logicalOperatorNewline: "before",
        newlineBeforeSemicolon: false,
        plugins: ["prettier-plugin-sql"],
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by PowerShell override blocks. */
export const powershellOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        plugins: ["prettier-plugin-powershell"],
        powershellBlankLineAfterParam: true,
        powershellBlankLinesBetweenFunctions: 1,
        powershellBraceStyle: "1tbs",
        powershellIndentSize: 4,
        powershellIndentStyle: "spaces",
        powershellKeywordCase: "lower",
        powershellLineWidth: 120,
        powershellPreferSingleQuote: false,
        powershellPreset: "invoke-formatter",
        powershellRewriteAliases: false,
        powershellRewriteWriteHost: false,
        powershellSortHashtableKeys: false,
        powershellTrailingComma: "none",
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by CODEOWNERS override blocks. */
export const codeownersOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        plugins: ["prettier-plugin-codeowners"],
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by shell script override blocks. */
export const shellOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        binaryNextLine: true,
        endOfLine: "lf",
        functionNextLine: false,
        indent: 4,
        keepComments: true,
        minify: false,
        plugins: ["prettier-plugin-sh"],
        singleLine: false,
        spaceRedirects: true,
        switchCaseIndent: true,
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by .properties override blocks. */
export const propertiesOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        escapeNonLatin1: false,
        plugins: ["prettier-plugin-properties"],
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/** Shared option preset used by .ini override blocks. */
export const iniOverrideOptions: Readonly<PluginAwarePrettierOptions> =
    Object.freeze({
        endOfLine: "lf",
        iniSpaceAroundEquals: true,
        plugins: ["prettier-plugin-ini"],
        useTabs: false,
    } satisfies PluginAwarePrettierOptions);

/**
 * Build a Prettier config with optional extensionless JSON and INI file
 * overrides.
 */
export const createConfig = (
    options: Readonly<CreateConfigOptions> = {}
): Config => {
    const {
        extensionlessIniFiles = [],
        extensionlessJsonFiles = [],
        inheritedOverrides = [],
        replaceDefaultExtensionlessIniFiles = false,
        replaceDefaultExtensionlessJsonFiles = false,
    } = options;

    const mergedExtensionlessIniFiles = [
        ...new Set(
            replaceDefaultExtensionlessIniFiles
                ? extensionlessIniFiles
                : [...defaultExtensionlessIniFiles, ...extensionlessIniFiles]
        ),
    ];
    const mergedExtensionlessJsonFiles = [
        ...new Set(
            replaceDefaultExtensionlessJsonFiles
                ? extensionlessJsonFiles
                : [...defaultExtensionlessJsonFiles, ...extensionlessJsonFiles]
        ),
    ];

    const baseOverrides: ConfigOverride[] = [
        {
            files: [
                "*.js",
                "*.jsx",
                "*.ts",
                "*.tsx",
                "*.mjs",
                "*.cjs",
                "*.mts",
                "*.cts",
            ],
            options: typescriptOverrideOptions,
        },
        {
            files: "tsconfig.*",
            options: jsonOverrideOptions,
        },
        {
            files: "*.html",
            options: htmlOverrideOptions,
        },
        {
            files: "*.user.js",
            options: userJavaScriptOverrideOptions,
        },
        {
            files: "*.md",
            options: markdownOverrideOptions,
        },
        {
            files: "*.mdx",
            options: mdxOverrideOptions,
        },
        {
            files: "*.astro",
            options: astroOverrideOptions,
        },
        {
            files: [
                "*.yaml",
                "*.yml",
                "**/.clang-format",
                "**/.clang-tidy",
                "**/.clangd",
                "**/.yamlfmt",
                "**/.yamllint",
                ".yamllint",
                ".yamllint.yaml",
                ".yamllint.yml",
            ],
            options: yamlOverrideOptions,
        },
        {
            files: "*.toml",
            options: tomlOverrideOptions,
        },
        {
            files: [
                "*.xml",
                "*.xsd",
                "*.xsl",
                "*.xaml",
            ],
            options: xmlOverrideOptions,
        },
        {
            files: "*.php",
            options: phpOverrideOptions,
        },
        {
            files: mergedExtensionlessJsonFiles,
            options: extensionlessJsonOptions,
        },
        {
            excludeFiles: ["**/package.json", "**/package-lock.json"],
            files: "*.json",
            options: jsonOverrideOptions,
        },
        {
            files: "*.sql",
            options: sqlOverrideOptions,
        },
        {
            files: [
                "*.ps1",
                "*.psm1",
                "*.psd1",
            ],
            options: powershellOverrideOptions,
        },
        {
            files: ["CODEOWNERS", "**/CODEOWNERS"],
            options: codeownersOverrideOptions,
        },
        {
            files: [
                "*.sh",
                "*.bash",
                "*.zsh",
                "*.sh.in",
                "*.zsh-theme",
                "**/.bashrc",
                "**/.bash_profile",
                "**/.bash_logout",
                "**/.zshrc",
                "**/.zshenv",
            ],
            options: shellOverrideOptions,
        },
        {
            files: "*.properties",
            options: propertiesOverrideOptions,
        },
        {
            files: mergedExtensionlessIniFiles,
            options: extensionlessIniOptions,
        },
        {
            files: "*.ini",
            options: iniOverrideOptions,
        },
        {
            files: ["**/package.json", "**/package-lock.json"],
            options: packageJsonOverrideOptions,
        },
    ];

    /* eslint-disable typefest/prefer-ts-extras-object-has-own, typefest/prefer-ts-extras-set-has -- Avoid adding ts-extras as a runtime dependency for simple built-ins in the published config. */
    const inheritedOverridesExpanded: ConfigOverride[] = inheritedOverrides.map(
        (override) => {
            const inheritFromValues = Array.isArray(override.inheritFrom)
                ? override.inheritFrom
                : [override.inheritFrom];
            const inheritedSourceOverride =
                baseOverrides.find((baseOverride) => {
                    const baseFiles = Array.isArray(baseOverride.files)
                        ? baseOverride.files
                        : [baseOverride.files];
                    const baseFileSet = new Set(baseFiles);

                    return inheritFromValues.every((inheritFromValue) =>
                        baseFileSet.has(inheritFromValue)
                    );
                }) ?? null;

            if (inheritedSourceOverride === null) {
                throw new Error(
                    `Unable to inherit override options: no base override found for ${JSON.stringify(override.inheritFrom)}.`
                );
            }

            const inheritedOverride: ConfigOverride = {
                files: normalizeOverrideFiles(override.files),
            };

            if (Object.hasOwn(override, "excludeFiles")) {
                const excludeFiles = override.excludeFiles;

                if (
                    typeof excludeFiles === "string" ||
                    Array.isArray(excludeFiles)
                ) {
                    inheritedOverride.excludeFiles =
                        normalizeOverrideFiles(excludeFiles);
                }
            }

            if (Object.hasOwn(override, "options")) {
                const inheritedOptions = inheritedSourceOverride.options;
                const overrideOptions = override.options;

                inheritedOverride.options = {
                    ...(typeof inheritedOptions === "object"
                        ? inheritedOptions
                        : {}),
                    ...(typeof overrideOptions === "object"
                        ? overrideOptions
                        : {}),
                };
            } else if (Object.hasOwn(inheritedSourceOverride, "options")) {
                const inheritedOptions = inheritedSourceOverride.options;

                if (typeof inheritedOptions === "object") {
                    inheritedOverride.options = inheritedOptions;
                }
            }

            return inheritedOverride;
        }
    );
    /* eslint-enable typefest/prefer-ts-extras-object-has-own, typefest/prefer-ts-extras-set-has -- Re-enable runtime-dependency preference rules after inherited override expansion. */

    return {
        $schema: "https://www.schemastore.org/prettierrc.json",
        arrowParens: "always",
        bracketSameLine: false,
        bracketSpacing: true,
        checkIgnorePragma: false,
        cursorOffset: -1,
        embeddedLanguageFormatting: "auto",
        endOfLine: "auto",
        experimentalOperatorPosition: "end",
        experimentalTernaries: false,
        htmlWhitespaceSensitivity: "css",
        insertPragma: false,
        jsxSingleQuote: false,
        objectWrap: "preserve",
        overrides: [...baseOverrides, ...inheritedOverridesExpanded],
        printWidth: 80,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        requirePragma: false,
        semi: true,
        singleAttributePerLine: false,
        singleQuote: false,
        tabWidth: 4,
        trailingComma: "es5",
        useTabs: false,
        vueIndentScriptAndStyle: false,
    };
};

/** Shared Prettier configuration exported by default for package consumers. */
const sharedPrettierConfig: Config = createConfig();

export default sharedPrettierConfig;

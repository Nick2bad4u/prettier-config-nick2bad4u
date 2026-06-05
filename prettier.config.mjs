/**
 * Prettier configuration for Nick2Bad4U's projects
 *
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://www.schemastore.org/prettierrc/
 */

/**
 * @typedef {{
 *     files: string | string[];
 *     inheritFrom: string | string[];
 *     excludeFiles?: string | string[];
 *     options?: Readonly<Partial<import("prettier").Config>>;
 * }} InheritedOverrideConfig
 */

/**
 * @typedef {{
 *     extensionlessIniFiles?: readonly string[];
 *     extensionlessJsonFiles?: readonly string[];
 *     inheritedOverrides?: readonly InheritedOverrideConfig[];
 *     replaceDefaultExtensionlessIniFiles?: boolean;
 *     replaceDefaultExtensionlessJsonFiles?: boolean;
 * }} CreateConfigOptions
 */

/** @type {ReadonlyArray<string>} */
export const defaultExtensionlessJsonFiles = Object.freeze([
    "**/.all-contributorsrc",
    "**/.djlintrc",
    "**/.hintrc",
    "**/.htmlhintrc",
    "**/.madgerc",
]);

/** @type {ReadonlyArray<string>} */
export const defaultExtensionlessIniFiles = Object.freeze([
    "**/.editorconfig",
    "**/.gitconfig",
]);

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const extensionlessJsonOptions = Object.freeze({
    endOfLine: "lf",
    jsonRecursiveSort: false,
    jsonSortOrder: '{"*": "numeric"}',
    multilineArraysWrapThreshold: 2,
    parser: "json",
    plugins: ["prettier-plugin-sort-json", "prettier-plugin-multiline-arrays"],
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const extensionlessIniOptions = Object.freeze({
    endOfLine: "lf",
    iniSpaceAroundEquals: true,
    parser: "ini",
    plugins: ["prettier-plugin-ini"],
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const typescriptOverrideOptions = Object.freeze({
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
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const jsonOverrideOptions = Object.freeze({
    endOfLine: "lf",
    jsonRecursiveSort: false,
    jsonSortOrder: '{"*": "numeric"}',
    multilineArraysWrapThreshold: 2,
    plugins: ["prettier-plugin-sort-json", "prettier-plugin-multiline-arrays"],
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const packageJsonOverrideOptions = Object.freeze({
    endOfLine: "lf",
    multilineArraysWrapThreshold: 2,
    plugins: [
        "prettier-plugin-packagejson",
        "prettier-plugin-multiline-arrays",
    ],
    tabWidth: 4,
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const htmlOverrideOptions = Object.freeze({
    htmlWhitespaceSensitivity: "strict",
    plugins: ["@softonus/prettier-plugin-duplicate-remover"],
    printWidth: 80,
    singleAttributePerLine: true,
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const userJavaScriptOverrideOptions = Object.freeze({
    endOfLine: "lf",
    printWidth: 80,
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const markdownOverrideOptions = Object.freeze({
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
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const mdxOverrideOptions = Object.freeze({
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
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const yamlOverrideOptions = Object.freeze({
    endOfLine: "lf",
    parser: "yaml",
    plugins: ["prettier-plugin-yaml"],
    tabWidth: 4,
    useTabs: false,
    yamlQuoteKeys: false,
    yamlQuoteValues: true,
    yamlQuoteValuesMatching: "^(?:yes|no|on|off)$",
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const tomlOverrideOptions = Object.freeze({
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
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const xmlOverrideOptions = Object.freeze({
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
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const phpOverrideOptions = Object.freeze({
    braceStyle: "per-cs",
    endOfLine: "lf",
    phpVersion: "auto",
    plugins: ["@prettier/plugin-php"],
    printWidth: 80,
    singleQuote: false,
    tabWidth: 4,
    trailingCommaPHP: true,
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const sqlOverrideOptions = Object.freeze({
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
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const powershellOverrideOptions = Object.freeze({
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
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const codeownersOverrideOptions = Object.freeze({
    endOfLine: "lf",
    plugins: ["prettier-plugin-codeowners"],
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const shellOverrideOptions = Object.freeze({
    binaryNextLine: true,
    endOfLine: "lf",
    functionNextLine: false,
    indent: 4,
    keepComments: true,
    keepPadding: false,
    minify: false,
    plugins: ["prettier-plugin-sh"],
    singleLine: false,
    spaceRedirects: true,
    switchCaseIndent: true,
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const propertiesOverrideOptions = Object.freeze({
    endOfLine: "lf",
    escapeNonLatin1: false,
    plugins: ["prettier-plugin-properties"],
    useTabs: false,
});

/** @type {Readonly<Partial<import("prettier").Config>>} */
export const iniOverrideOptions = Object.freeze({
    endOfLine: "lf",
    iniSpaceAroundEquals: true,
    plugins: ["prettier-plugin-ini"],
    useTabs: false,
});

/**
 * Build a Prettier config with optional extensionless JSON and INI file
 * overrides.
 *
 * @type {(
 *     options?: Readonly<CreateConfigOptions>
 * ) => import("prettier").Config}
 */

export const createConfig = (options = {}) => {
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

    /** @type {NonNullable<import("prettier").Config["overrides"]>} */
    const baseOverrides = [
        {
            files: [
                "*.js",
                "*.jsx",
                "*.ts",
                "*.tsx",
                "*.mjs",
                "*.cjs",
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
            files: "*.sh",
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

    /** @type {NonNullable<import("prettier").Config["overrides"]>} */
    const inheritedOverridesExpanded = inheritedOverrides.map((override) => {
        const inheritFromValues = Array.isArray(override.inheritFrom)
            ? override.inheritFrom
            : [override.inheritFrom];
        const inheritedSourceOverride = baseOverrides.find((baseOverride) => {
            const baseFiles = Array.isArray(baseOverride.files)
                ? baseOverride.files
                : [baseOverride.files];

            return inheritFromValues.every((inheritFromValue) =>
                baseFiles.includes(inheritFromValue)
            );
        });

        if (inheritedSourceOverride === undefined) {
            throw new Error(
                `Unable to inherit override options: no base override found for ${JSON.stringify(override.inheritFrom)}.`
            );
        }

        const normalizedExcludeFiles = Array.isArray(override.excludeFiles)
            ? [...override.excludeFiles]
            : override.excludeFiles;
        const normalizedFiles = Array.isArray(override.files)
            ? [...override.files]
            : override.files;
        const mergedOptions =
            override.options === undefined
                ? inheritedSourceOverride.options
                : {
                      ...inheritedSourceOverride.options,
                      ...override.options,
                  };

        return {
            files: normalizedFiles,
            ...(normalizedExcludeFiles === undefined
                ? {}
                : { excludeFiles: normalizedExcludeFiles }),
            ...(mergedOptions === undefined ? {} : { options: mergedOptions }),
        };
    });

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

const sharedPrettierConfig = createConfig();

export default sharedPrettierConfig;

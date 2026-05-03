/**
 * Prettier configuration for Nick2Bad4U's projects
 *
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://www.schemastore.org/prettierrc/
 */

/**
 * @typedef {{
 *     extensionlessIniFiles?: readonly string[];
 *     extensionlessJsonFiles?: readonly string[];
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

/**
 * Build a Prettier config with optional extensionless JSON and INI file
 * overrides.
 *
 * @type {(
 *     options?: Readonly<CreateConfigOptions>
 * ) => import("prettier").Config}
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types -- JS file uses JSDoc function typing instead of TS annotations.
export const createConfig = (options = {}) => {
    const {
        extensionlessIniFiles = [],
        extensionlessJsonFiles = [],
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
        overrides: [
            {
                files: [
                    "*.js",
                    "*.jsx",
                    "*.ts",
                    "*.tsx",
                    "*.mjs",
                    "*.cjs",
                ],
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
                    plugins: [
                        "@softonus/prettier-plugin-duplicate-remover",
                        "prettier-plugin-multiline-arrays",
                        "prettier-plugin-jsdoc",
                        "prettier-plugin-interpolated-html-tags",
                        "prettier-plugin-merge",
                    ],
                    tsdoc: true,
                    useTabs: false,
                },
            },
            {
                files: "tsconfig.*",
                options: {
                    endOfLine: "lf",
                    jsonRecursiveSort: false,
                    jsonSortOrder: '{"*": "numeric"}',
                    multilineArraysWrapThreshold: 2,
                    plugins: [
                        "prettier-plugin-sort-json",
                        "prettier-plugin-multiline-arrays",
                    ],
                    useTabs: false,
                },
            },
            {
                files: "*.html",
                options: {
                    htmlWhitespaceSensitivity: "strict",
                    plugins: ["@softonus/prettier-plugin-duplicate-remover"],
                    printWidth: 80,
                    singleAttributePerLine: true,
                    useTabs: false,
                },
            },
            {
                files: "*.user.js",
                options: {
                    endOfLine: "lf",
                    printWidth: 80,
                    useTabs: false,
                },
            },
            {
                files: "*.md",
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
                    plugins: ["prettier-plugin-jsdoc"],
                    tabWidth: 1,
                    useTabs: false,
                },
            },
            {
                files: "*.mdx",
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
                    plugins: ["prettier-plugin-jsdoc"],
                    printWidth: 100,
                    tabWidth: 2,
                    useTabs: false,
                },
            },
            {
                files: "*.toml",
                options: {
                    endOfLine: "lf",
                    plugins: ["prettier-plugin-toml"],
                    printWidth: 120,
                    tabWidth: 4,
                    useTabs: false,
                },
            },
            {
                files: [
                    "*.xml",
                    "*.xsd",
                    "*.xsl",
                    "*.xaml",
                ],
                options: {
                    endOfLine: "lf",
                    plugins: ["@prettier/plugin-xml"],
                    tabWidth: 2,
                    useTabs: false,
                },
            },
            {
                files: "*.php",
                options: {
                    endOfLine: "lf",
                    phpVersion: "auto",
                    plugins: ["@prettier/plugin-php"],
                    useTabs: false,
                },
            },
            {
                files: mergedExtensionlessJsonFiles,
                options: extensionlessJsonOptions,
            },
            {
                excludeFiles: ["**/package.json", "**/package-lock.json"],
                files: "*.json",
                options: {
                    endOfLine: "lf",
                    jsonRecursiveSort: false,
                    jsonSortOrder: '{"*": "numeric"}',
                    multilineArraysWrapThreshold: 2,
                    plugins: [
                        "prettier-plugin-sort-json",
                        "prettier-plugin-multiline-arrays",
                    ],
                    useTabs: false,
                },
            },
            {
                files: "*.sql",
                options: {
                    endOfLine: "lf",
                    language: "sqlite",
                    plugins: ["prettier-plugin-sql"],
                    useTabs: false,
                },
            },
            {
                files: [
                    "*.ps1",
                    "*.psm1",
                    "*.psd1",
                ],
                options: {
                    endOfLine: "lf",
                    plugins: ["prettier-plugin-powershell"],
                    useTabs: false,
                },
            },
            {
                files: ["CODEOWNERS", "**/CODEOWNERS"],
                options: {
                    endOfLine: "lf",
                    plugins: ["prettier-plugin-codeowners"],
                    useTabs: false,
                },
            },
            {
                files: "*.sh",
                options: {
                    endOfLine: "lf",
                    plugins: ["prettier-plugin-sh"],
                    useTabs: false,
                },
            },
            {
                files: "*.properties",
                options: {
                    endOfLine: "lf",
                    escapeNonLatin1: false,
                    plugins: ["prettier-plugin-properties"],
                    useTabs: false,
                },
            },
            {
                files: mergedExtensionlessIniFiles,
                options: extensionlessIniOptions,
            },
            {
                files: "*.ini",
                options: {
                    endOfLine: "lf",
                    iniSpaceAroundEquals: true,
                    plugins: ["prettier-plugin-ini"],
                    useTabs: false,
                },
            },
            {
                files: ["**/package.json", "**/package-lock.json"],
                options: {
                    endOfLine: "lf",
                    multilineArraysWrapThreshold: 2,
                    plugins: [
                        "prettier-plugin-packagejson",
                        "prettier-plugin-multiline-arrays",
                    ],
                    tabWidth: 4,
                    useTabs: false,
                },
            },
        ],
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

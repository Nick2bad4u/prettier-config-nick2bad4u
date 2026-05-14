import sharedPrettierConfig, {
    codeownersOverrideOptions as codeownersOverrideOptionsInternal,
    createConfig as createConfigInternal,
    defaultExtensionlessIniFiles as defaultExtensionlessIniFilesInternal,
    defaultExtensionlessJsonFiles as defaultExtensionlessJsonFilesInternal,
    extensionlessIniOptions as extensionlessIniOptionsInternal,
    extensionlessJsonOptions as extensionlessJsonOptionsInternal,
    htmlOverrideOptions as htmlOverrideOptionsInternal,
    iniOverrideOptions as iniOverrideOptionsInternal,
    jsonOverrideOptions as jsonOverrideOptionsInternal,
    markdownOverrideOptions as markdownOverrideOptionsInternal,
    mdxOverrideOptions as mdxOverrideOptionsInternal,
    packageJsonOverrideOptions as packageJsonOverrideOptionsInternal,
    phpOverrideOptions as phpOverrideOptionsInternal,
    powershellOverrideOptions as powershellOverrideOptionsInternal,
    propertiesOverrideOptions as propertiesOverrideOptionsInternal,
    shellOverrideOptions as shellOverrideOptionsInternal,
    sqlOverrideOptions as sqlOverrideOptionsInternal,
    tomlOverrideOptions as tomlOverrideOptionsInternal,
    typescriptOverrideOptions as typescriptOverrideOptionsInternal,
    userJavaScriptOverrideOptions as userJavaScriptOverrideOptionsInternal,
    xmlOverrideOptions as xmlOverrideOptionsInternal,
} from "./prettier.config.mjs";

/** Named export — use when you want to spread or inspect individual options. */
export const config = Object.freeze(sharedPrettierConfig);

/**
 * Build a config with merged/replaced extensionless JSON/INI override globs.
 *
 * @type {(
 *     options?: Readonly<{
 *         extensionlessIniFiles?: readonly string[];
 *         extensionlessJsonFiles?: readonly string[];
 *         inheritedOverrides?: ReadonlyArray<{
 *             files: string | string[];
 *             inheritFrom: string | string[];
 *             excludeFiles?: string | string[];
 *             options?: Readonly<Partial<import("prettier").Config>>;
 *         }>;
 *         replaceDefaultExtensionlessIniFiles?: boolean;
 *         replaceDefaultExtensionlessJsonFiles?: boolean;
 *     }>
 * ) => import("prettier").Config}
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types -- JSDoc return typing is used for this JS module API.
export const createConfig = (options = {}) => createConfigInternal(options);

/** Default extensionless INI-like globs used by this shared configuration. */
export const defaultExtensionlessIniFiles = Object.freeze([
    ...defaultExtensionlessIniFilesInternal,
]);

/** Default extensionless JSON-like globs used by this shared configuration. */
export const defaultExtensionlessJsonFiles = Object.freeze([
    ...defaultExtensionlessJsonFilesInternal,
]);

/** Shared option preset used for extensionless INI-like override blocks. */
export const extensionlessIniOptions = Object.freeze({
    ...extensionlessIniOptionsInternal,
});

/** Shared option preset used for extensionless JSON-like override blocks. */
export const extensionlessJsonOptions = Object.freeze({
    ...extensionlessJsonOptionsInternal,
});

/** Shared option preset used by the primary JS/TS override block. */
export const typescriptOverrideOptions = Object.freeze({
    ...typescriptOverrideOptionsInternal,
});

/** Shared option preset used by the generic JSON override block. */
export const jsonOverrideOptions = Object.freeze({
    ...jsonOverrideOptionsInternal,
});

/** Shared option preset used by the package.json/package-lock override block. */
export const packageJsonOverrideOptions = Object.freeze({
    ...packageJsonOverrideOptionsInternal,
});

/** Shared option preset used by HTML override blocks. */
export const htmlOverrideOptions = Object.freeze({
    ...htmlOverrideOptionsInternal,
});

/** Shared option preset used by *.user.js override blocks. */
export const userJavaScriptOverrideOptions = Object.freeze({
    ...userJavaScriptOverrideOptionsInternal,
});

/** Shared option preset used by Markdown override blocks. */
export const markdownOverrideOptions = Object.freeze({
    ...markdownOverrideOptionsInternal,
});

/** Shared option preset used by MDX override blocks. */
export const mdxOverrideOptions = Object.freeze({
    ...mdxOverrideOptionsInternal,
});

/** Shared option preset used by TOML override blocks. */
export const tomlOverrideOptions = Object.freeze({
    ...tomlOverrideOptionsInternal,
});

/** Shared option preset used by XML-family override blocks. */
export const xmlOverrideOptions = Object.freeze({
    ...xmlOverrideOptionsInternal,
});

/** Shared option preset used by PHP override blocks. */
export const phpOverrideOptions = Object.freeze({
    ...phpOverrideOptionsInternal,
});

/** Shared option preset used by SQL override blocks. */
export const sqlOverrideOptions = Object.freeze({
    ...sqlOverrideOptionsInternal,
});

/** Shared option preset used by PowerShell override blocks. */
export const powershellOverrideOptions = Object.freeze({
    ...powershellOverrideOptionsInternal,
});

/** Shared option preset used by CODEOWNERS override blocks. */
export const codeownersOverrideOptions = Object.freeze({
    ...codeownersOverrideOptionsInternal,
});

/** Shared option preset used by shell script override blocks. */
export const shellOverrideOptions = Object.freeze({
    ...shellOverrideOptionsInternal,
});

/** Shared option preset used by .properties override blocks. */
export const propertiesOverrideOptions = Object.freeze({
    ...propertiesOverrideOptionsInternal,
});

/** Shared option preset used by .ini override blocks. */
export const iniOverrideOptions = Object.freeze({
    ...iniOverrideOptionsInternal,
});

/**
 * Default export — distinct binding so consuming projects don't trigger
 * `import-x/no-named-as-default` when they write `import prettierConfig from
 * "prettier-config-nick2bad4u"`.
 */
const prettierConfig = config;
export default prettierConfig;

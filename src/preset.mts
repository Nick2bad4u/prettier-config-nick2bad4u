import type { Config } from "prettier";

import sharedPrettierConfig, {
    astroOverrideOptions as astroOverrideOptionsInternal,
    codeownersOverrideOptions as codeownersOverrideOptionsInternal,
    createConfig as createConfigInternal,
    defaultExtensionlessIniFiles as defaultExtensionlessIniFilesInternal,
    defaultExtensionlessJsonFiles as defaultExtensionlessJsonFilesInternal,
    extensionlessIniOptions as extensionlessIniOptionsInternal,
    extensionlessJsonOptions as extensionlessJsonOptionsInternal,
    htmlOverrideOptions as htmlOverrideOptionsInternal,
    iniOverrideOptions as iniOverrideOptionsInternal,
    type CreateConfigOptions as InternalCreateConfigOptions,
    type InheritedOverrideConfig as InternalInheritedOverrideConfig,
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
    yamlOverrideOptions as yamlOverrideOptionsInternal,
} from "./prettier.config.mjs";

/** Options for building a customized shared Prettier configuration. */
export type CreateConfigOptions = InternalCreateConfigOptions;

/**
 * Configuration for appending an override that inherits from an existing base
 * override.
 */
export type InheritedOverrideConfig = InternalInheritedOverrideConfig;

type PublicPrettierOptions = Readonly<Partial<Config>>;

/** Named export — use when you want to spread or inspect individual options. */
export const config: Readonly<Config> = Object.freeze(sharedPrettierConfig);

/**
 * Build a config with merged/replaced extensionless JSON/INI override globs.
 */
export const createConfig = (
    options: Readonly<CreateConfigOptions> = {}
): Config => createConfigInternal(options);

/** Default extensionless INI-like globs used by this shared configuration. */
export const defaultExtensionlessIniFiles: readonly string[] = Object.freeze([
    ...defaultExtensionlessIniFilesInternal,
]);

/** Default extensionless JSON-like globs used by this shared configuration. */
export const defaultExtensionlessJsonFiles: readonly string[] = Object.freeze([
    ...defaultExtensionlessJsonFilesInternal,
]);

/** Shared option preset used for extensionless INI-like override blocks. */
export const extensionlessIniOptions: PublicPrettierOptions = Object.freeze({
    ...extensionlessIniOptionsInternal,
});

/** Shared option preset used for extensionless JSON-like override blocks. */
export const extensionlessJsonOptions: PublicPrettierOptions = Object.freeze({
    ...extensionlessJsonOptionsInternal,
});

/** Shared option preset used by the primary JS/TS override block. */
export const typescriptOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...typescriptOverrideOptionsInternal,
});

/** Shared option preset used by the generic JSON override block. */
export const jsonOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...jsonOverrideOptionsInternal,
});

/** Shared option preset used by the package.json/package-lock override block. */
export const packageJsonOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...packageJsonOverrideOptionsInternal,
});

/** Shared option preset used by HTML override blocks. */
export const htmlOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...htmlOverrideOptionsInternal,
});

/** Shared option preset used by *.user.js override blocks. */
export const userJavaScriptOverrideOptions: PublicPrettierOptions =
    Object.freeze({
        ...userJavaScriptOverrideOptionsInternal,
    });

/** Shared option preset used by Markdown override blocks. */
export const markdownOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...markdownOverrideOptionsInternal,
});

/** Shared option preset used by MDX override blocks. */
export const mdxOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...mdxOverrideOptionsInternal,
});

/** Shared option preset used by Astro override blocks. */
export const astroOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...astroOverrideOptionsInternal,
});

/** Shared option preset used by YAML override blocks. */
export const yamlOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...yamlOverrideOptionsInternal,
});

/** Shared option preset used by TOML override blocks. */
export const tomlOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...tomlOverrideOptionsInternal,
});

/** Shared option preset used by XML-family override blocks. */
export const xmlOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...xmlOverrideOptionsInternal,
});

/** Shared option preset used by PHP override blocks. */
export const phpOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...phpOverrideOptionsInternal,
});

/** Shared option preset used by SQL override blocks. */
export const sqlOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...sqlOverrideOptionsInternal,
});

/** Shared option preset used by PowerShell override blocks. */
export const powershellOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...powershellOverrideOptionsInternal,
});

/** Shared option preset used by CODEOWNERS override blocks. */
export const codeownersOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...codeownersOverrideOptionsInternal,
});

/** Shared option preset used by shell script override blocks. */
export const shellOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...shellOverrideOptionsInternal,
});

/** Shared option preset used by .properties override blocks. */
export const propertiesOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...propertiesOverrideOptionsInternal,
});

/** Shared option preset used by .ini override blocks. */
export const iniOverrideOptions: PublicPrettierOptions = Object.freeze({
    ...iniOverrideOptionsInternal,
});

/**
 * Default export — distinct binding so consuming projects don't trigger
 * import/default lint noise when consumers import the package default.
 */
const prettierConfig: Readonly<Config> = config;
export default prettierConfig;

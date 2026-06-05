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
    excludeFiles?: string | string[];
    /** File pattern(s) for the new inherited override to target. */
    files: string | string[];
    /**
     * Existing base override file pattern(s) to inherit options from (for
     * example "*.ts").
     */
    inheritFrom: string | string[];
    /**
     * Additional override options merged on top of the inherited source
     * options.
     */
    options?: Readonly<Partial<Config>>;
}

/** Named export — use when you want to spread or inspect individual options. */
export declare const config: Readonly<Config>;

/** Default extensionless INI-like globs used by this shared configuration. */
export declare const defaultExtensionlessIniFiles: readonly string[];
/** Default extensionless JSON-like globs used by this shared configuration. */
export declare const defaultExtensionlessJsonFiles: readonly string[];
/** Shared option preset used for extensionless INI-like override blocks. */
export declare const extensionlessIniOptions: Readonly<Partial<Config>>;
/** Shared option preset used for extensionless JSON-like override blocks. */
export declare const extensionlessJsonOptions: Readonly<Partial<Config>>;
/** Shared option preset used by the primary JS/TS override block. */
export declare const typescriptOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by the generic JSON override block. */
export declare const jsonOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by the package.json/package-lock override block. */
export declare const packageJsonOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by HTML override blocks. */
export declare const htmlOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by *.user.js override blocks. */
export declare const userJavaScriptOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by Markdown override blocks. */
export declare const markdownOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by MDX override blocks. */
export declare const mdxOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by Astro override blocks. */
export declare const astroOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by YAML override blocks. */
export declare const yamlOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by TOML override blocks. */
export declare const tomlOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by XML-family override blocks. */
export declare const xmlOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by PHP override blocks. */
export declare const phpOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by SQL override blocks. */
export declare const sqlOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by PowerShell override blocks. */
export declare const powershellOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by CODEOWNERS override blocks. */
export declare const codeownersOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by shell script override blocks. */
export declare const shellOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by .properties override blocks. */
export declare const propertiesOverrideOptions: Readonly<Partial<Config>>;
/** Shared option preset used by .ini override blocks. */
export declare const iniOverrideOptions: Readonly<Partial<Config>>;

/** Build a shared config with merged or replaced extensionless override globs. */
export declare function createConfig(
    options?: Readonly<CreateConfigOptions>
): Config;

/**
 * Default export (bound as `prettierConfig`) — use this form to avoid
 * triggering `import-x/no-named-as-default` in consuming projects:
 *
 * ```js
 * import prettierConfig from "prettier-config-nick2bad4u";
 * ```
 */
declare const prettierConfig: Readonly<Config>;
export default prettierConfig;

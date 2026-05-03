import type { Config } from "prettier";

/** Options for building a customized shared Prettier configuration. */
export interface CreateConfigOptions {
    /** Additional extensionless INI-like file globs to include. */
    extensionlessIniFiles?: readonly string[];
    /** Additional extensionless JSON-like file globs to include. */
    extensionlessJsonFiles?: readonly string[];
    /** Replace default INI-like globs instead of merging with them. */
    replaceDefaultExtensionlessIniFiles?: boolean;
    /** Replace default JSON-like globs instead of merging with them. */
    replaceDefaultExtensionlessJsonFiles?: boolean;
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

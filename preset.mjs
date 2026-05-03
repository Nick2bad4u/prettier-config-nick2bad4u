import sharedPrettierConfig, {
    createConfig as createConfigInternal,
    defaultExtensionlessIniFiles as defaultExtensionlessIniFilesInternal,
    defaultExtensionlessJsonFiles as defaultExtensionlessJsonFilesInternal,
    extensionlessIniOptions as extensionlessIniOptionsInternal,
    extensionlessJsonOptions as extensionlessJsonOptionsInternal,
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
 *         replaceDefaultExtensionlessIniFiles?: boolean;
 *         replaceDefaultExtensionlessJsonFiles?: boolean;
 *     }>
 * ) => import("prettier").Config}
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types -- JS file uses explicit JSDoc function typing.
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

/**
 * Default export — distinct binding so consuming projects don't trigger
 * `import-x/no-named-as-default` when they write `import prettierConfig from
 * "prettier-config-nick2bad4u"`.
 */
const prettierConfig = config;
export default prettierConfig;

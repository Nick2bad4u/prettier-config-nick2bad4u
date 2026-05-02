import type { Config } from "prettier";

/** Named export — use when you want to spread or inspect individual options. */
export declare const config: Readonly<Config>;

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

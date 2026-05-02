import sharedPrettierConfig from "./.prettierrc.json" with { type: "json" };

/** Named export — use when you want to spread or inspect individual options. */
export const config = Object.freeze(sharedPrettierConfig);

/**
 * Default export — distinct binding so consuming projects don't trigger
 * `import-x/no-named-as-default` when they write
 * `import prettierConfig from "prettier-config-nick2bad4u"`.
 */
const prettierConfig = config;
export default prettierConfig;

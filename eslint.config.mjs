import nickTwoBadFourU from "eslint-config-nick2bad4u";

/** @type {import("eslint").Linter.Config[]} */
const config = [
    {
        ignores: [
            "index.d.ts",
            "preset.mjs",
            "prettier.config.d.mts",
            "prettier.config.mjs",
        ],
    },
    ...nickTwoBadFourU.configs.all,

    // Add repository-specific config entries below as needed.
];

export default config;

import prettierConfig, {
    config,
    createConfig,
    defaultExtensionlessIniFiles,
    defaultExtensionlessJsonFiles,
    extensionlessIniOptions,
    extensionlessJsonOptions,
} from "prettier-config-nick2bad4u";
import { describe, expect, it } from "vitest";

describe("prettier-config-nick2bad4u", () => {
    it("exports the same config as default and named export", () => {
        expect.assertions(2);

        expect(prettierConfig).toBe(config);
        expect(createConfig()).toStrictEqual(config);
    });

    it("exports reusable extensionless file defaults and option presets", () => {
        expect.assertions(9);

        expect(defaultExtensionlessJsonFiles).toContain(
            "**/.all-contributorsrc"
        );
        expect(defaultExtensionlessJsonFiles).toContain("**/.djlintrc");
        expect(defaultExtensionlessJsonFiles).toContain("**/.hintrc");
        expect(defaultExtensionlessJsonFiles).toContain("**/.madgerc");
        expect(defaultExtensionlessIniFiles).toContain("**/.editorconfig");
        expect(defaultExtensionlessIniFiles).toContain("**/.gitconfig");
        expect(defaultExtensionlessIniFiles).not.toContain("**/.browserlistrc");
        expect(extensionlessIniOptions.parser).toBe("ini");
        expect(extensionlessJsonOptions.parser).toBe("json");
    });

    it("exposes expected top-level formatting options", () => {
        expect.assertions(4);

        expect(config.printWidth).toBe(80);
        expect(config.semi).toBeTruthy();
        expect(config.trailingComma).toBe("es5");
        expect(config.singleQuote).toBeFalsy();
    });

    it("contains plugin-backed overrides for common file types", () => {
        expect.assertions(7);

        const overrideFiles = (config.overrides ?? []).map((override) =>
            JSON.stringify(override.files)
        );

        expect(
            overrideFiles.some((files) => files.includes("*.md"))
        ).toBeTruthy();
        expect(
            overrideFiles.some((files) => files.includes("*.json"))
        ).toBeTruthy();
        expect(
            overrideFiles.some((files) => files.includes("*.toml"))
        ).toBeTruthy();
        expect(
            overrideFiles.some((files) => files.includes("*.sh"))
        ).toBeTruthy();
        expect(
            overrideFiles.some((files) => files.includes("*.php"))
        ).toBeTruthy();
        expect(
            overrideFiles.some((files) => files.includes("CODEOWNERS"))
        ).toBeTruthy();
        expect(
            overrideFiles.some((files) => files.includes(".all-contributorsrc"))
        ).toBeTruthy();
    });

    it("configures plugin-specific options only where they add value", () => {
        expect.assertions(19);

        const jsOverride = (config.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("*.ts") &&
                override.files.includes("*.mjs")
        );
        const phpOverride = (config.overrides ?? []).find(
            (override) => override.files === "*.php"
        );
        const jsonOverride = (config.overrides ?? []).find(
            (override) => override.files === "*.json"
        );
        const extensionlessJsonOverride = (config.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("**/.all-contributorsrc") &&
                override.files.includes("**/.madgerc")
        );
        const extensionlessIniOverride = (config.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("**/.editorconfig") &&
                override.files.includes("**/.gitconfig")
        );
        const codeownersOverride = (config.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("CODEOWNERS") &&
                override.files.includes("**/CODEOWNERS")
        );
        const packageJsonOverride = (config.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("**/package.json") &&
                override.files.includes("**/package-lock.json")
        );

        expect(config.plugins).toBeUndefined();
        expect(config["multilineArraysWrapThreshold"]).toBeUndefined();
        expect(jsOverride?.options?.plugins).toContain(
            "prettier-plugin-multiline-arrays"
        );
        expect(jsOverride?.options?.["multilineArraysWrapThreshold"]).toBe(2);
        expect(jsonOverride?.options?.plugins).toContain(
            "prettier-plugin-multiline-arrays"
        );
        expect(jsonOverride?.options?.["multilineArraysWrapThreshold"]).toBe(2);
        expect(jsonOverride?.excludeFiles).toStrictEqual([
            "**/package.json",
            "**/package-lock.json",
        ]);
        expect(extensionlessJsonOverride?.options?.parser).toBe("json");
        expect(extensionlessJsonOverride?.options?.plugins).toContain(
            "prettier-plugin-sort-json"
        );
        expect(
            extensionlessJsonOverride?.options?.["multilineArraysWrapThreshold"]
        ).toBe(2);
        expect(extensionlessIniOverride?.options?.parser).toBe("ini");
        expect(extensionlessIniOverride?.options?.plugins).toStrictEqual([
            "prettier-plugin-ini",
        ]);
        expect(extensionlessIniOverride?.files).not.toContain(
            "**/.browserlistrc"
        );
        expect(phpOverride?.options?.["phpVersion"]).toBe("auto");
        expect(phpOverride?.options?.plugins).toStrictEqual([
            "@prettier/plugin-php",
        ]);
        expect(codeownersOverride?.options?.plugins).toStrictEqual([
            "prettier-plugin-codeowners",
        ]);
        expect(packageJsonOverride?.files).toStrictEqual([
            "**/package.json",
            "**/package-lock.json",
        ]);
        expect(packageJsonOverride?.options?.plugins).toContain(
            "prettier-plugin-packagejson"
        );
        expect(codeownersOverride?.options?.endOfLine).toBe("lf");
    });

    it("lets consumers merge or replace extensionless file defaults", () => {
        expect.assertions(6);

        const mergedConfig = createConfig({
            extensionlessIniFiles: ["**/.npmrc-local"],
            extensionlessJsonFiles: ["**/.my-json-rc"],
        });
        const replacedConfig = createConfig({
            extensionlessIniFiles: ["**/.custom-ini-rc"],
            extensionlessJsonFiles: ["**/.custom-json-rc"],
            replaceDefaultExtensionlessIniFiles: true,
            replaceDefaultExtensionlessJsonFiles: true,
        });
        const mergedJsonOverride = (mergedConfig.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("**/.my-json-rc")
        );
        const mergedIniOverride = (mergedConfig.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("**/.npmrc-local")
        );
        const replacedJsonOverride = (replacedConfig.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("**/.custom-json-rc")
        );
        const replacedIniOverride = (replacedConfig.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("**/.custom-ini-rc")
        );

        expect(mergedJsonOverride?.files).toContain("**/.all-contributorsrc");
        expect(mergedJsonOverride?.files).toContain("**/.my-json-rc");
        expect(mergedIniOverride?.files).toContain("**/.editorconfig");
        expect(mergedIniOverride?.files).toContain("**/.npmrc-local");
        expect(replacedJsonOverride?.files).toStrictEqual([
            "**/.custom-json-rc",
        ]);
        expect(replacedIniOverride?.files).toStrictEqual(["**/.custom-ini-rc"]);
    });
});

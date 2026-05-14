import prettierConfig, {
    codeownersOverrideOptions,
    config,
    createConfig,
    defaultExtensionlessIniFiles,
    defaultExtensionlessJsonFiles,
    extensionlessIniOptions,
    extensionlessJsonOptions,
    htmlOverrideOptions,
    iniOverrideOptions,
    jsonOverrideOptions,
    markdownOverrideOptions,
    mdxOverrideOptions,
    packageJsonOverrideOptions,
    phpOverrideOptions,
    powershellOverrideOptions,
    propertiesOverrideOptions,
    shellOverrideOptions,
    sqlOverrideOptions,
    tomlOverrideOptions,
    typescriptOverrideOptions,
    userJavaScriptOverrideOptions,
    xmlOverrideOptions,
} from "prettier-config-nick2bad4u";
import { describe, expect, it } from "vitest";

describe("prettier-config-nick2bad4u", () => {
    it("exports the same config as default and named export", () => {
        expect.assertions(2);

        expect(prettierConfig).toBe(config);
        expect(createConfig()).toStrictEqual(config);
    });

    it("exports reusable extensionless file defaults", () => {
        expect.assertions(7);

        expect(defaultExtensionlessJsonFiles).toContain(
            "**/.all-contributorsrc"
        );
        expect(defaultExtensionlessJsonFiles).toContain("**/.djlintrc");
        expect(defaultExtensionlessJsonFiles).toContain("**/.hintrc");
        expect(defaultExtensionlessJsonFiles).toContain("**/.madgerc");
        expect(defaultExtensionlessIniFiles).toContain("**/.editorconfig");
        expect(defaultExtensionlessIniFiles).toContain("**/.gitconfig");
        expect(defaultExtensionlessIniFiles).not.toContain("**/.browserlistrc");
    });

    it("exports reusable override option presets", () => {
        expect.assertions(20);

        expect(extensionlessIniOptions.parser).toBe("ini");
        expect(extensionlessJsonOptions.parser).toBe("json");
        expect(typescriptOverrideOptions.plugins).toContain(
            "prettier-plugin-merge"
        );
        expect(typescriptOverrideOptions["multilineArraysWrapThreshold"]).toBe(
            2
        );
        expect(jsonOverrideOptions.plugins).toContain(
            "prettier-plugin-sort-json"
        );
        expect(jsonOverrideOptions["jsonRecursiveSort"]).toBeFalsy();
        expect(packageJsonOverrideOptions.plugins).toContain(
            "prettier-plugin-packagejson"
        );
        expect(htmlOverrideOptions.plugins).toContain(
            "@softonus/prettier-plugin-duplicate-remover"
        );
        expect(userJavaScriptOverrideOptions.printWidth).toBe(80);
        expect(markdownOverrideOptions.plugins).toContain(
            "prettier-plugin-jsdoc"
        );
        expect(mdxOverrideOptions.printWidth).toBe(100);
        expect(tomlOverrideOptions.plugins).toContain("prettier-plugin-toml");
        expect(xmlOverrideOptions.plugins).toContain("@prettier/plugin-xml");
        expect(phpOverrideOptions.plugins).toContain("@prettier/plugin-php");
        expect(sqlOverrideOptions.plugins).toContain("prettier-plugin-sql");
        expect(powershellOverrideOptions.plugins).toContain(
            "prettier-plugin-powershell"
        );
        expect(codeownersOverrideOptions.plugins).toContain(
            "prettier-plugin-codeowners"
        );
        expect(shellOverrideOptions.plugins).toContain("prettier-plugin-sh");
        expect(propertiesOverrideOptions.plugins).toContain(
            "prettier-plugin-properties"
        );
        expect(iniOverrideOptions.plugins).toContain("prettier-plugin-ini");
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

    it("lets consumers inherit an existing override and customize only deltas", () => {
        expect.assertions(8);

        const inheritedConfig = createConfig({
            inheritedOverrides: [
                {
                    files: "src/shared-config.ts",
                    inheritFrom: "*.ts",
                    options: {
                        printWidth: 140,
                    },
                },
            ],
        });
        const inheritedTsFileOverride = (inheritedConfig.overrides ?? []).find(
            (override) => override.files === "src/shared-config.ts"
        );

        expect(inheritedTsFileOverride).toBeDefined();
        expect(inheritedTsFileOverride?.options?.printWidth).toBe(140);
        expect(inheritedTsFileOverride?.options?.plugins).toContain(
            "prettier-plugin-multiline-arrays"
        );
        expect(inheritedTsFileOverride?.options?.plugins).toContain(
            "prettier-plugin-merge"
        );
        expect(
            inheritedTsFileOverride?.options?.["multilineArraysWrapThreshold"]
        ).toBe(2);
        expect(inheritedTsFileOverride?.options?.["tsdoc"]).toBeTruthy();
        expect(inheritedTsFileOverride?.options?.useTabs).toBeFalsy();
        expect(inheritedTsFileOverride?.options?.endOfLine).toBe("lf");
    });

    it("throws an explicit error when inherited override source cannot be found", () => {
        expect.assertions(1);

        expect(() => {
            createConfig({
                inheritedOverrides: [
                    {
                        files: "src/whatever.ts",
                        inheritFrom: "*.definitely-not-a-base-override",
                    },
                ],
            });
        }).toThrow(
            'Unable to inherit override options: no base override found for "*.definitely-not-a-base-override".'
        );
    });
});

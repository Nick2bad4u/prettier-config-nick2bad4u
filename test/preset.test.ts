import { readdir, readFile } from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import prettier, { type Config } from "prettier";
import prettierConfig, {
    astroOverrideOptions,
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
    yamlOverrideOptions,
} from "prettier-config-nick2bad4u";
import { describe, expect, it } from "vitest";

type PrettierOverride = NonNullable<Config["overrides"]>[number];

const fixtureDirectoryPath = fileURLToPath(
    new URL("fixtures/formatting/", import.meta.url)
);
const generatedPrettierConfigPath = fileURLToPath(
    new URL("../prettier.config.mjs", import.meta.url)
);

const formattingFixtureFileNames = [
    ".all-contributorsrc",
    ".bash_logout",
    ".bash_profile",
    ".bashrc",
    ".clang-format",
    ".clang-tidy",
    ".clangd",
    ".djlintrc",
    ".editorconfig",
    ".gitconfig",
    ".hintrc",
    ".htmlhintrc",
    ".madgerc",
    ".yamlfmt",
    ".yamllint",
    ".yamllint.yaml",
    ".yamllint.yml",
    ".zshenv",
    ".zshrc",
    "CODEOWNERS",
    "package-lock.json",
    "package.json",
    "sample.astro",
    "sample.bash",
    "sample.cjs",
    "sample.cts",
    "sample.html",
    "sample.ini",
    "sample.js",
    "sample.json",
    "sample.jsx",
    "sample.md",
    "sample.mdx",
    "sample.mjs",
    "sample.mts",
    "sample.php",
    "sample.properties",
    "sample.ps1",
    "sample.psd1",
    "sample.psm1",
    "sample.sh",
    "sample.sh.in",
    "sample.sql",
    "sample.toml",
    "sample.ts",
    "sample.tsx",
    "sample.user.js",
    "sample.xaml",
    "sample.xml",
    "sample.xsd",
    "sample.xsl",
    "sample.yaml",
    "sample.yml",
    "sample.zsh",
    "sample.zsh-theme",
] as const;

const overrideHasFiles = (
    override: PrettierOverride,
    files: readonly string[]
) =>
    Array.isArray(override.files) &&
    files.every((file) => override.files.includes(file));

const findOverrideWithFiles = (files: readonly string[]) =>
    (config.overrides ?? []).find((override) =>
        overrideHasFiles(override, files)
    );

const findOverrideForFile = (file: string) =>
    (config.overrides ?? []).find((override) => override.files === file);

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
        expect(jsonOverrideOptions["jsonRecursiveSort"]).toBe(false);
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

    it("locks supported language-plugin formatting options", () => {
        expect.assertions(19);

        expect(tomlOverrideOptions["alignEntries"]).toBe(true);
        expect(tomlOverrideOptions["compactArrays"]).toBe(false);
        expect(tomlOverrideOptions["indentEntries"]).toBe(true);
        expect(tomlOverrideOptions["indentTables"]).toBe(true);
        expect(tomlOverrideOptions.printWidth).toBe(120);
        expect(tomlOverrideOptions["reorderKeys"]).toBe(false);
        expect(tomlOverrideOptions.trailingComma).toBe("none");
        expect(xmlOverrideOptions["xmlQuoteAttributes"]).toBe("preserve");
        expect(xmlOverrideOptions["xmlSortAttributesByKey"]).toBe(false);
        expect(xmlOverrideOptions["xmlWhitespaceSensitivity"]).toBe("strict");
        expect(phpOverrideOptions["braceStyle"]).toBe("per-cs");
        expect(phpOverrideOptions["trailingCommaPHP"]).toBe(true);
        expect(powershellOverrideOptions["powershellKeywordCase"]).toBe(
            "lower"
        );
        expect(powershellOverrideOptions["powershellPreset"]).toBe(
            "invoke-formatter"
        );
        expect(powershellOverrideOptions["powershellRewriteAliases"]).toBe(
            false
        );
        expect(shellOverrideOptions["indent"]).toBe(4);
        expect(shellOverrideOptions["switchCaseIndent"]).toBe(true);
        expect(extensionlessIniOptions["iniSpaceAroundEquals"]).toBe(true);
        expect(iniOverrideOptions["iniSpaceAroundEquals"]).toBe(true);
    });

    it("locks stable SQL plugin formatting options", () => {
        expect.assertions(6);

        expect(sqlOverrideOptions["formatter"]).toBe("sql-formatter");
        expect(sqlOverrideOptions["keywordCase"]).toBe("preserve");
        expect(sqlOverrideOptions["language"]).toBe("sqlite");
        expect(sqlOverrideOptions["identifierCase"]).toBe("preserve");
        expect(sqlOverrideOptions["indentStyle"]).toBe("standard");
        expect(sqlOverrideOptions["newlineBeforeSemicolon"]).toBe(false);
    });

    it("locks safe YAML plugin formatting options", () => {
        expect.assertions(6);

        expect(yamlOverrideOptions.parser).toBe("yaml");
        expect(yamlOverrideOptions.tabWidth).toBe(4);
        expect(yamlOverrideOptions["yamlQuoteKeys"]).toBe(false);
        expect(yamlOverrideOptions["yamlQuoteValues"]).toBe(true);
        expect(yamlOverrideOptions["yamlQuoteValuesMatching"]).toBe(
            "^(?:yes|no|on|off)$"
        );
        expect(yamlOverrideOptions.plugins).toStrictEqual([
            "prettier-plugin-yaml",
        ]);
    });

    it("locks Astro plugin formatting options", () => {
        expect.assertions(5);

        expect(astroOverrideOptions.parser).toBe("astro");
        expect(astroOverrideOptions.plugins).toStrictEqual([
            "prettier-plugin-astro",
        ]);
        expect(astroOverrideOptions.printWidth).toBe(100);
        expect(astroOverrideOptions.tabWidth).toBe(4);
        expect(astroOverrideOptions.useTabs).toBe(false);
    });

    it("formats Astro files with the Astro parser only in Astro overrides", async () => {
        expect.assertions(1);

        await expect(
            prettier.format("<h1>{title}</h1>\n", {
                ...astroOverrideOptions,
                filepath: "sample.astro",
            })
        ).resolves.toBe("<h1>{title}</h1>\n");
    });

    it("formats YAML with quoted keys and string values", async () => {
        expect.assertions(1);

        await expect(
            prettier.format("name: test\nenabled: true\ncount: 2\n", {
                ...yamlOverrideOptions,
                filepath: "sample.yml",
            })
        ).resolves.toBe('name: "test"\nenabled: true\ncount: 2\n');
    });

    it("exposes expected top-level formatting options", () => {
        expect.assertions(4);

        expect(config.printWidth).toBe(80);
        expect(config.semi).toBe(true);
        expect(config.trailingComma).toBe("es5");
        expect(config.singleQuote).toBe(false);
    });

    it("contains plugin-backed overrides for common file types", () => {
        expect.assertions(12);

        const overrideFiles = (config.overrides ?? []).map((override) =>
            JSON.stringify(override.files)
        );

        expect(overrideFiles.some((files) => files.includes("*.md"))).toBe(
            true
        );
        expect(overrideFiles.some((files) => files.includes("*.json"))).toBe(
            true
        );
        expect(overrideFiles.some((files) => files.includes("*.toml"))).toBe(
            true
        );
        expect(overrideFiles.some((files) => files.includes("*.astro"))).toBe(
            true
        );
        expect(overrideFiles.some((files) => files.includes(".yamllint"))).toBe(
            true
        );
        expect(
            overrideFiles.some((files) => files.includes(".clang-format"))
        ).toBe(true);
        expect(overrideFiles.some((files) => files.includes("*.sh"))).toBe(
            true
        );
        expect(overrideFiles.some((files) => files.includes("*.bash"))).toBe(
            true
        );
        expect(
            overrideFiles.some((files) => files.includes("**/.bashrc"))
        ).toBe(true);
        expect(overrideFiles.some((files) => files.includes("*.php"))).toBe(
            true
        );
        expect(
            overrideFiles.some((files) => files.includes("CODEOWNERS"))
        ).toBe(true);
        expect(
            overrideFiles.some((files) => files.includes(".all-contributorsrc"))
        ).toBe(true);
    });

    it("configures JavaScript and JSON plugin options only where they add value", () => {
        expect.assertions(8);

        const jsOverride = findOverrideWithFiles(["*.ts", "*.mjs"]);
        const jsonOverride = findOverrideForFile("*.json");
        const packageJsonOverride = findOverrideWithFiles([
            "**/package.json",
            "**/package-lock.json",
        ]);

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
        expect(packageJsonOverride?.files).toStrictEqual([
            "**/package.json",
            "**/package-lock.json",
        ]);
    });

    it("keeps formatting fixtures idempotent for every supported file family", async () => {
        expect.assertions(56);

        const actualFixtureFileNames = await readdir(fixtureDirectoryPath);

        expect(new Set(actualFixtureFileNames)).toStrictEqual(
            new Set(formattingFixtureFileNames)
        );

        await Promise.all(
            formattingFixtureFileNames.map(async (fixtureFileName) => {
                const fixturePath = path.join(
                    fixtureDirectoryPath,
                    fixtureFileName
                );
                const source = await readFile(fixturePath, "utf8");
                const resolvedConfig = await prettier.resolveConfig(
                    fixturePath,
                    {
                        config: generatedPrettierConfigPath,
                    }
                );

                if (resolvedConfig === null) {
                    throw new Error(
                        `Unable to resolve generated Prettier config for ${fixtureFileName}.`
                    );
                }

                const formatted = await prettier.format(source, {
                    ...resolvedConfig,
                    filepath: fixturePath,
                });

                expect(formatted).toBe(source);
            })
        );
    });

    it("configures extensionless file plugin options only where they add value", () => {
        expect.assertions(6);

        const extensionlessJsonOverride = findOverrideWithFiles([
            "**/.all-contributorsrc",
            "**/.madgerc",
        ]);
        const extensionlessIniOverride = findOverrideWithFiles([
            "**/.editorconfig",
            "**/.gitconfig",
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
    });

    it("configures remaining plugin-specific options only where they add value", () => {
        expect.assertions(6);

        const phpOverride = findOverrideForFile("*.php");
        const codeownersOverride = findOverrideWithFiles([
            "CODEOWNERS",
            "**/CODEOWNERS",
        ]);
        const packageJsonOverride = findOverrideWithFiles([
            "**/package.json",
            "**/package-lock.json",
        ]);

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

        expect(inheritedTsFileOverride?.files).toBe("src/shared-config.ts");
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
        expect(inheritedTsFileOverride?.options?.["tsdoc"]).toBe(true);
        expect(inheritedTsFileOverride?.options?.useTabs).toBe(false);
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

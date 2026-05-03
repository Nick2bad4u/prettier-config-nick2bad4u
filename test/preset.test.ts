import prettierConfig, { config } from "prettier-config-nick2bad4u";
import { describe, expect, it } from "vitest";

describe("prettier-config-nick2bad4u", () => {
    it("exports the same config as default and named export", () => {
        expect.assertions(1);

        expect(prettierConfig).toBe(config);
    });

    it("exposes expected top-level formatting options", () => {
        expect.assertions(4);

        expect(config.printWidth).toBe(80);
        expect(config.semi).toBeTruthy();
        expect(config.trailingComma).toBe("es5");
        expect(config.singleQuote).toBeFalsy();
    });

    it("contains plugin-backed overrides for common file types", () => {
        expect.assertions(6);

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
    });

    it("configures plugin-specific options only where they add value", () => {
        expect.assertions(4);

        const phpOverride = (config.overrides ?? []).find(
            (override) => override.files === "*.php"
        );
        const codeownersOverride = (config.overrides ?? []).find(
            (override) =>
                Array.isArray(override.files) &&
                override.files.includes("CODEOWNERS") &&
                override.files.includes("**/CODEOWNERS")
        );

        expect(phpOverride?.options?.["phpVersion"]).toBe("auto");
        expect(phpOverride?.options?.plugins).toStrictEqual([
            "prettier-plugin-multiline-arrays",
            "@prettier/plugin-php",
        ]);
        expect(codeownersOverride?.options?.plugins).toStrictEqual([
            "prettier-plugin-multiline-arrays",
            "prettier-plugin-codeowners",
        ]);
        expect(codeownersOverride?.options?.endOfLine).toBe("lf");
    });
});

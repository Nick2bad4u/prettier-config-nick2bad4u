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
        expect.assertions(4);

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
    });
});

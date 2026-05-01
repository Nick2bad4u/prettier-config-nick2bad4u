import config, { config as namedConfig } from "prettier-config-nick2bad4u";
import { describe, expect, it } from "vitest";

describe("prettier-config-nick2bad4u", () => {
    it("exports the same config as default and named export", () => {
        expect.assertions(1);

        expect(config).toBe(namedConfig);
    });

    it("exposes expected top-level formatting options", () => {
        expect.assertions(4);

        expect(namedConfig.printWidth).toBe(80);
        expect(namedConfig.semi).toBeTruthy();
        expect(namedConfig.trailingComma).toBe("es5");
        expect(namedConfig.singleQuote).toBeFalsy();
    });

    it("contains plugin-backed overrides for common file types", () => {
        expect.assertions(4);

        const overrideFiles = (namedConfig.overrides ?? []).map((override) =>
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

#!/usr/bin/env node

/**
 * Keep `devEngines.packageManager` aligned with the exact npm version declared
 * by the root `packageManager` field.
 */

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const packageJsonPath = fileURLToPath(
    new URL("../package.json", import.meta.url)
);
const packageManagerPattern =
    /^npm@(?<version>(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?)$/u;

/**
 * @param {unknown} value
 *
 * @returns {value is Record<string, unknown>}
 */
const isRecord = (value) => typeof value === "object" && value !== null;

const parseArguments = () => {
    const arguments_ = process.argv.slice(2);
    const check = arguments_.includes("--check");
    const unsupportedArguments = arguments_.filter(
        (argument) => argument !== "--check"
    );

    if (unsupportedArguments.length > 0) {
        throw new TypeError(
            `Unsupported argument(s): ${unsupportedArguments.join(", ")}. Supported arguments: --check`
        );
    }

    return { check };
};

const readPackageJson = async () => {
    try {
        return JSON.parse(await readFile(packageJsonPath, "utf8"));
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        throw new TypeError(
            `Failed to read package.json at ${packageJsonPath}: ${message}`,
            { cause: error }
        );
    }
};

const main = async () => {
    const { check } = parseArguments();
    const packageJson = await readPackageJson();

    if (!isRecord(packageJson)) {
        throw new TypeError("Expected package.json to contain an object");
    }

    const packageManager = packageJson["packageManager"];

    if (typeof packageManager !== "string") {
        throw new TypeError(
            "Expected package.json packageManager to be an exact npm version such as npm@12.0.2"
        );
    }

    const match = packageManagerPattern.exec(packageManager);
    const npmVersion = match?.groups?.["version"];

    if (!npmVersion) {
        throw new TypeError(
            `Expected package.json packageManager to be an exact npm version such as npm@12.0.2; received ${JSON.stringify(packageManager)}`
        );
    }

    const devEngines = packageJson["devEngines"];

    if (!isRecord(devEngines)) {
        throw new TypeError(
            "Expected package.json devEngines to contain an object"
        );
    }

    const existingPackageManager = devEngines["packageManager"];
    const onFail =
        isRecord(existingPackageManager) &&
        typeof existingPackageManager["onFail"] === "string"
            ? existingPackageManager["onFail"]
            : "error";
    const expectedPackageManager = {
        name: "npm",
        version: npmVersion,
        onFail,
    };
    const aligned =
        isRecord(existingPackageManager) &&
        existingPackageManager["name"] === expectedPackageManager.name &&
        existingPackageManager["version"] === expectedPackageManager.version &&
        existingPackageManager["onFail"] === expectedPackageManager.onFail;

    if (aligned) {
        console.log(
            `devEngines.packageManager already aligned with packageManager: npm@${npmVersion}`
        );
        return;
    }

    if (check) {
        throw new TypeError(
            `devEngines.packageManager is out of sync with packageManager. Run "npm run sync:package-manager-version" to set it to npm@${npmVersion}.`
        );
    }

    devEngines["packageManager"] = expectedPackageManager;

    try {
        await writeFile(
            packageJsonPath,
            `${JSON.stringify(packageJson, null, 4)}\n`,
            "utf8"
        );
        console.log(
            `Updated devEngines.packageManager to match packageManager: npm@${npmVersion}`
        );
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        throw new TypeError(
            `Failed to write package.json at ${packageJsonPath}: ${message}`,
            { cause: error }
        );
    }
};

try {
    await main();
} catch (error) {
    console.error("Failed to synchronize npm package-manager metadata:", error);
    process.exitCode = 1;
}

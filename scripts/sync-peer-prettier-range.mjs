#!/usr/bin/env node

/**
 * Keep `peerDependencies.prettier` aligned with the minimum Prettier version
 * required by the runtime plugins in this shared config.
 *
 * `prettier-plugin-multiline-arrays-2` v6 requires Prettier ^3.9.0. The
 * development dependency may use a newer compatible patch without narrowing the
 * public peer contract to that patch.
 */

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

/**
 * The file path to the package.json file, resolved from the current module's
 * URL. This is used to read and update the package.json file for synchronizing
 * the peer dependency range for prettier.
 *
 * @type {string}
 *
 * @param {string} packageJsonPath - The file path to the package.json file.
 *
 * @see fileURLToPath
 * @see URL
 */
const packageJsonPath = fileURLToPath(
    new URL("../package.json", import.meta.url)
);
/**
 * The minimum supported range for Prettier in peer dependencies.
 *
 * @type {string}
 */
const minimumSupportedPrettierRange = "^3.9.0";

/**
 * Read and parse package.json.
 *
 * @type {() => Promise<Record<string, unknown>>}
 *
 * @returns {Promise<Record<string, unknown>>}
 *
 * @throws {TypeError} If reading or parsing package.json fails, an error is
 *   thrown with a descriptive message.
 *
 * @see readFile
 * @see fileURLToPath
 */
const readPackageJson = async () => {
    try {
        /** @type {string} */
        const packageJsonContent = await readFile(packageJsonPath, "utf8");
        /** @type {Record<string, unknown>} */
        return JSON.parse(packageJsonContent);
        /** @type {Error} */
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        throw new TypeError(
            `Failed to read package.json at ${packageJsonPath}: ${message}`,
            { cause: error }
        );
    }
};

/**
 * Check whether an unknown runtime value is a non-null object record.
 *
 * @type {(value: unknown) => value is Record<string, unknown>}
 *
 * @param {unknown} value
 *
 * @returns {value is Record<string, unknown>}
 *
 * @throws {TypeError} If the value is not a non-null object, an error is thrown
 *   with a descriptive message.
 */
const isRecord = (value) => typeof value === "object" && value !== null;

const main = async () => {
    /** @type {Record<string, unknown>} */
    const packageJson = await readPackageJson();

    /** @type {unknown} */
    const devDependencies = packageJson["devDependencies"];
    /** @type {unknown} */
    const peerDependencies = packageJson["peerDependencies"];

    if (!isRecord(devDependencies) || !isRecord(peerDependencies)) {
        /** @type {string} */
        throw new TypeError(
            "Expected package.json to include object-valued devDependencies and peerDependencies"
        );
    }

    /** @type {unknown} */
    const devDependencyPrettierRange = devDependencies["prettier"];

    if (
        typeof devDependencyPrettierRange !== "string" ||
        devDependencyPrettierRange.trim().length === 0
    ) {
        throw new TypeError(
            "Expected devDependencies.prettier to be a non-empty string range"
        );
    }

    /** @type {string} */
    const nextPeerPrettierRange = minimumSupportedPrettierRange;

    /** @type {string} */
    if (peerDependencies["prettier"] === nextPeerPrettierRange) {
        /** @type {string} */
        console.log(
            `peerDependencies.prettier already aligned: ${nextPeerPrettierRange}`
        );
        /** @type {void} */
        return;
    }

    peerDependencies["prettier"] = nextPeerPrettierRange;
    try {
        /** @type {string} */
        await writeFile(
            /** @type {string} */
            packageJsonPath,
            `${JSON.stringify(packageJson, null, 4)}\n`,
            "utf8"
        );
        /** @type {string} */
        console.log(
            `Updated peerDependencies.prettier to: ${nextPeerPrettierRange}`
        );
    } catch (error) {
        /** @type {Error} */
        throw new TypeError(
            `Failed to write updated package.json with new peerDependencies.prettier: ${error}`,
            { cause: error }
        );
    }
};

/**
 * Execute the synchronization process, handling any errors gracefully. Errors
 * are logged to the console, and the process exits with a non-zero code to
 * indicate failure.
 *
 * @type {() => Promise<void>}
 *
 * @returns {Promise<void>}
 *
 * @throws {Error} If any step of the synchronization process fails, an error is
 *   thrown with a descriptive message.
 * @throws {TypeError} If reading or writing package.json fails, or if the
 *   expected structure of package.json is not met.
 *
 * @see writeFile
 * @see readPackageJson
 * @see isRecord
 * @see main
 */
try {
    await main();
} catch (error) {
    /** @type {Error} */
    console.error("Failed to synchronize peerDependencies.prettier:", error);
    /** @type {number} */
    process.exitCode = 1;
}

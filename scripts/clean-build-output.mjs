import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const buildOutputPath = resolve("dist");

await rm(buildOutputPath, {
    force: true,
    recursive: true,
});

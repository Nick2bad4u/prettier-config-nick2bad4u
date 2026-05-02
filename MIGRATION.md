
# Migration Guide

Here are PowerShell commands you can run in each project you want to migrate to **prettier-config-nick2bad4u**.

---

## Steps

### 0. Change to your project root

```powershell
Set-Location "C:\Path\To\Your\Project"
```

### 1. Uninstall Prettier dependencies/plugins now provided by `prettier-config-nick2bad4u`

```powershell
$sharedPrettierDeps = @(
    "prettier-plugin-jsdoc-type",
    "@softonus/prettier-plugin-duplicate-remover",
    "prettier-plugin-ini",
    "prettier-plugin-interpolated-html-tags",
    "prettier-plugin-jsdoc",
    "prettier-plugin-merge",
    "prettier-plugin-multiline-arrays",
    "prettier-plugin-packagejson",
    "prettier-plugin-properties",
    "prettier-plugin-sh",
    "prettier-plugin-sort-json",
    "prettier-plugin-sql",
    "prettier-plugin-toml"
)

npm uninstall $sharedPrettierDeps --force
```

> **Optional:** If you had an old local/shared Prettier config package:
>
> ```powershell
> npm uninstall prettier-config-<old-name>
> ```

### 2. Install shared config package (and Prettier peer)

```powershell
npm install --save-dev prettier prettier-config-nick2bad4u
```

### 3. Replace local Prettier config with import-based shared config

```powershell
@'
import prettierConfig from "prettier-config-nick2bad4u";

/**
 * @type {import("prettier").Config}
 */
const localConfig = {
    ...prettierConfig,
    // PrintWidth: 100, // your override here
};

export default localConfig;

'@ | Set-Content -Path "prettier.config.mjs" -Encoding utf8
```

### 4. (Optional) Remove old standalone Prettier config files if present

```powershell
Remove-Item ".prettierrc", ".prettierrc.json", ".prettierrc.mjs", "prettier.config.js", "prettier.config.cjs", "prettier.config.ts" -ErrorAction SilentlyContinue
```

### 5. Verify

```powershell
npx prettier . --check
```

---

If you want, I can also give you a variant that updates `package.json`:

```json
"prettier": "prettier-config-nick2bad4u"
```
instead of using `prettier.config.mjs`.

```powershell
# --- Prettier Migration: One‑Shot Script ---
# Run this from the root of each project you want to migrate.

Write-Host "`n🔧 Starting Prettier migration..." -ForegroundColor Cyan

# 1) Uninstall Prettier plugins now provided by prettier-config-nick2bad4u
$sharedPrettierDeps = @(
    "prettier-plugin-jsdoc-type",
    "@softonus/prettier-plugin-duplicate-remover",
    "prettier-plugin-ini",
    "prettier-plugin-interpolated-html-tags",
    "prettier-plugin-jsdoc",
    "prettier-plugin-merge",
    "prettier-plugin-multiline-arrays",
    "prettier-plugin-packagejson",
    "prettier-plugin-properties",
    "prettier-plugin-sh",
    "prettier-plugin-sort-json",
    "prettier-plugin-sql",
    "prettier-plugin-toml"
)

Write-Host "📦 Uninstalling old Prettier plugins..."
npm uninstall $sharedPrettierDeps --force

# 2) Install shared config + Prettier peer
Write-Host "📥 Installing prettier + prettier-config-nick2bad4u..."
npm install --save-dev prettier prettier-config-nick2bad4u

# 3) Replace local Prettier config with shared import-based config
Write-Host "📝 Writing prettier.config.mjs..."
@'
import prettierConfig from "prettier-config-nick2bad4u";

/**
 * @type {import("prettier").Config}
 */
const localConfig = {
    ...prettierConfig,
    // PrintWidth: 100, // your override here
};

export default localConfig;
'@ | Set-Content -Path "prettier.config.mjs" -Encoding utf8

# 4) Remove old standalone Prettier config files
Write-Host "🧹 Removing old Prettier config files..."
Remove-Item ".prettierrc", ".prettierrc.json", ".prettierrc.mjs", "prettier.config.js", "prettier.config.cjs", "prettier.config.ts" -ErrorAction SilentlyContinue

# 5) Verify
Write-Host "🔍 Running Prettier check..."
npx prettier . --write

Write-Host "`n🎉 Migration complete!" -ForegroundColor Green
```

---
name: "Prettier-Config-Test-Instructions"
description: "Instructions for tests and fixtures in the shared Prettier config package."
applyTo: "test/**"
---

# Test Instructions

Tests in this repository validate the published Prettier config behavior, not
ESLint rules.

## Test Shape

- Use Vitest and the existing patterns in `test/preset.test.ts`.
- Keep tests coupled to the public package entrypoint where practical. This
  catches export, shim, and build-output problems that direct source imports can
  miss.
- Add targeted assertions for exported config objects, override options,
  consumer customization helpers, and package entrypoint behavior when those
  surfaces change.
- Prefer explicit expected values over snapshots so config behavior remains easy
  to review in diffs.

## Formatting Fixtures

- Keep fixtures under `test/fixtures/formatting/` idempotently formatted by the
  generated root `prettier.config.mjs`.
- When adding a fixture file, add its filename to the
  `formattingFixtureFileNames` list in `test/preset.test.ts`; that test
  intentionally fails if the directory contents and list drift apart.
- Update an existing fixture for an existing supported file type. Add a new
  fixture only for a new supported type or a distinct file family that needs
  separate coverage.
- Keep fixtures small but representative. They should exercise the relevant
  parser or plugin behavior without becoming broad sample projects.

## Validation

- Run `npm run test` after fixture, override, preset, or consumer-customization
  changes.
- If tests fail after a source change, fix the source or fixture expectation.
  Do not work around failures by weakening fixture coverage without a clear
  behavioral reason.

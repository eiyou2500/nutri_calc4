# QA Report

## Environment

- Date: 2026-06-18
- App type: static PWA (`index.html` + JSON data files)

## Checks

- `npm install --package-lock-only --ignore-scripts`: passed; no runtime dependencies were required.
- `npm run format`: passed.
- `npm run lint`: passed; JSON data parses and inline JavaScript compiles.
- `npm run typecheck`: passed via static validation fallback because this is not a TypeScript project.
- `npm run build`: passed via static validation fallback because this app has no bundler.
- `python3 -m http.server 4173 --bind 127.0.0.1` + `curl -I http://127.0.0.1:4173/index.html`: passed; local server returned `HTTP/1.0 200 OK`.

## Browser / visual checks

- Playwright screenshots for 390x844, 768x1024, and 1440x1100 were requested by the implementation brief, but Playwright was not installed and npm registry access returned 403, so screenshots could not be generated in this environment.
- axe-core and Lighthouse were also not available for the same registry limitation. Manual accessibility safeguards were added: semantic headings, visible `:focus-visible`, button/link role separation, and `prefers-reduced-motion` handling.

## Reduced motion

- CSS includes a `prefers-reduced-motion: reduce` block that effectively disables animations and transitions.

## Current UX correction

- The previous explanatory hero was removed because it forced users to scroll before calculating.
- The app now starts directly at the calculation form, with a softer color system targeted at women in their 20s while preserving contrast and practical density.

## Remaining risks

- Full browser rendering, Lighthouse, and axe-core audits should be run in a network-enabled environment with Playwright/browser tooling installed.

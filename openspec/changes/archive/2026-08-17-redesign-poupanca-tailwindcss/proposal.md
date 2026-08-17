## Why

The `poupanca.html` page uses outdated inline CSS and basic styling that doesn't match the modern design language established by other pages. To maintain visual consistency across the portfolio, this page needs to be redesigned with TailwindCSS following the green/white theme pattern from `index3.html`, while preserving all existing JavaScript functionality for the savings calculator.

## What Changes

- Rewrite `poupanca.html` with TailwindCSS styling matching `index3.html` design pattern
- Create isolated CSS build pipeline (`src/input-poupanca.css` → `assets/css/output-poupanca.css`)
- Preserve all JavaScript functionality (savings calculator logic)
- Preserve table structure and all HTML IDs used by JavaScript
- Add sticky navigation with back link and utility links submenu
- Maintain responsive layout with proper touch targets on mobile

## Capabilities

### New Capabilities

- `portfolio/poupanca-page`: Savings calculator page with compound interest calculation and results display

### Modified Capabilities

(none)

## Impact

- `poupanca.html` - HTML rewrite with TailwindCSS
- `src/input-poupanca.css` - new CSS entry point
- `assets/css/output-poupanca.css` - new CSS output
- `tailwind.config.js` - add poupanca.html to content paths
- `package.json` - add build:poupanca script
- Existing inline JavaScript - preserved as-is

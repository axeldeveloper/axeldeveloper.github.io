## Why

The `calc_folha.html` page uses outdated styling (Bootstrap 5, custom CSS) that doesn't match the modern design language established by other pages. To maintain visual consistency across the portfolio, this page needs to be redesigned with TailwindCSS following the green/white theme pattern from `index3.html`, while preserving all existing JavaScript functionality for the hours calculator.

## What Changes

- Rewrite `calc_folha.html` with TailwindCSS styling matching `index3.html` design pattern
- Create isolated CSS build pipeline (`src/input-calc-folha.css` → `assets/css/output-calc-folha.css`)
- Preserve all JavaScript functionality (jQuery, datepicker, calculator logic)
- Preserve table structure and all HTML IDs/classes used by JavaScript
- Add sticky navigation with back link and utility links submenu
- Maintain responsive layout with proper touch targets on mobile

## Capabilities

### New Capabilities

- `portfolio/calc-folha-page`: Weekly hours calculator page with time tracking, totals calculation, and printable reports

### Modified Capabilities

(none)

## Impact

- `calc_folha.html` - HTML rewrite with TailwindCSS
- `src/input-calc-folha.css` - new CSS entry point
- `assets/css/output-calc-folha.css` - new CSS output
- `tailwind.config.js` - add calc_folha.html to content paths
- `package.json` - add build:calc-folha script
- Existing JavaScript files (`javascript.js`, `jquery.js`, `jquery.datepick.pack.js`) - preserved as-is
- Existing CSS files (`style_calc.css`, `jquery.datepick.css`) - no longer loaded by calc_folha.html

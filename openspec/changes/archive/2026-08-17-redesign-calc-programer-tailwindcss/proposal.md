## Why

The calc_programer.html page (freelancer calculator) currently uses a custom `programer.css` file with a purple theme that doesn't match the site's design language. Creating a dedicated TailwindCSS build pipeline for this page brings it in line with index.html's dark theme, improves maintainability, and isolates its styles from other pages.

## What Changes

- Create new TailwindCSS entry point `src/input-calc-programer.css` → `assets/css/output-calc-programer.css`
- Update `tailwind.config.js` content paths to include calc_programer.html
- Add `npm run build:calc-programer` script to package.json
- Rewrite calc_programer.html to use `output-calc-programer.css` instead of `programer.css`
- Preserve all JavaScript functionality (IDs: `valor-hora`, `horas-projeto`, `span`; function: `calcularValorHora()`)
- Maintain mobile-first responsive layout

## Capabilities

### New Capabilities
- `portfolio/calc-programer-page`: Freelancer hourly rate calculator with project cost estimation

### Modified Capabilities

## Impact

- `calc_programer.html`: CSS link changes from `programer.css` to `output-calc-programer.css`
- `package.json`: New `build:calc-programer` script
- `tailwind.config.js`: Content paths updated to include calc_programer.html
- New files: `src/input-calc-programer.css`, `assets/css/output-calc-programer.css`
- No impact on index.html, index3.html, calc.html, or other pages

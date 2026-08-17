## Why

The calc.html page (weekly hours calculator) currently shares `output.css` with index.html via TailwindCSS. This creates a dependency where changes to one page's styles can affect the other. Creating a dedicated CSS file for calc.html isolates its styles, prevents unintended side effects, and allows independent optimization for the calculator-specific UI (table inputs, time pickers, mobile card layout).

## What Changes

- Create new TailwindCSS entry point `src/input-calc.css` → `assets/css/output-calc.css`
- Update `tailwind.config.js` content paths to include calc.html
- Add `npm run build:calc` script to package.json
- Rewrite calc.html to use `output-calc.css` instead of `output.css`
- Ensure all JavaScript IDs and table structure are preserved exactly
- Maintain mobile-first responsive layout with desktop table and mobile card views

## Capabilities

### New Capabilities
- `portfolio/calc-page`: Weekly hours calculator page with time input table, summary calculations, punch clock, and print functionality

### Modified Capabilities

## Impact

- `calc.html`: CSS link changes from `output.css` to `output-calc.css`
- `package.json`: New `build:calc` script
- `tailwind.config.js`: Content paths updated to include calc.html
- New files: `src/input-calc.css`, `assets/css/output-calc.css`
- No impact on index.html, index3.html, or other pages using `output.css`

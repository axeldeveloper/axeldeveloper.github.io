## Context

calc_programer.html currently uses a custom `programer.css` file with a purple theme (#7f479b, #462755) and external fonts (Lato, Abel). The page has a simple calculator with two inputs (hourly rate, project hours) and a calculate button. JavaScript is in a separate file (`programer.js`) and references specific element IDs.

## Goals / Non-Goals

**Goals:**
- Create isolated CSS build pipeline for calc_programer.html (`input-calc-programer.css` → `output-calc-programer.css`)
- Preserve all JavaScript functionality and element IDs exactly
- Maintain dark theme consistent with index.html design language
- Mobile-first responsive layout with proper touch targets
- No impact on existing pages

**Non-Goals:**
- Changing JavaScript calculation logic
- Adding new features to the calculator
- Modifying other pages' CSS or behavior
- Changing the external `programer.js` file (keep it as-is)

## Decisions

**1. Separate CSS entry point**
- Create `src/input-calc-programer.css` with Tailwind directives
- Add `npm run build:calc-programer` script
- Update `tailwind.config.js` content paths to include calc_programer.html
- Rationale: Isolates calc_programer.html styles, prevents cross-page side effects

**2. Keep existing JavaScript structure**
- Preserve element IDs: `valor-hora`, `horas-projeto`, `span` (for resultado)
- Preserve function: `calcularValorHora()`
- Keep external `programer.js` file reference
- Rationale: Existing logic works correctly; changes would risk breaking functionality

**3. Reuse dark theme pattern from index.html**
- Background: `bg-gray-950`
- Cards: `bg-gray-900 border border-gray-800`
- Inputs: `bg-gray-800 border border-gray-700`
- Accents: `text-emerald-400`, `focus:border-emerald-500`
- Rationale: Consistent visual language across the site

**4. Responsive form layout**
- Mobile: Full-width stacked inputs
- Desktop: Side-by-side layout with labels
- Rationale: Better use of space on larger screens

## Risks / Trade-offs

**[Risk] External JS file may have hard-coded styles** → Verify programer.js doesn't inject styles; if it does, override with TailwindCSS

**[Risk] TailwindCSS purge may miss classes** → Test build output file size; add any missing classes to safelist if needed

**[Trade-off] Separate CSS file increases total bundle** → Acceptable for isolation benefits; file will be small since it's mostly Tailwind utilities

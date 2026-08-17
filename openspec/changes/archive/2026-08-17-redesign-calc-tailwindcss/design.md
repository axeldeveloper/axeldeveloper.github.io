## Context

calc.html currently uses `output.css` (shared with index.html) for TailwindCSS styling. The page has a weekly hours calculator with a 7-day table, time inputs, summary calculations, punch clock, and print functionality. JavaScript generates table rows dynamically and references specific element IDs.

## Goals / Non-Goals

**Goals:**
- Create isolated CSS build pipeline for calc.html (`input-calc.css` → `output-calc.css`)
- Preserve all JavaScript functionality and element IDs exactly
- Maintain dark theme consistent with index.html design language
- Mobile-first responsive layout (cards on mobile, table on desktop)
- No impact on existing pages (index.html, index3.html, other tools)

**Non-Goals:**
- Changing JavaScript calculation logic
- Adding new features to the calculator
- Modifying other pages' CSS or behavior
- Changing the table structure or day ordering

## Decisions

**1. Separate CSS entry point**
- Create `src/input-calc.css` with Tailwind directives
- Add `npm run build:calc` script
- Update `tailwind.config.js` content paths to include calc.html
- Rationale: Isolates calc.html styles, prevents cross-page side effects, allows independent optimization

**2. Keep existing JavaScript structure**
- Preserve all element IDs: `in1-*`, `out1-*`, `in2-*`, `out2-*`, `total-*`, `m-in1-*`, `m-out1-*`, `m-in2-*`, `m-out2-*`, `m-total-*`
- Preserve functions: `calcularHoras()`, `calcularHorasMobile()`, `calcularResumo()`, `baterPonto()`, `calcularMinutos()`
- Keep `dias` array order: Segunda through Domingo
- Rationale: Existing logic works correctly; changes would risk breaking functionality

**3. Dual-view responsive approach**
- Desktop (md+): Full table with 6 columns
- Mobile (<md): Card-based layout with 2x2 grid for time inputs
- Data syncs between views via JavaScript
- Rationale: Table is hard to use on mobile; cards provide better touch targets

**4. Reuse dark theme pattern from index.html**
- Background: `bg-gray-950`
- Cards: `bg-gray-900 border border-gray-800`
- Inputs: `bg-gray-800 border border-gray-700`
- Accents: `text-emerald-400`, `focus:border-emerald-500`
- Rationale: Consistent visual language across the site

## Risks / Trade-offs

**[Risk] TailwindCSS purge may miss classes** → Test build output file size; add any missing classes to safelist if needed

**[Risk] Mobile/Desktop data sync bugs** → Thoroughly test that values entered on one view appear correctly on the other

**[Risk] Time input styling varies by browser** → Use consistent padding/sizing classes; accept minor browser differences in native time picker UI

**[Trade-off] Separate CSS file increases total bundle** → Acceptable for isolation benefits; file will be small since it's mostly Tailwind utilities

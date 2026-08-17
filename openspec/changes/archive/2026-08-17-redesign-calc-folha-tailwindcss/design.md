## Context

The `calc_folha.html` page currently uses Bootstrap 5 CSS and custom `style_calc.css` for styling, which doesn't match the modern design language of other portfolio pages. The page has complex JavaScript dependencies (jQuery, datepicker plugin, custom calculator logic) that rely on specific HTML element IDs and classes. The table structure with 4 time slots per row must be preserved for the JavaScript to function correctly.

## Goals / Non-Goals

**Goals:**
- Rewrite `calc_folha.html` with TailwindCSS matching the green/white theme from `index3.html`
- Create isolated CSS build pipeline to avoid affecting other pages
- Preserve all JavaScript functionality exactly as-is
- Maintain responsive layout with proper touch targets
- Add consistent navigation with back link and utility links

**Non-Goals:**
- Modify the JavaScript logic or calculator functionality
- Change the table structure or data flow
- Replace jQuery or datepicker dependencies
- Modify existing CSS files used by other pages

## Decisions

### 1. CSS Isolation Strategy
**Decision:** Create a new CSS pipeline (`input-calc-folha.css` → `output-calc-folha.css`) instead of reusing existing CSS files.

**Rationale:** Each page has its own CSS output to prevent style conflicts. This follows the established pattern from calc.html and calc_programer.html.

**Alternatives considered:**
- Reuse `style_calc.css`: Rejected because it contains old styling that conflicts with TailwindCSS
- Use global `output.css`: Rejected because it would affect index.html styling

### 2. Table Structure Preservation
**Decision:** Keep the exact same table structure with classes `.inputLine`, `.lineTarget`, `.yellow_inputbox`, `.gray_inputbox`, `.listNum`, `.hour`, `.minute`, `.listfield`.

**Rationale:** The JavaScript uses jQuery selectors based on these classes to:
- Add/remove rows (`.inputLine`)
- Access time values (`.yellow_inputbox:eq(0)` through `.yellow_inputbox:eq(7)`)
- Calculate totals (`.gray_inputbox`)
- Handle tab navigation (`.listfield`)

**Alternatives considered:**
- Restructure table with semantic HTML: Rejected because it would break JavaScript selectors
- Add data attributes: Rejected because it would require JavaScript changes

### 3. Navigation Pattern
**Decision:** Use the same sticky navigation pattern from `index3.html` with back link and utility links submenu.

**Rationale:** Maintains consistency across all utility pages and provides easy navigation between calculators.

**Alternatives considered:**
- Simple header with back link only: Rejected because it doesn't match the established pattern
- Sidebar navigation: Rejected because it would take too much space on a calculator page

### 4. Bootstrap Removal
**Decision:** Remove Bootstrap 5 CSS dependency and replace with TailwindCSS utilities.

**Rationale:** Bootstrap is only used for basic button styling (`.btn`, `.btn-primary`, `.btn-danger`, `.btn-warning`). These can be easily replicated with TailwindCSS classes.

**Alternatives considered:**
- Keep Bootstrap alongside TailwindCSS: Rejected because it adds unnecessary bloat and potential conflicts
- Use Bootstrap utilities only: Rejected because it doesn't match the design pattern

## Risks / Trade-offs

### Risk 1: JavaScript Selector Breakage
**Risk:** Changing HTML structure could break jQuery selectors in `javascript.js`.

**Mitigation:** Carefully audit all JavaScript selectors and preserve exact class names and IDs. Test all calculator functions after implementation.

### Risk 2: Datepicker Styling Conflicts
**Risk:** The datepicker plugin may have its own CSS that conflicts with TailwindCSS.

**Mitigation:** Keep `jquery.datepick.css` loaded for datepicker styling, or add custom styles to override conflicts.

### Risk 3: Table Responsiveness
**Risk:** Wide table may not display well on mobile devices.

**Mitigation:** Use overflow-x scrolling on mobile, or consider card-based layout for mobile with synchronized data (similar to calc.html pattern).

### Risk 4: Print Layout
**Risk:** TailwindCSS classes may not apply correctly in print media.

**Mitigation:** Add print-specific styles to ensure clean output when printing reports.

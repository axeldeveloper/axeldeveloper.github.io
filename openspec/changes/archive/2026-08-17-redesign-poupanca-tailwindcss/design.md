## Context

The `poupanca.html` page currently uses inline CSS and basic styling that doesn't match the modern design language of other portfolio pages. The page has simple JavaScript for savings calculation that relies on specific HTML element IDs. The calculator uses the Brazilian savings rate (6.17% annual) compounded monthly.

## Goals / Non-Goals

**Goals:**
- Rewrite `poupanca.html` with TailwindCSS matching the green/white theme from `index3.html`
- Create isolated CSS build pipeline to avoid affecting other pages
- Preserve all JavaScript functionality exactly as-is
- Maintain responsive layout with proper touch targets
- Add consistent navigation with back link and utility links

**Non-Goals:**
- Modify the JavaScript logic or calculator functionality
- Change the calculation formula or interest rate
- Replace the inline JavaScript with external files
- Modify existing CSS files used by other pages

## Decisions

### 1. CSS Isolation Strategy
**Decision:** Create a new CSS pipeline (`input-poupanca.css` → `output-poupanca.css`) instead of reusing existing CSS files.

**Rationale:** Each page has its own CSS output to prevent style conflicts. This follows the established pattern from calc.html, calc_programer.html, and calc_folha.html.

**Alternatives considered:**
- Use global `output.css`: Rejected because it would affect index.html styling
- Keep inline styles: Rejected because it doesn't match the design pattern

### 2. JavaScript Preservation
**Decision:** Keep the inline JavaScript exactly as-is, including the `calcularRendimento()` function.

**Rationale:** The JavaScript is simple and self-contained. Changing it would require testing the calculation logic, which is out of scope for a styling update.

**Alternatives considered:**
- Extract to external JS file: Rejected because it would change the file structure
- Modernize JavaScript: Rejected because it would change functionality

### 3. Navigation Pattern
**Decision:** Use the same sticky navigation pattern from `index3.html` with back link and utility links submenu.

**Rationale:** Maintains consistency across all utility pages and provides easy navigation between calculators.

**Alternatives considered:**
- Simple header with back link only: Rejected because it doesn't match the established pattern
- Sidebar navigation: Rejected because it would take too much space on a calculator page

### 4. Table Structure
**Decision:** Keep the exact same table structure with IDs `#resultado`, `#valorInicial`, `#mesesPoupados`, `#valorFinal`.

**Rationale:** The JavaScript uses these IDs to display calculation results. Changing them would break the calculator.

**Alternatives considered:**
- Restructure table with semantic HTML: Rejected because it would break JavaScript selectors
- Add data attributes: Rejected because it would require JavaScript changes

## Risks / Trade-offs

### Risk 1: JavaScript Selector Breakage
**Risk:** Changing HTML structure could break JavaScript selectors.

**Mitigation:** Carefully audit all JavaScript selectors and preserve exact IDs and element structure.

### Risk 2: Table Responsiveness
**Risk:** Table may not display well on mobile devices.

**Mitigation:** Use overflow-x scrolling on mobile, or consider card-based layout for mobile.

### Risk 3: Print Layout
**Risk:** TailwindCSS classes may not apply correctly in print media.

**Mitigation:** Add print-specific styles to ensure clean output when printing results.

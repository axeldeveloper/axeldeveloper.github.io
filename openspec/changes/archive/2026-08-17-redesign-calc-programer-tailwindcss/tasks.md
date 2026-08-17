## 1. Build Pipeline Setup

- [x] 1.1 Create `src/input-calc-programer.css` with Tailwind directives
- [x] 1.2 Update `tailwind.config.js` to include calc_programer.html in content paths
- [x] 1.3 Add `npm run build:calc-programer` script to package.json
- [x] 1.4 Run build and verify `assets/css/output-calc-programer.css` is generated

## 2. HTML Structure

- [x] 2.1 Update `<link>` tag in calc_programer.html to use `output-calc-programer.css` instead of `programer.css`
- [x] 2.2 Preserve external `programer.js` script reference
- [x] 2.3 Verify all JavaScript element IDs are preserved (`valor-hora`, `horas-projeto`, `span`)
- [x] 2.4 Verify `calcularValorHora()` onclick handler is preserved

## 3. Navigation and Layout

- [x] 3.1 Add sticky navigation bar with back link to index.html
- [x] 3.2 Add utility links (Calculadora, Poupança, CEP)
- [x] 3.3 Add mobile print icon button
- [x] 3.4 Style main content container with max-width and centering

## 4. Calculator Form

- [x] 4.1 Style form container with dark card design (bg-gray-900, border-gray-800, rounded-xl)
- [x] 4.2 Style hourly rate input field with proper labels and touch targets
- [x] 4.3 Style project hours input field with proper labels and touch targets
- [x] 4.4 Style "Calcular" button (bg-emerald-600, hover:bg-emerald-500)
- [x] 4.5 Ensure responsive layout (stacked on mobile, side-by-side on desktop)

## 5. Result Display

- [x] 5.1 Style result container with dark card design
- [x] 5.2 Style result value with emerald accent and large font size
- [x] 5.3 Style "/hora" suffix with muted text color
- [x] 5.4 Style "Calculo do Projeto" legend text

## 6. Theme and Polish

- [x] 6.1 Apply dark theme to body (bg-gray-950, text-gray-100)
- [x] 6.2 Style headings with emerald accent color
- [x] 6.3 Ensure all interactive elements have focus states
- [x] 6.4 Verify responsive breakpoints work correctly

## 7. JavaScript Preservation

- [x] 7.1 Verify `calcularValorHora()` function works with preserved IDs
- [x] 7.2 Verify result displays correctly formatted as "R$ X.XXX,XX/hora"
- [x] 7.3 Verify external `programer.js` file loads correctly

## 8. Integration and Cleanup

- [x] 8.1 Preserve Font Awesome CDN link
- [x] 8.2 Preserve service worker registration script (if present)
- [x] 8.3 Run final build and verify no CSS conflicts with other pages

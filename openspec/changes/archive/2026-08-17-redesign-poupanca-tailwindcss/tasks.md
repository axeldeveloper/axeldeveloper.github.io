## 1. Build Pipeline Setup

- [x] 1.1 Create `src/input-poupanca.css` with Tailwind directives
- [x] 1.2 Update `tailwind.config.js` to include poupanca.html in content paths
- [x] 1.3 Add `npm run build:poupanca` script to package.json
- [x] 1.4 Run build and verify `assets/css/output-poupanca.css` is generated

## 2. HTML Structure

- [x] 2.1 Replace inline CSS with `output-poupanca.css` link
- [x] 2.2 Verify all JavaScript element IDs are preserved (`#valor`, `#meses`, `#resultado`, `#valorInicial`, `#mesesPoupados`, `#valorFinal`)
- [x] 2.3 Verify `calcularRendimento()` onclick handler is preserved
- [x] 2.4 Preserve inline JavaScript exactly as-is

## 3. Navigation and Layout

- [x] 3.1 Add sticky navigation bar with back link to index.html
- [x] 3.2 Add utility links (Calculadora, Freelancer, Horas, CEP)
- [x] 3.3 Add mobile print icon button
- [x] 3.4 Style main content container with max-width and centering

## 4. Form Inputs

- [x] 4.1 Style savings amount input field with R$ prefix
- [x] 4.2 Style months input field
- [x] 4.3 Style "Calcular" button (bg-emerald-600, hover:bg-emerald-500)
- [x] 4.4 Ensure proper labels and placeholders

## 5. Results Table

- [x] 5.1 Style results table with dark theme (bg-gray-900, border-gray-800)
- [x] 5.2 Style table headers (Valor Inicial, Meses, Valor Final)
- [x] 5.3 Style table data cells
- [x] 5.4 Ensure table is hidden by default and shown after calculation

## 6. Theme and Polish

- [x] 6.1 Apply dark theme to body (bg-gray-950, text-gray-100)
- [x] 6.2 Style headings with emerald accent color
- [x] 6.3 Ensure all interactive elements have focus states
- [x] 6.4 Verify responsive breakpoints work correctly
- [x] 6.5 Add print media styles for clean report output

## 7. JavaScript Preservation

- [x] 7.1 Verify savings calculation works correctly
- [x] 7.2 Verify input validation works (alerts on invalid input)
- [x] 7.3 Verify results table shows/hides correctly
- [x] 7.4 Verify calculation displays formatted values with 2 decimal places

## 8. Integration and Cleanup

- [x] 8.1 Preserve Font Awesome CDN link
- [x] 8.2 Preserve service worker registration script
- [x] 8.3 Run final build and verify no CSS conflicts with other pages
- [x] 8.4 Test complete workflow: enter values → calculate → verify results

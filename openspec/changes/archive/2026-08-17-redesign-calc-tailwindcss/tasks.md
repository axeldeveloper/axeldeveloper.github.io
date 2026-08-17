## 1. Build Pipeline Setup

- [x] 1.1 Create `src/input-calc.css` with Tailwind directives
- [x] 1.2 Update `tailwind.config.js` to include calc.html in content paths
- [x] 1.3 Add `npm run build:calc` script to package.json
- [x] 1.4 Run build and verify `assets/css/output-calc.css` is generated

## 2. HTML Structure

- [x] 2.1 Update `<link>` tag in calc.html to use `output-calc.css` instead of `output.css`
- [x] 2.2 Remove any remaining Bootstrap/W3CSS references if present
- [x] 2.3 Verify all JavaScript element IDs are preserved (in1-*, out1-*, in2-*, out2-*, total-*, m-in1-*, m-out1-*, m-in2-*, m-out2-*, m-total-*, nomeCompleto, valorHora, totalSemana, totalReais, tabela-desktop, tabela-mobile, listaPontos)
- [x] 2.4 Verify `dias` array order is preserved: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

## 3. Desktop Table Layout

- [x] 3.1 Style desktop table container with dark theme (bg-gray-900, border-gray-800, rounded-xl)
- [x] 3.2 Style table header with emerald accent text
- [x] 3.3 Style table rows with hover effect and border separators
- [x] 3.4 Style time input fields (bg-gray-800, border-gray-700, focus:border-emerald-500)
- [x] 3.5 Style total column with emerald monospace text

## 4. Mobile Card Layout

- [x] 4.1 Create card container for each day (bg-gray-900, border-gray-800, rounded-xl)
- [x] 4.2 Create 2x2 grid for time inputs with labels
- [x] 4.3 Style mobile time inputs with proper touch targets (min 44px height)
- [x] 4.4 Add total display at bottom of each card

## 5. Summary and Actions

- [x] 5.1 Style summary section with 3-column grid (responsive: 1 col mobile, 3 col desktop)
- [x] 5.2 Style hourly rate input field
- [x] 5.3 Style weekly total and Reais total with emerald monospace text
- [x] 5.4 Style "Bater Ponto" button (bg-emerald-600, hover:bg-emerald-500)
- [x] 5.5 Style "Imprimir Relatório" button (bg-gray-800, border-gray-700)

## 6. Punch List and Navigation

- [x] 6.1 Style punch list items with dark card design and check icon
- [x] 6.2 Style navigation bar (sticky, backdrop-blur, border-bottom)
- [x] 6.3 Style back link to index.html
- [x] 6.4 Style utility links (Poupança, CEP)
- [x] 6.5 Add mobile print icon button

## 7. JavaScript Preservation

- [x] 7.1 Verify `calcularHoras()` function works with desktop inputs
- [x] 7.2 Verify `calcularHorasMobile()` function works with mobile inputs
- [x] 7.3 Verify mobile-to-desktop data sync works correctly
- [x] 7.4 Verify `calcularResumo()` calculates weekly total and Reais correctly
- [x] 7.5 Verify `baterPonto()` creates punch records with correct format
- [x] 7.6 Verify `calcularMinutos()` helper function works correctly

## 8. Integration and Cleanup

- [x] 8.1 Preserve Font Awesome CDN link
- [x] 8.2 Preserve Google Fonts (Inter) link
- [x] 8.3 Preserve service worker registration script
- [x] 8.4 Verify `window.print()` button triggers browser print dialog
- [x] 8.5 Run final build and verify no CSS conflicts with other pages

## 1. Build Pipeline Setup

- [x] 1.1 Create `src/input-calc-folha.css` with Tailwind directives
- [x] 1.2 Update `tailwind.config.js` to include calc_folha.html in content paths
- [x] 1.3 Add `npm run build:calc-folha` script to package.json
- [x] 1.4 Run build and verify `assets/css/output-calc-folha.css` is generated

## 2. HTML Structure

- [x] 2.1 Update `<link>` tag in calc_folha.html to use `output-calc-folha.css` instead of `style_calc.css`
- [x] 2.2 Preserve jQuery and datepicker script references
- [x] 2.3 Preserve `javascript.js` script reference
- [x] 2.4 Verify all JavaScript element IDs are preserved (`#msgs`, `#enter_time`, `#calculate`, `#clearAll`, `#rate`, `#date`, `#total`, `#totalPay`, `#name`, `#print`, `#calc`)
- [x] 2.5 Verify all JavaScript classes are preserved (`.inputLine`, `.lineTarget`, `.listNum`, `.hour`, `.minute`, `.yellow_inputbox`, `.gray_inputbox`, `.listfield`, `.rows span`)

## 3. Navigation and Layout

- [x] 3.1 Add sticky navigation bar with back link to index.html
- [x] 3.2 Add utility links (Calculadora, Freelancer, Poupança, CEP)
- [x] 3.3 Add mobile print icon button
- [x] 3.4 Style main content container with max-width and centering

## 4. Table Structure

- [x] 4.1 Preserve table header with Entrada/Saída labels
- [x] 4.2 Preserve input row structure with 4 time slots (8 input fields)
- [x] 4.3 Preserve row number display (`.listNum`)
- [x] 4.4 Preserve equals sign and total column
- [x] 4.5 Style table with dark theme (bg-gray-900, border-gray-800)

## 5. Form Controls

- [x] 5.1 Style Calculate button (bg-emerald-600, hover:bg-emerald-500)
- [x] 5.2 Style Clear button (bg-red-600, hover:bg-red-500)
- [x] 5.3 Style Print button (bg-amber-600, hover:bg-amber-500)
- [x] 5.4 Style hourly rate input field with R$ prefix
- [x] 5.5 Style name input field
- [x] 5.6 Style date input field with datepicker integration

## 6. Results Display

- [x] 6.1 Style total hours display
- [x] 6.2 Style total payment display (R$)
- [x] 6.3 Ensure calculated fields have proper readonly styling

## 7. Theme and Polish

- [x] 7.1 Apply dark theme to body (bg-gray-950, text-gray-100)
- [x] 7.2 Style headings with emerald accent color
- [x] 7.3 Ensure all interactive elements have focus states
- [x] 7.4 Verify responsive breakpoints work correctly
- [x] 7.5 Add print media styles for clean report output

## 8. JavaScript Preservation

- [x] 8.1 Verify row add/remove functionality works
- [x] 8.2 Verify time calculation works on blur
- [x] 8.3 Verify total hours calculation works
- [x] 8.4 Verify payment calculation works with hourly rate
- [x] 8.5 Verify datepicker opens and selects dates
- [x] 8.6 Verify Clear button resets all fields
- [x] 8.7 Verify Print button opens browser print dialog
- [x] 8.8 Verify tab navigation between fields works

## 9. Integration and Cleanup

- [x] 9.1 Preserve Font Awesome CDN link
- [x] 9.2 Preserve service worker registration script
- [x] 9.3 Run final build and verify no CSS conflicts with other pages
- [x] 9.4 Test complete workflow: enter times → calculate → verify totals

## Purpose

Weekly hours calculator page for tracking work hours, calculating totals, and generating printable reports. Supports multiple time entries per day with automatic calculation and payment computation.

## ADDED Requirements

### Requirement: Dedicated CSS file
The page SHALL use a separate TailwindCSS output file (`assets/css/output-calc-folha.css`) compiled from `src/input-calc-folha.css`. This file SHALL NOT conflict with or overwrite other CSS files used by different pages.

#### Scenario: CSS isolation
- **WHEN** calc_folha.html loads
- **THEN** it uses `assets/css/output-calc-folha.css` and does not load `style_calc.css` or other page-specific CSS files

### Requirement: Time entry table with 4 time slots
The page SHALL display a table with columns for row number, Entry 1 (Entrada), Exit 1 (Saída), Entry 2 (Entrada), Exit 2 (Saída), equals sign, and Total. Each time slot SHALL have hour and minute input fields.

#### Scenario: Table renders with time inputs
- **WHEN** calc_folha.html loads
- **THEN** the table displays with header showing Entrada/Saída labels and one input row with 8 time input fields (4 pairs of hour:minute)

### Requirement: Dynamic row management
The page SHALL allow users to add or remove time entry rows. A clickable element SHALL control the number of rows displayed.

#### Scenario: Add rows
- **WHEN** a user clicks the row control element
- **THEN** additional input rows are added to the table

#### Scenario: Remove rows
- **WHEN** a user reduces the row count
- **THEN** excess rows are removed from the table

### Requirement: Automatic hour calculation
Each time input field SHALL trigger calculation when the user leaves the field (onblur). The system SHALL calculate total minutes from Entry 1-to-Exit 1 plus Entry 2-to-Exit 2, then display formatted HH:MM in the Total column for that row.

#### Scenario: Calculate hours on blur
- **WHEN** a user enters times and leaves an input field
- **THEN** the Total column for that row updates with the calculated hours in HH:MM format

### Requirement: Weekly totals and payment calculation
The page SHALL display total hours and total payment (R$) fields. The total hours SHALL be the sum of all row totals. The payment SHALL be (total minutes / 60) * hourly rate.

#### Scenario: Summary updates on input
- **WHEN** a user changes the hourly rate or any time input
- **THEN** the total hours and total payment fields update immediately

### Requirement: Date picker functionality
The page SHALL include a date input field with date picker functionality. The date picker SHALL allow users to select a date using a calendar interface.

#### Scenario: Date picker opens
- **WHEN** a user clicks the date input field
- **THEN** a calendar interface appears for date selection

### Requirement: Form controls
The page SHALL have Calculate (Calcular), Clear (Limpar), and Print (Imprimir) buttons. The Clear button SHALL reset all form fields. The Print button SHALL open the browser print dialog.

#### Scenario: Calculate button
- **WHEN** a user clicks "Calcular"
- **THEN** all totals are recalculated

#### Scenario: Clear button
- **WHEN** a user clicks "Limpar"
- **THEN** all form fields are reset to default values

#### Scenario: Print button
- **WHEN** a user clicks "Imprimir"
- **THEN** the browser print dialog opens

### Requirement: Name and rate inputs
The page SHALL include fields for employee name and hourly rate (R$). These fields SHALL be editable and used in calculations.

#### Scenario: Enter name
- **WHEN** a user types in the name field
- **THEN** the field accepts the text input

#### Scenario: Enter hourly rate
- **WHEN** a user types in the rate field
- **THEN** the field accepts the numeric input and payment calculations use this value

### Requirement: Dark theme visual design
The page SHALL use a dark color scheme matching the site's design language. Background SHALL be dark (gray-950 or similar), text SHALL be light, and emerald accent colors SHALL be used for headings and interactive elements.

#### Scenario: Dark theme applied
- **WHEN** the page loads
- **THEN** the background is dark, text is light, and emerald accents are applied

### Requirement: Navigation with back link
The page SHALL include a navigation bar with a back link to index.html and links to other utility pages.

#### Scenario: Navigation renders
- **WHEN** the page loads
- **THEN** the nav displays with back link to index.html and utility links

### Requirement: Mobile-first responsive layout
The page SHALL be fully responsive with proper touch targets on mobile. Input fields and buttons SHALL be easily tappable on mobile devices.

#### Scenario: Mobile view
- **WHEN** the page is viewed on a mobile device
- **THEN** all inputs and buttons are properly sized for touch interaction

### Requirement: JavaScript preservation
All HTML element IDs and classes used by the existing JavaScript (`javascript.js`) SHALL be preserved exactly. The page SHALL continue to load jQuery, datepicker plugin, and the calculator script.

#### Scenario: JavaScript functionality preserved
- **WHEN** calc_folha.html loads
- **THEN** all calculator functions work identically to the original implementation

## Purpose

Weekly hours calculator page for tracking work hours, calculating totals, and generating printable reports. Supports both desktop table view and mobile card view with synchronized data.

## ADDED Requirements

### Requirement: Dedicated CSS file
The page SHALL use a separate TailwindCSS output file (`assets/css/output-calc.css`) compiled from `src/input-calc.css`. This file SHALL NOT conflict with or overwrite `assets/css/output.css` used by index.html or `assets/css/output3.css` used by index3.html.

#### Scenario: CSS isolation
- **WHEN** calc.html loads
- **THEN** it uses `assets/css/output-calc.css` and does not load `assets/css/output.css` or `assets/css/output3.css`

### Requirement: Weekly hours table with 7 days
The page SHALL display a table with 7 rows (Monday through Sunday in Portuguese: Segunda, Terça, Quarta, Quinta, Sexta, Sábado, Domingo). Each row SHALL have 5 columns: Day, Entry Time, Lunch Exit Time, Lunch Return Time, Exit Time, and Total Hours.

#### Scenario: Table renders all days
- **WHEN** a user loads calc.html
- **THEN** the table displays 7 rows with days in order from Segunda to Domingo

### Requirement: Time input calculations
Each time input field SHALL trigger hour calculation when the user leaves the field (onblur). The system SHALL calculate total minutes from Entry-to-Exit plus Lunch Return-to-Exit, then display formatted HH:MM in the Total column.

#### Scenario: Calculate hours on blur
- **WHEN** a user enters times and leaves an input field
- **THEN** the Total column for that row updates with the calculated hours in HH:MM format

### Requirement: Weekly summary
The page SHALL display three summary fields: hourly rate (R$), weekly total (HH:MM), and total in Reais (R$). The weekly total SHALL be the sum of all daily totals. The Reais total SHALL be (total minutes / 60) * hourly rate.

#### Scenario: Summary updates on input
- **WHEN** a user changes the hourly rate or any time input
- **THEN** the weekly total and Reais total update immediately

### Requirement: Punch clock functionality
The page SHALL have a "Bater Ponto" button that records the current date, time, and user's name. The system SHALL require the name field to be filled before recording. Punch records SHALL be displayed in reverse chronological order (newest first).

#### Scenario: Record punch with valid name
- **WHEN** a user clicks "Bater Ponto" with a name entered
- **THEN** a new record appears at the top of the punch list with date, time, and name

#### Scenario: Reject punch without name
- **WHEN** a user clicks "Bater Ponto" without entering a name
- **THEN** an alert message appears requesting the name

### Requirement: Print functionality
The page SHALL have a print button that triggers the browser's print dialog for the report.

#### Scenario: Print report
- **WHEN** a user clicks the print button
- **THEN** the browser print dialog opens

### Requirement: Mobile-first responsive layout
The page SHALL display a full table on desktop (md breakpoint and above) and card-based layout on mobile. On mobile, each day SHALL be a separate card with 2-column grid for time inputs. Data entered on mobile SHALL sync to desktop inputs and vice versa.

#### Scenario: Desktop view
- **WHEN** the page is viewed at 768px width or wider
- **THEN** a full table with all columns is displayed

#### Scenario: Mobile view
- **WHEN** the page is viewed at less than 768px width
- **THEN** each day displays as a card with time inputs in a 2x2 grid

### Requirement: Dark theme visual design
The page SHALL use a dark color scheme matching the site's design language. Background SHALL be dark (gray-950 or similar), text SHALL be light, and emerald accent colors SHALL be used for headings and interactive elements.

#### Scenario: Dark theme applied
- **WHEN** the page loads
- **THEN** the background is dark, text is light, and emerald accents are applied

### Requirement: Navigation with back link
The page SHALL include a navigation bar with a back link to index.html and links to other utility pages (Poupança, CEP). On mobile, the nav SHALL show a print icon button.

#### Scenario: Navigation renders
- **WHEN** the page loads
- **THEN** the nav displays with back link to index.html and utility links

## Purpose

Savings calculator page for computing compound interest on savings deposits. Provides a simple interface for users to calculate future value based on initial amount, time period, and annual interest rate.

## ADDED Requirements

### Requirement: Dedicated CSS file
The page SHALL use a separate TailwindCSS output file (`assets/css/output-poupanca.css`) compiled from `src/input-poupanca.css`. This file SHALL NOT conflict with or overwrite other CSS files used by different pages.

#### Scenario: CSS isolation
- **WHEN** poupanca.html loads
- **THEN** it uses `assets/css/output-poupanca.css` and does not load inline styles or other page-specific CSS files

### Requirement: Savings amount input
The page SHALL display an input field for the user to enter the initial savings amount in BRL (R$). The input SHALL accept numeric values.

#### Scenario: Enter savings amount
- **WHEN** a user types a number in the savings amount field
- **THEN** the field accepts the numeric input

### Requirement: Months input
The page SHALL display an input field for the user to enter the number of months for the savings period. The input SHALL accept numeric values.

#### Scenario: Enter months
- **WHEN** a user types a number in the months field
- **THEN** the field accepts the numeric input

### Requirement: Calculate button
The page SHALL have a "Calcular" button that triggers the compound interest calculation when clicked. The calculation SHALL use the Brazilian savings rate (6.17% annual) compounded monthly.

#### Scenario: Calculate savings
- **WHEN** a user clicks "Calcular" after entering savings amount and months
- **THEN** the result displays the future value formatted with 2 decimal places

### Requirement: Results table
The page SHALL display a results table with columns for Initial Value (Valor Inicial), Months (Meses), and Final Value (Valor Final). The table SHALL be hidden by default and shown after calculation.

#### Scenario: Display results
- **WHEN** the calculation is performed
- **THEN** the results table appears with the calculated values

### Requirement: Input validation
The system SHALL validate that both fields are filled with positive numbers. If validation fails, the system SHALL display an alert message.

#### Scenario: Invalid input
- **WHEN** a user clicks "Calcular" with empty or invalid fields
- **THEN** an alert appears requesting valid values

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
All HTML element IDs used by the existing inline JavaScript SHALL be preserved exactly. The page SHALL continue to work with the `calcularRendimento()` function.

#### Scenario: JavaScript functionality preserved
- **WHEN** poupanca.html loads
- **THEN** all calculator functions work identically to the original implementation

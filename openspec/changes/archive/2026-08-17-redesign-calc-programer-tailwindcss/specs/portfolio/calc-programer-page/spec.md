## Purpose

Freelancer hourly rate calculator page for estimating project costs based on hourly rate and project duration. Provides a simple interface for developers to quickly calculate project values.

## ADDED Requirements

### Requirement: Dedicated CSS file
The page SHALL use a separate TailwindCSS output file (`assets/css/output-calc-programer.css`) compiled from `src/input-calc-programer.css`. This file SHALL NOT conflict with or overwrite other CSS files used by different pages.

#### Scenario: CSS isolation
- **WHEN** calc_programer.html loads
- **THEN** it uses `assets/css/output-calc-programer.css` and does not load `programer.css` or other page-specific CSS files

### Requirement: Hourly rate input
The page SHALL display an input field for the user to enter their hourly rate in BRL (R$). The input SHALL accept numeric values.

#### Scenario: Enter hourly rate
- **WHEN** a user types a number in the hourly rate field
- **THEN** the field accepts the numeric input

### Requirement: Project hours input
The page SHALL display an input field for the user to enter the estimated project duration in hours. The input SHALL accept numeric values.

#### Scenario: Enter project hours
- **WHEN** a user types a number in the project hours field
- **THEN** the field accepts the numeric input

### Requirement: Calculate button
The page SHALL have a "Calcular" button that triggers the cost calculation when clicked. The calculation SHALL multiply hourly rate by project hours.

#### Scenario: Calculate project cost
- **WHEN** a user clicks "Calcular" after entering hourly rate and project hours
- **THEN** the result displays the total cost formatted as "R$ X.XXX,XX/hora"

### Requirement: Result display
The page SHALL display the calculated result prominently with the format "R$ X.XXX,XX/hora". The result SHALL update each time the calculate button is clicked.

#### Scenario: Display calculated cost
- **WHEN** the calculation is performed
- **THEN** the result shows "R$ " followed by the value with 2 decimal places, followed by "/hora"

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

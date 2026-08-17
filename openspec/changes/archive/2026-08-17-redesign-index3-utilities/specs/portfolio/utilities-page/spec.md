## Purpose

Define the behavior and layout contract for the utilities page (index3.html), including sidebar navigation, utilities submenu, responsive layout, and professional content sections.

## ADDED Requirements

### Requirement: Sidebar navigation with utilities submenu
The page SHALL display a sidebar navigation with a collapsible "Utilitários" submenu. The submenu SHALL contain links to all utility pages: calc.html, calc_programer.html, calc_folha.html, poupanca.html, pesquisa_cep.html. The submenu SHALL expand/collapse on click.

#### Scenario: Submenu expands on click
- **WHEN** a user clicks the "Utilitários" menu item in the sidebar
- **THEN** the submenu expands showing all utility links

#### Scenario: Submenu collapses on second click
- **WHEN** a user clicks the expanded "Utilitários" menu item
- **THEN** the submenu collapses hiding the utility links

### Requirement: Responsive sidebar layout
The sidebar SHALL be hidden on mobile viewports and accessible via a hamburger menu toggle. On desktop, the sidebar SHALL be visible by default. The main content area SHALL adjust its left margin to accommodate the sidebar on desktop.

#### Scenario: Mobile viewport
- **WHEN** the page is viewed at 768px width or less
- **THEN** the sidebar is hidden and a hamburger menu button is visible

#### Scenario: Desktop viewport
- **WHEN** the page is viewed at 769px width or wider
- **THEN** the sidebar is visible and the main content has a left margin

### Requirement: Professional content sections
The page SHALL render the following sections: Hero/Profile with photo and title, About with professional summary and skill bars, Experience with work history in two columns (CLT and Freelancer), Testimonials/Reputation, and Contact with social links.

#### Scenario: All sections render
- **WHEN** a user loads index3.html
- **THEN** the page displays Hero, About, Experience, Testimonials, and Contact sections in that order

### Requirement: Dark theme visual design
The page SHALL use a dark color scheme consistent with the site's design language. Background SHALL be dark (gray-950 or similar), text SHALL be light, and accent colors SHALL be used for headings and interactive elements.

#### Scenario: Dark theme applied
- **WHEN** the page loads
- **THEN** the background is dark, text is light, and accent colors are applied

### Requirement: External CSS file
The page SHALL use a separate TailwindCSS output file (`assets/css/output3.css`) compiled from `src/input3.css`. This file SHALL NOT conflict with or overwrite `assets/css/output.css` used by index.html.

#### Scenario: CSS isolation
- **WHEN** index3.html loads
- **THEN** it uses `assets/css/output3.css` and does not load `assets/css/output.css`

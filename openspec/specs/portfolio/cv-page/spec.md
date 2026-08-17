## Purpose

Define the behavior and layout contract for the main CV/portfolio page, including structure, content sections, visual theme, responsiveness, and build pipeline integration.

## Requirements

### Requirement: Page structure and sections
The page SHALL render the following sections in order: Hero/Profile, Professional Summary, Technical Skills, Professional Experience, Education, Certifications, Portfolio/Projects, Contact/Footer. Each section SHALL be visually distinct with clear headings.

#### Scenario: All sections render
- **WHEN** a user loads index.html
- **THEN** the page displays Hero, Summary, Skills, Experience, Education, Certifications, Portfolio, and Contact sections in that order

### Requirement: Dark theme visual design
The page SHALL use a dark color scheme with a dark background (gray-900 or darker) and light text. Accent colors SHALL be used for headings, links, and interactive elements. The design SHALL look professional and modern, suitable for a consulting business context.

#### Scenario: Dark theme applied
- **WHEN** the page loads
- **THEN** the background is dark, text is light, and accent colors are applied to headings and links

### Requirement: Responsive layout
The page SHALL be fully responsive across mobile, tablet, and desktop viewports. Layouts SHALL adapt from single-column on mobile to multi-column on larger screens. All content SHALL be readable without horizontal scrolling at any viewport width.

#### Scenario: Mobile viewport
- **WHEN** the page is viewed at 375px width
- **THEN** all content stacks in a single column and remains readable

#### Scenario: Desktop viewport
- **WHEN** the page is viewed at 1280px width or wider
- **THEN** sections may use multi-column layouts where appropriate (e.g., skills grid, experience cards)

### Requirement: Professional data from CV
The page SHALL display all professional information from the PDF source: full name, contact info (email, phone, location), complete work experience with company names, roles, dates, and descriptions, education history, certifications with years, language proficiency, and technical skills organized by category (Frontend, Backend, Infrastructure).

#### Scenario: Work experience displayed
- **WHEN** a user views the Experience section
- **THEN** all 6 positions from the CV are shown with company name, role, date range, and key responsibilities

#### Scenario: Skills organized by category
- **WHEN** a user views the Skills section
- **THEN** skills are grouped into Frontend Technologies, Backend/Infrastructure, and other relevant categories

### Requirement: Navigation and external links
The page SHALL include a navigation area with links to GitHub profile, LinkedIn profile, and contact. External links SHALL open in new tabs. Navigation SHALL be accessible from any scroll position (sticky or fixed header, or prominently placed in hero).

#### Scenario: External links behavior
- **WHEN** a user clicks the GitHub, LinkedIn, or Instagram link
- **THEN** the link opens in a new browser tab

### Requirement: TailwindCSS build pipeline
The project SHALL include a Node.js-based build setup that compiles TailwindCSS into a single output CSS file. The build SHALL be runnable via `npm run build` or equivalent script. The output CSS file SHALL be committed to the repository for GitHub Pages deployment (no server-side build on deploy).

#### Scenario: Build produces CSS
- **WHEN** a developer runs the build command
- **THEN** a compiled CSS file is generated at the expected output path

#### Scenario: CSS includes only used styles
- **WHEN** the build completes
- **THEN** the output CSS contains only the Tailwind classes used in the HTML, not the full framework

### Requirement: Accessibility basics
The page SHALL use semantic HTML elements (header, main, section, footer, nav). Images and icons SHALL have appropriate alt text. Color contrast between text and background SHALL meet WCAG AA standards for normal text.

#### Scenario: Semantic structure
- **WHEN** the HTML is inspected
- **THEN** it uses semantic elements (header, main, section, footer) instead of generic divs for page structure

## 1. Build Pipeline Setup

- [x] 1.1 Create `package.json` with devDependencies: tailwindcss, postcss, autoprefixer
- [x] 1.2 Create `tailwind.config.js` with content paths pointing to index.html
- [x] 1.3 Create `postcss.config.js` with tailwindcss and autoprefixer plugins
- [x] 1.4 Create `src/input.css` with Tailwind directives (@tailwind base, components, utilities)
- [x] 1.5 Add `npm run build` script that compiles src/input.css → assets/css/output.css
- [x] 1.6 Run the build and verify output CSS is generated with purged styles

## 2. HTML Structure and Content

- [x] 2.1 Rewrite index.html with semantic HTML5 structure (header, nav, main, section, footer)
- [x] 2.2 Create Hero/Profile section with name, title, location, contact links (GitHub, LinkedIn, Instagram)
- [x] 2.3 Create Professional Summary section with bio text
- [x] 2.4 Create Technical Skills section with skills grouped by category (Frontend, Backend, Infrastructure)
- [x] 2.5 Create Professional Experience section with all 6 positions from CV (ABRTELECOM, INOVVATI, THINKSEG, EVOB, ICERTUS, SECRETARIA DE EST. DE ADM. SAD)
- [x] 2.6 Create Education section with 4 entries (Accounting Sciences, MBA, Postgraduate Java, Undergraduate Systems)
- [x] 2.7 Create Certifications section with all certifications and years
- [x] 2.8 Create Portfolio/Projects section with existing project data (Portal do Servidor, Eventos do MS, etc.)
- [x] 2.9 Create Contact/Footer section with email, phone, social links

## 3. Styling and Theme

- [x] 3.1 Apply dark theme classes: bg-gray-950 body, bg-gray-900 cards, text-gray-100 text
- [x] 3.2 Apply accent colors: text-emerald-400 for headings, text-cyan-400 for links
- [x] 3.3 Add Google Fonts (Inter) link in head
- [x] 3.4 Style navigation as sticky/fixed header with anchor links to sections
- [x] 3.5 Style skills section as a responsive grid with category cards
- [x] 3.6 Style experience section as cards with role, company, dates, and description
- [x] 3.7 Ensure responsive breakpoints: single column mobile, multi-column desktop

## 4. Integration and Cleanup

- [x] 4.1 Replace old CSS link with Tailwind output CSS link in index.html
- [x] 4.2 Preserve Font Awesome CDN link for icons
- [x] 4.3 Verify service worker registration still works
- [x] 4.4 Verify all external links open in new tabs (target="_blank", rel="noopener")
- [x] 4.5 Add alt text to all images and icons

## Context

The current index.html is a static HTML page with hand-written CSS (`assets/css/style.css`) using a "hacker terminal" green-on-black theme. There is no build system — no `package.json`, no bundler, no CSS preprocessor. The CV content is outdated compared to `axel_cv.pdf`. Other pages (calc.html, poupanca.html, etc.) exist but are out of scope for this change.

## Goals / Non-Goals

**Goals:**
- Set up a minimal TailwindCSS v3 build pipeline with Node.js
- Redesign index.html as a professional dark-themed CV page
- Update all professional data from axel_cv.pdf
- Keep the site deployable to GitHub Pages (static, no server build)

**Non-Goals:**
- Modifying other pages (calc.html, poupanca.html, pesquisa_cep.html, etc.)
- Redesigning the service worker or PWA manifest
- Adding animations or interactive JavaScript beyond navigation
- Changing the URL structure or adding routing

## Decisions

### Decision: TailwindCSS v3 via PostCSS (not CDN)
**Choice**: Install tailwindcss + postcss + autoprefixer as devDependencies, use a `postcss.config.js` and a build script to compile `src/input.css` → `assets/css/output.css`.

**Alternatives considered**:
- Tailwind CDN (`<script src="https://cdn.tailwindcss.com">`): Rejected — produces larger CSS, no purging, not production-appropriate, and adds a runtime dependency
- Other CSS frameworks (Bootstrap, Bulma): Rejected — Tailwind's utility-first approach is ideal for a custom dark theme without writing custom CSS classes

**Rationale**: The PostCSS approach produces a small, purged CSS file that can be committed to the repo, keeping GitHub Pages deployment simple while following modern best practices.

### Decision: Preserve existing `assets/css/style.css`
**Choice**: Keep the old CSS file in the repo (other pages still reference it) but stop loading it from index.html.

**Rationale**: Other HTML pages in the project use `assets/css/style.css`. Removing it would break those pages. The new index.html simply uses the Tailwind output instead.

### Decision: Single-page layout with vertical scrolling
**Choice**: All CV sections on one page, scrollable, with a sticky/fixed nav bar for quick jumps.

**Alternatives considered**:
- Multi-page site: Rejected — overkill for a CV/portfolio; single page is standard for personal sites
- SPA with JS routing: Rejected — unnecessary complexity for a static GitHub Pages site

**Rationale**: A single scrollable page with anchor links is the standard pattern for developer portfolio sites and matches the existing structure.

### Decision: Color palette
**Choice**: Dark background (`bg-gray-950`), card surfaces (`bg-gray-900`), text (`text-gray-100`), accent (`text-emerald-400` or `text-cyan-400`), subtle borders (`border-gray-800`).

**Rationale**: Provides a professional dark theme that's easy on the eyes, with enough contrast for accessibility. The accent color adds visual interest without being garish.

### Decision: Font selection
**Choice**: Use Inter (Google Fonts) for body text, maintaining a clean professional look. Keep the existing monospace stack for any code-related elements.

**Alternatives considered**:
- System font stack: Lower visual quality
- Custom paid fonts: Unnecessary for a personal site

## Risks / Trade-offs

- **[Risk]** GitHub Pages won't run `npm run build` on deploy → **Mitigation**: The compiled CSS is committed to the repo; developers must run the build locally before committing HTML changes
- **[Risk]** Tailwind output CSS could grow large if not purged → **Mitigation**: PostCSS with `@tailwindcss/typography` and content paths configured to only scan index.html
- **[Trade-off]** Old CSS file stays in repo → Accepted because other pages depend on it; removing it is a separate future task

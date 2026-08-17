## Why

A página atual do CV (index.html) usa CSS manual escrito com um tema "hacker" verde sobre fundo escuro, sem responsividade moderna e com markup semântico deficiente. O conteúdo do CV está desatualizado em relação ao PDF `axel_cv.pdf` — experiência profissional recente (ABRTELECOM, INOVVATI, THINKSEG) e formações acadêmicas (MBA, pós-graduação) não aparecem na página. O site não usa sistema de build para CSS, dificultando manutenção e escalabilidade.

## What Changes

- **Novo build pipeline**: Adicionar `package.json` com TailwindCSS v3 + PostCSS + Node script para gerar CSS production-ready
- **Reescrita do `index.html`**: Layout dark profissional responsivo usando classes Tailwind, reorganizado em seções claras (perfil, experiência, skills, certificações, contato)
- **Dados atualizados**: Incorporar informações do `axel_cv.pdf` — experiência profissional completa, formação acadêmica, idiomas, certificações com anos
- **Remover dependência do CSS manual**: O `assets/css/style.css` não será mais carregado pelo index.html; Tailwind gera o CSS final

## Capabilities

### New Capabilities
- `portfolio/cv-page`: Layout principal da página de CV/portfólio — estrutura HTML, seções, responsividade, tema dark, dados profissionais

### Modified Capabilities

## Impact

- **Arquivos modificados**: `index.html` (reescrita completa), novo `package.json`, novo `tailwind.config.js`, novo `src/input.css`, novo script de build
- **Arquivos gerados**: `assets/css/output.css` (CSS compilado via Tailwind)
- **Dependências novas**: `tailwindcss`, `postcss`, `autoprefixer` (devDependencies)
- **Nenhuma quebra de compatibilidade**: O site continua sendo estático no GitHub Pages; o CSS gerado é commitado no repo
- **Service Worker e PWA**: Mantidos sem alteração
- **Outras páginas** (calc.html, poupanca.html, etc): Não afetadas — continuam usando o CSS antigo

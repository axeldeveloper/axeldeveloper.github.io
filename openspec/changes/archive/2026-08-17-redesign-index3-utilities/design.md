## Context

O index3.html atual usa W3.CSS com layout sidebar desatualizado. O projeto já tem um pipeline TailwindCSS funcionando para index.html (src/input.css → assets/css/output.css). index3.html precisa de um pipeline CSS separado para não conflitar.

## Goals / Non-Goals

**Goals:**
- Reescrever index3.html com TailwindCSS e layout dark profissional
- Criar submenu "Utilitários" na sidebar com links para todas as páginas de ferramentas
- Gerar CSS separado (output3.css) para não conflitar com index.html
- Layout responsivo: sidebar colapsável no mobile, visível no desktop

**Non-Goals:**
- Modificar index.html ou seu CSS
- Modificar as páginas utilitárias (calc.html, poupanca.html, etc.)
- Adicionar JavaScript além do toggle do submenu e sidebar

## Decisions

### Decision: Pipeline CSS separado (input3.css → output3.css)
**Choice**: Criar `src/input3.css` com diretivas Tailwind, compilar para `assets/css/output3.css` via script `npm run build:index3`.

**Alternativas consideradas**:
- Usar o mesmo output.css: Rejeitado — conflitaria com index.html e dificultaria manutenção
- CDN do Tailwind: Rejeitado — não production-ready

**Rationale**: Manter CSS isolado permite evoluir cada página independentemente.

### Decision: Sidebar colapsável com JavaScript vanilla
**Choice**: Toggle simples com.addEventListener para expandir/colapsar submenu e abrir/fechar sidebar no mobile.

**Alternativas consideradas**:
- Biblioteca JS (Alpine.js): Rejeitada — excesso de dependência para toggle simples
- CSS puro (details/summary): Rejeitado — menos controle sobre animação

**Rationale**: JavaScript vanilla é suficiente e não adiciona dependências.

### Decision: Layout dark consistente com index.html
**Choice**: Mesma paleta de cores (bg-gray-950, text-gray-100, accent emerald/cyan) para manter consistência visual do site.

## Risks / Trade-offs

- **[Risk]** Tailwind config pode precisar de content paths para index3.html → **Mitigation**: Adicionar index3.html ao array content no tailwind.config.js
- **[Trade-off]** CSS duplicado entre as duas páginas → Aceitável porque cada página tem necessidades de estilo diferentes

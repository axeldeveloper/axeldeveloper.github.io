## Why

O index3.html atual usa W3.CSS com layout sidebar desatualizado, sem responsividade moderna, e não oferece navegação para as ferramentas utilitárias do site (calculadoras, poupança, pesquisa CEP). Precisa ser reescrito com TailwindCSS para ficar profissional, mobile-friendly, e incluir um submenu de utilitários.

## What Changes

- **Reescrita do `index3.html`**: Layout dark profissional com sidebar colapsável, totalmente responsivo usando TailwindCSS
- **Novo submenu "Utilitários"**: Menu expansível na sidebar com links para `calc.html`, `calc_programer.html`, `calc_folha.html`, `poupanca.html`, `pesquisa_cep.html`
- **Novo arquivo CSS**: Gerar `assets/css/output3.css` via TailwindCSS, separado do `output.css` do index.html para evitar conflitos
- **Atualização do build**: Adicionar script `build:index3` no `package.json` para compilar o CSS do index3
- **Conteúdo atualizado**: Dados profissionais do CV, seções About, Experiência, Skills, Contato

## Capabilities

### New Capabilities
- `portfolio/utilities-page`: Layout da página index3.html com sidebar, submenu de utilitários, e seções de conteúdo profissional

### Modified Capabilities

## Impact

- **Arquivos modificados**: `index3.html` (reescrita), `package.json` (novo script de build)
- **Arquivos gerados**: `assets/css/output3.css` (CSS compilado para index3)
- **Arquivos novos**: `src/input3.css` (entry point para o CSS do index3)
- **Nenhuma quebra de compatibilidade**: index.html continua usando `output.css`; index3 usa `output3.css`
- **Outras páginas não afetadas**: calc.html, poupanca.html, etc. continuam como estão

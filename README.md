# Portfólio — Fabio Britto

Projeto React (Vite) gerado a partir do design feito no Figma.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção (arquivos estáticos prontos para o GitHub Pages, Vercel, Netlify etc.):

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/`.

## Estrutura do projeto

```
src/
├── theme.css              <- PALETA DE CORES (edite aqui para trocar as cores)
├── index.css               <- estilos globais (reset, tipografia base)
├── data/
│   └── content.js          <- textos, projetos, skills e dados de contato
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Contact.jsx / .css
│   ├── Footer.jsx / .css
│   ├── shared.css          <- estilos de botao e titulo de secao
│   └── icons/
│       └── ContactIcons.jsx
└── assets/
    ├── profile.jpg
    └── skills/              <- icones das tecnologias (SVG)
```

## Como trocar as cores

Edite **`src/theme.css`**. Todas as cores do site vem dessas variaveis -
nenhum componente tem cor fixa no CSS. As principais sao:

| Variavel | O que controla |
|---|---|
| `--color-bg` | fundo geral do site |
| `--color-bg-elevated` | fundo dos cards, pilula do menu, icones de contato |
| `--color-accent` | laranja de destaque (titulos, botoes, bordas) |
| `--color-accent-hover` | tom usado no hover dos botoes/links |
| `--color-text` | texto principal (branco) |
| `--color-text-muted` | texto secundario (descricoes) |

Se for pedir para o Cursor mudar a paleta, algo como:

> "No arquivo src/theme.css, troque --color-accent e --color-accent-hover
> para uma paleta de azul, mantendo o mesmo fundo escuro."

ja deve funcionar bem, porque o resto do projeto so consome essas variaveis.

## Como editar o conteudo

Textos, projetos, skills e dados de contato ficam em `src/data/content.js` -
nao e necessario mexer nos componentes para atualizar informacoes.

- **Projetos**: edite o array `projects` (nome, descricao, tecnologias, link).
- **Skills**: edite o array `skills`. Os icones ficam em `src/assets/skills/`
  (SVGs do devicon.dev); para adicionar uma tecnologia nova, baixe o SVG
  correspondente e importe do mesmo jeito.
- **Contato / Hero / Sobre mim**: edite os objetos `profile` e `contact`.

## Curriculo

O botao "Baixar curriculo" aponta para `/curriculo-fabio-britto.pdf`.
Coloque seu PDF de curriculo dentro da pasta `public/` com esse nome
(ou ajuste o caminho em `src/data/content.js`, campo `resumeUrl`).

## Publicando no GitHub Pages

Se for publicar como pagina de projeto (`seu-usuario.github.io/portfolio`),
defina a propriedade `base` no `vite.config.js`:

```js
export default defineConfig({
  base: '/nome-do-repositorio/',
  plugins: [react()],
})
```

Se for publicar como pagina principal do perfil (repositorio
`seu-usuario.github.io`), nao e necessario definir `base`.

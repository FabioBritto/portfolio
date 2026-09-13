# Especificação de Atualização — Portfólio Fabio Britto

> Arquivo de referência para ser usado no Cursor. Contém todos os valores,
> textos e decisões já definidos — não é necessário perguntar nada ao
> usuário, só implementar o que está descrito aqui.

Projeto base: React + Vite, estrutura em `src/components`, `src/data/content.js`
e `src/theme.css` (ver README do projeto para mais contexto).

---

## 1. Nova paleta de cores

Paleta de origem (Color Hunt):

| Cor | Hex | Proporção na imagem | Papel no site |
|---|---|---|---|
| Marrom-oliva escuro | `#2e2910` | maior (dominante) | fundo principal |
| Verde floresta | `#2c5745` | segunda maior | fundo de cards/superfícies elevadas |
| Creme | `#ebe3a7` | terceira | texto principal |
| Laranja | `#eb7d00` | menor (a mais "rara") | cor de destaque (accent/CTA) |

A lógica: na imagem original, o laranja é a cor que aparece em **menor
proporção** — isso indica que ele deve continuar sendo usado com
parcimônia, só nos pontos de destaque (botões, links ativos, ícones de
ênfase), exatamente como já é hoje. As outras três cores formam a base
neutra do site (fundo, superfícies e texto).

### Substituir todo o conteúdo de `src/theme.css` por:

```css
:root {
  /* Fundo */
  --color-bg: #2e2910;            /* fundo principal (marrom-oliva escuro) */
  --color-bg-elevated: #2c5745;   /* fundo de cards, pílula do menu, ícones */
  --color-bg-elevated-2: #376d56; /* variação mais clara do verde, para hover/alternância */

  /* Cor de destaque (accent) */
  --color-accent: #eb7d00;        /* laranja principal */
  --color-accent-hover: #ffa53e;  /* laranja mais claro, usado em hover */
  --color-accent-soft: #eb7d0040; /* laranja com transparência, para bordas/glow */

  /* Texto */
  --color-text: #ebe3a7;          /* texto principal (creme) */
  --color-text-muted: #ebe3a7b3;  /* texto secundário (creme com opacidade) */
  --color-text-on-accent: #2e2910; /* texto sobre fundo laranja (botões) */

  /* Bordas */
  --color-border: #eb7d0066;   /* borda sutil laranja (cards, avatar) */
  --color-border-soft: #ebe3a726; /* borda sutil creme (divisórias) */

  /* Tipografia */
  --font-heading: 'Poppins', 'Segoe UI', sans-serif;
  --font-body: 'Inter', 'Segoe UI', sans-serif;

  /* Layout */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --max-width: 1120px;
}
```

**Atenção:** como `--color-text` deixa de ser branco puro e passa a ser
creme, revisar visualmente o contraste em `Navbar.jsx`/`.css` e no botão
`.button--primary` (o texto do botão já usa `--color-text-on-accent`,
então não muda). Onde havia `color: #ffffff` "hardcoded" em algum CSS
(não deveria haver, mas vale conferir), trocar por `var(--color-text)`.

---

## 2. Dados de contato

Editar em `src/data/content.js`, objeto `contact`:

```js
export const contact = {
  name: "Fabio Britto",
  email: "fabio.tritono@gmail.com",
  phone: "(11) 94920-6925",
  github: "https://github.com/FabioBritto",
};
```

- Remover o campo `instagram`.
- **Trocar o ícone de Instagram pelo de GitHub** no componente `Contact.jsx`
  (a pessoa não tem Instagram, então o card de contato passa a exibir
  GitHub no lugar).
- Criar um `GithubIcon` em `src/components/icons/ContactIcons.jsx`, seguindo
  o mesmo padrão dos outros ícones (SVG inline, `stroke`/`fill` em
  `currentColor` para herdar a cor via CSS). Pode usar o path oficial do
  logo do GitHub (disponível em bibliotecas como `simple-icons`/`devicon`,
  slug `github`).
- Atualizar o array `items` em `Contact.jsx` para usar `GithubIcon` no
  lugar do ícone de Instagram, com label "GitHub" e valor o link completo
  (`https://github.com/FabioBritto`), tornando o texto clicável (`<a>`)
  já que agora é um link externo (diferente de nome/telefone, que são só
  texto).

---

## 3. Nova seção de destaque: Blog no Medium

Adicionar uma seção nova e **visualmente destacada** (diferente das
demais — pode usar `--color-bg-elevated` como fundo do bloco, borda em
`--color-accent`, ou um selo/badge chamando atenção), com o seguinte
conteúdo:

- **Título:** "Blog no Medium"
- **Texto:** "A intenção é poder publicar artigos frutos dos meus estudos
  ao longo dos últimos anos."
- **Botão/CTA:** "Ler no Medium" → `https://medium.com/@fabio.tritono`
  (abrir em nova aba, `target="_blank" rel="noreferrer"`)

Sugestão de implementação:
- Novo componente `src/components/Blog.jsx` + `Blog.css`, seção com
  `id="blog"`.
- Posicionar entre **Sobre mim** e **Projetos** (funciona como uma
  continuação natural do "quem eu sou" antes de mostrar os projetos), mas
  com destaque visual próprio (card centralizado, borda ou fundo
  diferenciado) para não parecer só mais um parágrafo de texto.
- Adicionar "Blog" em `navLinks` (`src/data/content.js`), apontando para
  `#blog`, entre "Sobre mim" e "Projetos".
- Reaproveitar a classe `.button--primary` já existente para o CTA.

---

## 4. Tecnologias (Habilidades)

Substituir o array `skills` em `src/data/content.js` pela lista abaixo,
**organizada por categoria** (a seção `Skills.jsx` deve passar a renderizar
subgrupos com um título pequeno para cada categoria, em vez de um grid
único e plano como hoje).

| Categoria | Tecnologias |
|---|---|
| Backend | Java, Spring Boot, TypeScript, JavaScript, NestJS, Express |
| Frontend | React |
| Container | Docker |
| Bancos de dados | PostgreSQL, MySQL, SQLite |
| Migrations / Query builders / ORM | JPA/Hibernate, TypeORM, Prisma, Knex.js |
| Versionamento | Git |

### Ícones a usar

Todos, exceto o do TypeORM, existem no pacote **`devicon`**
(`npm install devicon`, depois copiar os SVGs individuais de
`node_modules/devicon/icons/...` para `src/assets/skills/`, do mesmo jeito
que já foi feito para as tecnologias atuais — **não** importar o CSS/webfont
inteiro do devicon, ele pesa alguns MB).

| Tecnologia | Arquivo devicon a copiar |
|---|---|
| Java | `java/java-plain.svg` *(já existe no projeto)* |
| Spring Boot | `spring/spring-original.svg` |
| TypeScript | `typescript/typescript-plain.svg` *(já existe)* |
| JavaScript | `javascript/javascript-original.svg` *(já existe)* |
| NestJS | `nestjs/nestjs-plain.svg` (se não existir "plain", usar `nestjs-original.svg`) |
| Express | `express/express-original.svg` (ícone é preto — ver nota abaixo) |
| React | `react/react-original.svg` *(já existe)* |
| Docker | `docker/docker-plain.svg` *(já existe)* |
| PostgreSQL | `postgresql/postgresql-plain.svg` *(já existe)* |
| MySQL | `mysql/mysql-original.svg` *(já existe)* |
| SQLite | `sqlite/sqlite-original.svg` |
| JPA/Hibernate | `hibernate/hibernate-original.svg` |
| Prisma | `prisma/prisma-original.svg` (ícone é preto — ver nota abaixo) |
| Knex.js | `knexjs/knexjs-original.svg` |
| Git | `git/git-original.svg` *(já existe)* |

**TypeORM** não está no `devicon`. Usar o pacote **`simple-icons`**
(`npm install simple-icons`) — arquivo `node_modules/simple-icons/icons/typeorm.svg`.
Esse SVG vem sem cor de preenchimento definida (`fill` implícito preto);
adicionar `fill="#FE0803"` (cor oficial da marca) ao copiar para
`src/assets/skills/typeorm.svg`.

**Nota sobre ícones pretos (Express, Prisma):** os SVGs originais do
Express e do Prisma são monocromáticos em preto, o que pode "sumir" contra
o novo fundo escuro do card de skill. Duas opções:
1. Editar o SVG copiado trocando o `fill`/`stroke` preto por
   `currentColor` (assim ele herda `--color-text`, ficando creme, visível
   sobre o fundo verde do card); **ou**
2. Colocar esses dois cards de skill com fundo levemente mais claro
   (ex.: `--color-bg-elevated-2`) para dar contraste ao ícone preto.

A opção 1 é a mais simples e consistente com o resto do projeto.

### Ajuste em `Skills.jsx`

Hoje `skills` é uma lista plana. Trocar a estrutura de dados para algo como:

```js
export const skillGroups = [
  {
    category: "Backend",
    items: [/* Java, Spring Boot, TypeScript, JavaScript, NestJS, Express */],
  },
  { category: "Frontend", items: [/* React */] },
  { category: "Container", items: [/* Docker */] },
  { category: "Bancos de dados", items: [/* PostgreSQL, MySQL, SQLite */] },
  {
    category: "Migrations, query builders e ORM",
    items: [/* JPA/Hibernate, TypeORM, Prisma, Knex.js */],
  },
  { category: "Versionamento", items: [/* Git */] },
];
```

E renderizar em `Skills.jsx` um bloco por categoria (título da categoria +
grid de ícones daquela categoria), mantendo o mesmo estilo de card já
existente em `Skills.css`.

---

## 5. Projetos

**Não alterar.** Manter os 4 cards de projeto com os textos "mock" (Lorem
ipsum / "Nome do projeto") como estão hoje em `src/data/content.js` — os
projetos reais ainda serão definidos depois.

---

## 6. Checklist final para o Cursor

- [ ] `src/theme.css` substituído pela nova paleta (seção 1)
- [ ] Contraste revisado após trocar texto principal para creme
- [ ] `contact` atualizado (telefone, e-mail, GitHub) em `content.js`
- [ ] Ícone de Instagram trocado por ícone de GitHub em `Contact.jsx` /
      `ContactIcons.jsx`, com link clicável para o GitHub
- [ ] Nova seção `Blog.jsx` criada, com destaque visual, textos exatos da
      seção 3, e link para o Medium
- [ ] `navLinks` atualizado com a entrada "Blog" apontando para `#blog`
- [ ] `skills` reestruturado em `skillGroups` por categoria (seção 4)
- [ ] Ícones das novas tecnologias copiados para `src/assets/skills/`
      (via `devicon`, exceto TypeORM via `simple-icons`)
- [ ] Ícones pretos (Express, Prisma) ajustados para `currentColor`
- [ ] `Skills.jsx`/`Skills.css` ajustados para renderizar por categoria
- [ ] Seção de Projetos mantida sem alterações
- [ ] `npm run build` rodando sem erros ao final
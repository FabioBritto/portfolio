# Especificação de Atualização — Portfólio Fabio Britto (Parte 2)

> Continuação do arquivo `spec-atualizacao-portfolio.md`. Este documento
> **substitui** o item de agrupamento de habilidades da spec anterior
> (seção 4) e adiciona ajustes de layout no Hero e no Contato.

---

## 1. Unir o texto "Sobre mim" ao lado do nome

**Hoje:** o Hero (foto + "Olá, eu sou" + nome + cargo + botão) fica em
cima, e "Sobre mim" aparece bem mais abaixo, como uma seção own própria
com título, parágrafo e botão.

**Mudar para:** o texto de "Sobre mim" passa a ficar **ao lado do nome**,
na mesma coluna direita onde já estão "Olá, eu sou / Fabio Britto /
Desenvolvedor Full Stack" — ou seja, unificar Hero + Sobre mim em um único
bloco visual (foto à esquerda; nome, cargo, parágrafo de apresentação e
botão à direita).

Implementação sugerida:
- Mesclar o conteúdo de `About.jsx` para dentro de `Hero.jsx` (ou manter
  os dois componentes, mas renderizá-los lado a lado na mesma seção/grid,
  como preferir organizar o código — o importante é o resultado visual:
  uma coluna única à direita da foto, sem o parágrafo "cair" para uma
  seção separada mais abaixo).
- O título "Sobre mim" em destaque (laranja) pode ser removido, já que o
  contexto fica claro ao lado do nome — ou reduzido a um texto menor, se
  preferir manter alguma indicação. Fica a critério de quem implementar,
  desde que não repita informação.
- Manter o `id="sobre"` em algum elemento dentro desse bloco (mesmo que
  visualmente unificado ao Hero), para que o link "Sobre mim" do menu
  continue funcionando com scroll até essa área.
- Como o parágrafo de apresentação e o botão de currículo (ver item 2)
  passam a existir só uma vez (dentro do Hero), remover a duplicidade que
  existia antes (Hero tinha botão de LinkedIn; Sobre mim tinha botão de
  currículo — agora é só um botão, ver abaixo).

---

## 2. Trocar o botão do Hero

**Hoje:** o botão principal do Hero é "Acessar o LinkedIn".

**Mudar para:** "Baixar Currículo" — mesmo botão que já existia na seção
"Sobre mim" antiga (agora fica só esse, um único CTA no bloco unificado
do item 1).

- Continua sendo um link de download: `href="/curriculo-fabio-britto.pdf"`
  com atributo `download`.
- O arquivo `curriculo-fabio-britto.pdf` deve estar na raiz do projeto,
  dentro da pasta `public/` (para o Vite servir corretamente em
  `/curriculo-fabio-britto.pdf`).
- O link do LinkedIn não desaparece do site — ele passa a viver no bloco
  de Contato (ver item 3).

---

## 3. Cartões de contato: maiores, quadrados, sem "Nome", com LinkedIn

**Hoje:** 4 itens (Nome, E-mail, GitHub, Telefone), cada um com um ícone
circular pequeno, rótulo acima e valor abaixo.

**Mudar para:**
- Ícones **maiores** e **quadrados** (trocar o `border-radius: 999px` do
  `.contact-item__icon-wrap` por algo como `var(--radius-md)`, e aumentar
  o tamanho da caixa — por exemplo de 48px para algo em torno de 64–72px,
  com o ícone interno proporcionalmente maior também).
- **Remover o item "Nome"** (não faz sentido repetir o nome que já aparece
  no Hero).
- **Adicionar um item "LinkedIn"**, com o link
  `https://www.linkedin.com/in/fabio-britto-399223252/`.
- Itens finais do bloco de contato, nessa ordem sugerida: **E-mail,
  GitHub, LinkedIn, Telefone**.
- Precisa de um `LinkedinIcon` novo em
  `src/components/icons/ContactIcons.jsx`, seguindo o mesmo padrão dos
  outros (SVG inline, `currentColor`, mesmo tamanho/estilo do `GithubIcon`
  já criado na Parte 1 da spec).
- Assim como GitHub, o item de LinkedIn deve ser um link clicável
  (`<a href="..." target="_blank" rel="noreferrer">`), abrindo em nova
  aba.

---

## 4. Habilidades: **manter lista única, sem agrupar por categoria**

Este item **substitui** a seção 4 da spec anterior
(`spec-atualizacao-portfolio.md`), que sugeria organizar as tecnologias em
subgrupos (Backend, Frontend, Bancos de dados, etc.).

**Decisão atualizada:** manter todos os ícones de tecnologia lado a lado,
num grid único (igual ao layout original do Figma), **sem** títulos de
categoria e **sem** separação visual entre grupos.

- Manter `skills` como uma lista plana simples (não usar `skillGroups`).
- A lista completa de tecnologias continua a mesma definida na Parte 1 da
  spec (Java, Spring Boot, TypeScript, JavaScript, NestJS, Express, React,
  Docker, PostgreSQL, MySQL, SQLite, JPA/Hibernate, TypeORM, Prisma,
  Knex.js, Git) — só a forma de exibir (agrupada vs. lista única) muda.
- `Skills.jsx` volta a ser o componente simples que já existia antes
  (um único `.skills__grid` com todos os cards), só que agora com a lista
  de tecnologias maior.

---

## Checklist desta parte

- [ ] Hero e "Sobre mim" unificados numa coluna só, ao lado do nome
- [ ] `id="sobre"` preservado para o link do menu continuar funcionando
- [ ] Botão único no Hero: "Baixar Currículo" → `/curriculo-fabio-britto.pdf`
- [ ] Botão antigo "Acessar o LinkedIn" removido do Hero
- [ ] Arquivo `curriculo-fabio-britto.pdf` colocado em `public/`
- [ ] Ícones de contato maiores e quadrados (`--radius-md`, ~64–72px)
- [ ] Item "Nome" removido do bloco de Contato
- [ ] Item "LinkedIn" adicionado (ícone novo + link clicável)
- [ ] Ordem final do Contato: E-mail, GitHub, LinkedIn, Telefone
- [ ] Habilidades revertidas para lista única, sem agrupamento por categoria
- [ ] `npm run build` rodando sem erros ao final
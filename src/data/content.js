// ============================================================
// CONTEÚDO DO PORTFÓLIO
// Edite aqui os textos, projetos, skills e dados de contato.
// ============================================================

import academoLogo from "../assets/academo-logo.png";
import appMomentsLogo from "../assets/app-moments-logo.jpeg";
import msPaymentLogo from "../assets/ms-payment-management.jpeg";
import springBrittoLogo from "../assets/spring-boot-logo.png";

export const profile = {
  name: "Fabio Britto",
  role: "Desenvolvedor Full Stack",
  resumeUrl: "/curriculo-fabio-britto.pdf",
  about: [
    "Desenvolvedor Full Stack com experiência no desenvolvimento de aplicações web, especializado em Java e ecossistema Spring para construção de APIs REST robustas, escaláveis e de alto desempenho.",
    "Minha trajetória acadêmica e profissional inclui estudos em desenvolvimento mobile e desktop, embora meu principal foco tenha sido o desenvolvimento web, abrangendo tanto o backend quanto o frontend. Possuo experiência consistente na criação e consumo de APIs REST, integração entre sistemas e desenvolvimento de aplicações utilizando diferentes tecnologias e arquiteturas.",
    "Tenho como compromisso a aplicação de boas práticas de programação, princípios de Clean Code e SOLID, buscando desenvolver soluções organizadas, manuteníveis e alinhadas às necessidades reais dos usuários e do negócio.",
    "Também possuo experiência no desenvolvimento de aplicações que envolvem integrações com serviços de Inteligência Artificial e Large Language Models (LLMs), além de conhecimentos em plataformas low-code, como n8n e Bubble.",
    "Sou formado em Análise e Desenvolvimento de Sistemas pela FATEC e possuo diversos diplomas e certificações de cursos livres realizados por instituições como Udemy, SENAI, entre outras.",
  ],
};

export const projects = [
  {
    id: 1,
    name: "Academo",
    description:
      "Plataforma de gerenciamento acadêmico que ajuda estudantes a organizar matérias, notas e arquivos da faculdade, com integração ao serviço de envio de e-mails Resend e ao gateway de pagamentos ASAAS.",
    tech: "Java, Spring Boot, PostgreSQL, Liquibase, Angular, Bootstrap",
    logo: academoLogo,
    backendUrl: "https://github.com/christianfernandesprofissional/Academo-v2",
    frontendUrl: "https://github.com/FabioBritto/academo-front-v2",
  },
  {
    id: 2,
    name: "AppMoments",
    description:
      "Aplicação baseada no curso da IsiFlix do Java Champion Professor Isidro com incrementos pessoais da minha parte, como o uso de Docker e Redis para Refresh Token.",
    tech: "Java, Spring Boot, Liquibase, Redis, Docker",
    logo: appMomentsLogo,
    url: "https://github.com/FabioBritto/moments-backend",
  },
  {
    id: 3,
    name: "HR Payment Microservices",
    description:
      "Projeto de estudo de microsserviços de gestão de pagamento (HR) com Spring Cloud: cálculo de pagamento de trabalhadores, gestão de usuários e papéis, e APIs protegidas com OAuth2 + JWT via Eureka, Config Server e API Gateway (Zuul).",
    tech: "Java, Spring Boot, Spring Cloud, Eureka, Zuul, OpenFeign, OAuth2, JWT, Docker",
    logo: msPaymentLogo,
    url: "https://github.com/FabioBritto/microsservicos-payment-management",
  },
  {
    id: 4,
    name: "Spring Britto",
    description:
      "Objeto de estudo técnico — não é um produto de mercado. Framework web simplificado inspirado no Spring, feito a partir das aulas do Professor Isidro (IsiFlix) para entender por dentro injeção de dependências, anotações, dispatcher servlet, reflection e mapeamento de requisições.",
    tech: "Java, Servlet API, Reflection, Tomcat, GSON",
    logo: springBrittoLogo,
    url: "https://github.com/FabioBritto/spring-britto",
  },
];

// Ícones das tecnologias (SVGs individuais do devicon, copiados para
// src/assets/skills — assim o site não carrega a fonte inteira do devicon,
// só os ícones usados).
import javaIcon from "../assets/skills/java.svg";
import springIcon from "../assets/skills/spring.svg";
import typescriptIcon from "../assets/skills/typescript.svg";
import javascriptIcon from "../assets/skills/javascript.svg";
import nestjsIcon from "../assets/skills/nestjs.svg";
import expressIcon from "../assets/skills/express.svg";
import reactIcon from "../assets/skills/react.svg";
import dockerIcon from "../assets/skills/docker.svg";
import postgresqlIcon from "../assets/skills/postgresql.svg";
import mysqlIcon from "../assets/skills/mysql.svg";
import sqliteIcon from "../assets/skills/sqlite.svg";
import hibernateIcon from "../assets/skills/hibernate.svg";
import typeormIcon from "../assets/skills/typeorm.svg";
import prismaIcon from "../assets/skills/prisma.svg";
import knexjsIcon from "../assets/skills/knexjs.svg";
import gitIcon from "../assets/skills/git.svg";

export const skills = [
  { name: "Java", icon: javaIcon },
  { name: "Spring Boot", icon: springIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "NestJS", icon: nestjsIcon },
  { name: "Express", icon: expressIcon },
  { name: "React", icon: reactIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "SQLite", icon: sqliteIcon },
  { name: "JPA/Hibernate", icon: hibernateIcon },
  { name: "TypeORM", icon: typeormIcon },
  { name: "Prisma", icon: prismaIcon },
  { name: "Knex.js", icon: knexjsIcon },
  { name: "Git", icon: gitIcon },
];

export const contact = {
  email: "fabio.tritono@gmail.com",
  phone: "(11) 94920-6925",
  whatsapp: "https://wa.me/5511949206925",
  github: "https://github.com/FabioBritto",
  linkedin: "https://www.linkedin.com/in/fabio-britto-399223252/",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Blog", href: "#blog" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

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

export const experiences = [
  {
    id: 1,
    role: "Supervisor de TI",
    company: "Casas da Mamãe",
    period: "Julho/2026 – Atual",
    paragraphs: [
      "Atuo como supervisor de TI em empresa do setor de varejo, liderando a equipe de TI no suporte aos demais usuários da empresa, na construção de relatórios de compra e venda, e no apoio a setores operacionais e estratégicos do negócio.",
      "Paralelamente à gestão da equipe, trabalho na integração do ERP Innovaro com os sistemas internos da empresa por meio de API REST, e também na integração com a API do relógio de ponto, trazendo mais visibilidade sobre indicadores operacionais para gestores e diretoria. Além disso, atuo na refatoração de sistemas desenvolvidos internamente, aplicando melhorias de segurança, performance, arquitetura e boas práticas de código.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "React",
      "SQLite",
      "API REST",
      "Integração de Sistemas (ERP)",
    ],
  },
  {
    id: 2,
    role: "Desenvolvedor Backend Freelance",
    company: "Projeto VTalk",
    period: "Janeiro – Maio/2026",
    paragraphs: [
      "Atuei como desenvolvedor Backend freelance em consultoria técnica focada na evolução arquitetural e no fortalecimento da segurança de um sistema de automação e mensageria construído sobre n8n e Supabase.",
      "Um dos principais entregáveis foi a implementação do fluxo completo de Follow-Up automatizado, com controle transacional e regras de negócio bem estruturadas, além da criação de chamadas RPC para garantir consistência e integridade no banco de dados. Também conduzi uma refatoração estratégica dos workflows do n8n, reestruturando nodes complexos em funções menores e mais coesas, aplicando princípios de Clean Code e separação de responsabilidades — o que trouxe mais previsibilidade, menor acoplamento e maior flexibilidade nos casos de uso.",
      "No banco de dados, fiz uma análise crítica da modelagem em produção, identificando inconsistências estruturais e propondo melhorias, o que me levou a desenvolver rotinas em PL/pgSQL para contornar problemas de performance e concorrência do n8n, garantindo conformidade com os princípios ACID. A partir dessas descobertas, replanejei a arquitetura geral do projeto (workflow + banco de dados), visando maior escalabilidade e manutenção futura.",
      "Também identifiquei e mitiguei vulnerabilidades em dependências críticas do sistema, e implementei microsserviços com API em Node.js (Express) — incluindo um serviço para recebimento e conversão de mídia e texto no formato padrão do WhatsApp, retornando o conteúdo em base64 — promovendo uma separação mais clara entre orquestração e domínio. Por fim, produzi documentação técnica detalhada das alterações e decisões arquiteturais, garantindo rastreabilidade e continuidade do projeto.",
    ],
    stack: [
      "JavaScript",
      "Node.js",
      "Express",
      "n8n",
      "PostgreSQL",
      "PL/pgSQL",
      "Supabase",
      "Docker",
    ],
  },
  {
    id: 3,
    role: "Desenvolvedor FullStack",
    company: "Projeto SmartChat",
    period: "Junho – Novembro/2025",
    paragraphs: [
      "Atuei como desenvolvedor Fullstack no desenvolvimento de um CRM com chatbot de IA para uma startup em modelo SaaS. O sistema permitia que o próprio usuário configurasse agentes de IA personalizados, definindo personalidade, restrições de comportamento e base de conhecimento própria. Fui responsável pelo módulo de RAG (Retrieval-Augmented Generation), integrando a base de conhecimento do usuário ao agente de IA para gerar respostas contextualizadas. Os agentes se conectavam a leads por meio de disparos programados, automatizando o primeiro contato e a qualificação.",
      "Trabalhei em squad com metodologia Scrum (dailies, plannings e reviews).",
    ],
    stack: [
      "TypeScript",
      "NestJS",
      "React",
      "PostgreSQL",
      "PgVector",
      "LangChain.js",
      "n8n",
      "Docker",
    ],
  },
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
  { label: "Experiência", href: "#experiencia" },
  { label: "Blog", href: "#blog" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

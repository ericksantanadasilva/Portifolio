import { PortfolioData } from "@/types/portfolio";

/**
 * =========================================================================
 * 🚀 ARQUIVO DE CONFIGURAÇÃO DO SEU PORTFÓLIO
 * =========================================================================
 * 
 * É aqui que você edita todas as informações exibidas no site.
 * Não é necessário alterar nenhum componente de código!
 * Todos os textos possuem suporte bilíngue: Português (pt) e Inglês (en).
 */

export const portfolioData: PortfolioData = {
  personal: {
    // Seu nome principal que aparecerá no topo com o cursor terminal
    name: "Erick",
    // Sobrenome ou apelido/handle opcional
    alias: "Sant'Ana",
    // Frase curta abaixo do nome
    tagline: {
      pt: "Desenvolvedor de Software & Entusiasta de Tecnologia",
      en: "Software Engineer & Technology Enthusiast",
    },
    // O comando terminal que aparece no Hero estilo: $ software engineer · full stack
    terminalRole: "developer · javascript · node.js · react",
    // Biografia principal
    bio: {
      pt: "Minha trajetória em tecnologia começou antes do código: passei por telecomunicações, suporte, dados e automações até encontrar no desenvolvimento de software uma área onde posso construir soluções do zero. Hoje estudo e desenvolvo principalmente com JavaScript, Node.js e React, sempre tentando entender não só como fazer algo funcionar, mas por que aquela é uma boa solução.",
      en: "My journey in technology started before the code: I worked in telecommunications, support, data, and automations until I found in software development an area where I can build solutions from scratch. Today I study and develop mainly with JavaScript, Node.js, and React, always trying to understand not only how something works, but why it is a good solution.",
    },
    // Sua localização
    location: {
      pt: "Brasil",
      en: "Brazil",
    },
    // URL ou caminho do avatar (em public/avatar.png ou link externo)
    avatarUrl: "/avatar.png",
    // Define se a badge "Disponível para oportunidades" fica verde
    availableForHire: true,
    // Efeito ao passar o mouse no nome: "typewriter" (apaga e reescreve com cursor) ou "scramble" (aleatoriza letras)
    nameAnimationMode: "typewriter",
  },

  // Widget estilo cápsula interativa no Hero (ex: ouvindo música ou status atual)
  statusWidget: {
    enabled: false,
    type: "working_on",
    text: {
      pt: "Construindo novos projetos em Next.js & Docker",
      en: "Building new projects with Next.js & Docker",
    },
    subtext: {
      pt: "focado em full-stack",
      en: "focusing on full-stack",
    },
    link: "https://github.com",
    isLive: true,
  },

  // Links sociais com ícones automáticos
  socials: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/ericksantanadasilva",
      username: "@ericksantanadasilva",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/eriicksantana/",
      username: "eriicksantana",
    },
    {
      platform: "email",
      label: "Email",
      url: "mailto:ericksans199@outlook.com",
      username: "ericksans199@outlook.com",
    },
    // {
    //   platform: "twitter",
    //   label: "X (Twitter)",
    //   url: "https://x.com",
    //   username: "@seu_twitter",
    // },
    // {
    //   platform: "discord",
    //   label: "Discord",
    //   url: "https://discord.com",
    //   username: "seu_usuario",
    // },
  ],

  // Grade de Tecnologias / Tech Stack (substituindo a seção de blog)
  techStack: [
    // Frontend
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "HTML5 / CSS3", category: "frontend" },

    // Backend
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "NestJS", category: "backend" },
    { name: "REST APIs", category: "backend" },

    // Database
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "Prisma ORM", category: "database" },

    // DevOps & Tools
    { name: "Docker", category: "devops" },
    { name: "Linux / VPS", category: "devops" },
    { name: "Git & GitHub", category: "tools" },
    { name: "CI/CD", category: "devops" },
    { name: "Nginx", category: "devops" },
  ],

  // Seus projetos (serão filtráveis instantaneamente pela barra de busca)
  projects: [
    {
      id: "modern-portfolio",
      title: "Portfolio",
      description: {
        pt: "Portfólio minimalista e veloz com suporte bilíngue, dark mode e conteinerização completa para deploy em VPS.",
        en: "Minimalist and fast portfolio with bilingual support, dark mode, and full containerization for VPS deployment.",
      },
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
      githubUrl: "https://github.com/ericksantanadasilva/Portifolio",
      liveUrl: "https://ericksantana.dev.br",
      featured: true,
    },
    {
      id: "portal-aluno",
      title: "PortalAluno",
      description: {
        pt: "SaaS acadêmico para cursos preparatórios desenvolvido com Next.js, React, TypeScript e Express.",
        en: "Academic SaaS for preparatory courses built with Next.js, React, TypeScript and Express",
      },
      tags: ["Node.js", "TypeScript", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/ericksantanadasilva/PortalAluno",
      liveUrl: "https://portal.ericksantana.dev.br",
      featured: true,
    },
    {
      id: "finance-ai",
      title: "Finance AI",
      description: {
        pt: "Plataforma financeira com inteligência artificial para gestão de finanças pessoais.",
        en: "Finance platform with artificial intelligence for personal finance management.",
      },
      tags: ["React", "Next.js", "Tailwind CSS", "Prisma", "Gemini API"],
      githubUrl: "https://github.com/ericksantanadasilva/finance-ai",
      liveUrl: "https://finance.ericksantana.dev.br/",
      featured: false,
    },
  ],

  // Suas experiências profissionais e acadêmicas
  experiences: [
    {
      id: "exp-1",
      role: {
        pt: "Assistente de Dados",
        en: "Data Assistant",
      },
      company: "Foco Medicina",
      period: {
        pt: "2024 - 2026",
        en: "2024 - 2026",
      },
      location: {
        pt: "Remoto",
        en: "Remote",
      },
      description: {
        pt: "Gestão de dados, criação de relatórios e dashboards, automação de processos repetitivos e criação de scripts para extração e manipulação de dados.",
        en: "Data management, report and dashboard creation, automation of repetitive processes and creation of scripts for data extraction and manipulation.",
      },
      skills: ["Google Sheets", "Google AppScript", "Power BI"],
    },
    {
      id: "exp-2",
      role: {
        pt: "Operador de Fibra Optica",
        en: "Fiber Optic Operator",
      },
      company: "Fiber Telecom",
      period: {
        pt: "2022 - 2023",
        en: "2022 - 2023",
      },
      location: {
        pt: "Presencial",
        en: "Presencial",
      },
      description: {
        pt: "Manutenção e diagnóstico de redes FTTH e equipamentos de telecomunicações, Atendimento técnico e resolução de chamados, cumprindo metas de SLA.",
        en: "Maintenance and diagnostics of FTTH networks and telecommunications equipment; technical support and ticket resolution, meeting SLA targets.",
      },
      skills: [" Fibra Optica"],
    },
    {
      id: "exp-3",
      role: {
        pt: "Operador de Fibra Optica",
        en: "Fiber Optic Operator",
      },
      company: "Edatel Telecom",
      period: {
        pt: "2019 - 2022",
        en: "2019 - 2022",
      },
      location: {
        pt: "Presencial",
        en: "Presencial",
      },
      description: {
        pt: "Manutenção e diagnóstico de redes e equipamentos de telecomunicações, Atendimento técnico e resolução de chamados, Instalação de equipamentos de rede em racks.",
        en: "Maintenance and diagnostics of networks and telecommunications equipment, Technical support and ticket resolution, Installation of network equipment in racks.",
      },
      skills: [" Fibra Optica"],
    },
    {
      id: "exp-4",
      role: {
        pt: "Técnico II",
        en: "Technician II",
      },
      company: "Itanet Conecta",
      period: {
        pt: "2019 - 2019",
        en: "2019 - 2019",
      },
      location: {
        pt: "Presencial",
        en: "Presencial",
      },
      description: {
        pt: "Manutenção e diagnóstico de redes e equipamentos de telecomunicações, Atendimento técnico e resolução de chamados, Instalação de equipamentos de rede em racks.",
        en: "Maintenance and diagnostics of networks and telecommunications equipment, Technical support and ticket resolution, Installation of network equipment in racks.",
      },
      skills: [" Fibra Optica"],
    },
    {
      id: "exp-5",
      role: {
        pt: "Auxiliar Técnico",
        en: "Technical Assistant",
      },
      company: "Vox Telecomunicações",
      period: {
        pt: "2018 - 2018",
        en: "2018 - 2018",
      },
      location: {
        pt: "Presencial",
        en: "Presencial",
      },
      description: {
        pt: "Manutenção e diagnóstico de redes e equipamentos de telecomunicações, Atendimento técnico e resolução de chamados, Instalação de equipamentos de rede em racks, Montagem e manutenção de bancos de baterias.",
        en: "Maintenance and diagnostics of networks and telecommunications equipment, Technical support and ticket resolution, Installation of network equipment in racks, Assembly and maintenance of battery banks.",
      },
      skills: [" Fibra Optica"],
    },
  ],

  // Informações de contato
  contact: {
    email: "ericksans199@outlook.com",
  },
};

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
    alias: "dev",
    // Frase curta abaixo do nome
    tagline: {
      pt: "Desenvolvedor de Software & Entusiasta de Tecnologia",
      en: "Software Engineer & Technology Enthusiast",
    },
    // O comando terminal que aparece no Hero estilo: $ software engineer · full stack
    terminalRole: "software engineer · full stack & cloud",
    // Biografia principal
    bio: {
      pt: "Sou um desenvolvedor focado em criar aplicações web modernas, escaláveis e com ótima experiência de uso. Apaixonado por arquitetura limpa, performance e automação.",
      en: "I am a developer focused on building modern, scalable web applications with great user experience. Passionate about clean architecture, performance, and automation.",
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
    {
      platform: "twitter",
      label: "X (Twitter)",
      url: "https://x.com",
      username: "@seu_twitter",
    },
    {
      platform: "discord",
      label: "Discord",
      url: "https://discord.com",
      username: "seu_usuario",
    },
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
    { name: "Python", category: "backend" },

    // Database
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },
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
      title: "Portfolio Next.js & Docker",
      description: {
        pt: "Portfólio minimalista e veloz com suporte bilíngue, dark mode e conteinerização completa para deploy em VPS.",
        en: "Minimalist and fast portfolio with bilingual support, dark mode, and full containerization for VPS deployment.",
      },
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://seusite.com",
      stars: 0,
      featured: true,
    },
    {
      id: "api-gateway-service",
      title: "Microservices Auth & Gateway",
      description: {
        pt: "Serviço de autenticação e roteamento de APIs com rate limiting, JWT e integração com Redis.",
        en: "Authentication and API routing service featuring rate limiting, JWT, and Redis integration.",
      },
      tags: ["Node.js", "TypeScript", "Docker", "Redis", "PostgreSQL"],
      githubUrl: "https://github.com",
      stars: 28,
      featured: true,
    },
    {
      id: "task-flow-app",
      title: "TaskFlow Manager",
      description: {
        pt: "Plataforma de produtividade e gestão de tarefas em tempo real com drag and drop e painéis kanban.",
        en: "Real-time productivity and task management platform with drag-and-drop and kanban boards.",
      },
      tags: ["React", "Next.js", "Tailwind CSS", "Prisma"],
      githubUrl: "https://github.com",
      liveUrl: "https://taskflow.exemplo.com",
      stars: 19,
      featured: false,
    },
    {
      id: "infra-vps-automation",
      title: "VPS Deploy Script & Docker Compose",
      description: {
        pt: "Automação para provisionamento de servidores VPS Linux com Nginx reverse proxy, SSL Certbot e Docker.",
        en: "Automation for provisioning Linux VPS servers with Nginx reverse proxy, SSL Certbot, and Docker.",
      },
      tags: ["Docker", "Linux", "Bash", "Nginx"],
      githubUrl: "https://github.com",
      stars: 35,
      featured: true,
    },
  ],

  // Suas experiências profissionais e acadêmicas
  experiences: [
    {
      id: "exp-1",
      role: {
        pt: "Desenvolvedor de Software Full Stack",
        en: "Full Stack Software Developer",
      },
      company: "Empresa de Tecnologia",
      companyUrl: "https://exemplo.com",
      period: {
        pt: "2023 - Presente",
        en: "2023 - Present",
      },
      location: {
        pt: "Remoto",
        en: "Remote",
      },
      description: {
        pt: "Desenvolvimento e manutenção de aplicações web de alto tráfego, integração de microsserviços, automação de deploys com Docker e otimização contínua de performance.",
        en: "Development and maintenance of high-traffic web apps, microservices integration, Docker deployment automation, and continuous performance optimization.",
      },
      skills: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      id: "exp-2",
      role: {
        pt: "Desenvolvedor Frontend / Web",
        en: "Frontend / Web Developer",
      },
      company: "Soluções Digitais",
      period: {
        pt: "2021 - 2023",
        en: "2021 - 2023",
      },
      location: {
        pt: "Híbrido",
        en: "Hybrid",
      },
      description: {
        pt: "Criação de interfaces responsivas, dashboards administrativos, consumo de APIs RESTful e implementação de boas práticas de SEO e acessibilidade.",
        en: "Creation of responsive interfaces, administrative dashboards, RESTful API consumption, and implementation of SEO and accessibility best practices.",
      },
      skills: ["TypeScript", "React", "Tailwind CSS", "REST APIs"],
    },
  ],

  // Informações de contato
  contact: {
    email: "contato@exemplo.com",
    telegram: "@seu_telegram",
    discord: "seu_usuario",
  },
};

export const presentationDevopsTranslations = {
  pt: {
    slide1: {
      title: "Flávio Alexandre",
      subtitle: "Desenvolvedor de Software & DevOps",
      tagline: "",
      stack: "Docker • Linux • Git • AWS • Prometheus • Grafana",
      cta: "Automatizando infraestrutura e pipelines para entregas ágeis e confiáveis.",
      technologies: ["Docker", "Linux", "Git", "AWS", "Prometheus", "Grafana"],
    },
    slide2: {
      title: "Quem sou eu",
      subtitle: "Perspectiva DevOps",
      profile: {
        intro:
          "Desenvolvedor com forte atuação em DevOps, focado em automatização de pipelines, containerização e observabilidade para entregas contínuas.",
        stack:
          "Experiência prática com Docker, GitLab CI/CD, GitHub Actions, Nginx e ferramentas de monitoramento como Prometheus e Grafana.",
        experience:
          "Implementação de infraestrutura como código, otimização de tempos de build/deploy e criação de ambientes consistentes entre desenvolvimento e produção.",
        focus:
          "Comprometido com a cultura DevOps: colaboração, automação, medição e compartilhamento de conhecimento para times de alta performance.",
        education:
          "Bacharelado em TI (UFRN) + Técnico em Desenvolvimento de Sistemas (Senac RN)",
      },
      strengths: {
        title: "Práticas DevOps",
        items: [
          "CI/CD automatizado",
          "Containerização com Docker",
          "Monitoramento e observabilidade",
          "Infraestrutura como código",
          "Otimização de pipelines",
        ],
      },
      stack: {
        title: "Stack DevOps",
        cicd: ["GitLab CI/CD", "GitHub Actions", "Docker", "Nginx"],
        cloud: ["AWS", "Oracle Cloud"],
        monitoring: ["Prometheus", "Grafana"],
        tools: ["Git", "Linux", "Shell Script", "Docker Compose"],
      },
    },
    slide3: {
      title: "Experiência DevOps",
      company: "LANCE — UFRN",
      role: "Desenvolvedor Web Jr (DevOps)",
      period: "Novembro 2025 - Presente",
      context: "Leading Advanced Technologies Center of Excellence",
      responsibilities: {
        title: "Práticas DevOps & Resultados",
        items: [
          "Mantenho e otimizo pipelines de <span class='text-foreground font-semibold'>CI/CD no GitLab</span>, automatizando build, testes e deploy, reduzindo o tempo de entrega de features de dias para horas",
          "Containerizo aplicações com <span class='text-foreground font-semibold'>Docker</span>, criando ambientes padronizados que eliminam o problema 'funciona na minha máquina' e facilitam escalabilidade horizontal",
          "Colaboro na definição de <span class='text-foreground font-semibold'>estratégias de branching</span> e <span class='text-foreground font-semibold'>versionamento semântico</span>, garantindo rastreabilidade e rollbacks seguros em produção",
          "Implemento <span class='text-foreground font-semibold'>testes automatizados</span> nas pipelines (unitários, integração e E2E), aumentando a confiança em deploys frequentes e reduzindo incidentes em produção",
          "Participo de <span class='text-foreground font-semibold'>post-mortems</span> e <span class='text-foreground font-semibold'>retrospectivas</span>, promovendo cultura de aprendizado contínuo e melhorias incrementais nos processos de entrega",
        ],
      },
      impact: {
        title: "Impacto DevOps",
        items: [
          "Redução de 80% no tempo de deploy",
          "Ambientes padronizados entre dev/staging/prod",
          "Zero downtime em releases frequentes",
          "Cultura de qualidade e responsabilidade compartilhada",
        ],
      },
      tech: ["GitLab CI/CD", "Docker", "Git", "Linux", "Nginx", "Shell Script"],
    },
    slide4: {
      title: "Experiência DevOps",
      company: "Senac Labs — Senac RN",
      role: "Desenvolvedor Web Jr (DevOps)",
      period: "Agosto 2024 - Novembro 2025",
      context:
        "Laboratório de Inovação e Tecnologia do Senac Rio Grande do Norte",
      contributions: {
        title: "Práticas DevOps & Resultados",
        items: [
          "Estruturei <span class='text-foreground font-semibold'>pipelines completas de CI/CD no GitHub Actions</span> com stages de build, test, security scan e deploy, reduzindo o tempo de entrega para menos de 5 minutos",
          "Containerizei aplicações full-stack com <span class='text-foreground font-semibold'>Docker e Docker Compose</span>, criando ambientes reproduzíveis e facilitando onboarding de novos desenvolvedores no time",
          "Configurei <span class='text-foreground font-semibold'>Nginx como reverse proxy</span> e load balancer, melhorando performance de APIs e habilitando deploys blue-green sem downtime",
          "Implementei <span class='text-foreground font-semibold'>estratégias de caching</span> e <span class='text-foreground font-semibold'>otimização de imagens Docker</span>, reduzindo o tamanho de builds em 60% e acelerando o ciclo de feedback",
          "Estabeleci <span class='text-foreground font-semibold'>ambientes isolados</span> (dev/staging/prod) com variáveis de ambiente seguras, garantindo paridade entre ambientes e deploys confiáveis",
        ],
      },
      results: {
        title: "Impacto DevOps",
        items: [
          "Deploy em menos de 5 minutos",
          "Redução de 60% no tamanho de builds",
          "Ambientes reproduzíveis com Docker",
          "Zero downtime em deploys de produção",
        ],
      },
      tech: [
        "GitHub Actions",
        "Docker",
        "Docker Compose",
        "Nginx",
        "Linux",
        "Shell Script",
      ],
    },
    slide5: {
      title: "Projeto DevOps em Destaque",
      subtitle: "Infraestrutura e Pipeline Completo",
      project: {
        name: "MaisCarga",
        tagline: "Solução logística com DevOps completo",
        description:
          "Sistema de gestão logística com infraestrutura completa na AWS, pipelines automatizadas e monitoramento em tempo real.",
        overview:
          "Implementei toda a infraestrutura DevOps do projeto, desde containerização até deploy automatizado na AWS com monitoramento e observabilidade.",
        sections: [
          {
            title: "Containerização",
            icon: "docker",
            items: [
              "Multi-stage builds para otimização de imagens Docker (redução de 70% no tamanho)",
              "Docker Compose para ambiente local com todos os serviços (backend, frontend, banco)",
              "Health checks e restart policies para alta disponibilidade dos containers",
              "Networking isolado entre serviços com comunicação segura",
            ],
          },
          {
            title: "CI/CD Pipeline",
            icon: "pipeline",
            items: [
              "GitHub Actions com 4 stages: build → test → security → deploy",
              "Testes automatizados (unitários, integração, E2E) executados em cada push",
              "Scan de segurança com Trivy para detectar vulnerabilidades em dependências",
              "Deploy automatizado na AWS apenas em commits na branch main",
            ],
          },
          {
            title: "AWS Infrastructure",
            icon: "aws",
            items: [
              "EC2 com Ubuntu Server para hospedar aplicação containerizada",
              "RDS PostgreSQL para banco de dados gerenciado com backups automáticos",
              "S3 para armazenamento de assets estáticos e backups de configuração",
              "Security Groups configurados com princípio do menor privilégio",
            ],
          },
          {
            title: "Monitoramento",
            icon: "monitoring",
            items: [
              "Prometheus para coleta de métricas de aplicação e infraestrutura",
              "Grafana com dashboards customizados para visualização em tempo real",
              "Alertas configurados para notificar sobre anomalias (CPU, memória, latência)",
              "Logs centralizados para troubleshooting e análise de incidentes",
            ],
          },
        ],
        results: [
          "Deploy automatizado em 8 minutos da commit ao production",
          "99.5% de uptime com monitoramento proativo",
          "Redução de 70% no tamanho das imagens Docker",
          "Rollback seguro em menos de 2 minutos em caso de falhas",
        ],
        tech: [
          "Docker",
          "GitHub Actions",
          "AWS (EC2, RDS, S3)",
          "Prometheus",
          "Grafana",
          "Nginx",
          "Linux",
        ],
      },
    },
    slide6: {
      title: "Destaques DevOps",
      subtitle: "Certificações e conquistas",
      achievements: [
        {
          type: "certificate",
          title: "Oracle OCI Foundations Associate",
          description:
            "Fundamentos da Oracle Cloud Infrastructure, abrangendo computação, armazenamento, rede e conceitos de DevOps na nuvem.",
          issuer: "Oracle",
          date: "2025",
          icon: "certificate",
        },
        {
          type: "achievement",
          title: "Pipeline Zero-Downtime",
          description:
            "Implementação de estratégia blue-green deployment com rollback automático, garantindo disponibilidade contínua em produção.",
          context: "Senac Labs",
          icon: "trophy",
        },
        {
          type: "achievement",
          title: "Otimização de Build",
          description:
            "Redução de 70% no tempo de build através de cache inteligente, multi-stage builds e otimização de dependências.",
          context: "Projetos pessoais e profissionais",
          icon: "trophy",
        },
      ],
      closing:
        "Focado em automatização, observabilidade e cultura DevOps para times de alta performance",
    },
    slide7: {
      title: "Obrigado!",
      message:
        "Posso detalhar qualquer parte da infraestrutura ou demonstrar pipelines e monitoramento em ação.",
      callToAction: "Vamos conversar sobre DevOps?",
      contact: {
        email: "flavioalexandrework@gmail.com",
        linkedin: "/in/flávio-alexandre-dev",
        github: "github.com/ClarkAshida",
        portfolio: "seu-portfolio.com",
      },
      availability: "Disponível para posições DevOps/SRE Jr",
    },
  },
  en: {
    slide1: {
      title: "Flávio Alexandre",
      subtitle: "Software Developer & DevOps",
      tagline: "",
      stack: "Docker • Linux • Git • AWS • Prometheus • Grafana",
      cta: "Automating infrastructure and pipelines for agile and reliable deliveries.",
      technologies: ["Docker", "Linux", "Git", "AWS", "Prometheus", "Grafana"],
    },
    slide2: {
      title: "Who I am",
      subtitle: "DevOps Perspective",
      profile: {
        intro:
          "Developer with strong DevOps background, focused on pipeline automation, containerization and observability for continuous delivery.",
        stack:
          "Hands-on experience with Docker, GitLab CI/CD, GitHub Actions, Nginx and monitoring tools like Prometheus and Grafana.",
        experience:
          "Infrastructure as code implementation, build/deploy time optimization and consistent environment creation between development and production.",
        focus:
          "Committed to DevOps culture: collaboration, automation, measurement and knowledge sharing for high-performance teams.",
        education:
          "Bachelor's in IT (UFRN) + Technical Degree in Systems Development (Senac RN)",
      },
      strengths: {
        title: "DevOps Practices",
        items: [
          "Automated CI/CD",
          "Docker containerization",
          "Monitoring and observability",
          "Infrastructure as code",
          "Pipeline optimization",
        ],
      },
      stack: {
        title: "DevOps Stack",
        cicd: ["GitLab CI/CD", "GitHub Actions", "Docker", "Nginx"],
        cloud: ["AWS", "Oracle Cloud"],
        monitoring: ["Prometheus", "Grafana"],
        tools: ["Git", "Linux", "Shell Script", "Docker Compose"],
      },
    },
    slide3: {
      title: "DevOps Experience",
      company: "LANCE — UFRN",
      role: "Jr Web Developer (DevOps)",
      period: "November 2025 - Present",
      context: "Leading Advanced Technologies Center of Excellence",
      responsibilities: {
        title: "DevOps Practices & Results",
        items: [
          "Maintain and optimize <span class='text-foreground font-semibold'>CI/CD pipelines on GitLab</span>, automating build, test and deploy, reducing feature delivery time from days to hours",
          "Containerize applications with <span class='text-foreground font-semibold'>Docker</span>, creating standardized environments that eliminate the 'works on my machine' problem and facilitate horizontal scalability",
          "Collaborate on defining <span class='text-foreground font-semibold'>branching strategies</span> and <span class='text-foreground font-semibold'>semantic versioning</span>, ensuring traceability and safe rollbacks in production",
          "Implement <span class='text-foreground font-semibold'>automated tests</span> in pipelines (unit, integration and E2E), increasing confidence in frequent deploys and reducing production incidents",
          "Participate in <span class='text-foreground font-semibold'>post-mortems</span> and <span class='text-foreground font-semibold'>retrospectives</span>, promoting continuous learning culture and incremental improvements in delivery processes",
        ],
      },
      impact: {
        title: "DevOps Impact",
        items: [
          "80% reduction in deploy time",
          "Standardized environments between dev/staging/prod",
          "Zero downtime in frequent releases",
          "Culture of quality and shared responsibility",
        ],
      },
      tech: ["GitLab CI/CD", "Docker", "Git", "Linux", "Nginx", "Shell Script"],
    },
    slide4: {
      title: "DevOps Experience",
      company: "Senac Labs — Senac RN",
      role: "Jr Web Developer (DevOps)",
      period: "August 2024 - November 2025",
      context:
        "Innovation and Technology Laboratory at Senac Rio Grande do Norte",
      contributions: {
        title: "DevOps Practices & Results",
        items: [
          "Structured <span class='text-foreground font-semibold'>complete CI/CD pipelines on GitHub Actions</span> with build, test, security scan and deploy stages, reducing delivery time to less than 5 minutes",
          "Containerized full-stack applications with <span class='text-foreground font-semibold'>Docker and Docker Compose</span>, creating reproducible environments and facilitating onboarding of new team developers",
          "Configured <span class='text-foreground font-semibold'>Nginx as reverse proxy</span> and load balancer, improving API performance and enabling blue-green deploys without downtime",
          "Implemented <span class='text-foreground font-semibold'>caching strategies</span> and <span class='text-foreground font-semibold'>Docker image optimization</span>, reducing build size by 60% and accelerating feedback cycle",
          "Established <span class='text-foreground font-semibold'>isolated environments</span> (dev/staging/prod) with secure environment variables, ensuring parity between environments and reliable deploys",
        ],
      },
      results: {
        title: "DevOps Impact",
        items: [
          "Deploy in less than 5 minutes",
          "60% reduction in build size",
          "Reproducible environments with Docker",
          "Zero downtime in production deploys",
        ],
      },
      tech: [
        "GitHub Actions",
        "Docker",
        "Docker Compose",
        "Nginx",
        "Linux",
        "Shell Script",
      ],
    },
    slide5: {
      title: "Featured DevOps Project",
      subtitle: "Complete Infrastructure and Pipeline",
      project: {
        name: "MaisCarga",
        tagline: "Logistics solution with complete DevOps",
        description:
          "Logistics management system with complete infrastructure on AWS, automated pipelines and real-time monitoring.",
        overview:
          "Implemented the entire DevOps infrastructure of the project, from containerization to automated deploy on AWS with monitoring and observability.",
        sections: [
          {
            title: "Containerization",
            icon: "docker",
            items: [
              "Multi-stage builds for Docker image optimization (70% size reduction)",
              "Docker Compose for local environment with all services (backend, frontend, database)",
              "Health checks and restart policies for high container availability",
              "Isolated networking between services with secure communication",
            ],
          },
          {
            title: "CI/CD Pipeline",
            icon: "pipeline",
            items: [
              "GitHub Actions with 4 stages: build → test → security → deploy",
              "Automated tests (unit, integration, E2E) executed on each push",
              "Security scan with Trivy to detect vulnerabilities in dependencies",
              "Automated deploy on AWS only on commits to main branch",
            ],
          },
          {
            title: "AWS Infrastructure",
            icon: "aws",
            items: [
              "EC2 with Ubuntu Server to host containerized application",
              "RDS PostgreSQL for managed database with automatic backups",
              "S3 for static asset storage and configuration backups",
              "Security Groups configured with least privilege principle",
            ],
          },
          {
            title: "Monitoring",
            icon: "monitoring",
            items: [
              "Prometheus for application and infrastructure metrics collection",
              "Grafana with custom dashboards for real-time visualization",
              "Configured alerts to notify about anomalies (CPU, memory, latency)",
              "Centralized logs for troubleshooting and incident analysis",
            ],
          },
        ],
        results: [
          "Automated deploy in 8 minutes from commit to production",
          "99.5% uptime with proactive monitoring",
          "70% reduction in Docker image size",
          "Safe rollback in less than 2 minutes in case of failures",
        ],
        tech: [
          "Docker",
          "GitHub Actions",
          "AWS (EC2, RDS, S3)",
          "Prometheus",
          "Grafana",
          "Nginx",
          "Linux",
        ],
      },
    },
    slide6: {
      title: "DevOps Highlights",
      subtitle: "Certifications and achievements",
      achievements: [
        {
          type: "certificate",
          title: "Oracle OCI Foundations Associate",
          description:
            "Oracle Cloud Infrastructure fundamentals, covering compute, storage, networking and cloud DevOps concepts.",
          issuer: "Oracle",
          date: "2025",
          icon: "certificate",
        },
        {
          type: "achievement",
          title: "Zero-Downtime Pipeline",
          description:
            "Implementation of blue-green deployment strategy with automatic rollback, ensuring continuous production availability.",
          context: "Senac Labs",
          icon: "trophy",
        },
        {
          type: "achievement",
          title: "Build Optimization",
          description:
            "70% reduction in build time through smart caching, multi-stage builds and dependency optimization.",
          context: "Personal and professional projects",
          icon: "trophy",
        },
      ],
      closing:
        "Focused on automation, observability and DevOps culture for high-performance teams",
    },
    slide7: {
      title: "Thank you!",
      message:
        "I can detail any part of the infrastructure or demonstrate pipelines and monitoring in action.",
      callToAction: "Let's talk about DevOps?",
      contact: {
        email: "flavioalexandrework@gmail.com",
        linkedin: "/in/flávio-alexandre-dev",
        github: "github.com/ClarkAshida",
        portfolio: "your-portfolio.com",
      },
      availability: "Available for Jr DevOps/SRE positions",
    },
  },
};

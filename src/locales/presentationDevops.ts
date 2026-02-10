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
      role: "Desenvolvedor Web Jr",
      period: "Novembro 2025 - Presente",
      context: "Leading Advanced Technologies Center of Excellence",
      responsibilities: {
        title: "Práticas DevOps & Resultados",
        items: [
          "Criei e mantenho <span class='text-foreground font-semibold'>pipeline de CI/CD no GitLab</span> automatizando build, testes e deploy para <span class='text-foreground font-semibold'>servidor Linux on-premise</span>",
          "Containerizei as aplicações com <span class='text-foreground font-semibold'>Docker</span>, subindo <span class='text-foreground font-semibold'>backend (Spring Boot), PostgreSQL, RabbitMQ e frontend (Nginx servindo build React)</span> em containers",
          "Implementei deploy na <span class='text-foreground font-semibold'>AWS EKS (Elastic Kubernetes Service)</span> usando <span class='text-foreground font-semibold'>Terraform para infraestrutura como código</span>, provisionando cluster Kubernetes gerenciado",
          "Configurei <span class='text-foreground font-semibold'>Nginx como reverse proxy</span> para rotear requisições entre os serviços e servir os arquivos estáticos do frontend",
          "Implementei <span class='text-foreground font-semibold'>testes automatizados na pipeline</span> (unitários e de integração) para garantir qualidade antes do deploy",
        ],
      },
      tech: [
        "AWS EKS",
        "Kubernetes",
        "Terraform",
        "GitLab CI/CD",
        "Docker",
        "Docker Compose",
        "Linux",
        "Nginx",
        "PostgreSQL",
        "RabbitMQ",
      ],
    },
    slide4: {
      title: "Experiência DevOps",
      company: "Senac Labs — Senac RN",
      role: "Desenvolvedor Web Jr",
      period: "Agosto 2024 - Novembro 2025",
      context:
        "Laboratório de Inovação e Tecnologia do Senac Rio Grande do Norte",
      contributions: {
        title: "Práticas DevOps & Resultados",
        items: [
          "Criei <span class='text-foreground font-semibold'>pipeline de CI/CD no GitHub Actions</span> automatizando build, testes e deploy para <span class='text-foreground font-semibold'>servidor Linux on-premise</span>",
          "Containerizei aplicações com <span class='text-foreground font-semibold'>Docker</span>, subindo <span class='text-foreground font-semibold'>backend (Spring Boot), PostgreSQL, serviço Python FastAPI (modelo ML) e frontend (Nginx + React)</span>",
          "Configurei <span class='text-foreground font-semibold'>Nginx como reverse proxy</span> para rotear entre backend Java, API Python e servir o frontend estático",
          "Implementei <span class='text-foreground font-semibold'>multi-stage builds no Docker</span> para otimizar o tamanho das imagens e acelerar o processo de build",
          "Gerenciei <span class='text-foreground font-semibold'>ambientes Linux on-premise</span> com Docker Compose, criando ambientes consistentes entre desenvolvimento e produção",
        ],
      },
      tech: [
        "GitHub Actions",
        "Docker",
        "Docker Compose",
        "Nginx",
        "Linux",
        "PostgreSQL",
        "FastAPI",
      ],
    },
    slide5: {
      title: "Pipeline DevOps — MaisCarga",
      subtitle: "Automatização de ponta a ponta",
      stages: {
        pipeline: {
          title: "CI/CD com GitLab",
          description:
            "Pipeline automatizada com múltiplos estágios garantindo qualidade e deploy seguro.",
          highlights: [
            "5 estágios: deps → quality → test → build → deploy",
            "Quality: format-check, lint e typecheck",
            "887 testes unitários criados no frontend",
            "Deploy automático após aprovação",
          ],
        },
        deploy: {
          title: "Deploy Automatizado",
          description:
            "Infraestrutura containerizada em servidor Linux on-premise da UFRN.",
          highlights: [
            "Docker + GitLab Runner para CI/CD",
            "Containers: API, PostgreSQL, Nginx, RabbitMQ",
            "Prometheus e Grafana para observabilidade",
            "Acesso via VPN em rede interna",
          ],
        },
        monitoring: {
          title: "Monitoramento & Observabilidade",
          description:
            "Stack completa de monitoramento com Prometheus e Grafana para métricas em tempo real.",
          highlights: [
            "Métricas de performance da aplicação",
            "Dashboards customizados no Grafana",
            "Alertas para anomalias e falhas",
            "Health checks dos containers",
          ],
        },
      },
      techStack: {
        title: "Stack Completa",
        items: [
          "GitLab CI/CD",
          "Docker",
          "Spring Boot",
          "React + Nginx",
          "PostgreSQL",
          "RabbitMQ",
          "Prometheus",
          "Grafana",
          "Linux",
        ],
      },
    },
    slide6: {
      title: "Deploy na AWS EKS com Terraform",
      subtitle: "Infraestrutura como Código & Kubernetes",
      description:
        "Implementação completa de cluster Kubernetes gerenciado na AWS usando Terraform para provisionamento de infraestrutura escalável e resiliente.",
      architecture: {
        title: "Arquitetura do Cluster EKS",
        description:
          "Cluster Kubernetes na AWS EKS com worker nodes em EC2, Load Balancer Application e integração completa com serviços AWS.",
        highlights: [
          "Provisionamento declarativo com Terraform",
          "Cluster EKS gerenciado pela AWS",
          "Worker nodes EC2 com auto-scaling",
          "Application Load Balancer para roteamento",
          "Integração com VPC, IAM e CloudWatch",
          "Deployments e Services Kubernetes",
        ],
      },
      benefits: {
        title: "Benefícios da Solução",
        items: [
          "<span class='text-foreground font-semibold'>Infraestrutura como Código</span>: Terraform permite versionamento, replicação e gestão declarativa da infra",
          "<span class='text-foreground font-semibold'>Escalabilidade Automática</span>: Auto-scaling de pods (HPA) e nodes (CA) conforme demanda",
          "<span class='text-foreground font-semibold'>Alta Disponibilidade</span>: Multi-AZ deployment com health checks e rolling updates",
          "<span class='text-foreground font-semibold'>Gestão Simplificada</span>: EKS gerencia o control plane, reduzindo overhead operacional",
        ],
      },
      techStack: {
        title: "Stack Completa",
        items: [
          "AWS EKS",
          "Terraform",
          "Kubernetes",
          "Docker",
          "AWS EC2",
          "Application Load Balancer",
          "VPC",
          "CloudWatch",
        ],
      },
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
      role: "Jr Web Developer",
      period: "November 2025 - Present",
      context: "Leading Advanced Technologies Center of Excellence",
      responsibilities: {
        title: "DevOps Practices & Results",
        items: [
          "Created and maintain <span class='text-foreground font-semibold'>CI/CD pipeline on GitLab</span> automating build, tests and deploy to <span class='text-foreground font-semibold'>on-premise Linux server</span>",
          "Containerized applications with <span class='text-foreground font-semibold'>Docker</span>, deploying <span class='text-foreground font-semibold'>backend (Spring Boot), PostgreSQL, RabbitMQ and frontend (Nginx serving React build)</span> in containers",
          "Implemented deployment on <span class='text-foreground font-semibold'>AWS EKS (Elastic Kubernetes Service)</span> using <span class='text-foreground font-semibold'>Terraform for infrastructure as code</span>, provisioning managed Kubernetes cluster",
          "Configured <span class='text-foreground font-semibold'>Nginx as reverse proxy</span> to route requests between services and serve frontend static files",
          "Implemented <span class='text-foreground font-semibold'>automated tests in pipeline</span> (unit and integration) to ensure quality before deployment",
          "Manage <span class='text-foreground font-semibold'>development and production environments</span> on Linux server, ensuring consistency with Docker Compose",
        ],
      },
      tech: [
        "AWS EKS",
        "Kubernetes",
        "Terraform",
        "GitLab CI/CD",
        "Docker",
        "Docker Compose",
        "Linux",
        "Nginx",
        "PostgreSQL",
        "RabbitMQ",
      ],
    },
    slide4: {
      title: "DevOps Experience",
      company: "Senac Labs — Senac RN",
      role: "Jr Web Developer",
      period: "August 2024 - November 2025",
      context:
        "Innovation and Technology Laboratory at Senac Rio Grande do Norte",
      contributions: {
        title: "DevOps Practices & Results",
        items: [
          "Created <span class='text-foreground font-semibold'>CI/CD pipeline on GitHub Actions</span> automating build, tests and deploy to <span class='text-foreground font-semibold'>on-premise Linux server</span>",
          "Containerized applications with <span class='text-foreground font-semibold'>Docker</span>, deploying <span class='text-foreground font-semibold'>backend (Spring Boot), PostgreSQL, Python FastAPI service (ML model) and frontend (Nginx + React)</span>",
          "Configured <span class='text-foreground font-semibold'>Nginx as reverse proxy</span> to route between Java backend, Python API and serve static frontend",
          "Implemented <span class='text-foreground font-semibold'>multi-stage builds in Docker</span> to optimize image size and speed up build process",
          "Managed <span class='text-foreground font-semibold'>on-premise Linux environments</span> with Docker Compose, creating consistent environments between development and production",
        ],
      },
      tech: [
        "GitHub Actions",
        "Docker",
        "Docker Compose",
        "Nginx",
        "Linux",
        "PostgreSQL",
        "FastAPI",
      ],
    },
    slide5: {
      title: "DevOps Pipeline — MaisCarga",
      subtitle: "End-to-end automation",
      stages: {
        pipeline: {
          title: "CI/CD with GitLab",
          description:
            "Automated pipeline with multiple stages ensuring quality and safe deployment.",
          highlights: [
            "5 stages: deps → quality → test → build → deploy",
            "Quality: format-check, lint and typecheck",
            "887 unit tests created on frontend",
            "Automatic deploy after approval",
          ],
        },
        deploy: {
          title: "Automated Deployment",
          description:
            "Containerized infrastructure on UFRN's on-premise Linux server.",
          highlights: [
            "Docker + GitLab Runner for CI/CD",
            "Containers: API, PostgreSQL, Nginx, RabbitMQ",
            "Prometheus and Grafana for observability",
            "VPN access on internal network",
          ],
        },
        monitoring: {
          title: "Monitoring & Observability",
          description:
            "Complete monitoring stack with Prometheus and Grafana for real-time metrics.",
          highlights: [
            "Application performance metrics",
            "Custom Grafana dashboards",
            "Alerts for anomalies and failures",
            "Container health checks",
          ],
        },
      },
      techStack: {
        title: "Complete Stack",
        items: [
          "GitLab CI/CD",
          "Docker",
          "Spring Boot",
          "React + Nginx",
          "PostgreSQL",
          "RabbitMQ",
          "Prometheus",
          "Grafana",
          "Linux",
        ],
      },
    },
    slide6: {
      title: "AWS EKS Deploy with Terraform",
      subtitle: "Infrastructure as Code & Kubernetes",
      description:
        "Complete implementation of managed Kubernetes cluster on AWS using Terraform for scalable and resilient infrastructure provisioning.",
      architecture: {
        title: "EKS Cluster Architecture",
        description:
          "Kubernetes cluster on AWS EKS with EC2 worker nodes, Application Load Balancer and full AWS services integration.",
        highlights: [
          "Declarative provisioning with Terraform",
          "AWS-managed EKS cluster",
          "EC2 worker nodes with auto-scaling",
          "Application Load Balancer for routing",
          "Integration with VPC, IAM and CloudWatch",
          "Kubernetes Deployments and Services",
        ],
      },
      benefits: {
        title: "Solution Benefits",
        items: [
          "<span class='text-foreground font-semibold'>Infrastructure as Code</span>: Terraform enables versioning, replication and declarative infra management",
          "<span class='text-foreground font-semibold'>Auto-scaling</span>: Pod auto-scaling (HPA) and node auto-scaling (CA) based on demand",
          "<span class='text-foreground font-semibold'>High Availability</span>: Multi-AZ deployment with health checks and rolling updates",
          "<span class='text-foreground font-semibold'>Simplified Management</span>: EKS manages control plane, reducing operational overhead",
        ],
      },
      techStack: {
        title: "Complete Stack",
        items: [
          "AWS EKS",
          "Terraform",
          "Kubernetes",
          "Docker",
          "AWS EC2",
          "Application Load Balancer",
          "VPC",
          "CloudWatch",
        ],
      },
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

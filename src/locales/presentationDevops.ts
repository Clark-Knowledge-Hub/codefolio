export const presentationDevopsTranslations = {
  pt: {
    slide1: {
      title: "Flávio Alexandre",
      subtitle: "Desenvolvedor de Software & DevOps",
      tagline: "",
      stack: "Docker • Linux • Git • AWS • Prometheus • Grafana",
      cta: "Transformando entregas manuais em processos automatizados, ágeis e seguros.",
      technologies: ["Docker", "Linux", "Git", "AWS", "Prometheus", "Grafana"],
    },
    slide2: {
      title: "Quem sou eu",
      subtitle: "Background Acadêmico & Stack Híbrida",
      profile: {
        stack:
          "Trabalho com Java, Spring Boot e React. Minha atuação em DevOps nasceu da necessidade prática do dia a dia: eliminar configurações complexas e deploys manuais arriscados.",
        experience:
          "Comecei a usar Docker para automatizar ambientes complexos e parar de perder tempo com configuração. Mergulhei em CI/CD porque deploys manuais me custaram muito estresse e horas de debug.",
        focus:
          "Sou o profissional que une a lógica de desenvolvimento com a disciplina de operações. Meu objetivo é garantir que o time entregue valor rápido, sem o medo de 'quebrar a produção'.",
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
      title: "Experiência Atual — LANCE",
      company: "LANCE — UFRN",
      role: "Desenvolvedor Web Jr",
      period: "Novembro 2025 - Presente",
      context:
        "Plataforma Financeira baseada em Blockchain para tokenização de ativos digitais",
      responsibilities: {
        title: "DevOps em Cenário de Alta Criticidade",
        items: [
          "Projeto de <span class='text-foreground font-semibold'>alta criticidade</span>: plataforma financeira onde falhas de infraestrutura podem significar <span class='text-foreground font-semibold'>prejuízo financeiro ou perda de transações</span>",
          "Acabei com instabilidade de ambiente containerizando tudo com <span class='text-foreground font-semibold'>Docker</span>: Backend Spring Boot, PostgreSQL, RabbitMQ para mensageria, tudo isolado e padronizado",
          "Construí <span class='text-foreground font-semibold'>esteira de CI/CD no GitLab</span> automatizando qualidade, build e deploy. Código que quebra testes <span class='text-foreground font-semibold'>não chega perto de produção</span>",
          "Deploy inicial em <span class='text-foreground font-semibold'>servidores Linux on-premise com Nginx</span>, mas para escalabilidade real implementei infraestrutura na <span class='text-foreground font-semibold'>AWS</span>",
          "Utilizei <span class='text-foreground font-semibold'>Terraform (IaC)</span> para provisionar cluster <span class='text-foreground font-semibold'>Kubernetes (EKS)</span>, garantindo escalabilidade horizontal sem intervenção manual",
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
      title: "Experiência Anterior — Senac Labs",
      company: "Senac Labs — Senac RN",
      role: "Desenvolvedor Web Jr",
      period: "Agosto 2024 - Novembro 2025",
      context:
        "Inteligência Artificial aplicada à educação — Sistema de predição de evasão escolar",
      contributions: {
        title: "Versatilidade & Performance",
        items: [
          "Desenvolvi <span class='text-foreground font-semibold'>pipelines de CI/CD com GitHub Actions</span> trazendo a mesma qualidade de entrega para contexto de IA aplicada à educação",
          "Estruturei <span class='text-foreground font-semibold'>três ambientes distintos</span>: Testes, Homologação e Produção, todos em <span class='text-foreground font-semibold'>servidores Linux on-premise</span>",
          "Containerizei com <span class='text-foreground font-semibold'>Docker</span>: backend Spring Boot, PostgreSQL, <span class='text-foreground font-semibold'>serviços críticos de Machine Learning</span> (FastAPI Python) e frontend Nginx + React",
          "Infraestrutura sustentava <span class='text-foreground font-semibold'>serviços de ML para predição de evasão escolar</span>, auxiliando equipe pedagógica na gestão e retenção de alunos",
          "Garanti <span class='text-foreground font-semibold'>disponibilidade contínua</span> da aplicação para todo o estado, sem interrupções técnicas",
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
      subtitle: "Infraestrutura como Código — Três Pilares Técnicos",
      architecture: {
        title: "Arquitetura do Cluster EKS",
        description:
          "Cluster Kubernetes na AWS EKS estruturado em três pilares: Alta Disponibilidade, Escalabilidade e Segurança.",
        highlights: [
          "Tudo provisionado via Terraform — sem cliques no console AWS",
          "Cluster operando em duas Zonas de Disponibilidade diferentes",
          "Se um Data Center cair, aplicação recupera automaticamente na outra zona",
          "Node Group com auto-scaling: mínimo 3 nós, escala até 4 conforme tráfego",
          "API e Frontend expostos via Load Balancers públicos",
          "PostgreSQL e RabbitMQ isolados em ClusterIP — invisíveis na internet",
        ],
      },
      benefits: {
        title: "Os Três Pilares da Arquitetura",
        items: [
          "<span class='text-foreground font-semibold'>Alta Disponibilidade com VPC Multi-AZ</span>: VPC segmentada operando em duas Zonas de Disponibilidade. Recuperação automática em caso de falha de Data Center",
          "<span class='text-foreground font-semibold'>Escalabilidade com EKS e Node Groups</span>: Cluster Kubernetes (EKS) com auto-scaling inteligente. Opera com 3 nós e escala elasticamente até 4 instâncias EC2 conforme demanda",
          "<span class='text-foreground font-semibold'>Segurança com Services Kubernetes</span>: API e Frontend expostos via Load Balancers. Banco de Dados e RabbitMQ isolados em rede interna (ClusterIP) — proteção de dados garantida",
          "<span class='text-foreground font-semibold'>Infraestrutura como Código</span>: Um comando 'terraform apply' provisiona tudo. Versionamento, replicação e gestão declarativa completa",
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
        "Estou disponível para tirar qualquer dúvida sobre a infraestrutura, pipelines ou qualquer parte do projeto.",
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
      cta: "Transforming manual deliveries into automated, agile and secure processes.",
      technologies: ["Docker", "Linux", "Git", "AWS", "Prometheus", "Grafana"],
    },
    slide2: {
      title: "Who I am",
      subtitle: "Academic Background & Hybrid Stack",
      profile: {
        stack:
          "Working with Java, Spring Boot and React. My DevOps work was born from practical daily necessity: eliminating complex configurations and risky manual deployments.",
        experience:
          "Started using Docker to automate complex environments and stop wasting time with configuration. Dove into CI/CD because manual deploys cost me too much stress and debugging hours.",
        focus:
          "I'm the professional who unites development logic with operations discipline. My goal is to ensure the team delivers value fast, without the fear of 'breaking production'.",
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
      title: "Current Experience — LANCE",
      company: "LANCE — UFRN",
      role: "Jr Web Developer",
      period: "November 2025 - Present",
      context:
        "Blockchain-based Financial Platform for digital asset tokenization",
      responsibilities: {
        title: "DevOps in High-Criticality Scenario",
        items: [
          "<span class='text-foreground font-semibold'>High-criticality</span> project: financial platform where infrastructure failures could mean <span class='text-foreground font-semibold'>financial loss or transaction failures</span>",
          "Eliminated environment instability by containerizing everything with <span class='text-foreground font-semibold'>Docker</span>: Spring Boot Backend, PostgreSQL, RabbitMQ for messaging — all isolated and standardized",
          "Built <span class='text-foreground font-semibold'>CI/CD pipeline on GitLab</span> automating quality, build and deploy. Code that breaks tests <span class='text-foreground font-semibold'>never reaches production</span>",
          "Initial deployment on <span class='text-foreground font-semibold'>on-premise Linux servers with Nginx</span>, but for real scalability implemented infrastructure on <span class='text-foreground font-semibold'>AWS</span>",
          "Used <span class='text-foreground font-semibold'>Terraform (IaC)</span> to provision <span class='text-foreground font-semibold'>Kubernetes cluster (EKS)</span>, ensuring horizontal scalability without manual intervention",
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
      title: "Previous Experience — Senac Labs",
      company: "Senac Labs — Senac RN",
      role: "Jr Web Developer",
      period: "August 2024 - November 2025",
      context:
        "Artificial Intelligence applied to education — Student dropout prediction system",
      contributions: {
        title: "Versatility & Performance",
        items: [
          "Developed <span class='text-foreground font-semibold'>CI/CD pipelines with GitHub Actions</span> bringing the same delivery quality to AI applied to education context",
          "Structured <span class='text-foreground font-semibold'>three distinct environments</span>: Testing, Staging and Production, all on <span class='text-foreground font-semibold'>on-premise Linux servers</span>",
          "Containerized with <span class='text-foreground font-semibold'>Docker</span>: Spring Boot backend, PostgreSQL, <span class='text-foreground font-semibold'>critical Machine Learning services</span> (FastAPI Python) and Nginx + React frontend",
          "Infrastructure sustained <span class='text-foreground font-semibold'>ML services for student dropout prediction</span>, helping pedagogical team in student management and retention",
          "Ensured <span class='text-foreground font-semibold'>continuous availability</span> of the application statewide, without technical interruptions",
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
      subtitle: "Infrastructure as Code — Three Technical Pillars",
      architecture: {
        title: "EKS Cluster Architecture",
        description:
          "Kubernetes cluster on AWS EKS structured in three pillars: High Availability, Scalability and Security.",
        highlights: [
          "Everything provisioned via Terraform — no AWS console clicks",
          "Cluster operating in two different Availability Zones",
          "If one Data Center fails, application automatically recovers in the other zone",
          "Node Group with auto-scaling: minimum 3 nodes, scales up to 4 based on traffic",
          "API and Frontend exposed via public Load Balancers",
          "PostgreSQL and RabbitMQ isolated in ClusterIP — invisible on the internet",
        ],
      },
      benefits: {
        title: "The Three Architecture Pillars",
        items: [
          "<span class='text-foreground font-semibold'>High Availability with Multi-AZ VPC</span>: Segmented VPC operating in two Availability Zones. Automatic recovery in case of Data Center failure",
          "<span class='text-foreground font-semibold'>Scalability with EKS and Node Groups</span>: Kubernetes cluster (EKS) with intelligent auto-scaling. Operates with 3 nodes and elastically scales up to 4 EC2 instances based on demand",
          "<span class='text-foreground font-semibold'>Security with Kubernetes Services</span>: API and Frontend exposed via Load Balancers. Database and RabbitMQ isolated in internal network (ClusterIP) — data protection guaranteed",
          "<span class='text-foreground font-semibold'>Infrastructure as Code</span>: One 'terraform apply' command provisions everything. Complete versioning, replication and declarative management",
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
        "I'm available to answer any questions about the infrastructure, pipelines or any part of the project.",
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

export const translations = {
  pt: {
    // Navbar
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      education: "Educação",
      contact: "Entrar em Contato",
    },

    // Hero
    hero: {
      greeting: "Olá, eu sou",
      name: "Flávio Alexandre",
      title: "Desenvolvedor de Software",
      description:
        "Desenvolvedor de Software com experiência em criar soluções para resolver problemas reais. Sou paixonado por tecnologia e estou sempre em busca de novos desafios para crescer profissionalmente.",
      cta: {
        projects: "Ver Meus Projetos",
        resume: "Baixar Currículo",
        contact: "Entre em Contato",
      },
    },

    // About
    about: {
      title: "Sobre Mim",
      role: "Desenvolvedor de Software",
      description: {
        p1: "Desenvolvedor de Software apaixonado por transformar ideias em soluções tecnológicas que geram impacto real. Com",
        p1Highlight1: "mais de 2 anos de experiência",
        p1Middle: ", já arquitetei e desenvolvi sistemas de",
        p1Highlight2: "Pesquisa e Desenvolvimento (P&D)",
        p1End:
          ", incluindo soluções com Inteligência Artificial para predição de evasão de alunos e gestão de ativos digitais em rede Blockchain.",
        p2: "Especializado no ecossistema",
        p2Java: "Java",
        p2With: "com",
        p2Spring: "Spring Boot",
        p2And: "e arquitetura de",
        p2Micro: "Microsserviços",
        p2End:
          ", combino solidéz técnica com inovação. Aplico rigorosamente testes automatizados, mantenho alta cobertura de código e implemento pipelines CI/CD para garantir entregas contínuas e confiáveis em projetos de P&D.",
        p3: "Acredito que tecnologia de qualidade é aquela que",
        p3Highlight: "resolve problemas reais",
        p3End:
          " e melhora a vida das pessoas. Busco constantemente novos desafios em P&D que me permitam crescer profissionalmente enquanto contribuo para projetos inovadores com IA e tecnologias emergentes.",
      },
      stats: {
        experience: "Experiência",
        experienceYears: "2 anos",
        experienceRole: "Desenvolvedor de Software",
        education: "Formação",
        educationDegree: "Bacharelado em Tecnologia da Informação",
        educationInstitution: "UFRN",
      },
    },

    // Skills
    skills: {
      title: "Minhas Habilidades",
      subtitle:
        "Tecnologias e ferramentas que domino para criar soluções completas e escaláveis",
      filters: {
        all: "Todos",
        backend: "Backend",
        frontend: "Frontend",
        tools: "Ferramentas",
      },
      showMore: "Mostrar Mais",
      showLess: "Mostrar Menos",
      summary: {
        backend:
          "APIs RESTful escaláveis com Java, Spring Boot e arquitetura limpa",
        frontend:
          "Interfaces modernas e responsivas com React, TypeScript e Tailwind",
        fullstack: "CI/CD, containerização e deploy automatizado em nuvem",
      },
    },

    // Projects
    projects: {
      title: "Projetos em Destaque",
      subtitle:
        "Soluções completas que desenvolvi, desde a concepção até a implementação",
      pomocube: {
        title: "PomoCube",
        subtitle: "Temporizador Pomodoro IoT com Raspberry Pi Pico W",
        description:
          "Sistema IoT para temporizador Pomodoro composto por hardware Raspberry Pi Pico W, API backend em Java Spring Boot para comunicação HTTP com o hardware, persistência de dados em MongoDB e interface web em Next.js para visualização de métricas de estudo e foco.",
        highlights: [
          "Hardware IoT com Raspberry Pi Pico W",
          "API RESTful Java + Spring Boot + MongoDB",
          "Firmware embarcado em MicroPython",
          "Interface web Next.js com métricas de foco",
        ],
      },
      case: {
        title: "CASE",
        subtitle: "Controle de Atividades e Serviços Educacionais",
        description:
          "Sistema para digitalizar o controle de atividades extraclasse de instrutores do Senac RN, substituindo processos manuais e reduzindo em 70% o tempo de controle.",
        highlights: [
          "Digitalização de processos manuais",
          "Interface intuitiva para professores",
          "Redução de 70% no tempo de controle",
          "Sistema de notificações automáticas",
        ],
      },
      dinly: {
        title: "Dinly",
        subtitle: "Landing Page e API de Leads Serverless",
        description:
          "Landing page de pré-lançamento com sistema de cadastro de leads. Arquitetura Serverless na AWS usando API Gateway, Lambda (Node.js) e DynamoDB para alta escalabilidade e baixo custo.",
        highlights: [
          "Arquitetura 100% Serverless na AWS",
          "API REST com AWS Lambda e Node.js",
          "Persistência em DynamoDB",
          "Landing page responsiva com React",
        ],
      },
      gip: {
        title: "GIP",
        subtitle: "Sistema de Gestão da Permanência Estudantil",
        description:
          "Sistema web de gestão escolar com modelo de IA preditiva para avaliar risco de evasão de alunos. Implementado nacionalmente no Senac RN, integra análise preditiva com gestão administrativa para reduzir a evasão escolar.",
        highlights: [
          "IA preditiva para análise de evasão",
          "Implementação nacional no Senac",
          "Integração com gestão administrativa",
          "Stack completa: Java, Spring Boot, React",
        ],
      },
      maiscarga: {
        title: "MaisCarga",
        subtitle: "Tokenização de Créditos de Energia via Blockchain",
        description:
          "Plataforma de tokenização de créditos energéticos via Blockchain para mobilidade elétrica. Backend com Spring Boot integrando ledger distribuído e mensageria RabbitMQ para transações P2P resilientes.",
        highlights: [
          "Tokenização de créditos energéticos",
          "Blockchain para transações P2P",
          "Mensageria assíncrona com RabbitMQ",
          "Arquitetura escalável e resiliente",
        ],
      },
      buttons: {
        viewImages: "Ver Imagens",
        demo: "Ver Demo",
        github: "GitHub",
        frontend: "Frontend",
        backend: "Backend",
        internalOnly: "Acessível apenas na rede interna",
        accessProject: "Acessar Projeto",
      },
      moreProjects: "Ver Mais Projetos no GitHub",
      gallery: {
        close: "Fechar Galeria",
      },
    },

    // Experience
    experience: {
      title: "Experiência Profissional",
      subtitle:
        "Minha jornada profissional desenvolvendo soluções reais e de impacto",
      current: "Atual",
      duration: "",
      lance: {
        title: "Desenvolvedor Web Jr",
        company: "LANCE/UFRN",
        location: "Natal, RN",
        period: "Novembro 2025 – Presente",
        description:
          "Atuo no desenvolvimento do projeto MaisCarga — plataforma financeira baseada em Blockchain para conversão, gestão e utilização de créditos de energia como ativos digitais transacionais. Trabalho na construção de APIs RESTful com Java 21 e Spring Boot (Spring Modulith), integrando a camada de rede Blockchain para processamento seguro e rastreável de transações. Em paralelo, desenvolvo interfaces web performáticas e responsivas com ReactJS, TypeScript e Tailwind CSS, entregando uma experiência fluida para gestão de carteiras de ativos digitais.",
        achievements: [
          "Desenvolvi APIs RESTful em Java 21 e Spring Boot aplicando Spring Modulith, garantindo uma arquitetura desacoplada que facilita a manutenção e a evolução independente de módulos em um sistema financeiro de alta criticidade",
          "Implementei mensageria assíncrona com RabbitMQ para gerenciar filas de comunicação entre o backend e a rede Blockchain, garantindo escalabilidade e resiliência nas transações de ativos digitais",
          "Construí interfaces web com ReactJS, TypeScript e Tailwind CSS, com componentização reutilízavel e foco em UX fluida para a gestão das carteiras de cрéditos de energia dos usuários",
          "Configurei pipeline de CI/CD completa no GitLab, automatizando build, testes e deploy com Docker em servidor Linux on-premise, utilizando Nginx como servidor web para o front-end",
          "Atingi cobertura de código superior a 85% com testes automatizados (JUnit, Mockito, JaCoCo), reduzindo regressões e aumentando a confiabilidade das entregas em produção",
        ],
      },
      senac: {
        title: "Desenvolvedor Web Jr",
        company: "Senac RN",
        location: "Natal, RN",
        period: "Agosto 2024 – Novembro 2025",
        duration: "1 ano e 3 meses",
        description:
          "Atuei no desenvolvimento full stack de dois sistemas internos: o GIP (Gestão da Permanência Estudantil), plataforma acadêmica com modelo de IA preditiva para identificação de risco de evasão; e o CASE (Controle de Atividades e Serviços Educacionais), sistema que digitalizou o controle de atividades extraclasse dos instrutores. Trabalhei na construção de APIs RESTful robustas e interfaces web modernas, entregando soluções que otimizaram processos administrativos e acadêmicos em unidades do estado.",
        achievements: [
          "Desenvolvi APIs RESTful em Java (Spring Boot) e Node.js (Express.js) com arquiteturas modulares, suportando grandes volumes de dados e facilitando a integração de novos módulos em ambos os sistemas",
          "Construí interfaces web responsivas com React, TypeScript e Material UI, entregando dashboards de indicadores acadêmicos e ferramentas de gestão que aceleraram a tomada de decisão das equipes pedagógicas e administrativas",
          "Integrei modelos de IA preditiva no GIP para calcular risco de evasão estudantil, permitindo intervenções baseadas em dados e contribuindo para maior retenção de alunos nas unidades Senac do estado",
          "Otimizei queries e modelagem de dados com PostgreSQL, garantindo integridade e desempenho em informações críticas para as rotinas financeiras e de cadastro da instituição",
          "Configurei pipelines de CI/CD com GitHub Actions, Docker e Nginx, reduzindo o tempo de deploy para menos de 5 minutos e aumentando a freqüência e confiabilidade das releases",
        ],
      },
      alares: {
        title: "Estagiário de TI",
        company: "Alares Internet",
        location: "Natal, RN",
        period: "Março 2024 – Novembro 2025",
        duration: "1 ano e 8 meses",
        description:
          "Atuei no suporte técnico de TI atendendo múltiplos setores da empresa, respondendo pela estabilidade de ambientes críticos e operacionais. Além do suporte presencial, identifiquei gargalos nos processos de provisionamento de acessos e desenvolvi scripts de automação que eliminaram trabalho manual repetitivo, ganhando visibilidade e confiança dos gestores ao entregar soluções de forma pro-ativa.",
        achievements: [
          "Prestei suporte técnico especializado em software, hardware e infraestrutura para múltiplos setores da empresa, garantindo a disponibilidade dos ambientes operacionais",
          "Realizei manutenção preventiva e corretiva em hardware, incluindo troca de SSDs, expansão de memória RAM e reivnstalação de sistemas operacionais em máquinas corporativas",
          "Automatizei processos manuais de cadastro e remoção de acessos em múltiplos sistemas corporativos com scripts Python e PowerShell, reduzindo o tempo dessas rotinas de horas para minutos",
        ],
      },
      achievementsTitle: "Principais Conquistas:",
      stacksTitle: "Stacks/Tecnologias:",
      galleryTitle: "Ambiente de Trabalho:",
      downloadCV: "Quer saber mais sobre minha trajetória?",
      downloadCVButton: "Baixar Currículo Completo",
    },

    // Education
    education: {
      title: "Formação Acadêmica",
      subtitle:
        "Minha jornada educacional construindo as bases sólidas para uma carreira em tecnologia",
      status: {
        inProgress: "Em andamento",
        completed: "Concluído",
        studying: "Cursando",
      },
      ufrn: {
        degree: "Bacharelado em Tecnologia da Informação",
        institution: "Universidade Federal do Rio Grande do Norte (UFRN)",
        period: "Março 2025 – Junho 2028",
        description:
          "Formação superior que constrói uma base robusta nos fundamentos da computação. O curso aprofunda em Algoritmos e Estruturas de Dados para a criação de soluções eficientes, Redes de Computadores para entender a comunicação de sistemas, Banco de Dados para modelagem e gestão da informação, e Matemática Aplicada como alicerce para o raciocínio lógico e a resolução de problemas complexos.",
        highlights: [
          "Algoritmos e Estruturas de Dados",
          "Engenharia de Software",
          "Banco de Dados e Modelagem de Dados",
          "Redes de Computadores",
          "Matemática Discreta e Cálculo",
          "Arquitetura de Sistemas",
        ],
      },
      senac: {
        degree: "Técnico em Desenvolvimento de Sistemas",
        institution: "Senac Rio Grande do Norte (Senac RN)",
        period: "Fevereiro 2023 – Agosto 2024",
        description:
          "Formação técnica completa em desenvolvimento de sistemas, cobrindo desde programação básica até deployment de aplicações.",
        highlights: [
          "Desenvolvimento Web Full Stack",
          "Programação Orientada a Objetos",
          "Banco de Dados Relacionais",
          "Metodologias Ágeis",
        ],
      },
      ifrn: {
        degree: "Técnico Integrado em Mineração",
        institution: "Instituto Federal do Rio Grande do Norte (IFRN)",
        period: "Março 2021 – Dezembro 2023",
        description:
          "Formação técnica integrada ao ensino médio, desenvolvendo bases sólidas em matemática, física e pensamento analítico.",
      },
    },

    // Contact
    contact: {
      title: "Vamos Trabalhar Juntos?",
      subtitle:
        "Estou sempre aberto a discutir novas oportunidades e projetos desafiadores",
      getInTouch: "Entre em Contato",
      description:
        "Tenho interesse em oportunidades de desenvolvimento de soluções inovadoras, especialmente projetos que envolvam Java, Spring Boot, Microsserviços e DevOps. Vamos conversar sobre como posso contribuir para o seu projeto!",
      info: {
        email: "Email",
        location: "Localização",
        locationValue: "Natal, RN, Brasil",
      },
      connect: "Conecte-se Comigo",
      downloadResume: "Baixar Currículo",
      form: {
        title: "Envie uma Mensagem",
        name: "Nome",
        namePlaceholder: "Seu nome completo",
        email: "Email",
        emailPlaceholder: "seu@email.com",
        message: "Mensagem",
        messagePlaceholder: "Descreva seu projeto ou oportunidade...",
        sending: "Enviando...",
        send: "Enviar Mensagem",
        success: "Mensagem enviada com sucesso! Responderei em breve.",
        error: "Erro ao enviar mensagem. Por favor, tente novamente.",
      },
    },

    // Footer
    footer: {
      rights:
        "Flávio Alexandre Orrico Severiano. Todos os direitos reservados.",
      madeWith: "Feito com",
      technologies: ", ReactJS, Typescript e Tailwind CSS.",
    },

    // Portfolio
    portfolio: {
      scrollToTop: "Voltar ao topo",
    },
  },

  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Get in Touch",
    },

    // Hero
    hero: {
      greeting: "Hello, I am",
      name: "Flávio Alexandre",
      title: "Software Developer",
      description:
        "Software Developer with experience in creating solutions to solve real problems. I am passionate about technology and always looking for new challenges to grow professionally.",
      cta: {
        projects: "View My Projects",
        resume: "Download Resume",
        contact: "Get in Touch",
      },
    },

    // About
    about: {
      title: "About Me",
      role: "Software Developer",
      description: {
        p1: "Software Developer passionate about transforming ideas into technological solutions that generate real impact. With",
        p1Highlight1: "over 2 years of experience",
        p1Middle: ", I've architected and developed",
        p1Highlight2: "Research and Development (R&D)",
        p1End:
          " systems, including solutions with Artificial Intelligence for student dropout prediction and digital asset management on Blockchain network.",
        p2: "Specialized in the",
        p2Java: "Java",
        p2With: "ecosystem with",
        p2Spring: "Spring Boot",
        p2And: "and",
        p2Micro: "Microservices",
        p2End:
          " architecture, I combine technical solidity with innovation. I rigorously apply automated testing, maintain high code coverage, and implement CI/CD pipelines to ensure continuous and reliable deliveries in R&D projects.",
        p3: "I believe quality technology is one that",
        p3Highlight: "solves real problems",
        p3End:
          " and improves people's lives. I constantly seek new challenges in R&D that allow me to grow professionally while contributing to innovative projects with AI and emerging technologies.",
      },
      stats: {
        experience: "Experience",
        experienceYears: "2 years",
        experienceRole: "Software Developer",
        education: "Education",
        educationDegree: "Bachelor's in Information Technology",
        educationInstitution: "UFRN",
      },
    },

    // Skills
    skills: {
      title: "My Skills",
      subtitle:
        "Technologies and tools I master to create complete and scalable solutions",
      filters: {
        all: "All",
        backend: "Backend",
        frontend: "Frontend",
        tools: "Tools",
      },
      showMore: "Show More",
      showLess: "Show Less",
      summary: {
        backend:
          "Scalable RESTful APIs with Java, Spring Boot and clean architecture",
        frontend:
          "Modern and responsive interfaces with React, TypeScript and Tailwind",
        fullstack: "CI/CD, containerization and automated cloud deployment",
      },
    },

    // Projects
    projects: {
      title: "Featured Projects",
      subtitle:
        "Complete solutions I developed, from conception to implementation",
      pomocube: {
        title: "PomoCube",
        subtitle: "IoT Pomodoro Timer with Raspberry Pi Pico W",
        description:
          "IoT system for a Pomodoro timer composed of Raspberry Pi Pico W hardware, a Java Spring Boot backend API for HTTP communication with the hardware, data persistence in MongoDB, and a Next.js web interface for visualizing study and focus metrics.",
        highlights: [
          "IoT hardware with Raspberry Pi Pico W",
          "RESTful API Java + Spring Boot + MongoDB",
          "Embedded firmware in MicroPython",
          "Next.js web interface with focus metrics",
        ],
      },
      maiscarga: {
        title: "MaisCarga",
        subtitle: "Energy Credit Tokenization via Blockchain",
        description:
          "Energy credit tokenization platform via Blockchain for electric mobility. Backend with Spring Boot integrating distributed ledger and RabbitMQ messaging for resilient P2P transactions.",
        highlights: [
          "Energy credit tokenization",
          "Blockchain for P2P transactions",
          "Asynchronous messaging with RabbitMQ",
          "Scalable and resilient architecture",
        ],
      },
      case: {
        title: "CASE",
        subtitle: "Educational Activities and Services Control",
        description:
          "System to digitalize the control of extra-class activities for Senac RN instructors, replacing manual processes and reducing control time by 70%.",
        highlights: [
          "Digitalization of manual processes",
          "Intuitive interface for teachers",
          "70% reduction in control time",
          "Automated notification system",
        ],
      },
      dinly: {
        title: "Dinly",
        subtitle: "Landing Page and Serverless Lead API",
        description:
          "Pre-launch landing page with lead registration system. Serverless architecture on AWS using API Gateway, Lambda (Node.js) and DynamoDB for high scalability and low cost.",
        highlights: [
          "100% Serverless architecture on AWS",
          "REST API with AWS Lambda and Node.js",
          "DynamoDB persistence",
          "Responsive landing page with React",
        ],
      },
      gip: {
        title: "GIP",
        subtitle: "Student Retention Management System",
        description:
          "School management web system with predictive AI model to assess student dropout risk. Implemented nationally at Senac RN, it integrates predictive analysis with administrative management to reduce school dropout.",
        highlights: [
          "Predictive AI for dropout analysis",
          "National implementation at Senac",
          "Integration with administrative management",
          "Full stack: Java, Spring Boot, React",
        ],
      },
      buttons: {
        viewImages: "View Images",
        demo: "View Demo",
        github: "GitHub",
        frontend: "Frontend",
        backend: "Backend",
        internalOnly: "Accessible only on internal network",
        accessProject: "Access Project",
      },
      moreProjects: "See More Projects on GitHub",
      gallery: {
        close: "Close Gallery",
      },
    },

    // Experience
    experience: {
      title: "Professional Experience",
      subtitle:
        "My professional journey building real-world solutions that create meaningful impact",
      current: "Current",
      duration: "",
      lance: {
        title: "Jr Web Developer",
        company: "LANCE/UFRN",
        location: "Natal, RN",
        period: "November 2025 – Present",
        description:
          "Working on the MaisCarga project — a Blockchain-based financial platform for the conversion, management, and use of energy credits as transactional digital assets. I build RESTful APIs with Java 21 and Spring Boot (Spring Modulith), integrating with the Blockchain network layer for secure and traceable transaction processing. In parallel, I develop performant and responsive web interfaces with ReactJS, TypeScript and Tailwind CSS, delivering a fluid experience for digital asset wallet management.",
        achievements: [
          "Developed RESTful APIs in Java 21 and Spring Boot applying Spring Modulith, ensuring a decoupled architecture that facilitates maintenance and independent evolution of modules in a high-criticality financial system",
          "Implemented asynchronous messaging with RabbitMQ to manage communication queues between the backend and Blockchain network, ensuring scalability and resilience in digital asset transactions",
          "Built web interfaces with ReactJS, TypeScript and Tailwind CSS, with reusable componentization and focus on fluid UX for managing users' energy credit wallets",
          "Configured a full CI/CD pipeline on GitLab, automating build, tests and deployment with Docker on a Linux on-premise server, using Nginx as web server for the front-end",
          "Achieved over 85% code coverage with automated tests (JUnit, Mockito, JaCoCo), reducing regressions and increasing production delivery reliability",
        ],
      },
      senac: {
        title: "Jr Web Developer",
        company: "Senac RN",
        location: "Natal, RN",
        period: "August 2024 – November 2025",
        duration: "1 year and 3 months",
        description:
          "Worked as a full stack developer on two internal systems: GIP (Student Retention Management), an academic platform with a predictive AI model to identify dropout risk; and CASE (Educational Activities and Services Control), a system that digitalized instructor extra-class activity tracking. I built robust RESTful APIs and modern web interfaces, delivering solutions that optimized administrative and academic processes across state units.",
        achievements: [
          "Developed RESTful APIs in Java (Spring Boot) and Node.js (Express.js) with modular architectures, supporting large data volumes and facilitating integration of new modules across both systems",
          "Built responsive web interfaces with React, TypeScript and Material UI, delivering academic indicator dashboards and management tools that accelerated decision-making for pedagogical and administrative teams",
          "Integrated predictive AI models in GIP to calculate student dropout risk, enabling data-driven interventions and contributing to improved student retention across Senac units statewide",
          "Optimized queries and data modeling with PostgreSQL, ensuring integrity and performance for critical financial and registration data across the institution",
          "Set up CI/CD pipelines with GitHub Actions, Docker and Nginx, reducing deployment time to under 5 minutes and increasing release frequency and reliability",
        ],
      },
      alares: {
        title: "IT Intern",
        company: "Alares Internet",
        location: "Natal, RN",
        period: "March 2024 – November 2025",
        duration: "1 year and 8 months",
        description:
          "Provided IT technical support across multiple company departments, responsible for the stability of critical and operational environments. Beyond hands-on support, I identified bottlenecks in access provisioning processes and proactively developed automation scripts that eliminated repetitive manual work, earning recognition from management for delivering impactful solutions.",
        achievements: [
          "Delivered specialized technical support in software, hardware and infrastructure for multiple company departments, ensuring uptime and availability of operational environments",
          "Performed preventive and corrective hardware maintenance, including SSD replacements, RAM upgrades and OS reinstallation on corporate machines",
          "Automated manual access provisioning and removal routines across multiple corporate systems with Python and PowerShell scripts, reducing task time from hours to minutes",
        ],
      },
      achievementsTitle: "Key Achievements:",
      stacksTitle: "Stacks/Skills:",
      galleryTitle: "Work Environment:",
      downloadCV: "Want to know more about my journey?",
      downloadCVButton: "Download Full Resume",
    },

    // Education
    education: {
      title: "Academic Background",
      subtitle:
        "My educational journey building solid foundations for a career in technology",
      status: {
        inProgress: "In Progress",
        completed: "Completed",
        studying: "Studying",
      },
      ufrn: {
        degree: "Bachelor's Degree in Information Technology",
        institution: "Federal University of Rio Grande do Norte (UFRN)",
        period: "March 2025 – June 2028",
        description:
          "Higher education that builds a robust foundation in computer science fundamentals. The program deepens into Algorithms and Data Structures for creating efficient solutions, Computer Networks to understand system communication, Databases for information modeling and management, and Applied Mathematics as a foundation for logical reasoning and solving complex problems.",
        highlights: [
          "Algorithms and Data Structures",
          "Software Engineering",
          "Databases and Data Modeling",
          "Computer Networks",
          "Discrete Mathematics and Calculus",
          "Systems Architecture",
        ],
      },
      senac: {
        degree: "Technical in Systems Development",
        institution: "Senac Rio Grande do Norte (Senac RN)",
        period: "February 2023 – August 2024",
        description:
          "Complete technical training in systems development, covering from basic programming to application deployment.",
        highlights: [
          "Full Stack Web Development",
          "Object-Oriented Programming",
          "Relational Databases",
          "Agile Methodologies",
        ],
      },
      ifrn: {
        degree: "Integrated Technical in Mining",
        institution: "Federal Institute of Rio Grande do Norte (IFRN)",
        period: "March 2021 – December 2023",
        description:
          "Technical training integrated with high school, developing solid foundations in mathematics, physics, and analytical thinking.",
      },
    },

    // Contact
    contact: {
      title: "Let's Work Together?",
      subtitle:
        "I'm always open to discussing new opportunities and challenging projects",
      getInTouch: "Get in Touch",
      description:
        "I'm interested in opportunities to develop innovative solutions, especially projects involving Java, Spring Boot, Microservices, and DevOps. Let's talk about how I can contribute to your project!",
      info: {
        email: "Email",
        location: "Location",
        locationValue: "Natal, RN, Brazil",
      },
      connect: "Connect with Me",
      downloadResume: "Download Resume",
      form: {
        title: "Send a Message",
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Describe your project or opportunity...",
        sending: "Sending...",
        send: "Send Message",
        success: "Message sent successfully! I will respond soon.",
        error: "Error sending message. Please try again.",
      },
    },

    // Footer
    footer: {
      rights: "Flávio Alexandre Orrico Severiano. All rights reserved.",
      madeWith: "Made with",
      technologies: ", ReactJS, Typescript and Tailwind CSS.",
    },

    // Portfolio
    portfolio: {
      scrollToTop: "Back to top",
    },
  },
};

export type TranslationKeys = typeof translations.pt;

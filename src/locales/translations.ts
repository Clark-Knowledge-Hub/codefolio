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
        contact: "Entre em Contato",
      },
    },

    // About
    about: {
      title: "Sobre Mim",
      role: "Desenvolvedor de Software",
      description: {
        p1: "Desenvolvedor de Software focado em criar soluções que resolvem problemas reais.",
        p1Highlight1: "Com mais de um ano de experiência",
        p1Middle:
          "no Laboratório de Inovação do Senac, arquitetei e desenvolvi do dois sistemas em produção, impactando diretamente a eficiência de",
        p1Highlight2: "centenas de usuários",
        p1End: "na rede da instituição.",
        p2: "Minha especialidade é o ecossistema",
        p2Java: "Java",
        p2With: "com",
        p2Spring: "Spring Boot",
        p2And: "e arquitetura de",
        p2Micro: "Microsserviços",
        p2End:
          ". Tenho um forte compromisso com a qualidade de código, aplicando testes automatizados (JUnit, Mockito) e garantindo a entrega contínua através de pipelines CI/CD.",
        p3: "Minha paixão é criar tecnologia que",
        p3Highlight: "agrega valor real",
        p3End:
          ", simplifica operações e impulsiona a inovação. Estou sempre em busca de novos desafios que me permitam inovar e otimizar processos, contribuindo para o avanço de projetos e negócios.",
      },
      stats: {
        experience: "Ano de Experiência",
        study: "Anos de Estudo em TI",
        users: "Usuários Ativos",
        projects: "Projetos em Produção",
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
      cosmo: {
        title: "Cosmo",
        subtitle: "Gerenciamento de Ativos de TI",
        description:
          "Plataforma centralizada para cadastrar, rastrear e gerenciar o ciclo de vida de ativos de TI na Alares Internet. Desenvolvida com API RESTful em Java 21 e Spring Boot, e frontend com ReactJS, TypeScript e Tailwind CSS.",
        highlights: [
          "Arquitetura escalável para +3000 usuários",
          "API RESTful completa com documentação",
          "Interface responsiva e intuitiva",
          "Integração com sistemas legados",
        ],
      },
      case: {
        title: "CASE",
        subtitle: "Controle de Atividades e Serviços Educacionais",
        description:
          "Projeto Integrador criado para resolver um problema real do Senac RN: digitalizar e otimizar o controle de atividades extraclasse de instrutores, substituindo processos manuais. Desenvolvido com ReactJS e ExpressJS, resultando em significativo ganho de produtividade, privacidade e eficiência para a instituição.",
        highlights: [
          "Digitalização de processos manuais",
          "Interface intuitiva para professores",
          "Redução de 70% no tempo de controle",
          "Sistema de notificações automáticas",
        ],
      },
      buttons: {
        viewImages: "Ver Imagens",
        demo: "Ver Demo",
        github: "GitHub",
        frontend: "Frontend",
        backend: "Backend",
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
        "Minha jornada profissional desenvolvendo soluções que impactam milhares de usuários",
      current: "Atual",
      senac: {
        title: "Desenvolvedor Junior",
        company: "Senac RN",
        location: "Natal, RN",
        period: "Agosto 2024 – Presente",
        description:
          "Desenvolvimento de sistemas educacionais com foco em escalabilidade e qualidade, trabalhando em squads ágeis com metodologia Scrum.",
        achievements: [
          "Arquitetei e desenvolvi sistemas para +100 usuários ativos, com replicação nacional em todas as unidades do Senac",
          "Garanti a confiabilidade das aplicações com +85% de cobertura de testes usando JUnit e Mockito",
          "Automatizei pipelines de CI/CD com GitHub Actions e Docker, reduzindo tempo de deploy em +60%",
          "Criei interfaces de front-end responsivas com ReactJS, TypeScript e Tailwind CSS",
          "Implementei APIs RESTful escaláveis em Java 21 com Spring Boot seguindo arquitetura limpa",
          "Colaborei em squads multidisciplinares utilizando metodologias ágeis (Scrum)",
        ],
      },
      alares: {
        title: "Estagiário de TI",
        company: "Alares Internet",
        location: "Natal, RN",
        period: "Março 2024 – Presente",
        description:
          "Suporte técnico especializado e desenvolvimento de soluções para automatização de processos de TI em ambiente corporativo.",
        achievements: [
          "Prestei suporte técnico em software, hardware e redes para +300 colaboradores, garantindo a estabilidade de ambientes críticos",
          "Automatizei processos manuais de revisão de acesso em sistemas com scripts em Python (Pandas, PyAutoGui, OpenCV)",
          "Desenvolvo a plataforma de inventário Cosmo (Java 21, Spring, ReactJS, TypeScript) para automatizar o ciclo de vida de ativos de TI",
          "Aumentei a eficiência operacional através da implementação de soluções tecnológicas inovadoras",
        ],
      },
      achievementsTitle: "Principais Conquistas:",
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
        contact: "Get in Touch",
      },
    },

    // About
    about: {
      title: "About Me",
      role: "Software Developer",
      description: {
        p1: "Software Developer focused on creating solutions that solve real problems.",
        p1Highlight1: "With over a year of experience",
        p1Middle:
          "at Senac's Innovation Lab, I architected and developed two production systems, directly impacting the efficiency of",
        p1Highlight2: "hundreds of users",
        p1End: "across the institution's network.",
        p2: "My specialty is the",
        p2Java: "Java",
        p2With: "ecosystem with",
        p2Spring: "Spring Boot",
        p2And: "and",
        p2Micro: "Microservices",
        p2End:
          " architecture. I have a strong commitment to code quality, applying automated testing (JUnit, Mockito) and ensuring continuous delivery through CI/CD pipelines.",
        p3: "My passion is creating technology that",
        p3Highlight: "adds real value",
        p3End:
          ", simplifies operations, and drives innovation. I'm always looking for new challenges that allow me to innovate and optimize processes, contributing to the advancement of projects and businesses.",
      },
      stats: {
        experience: "Year of Experience",
        study: "Years of IT Study",
        users: "Active Users",
        projects: "Production Projects",
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
      cosmo: {
        title: "Cosmo",
        subtitle: "IT Asset Management",
        description:
          "Centralized platform to register, track, and manage the lifecycle of IT assets at Alares Internet. Developed with RESTful API in Java 21 and Spring Boot, and frontend with ReactJS, TypeScript and Tailwind CSS.",
        highlights: [
          "Scalable architecture for +3000 users",
          "Complete RESTful API with documentation",
          "Responsive and intuitive interface",
          "Integration with legacy systems",
        ],
      },
      case: {
        title: "CASE",
        subtitle: "Educational Activities and Services Control",
        description:
          "Integrative Project created to solve a real problem at Senac RN: digitalize and optimize the control of instructors' extra-class activities, replacing manual processes. Developed with ReactJS and ExpressJS, resulting in significant gains in productivity, privacy, and efficiency for the institution.",
        highlights: [
          "Digitalization of manual processes",
          "Intuitive interface for teachers",
          "70% reduction in control time",
          "Automated notification system",
        ],
      },
      buttons: {
        viewImages: "View Images",
        demo: "View Demo",
        github: "GitHub",
        frontend: "Frontend",
        backend: "Backend",
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
        "My professional journey developing solutions that impact thousands of users",
      current: "Current",
      senac: {
        title: "Junior Developer",
        company: "Senac RN",
        location: "Natal, RN",
        period: "August 2024 – Present",
        description:
          "Development of educational systems with focus on scalability and quality, working in agile squads with Scrum methodology.",
        achievements: [
          "Architected and developed systems for +100 active users, with national replication across all Senac units",
          "Ensured application reliability with +85% test coverage using JUnit and Mockito",
          "Automated CI/CD pipelines with GitHub Actions and Docker, reducing deployment time by +60%",
          "Created responsive front-end interfaces with ReactJS, TypeScript and Tailwind CSS",
          "Implemented scalable RESTful APIs in Java 21 with Spring Boot following clean architecture",
          "Collaborated in multidisciplinary squads using agile methodologies (Scrum)",
        ],
      },
      alares: {
        title: "IT Intern",
        company: "Alares Internet",
        location: "Natal, RN",
        period: "March 2024 – Present",
        description:
          "Specialized technical support and development of solutions to automate IT processes in a corporate environment.",
        achievements: [
          "Provided technical support on software, hardware, and networks for +300 employees, ensuring stability of critical environments",
          "Automated manual access review processes in systems with Python scripts (Pandas, PyAutoGui, OpenCV)",
          "Developing the Cosmo inventory platform (Java 21, Spring, ReactJS, TypeScript) to automate the lifecycle of IT assets",
          "Increased operational efficiency through the implementation of innovative technological solutions",
        ],
      },
      achievementsTitle: "Key Achievements:",
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

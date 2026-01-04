import { translations } from "../locales/translations";

export const getProjectsData = (language: "pt" | "en") => {
  const t = translations[language];

  return [
    {
      title: t.projects.grimore.title,
      subtitle: t.projects.grimore.subtitle,
      description: t.projects.grimore.description,
      technologies: [
        "Java 21",
        "Spring Boot",
        "Spring IA",
        "Spring Security",
        "PostgreSQL",
      ],
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg"],
      github: {
        backend: "https://github.com/ClarkAshida/grimore-backend",
      },
      highlights: t.projects.grimore.highlights,
    },
    {
      title: t.projects.dinly.title,
      subtitle: t.projects.dinly.subtitle,
      description: t.projects.dinly.description,
      technologies: [
        "React",
        "Node.js",
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "Serverless",
      ],
      image: "/dinly-image.jpg",
      gallery: ["/dinly-image.jpg", "/dinly-architecture.jpg"],
      github: {},
      demo: "https://dinly.tech",
      highlights: t.projects.dinly.highlights,
    },
    {
      title: t.projects.case.title,
      subtitle: t.projects.case.subtitle,
      description: t.projects.case.description,
      technologies: [
        "ReactJS",
        "ExpressJS",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      image: "/case-image.jpg",
      gallery: ["/case-image.jpg"],
      github: {},
      internalOnly: true,
      highlights: t.projects.case.highlights,
    },
    {
      title: t.projects.gip.title,
      subtitle: t.projects.gip.subtitle,
      description: t.projects.gip.description,
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Docker",
        "IA",
      ],
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg"],
      github: {},
      internalOnly: true,
      highlights: t.projects.gip.highlights,
    },
  ];
};

export const getExperienceData = (language: "pt" | "en") => {
  const t = translations[language];

  return [
    {
      title: t.experience.lance.title,
      company: t.experience.lance.company,
      location: t.experience.lance.location,
      period: t.experience.lance.period,
      current: true,
      description: t.experience.lance.description,
      achievements: t.experience.lance.achievements,
    },
    {
      title: t.experience.senac.title,
      company: t.experience.senac.company,
      location: t.experience.senac.location,
      period: t.experience.senac.period,
      duration: t.experience.senac.duration,
      current: false,
      description: t.experience.senac.description,
      achievements: t.experience.senac.achievements,
    },
    {
      title: t.experience.alares.title,
      company: t.experience.alares.company,
      location: t.experience.alares.location,
      period: t.experience.alares.period,
      duration: t.experience.alares.duration,
      current: false,
      description: t.experience.alares.description,
      achievements: t.experience.alares.achievements,
    },
  ];
};

export const getEducationData = (language: "pt" | "en") => {
  const t = translations[language];

  return [
    {
      degree: t.education.ufrn.degree,
      institution: t.education.ufrn.institution,
      period: t.education.ufrn.period,
      status: t.education.status.inProgress as
        | "Cursando"
        | "Concluído"
        | "Em andamento",
      description: t.education.ufrn.description,
      highlights: t.education.ufrn.highlights,
    },
    {
      degree: t.education.senac.degree,
      institution: t.education.senac.institution,
      period: t.education.senac.period,
      status: t.education.status.completed as
        | "Cursando"
        | "Concluído"
        | "Em andamento",
      description: t.education.senac.description,
      highlights: t.education.senac.highlights,
    },
    {
      degree: t.education.ifrn.degree,
      institution: t.education.ifrn.institution,
      period: t.education.ifrn.period,
      status: t.education.status.completed as
        | "Cursando"
        | "Concluído"
        | "Em andamento",
      description: t.education.ifrn.description,
    },
  ];
};

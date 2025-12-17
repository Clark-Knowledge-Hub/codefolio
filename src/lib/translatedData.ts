import { translations } from "../locales/translations";

export const getProjectsData = (language: "pt" | "en") => {
  const t = translations[language];

  return [
    {
      title: t.projects.cosmo.title,
      subtitle: t.projects.cosmo.subtitle,
      description: t.projects.cosmo.description,
      technologies: [
        "Java 21",
        "Spring Boot",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MySQL",
      ],
      image: "/placeholder.svg",
      gallery: ["/placeholder.svg"],
      github: {
        frontend: "https://github.com/ClarkAshida/cosmo-frontend",
        backend: "https://github.com/ClarkAshida/cosmo-backend",
      },
      highlights: t.projects.cosmo.highlights,
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
      highlights: t.projects.case.highlights,
    },
  ];
};

export const getExperienceData = (language: "pt" | "en") => {
  const t = translations[language];

  return [
    {
      title: t.experience.senac.title,
      company: t.experience.senac.company,
      location: t.experience.senac.location,
      period: t.experience.senac.period,
      current: true,
      description: t.experience.senac.description,
      achievements: t.experience.senac.achievements,
    },
    {
      title: t.experience.alares.title,
      company: t.experience.alares.company,
      location: t.experience.alares.location,
      period: t.experience.alares.period,
      current: true,
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

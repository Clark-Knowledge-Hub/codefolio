import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimationVariants";
import { FiGithub, FiExternalLink, FiUsers } from "react-icons/fi";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  users?: string;
  image: string;
  github: {
    frontend?: string;
    backend?: string;
  };
  demo?: string;
  highlights: string[];
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects: Project[] = [
    {
      title: "Cosmo",
      subtitle: "Gerenciamento de Ativos de TI",
      description:
        "Plataforma centralizada para cadastrar, rastrear e gerenciar o ciclo de vida de ativos de TI na Alares Internet. Desenvolvida com API RESTful em Java 21 e Spring Boot, e frontend com ReactJS, TypeScript e Tailwind CSS.",
      technologies: [
        "Java 21",
        "Spring Boot",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "MySQL",
      ],
      image: "/placeholder.svg",
      github: {
        frontend: "https://github.com/ClarkAshida/cosmo-frontend",
        backend: "https://github.com/ClarkAshida/cosmo-backend",
      },
      demo: "#",
      highlights: [
        "Arquitetura escalável para +3000 usuários",
        "API RESTful completa com documentação",
        "Interface responsiva e intuitiva",
        "Integração com sistemas legados",
      ],
    },
    {
      title: "CASE",
      subtitle: "Controle de Atividades e Serviços Educacionais",
      description:
        "Solução para digitalizar e otimizar o controle de atividades extraclasse no Senac RN, substituindo processos manuais. Desenvolvido com ReactJS e ExpressJS, resultando em significativo ganho de produtividade para a equipe.",
      technologies: [
        "ReactJS",
        "ExpressJS",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      users: "3000+",
      image: "/placeholder.svg",
      github: {
        // Repositório privado/corporativo
      },
      // Projeto interno - não disponível publicamente
      highlights: [
        "Digitalização de processos manuais",
        "Interface intuitiva para professores",
        "Redução de 70% no tempo de controle",
        "Sistema de notificações automáticas",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projetos em Destaque
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-foreground-secondary mt-6 max-w-2xl mx-auto">
              Soluções completas que desenvolvi, desde a concepção até a
              implementação
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "var(--shadow-hover)" }}
                className="bg-card border border-card-border rounded-2xl overflow-hidden group transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-card overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  {project.demo && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/20 flex items-center justify-center transition-opacity duration-300"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          project.demo && window.open(project.demo, "_blank")
                        }
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary-light transition-colors"
                      >
                        Acessar Projeto
                      </motion.button>
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Users Info */}
                  {project.users && (
                    <div className="flex items-center gap-1 text-sm text-foreground-secondary mb-4">
                      <FiUsers size={16} />
                      {project.users} usuários
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Links */}
                  {(project.github.frontend || project.github.backend) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.github.frontend && (
                        <motion.a
                          href={project.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-4 py-2 bg-transparent border border-card-border text-foreground-secondary hover:border-primary hover:text-primary transition-all text-sm rounded-lg"
                        >
                          <FiGithub size={16} />
                          Frontend
                        </motion.a>
                      )}
                      {project.github.backend && (
                        <motion.a
                          href={project.github.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-4 py-2 bg-transparent border border-card-border text-foreground-secondary hover:border-primary hover:text-primary transition-all text-sm rounded-lg"
                        >
                          <FiGithub size={16} />
                          Backend
                        </motion.a>
                      )}
                    </div>
                  )}

                  {/* Demo Button */}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-hover transition-all"
                    >
                      <FiExternalLink size={16} />
                      Acessar Projeto
                    </motion.a>
                  )}
                </div>

                {/* Hover Effect Gradient */}
                <div className="h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <FiGithub size={20} />
              Ver Mais Projetos no GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

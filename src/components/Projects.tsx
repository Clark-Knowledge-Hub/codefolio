import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimationVariants";
import {
  FiGithub,
  FiExternalLink,
  FiUsers,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import caseImage from "../assets/case.jpeg";
import caseImage2 from "../assets/case2.jpeg";
import caseImage3 from "../assets/case3.jpeg";
import caseImage4 from "../assets/case4.jpeg";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  users?: string;
  image: string;
  gallery: string[];
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

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
      gallery: ["/placeholder.svg"],
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
        "Projeto Integrador criado para resolver um problema real do Senac RN: digitalizar e otimizar o controle de atividades extraclasse de instrutores, substituindo processos manuais. Desenvolvido com ReactJS e ExpressJS, resultando em significativo ganho de produtividade, privacidade e eficiência para a instituição.",
      technologies: [
        "ReactJS",
        "ExpressJS",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      image: caseImage,
      gallery: [caseImage, caseImage2, caseImage3, caseImage4],
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
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "var(--shadow-hover)" }}
                className="bg-card border border-card-border rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col"
              >
                {/* Project Image */}
                <div
                  className="relative h-48 bg-gradient-card overflow-hidden cursor-pointer"
                  onClick={() => openGallery(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 flex items-center justify-center transition-opacity duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Ver Galeria
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1">
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
              href="https://github.com/ClarkAshida"
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

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4"
              onClick={closeGallery}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] bg-card rounded-lg sm:rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-card-border">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground truncate">
                      {selectedProject.title}
                    </h3>
                    <p className="text-primary font-medium text-sm sm:text-base truncate">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeGallery}
                    className="ml-4 w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-light transition-colors flex-shrink-0"
                  >
                    <FiX size={16} className="sm:w-5 sm:h-5" />
                  </motion.button>
                </div>

                {/* Image Gallery */}
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden bg-background flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedProject.gallery[currentImageIndex]}
                        alt={`${selectedProject.title} - Imagem ${
                          currentImageIndex + 1
                        }`}
                        className="max-w-full max-h-full object-contain"
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors z-10"
                        >
                          <FiChevronLeft size={16} className="sm:w-6 sm:h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors z-10"
                        >
                          <FiChevronRight size={16} className="sm:w-6 sm:h-6" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm z-10">
                      {currentImageIndex + 1} / {selectedProject.gallery.length}
                    </div>
                  </div>

                  <div className="p-3 sm:p-6 border-t border-card-border">
                    <div className="flex gap-2 sm:gap-3 justify-center overflow-x-auto pb-2"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

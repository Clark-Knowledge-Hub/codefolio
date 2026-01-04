import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiZap, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import caseImg from "../../assets/case.jpeg";
import caseImg2 from "../../assets/case2.jpeg";
import caseImg3 from "../../assets/case3.jpeg";
import caseImg4 from "../../assets/case4.jpeg";
import gip from "../../assets/gip.png";
import grimore from "../../assets/grimore.png";

interface Project {
  name: string;
  tagline: string;
  description: string;
  impact: string;
  tech: string[];
  image: string;
  gallery: string[];
}

const Slide5Projetos = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide5;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mapear projetos com imagens
  const projectsWithImages: Project[] = t.projects.map((project, index) => {
    if (index === 0) {
      // CASE
      return {
        ...project,
        image: caseImg,
        gallery: [caseImg, caseImg2, caseImg3, caseImg4],
      };
    }
    if (index === 1) {
      // GIP
      return {
        ...project,
        image: gip,
        gallery: [gip],
      };
    }
    if (index === 2) {
      // Grimore
      return {
        ...project,
        image: grimore,
        gallery: [grimore],
      };
    }
    return project as unknown as Project;
  });

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

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Grid - Static */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--card-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--card-border)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-20 relative z-10 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {projectsWithImages.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-card border-2 border-card-border rounded-2xl shadow-card hover:shadow-hover transition-all h-full flex flex-col overflow-hidden group">
                  {/* Image Area */}
                  <div
                    className="relative h-40 bg-gradient-card overflow-hidden cursor-pointer"
                    onClick={() => openGallery(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Tagline Badge */}
                    <div className="absolute top-3 left-3 bg-primary/95 backdrop-blur-sm px-3 py-1 rounded-full z-10">
                      <span className="text-xs font-bold text-primary-foreground">
                        {project.tagline}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm shadow-lg flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Project Name */}
                    <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground-secondary text-xs leading-relaxed mb-3 flex-1">
                      {project.description}
                    </p>

                    {/* Impact Highlight */}
                    <div className="bg-gradient-card border border-primary/30 rounded-lg p-3 mb-3">
                      <div className="flex items-start gap-2">
                        <FiZap className="text-primary text-base flex-shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold text-primary leading-snug">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/30 rounded-md text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-card-border">
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-foreground truncate">
                    {selectedProject.name}
                  </h3>
                  <p className="text-primary font-medium text-base truncate">
                    {selectedProject.tagline}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeGallery}
                  className="ml-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-light transition-colors flex-shrink-0"
                >
                  <FiX size={20} />
                </motion.button>
              </div>

              {/* Image Gallery */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[500px] overflow-hidden bg-background flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`${selectedProject.name} - Imagem ${
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
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors z-10"
                      >
                        <FiChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors z-10"
                      >
                        <FiChevronRight size={24} />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm z-10">
                    {currentImageIndex + 1} / {selectedProject.gallery.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slide5Projetos;

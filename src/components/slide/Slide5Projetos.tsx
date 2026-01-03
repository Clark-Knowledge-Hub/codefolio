import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiGithub, FiZap } from "react-icons/fi";

const Slide5Projetos = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide5;

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

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {t.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-card border-2 border-card-border rounded-2xl shadow-card h-full flex flex-col overflow-hidden">
                  {/* Image Area */}
                  <div className="relative h-32 bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl opacity-20">💻</div>
                    </div>

                    {/* Tagline Badge */}
                    <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-semibold text-primary-foreground">
                        {project.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Project Name */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground-secondary text-xs leading-relaxed mb-3 flex-1">
                      {project.description}
                    </p>

                    {/* Impact Highlight */}
                    <div className="bg-gradient-card border border-primary/20 rounded-lg p-2 mb-3">
                      <div className="flex items-start gap-2">
                        <FiZap className="text-primary text-sm flex-shrink-0 mt-0.5" />
                        <p className="text-xs font-medium text-primary leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded text-xs font-medium"
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

          {/* Bottom Note */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-foreground-secondary text-xs">
              🚀 Mais projetos disponíveis no meu{" "}
              <a
                href="https://github.com/ClarkAshida"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                GitHub
                <FiGithub className="text-sm" />
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5Projetos;

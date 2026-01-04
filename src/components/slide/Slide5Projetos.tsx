import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiGithub, FiZap } from "react-icons/fi";
import caseImg from "../../assets/case.jpeg";
import gip from "../../assets/gip.jpeg";
import grimore from "../../assets/grimore.jpeg";

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
            {t.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-card border-2 border-card-border rounded-2xl shadow-card hover:shadow-hover transition-all h-full flex flex-col overflow-hidden">
                  {/* Image Area */}
                  <div className="relative h-36 bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">💻</div>
                    </div>

                    {/* Tagline Badge */}
                    <div className="absolute top-3 left-3 bg-primary/95 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-primary-foreground">
                        {project.tagline}
                      </span>
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

          {/* Bottom Note */}
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <p className="text-foreground-secondary text-sm">
              🚀 Mais projetos disponíveis no meu{" "}
              <a
                href="https://github.com/ClarkAshida"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                GitHub
                <FiGithub className="text-base" />
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5Projetos;

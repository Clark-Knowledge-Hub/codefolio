import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { presentationDevopsTranslations } from "../../../locales/presentationDevops";
import { fadeInUp, staggerContainer } from "../../AnimationVariants";
import { FaDocker, FaAws } from "react-icons/fa";
import { SiPrometheus, SiGrafana } from "react-icons/si";
import { FiGitlab, FiCheckCircle } from "react-icons/fi";

const Slide5ProjetosDevops = () => {
  const { language } = useLanguage();
  const t = presentationDevopsTranslations[language].slide5;

  const getSectionIcon = (icon: string) => {
    switch (icon) {
      case "docker":
        return FaDocker;
      case "pipeline":
        return FiGitlab;
      case "aws":
        return FaAws;
      case "monitoring":
        return SiPrometheus;
      default:
        return FiCheckCircle;
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
          <motion.div variants={fadeInUp} className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-sm text-foreground-secondary mb-3">
              {t.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Project Header */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-card border-2 border-primary/40 rounded-2xl p-5 mb-6 shadow-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {t.project.name}
                </h3>
                <p className="text-base text-foreground font-semibold mb-2">
                  {t.project.tagline}
                </p>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {t.project.overview}
                </p>
              </div>
              <div className="flex gap-2">
                <FaDocker className="text-4xl text-[#2496ed]" />
                <FaAws className="text-4xl text-[#ff9900]" />
              </div>
            </div>
          </motion.div>

          {/* DevOps Sections - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {t.project.sections.map((section, index) => {
              const IconComponent = getSectionIcon(section.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-card border-2 border-card-border rounded-xl shadow-card hover:shadow-hover transition-all overflow-hidden"
                >
                  {/* Section Header */}
                  <div className="bg-gradient-card border-b border-card-border p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-primary text-xl" />
                      </div>
                      <h4 className="text-base font-bold text-foreground">
                        {section.title}
                      </h4>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-4">
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-2 text-xs text-foreground-secondary leading-snug"
                        >
                          <span className="text-primary font-bold mt-0.5 flex-shrink-0">
                            →
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Results & Tech Stack - Side by Side */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Results */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-card border-2 border-primary/30 rounded-xl p-4 shadow-card"
            >
              <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <FiCheckCircle className="text-primary" />
                Resultados
              </h4>
              <div className="space-y-2">
                {t.project.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-xs text-foreground-secondary"
                  >
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={fadeInUp}
              className="bg-card border border-card-border rounded-xl p-4 shadow-card"
            >
              <h4 className="text-sm font-bold text-foreground mb-3">
                Stack Completa
              </h4>
              <div className="flex flex-wrap gap-2">
                {t.project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-lg text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5ProjetosDevops;

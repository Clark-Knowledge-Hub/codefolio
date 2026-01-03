import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiCheckCircle } from "react-icons/fi";

const Slide4ExperienciaAnterior = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide4;

  return (
    <div className="h-screen flex items-center justify-center bg-background py-8 overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>

            {/* Company Badge */}
            <div className="inline-flex flex-col items-center gap-2 bg-card border border-card-border px-6 py-4 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-foreground">
                {t.company}
              </h3>
              <p className="text-lg text-primary font-semibold">{t.role}</p>
              <p className="text-xs text-foreground-secondary">{t.period}</p>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Left Column - Image Placeholder */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="relative h-full min-h-[300px] bg-gradient-to-br from-blue-500/10 via-background to-blue-500/5 rounded-2xl border-2 border-card-border shadow-card flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-10">🎓</div>
                </div>
                <div className="relative text-center p-6">
                  <div className="text-4xl font-bold text-blue-400/50 mb-2">
                    SENAC
                  </div>
                  <div className="text-sm text-foreground-secondary">
                    Logo Placeholder
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Experience Details */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-4">
              {/* Context */}
              <p className="text-foreground-secondary text-sm leading-relaxed italic">
                {t.context}
              </p>

              {/* Combined Contributions & Results */}
              <div className="bg-card border border-card-border rounded-xl p-5 shadow-card space-y-3">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <FiCheckCircle className="text-primary" />
                  Contribuições & Resultados
                </h3>

                <div className="space-y-2">
                  {t.contributions.items.map((item, index) => (
                    <div
                      key={`contrib-${index}`}
                      className="flex items-start gap-2 text-sm text-foreground-secondary"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}

                  {t.results.items.map((item, index) => (
                    <div
                      key={`result-${index}`}
                      className="flex items-start gap-2 text-sm text-primary font-medium"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-card border border-card-border rounded-xl p-4 shadow-card">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4ExperienciaAnterior;

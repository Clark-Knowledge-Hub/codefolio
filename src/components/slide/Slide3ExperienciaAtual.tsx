import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiCheckCircle } from "react-icons/fi";
import lance from "../../assets/lance.jpg";

const Slide3ExperienciaAtual = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide3;

  return (
    <div className="h-screen flex items-center justify-center bg-background-secondary overflow-hidden">
      <div className="container mx-auto px-20 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-5"></div>

            {/* Company Badge */}
            <div className="inline-flex flex-col items-center gap-1.5 bg-gradient-card border-2 border-primary/40 px-6 py-3 rounded-xl shadow-card">
              <h3 className="text-xl font-bold text-foreground">{t.company}</h3>
              <p className="text-base text-primary font-bold">{t.role}</p>
              <p className="text-xs text-foreground-secondary">{t.period}</p>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left Column - Image Placeholder */}
            <motion.div variants={fadeInUp} className="lg:col-span-4">
              <div className="relative aspect-square bg-black rounded-2xl border-2 border-card-border shadow-card flex items-center justify-center overflow-hidden">
                <img
                  src={lance}
                  alt="LANCE"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right Column - Experience Details */}
            <motion.div variants={fadeInUp} className="lg:col-span-8 space-y-4">
              {/* Context */}
              <div className="bg-gradient-card border border-primary/20 rounded-xl p-4 shadow-card">
                <p className="text-foreground-secondary text-sm leading-relaxed italic">
                  {t.context}
                </p>
              </div>

              {/* Combined Responsibilities & Impact */}
              <div className="bg-card border border-card-border rounded-xl p-5 shadow-card">
                <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <FiCheckCircle className="text-primary text-lg" />
                  Atribuições & Impactos
                </h3>

                <div className="space-y-2">
                  {t.responsibilities.items.map((item, index) => (
                    <div
                      key={`resp-${index}`}
                      className="flex items-start gap-2 text-sm text-foreground-secondary leading-snug"
                    >
                      <span className="text-blue-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}

                  {t.impact.items.map((item, index) => (
                    <div
                      key={`impact-${index}`}
                      className="flex items-start gap-2 text-sm text-foreground font-medium leading-snug"
                    >
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-card border border-card-border rounded-xl p-4 shadow-card">
                <h4 className="text-sm font-bold text-foreground mb-3">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/30 rounded-lg text-xs font-semibold"
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

export default Slide3ExperienciaAtual;

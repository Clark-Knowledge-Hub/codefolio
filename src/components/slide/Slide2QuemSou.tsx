import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiCode, FiTrendingUp } from "react-icons/fi";
import aboutme from "../../assets/aboutme.jpeg";

const Slide2QuemSou = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide2;

  return (
    <div className="h-screen flex items-center justify-center bg-background py-8 overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content - Photo + Info */}
          <div className="grid lg:grid-cols-5 gap-8 mb-6">
            {/* Left Column - Photo */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-card-border shadow-card">
                  <img
                    src={aboutme}
                    alt="Flávio Alexandre"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Detailed Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-4">
              {/* Profile Summary */}
              <div className="bg-card border border-card-border rounded-xl p-5 shadow-card">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <FiCode />
                  {t.subtitle}
                </h3>
                <div className="space-y-2 text-foreground-secondary text-sm leading-relaxed">
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{t.profile.intro}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{t.profile.stack}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{t.profile.experience}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{t.profile.focus}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom - Education Cards */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
            {/* Faculdade */}
            <div className="bg-gradient-card border border-primary/20 rounded-xl p-4 shadow-card">
              <h3 className="text-primary font-bold text-base mb-1 flex items-center gap-2">
                <FiTrendingUp className="text-sm" />
                Bacharelado em Tecnologia da Informação
              </h3>
              <p className="text-foreground text-sm font-medium">
                Universidade Federal do Rio Grande do Norte (UFRN)
              </p>
              <p className="text-foreground-secondary text-xs mt-1">
                Março 2025 – Junho 2028 | Em andamento
              </p>
            </div>

            {/* Técnico */}
            <div className="bg-gradient-card border border-primary/20 rounded-xl p-4 shadow-card">
              <h3 className="text-primary font-bold text-base mb-1 flex items-center gap-2">
                <FiTrendingUp className="text-sm" />
                Técnico em Desenvolvimento de Sistemas
              </h3>
              <p className="text-foreground text-sm font-medium">
                Senac Rio Grande do Norte
              </p>
              <p className="text-foreground-secondary text-xs mt-1">
                Fevereiro 2023 – Agosto 2024 | Concluído
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide2QuemSou;

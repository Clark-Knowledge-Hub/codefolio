import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { presentationDevopsTranslations } from "../../../locales/presentationDevops";
import { fadeInUp, staggerContainer } from "../../AnimationVariants";
import { FiBookOpen, FiCode } from "react-icons/fi";
import aboutme from "../../../assets/aboutme.jpeg";

const Slide2QuemSouDevops = () => {
  const { language } = useLanguage();
  const t = presentationDevopsTranslations[language].slide2;

  return (
    <div className="h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-20 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content - Photo + Info */}
          <div className="grid lg:grid-cols-5 gap-8 items-start mb-8">
            {/* Left Column - Photo */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="relative w-full h-full">
                <div className="rounded-2xl overflow-hidden border-2 border-card-border shadow-card bg-gradient-card h-full min-h-[500px]">
                  <img
                    src={aboutme}
                    alt="Flávio Alexandre"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-5">
              {/* Profile Summary - DevOps Focus */}
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FiCode className="text-2xl" />
                  {language === "pt"
                    ? "Desenvolvedor & DevOps"
                    : "Developer & DevOps"}
                </h3>
                <div className="space-y-3 text-foreground-secondary leading-relaxed">
                  {t.profile.stack && (
                    <p className="flex items-start gap-3">
                      <span className="text-primary text-lg font-bold mt-0.5">
                        •
                      </span>
                      <span>{t.profile.stack}</span>
                    </p>
                  )}

                  {t.profile.experience && (
                    <p className="flex items-start gap-3">
                      <span className="text-primary text-lg font-bold mt-0.5">
                        •
                      </span>
                      <span>{t.profile.experience}</span>
                    </p>
                  )}

                  {t.profile.focus && (
                    <p className="flex items-start gap-3">
                      <span className="text-primary text-lg font-bold mt-0.5">
                        •
                      </span>
                      <span>{t.profile.focus}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Education Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Faculdade */}
                <div className="bg-gradient-card border border-primary/30 rounded-xl p-5 shadow-card hover:shadow-hover transition-all">
                  <div className="flex items-start gap-3 mb-2">
                    <FiBookOpen className="text-primary text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-primary font-bold text-base leading-tight">
                        {language === "pt"
                          ? "Bacharelado em Tecnologia da Informação"
                          : "Bachelor's in Information Technology"}
                      </h4>
                    </div>
                  </div>
                  <p className="text-foreground text-sm font-medium mb-1">
                    {language === "pt"
                      ? "Universidade Federal do Rio Grande do Norte (UFRN)"
                      : "Federal University of Rio Grande do Norte (UFRN)"}
                  </p>
                  <p className="text-foreground-secondary text-xs">
                    {language === "pt"
                      ? "Março 2025 – Junho 2028 • Em andamento"
                      : "March 2025 – June 2028 • In progress"}
                  </p>
                </div>

                {/* Técnico */}
                <div className="bg-gradient-card border border-card-border rounded-xl p-5 shadow-card hover:shadow-hover transition-all">
                  <div className="flex items-start gap-3 mb-2">
                    <FiBookOpen className="text-primary text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-primary font-bold text-base leading-tight">
                        {language === "pt"
                          ? "Técnico em Desenvolvimento de Sistemas"
                          : "Technical in Systems Development"}
                      </h4>
                    </div>
                  </div>
                  <p className="text-foreground text-sm font-medium mb-1">
                    Senac Rio Grande do Norte
                  </p>
                  <p className="text-foreground-secondary text-xs">
                    {language === "pt"
                      ? "Fevereiro 2023 – Agosto 2024 • Concluído"
                      : "February 2023 – August 2024 • Completed"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide2QuemSouDevops;

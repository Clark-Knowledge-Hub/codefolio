import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { presentationDevopsTranslations } from "../../../locales/presentationDevops";
import { fadeInUp, staggerContainer } from "../../AnimationVariants";
import { FiAward } from "react-icons/fi";
import oracleFoundations from "../../../assets/oracle.jpeg";
import oracleAI from "../../../assets/oracleia.jpeg";

const Slide6DestaquesDevops = () => {
  const { language } = useLanguage();
  const t = presentationDevopsTranslations[language].slide6;

  return (
    <div className="h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="container mx-auto px-20 relative z-10 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.achievements.map((achievement, index) => {
              // Mapear imagens das certificações
              const getCertificateImage = () => {
                if (achievement.title.includes("AI Foundations")) {
                  return oracleAI;
                }
                if (
                  achievement.title.includes("OCI Foundations") ||
                  achievement.title.includes("Infrastructure Foundations")
                ) {
                  return oracleFoundations;
                }
                return oracleFoundations;
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  {/* Certificate Card */}
                  <div className="bg-card border-2 border-card-border rounded-2xl shadow-card hover:shadow-hover transition-all overflow-hidden h-full flex flex-col group">
                    {/* Header with Title */}
                    <div className="p-5 bg-gradient-card border-b border-card-border">
                      <div className="flex items-center gap-2 mb-3">
                        <FiAward className="text-primary text-2xl flex-shrink-0" />
                        <h3 className="text-base font-bold text-foreground leading-tight">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-xs text-foreground-secondary leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Certificate Image */}
                    <div className="relative h-44 bg-gradient-to-br from-primary/5 to-background flex items-center justify-center p-4 overflow-hidden">
                      <img
                        src={getCertificateImage()}
                        alt={achievement.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Badge Oracle */}
                      <div className="absolute top-3 right-3 bg-primary/95 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-foreground text-center">
                          Oracle
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-gradient-card border-t border-card-border">
                      <p className="text-sm text-foreground-secondary font-semibold mb-1">
                        {achievement.issuer}
                      </p>
                      <p className="text-xs text-foreground-secondary">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing Message */}
          <motion.div variants={fadeInUp} className="mt-10 text-center">
            <p className="text-foreground-secondary text-sm italic">
              {t.closing}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide6DestaquesDevops;

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiAward, FiMapPin, FiUsers } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import oracleFoundations from "../../assets/oracle.jpeg";
import oracleAI from "../../assets/oracleia.jpeg";

const Slide6Destaques = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide6;

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
          <div className="grid md:grid-cols-3 gap-6">
            {t.achievements.map((achievement, index) => {
              // Mapear imagens das certificações
              const getCertificateImage = () => {
                if (achievement.title.includes("AI Foundations")) {
                  return oracleAI;
                }
                if (achievement.title.includes("OCI Foundations")) {
                  return oracleFoundations;
                }
                return null;
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  {achievement.type === "award" ? (
                    /* Award Card - Enhanced */
                    <div className="bg-gradient-card border-2 border-primary/40 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all h-full flex flex-col">
                      {/* Header com Troféu */}
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 text-center border-b border-primary/30">
                        <FaTrophy className="text-6xl text-primary mx-auto mb-3" />
                        <h3 className="text-xl font-bold text-primary leading-tight mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-foreground-secondary text-sm font-semibold">
                          {achievement.subtitle}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-foreground text-sm text-center mb-4 leading-relaxed">
                          {achievement.description}
                        </p>

                        {/* Event Details */}
                        <div className="bg-card border border-card-border rounded-lg p-4 mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <FiMapPin className="text-primary text-lg flex-shrink-0" />
                            <p className="text-xs font-semibold text-foreground">
                              {achievement.event}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiUsers className="text-primary text-lg flex-shrink-0" />
                            <p className="text-xs text-foreground-secondary">
                              {achievement.context}
                            </p>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-2">
                          {achievement.details?.map((detail, dIndex) => (
                            <div
                              key={dIndex}
                              className="flex items-start gap-2"
                            >
                              <span className="text-primary font-bold text-sm mt-0.5 flex-shrink-0">
                                ✓
                              </span>
                              <p className="text-xs text-foreground-secondary leading-snug">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Certificate Card - With Real Images */
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
                        {getCertificateImage() ? (
                          <img
                            src={getCertificateImage()}
                            alt={achievement.title}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <FiAward className="text-8xl text-primary/20" />
                        )}
                        {/* Badge Oracle - Centralizado */}
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
                  )}
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

export default Slide6Destaques;

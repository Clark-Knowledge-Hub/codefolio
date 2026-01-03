import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiAward } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

const Slide6Destaques = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide6;

  return (
    <div className="h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center py-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {achievement.type === "award" ? (
                  /* Award Card - Larger */
                  <div className="bg-gradient-card border-2 border-primary/30 rounded-2xl p-6 shadow-card h-full">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <FaTrophy className="text-4xl text-primary" />
                      <div>
                        <h3 className="text-xl font-bold text-primary">
                          {achievement.title}
                        </h3>
                        <p className="text-foreground-secondary text-xs">
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-foreground text-sm text-center mb-3">
                      {achievement.description}
                    </p>
                    <div className="space-y-1">
                      {achievement.details?.map((detail, dIndex) => (
                        <p
                          key={dIndex}
                          className="text-xs text-foreground-secondary flex items-start gap-1"
                        >
                          <span className="text-primary">•</span>
                          <span>{detail}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Certificate Card */
                  <div className="bg-card border-2 border-card-border rounded-2xl shadow-card overflow-hidden h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="relative h-40 bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FiAward className="text-7xl text-primary/20" />
                      </div>
                      <div className="relative text-center p-4">
                        <div className="text-sm font-bold text-primary/50">
                          Certificate Image
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-foreground-secondary mb-2">
                        {achievement.issuer}
                      </p>
                      <p className="text-xs text-foreground-secondary">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Closing Message */}
          <motion.div variants={fadeInUp} className="mt-8 text-center">
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

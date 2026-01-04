import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiAward } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import oracle from "../../assets/oracle.jpeg";
import oracleia from "../../assets/oracleia.jpeg";

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
            {t.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {achievement.type === "award" ? (
                  /* Award Card - Larger */
                  <div className="bg-gradient-card border-2 border-primary/40 rounded-2xl p-6 shadow-card hover:shadow-hover transition-all h-full">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <FaTrophy className="text-5xl text-primary" />
                      <div>
                        <h3 className="text-xl font-bold text-primary leading-tight">
                          {achievement.title}
                        </h3>
                        <p className="text-foreground-secondary text-xs">
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-foreground text-sm text-center mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="space-y-2">
                      {achievement.details?.map((detail, dIndex) => (
                        <p
                          key={dIndex}
                          className="text-xs text-foreground-secondary flex items-start gap-2 leading-snug"
                        >
                          <span className="text-primary font-bold mt-0.5">
                            •
                          </span>
                          <span>{detail}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Certificate Card */
                  <div className="bg-card border-2 border-card-border rounded-2xl shadow-card hover:shadow-hover transition-all overflow-hidden h-full flex flex-col">
                    {/* Image Placeholder */}
                    <div className="relative h-44 bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FiAward className="text-8xl text-primary/20" />
                      </div>
                      <div className="relative text-center p-4">
                        <div className="text-base font-bold text-primary/50">
                          Certificate
                        </div>
                        <img
                          src={oracleia}
                          alt="Oracle IA Certificate"
                          className="mx-auto mt-2 rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-center">
                      <h3 className="text-base font-bold text-foreground mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-foreground-secondary mb-1.5 font-medium">
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

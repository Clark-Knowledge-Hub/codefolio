import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "./AnimationVariants";
import { FiMapPin, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";
import { getExperienceData } from "../lib/translatedData";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  current?: boolean;
  duration?: string;
}

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences: ExperienceItem[] = getExperienceData(
    language
  ) as ExperienceItem[];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.experience.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-foreground-secondary mt-6 max-w-2xl mx-auto">
              {t.experience.subtitle}
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="relative"
              >
                <div className="absolute left-4 sm:left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-2 sm:left-4 top-8 w-4 h-4 rounded-full border-4 ${
                    experience.current
                      ? "bg-primary border-primary shadow-lg shadow-primary/50"
                      : "bg-background border-primary"
                  }`}
                >
                  {experience.current && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary rounded-full opacity-20"
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, boxShadow: "var(--shadow-hover)" }}
                  className="ml-12 sm:ml-16 bg-card border border-card-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {experience.title}
                      </h3>
                      {experience.current ? (
                        <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                          {t.experience.current}
                        </span>
                      ) : experience.duration ? (
                        <span className="inline-flex items-center px-3 py-1 bg-foreground/5 text-foreground-secondary text-sm font-medium rounded-full border border-foreground/10">
                          {experience.duration}
                        </span>
                      ) : null}
                    </div>

                    <h4 className="text-xl font-semibold text-primary mb-3">
                      {experience.company}
                    </h4>

                    <div className="flex flex-col sm:flex-row gap-4 text-foreground-secondary">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground-secondary leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                      <FiCheckCircle className="text-primary" size={20} />
                      {t.experience.achievementsTitle}
                    </h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          variants={fadeInUp}
                          className="flex items-start gap-3 text-foreground-secondary"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Download CV Section */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <p className="text-foreground-secondary text-lg mb-6">
              {t.experience.downloadCV}
            </p>
            <motion.a
              href={
                language === "pt"
                  ? "/Flavio-Alexandre-Curriculo-BR.pdf"
                  : "/Flavio-Alexandre-Curriculo-EN.pdf"
              }
              download={
                language === "pt"
                  ? "Flavio-Alexandre-Curriculo-BR.pdf"
                  : "Flavio-Alexandre-Curriculo-EN.pdf"
              }
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-hover)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-card hover:shadow-hover transition-all"
            >
              <FiCheckCircle size={20} />
              {t.experience.downloadCVButton}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

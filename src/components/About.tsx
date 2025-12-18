import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "./AnimationVariants";
import aboutme from "../assets/aboutme.jpeg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image */}
                <div className="aspect-square rounded-2xl shadow-card border border-card-border overflow-hidden bg-gradient-card">
                  <img
                    className="w-full h-full object-cover"
                    src={aboutme}
                    alt="Flávio Alexandre - Desenvolvedor de Software"
                  />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/20 rounded-full"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {t.about.role}
              </h3>

              <div className="space-y-4 text-foreground-secondary leading-relaxed">
                <p>
                  {t.about.description.p1}{" "}
                  <span className="text-primary font-semibold">
                    {t.about.description.p1Highlight1}
                  </span>{" "}
                  {t.about.description.p1Middle}{" "}
                  <span className="text-primary font-semibold">
                    {t.about.description.p1Highlight2}
                  </span>{" "}
                  {t.about.description.p1End}
                </p>
                <p>
                  {t.about.description.p2}{" "}
                  <span className="text-primary font-semibold">
                    {t.about.description.p2Java}
                  </span>{" "}
                  {t.about.description.p2With}{" "}
                  <span className="text-primary font-semibold">
                    {t.about.description.p2Spring}
                  </span>{" "}
                  {t.about.description.p2And}{" "}
                  <span className="text-primary font-semibold">
                    {t.about.description.p2Micro}
                  </span>
                  {t.about.description.p2End}
                </p>
                <p>
                  {t.about.description.p3}{" "}
                  <span className="text-primary font-semibold">
                    {t.about.description.p3Highlight}
                  </span>
                  {t.about.description.p3End}
                </p>
              </div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 gap-4 mt-8"
              >
                <div className="bg-card border border-card-border rounded-lg p-4 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    2+
                  </div>
                  <div className="text-sm sm:text-base text-foreground-secondary leading-tight mt-1">
                    {t.about.stats.experience}
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg p-4 sm:p-5">
                  <div className="text-sm sm:text-base text-foreground-secondary font-semibold mb-2">
                    {t.about.stats.education}
                  </div>
                  <div className="text-base sm:text-lg text-primary font-bold">
                    {t.about.stats.educationValue}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "./AnimationVariants";
import aboutme from "../assets/aboutme.jpeg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";
import { FiBriefcase, FiAward } from "react-icons/fi";

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

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Image Section - 2 columns */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 relative">
              <div className="relative w-full max-w-sm mx-auto lg:sticky lg:top-24">
                {/* Profile Image - Taller aspect ratio */}
                <div className="aspect-[3/4] rounded-2xl shadow-card border border-card-border overflow-hidden bg-gradient-card">
                  <img
                    className="w-full h-full object-cover object-center"
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

            {/* Content Section - 3 columns */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  {t.about.role}
                </h3>

                <div className="space-y-4 text-foreground-secondary leading-relaxed text-base">
                  <p>
                    {t.about.description.p1}{" "}
                    <span className="text-primary font-semibold">
                      {t.about.description.p1Highlight1}
                    </span>
                    {t.about.description.p1Middle}{" "}
                    <span className="text-primary font-semibold">
                      {t.about.description.p1Highlight2}
                    </span>
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
              </div>

              {/* Stats Cards with Icons */}
              <motion.div
                variants={fadeInUp}
                className="grid sm:grid-cols-2 gap-4"
              >
                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -5, boxShadow: "var(--shadow-hover)" }}
                  className="bg-card border border-card-border rounded-xl p-5 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                      <FiBriefcase className="text-primary" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground-secondary uppercase tracking-wide mb-1">
                        {t.about.stats.experience}
                      </p>
                      <p className="text-2xl font-bold text-primary mb-1">
                        {t.about.stats.experienceYears}
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        {t.about.stats.experienceRole}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Education Card */}
                <motion.div
                  whileHover={{ y: -5, boxShadow: "var(--shadow-hover)" }}
                  className="bg-card border border-card-border rounded-xl p-5 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                      <FiAward className="text-primary" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground-secondary uppercase tracking-wide mb-1">
                        {t.about.stats.education}
                      </p>
                      <p className="text-base font-bold text-primary mb-1 leading-tight">
                        {t.about.stats.educationDegree}
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        {t.about.stats.educationInstitution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

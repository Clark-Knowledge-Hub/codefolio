import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { FaJava, FaReact, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { SiSpringboot, SiTypescript } from "react-icons/si";

const Slide1Capa = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide1;

  const techIcons = [
    { Icon: FaJava, name: "Java", color: "text-[#f89820]" },
    { Icon: SiSpringboot, name: "Spring Boot", color: "text-[#6db33f]" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-[#3178c6]" },
    { Icon: FaReact, name: "React", color: "text-[#61dafb]" },
    { Icon: FaDocker, name: "Docker", color: "text-[#2496ed]" },
    { Icon: FaGitAlt, name: "Git", color: "text-[#f05032]" },
    { Icon: FaAws, name: "AWS", color: "text-[#ff9900]" },
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background - Static */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--card-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--card-border)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Orbs - Static */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4 leading-none"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              background:
                "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 50%, hsl(var(--primary-light)) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-3"
          >
            {t.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground-secondary mb-8"
          >
            {t.subtitle}
          </motion.p>

          {/* Tech Stack Icons - Simplified */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-12"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-card border-2 border-card-border rounded-2xl flex items-center justify-center shadow-card">
                  <tech.Icon className={`${tech.color} text-4xl md:text-5xl`} />
                </div>
                <span className="text-xs md:text-sm text-foreground-secondary font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Elements - Static */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-primary/10 rounded-full" />
    </div>
  );
};

export default Slide1Capa;

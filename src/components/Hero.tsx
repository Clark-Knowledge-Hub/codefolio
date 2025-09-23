import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground-secondary mb-4"
          >
            Olá, eu sou
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              background:
                "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--primary)))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Flávio Alexandre
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Desenvolvedor de Software
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-foreground-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Desenvolvedor de Software com experiência em criar soluções para
            resolver problemas reais. Sou paixonado por tecnologia e estou
            sempre em busca de novos desafios para crescer profissionalmente.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-hover)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg flex items-center gap-2 shadow-card transition-all hover:shadow-hover w-full sm:w-auto justify-center"
            >
              Ver Meus Projetos
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Entre em Contato
              <FiMail className="group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-foreground-secondary rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar/esconder botão baseado na posição de scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background text-foreground font-inter antialiased"
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />

      {/* Botão Scroll to Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "var(--shadow-hover)",
          backgroundColor: "hsl(var(--primary-light))",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-card flex items-center justify-center cursor-pointer border-2 border-primary hover:border-primary-light transition-all"
        style={{ display: isVisible ? "flex" : "none" }}
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiArrowUp size={20} />
        </motion.div>

        {/* Efeito de pulso */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary opacity-0"
          whileHover={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.button>
    </motion.div>
  );
};

export default Portfolio;

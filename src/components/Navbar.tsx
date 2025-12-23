import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Fechar menu mobile após clique
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen ? "z-[60]" : "z-50"
        } ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-card-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="text-2xl font-bold text-foreground">
                <span className="text-primary">&lt;</span>
                <span className="text-foreground">FA</span>
                <span className="text-primary">/&gt;</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground-secondary hover:text-primary"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {t.nav.contact}
              </motion.button>

              {/* Language Toggle */}
              <div className="flex items-center gap-1 p-1 bg-card border border-card-border rounded-lg">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => language !== "pt" && toggleLanguage()}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    language === "pt"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground-secondary hover:text-foreground hover:bg-background"
                  }`}
                  aria-label="Switch to Portuguese"
                >
                  <span>🇧🇷</span>
                  <span>PT</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => language !== "en" && toggleLanguage()}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    language === "en"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground-secondary hover:text-foreground hover:bg-background"
                  }`}
                  aria-label="Switch to English"
                >
                  <span>🇺🇸</span>
                  <span>EN</span>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground-secondary hover:text-primary p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-card-border mt-4 pt-4 overflow-hidden bg-background/95 backdrop-blur-md rounded-b-lg"
              >
                <div className="flex flex-col space-y-4 pb-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left py-2 px-4 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? "text-primary bg-primary/10"
                          : "text-foreground-secondary hover:text-primary hover:bg-card"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}

                  {/* Mobile CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => scrollToSection("contact")}
                    className="mt-4 px-4 py-3 text-center text-primary border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {t.nav.contact}
                  </motion.button>

                  {/* Mobile Language Toggle */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-2 flex items-center gap-2 p-1.5 bg-card border border-card-border rounded-lg"
                  >
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => language !== "pt" && toggleLanguage()}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all ${
                        language === "pt"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground-secondary hover:text-foreground hover:bg-background"
                      }`}
                    >
                      <span>🇧🇷</span>
                      <span>PT</span>
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => language !== "en" && toggleLanguage()}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all ${
                        language === "en"
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground-secondary hover:text-foreground hover:bg-background"
                      }`}
                    >
                      <span>🇺🇸</span>
                      <span>EN</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

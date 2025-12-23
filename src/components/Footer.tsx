import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiHeart, FiArrowUp } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/ClarkAshida",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/fl%C3%A1vio-alexandre-dev/",
      label: "LinkedIn",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-card-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* Copyright */}
            <div className="text-foreground-secondary text-sm text-center md:text-left">
              © {currentYear} {t.footer.rights}
            </div>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-foreground-secondary text-sm">
              <span>{t.footer.madeWith}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" size={16} />
              </motion.div>
              <span>{t.footer.technologies}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

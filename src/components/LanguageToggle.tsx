import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
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
  );
};

export default LanguageToggle;

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Slide7Encerramento = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide7;

  const contactLinks = [
    {
      icon: FiMail,
      label: "Email",
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: t.contact.linkedin,
      href: `https://www.linkedin.com${t.contact.linkedin}`,
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: t.contact.github,
      href: `https://${t.contact.github}`,
    },
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--card-border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--card-border)) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Thank You */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-extrabold mb-6"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 50%, hsl(var(--primary-light)) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.title}
          </motion.h2>

          {/* Message */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {t.message}
          </motion.p>

          {/* Contact Cards */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto"
          >
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border-2 border-card-border rounded-xl p-5 shadow-card transition-all"
              >
                <contact.icon className="text-primary text-3xl mb-2 mx-auto" />
                <h3 className="text-foreground font-bold mb-1 text-base">
                  {contact.label}
                </h3>
                <p className="text-foreground-secondary text-xs break-all">
                  {contact.value}
                </p>
              </a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp}>
            <a
              href={`mailto:${t.contact.email}?subject=Conversa sobre oportunidade`}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-card"
            >
              {t.callToAction}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide7Encerramento;

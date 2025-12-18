import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimationVariants";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales/translations";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Configurações do EmailJS
  const EMAILJS_SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_portfolio";
  const EMAILJS_TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_contact";
  const EMAILJS_PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

  const contactInfo = [
    {
      icon: FiMail,
      label: t.contact.info.email,
      value: "flavioalexandrwork@gmail.com",
      href: "mailto:flavioalexandrwork@gmail.com",
    },
    {
      icon: FiMapPin,
      label: t.contact.info.location,
      value: t.contact.info.locationValue,
      href: "#contact",
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fl%C3%A1vio-alexandre-dev/",
      color: "hover:text-blue-400",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/ClarkAshida",
      color: "hover:text-foreground",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Parâmetros para o template do EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "flavioalexandrework@gmail.com",
        reply_to: formData.email,
      };

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email enviado com sucesso:", result);

      // Reset form e mostrar sucesso
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");

      // Limpar status após 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus("error");

      // Limpar status após 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
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
              {t.contact.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-foreground-secondary mt-6 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t.contact.getInTouch}
                </h3>
                <p className="text-foreground-secondary leading-relaxed mb-8">
                  {t.contact.description}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl hover:border-primary transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <item.icon
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                        size={20}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {item.label}
                      </div>
                      <div className="text-foreground-secondary group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {t.contact.connect}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-card border border-card-border rounded-lg flex items-center justify-center text-foreground-secondary transition-all hover:border-primary hover:shadow-hover ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <div className="pt-6 border-t border-card-border">
                <motion.a
                  href={language === "pt" ? "/Flavio-Alexandre-Curriculo-BR.pdf" : "/Flavio-Alexandre-Curriculo-EN.pdf"}
                  download={language === "pt" ? "Flavio-Alexandre-Curriculo-BR.pdf" : "Flavio-Alexandre-Curriculo-EN.pdf"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-card border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <FiMail size={20} />
                  {t.contact.downloadResume}
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t.contact.form.title}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-foreground font-medium mb-2"
                    >
                      {t.contact.form.name}
                    </label>
                    <div className="relative">
                      <FiUser
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-secondary"
                        size={18}
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder-foreground-secondary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder={t.contact.form.namePlaceholder}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-foreground font-medium mb-2"
                    >
                      {t.contact.form.email}
                    </label>
                    <div className="relative">
                      <FiMail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-secondary"
                        size={18}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder-foreground-secondary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder={t.contact.form.emailPlaceholder}
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-foreground font-medium mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <div className="relative">
                      <FiMessageSquare
                        className="absolute left-3 top-3 text-foreground-secondary"
                        size={18}
                      />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 bg-background border border-card-border rounded-lg text-foreground placeholder-foreground-secondary focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                        placeholder={t.contact.form.messagePlaceholder}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-card hover:shadow-hover transition-all ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                        {t.contact.form.sending}
                      </>
                    ) : (
                      <>
                        <FiSend size={18} />
                        {t.contact.form.send}
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus !== "idle" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`p-4 rounded-lg flex items-center gap-3 ${
                        submitStatus === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-400"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <FiCheckCircle size={20} />
                      ) : (
                        <FiAlertCircle size={20} />
                      )}
                      <span className="font-medium">
                        {submitStatus === "success"
                          ? t.contact.form.success
                          : t.contact.form.error}
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

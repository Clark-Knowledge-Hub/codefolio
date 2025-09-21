import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      href: '#',
      label: 'GitHub'
    },
    {
      icon: FiLinkedin,
      href: '#',
      label: 'LinkedIn'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-card-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Flávio Alexandre
                </h3>
                <p className="text-foreground-secondary leading-relaxed max-w-md">
                  Desenvolvedor Full Stack Junior apaixonado por criar soluções 
                  escaláveis e eficientes. Sempre em busca de novos desafios e 
                  oportunidades para crescer profissionalmente.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Conecte-se
              </h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-card border border-card-border rounded-lg flex items-center justify-center text-foreground-secondary hover:text-primary hover:border-primary transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors"
              >
                <FiArrowUp size={16} />
                Voltar ao Topo
              </motion.button>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-card-border mb-8"></div>

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
              © {currentYear} Flávio Alexandre Orrico Severiano. Todos os direitos reservados.
            </div>

            {/* Made with Love */}
            <div className="flex items-center gap-2 text-foreground-secondary text-sm">
              <span>Feito com</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiHeart className="text-red-500" size={16} />
              </motion.div>
              <span>e muita dedicação</span>
            </div>
          </motion.div>

          {/* Tech Stack Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-8 border-t border-card-border"
          >
            <p className="text-foreground-secondary text-xs">
              Desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
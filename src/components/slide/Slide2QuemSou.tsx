import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { presentationTranslations } from "../../locales/presentation";
import { fadeInUp, staggerContainer } from "../AnimationVariants";
import { FiCode, FiBookOpen } from "react-icons/fi";
import aboutme from "../../assets/aboutme.jpeg";

const Slide2QuemSou = () => {
  const { language } = useLanguage();
  const t = presentationTranslations[language].slide2;

  return (
    <div className="h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-20 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content - Photo + Info */}
          <div className="grid lg:grid-cols-5 gap-8 items-start mb-8">
            {/* Left Column - Photo */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="relative w-full h-full">
                <div className="rounded-2xl overflow-hidden border-2 border-card-border shadow-card bg-gradient-card h-full min-h-[500px]">
                  <img
                    src={aboutme}
                    alt="Flávio Alexandre"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-5">
              {/* Profile Summary */}
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FiCode className="text-2xl" />
                  Desenvolvedor de Software
                </h3>
                <div className="space-y-3 text-foreground-secondary leading-relaxed">
                  {/* Bullet 1 - Experiência P&D */}
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-lg font-bold mt-0.5">
                      •
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Trajetória de 2 anos
                      </strong>{" "}
                      focada em desenvolvimento web e projetos de Pesquisa &
                      Desenvolvimento (P&D).
                    </span>
                  </p>

                  {/* Bullet 2 - Stack */}
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-lg font-bold mt-0.5">
                      •
                    </span>
                    <span>
                      Sólida base em{" "}
                      <strong className="text-foreground">
                        Java e Spring Boot
                      </strong>{" "}
                      no back-end, criando interfaces responsivas com{" "}
                      <strong className="text-foreground">
                        React e TypeScript
                      </strong>
                      .
                    </span>
                  </p>

                  {/* Bullet 3 - Inovação (IA/Blockchain) */}
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-lg font-bold mt-0.5">
                      •
                    </span>
                    <span>
                      <strong className="text-foreground">
                        Vivência em projetos de pesquisa
                      </strong>
                      , colaborando na implementação de soluções com IA e
                      Blockchain.
                    </span>
                  </p>

                  {/* Bullet 4 - Mindset/Qualidade */}
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-lg font-bold mt-0.5">
                      •
                    </span>
                    <span>
                      Foco em{" "}
                      <strong className="text-foreground">
                        evolução contínua e boas práticas
                      </strong>
                      , priorizando qualidade de código e entrega de valor real.
                    </span>
                  </p>
                </div>
              </div>

              {/* Education Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Faculdade */}
                <div className="bg-gradient-card border border-primary/30 rounded-xl p-5 shadow-card hover:shadow-hover transition-all">
                  <div className="flex items-start gap-3 mb-2">
                    <FiBookOpen className="text-primary text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-primary font-bold text-base leading-tight">
                        Bacharelado em Tecnologia da Informação
                      </h4>
                    </div>
                  </div>
                  <p className="text-foreground text-sm font-medium mb-1">
                    Universidade Federal do Rio Grande do Norte (UFRN)
                  </p>
                  <p className="text-foreground-secondary text-xs">
                    Março 2025 – Junho 2028 • Em andamento
                  </p>
                </div>

                {/* Técnico */}
                <div className="bg-gradient-card border border-card-border rounded-xl p-5 shadow-card hover:shadow-hover transition-all">
                  <div className="flex items-start gap-3 mb-2">
                    <FiBookOpen className="text-primary text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-primary font-bold text-base leading-tight">
                        Técnico em Desenvolvimento de Sistemas
                      </h4>
                    </div>
                  </div>
                  <p className="text-foreground text-sm font-medium mb-1">
                    Senac Rio Grande do Norte
                  </p>
                  <p className="text-foreground-secondary text-xs">
                    Fevereiro 2023 – Agosto 2024 • Concluído
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide2QuemSou;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "./AnimationVariants";
import aboutme from "../assets/aboutme.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-background-secondary">
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
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image */}
                <div className="aspect-square rounded-2xl shadow-card border border-card-border overflow-hidden bg-gradient-card">
                  <img
                    className="w-full h-full object-cover"
                    src={aboutme}
                    alt="Flávio Alexandre - Desenvolvedor de Software"
                  />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/20 rounded-full"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Desenvolvedor de Software
              </h3>

              <div className="space-y-4 text-foreground-secondary leading-relaxed">
                <p>
                  Desenvolvedor de Software focado em criar soluções que
                  resolvem problemas reais.{" "}
                  <span className="text-primary font-semibold">
                    Com mais de um ano de experiência
                  </span>{" "}
                  no Laboratório de Inovação do Senac, arquitetei e desenvolvi
                  do dois sistemas em produção, impactando diretamente a
                  eficiência de{" "}
                  <span className="text-primary font-semibold">
                    centenas de usuários
                  </span>{" "}
                  na rede da instituição.
                </p>
                <p>
                  Minha especialidade é o ecossistema{" "}
                  <span className="text-primary font-semibold">Java</span> com{" "}
                  <span className="text-primary font-semibold">
                    Spring Boot
                  </span>{" "}
                  e arquitetura de{" "}
                  <span className="text-primary font-semibold">
                    Microsserviços
                  </span>
                  . Tenho um forte compromisso com a qualidade de código,
                  aplicando testes automatizados (JUnit, Mockito) e garantindo a
                  entrega contínua através de pipelines CI/CD.
                </p>
                <p>
                  Minha paixão é criar tecnologia que{" "}
                  <span className="text-primary font-semibold">
                    agrega valor real
                  </span>
                  , simplifica operações e impulsiona a inovação. Estou sempre
                  em busca de novos desafios que me permitam inovar e otimizar
                  processos, contribuindo para o avanço de projetos e negócios.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-card border border-card-border rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">
                    1+
                  </div>
                  <div className="text-xs sm:text-sm text-foreground-secondary leading-tight">
                    Ano de Experiência
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">
                    3+
                  </div>
                  <div className="text-xs sm:text-sm text-foreground-secondary leading-tight">
                    Anos de Estudo em TI
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">
                    100+
                  </div>
                  <div className="text-xs sm:text-sm text-foreground-secondary leading-tight">
                    Usuários Ativos
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary">
                    2
                  </div>
                  <div className="text-xs sm:text-sm text-foreground-secondary leading-tight">
                    Projetos em Produção
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

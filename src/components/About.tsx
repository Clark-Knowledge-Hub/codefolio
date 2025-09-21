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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image Placeholder */}
                <div className="aspect-square bg-gradient-card rounded-2xl shadow-card border border-card-border flex items-center justify-center  w-[400px] h-auto mx-auto">
                  <div className="text-6xl text-primary">
                    <img
                      className="object-contain rounded-2xl"
                      src={aboutme}
                      alt="Profile"
                    />
                  </div>
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
                Desenvolvedor Full Stack Apaixonado por Tecnologia
              </h3>

              <div className="space-y-4 text-foreground-secondary leading-relaxed">
                <p>
                  Desenvolvedor Junior com experiência em arquitetar e
                  desenvolver sistemas para mais de{" "}
                  <span className="text-primary font-semibold">
                    3000 usuários ativos
                  </span>
                  . Especializado em Java 21, Spring Boot e ReactJS, com forte
                  prática em testes automatizados (JUnit, Cypress) e pipelines
                  de CI/CD.
                </p>

                <p>
                  Trabalhei com{" "}
                  <span className="text-primary font-semibold">
                    GitHub Actions e Docker
                  </span>
                  , garantindo a confiabilidade e escalabilidade das aplicações.
                  Atuei em squads ágeis sob metodologia Scrum, desenvolvendo
                  soluções que impactam diretamente na produtividade das
                  equipes.
                </p>

                <p>
                  Minha paixão está em criar código limpo, eficiente e
                  escalável, sempre buscando as melhores práticas de
                  desenvolvimento e mantendo-me atualizado com as mais recentes
                  tecnologias do mercado.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                <div className="bg-card border border-card-border rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">3K+</div>
                  <div className="text-sm text-foreground-secondary">
                    Usuários Ativos
                  </div>
                </div>
                <div className="bg-card border border-card-border rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">85%+</div>
                  <div className="text-sm text-foreground-secondary">
                    Cobertura de Testes
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

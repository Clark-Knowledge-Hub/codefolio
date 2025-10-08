import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "./AnimationVariants";
import { FiMapPin, FiCalendar, FiCheckCircle } from "react-icons/fi";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  current?: boolean;
}

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences: ExperienceItem[] = [
    {
      title: "Desenvolvedor Junior",
      company: "Senac RN",
      location: "Natal, RN",
      period: "Agosto 2024 – Presente",
      current: true,
      description:
        "Desenvolvimento de sistemas educacionais com foco em escalabilidade e qualidade, trabalhando em squads ágeis com metodologia Scrum.",
      achievements: [
        "Arquitetei e desenvolvi sistemas para +100 usuários ativos, com replicação nacional em todas as unidades do Senac",
        "Garanti a confiabilidade das aplicações com +85% de cobertura de testes usando JUnit e Mockito",
        "Automatizei pipelines de CI/CD com GitHub Actions e Docker, reduzindo tempo de deploy em +60%",
        "Criei interfaces de front-end responsivas com ReactJS, TypeScript e Tailwind CSS",
        "Implementei APIs RESTful escaláveis em Java 21 com Spring Boot seguindo arquitetura limpa",
        "Colaborei em squads multidisciplinares utilizando metodologias ágeis (Scrum)",
      ],
    },
    {
      title: "Estagiário de TI",
      company: "Alares Internet",
      location: "Natal, RN",
      period: "Março 2024 – Presente",
      current: true,
      description:
        "Suporte técnico especializado e desenvolvimento de soluções para automatização de processos de TI em ambiente corporativo.",
      achievements: [
        "Prestei suporte técnico em software, hardware e redes para +300 colaboradores, garantindo a estabilidade de ambientes críticos",
        "Automatizei processos manuais de revisão de acesso em sistemas com scripts em Python (Pandas, PyAutoGui, OpenCV)",
        "Desenvolvo a plataforma de inventário Cosmo (Java 21, Spring, ReactJS, TypeScript) para automatizar o ciclo de vida de ativos de TI",
        "Aumentei a eficiência operacional através da implementação de soluções tecnológicas inovadoras",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experiência Profissional
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-foreground-secondary mt-6 max-w-2xl mx-auto">
              Minha jornada profissional desenvolvendo soluções que impactam
              milhares de usuários
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>

                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-2 sm:left-4 top-8 w-4 h-4 rounded-full border-4 ${
                    experience.current
                      ? "bg-primary border-primary shadow-lg shadow-primary/50"
                      : "bg-background border-primary"
                  }`}
                >
                  {experience.current && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary rounded-full opacity-20"
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, boxShadow: "var(--shadow-hover)" }}
                  className="ml-12 sm:ml-16 bg-card border border-card-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {experience.title}
                      </h3>
                      {experience.current && (
                        <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                          Atual
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-semibold text-primary mb-3">
                      {experience.company}
                    </h4>

                    <div className="flex flex-col sm:flex-row gap-4 text-foreground-secondary">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground-secondary leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                      <FiCheckCircle className="text-primary" size={20} />
                      Principais Conquistas:
                    </h5>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          variants={fadeInUp}
                          className="flex items-start gap-3 text-foreground-secondary"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

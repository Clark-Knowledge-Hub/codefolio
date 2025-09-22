import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimationVariants";
import { FiBook, FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: "Cursando" | "Concluído" | "Em andamento";
  description?: string;
  highlights?: string[];
}

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education: EducationItem[] = [
    {
      degree: "Bacharelado em Tecnologia da Informação",
      institution: "Universidade Federal do Rio Grande do Norte (UFRN)",
      period: "Março 2025 – Junho 2028",
      status: "Em andamento",
      description:
        "Formação superior que constrói uma base robusta nos fundamentos da computação. O curso aprofunda em Algoritmos e Estruturas de Dados para a criação de soluções eficientes, Redes de Computadores para entender a comunicação de sistemas, Banco de Dados para modelagem e gestão da informação, e Matemática Aplicada como alicerce para o raciocínio lógico e a resolução de problemas complexos.",
      highlights: [
        "Algoritmos e Estruturas de Dados",
        "Engenharia de Software",
        "Banco de Dados e Modelagem de Dados",
        "Redes de Computadores",
        "Matemática Discreta e Cálculo",
        "Arquitetura de Sistemas",
      ],
    },
    {
      degree: "Técnico em Desenvolvimento de Sistemas",
      institution: "Senac Rio Grande do Norte (Senac RN)",
      period: "Fevereiro 2023 – Agosto 2024",
      status: "Concluído",
      description:
        "Formação técnica completa em desenvolvimento de sistemas, cobrindo desde programação básica até deployment de aplicações.",
      highlights: [
        "Desenvolvimento Web Full Stack",
        "Programação Orientada a Objetos",
        "Banco de Dados Relacionais",
        "Metodologias Ágeis",
      ],
    },
    {
      degree: "Técnico Integrado em Mineração",
      institution: "Instituto Federal do Rio Grande do Norte (IFRN)",
      period: "Março 2021 – Dezembro 2023",
      status: "Concluído",
      description:
        "Formação técnica integrada ao ensino médio, desenvolvendo bases sólidas em matemática, física e pensamento analítico.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Cursando":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Em andamento":
        return "bg-primary/10 text-primary border-primary/20";
      case "Concluído":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      default:
        return "bg-foreground-secondary/10 text-foreground-secondary border-foreground-secondary/20";
    }
  };

  return (
    <section id="education" className="py-20 bg-background-secondary">
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
              Formação Acadêmica
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-foreground-secondary mt-6 max-w-2xl mx-auto">
              Minha jornada educacional construindo as bases sólidas para uma
              carreira em tecnologia
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "var(--shadow-hover)" }}
                className="bg-card border border-card-border rounded-2xl p-8 shadow-card transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <FiBook className="text-primary-foreground text-2xl" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {item.degree}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary mb-3">
                          {item.institution}
                        </h4>
                      </div>

                      <span
                        className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-col sm:flex-row gap-4 text-foreground-secondary mb-4">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        <span>Natal, RN</span>
                      </div>
                    </div>

                    {/* Description */}
                    {item.description && (
                      <p className="text-foreground-secondary leading-relaxed mb-6">
                        {item.description}
                      </p>
                    )}

                    {/* Highlights */}
                    {item.highlights && (
                      <div>
                        <h5 className="text-foreground font-semibold mb-3 flex items-center gap-2">
                          <FiAward className="text-primary" size={18} />
                          Principais Disciplinas:
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.highlights.map((highlight, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-foreground-secondary text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

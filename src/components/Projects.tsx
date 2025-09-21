import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from './AnimationVariants';
import { FiGithub, FiExternalLink, FiCalendar, FiUsers } from 'react-icons/fi';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  period: string;
  users?: string;
  github?: string;
  demo?: string;
  highlights: string[];
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects: Project[] = [
    {
      title: 'COSMO',
      subtitle: 'Gerenciamento de Ativos de TI',
      description: 'Plataforma centralizada para cadastrar, rastrear e gerenciar o ciclo de vida de ativos de TI na Alares Internet. Desenvolvida com API RESTful em Java 21 e Spring Boot, e frontend com ReactJS, TypeScript e Tailwind CSS.',
      technologies: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      period: 'Julho 2025 – Atual',
      users: '3000+',
      github: '#',
      demo: '#',
      highlights: [
        'Arquitetura escalável para +3000 usuários',
        'API RESTful completa com documentação',
        'Interface responsiva e intuitiva',
        'Integração com sistemas legados'
      ]
    },
    {
      title: 'CASE',
      subtitle: 'Controle de Atividades Educacionais',
      description: 'Solução para digitalizar e otimizar o controle de atividades extraclasse no Senac RN, substituindo processos manuais. Desenvolvido com ReactJS e ExpressJS, resultando em significativo ganho de produtividade para a equipe.',
      technologies: ['ReactJS', 'ExpressJS', 'Node.js', 'JavaScript', 'CSS3'],
      period: 'Janeiro 2024 – Agosto 2024',
      github: '#',
      highlights: [
        'Digitalização de processos manuais',
        'Interface intuitiva para professores',
        'Redução de 70% no tempo de controle',
        'Sistema de notificações automáticas'
      ]
    }
  ];


  return (
    <section id="projects" className="py-20 bg-background-secondary">
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
              Projetos em Destaque
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-foreground-secondary mt-6 max-w-2xl mx-auto">
              Soluções completas que desenvolvi, desde a concepção até a implementação
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: 'var(--shadow-hover)' }}
                className="bg-card border border-card-border rounded-2xl overflow-hidden group transition-all duration-300"
              >
                {/* Project Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          className="text-foreground-secondary hover:text-primary transition-colors"
                        >
                          <FiGithub size={24} />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          whileHover={{ scale: 1.1 }}
                          className="text-foreground-secondary hover:text-primary transition-colors"
                        >
                          <FiExternalLink size={24} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center gap-4 text-sm text-foreground-secondary mb-6">
                    <div className="flex items-center gap-1">
                      <FiCalendar size={16} />
                      {project.period}
                    </div>
                    {project.users && (
                      <div className="flex items-center gap-1">
                        <FiUsers size={16} />
                        {project.users} usuários
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-foreground-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-foreground font-semibold mb-3">Principais Conquistas:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground-secondary text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects CTA */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <FiGithub size={20} />
              Ver Mais Projetos no GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
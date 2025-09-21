import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from './AnimationVariants';
import { 
  SiSpringboot, SiReact, SiTypescript, SiJavascript,
  SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress,
  SiPostgresql, SiGit, SiGithubactions, SiDocker,
  SiNginx, SiJest, SiCypress
} from 'react-icons/si';
import { FaJava, FaMicrosoft } from 'react-icons/fa';
import { TbTestPipe } from 'react-icons/tb';

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  category: 'Backend' | 'Frontend' | 'Ferramentas';
}

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills: Skill[] = [
    // Backend
    { name: 'Java', icon: FaJava, category: 'Backend' },
    { name: 'Spring Boot', icon: SiSpringboot, category: 'Backend' },
    { name: 'NodeJS', icon: SiNodedotjs, category: 'Backend' },
    { name: 'ExpressJS', icon: SiExpress, category: 'Backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Backend' },
    
    // Frontend
    { name: 'ReactJS', icon: SiReact, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
    { name: 'HTML5', icon: SiHtml5, category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
    
    // Ferramentas
    { name: 'Git', icon: SiGit, category: 'Ferramentas' },
    { name: 'GitHub Actions', icon: SiGithubactions, category: 'Ferramentas' },
    { name: 'Docker', icon: SiDocker, category: 'Ferramentas' },
    { name: 'Azure', icon: FaMicrosoft, category: 'Ferramentas' },
    { name: 'Nginx', icon: SiNginx, category: 'Ferramentas' },
    { name: 'JUnit/Mockito', icon: TbTestPipe, category: 'Ferramentas' },
    { name: 'Cypress', icon: SiCypress, category: 'Ferramentas' },
    { name: 'Jest', icon: SiJest, category: 'Ferramentas' },
  ];

  const filters = ['Todos', 'Backend', 'Frontend', 'Ferramentas'];

  const filteredSkills = activeFilter === 'Todos' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);


  return (
    <section id="skills" className="py-20 bg-background">
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
              Minhas Habilidades
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-foreground-secondary mt-6 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas e escaláveis
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full border font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground border-primary shadow-hover'
                    : 'bg-transparent text-foreground-secondary border-card-border hover:border-primary hover:text-primary'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: 'var(--shadow-hover)',
                  borderColor: 'hsl(var(--primary))'
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-card border border-card-border rounded-xl p-6 text-center group cursor-pointer transition-all hover:border-primary"
              >
                <div className="flex flex-col items-center space-y-4">
                  <skill.icon className="text-5xl text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-foreground font-medium text-sm md:text-base">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 bg-gradient-card border border-card-border rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Backend</h3>
                <p className="text-foreground-secondary">
                  APIs RESTful escaláveis com Java, Spring Boot e arquitetura limpa
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Frontend</h3>
                <p className="text-foreground-secondary">
                  Interfaces modernas e responsivas com React, TypeScript e Tailwind
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">DevOps</h3>
                <p className="text-foreground-secondary">
                  CI/CD, containerização e deploy automatizado em nuvem
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
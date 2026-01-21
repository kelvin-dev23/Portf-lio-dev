import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShoppingCart, Calendar, CheckCircle2, Code2 } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  icon: React.ElementType;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Desenvolvedor Web',
    company: 'Projeto Pessola',
    period: 'Set 2025 - Atual',
    type: 'Autônomo',
    description: 'Desenvolvimento de websites e aplicações web modernas.',
    responsibilities: [
      'Desenvolvimento de sites e aplicações web responsivas com React, TypeScript e Tailwind CSS',
      'Implementação de soluções personalizadas focadas em performance e UX'
    ],
    skills: ['Html','CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS','UI/UX',],
    icon: Code2
  },
  {
    id: 2,
    title: 'Ajd. Carga e descarga',
    company: 'Ind. Alimentos',
    period: '2025 – 2026',
    type: 'CLT',
    description: 'Atuação no apoio às operações logísticas, realizando a movimentação, organização e conferência de mercadorias, garantindo agilidade, segurança e preservação dos produtos durante os processos de carga e descarga.',
    responsibilities: [
      'Auxílio na carga e descarga de mercadorias em caminhões e depósitos',
      'Organização e separação de produtos conforme pedidos',
      'Conferência básica de volumes e mercadorias',
      'Trabalho em equipe para garantir eficiência nas operações'
    ],
    skills: ['Organização', 'Responsabilidade', 'Disciplina', 'Trabalho em equipe'],
    icon: Briefcase
  },
  {
    id: 3,
    title: 'Recepcionista',
    company: 'Hotel',
    period: '2020 - 2020',
    type: 'CLT',
    description: 'Atuação no atendimento ao público, realizando recepção, orientação de clientes e suporte administrativo, garantindo organização, agilidade e boa comunicação no ambiente de trabalho',
    responsibilities: [
      'Atendimento presencial e telefônico',
      'Recepção e encaminhamento de clientes e visitantes',
      'Organização da recepção e controle de agendas',
      'Apoio em atividades administrativas básicas',
      'Registro e controle de informações',
    ],
    skills: ['Comunicação clara e cordial', 'Pontualidade e responsabilidade', 'Atendimento ao cliente', 'Organização'],
    icon: ShoppingCart
  }
];

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? -80 : 80,
      y: 30
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.4
      }
    })
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.04,
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    })
  };

  const summaryVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={headerVariants}
            className="text-4xl md:text-5xl font-bold text-[#000000] dark:text-white mb-4"
          >
            Experiência Profissional
          </motion.h2>
          <motion.div 
            variants={headerVariants}
            className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-4"
          />
          <motion.p 
            variants={headerVariants}
            className="text-[#535353] dark:text-[#a5a5a5] max-w-2xl mx-auto"
          >
            Minha trajetória profissional, até o desenvolvimento web
          </motion.p>
        </motion.div>

        <div className="relative">
      
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={timelineVariants}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-violet-500 to-purple-500 origin-top"
          />

        
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={isEven}
                  variants={cardVariants}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <motion.div
                      onHoverStart={() => setHoveredCard(exp.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-[#a5a5a5]/10 dark:bg-[#292929] rounded-2xl p-6 shadow-lg border border-[#a5a5a5]/30 dark:border-[#535353] transition-all duration-300 hover:shadow-xl hover:border-purple-500/40 dark:hover:border-purple-400/40"
                      style={{
                        boxShadow: hoveredCard === exp.id 
                          ? '0 20px 40px rgba(124, 58, 237, 0.2)' 
                          : undefined
                      }}
                    >
                    
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={iconVariants}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg blur-sm opacity-50" />
                          <div className="relative bg-gradient-to-r from-purple-600 to-violet-600 p-3 rounded-lg">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#000000] dark:text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-[#7c7c7c] dark:text-[#a5a5a5]">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/40">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                    
                      <p className="text-[#535353] dark:text-[#a5a5a5] mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-[#000000] dark:text-white mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          Principais Responsabilidades:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <motion.li
                              key={idx}
                              custom={idx}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={listItemVariants}
                              className="text-sm text-[#535353] dark:text-[#a5a5a5] pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full"
                            >
                              {resp}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#a5a5a5]/30 dark:border-[#535353]">
                        {exp.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            custom={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={skillVariants}
                            className="px-3 py-1 bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium border border-purple-500/30"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ 
                      scale: 1, 
                      rotate: 0,
                      transition: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2
                      }
                    }}
                    viewport={{ once: true }}
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full items-center justify-center shadow-lg border-4 border-white dark:border-[#0a0a0a] z-10"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={summaryVariants}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-600/10 to-violet-600/10 dark:from-purple-500/20 dark:to-violet-500/20 rounded-2xl p-6 border border-purple-500/30">
            <p className="text-[#535353] dark:text-[#a5a5a5] text-sm mb-2">
              Total de experiência profissional
            </p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400"
            >
              3+
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
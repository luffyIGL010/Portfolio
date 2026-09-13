import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 relative bg-dark-card/40 dark:bg-dark-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mb-4"
          >
            Tech Stack & <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mb-6"
          />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card rounded-2xl p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-dark-border">
                <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-heading">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/5 border border-dark-border text-foreground hover:bg-primary-500/20 hover:text-primary-600 dark:hover:text-primary-300 hover:border-primary-500/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Skills;

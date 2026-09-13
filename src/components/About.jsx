import React from 'react';
import { motion } from 'framer-motion';
import { about } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose max-w-none dark:prose-invert">
              {about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-foreground text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {about.stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-xl text-center">
                  <div className="text-primary-400 font-semibold mb-1 text-sm">{stat.label}</div>
                  <div className="text-foreground text-sm">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {about.highlights.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <div className="p-3 rounded-lg bg-primary-500/10 border border-primary-500/20">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-heading mb-2">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

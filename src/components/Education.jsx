import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Education & <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mb-6"
          />
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:pl-0">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              <span className="absolute -left-12 md:-left-16 flex items-center justify-center w-8 h-8 rounded-full bg-dark-bg border border-primary-500 ring-4 ring-dark-bg text-primary-400">
                <GraduationCap className="w-4 h-4" />
              </span>
              
              <div className="glass-card p-6 md:p-8 rounded-2xl relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <GraduationCap className="w-24 h-24" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-primary-400 mb-4">{edu.major}</h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    {edu.institution}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

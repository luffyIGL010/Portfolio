import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">
      {`${words[index].substring(0, subIndex)}${subIndex === words[index].length ? '' : '|'}`}
    </span>
  );
};

const Hero = () => {
  const roles = [
    "AI & ML Engineer",
    "Data Scientist",
    "Python Developer",
    "AI Application Builder"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-6">
              AI & Machine Learning Engineer
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm <span className="text-gradient">Saurav Rauthan</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 h-10">
              I am a <TypeWriter words={roles} />
            </h2>
            
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I build intelligent applications, machine learning solutions, and data-driven products that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all flex items-center gap-2 group">
                Explore My Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium transition-all">
                Get In Touch
              </a>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-primary-500/50 hover:bg-primary-500/10 text-primary-400 font-medium transition-all flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 hover:-translate-y-1 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 hover:-translate-y-1 transition-all font-bold text-xl flex items-center justify-center w-6 h-6">
                L
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-red-400 hover:-translate-y-1 transition-all">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full sm:rounded-3xl bg-gradient-to-tr from-primary-500 to-cyan-400 opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-2 rounded-full sm:rounded-3xl border-2 border-primary-500/30 overflow-hidden glass z-10 p-2">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover rounded-full sm:rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 glass p-3 rounded-xl z-20 shadow-lg border border-white/10 text-primary-400"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="text-sm font-bold">AI</div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-8 glass p-3 rounded-xl z-20 shadow-lg border border-white/10 text-cyan-400"
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="text-sm font-bold">ML</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 right-10 glass p-3 rounded-xl z-20 shadow-lg border border-white/10 text-blue-400"
                animate={{ y: [-5, 15, -5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <div className="text-sm font-bold">Python</div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

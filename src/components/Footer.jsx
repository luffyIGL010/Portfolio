import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 p-3 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        <div className="text-2xl font-bold text-gradient mb-6 tracking-wider">
          SR
        </div>

        <p className="text-gray-400 text-center max-w-md mb-8">
          Built with passion for Artificial Intelligence, Machine Learning, and Technology.
        </p>

        <div className="flex gap-6 mb-8">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors font-bold flex items-center justify-center w-5 h-5 text-xl">
            L
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <p className="text-gray-500 text-sm text-center">
          &copy; {personalInfo.year} {personalInfo.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

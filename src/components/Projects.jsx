import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Info, Code, Play } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-20">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card bg-dark-bg rounded-2xl shadow-2xl z-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-64 sm:h-80 relative overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent z-10"></div>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-6 left-6 z-20">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary-500/20 border border-primary-500/50 text-primary-300 text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h4 className="text-xl font-semibold text-heading mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary-400" />
                  Project Overview
                </h4>
                <p className="text-foreground leading-relaxed">{project.description}</p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-heading mb-2">Problem Statement</h4>
                <p className="text-muted leading-relaxed">{project.details.problem}</p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-heading mb-2">Solution</h4>
                <p className="text-muted leading-relaxed">{project.details.solution}</p>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h4 className="text-xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary-400" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-foreground/5 border border-dark-border text-foreground text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-xl font-semibold text-heading mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-primary-400" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.details.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted text-sm">
                      <span className="text-primary-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-dark-border hover:bg-foreground/5 text-heading font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Artificial Intelligence', 'Machine Learning', 'Data Science', 'Web Application'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter) || filter.includes(p.category) || (filter === 'Artificial Intelligence' && p.category === 'AI / Web Application'));

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted mb-8 max-w-2xl mx-auto"
          >
            Selected projects where I turn ideas into working applications.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20' 
                  : 'bg-foreground/5 text-muted hover:text-heading hover:bg-foreground/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-primary-300 bg-primary-500/10 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-medium text-muted bg-foreground/5 px-2 py-1 rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                    <span className="text-sm font-medium text-heading flex items-center gap-1 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                      View Details
                    </span>
                    <div className="flex gap-3">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-foreground/5 text-muted hover:text-heading hover:bg-foreground/10 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

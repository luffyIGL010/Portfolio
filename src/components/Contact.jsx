import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code2, Send, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl max-w-4xl mx-auto border-primary-500/30 bg-gradient-to-b from-primary-900/10 to-transparent"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              If you are looking for someone passionate about Artificial Intelligence, Machine Learning, Data Science, and Python development, let's connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a 
                href="#contact-form" 
                className="px-8 py-4 rounded-xl border-2 border-gray-600 hover:border-gray-400 text-white font-semibold transition-all w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        <div id="contact-form" className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-8"
          >
            Have a project, opportunity, or idea? Feel free to reach out.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-6 sm:p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Opportunity / Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-white/10 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  status.submitted 
                    ? 'bg-green-600 text-white' 
                    : 'bg-primary-600 hover:bg-primary-700 text-white disabled:opacity-70'
                }`}
              >
                {status.submitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : status.submitted ? (
                  "Message Sent Successfully!"
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl hover:border-primary-500/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-500/10 text-primary-400 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="block">
              <div className="glass-card p-6 rounded-2xl hover:border-primary-500/30 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-white/5 text-white rounded-lg group-hover:bg-white/10 transition-colors">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">GitHub</h3>
                    <p className="text-gray-400 text-sm">Explore my projects, experiments, and code repositories.</p>
                  </div>
                </div>
                <div className="text-primary-400 text-sm font-medium mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Visit GitHub <span className="text-lg">→</span>
                </div>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="block">
              <div className="glass-card p-6 rounded-2xl hover:border-blue-500/30 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                    <p className="text-gray-400 text-sm">Connect with me professionally and explore my career journey.</p>
                  </div>
                </div>
                <div className="text-blue-400 text-sm font-medium mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Connect on LinkedIn <span className="text-lg">→</span>
                </div>
              </div>
            </a>

            <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="block">
              <div className="glass-card p-6 rounded-2xl hover:border-orange-500/30 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-orange-500/10 text-orange-400 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">LeetCode</h3>
                    <p className="text-gray-400 text-sm">Practicing Data Structures and Algorithms to strengthen problem-solving skills.</p>
                  </div>
                </div>
                <div className="text-orange-400 text-sm font-medium mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                  View LeetCode Profile <span className="text-lg">→</span>
                </div>
              </div>
            </a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

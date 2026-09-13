import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { downloadResume } from '../utils/downloadResume';

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative bg-dark-card/40 dark:bg-dark-card/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-heading mb-4"
          >
            View <span className="text-gradient">Resume</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mb-6"
          />
          <p className="text-muted max-w-2xl mx-auto mb-8">
            Recruiters can read my resume here on the portfolio, or download a PDF copy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={downloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-dark-border hover:border-muted text-foreground hover:text-heading font-medium transition-all"
            >
              <FileText className="w-4 h-4" />
              Open in new tab
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden border border-dark-border"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-border text-muted text-sm">
            <FileText className="w-4 h-4 text-primary-400" />
            Saurav Rauthan — Resume
          </div>
          <object
            data={`${personalInfo.resumeUrl}#view=FitH`}
            type="application/pdf"
            className="w-full h-[85vh] bg-white"
          >
            <p className="p-8 text-center text-muted">
              The resume preview is not supported in this browser.{' '}
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">
                Open the resume
              </a>
              .
            </p>
          </object>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

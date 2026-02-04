import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl font-bold text-offwhite">
            <span className="text-accent-cyan font-mono text-xl mr-2">02.</span>
            Some Things I've Built
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-[200px]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-lg flex flex-col h-full group transition-all hover:border-accent-cyan/30 relative"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder size={40} className="text-accent-cyan" />
                <div className="flex gap-4 z-10">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-offwhite transition-colors" aria-label="View Source Code">
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-offwhite transition-colors" aria-label="View Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-offwhite mb-3 group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>

              <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-accent-cyan/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
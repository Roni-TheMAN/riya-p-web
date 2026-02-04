import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="font-mono text-accent-cyan text-sm">Hi, my name is</span>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-offwhite mb-4 tracking-tight">
            Riya Jingar.
          </h1>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-secondary mb-8 tracking-tight opacity-80">
            Building logic for the web.
          </h2>
          
          <p className="max-w-xl text-secondary text-lg leading-relaxed mb-10">
            I'm a <span className="text-accent-cyan font-medium">Computer Science student</span> at Indiana University South Bend, specializing in building scalable, human-centered software. From complex backend algorithms to interactive front-end experiences, I build things that last.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 bg-transparent border border-accent-cyan text-accent-cyan px-8 py-4 rounded font-mono text-sm hover:bg-accent-cyan/10 transition-all"
            >
              Check out my work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com/riyajingar" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent-cyan hover:-translate-y-1 transition-all" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/riyajingar/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent-cyan hover:-translate-y-1 transition-all" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rjingar@iu.edu" className="text-secondary hover:text-accent-cyan hover:-translate-y-1 transition-all" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
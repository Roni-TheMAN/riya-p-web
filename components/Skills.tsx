import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl font-bold text-offwhite">
            <span className="text-accent-cyan font-mono text-xl mr-2">03.</span>
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-[200px]" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <div key={index}>
              <h3 className="font-display text-lg font-bold text-offwhite mb-6 border-b border-white/10 pb-2 inline-block">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-secondary font-mono text-sm group">
                    <span className="text-accent-cyan group-hover:translate-x-1 transition-transform">▹</span>
                    <span className="group-hover:text-offwhite transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
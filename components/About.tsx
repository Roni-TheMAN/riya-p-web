import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl font-bold text-offwhite">
            <span className="text-accent-cyan font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-[200px]" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-secondary leading-relaxed space-y-4">
            <p>
              Hello! I'm Riya, a Computer Science junior at <span className="text-accent-cyan">Indiana University South Bend</span>. I enjoy navigating the intersection of complex backend logic and intuitive user experiences.
            </p>
            <p>
              My journey involves a strong foundation in <span className="text-offwhite font-mono text-sm">Data Structures</span> and <span className="text-offwhite font-mono text-sm">Algorithms</span>, applied through projects like movie recommendation engines and custom blogging platforms.
            </p>
            <p>
              When I'm not coding, I'm tutoring peers in Operating Systems and Math, or serving in the Student Government Association to advocate for my campus community.
            </p>
          </div>
          
          <div className="relative group">
             <div className="absolute inset-0 bg-accent-cyan rounded translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
             <div className="relative z-10 bg-[#112240] p-6 rounded border border-white/5 h-full flex flex-col justify-center hover:bg-[#172a4f] transition-colors duration-300">
                <p className="font-mono text-accent-cyan text-sm mb-2">Current Status</p>
                <p className="text-offwhite font-bold text-lg mb-4">CS Student @ IUSB</p>
                <div className="h-[1px] bg-white/10 w-full mb-4" />
                <p className="text-secondary text-sm">Expected Graduation:</p>
                <p className="text-offwhite">May 2026</p>
             </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-bold text-offwhite mb-6">Experience</h3>
          <div className="space-y-8 border-l border-white/10 pl-6">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[29px] top-2 w-3 h-3 rounded-full bg-accent-cyan border-4 border-midnight" />
                <h4 className="text-offwhite font-bold text-lg">{exp.role}</h4>
                <p className="text-accent-cyan font-mono text-sm mb-2">{exp.company} | {exp.period}</p>
                <p className="text-secondary text-sm max-w-xl">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
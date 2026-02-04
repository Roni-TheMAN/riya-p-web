import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-accent-cyan font-mono mb-4">04. What's Next?</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-offwhite mb-6">
          Get In Touch
        </h2>
        <p className="text-secondary text-lg leading-relaxed mb-10">
          I'm currently looking for new opportunities to apply my skills in Computer Science. Whether you have a question about my projects or just want to say hi, my inbox is always open.
        </p>
        
        <a 
          href="mailto:rjingar@iu.edu"
          className="inline-flex items-center gap-2 border border-accent-cyan text-accent-cyan px-8 py-4 rounded font-mono text-sm hover:bg-accent-cyan/10 transition-colors"
        >
          <Mail size={18} />
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
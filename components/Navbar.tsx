import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { RESUME_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl tracking-tight text-offwhite hover:text-accent-cyan transition-colors">
          Riya<span className="text-accent-cyan">.</span>dev
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-secondary hover:text-accent-cyan transition-colors font-mono"
            >
              <span className="text-accent-cyan opacity-50 mr-1">0{navLinks.indexOf(link) + 1}.</span>
              {link.name}
            </a>
          ))}
          <a 
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-accent-cyan/30 text-accent-cyan text-sm font-mono rounded hover:bg-accent-cyan/10 transition-all"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-offwhite"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-midnight border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg text-secondary hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent-cyan pt-4 border-t border-white/5"
          >
            <FileText size={16} />
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
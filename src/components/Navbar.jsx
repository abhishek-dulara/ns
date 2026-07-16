import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SERVICES', id: 'service' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'RESEARCH', id: 'research' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleScroll = (id) => {
    setIsOpen(false); // Close menu after clicking
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000000]/80 backdrop-blur-sm z-50 py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Brand Name and Title */}
        <div className="flex flex-col gap-1">
          <button onClick={() => handleScroll('home')} className="text-white text-2xl font-bold tracking-tight text-left">
            Nadee Senanayake
          </button>
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            <span className="text-[9px] text-[#D4AF37] uppercase tracking-[0.2em] font-medium">
              DIGITAL BUSINESS STRATEGY
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="group text-[#A0A0A0] hover:text-[#D4AF37] text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative"
            >
              {link.name}
              {/* Yellow Underline hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-50">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#000000] border-t border-[#333] flex flex-col items-center py-8 space-y-6 shadow-xl transition-all duration-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-[#A0A0A0] hover:text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
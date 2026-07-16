import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Calendar, Briefcase } from 'lucide-react';

const Hero = () => {
  
  const logos = [
    'Asset 1.png', 'Asset 2.png', 'Asset 3.png', 'Asset 4.png',
    'Asset 5.png', 'Asset 6.png', 'Asset 7.png', 'KOS KOLE LOGO.png',
    'royal.png', 'sdti.png'
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#000000] text-white pt-32 pb-20 overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-contain bg-right bg-no-repeat grayscale-[20%] opacity-80"
        style={{ backgroundImage: "url('/assets/bg.webp')" }}
      ></div>
      
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent/20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-between flex-grow">
        
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 text-[#D4AF37]">
            <Feather size={16} />
            <span className="uppercase text-[10px] tracking-[0.2em] font-bold">
              Where Consumer Intelligence Meets <br/> Digital Business Strategy
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Transforming Digital Conversations into Business Growth
          </h1>
          
          <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            I help businesses uncover consumer insights, strengthen their brands, and develop research driven digital strategies that combine community intelligence, consumer behavior research, and data-driven marketing to achieve measurable results.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#b8962d] transition-all">
              <Calendar size={16} />
              Book a Consultation
            </a>
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 border border-white text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all">
              <Briefcase size={16} />
              Explore My Work
            </a>
          </div>

          <div className="mt-8 border-l-2 border-[#D4AF37] pl-4">
            <img 
              src="/assets/signature.png" 
              alt="Nadee Senanayake Signature" 
              className="h-16 w-auto mb-2"
              style={{ filter: "brightness(0) saturate(100%) invert(67%) sepia(26%) saturate(1469%) hue-rotate(17deg) brightness(91%) contrast(85%)" }}
            />
            
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold mb-3">
              Digital Business Strategist
            </p>
            <div className="text-[#A0A0A0] text-[11px] leading-relaxed">
              Brand Strategy | Consumer Intelligence | Community Strategy <br />
              Digital Marketing | Market Research
            </div>
          </div>
        </div>

        {/* Trusted By Section - Updated */}
        <div className="mt-16 w-full flex flex-col items-center">
          
          {/* New Divider Layout */}
          <div className="w-full flex items-center gap-6 mb-8">
            <div className="flex-grow h-[1px] bg-[#A0A0A0]"></div>
            <span className="text-[#A0A0A0] text-[10px] uppercase tracking-[0.3em] font-semibold whitespace-nowrap">
              Professional Experience Across Leading Organizations
            </span>
            <div className="flex-grow h-[1px] bg-[#A0A0A0]"></div>
          </div>
          
          {/* Infinite Marquee Loop */}
          <div className="w-full overflow-hidden opacity-60">
            <motion.div 
              className="flex gap-16 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={`/assets/${logo}`}
                  alt="Brand Logo"
                  className="h-10 w-auto object-contain filter brightness-0 invert" 
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
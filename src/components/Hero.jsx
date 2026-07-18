import React from 'react';
import { Feather, Calendar, Briefcase } from 'lucide-react';

const Hero = () => {
  
  // Updated professional experience data structure
  const experiences = [
    { logo: 'Asset 1.png', periods: ['Aug 2022 - June 2024', 'June 2026 - Present'] }, // Lyceum Education
    { logo: 'royal.png', periods: ['Sep 2024 - Present'] },    // Royal Serandib
    { logo: 'uniplan.png', periods: ['Aug 2025 - Mar 2026'] }, // Uniplan Education
    { logo: 'sdti.png', periods: ['June 2026 - Sep 2026'] },   // SDTI Campus
    { logo: 'abans.png', periods: ['2025 - 2026'] },           // Abans
    { logo: 'uber.png', periods: ['2025 - 2026'] },            // Uber
    { logo: 'lion.png', periods: ['2025 - 2026'] },            // Lion Brewery
    { logo: 'eval.png', periods: ['2025 - 2026'] },            // Evaluation Auto
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
        
        {/* Hero Text Content */}
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

        {/* Professional Experience Section */}
        <div className="mt-16 w-full">
          
          <div className="w-full flex items-center gap-6 mb-8">
            <div className="flex-grow h-[1px] bg-[#A0A0A0]"></div>
            <span className="text-[#A0A0A0] text-[10px] uppercase tracking-[0.3em] font-semibold whitespace-nowrap">
              Professional Experience
            </span>
            <div className="flex-grow h-[1px] bg-[#A0A0A0]"></div>
          </div>
          
          {/* Logo Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={`/assets/${exp.logo}`}
                  alt="Brand Logo"
                  className="h-10 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300" 
                />
                {/* Render multiple periods as separate lines */}
                <div className="mt-3 flex flex-col gap-1">
                  {exp.periods.map((p, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-wider text-[#A0A0A0] font-medium leading-tight">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
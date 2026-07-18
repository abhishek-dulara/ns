import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// Importing components from the placeholder file
import { Service, Experience, Projects, Research, Contact } from './components/PlaceholderSections';

function App() {
  return (
    <div className="bg-[#000000] text-[#FFFFFF] min-h-screen relative antialiased selection:bg-[#505050] selection:text-[#FFFFFF]">
      {/* Navigation Layer */}
      <Navbar />
      
      {/* Scrolling Content Layout Sections */}
      <main>
        <Hero />
        <About />
        <Service />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>

      {/* Modern Structural Footer */}
      <footer className="py-8 bg-[#000000] border-t border-[#505050] text-center text-xs text-[#A0A0A0] tracking-widest uppercase">
        © {new Date().getFullYear()} Nadee Senanayake. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
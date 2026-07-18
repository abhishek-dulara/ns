import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

/**
 * SectionWrapper Component
 * A layout wrapper to ensure consistent padding, spacing, and styling 
 * for all website sections.
 */
const SectionWrapper = ({ id, title, children }) => (
  <section id={id} className="py-24 bg-[#000000] px-6 lg:px-12 xl:px-24 border-t border-[#505050]">
    <div className="max-w-5xl mx-auto w-full space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
        {/* Title column */}
        <div className="lg:col-span-4">
          <h3 className="text-white text-2xl font-bold uppercase tracking-wider">{title}</h3>
        </div>
        {/* Content column */}
        <div className="lg:col-span-8 w-full text-[#A0A0A0]">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export const Service = () => (
  <SectionWrapper id="service" title="Services">
    <div className="grid grid-cols-1 gap-6">
      <div className="p-6 border border-[#505050] hover:border-[#A0A0A0] transition-colors duration-300">
        <h4 className="text-white font-semibold text-lg mb-2">Consumer Insight Consulting</h4>
        <p className="text-sm">Comprehensive digital qualitative audit frameworks translating audience interactions into business performance indicators.</p>
      </div>
      <div className="p-6 border border-[#505050] hover:border-[#A0A0A0] transition-colors duration-300">
        <h4 className="text-white font-semibold text-lg mb-2">Digital Business Strategy Architecture</h4>
        <p className="text-sm">Building cohesive brand positioning pathways leveraging organic audience touchpoints and modern digital channels.</p>
      </div>
    </div>
  </SectionWrapper>
);

export const Experience = () => (
  <SectionWrapper id="experience" title="Experience">
    <div className="space-y-8">
      {/* Experience Item 1 */}
      <div className="relative pl-6 border-l border-[#505050]">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#FFFFFF]">Present</span>
        <h4 className="text-white font-bold text-lg mt-1">Digital Community & Brand Strategist</h4>
        <p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-2">Consulting Engagements</p>
        <p className="text-sm">Directing cross-functional research execution strategies linking brand sentiment metrics to corporate business targets.</p>
      </div>
      {/* Experience Item 2 */}
      <div className="relative pl-6 border-l border-[#505050]">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#A0A0A0]">Prior Frameworks</span>
        <h4 className="text-white font-bold text-lg mt-1">Digital Strategy & Consumer Research Partner</h4>
        <p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-2">Consumer Focused Sectors & Education</p>
        <p className="text-sm">Managed multi-channel online reputation infrastructure setups, handling tracking telemetry across community deployments.</p>
      </div>
    </div>
  </SectionWrapper>
);

export const Projects = () => (
  <SectionWrapper id="projects" title="Projects">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="group border border-[#505050] p-6 flex flex-col justify-between hover:bg-[#505050] transition-all duration-300">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#A0A0A0]">Strategy Framework</span>
          <h4 className="text-white font-bold text-xl mt-2 mb-4">Sentiment Architecture Realignment</h4>
        </div>
        <p className="text-sm text-[#A0A0A0] group-hover:text-white transition-colors">Mapping unstructured conversational telemetry to improve customer retention rates by 22%.</p>
      </div>
      <div className="group border border-[#505050] p-6 flex flex-col justify-between hover:bg-[#505050] transition-all duration-300">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#A0A0A0]">Research Deployment</span>
          <h4 className="text-white font-bold text-xl mt-2 mb-4">Academic & Enterprise Strategy Engine</h4>
        </div>
        <p className="text-sm text-[#A0A0A0] group-hover:text-white transition-colors">Translating qualitative community behavioral models into practical training models for modern digital teams.</p>
      </div>
    </div>
  </SectionWrapper>
);

export const Research = () => (
  <SectionWrapper id="research" title="Research & Publications">
    <div className="space-y-6">
      <div className="p-6 border border-[#505050]">
        <span className="text-xs uppercase tracking-widest bg-[#505050] text-[#FFFFFF] px-2 py-1 inline-block mb-3">MSc & PhD Tracks</span>
        <h4 className="text-white font-bold text-lg mb-2">Emerging Digital Ecosystems & Conversational Analytics Paradigms</h4>
        <p className="text-sm leading-relaxed text-[#A0A0A0]">
          Ongoing investigation looking at the long-term impacts of micro-interactions within structured online communities on consumer decision-making.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

/**
 * Contact Component
 * Handles the user inquiry form using Formspree. 
 * Includes conditional rendering to show a success message without page redirection.
 */
export const Contact = () => {
  const [state, handleSubmit] = useForm("xqerqkpj");

  // If the form submission is successful, display a nice confirmation UI
  if (state.succeeded) {
    return (
      <SectionWrapper id="contact" title="Contact">
        <div className="text-center py-12">
          <h4 className="text-white text-2xl font-bold mb-4">Message Sent Successfully!</h4>
          <p className="text-[#A0A0A0]">Thank you for reaching out. I will get back to you as soon as possible.</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="max-w-xl space-y-6">
        <p className="text-base text-[#A0A0A0]">
          Let's collaborate to align your audience intelligence processes with your digital growth strategies.
          <br /><br />
          You can email me at <a href="mailto:info@nadeesenanayake.com" className="text-white underline">info@nadeesenanayake.com</a>
        </p>

        {/* WhatsApp contact button */}
        <a 
          href="https://wa.me/94717088630" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#25D366] text-black uppercase font-bold text-xs tracking-widest py-3 px-6 hover:bg-[#128C7E] hover:text-white transition-all duration-300"
        >
          Chat on WhatsApp
        </a>

        {/* Contact form using Formspree */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Name</label>
            <input type="text" name="name" required className="w-full bg-[#000000] border border-[#505050] p-3 text-white focus:outline-none focus:border-[#FFFFFF] transition-colors" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Email</label>
            <input type="email" name="email" required className="w-full bg-[#000000] border border-[#505050] p-3 text-white focus:outline-none focus:border-[#FFFFFF] transition-colors" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#A0A0A0] mb-2 font-semibold">Message</label>
            <textarea rows="4" name="message" required className="w-full bg-[#000000] border border-[#505050] p-3 text-white focus:outline-none focus:border-[#FFFFFF] transition-colors"></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-[#FFFFFF] text-[#000000] uppercase font-bold text-xs tracking-widest py-4 hover:bg-[#505050] hover:text-[#FFFFFF] transition-all duration-300"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  // State to manage whether the text is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const expertiseItems = [
    "Performance Marketing",
    "Data Driven Marketing Strategy",
    "Data Driven Business Development Strategy",
    "Business Analysis",
    "Communication Strategy For Sales",
    "Consumer Behavior Research",
    "Digital Community Intelligence",
    "Online Reputation Management",
    "Social Listening",
    "Marketing Automation",
    "Workflow Automation For Marketing Operations",
    "SaaS Development"
  ];

  return (
    <section id="about" className="py-24 bg-[#000000] px-6 lg:px-12 xl:px-24 border-t border-[#505050]">
      <div className="max-w-5xl mx-auto w-full space-y-20">

        {/* Who I Am Subsection */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
        >
          <div className="lg:col-span-4">
            <h3 className="text-white text-2xl font-bold uppercase tracking-wider">Who I Am</h3>
          </div>

          <div className="lg:col-span-8 text-[#A0A0A0] space-y-6 leading-relaxed text-base">
            <p>
              I'm Nadee Senanayake, a Brand Strategist and Digital Community Intelligence Specialist passionate about understanding how people think, interact, and make decisions in digital environments.
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  <p>
                    My expertise combines strategic marketing, consumer behavior research, brand intelligence, and digital community analysis to help businesses make informed decisions. Rather than focusing solely on campaign metrics, I uncover the conversations, emotions, and behavioral patterns that shape customer perceptions and influence business outcomes.
                  </p>
                  <p>
                    Throughout my career, I have collaborated with organizations across education and consumer-focused industries, supporting digital marketing initiatives, community management, online reputation, consumer insight generation, and strategic communication. These experiences have strengthened my ability to transform digital data into practical business recommendations that create measurable value.
                  </p>
                  <p>
                    Currently, I am pursuing an MSc in Digital Marketing, and PhD Candidate where I continue to deepen my expertise in consumer behavior, digital communities, and emerging marketing trends. My long-term vision is to contribute to both academia and industry by developing innovative research and practical strategic frameworks that help organizations navigate an increasingly digital world.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#FFFFFF] text-xs uppercase tracking-widest font-bold border-b border-[#505050] hover:text-[#A0A0A0] transition-colors mt-2"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </motion.div>

        {/* Mission Subsection */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 border-t border-[#505050]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
        >
          <div className="lg:col-span-4">
            <h3 className="text-white text-2xl font-bold uppercase tracking-wider">Mission</h3>
          </div>
          <div className="lg:col-span-8 text-[#FFFFFF] text-lg lg:text-xl font-medium tracking-wide leading-relaxed">
            "My mission is to help organizations bridge the gap between digital conversations and business strategy by transforming customer insights into informed marketing decisions, stronger brand trust, and sustainable business growth."
          </div>
        </motion.div>

        {/* What I Do / Capability Grid Subsection */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 border-t border-[#505050]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
        >
          <div className="lg:col-span-4">
            <h3 className="text-white text-2xl font-bold uppercase tracking-wider">What I Do</h3>
            <p className="text-[#A0A0A0] text-sm mt-2 pr-4">
              I help organizations understand what their customers are saying, feeling, and expecting across digital platforms. My expertise includes:
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-[#A0A0A0] text-[#FFFFFF] text-sm font-medium tracking-wide hover:bg-[#505050] transition-colors duration-300 flex items-center"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[#A0A0A0] text-sm mt-6 italic">
              "By combining research with practical marketing strategy, I transform digital conversations into actionable insights that support better decision-making and long-term growth."
            </p>
          </div>
        </motion.div>

        {/* Philosophy Subsection */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pt-8 border-t border-[#505050]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
        >
          <div className="lg:col-span-4">
            <h3 className="text-white text-2xl font-bold uppercase tracking-wider">My Philosophy</h3>
          </div>
          <div className="lg:col-span-8 text-[#A0A0A0] leading-relaxed text-base">
            <p>
              Every conversation tells a story. Every review, comment, discussion, and customer interaction contains valuable intelligence that can shape stronger brands and better business decisions. I believe successful marketing starts with listening. By understanding customer behavior before making strategic decisions, businesses can build meaningful relationships, strengthen trust, and create lasting value for their audiences.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: "Founder",
      company: "Smooth",
      date: "Jan 2026 – Present",
      location: "Dubai, UAE",
      description: "Leading strategic initiatives and driving enterprise growth with innovative business frameworks."
    },
    {
      role: "Founder",
      company: "Teralink",
      date: "Jul 2024 – Present",
      location: "Dubai, UAE",
      description: "Establishing a strong foundation for sustainable tech solutions in the Middle East."
    },
    {
      role: "Manager, Government Affairs (Multi Sector)",
      company: "Al Masaood",
      date: "Dec 2023 – Jun 2024",
      location: "Abu Dhabi Emirate, UAE",
      description: "Orchestrated complex stakeholder relationships and navigated multi-sector governmental landscapes to ensure business continuity and strategic alignment."
    }
  ];

  return (
    <section id="experience" className="w-full bg-background-dark text-primary-light py-32 relative overflow-hidden z-10">

      {/* Massive Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h2 className="text-[15vw] font-display font-bold text-white/[0.03] whitespace-nowrap leading-none tracking-tighter">
          EXPERIENCE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-widest text-sm font-bold text-accent mb-4 block">
              Professional Journey
            </span>
            <h3 className="text-4xl md:text-6xl font-display font-light">
              Where I've <span className="italic font-medium">Built</span>.
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-white/10 hover:border-accent/50 transition-colors duration-500"
            >
              {/* Date & Location column */}
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <span className="text-sm uppercase tracking-widest text-secondary group-hover:text-accent transition-colors duration-300">
                  {exp.date}
                </span>
                <span className="text-xs text-secondary/60">
                  {exp.location}
                </span>
              </div>

              {/* Content column */}
              <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="max-w-xl">
                  <h4 className="text-2xl md:text-4xl font-display font-medium mb-3 group-hover:italic transition-all duration-300">
                    {exp.role}
                  </h4>
                  <h5 className="text-xl text-accent mb-6 font-light">
                    {exp.company}
                  </h5>
                  <p className="text-secondary/90 leading-relaxed font-light text-base md:text-lg">
                    {exp.description}
                  </p>
                </div>

                {/* Arrow Icon block */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent group-hover:text-background-dark transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

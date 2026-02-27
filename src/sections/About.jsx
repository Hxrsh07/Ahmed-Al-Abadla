import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="w-full bg-background-light text-primary-dark pt-2 pb-24 px-6 md:px-12 rounded-t-[3rem] -mt-10 relative z-20">

            <div className="max-w-7xl mx-auto mt-24 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">

                {/* Left Column: Big Headline */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="flex flex-col gap-6"
                >
                    <span className="uppercase tracking-widest text-sm font-bold text-secondary">
                        About Me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight text-primary-dark">
                        Ahmed Al Abadla is a <span className="italic font-light">Dubai-based entrepreneur</span> and business leader.
                    </h2>

                    <div className="mt-8 text-secondary/90 space-y-4 font-light leading-relaxed text-lg">
                        <p>
                            With experience spanning telecommunications, government affairs, and operations, he is the Founder of Smooth and Teralink, where he focuses on delivering practical, technology-driven solutions that support business growth and operational efficiency.
                        </p>
                        <p>
                            With a background in industrial engineering and an MBA, Ahmed combines technical expertise with strategic thinking to build sustainable ventures and long-term partnerships.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h3 className="uppercase tracking-widest text-sm font-bold text-accent mb-6">I’m expert into:</h3>
                        <ul className="space-y-4 text-secondary/90 text-lg font-light list-disc pl-5">
                            <li>Telecom & Connectivity Solutions</li>
                            <li>Business Development & Partnerships</li>
                            <li>Entrepreneurship & Venture Building</li>
                            <li>Government Affairs & Stakeholder Management</li>
                            <li>Operations & Process Optimization</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Right Column: Paragraph narrative */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="space-y-12 mt-12 md:mt-24"
                >
                    <div className="border-l border-primary-dark/10 pl-8">
                        <h3 className="uppercase tracking-widest text-xs font-bold text-accent block mb-4">My Career Background</h3>
                        <p className="text-base md:text-lg text-secondary/90 leading-relaxed font-light">
                            Prior to entrepreneurship, Ahmed worked in government affairs and operations roles at Al Masaood, gaining experience in regulatory coordination, cross-sector collaboration, and operational leadership. His early career as an operations engineer built a strong foundation in systems thinking and execution.
                        </p>
                    </div>

                    <div className="border-l-4 border-accent pl-8 py-2">
                        <h3 className="uppercase tracking-widest text-xs font-bold text-accent block mb-4">This Is My Philosophy</h3>
                        <blockquote className="text-2xl md:text-3xl font-display font-light italic leading-snug text-primary-dark">
                            “I believe sustainable businesses are built at the intersection of technology, people, and execution. My focus is on creating solutions that are practical, scalable, and built for long-term impact.”
                        </blockquote>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

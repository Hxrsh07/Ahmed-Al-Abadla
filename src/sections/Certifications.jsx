import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    {
        name: "Lean Six Sigma Yellow Belt",
        issuer: "Certification Body", // User didn't specify issuer, keeping it generic or omitting
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="w-full bg-background-dark text-primary-light py-32 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase tracking-widest text-sm font-bold text-accent mb-4 block">
                            Professional Recognition
                        </span>
                        <h3 className="text-4xl md:text-6xl font-display font-light">
                            Where I've <span className="italic font-medium">Qualified</span>.
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="group relative h-64 overflow-hidden border border-white/10 p-8 flex flex-col justify-end hover:border-accent transition-colors duration-500"
                    >
                        {/* Background Image / Pattern placeholder */}
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500 z-0"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-accent/50 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background-dark transition-all duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="7"></circle>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                </svg>
                            </div>
                            <h4 className="text-xl md:text-2xl font-display font-medium text-white group-hover:italic transition-all duration-300">
                                Lean Six Sigma
                            </h4>
                            <p className="text-accent mt-2 font-light">Yellow Belt</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

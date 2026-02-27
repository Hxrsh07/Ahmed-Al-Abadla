import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
    const education = [
        {
            degree: "MBA",
            institution: "University of Dubai",
            year: "2021–2023",
            description: "Focus on strategic management, enterprise leadership, and advanced business frameworks."
        },
        {
            degree: "BSc Industrial Engineering",
            institution: "Rochester Institute of Technology",
            year: "2017–2021",
            description: "Foundations in process optimization, system design, and continuous improvement methodologies."
        }
    ];

    return (
        <section id="education" className="w-full bg-background-light text-primary-dark py-32 relative z-20 rounded-t-[3rem] -mt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary-dark/10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase tracking-widest text-sm font-bold text-accent mb-4 block">
                            Academic Background
                        </span>
                        <h3 className="text-4xl md:text-6xl font-display font-light">
                            Where I've <span className="italic font-medium">Learned</span>.
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="p-10 border border-primary-dark/10 hover:border-accent bg-white transition-colors duration-500 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-sm font-bold tracking-widest uppercase text-accent">
                                    {edu.year}
                                </span>
                            </div>

                            <h4 className="text-2xl md:text-3xl font-display font-medium mb-2 group-hover:italic transition-all duration-300">
                                {edu.degree}
                            </h4>
                            <h5 className="text-lg text-secondary mb-6 font-light">
                                {edu.institution}
                            </h5>
                            <p className="text-secondary/80 font-light leading-relaxed">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}

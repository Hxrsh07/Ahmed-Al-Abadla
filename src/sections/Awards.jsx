import React from 'react';
import { motion } from 'framer-motion';

export default function Awards() {
    const awards = [
        {
            title: "Entrepreneurial Excellence Award",
            year: "2025",
            description: "Recognized by a regional startup community in Dubai for launching and scaling multiple ventures including Smooth and Teralink."
        },
        {
            title: "Top Graduate – MBA Program",
            year: "2023",
            description: "Awarded for outstanding academic performance and leadership during the MBA program at University of Dubai."
        },
        {
            title: "Innovation in Business Strategy Award",
            year: "2023",
            description: "Recognized for developing a high-impact business strategy project focused on digital transformation and operational efficiency."
        },
        {
            title: "Lean Process Improvement Recognition",
            year: "2022",
            description: "Acknowledged for applying Lean Six Sigma principles to optimize business workflows and reduce operational inefficiencies."
        },
        {
            title: "Industrial Engineering Capstone Distinction",
            year: "2021",
            description: "Graduated with distinction for a capstone project focused on process optimization and systems efficiency at Rochester Institute of Technology."
        },
        {
            title: "Young Entrepreneur Recognition",
            year: "2024",
            description: "Featured in a regional entrepreneurial network for contributions to the startup ecosystem in Dubai through venture development."
        }
    ];

    return (
        <section id="awards" className="w-full bg-background-light text-primary-dark pt-24 pb-32 px-6 md:px-12 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary-dark/10 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="uppercase tracking-widest text-sm font-bold text-accent mb-4 block">
                        Awards & Achievements
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-light">
                        Where I've <span className="italic font-medium">Excelled</span>.
                    </h3>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">


                {/* Right side: Awards List */}
                <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-16">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group flex flex-col border-b border-primary-dark/5 pb-8 last:border-0 hover:pl-6 transition-all duration-500 ease-out"
                        >
                            <span className="text-sm font-bold tracking-widest uppercase text-accent mb-3">
                                {award.year}
                            </span>
                            <h4 className="text-2xl md:text-3xl font-display font-medium text-primary-dark mb-4 group-hover:italic group-hover:text-accent transition-all duration-500">
                                {award.title}
                            </h4>
                            <p className="text-base md:text-lg text-secondary/80 leading-relaxed font-light">
                                {award.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="w-full bg-background-light text-primary-dark pt-32 pb-24 px-6 md:px-12 rounded-t-[3rem] -mt-10 relative z-20">

            {/* Arch Image masked */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-[40%] md:-translate-y-[50%] w-64 md:w-96 aspect-[3/4] arch-mask overflow-hidden md:block">
                <img src="/profile.png" alt="Ahmed Al Abadla" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto mt-24 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">

                {/* Left Column: Big Headline */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="flex flex-col gap-6"
                >
                    <span className="uppercase tracking-widest text-sm font-bold text-secondary">
                        I'm Ahmed Al Abadla
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">
                        <span className="italic font-light">I'm</span> DETERMINED <span className="italic font-light">to</span> HELP <span className="italic font-light">you</span> UNLOCK <span className="italic font-light">your</span> POSSIBILITIES.
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed max-w-md mt-6">
                        I am a visionary founder and strategic leader based in Dubai, UAE, with a proven track record of building and scaling impactful ventures.
                    </p>
                    <p className="font-bold text-lg">
                        And help others do the same.
                    </p>

                    <div className="mt-8">
                        <button className="px-10 py-5 bg-accent text-white uppercase tracking-widest text-xs font-bold hover:bg-opacity-90 transition-all flex items-center gap-4 group">
                            More About Me
                            <svg width="30" height="12" viewBox="0 0 30 12" fill="none" className="transform group-hover:translate-x-2 transition-transform">
                                <path d="M29.5303 6.53033C29.8232 6.23744 29.8232 5.76256 29.5303 5.46967L24.7574 0.696699C24.4645 0.403806 23.9896 0.403806 23.6967 0.696699C23.4038 0.989593 23.4038 1.46447 23.6967 1.75736L27.9393 6L23.6967 10.2426C23.4038 10.5355 23.4038 11.0104 23.6967 11.3033C23.9896 11.5962 24.4645 11.5962 24.7574 11.3033L29.5303 6.53033ZM0 6.75H29V5.25H0V6.75Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Paragraph narrative */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="space-y-8 text-base md:text-lg text-secondary/90 leading-relaxed font-light mt-12 md:mt-32 border-l border-primary-dark/10 pl-8"
                >
                    <p>
                        With a strong foundation in Industrial Engineering and a Master's in Business Administration, I bridge the gap between technical optimization and strategic business growth. It's not just about positive thinking—it's about a firm belief that success goes to the most determined, not necessarily the most talented.
                    </p>
                    <p>
                        Currently, I lead multiple initiatives including Smooth and Teralink as Founder, focusing on delivering innovative solutions and driving enterprise success.
                    </p>
                    <p>
                        Most recently, I served as Manager of Government Affairs at Al Masaood, where I built key partnerships and navigated complex multi-sector landscapes in Abu Dhabi. I've found ways to build successful ventures by simply sharing what I've learned and creating resilient frameworks.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

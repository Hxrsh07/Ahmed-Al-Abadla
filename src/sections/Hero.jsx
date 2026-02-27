import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } },
    };

    return (
        <section id="hero" className="relative w-full min-h-screen bg-background-dark text-primary-light flex flex-col justify-center items-center pt-24 pb-16 px-6 overflow-hidden">

            {/* Background ambient light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-12 md:mt-24"
            >
                <motion.div variants={itemVariants} className="mb-4">
                    <span className="uppercase tracking-widest text-xs md:text-sm text-accent font-semibold">
                        Founder & Visionary Leader
                    </span>
                </motion.div>

                {/* Massive Typography matching reference */}
                <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl lg:text-[11rem] font-display font-medium tracking-tight leading-[0.9] text-white flex flex-col items-center py-20">
                    <span className="uppercase">AHMED</span>
                    <span className="text-outline italic font-light lowercase mt-[-2%] ml-[10%] drop-shadow-2xl z-20">Al Abadla</span>
                </motion.h1>


                <motion.div variants={itemVariants} className="flex gap-6 mt-8 pb-60">
                    <Link
                        to="experience"
                        smooth={true}
                        duration={800}
                        className="flex items-center gap-4 px-8 py-4 bg-white text-black font-semibold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors cursor-pointer"
                    >
                        How I Work
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </motion.div>
            </motion.div>



        </section>
    );
}

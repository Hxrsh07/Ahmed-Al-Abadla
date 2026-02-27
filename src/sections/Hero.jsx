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
        <section id="hero" className="relative w-full min-h-[90vh] lg:min-h-screen bg-background-dark text-primary-light flex items-center pt-32 pb-16 px-6 overflow-hidden">

            {/* Background ambient light */}
            <div className="absolute top-1/3 -left-1/4 w-full max-w-4xl h-96 bg-accent/20 blur-[150px] rounded-full pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center"
            >
                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start text-left order-2 lg:order-1 mt-12 lg:mt-0">
                    <motion.div variants={itemVariants} className="mb-6">

                    </motion.div>

                    {/* Typography */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-[9rem] font-display font-medium tracking-tight leading-[0.9] text-white flex flex-col items-start py-8"
                    >
                        <span className="uppercase z-30">AHMED</span>
                        <span className="flex flex-col items-center text-outline italic font-light lowercase mt-[-4%] ml-[10%] lg:ml-[20%] drop-shadow-2xl z-20">
                            <span>al</span>
                            <span>abadla</span>
                        </span>

                        <span className="uppercase tracking-widest text-lg md:text-lg text-accent font-semibold mt-10">
                            Founder | Telecom & Business Solutions Leader
                        </span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="mt-6 max-w-xl pr-4">
                        <p className="text-xl md:text-2xl font-display font-light leading-snug text-white/90">
                            Building scalable telecom and business solutions that empower organizations to operate smarter and grow faster across the UAE.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mt-12 w-full sm:w-auto">
                        <a
                            href="https://www.linkedin.com/in/ahmed-al-abadla"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-8 py-4 bg-white text-black font-semibold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors cursor-pointer text-center"
                        >
                            Connect on LinkedIn
                        </a>
                    </motion.div>
                </div>

                {/* Right Column: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className="order-1 lg:order-2 w-full h-[400px] md:h-[600px] lg:h-[750px] relative mt-10 lg:mt-0 px-4 lg:px-0"
                >
                    <div className="w-full h-full rounded-2xl overflow-hidden relative z-10">
                        <img
                            src="/profile.png"
                            alt="Ahmed Al Abadla"
                            className="w-full h-full object-cover object-top grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative element behind image */}
                    <div className="absolute -inset-4 border border-white/20 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
                </motion.div>

            </motion.div>
        </section>
    );
}

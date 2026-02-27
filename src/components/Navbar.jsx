import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-background-dark/90 backdrop-blur-md border-b border-white/5 shadow-sm' : 'py-8 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="hero" smooth={true} duration={800} className="text-2xl md:text-3xl font-display font-medium tracking-wide cursor-pointer text-white hover:text-accent transition-colors">
                    AHMED <span className="font-light italic">Al Abadla</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={800}
                            spy={true}
                            activeClass="text-accent"
                            className="text-white/70 hover:text-white cursor-pointer text-xs uppercase tracking-widest font-semibold transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Nav Toggle */}
                <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <motion.div
                initial={false}
                animate={{ height: mobileMenuOpen ? '100vh' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
                className="lg:hidden overflow-hidden bg-background-dark fixed inset-0 top-[72px] z-40"
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 pb-32">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={800}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-display font-medium tracking-wider text-white hover:text-accent cursor-pointer transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </header>
    );
}

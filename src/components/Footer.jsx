import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 py-8 mt-12 bg-background/50 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-secondary text-sm font-light">
                    &copy; {currentYear} Ahmed Al Abadla. All rights reserved.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/ahmed-al-abadla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-white transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

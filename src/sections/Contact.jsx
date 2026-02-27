import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Construct mailto link
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:ahmed@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    return (
        <section id="contact" className="w-full bg-background-light text-primary-dark py-32 relative z-20 rounded-t-[3rem] -mt-10 mb-[-1px]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

                {/* Contact Info Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                    className="flex flex-col"
                >
                    <span className="uppercase tracking-widest text-sm font-bold text-accent mb-6 block">
                        Let's Collaborative
                    </span>
                    <h2 className="text-5xl md:text-7xl font-display font-light leading-tight mb-8">
                        <span className="italic font-medium">Ready</span> to build something remarkable?
                    </h2>

                    <div className="mt-12 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full border border-primary-dark/20 flex items-center justify-center shrink-0">
                                <Mail size={16} />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-widest text-secondary mb-1">Email</p>
                                <a href="mailto:ahmed@example.com" className="text-xl font-display font-medium hover:text-accent transition-colors">ahmed@example.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full border border-primary-dark/20 flex items-center justify-center shrink-0">
                                <Linkedin size={16} />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-widest text-secondary mb-1">Network</p>
                                <a href="https://www.linkedin.com/in/ahmed-al-abadla" target="_blank" rel="noopener noreferrer" className="text-xl font-display font-medium hover:text-accent transition-colors">LinkedIn Profile</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <div className="flex flex-col group">
                            <label htmlFor="name" className="text-sm uppercase tracking-widest text-secondary mb-2 group-focus-within:text-accent transition-colors">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-transparent border-b border-primary-dark/20 py-3 text-lg font-light focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-secondary/40"
                                placeholder="Your full name"
                            />
                        </div>

                        <div className="flex flex-col group">
                            <label htmlFor="email" className="text-sm uppercase tracking-widest text-secondary mb-2 group-focus-within:text-accent transition-colors">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-transparent border-b border-primary-dark/20 py-3 text-lg font-light focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-secondary/40"
                                placeholder="Your email address"
                            />
                        </div>

                        <div className="flex flex-col group">
                            <label htmlFor="message" className="text-sm uppercase tracking-widest text-secondary mb-2 group-focus-within:text-accent transition-colors">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-transparent border-b border-primary-dark/20 py-3 text-lg font-light focus:outline-none focus:border-accent transition-colors resize-none rounded-none placeholder:text-secondary/40"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-8 px-10 py-5 bg-primary-dark text-white uppercase tracking-widest text-xs font-bold hover:bg-accent transition-colors flex items-center justify-center gap-4 w-full sm:w-auto self-start disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            {!isSubmitting && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            )}
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}

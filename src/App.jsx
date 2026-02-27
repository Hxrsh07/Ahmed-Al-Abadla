import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Awards from './sections/Awards';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-primary-light font-sans overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

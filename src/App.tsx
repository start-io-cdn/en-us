import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SecuritySection from './components/SecuritySection';
import SetupGuide from './components/SetupGuide';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <SecuritySection />
      <SetupGuide />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
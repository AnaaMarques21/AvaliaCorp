
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
    
    // Initialize floating elements animation with JS
    const initFloatingElements = () => {
      const floatingElements = document.querySelectorAll('.floating-element');
      
      floatingElements.forEach((element, index) => {
        // Add random delay and duration for more natural movement
        const delay = Math.random() * 2;
        const duration = 3 + Math.random() * 2;
        
        if (element instanceof HTMLElement) {
          element.style.animationDelay = `${delay}s`;
          element.style.animationDuration = `${duration}s`;
          
          // Make elements visible after setting animation properties
          setTimeout(() => {
            if (element instanceof HTMLElement) {
              element.style.opacity = '1';
            }
          }, 300);
        }
      });
    };
    
    initFloatingElements();
    
    // Try to initialize framer-motion animations if they exist
    try {
      const animateElements = document.querySelectorAll('[data-animate="true"]');
      
      animateElements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.classList.add('animate-fade-in');
        }
      });
    } catch (error) {
      console.log('Framer motion not available');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

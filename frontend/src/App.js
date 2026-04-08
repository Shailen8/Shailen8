import React, { useState } from 'react';
import './App.css';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorks from './components/HowItWorks';
import ServicesSection from './components/ServicesSection';
import DestinationsSection from './components/DestinationsSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import BookingModal from './components/BookingModal';

function App() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="App overflow-x-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      <Toaster position="top-center" richColors />
      <Navbar onBookNow={() => setShowBooking(true)} />
      <HeroSection onBookNow={() => setShowBooking(true)} />
      <AboutSection />
      <HowItWorks />
      <ServicesSection onBookNow={() => setShowBooking(true)} />
      <DestinationsSection onBookNow={() => setShowBooking(true)} />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection onBookNow={() => setShowBooking(true)} />
      <FooterSection />
      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    </div>
  );
}

export default App;

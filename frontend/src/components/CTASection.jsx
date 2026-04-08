import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const CTASection = ({ onBookNow }) => (
  <section id="cta" data-testid="cta-section" className="py-24 lg:py-32 bg-sky-600 relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-500/30 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-700/30 rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-6">
        <MapPin className="w-4 h-4" />
        50+ Destinations Across India
      </div>

      <h2
        className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        Ready to Start Your Journey?
      </h2>
      <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
        Connect with a trusted local guide today and make your next trip the most memorable one yet.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          data-testid="cta-book-btn"
          onClick={onBookNow}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-full text-base font-bold hover:bg-sky-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
        >
          Book Your Guide Today
          <ArrowRight className="w-5 h-5" />
        </button>
        <a
          href="mailto:shailendrabhabar7@gmail.com"
          data-testid="cta-contact-link"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-200 border border-white/30"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;

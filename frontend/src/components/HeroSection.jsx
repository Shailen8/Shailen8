import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, MapPin, Shield } from 'lucide-react';

const HERO_BG = 'https://images.pexels.com/photos/9943048/pexels-photo-9943048.jpeg?auto=compress&cs=tinysrgb&w=1920';

const STATS = [
  { icon: Users,  label: '500+ Verified Guides' },
  { icon: MapPin, label: '50+ Destinations' },
  { icon: Shield, label: '5000+ Safe Trips' },
];

const HeroSection = ({ onBookNow }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = HERO_BG;
    img.onload = () => setLoaded(true);
    const t = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          opacity: loaded ? 1 : 0,
        }}
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(110deg, rgba(15,23,42,0.93) 0%, rgba(15,23,42,0.65) 55%, rgba(15,23,42,0.2) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm font-semibold mb-6 ${loaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Star className="w-4 h-4 fill-sky-400 text-sky-400" />
            India's #1 Local Guide Platform
          </div>

          {/* H1 */}
          <h1
            className={`font-bold text-white leading-[1.1] mb-6 text-5xl sm:text-6xl lg:text-7xl ${loaded ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Explore Every{' '}
            <span className="text-sky-400">Destination</span>{' '}
            with a Trusted Local Guide
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl ${loaded ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            Book Local Guides with Vehicles for Safe and Easy Travel. Whether it's a bike ride through Goa or a scenic car trip to Manali — we've got you covered.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-14 ${loaded ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
            <button
              data-testid="hero-book-btn"
              onClick={onBookNow}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 text-white rounded-full text-base font-semibold hover:bg-sky-500 transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-sky-600/30"
            >
              Book Your Guide Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#how-it-works"
              data-testid="hero-how-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              How It Works
            </a>
          </div>

          {/* Stats Pills */}
          <div className={`flex flex-wrap gap-3 ${loaded ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
            {STATS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-medium">
                <Icon className="w-4 h-4 text-sky-400" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

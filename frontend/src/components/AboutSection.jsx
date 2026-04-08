import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const HIGHLIGHTS = [
  'Trusted by 5000+ travelers across India',
  'Guides with verified local expertise',
  'Flexible vehicle options: bike or car',
  'Rated 4.9/5 by our happy travelers',
];

const STATS = [
  { value: '500+', label: 'Local Guides' },
  { value: '50+',  label: 'Destinations' },
  { value: '4.9',  label: 'Star Rating' },
];

const AboutSection = () => (
  <section id="about" data-testid="about-section" className="py-24 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Text */}
        <div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-4 block">
            About Us
          </span>
          <h2
            className="font-semibold text-slate-900 mb-6 leading-tight text-4xl sm:text-5xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Who We <span className="text-sky-600">Are</span>
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6">
            We connect travelers with trusted local guides who know the best places, routes, and experiences. Our goal is to make travel easy, safe, and unforgettable.
          </p>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            Travel With Guide bridges the gap between tourists and authentic local experiences. Whether you need a local expert in your vehicle or one who brings their own, we make every journey memorable.
          </p>

          <ul className="space-y-3 mb-10">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-sky-600 mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {value}
                </div>
                <div className="text-sm text-slate-500 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Collage */}
        <div className="relative h-[480px] lg:h-[560px]">
          {/* Main image */}
          <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/29988900/pexels-photo-29988900.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Kerala backwaters travel experience"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Secondary image */}
          <div className="absolute bottom-0 left-0 w-[58%] h-[46%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.pexels.com/photos/3754547/pexels-photo-3754547.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Goa beach destination"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-2xl shadow-xl px-5 py-4 z-10 animate-float">
            <div className="text-2xl font-bold text-sky-600" style={{ fontFamily: 'Outfit, sans-serif' }}>5000+</div>
            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">Happy Travelers</div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;

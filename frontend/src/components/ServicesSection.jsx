import React from 'react';
import { UserCheck, Car, Bike, Map, Plane, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    Icon: UserCheck,
    title: 'Local Travel Guides',
    desc: 'Certified local experts who know every shortcut, viewpoint, and hidden gem in their city.',
    span: 'lg:col-span-2',
    card: 'bg-gradient-to-br from-sky-600 to-sky-700',
    light: true,
  },
  {
    Icon: Bike,
    title: 'Bike Tours',
    desc: 'Explore narrow lanes, beaches, and mountain roads on an exciting guided bike tour.',
    span: 'lg:col-span-1',
    card: 'bg-white border border-slate-100',
    light: false,
  },
  {
    Icon: Car,
    title: 'Car Tours',
    desc: 'Comfortable car rides with your guide navigating the best scenic routes for you.',
    span: 'lg:col-span-1',
    card: 'bg-white border border-slate-100',
    light: false,
  },
  {
    Icon: Map,
    title: 'Custom Travel Plans',
    desc: 'Personalized itineraries designed around your interests, budget, and travel style.',
    span: 'lg:col-span-1',
    card: 'bg-green-50 border border-green-100',
    light: false,
  },
  {
    Icon: Plane,
    title: 'Safe and Trusted Travel',
    desc: 'Verified, background-checked guides for a completely safe and trustworthy travel experience.',
    span: 'lg:col-span-1',
    card: 'bg-amber-50 border border-amber-100',
    light: false,
  },
];

const ServicesSection = ({ onBookNow }) => (
  <section id="services" data-testid="services-section" className="py-24 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
        <div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-3 block">Our Services</span>
          <h2
            className="font-semibold text-slate-900 text-4xl sm:text-5xl"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What We <span className="text-sky-600">Offer</span>
          </h2>
        </div>
        <button
          data-testid="services-book-btn"
          onClick={onBookNow}
          className="self-start md:self-auto px-6 py-3 bg-sky-600 text-white rounded-full text-sm font-semibold hover:bg-sky-700 transition-all hover:scale-105 active:scale-95"
        >
          Book a Service
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
            className={`${s.span} ${s.card} rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${s.light ? 'bg-white/20' : 'bg-sky-50'}`}>
              <s.Icon className={`w-6 h-6 ${s.light ? 'text-white' : 'text-sky-600'}`} />
            </div>
            <div className="flex items-start justify-between gap-2">
              <h3
                className={`text-xl font-semibold mb-2 ${s.light ? 'text-white' : 'text-slate-900'}`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {s.title}
              </h3>
              <ArrowUpRight className={`w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${s.light ? 'text-white' : 'text-sky-600'}`} />
            </div>
            <p className={`text-sm leading-relaxed ${s.light ? 'text-white/80' : 'text-slate-500'}`}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;

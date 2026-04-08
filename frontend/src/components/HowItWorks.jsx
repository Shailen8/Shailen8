import React from 'react';
import { MapPin, UserPlus, CalendarCheck, Smile } from 'lucide-react';

const STEPS = [
  {
    num: '01', Icon: MapPin,        badge: 'bg-sky-600',    bg: 'bg-sky-50',    text: 'text-sky-600',
    title: 'Choose Your Destination',
    desc:  'Pick from 50+ popular destinations across India — beaches, hills, heritage sites and more.',
  },
  {
    num: '02', Icon: UserPlus,      badge: 'bg-green-600',  bg: 'bg-green-50',  text: 'text-green-600',
    title: 'Select a Local Guide',
    desc:  'Browse verified guides by ratings, language, and vehicle type. Find your perfect match.',
  },
  {
    num: '03', Icon: CalendarCheck, badge: 'bg-amber-500',  bg: 'bg-amber-50',  text: 'text-amber-600',
    title: 'Travel Comfortably with Guide',
    desc:  'Meet your guide, hop in and explore. Comfort, safety and local knowledge all in one.',
  },
  {
    num: '04', Icon: Smile,         badge: 'bg-violet-600', bg: 'bg-violet-50', text: 'text-violet-600',
    title: 'Enjoy Your Trip!',
    desc:  'Create memories that last a lifetime with authentic local experiences.',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" data-testid="how-it-works-section" className="py-24 lg:py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-3 block">Simple Process</span>
        <h2
          className="font-semibold text-slate-900 text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          How It <span className="text-sky-600">Works</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Book your perfect local guide in 4 easy steps and start your adventure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, i) => (
          <div key={step.num} data-testid={`step-card-${i + 1}`} className="relative group">
            {/* Connector */}
            {i < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[80%] w-[40%] h-px bg-slate-200 z-0" />
            )}
            <div className="relative z-10 bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 h-full">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${step.bg} ${step.text} mb-5`}>
                <step.Icon className="w-6 h-6" />
              </div>
              {/* Step badge */}
              <span className={`absolute -top-3 -right-3 w-8 h-8 ${step.badge} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                {step.num}
              </span>
              <h3 className="font-semibold text-slate-900 text-lg mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default HowItWorks;

import React from 'react';
import { ShieldCheck, Tag, Lock, Calendar, Headphones, Award } from 'lucide-react';

const REASONS = [
  {
    Icon: ShieldCheck, title: 'Verified Local Guides',
    desc: 'Every guide is background-checked, ID-verified, and rated by real travelers for your peace of mind.',
    color: 'text-sky-600', bg: 'bg-sky-50',
  },
  {
    Icon: Tag, title: 'Affordable Pricing',
    desc: 'Transparent, competitive pricing with no hidden charges. Best local experiences at the best value.',
    color: 'text-green-600', bg: 'bg-green-50',
  },
  {
    Icon: Lock, title: 'Safe Travel',
    desc: 'All journeys are GPS-tracked and monitored for your safety. Travel with complete confidence.',
    color: 'text-amber-600', bg: 'bg-amber-50',
  },
  {
    Icon: Calendar, title: 'Flexible Booking',
    desc: 'Book, reschedule, or cancel with ease. We work around your schedule, not the other way around.',
    color: 'text-violet-600', bg: 'bg-violet-50',
  },
  {
    Icon: Headphones, title: '24/7 Support',
    desc: 'Our travel experts are available round the clock to assist you before, during, and after your trip.',
    color: 'text-rose-600', bg: 'bg-rose-50',
  },
  {
    Icon: Award, title: 'Authentic Experiences',
    desc: 'Discover hidden gems, local eateries, and untouched spots only a local guide can show you.',
    color: 'text-teal-600', bg: 'bg-teal-50',
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" data-testid="why-choose-us-section" className="py-24 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-3 block">Why Us</span>
        <h2
          className="font-semibold text-slate-900 text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Why <span className="text-sky-600">Choose Us</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-lg mx-auto">
          We don't just plan trips — we create unforgettable experiences rooted in local culture and trust.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REASONS.map(({ Icon, title, desc, color, bg }) => (
          <div
            key={title}
            data-testid={`reason-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="group bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${bg}`}>
              <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <h3
              className="font-semibold text-slate-900 text-lg mb-2"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default WhyChooseUs;

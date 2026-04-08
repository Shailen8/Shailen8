import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const DESTINATIONS = [
  {
    name: 'Goa Beaches',
    tagline: 'Sun, Sand & Sea',
    image: 'https://images.pexels.com/photos/3754547/pexels-photo-3754547.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    name: 'Manali Hills',
    tagline: 'Mountains & Snow',
    image: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868?crop=entropy&cs=srgb&fm=jpg&w=900&q=80',
  },
  {
    name: 'Jaipur City',
    tagline: 'The Pink City',
    image: 'https://images.unsplash.com/photo-1661924326425-c14a6426d989?crop=entropy&cs=srgb&fm=jpg&w=700&q=80',
  },
  {
    name: 'Varanasi Ghats',
    tagline: 'Spiritual & Sacred',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    name: 'Kerala Backwaters',
    tagline: 'Nature & Serenity',
    image: 'https://images.pexels.com/photos/29988900/pexels-photo-29988900.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

const DestinationCard = ({ dest, tall }) => (
  <div
    data-testid={`destination-card-${dest.name.toLowerCase().replace(/\s+/g, '-')}`}
    className={`relative overflow-hidden rounded-3xl group cursor-pointer ${tall ? 'h-72 sm:h-80' : 'h-56'}`}
  >
    <img
      src={dest.image}
      alt={dest.name}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
    <div className="absolute bottom-0 left-0 p-5">
      <div className="flex items-center gap-1.5 text-white/75 text-xs font-medium mb-1">
        <MapPin className="w-3 h-3" />
        {dest.tagline}
      </div>
      <h3 className="text-white font-bold text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {dest.name}
      </h3>
    </div>
    <div className="absolute top-4 right-4 w-9 h-9 bg-white/0 group-hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
      <ArrowRight className="w-4 h-4 text-slate-900" />
    </div>
  </div>
);

const DestinationsSection = ({ onBookNow }) => (
  <section id="destinations" data-testid="destinations-section" className="py-24 lg:py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-3 block">Explore India</span>
        <h2
          className="font-semibold text-slate-900 text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Popular <span className="text-sky-600">Destinations</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-lg mx-auto">
          From coastal shores to mountain peaks — discover India with a trusted local guide.
        </p>
      </div>

      {/* Grid: 2 large top, 3 small bottom */}
      <div className="space-y-5 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <DestinationCard dest={DESTINATIONS[0]} tall />
          <DestinationCard dest={DESTINATIONS[1]} tall />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <DestinationCard dest={DESTINATIONS[2]} />
          <DestinationCard dest={DESTINATIONS[3]} />
          <DestinationCard dest={DESTINATIONS[4]} />
        </div>
      </div>

      <div className="text-center">
        <button
          data-testid="destinations-book-btn"
          onClick={onBookNow}
          className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-600/20"
        >
          Book a Guide for Any Destination
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  </section>
);

export default DestinationsSection;

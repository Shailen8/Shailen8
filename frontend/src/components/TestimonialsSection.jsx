import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    role: 'Solo Traveler, Delhi',
    avatar: 'https://images.unsplash.com/photo-1504473114289-43f5e302d6bb?crop=entropy&cs=srgb&fm=jpg&w=200&q=80',
    review: 'Amazing experience! The local guide knew all the hidden spots in Goa — beaches and shacks that I would have never found on my own. Will definitely book again!',
    rating: 5,
    dest: 'Goa',
  },
  {
    name: 'Priya Mehta',
    role: 'Family Traveler, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1724627559332-014d34204f19?crop=entropy&cs=srgb&fm=jpg&w=200&q=80',
    review: 'Traveled to Manali with my family and it was absolutely perfect. The guide was professional, patient with the kids, and the car was super comfortable. 5 stars easily!',
    rating: 5,
    dest: 'Manali',
  },
  {
    name: 'Arjun Patel',
    role: 'Couple Traveler, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1762341529155-9af340f518f5?crop=entropy&cs=srgb&fm=jpg&w=200&q=80',
    review: 'Best way to explore Jaipur! Our guide showed us places we would never have found in any travel guide. The bike tour through the old city was an absolute highlight.',
    rating: 5,
    dest: 'Jaipur',
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials" data-testid="testimonials-section" className="py-24 lg:py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      <div className="text-center mb-14">
        <span className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-3 block">Traveler Stories</span>
        <h2
          className="font-semibold text-slate-900 text-4xl sm:text-5xl mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          What Our <span className="text-sky-600">Travelers Say</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-lg mx-auto">
          Real stories from real travelers who explored India with a trusted local guide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            data-testid={`testimonial-card-${t.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
          >
            {/* Quote icon */}
            <Quote className="w-8 h-8 text-sky-200 mb-4" />

            {/* Stars */}
            <StarRating count={t.rating} />

            {/* Review */}
            <p className="text-slate-600 text-base leading-relaxed mt-4 mb-6 flex-1">
              "{t.review}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-sky-100"
              />
              <div>
                <div className="font-semibold text-slate-900 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {t.name}
                </div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
              <span className="ml-auto text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
                {t.dest}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default TestimonialsSection;

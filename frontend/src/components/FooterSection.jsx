import React from 'react';
import { Compass, Mail, Instagram, Facebook, Twitter, Youtube, MapPin, Phone } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact',      href: '#contact' },
];

const SERVICES = [
  'Local Travel Guides',
  'Bike Tours',
  'Car Tours',
  'Custom Travel Plans',
  'Airport Transfers',
];

const SOCIALS = [
  { Icon: Instagram, href: 'https://instagram.com/travelwithguide', label: 'Instagram' },
  { Icon: Facebook,  href: 'https://facebook.com/travelwithguide',  label: 'Facebook' },
  { Icon: Twitter,   href: 'https://twitter.com/travelwithguide',   label: 'Twitter' },
  { Icon: Youtube,   href: 'https://youtube.com/@travelwithguide',  label: 'YouTube' },
];

const FooterSection = () => (
  <footer id="contact" data-testid="footer-section" className="bg-slate-900 text-slate-300">
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">

      {/* Main grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 bg-sky-600 rounded-xl flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Travel <span className="text-sky-400">With Guide</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Connecting travelers with trusted local guides across India for safe, easy, and unforgettable journeys.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`social-link-${label.toLowerCase()}`}
                aria-label={label}
                className="w-9 h-9 bg-slate-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Icon className="w-4 h-4 text-slate-300 hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                  className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Services</h4>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s} className="text-slate-400 text-sm hover:text-sky-400 transition-colors cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-xs mb-0.5">Email</p>
                <a
                  href="mailto:shailendrabhabar7@gmail.com"
                  data-testid="footer-email-link"
                  className="text-slate-300 hover:text-sky-400 text-sm transition-colors break-all"
                >
                  shailendrabhabar7@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-xs mb-0.5">WhatsApp</p>
                <a
                  href="https://wa.me/"
                  data-testid="footer-whatsapp-link"
                  className="text-slate-300 hover:text-sky-400 text-sm transition-colors"
                >
                  Chat with Us
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-xs mb-0.5">Location</p>
                <span className="text-slate-300 text-sm">India (Pan India Service)</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-sm">
          © 2025 Travel With Guide. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm">
          Founded by <span className="text-sky-400 font-medium">Shailendra Bhabar</span>
        </p>
      </div>

    </div>
  </footer>
);

export default FooterSection;

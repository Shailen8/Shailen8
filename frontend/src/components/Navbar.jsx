import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Contact',      href: '#contact' },
];

const Navbar = ({ onBookNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" data-testid="navbar-logo" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span
            className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Travel <span className={isScrolled ? 'text-sky-600' : 'text-sky-300'}>With Guide</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className={`text-sm font-semibold transition-colors duration-300 hover:text-sky-500 ${
                isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Toggle */}
        <div className="flex items-center gap-3">
          <button
            data-testid="navbar-book-btn"
            onClick={onBookNow}
            className="hidden md:flex items-center gap-1.5 px-5 py-2.5 bg-sky-600 text-white rounded-full text-sm font-semibold hover:bg-sky-700 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-sky-600/25"
          >
            <MapPin className="w-4 h-4" />
            Book Now
          </button>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        data-testid="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-slate-100 px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-700 font-medium py-2.5 border-b border-slate-50 hover:text-sky-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            data-testid="mobile-book-btn"
            onClick={() => { onBookNow(); setMenuOpen(false); }}
            className="w-full mt-3 px-5 py-3 bg-sky-600 text-white rounded-full text-sm font-semibold hover:bg-sky-700 transition-all"
          >
            Book Your Guide Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

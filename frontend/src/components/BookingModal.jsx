import React, { useState } from 'react';
import { X, MapPin, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const DESTINATIONS = ['Goa', 'Manali', 'Jaipur', 'Varanasi', 'Kerala', 'Other'];

const INITIAL = { name: '', email: '', phone: '', destination: '', message: '' };

const BookingModal = ({ onClose }) => {
  const [form, setForm]       = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.destination) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/api/inquiry`, form);
      setSuccess(true);
      toast.success('Booking request sent! We\'ll contact you soon.');
      setTimeout(onClose, 2500);
    } catch {
      toast.error('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-testid="booking-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        data-testid="booking-modal"
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scaleIn"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl px-7 pt-7 pb-4 border-b border-slate-100 z-10">
          <button
            data-testid="booking-modal-close"
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Book Your Guide
              </h3>
              <p className="text-slate-500 text-xs">We'll confirm within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Success State */}
        {success ? (
          <div className="px-7 py-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-xl mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Request Received!
            </h4>
            <p className="text-slate-500 text-sm">
              We'll reach out to <strong>{form.email}</strong> within 24 hours to confirm your booking.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  data-testid="booking-name-input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  data-testid="booking-email-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  data-testid="booking-phone-input"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Destination <span className="text-red-500">*</span>
              </label>
              <select
                data-testid="booking-destination-select"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-white"
              >
                <option value="">Select a destination</option>
                {DESTINATIONS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message / Requirements</label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <textarea
                  data-testid="booking-message-input"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your trip plans, dates, group size..."
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            <button
              data-testid="booking-submit-btn"
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-sky-600/20 mt-2"
            >
              {loading ? 'Sending...' : 'Book Your Guide Now'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;

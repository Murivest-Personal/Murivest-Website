'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

/**
 * Contact Section — Golf Club Lounge Aesthetic
 * Revisions vs. the original:
 *  - Country selector (posts to contact_inquiries with a validated country FK)
 *  - Investment range + property type fields (were in the API but missing here)
 *  - Honeypot anti-spam field
 *  - Server-authoritative page_url / referrer captured automatically
 *  - Marketing consent checkbox (separate from the enquiry itself)
 *  - Success state shows the returned inquiry reference number
 */

const COUNTRIES = [
  { code: 'KE', name: 'Kenya' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'NG', name: 'Nigeria' },
] as const;

const INVESTMENT_RANGES = [
  'Under $50,000',
  '$50,000 – $150,000',
  '$150,000 – $500,000',
  '$500,000 – $1,000,000',
  'Over $1,000,000',
] as const;

const PROPERTY_TYPES = [
  'Residential',
  'Commercial',
  'Land / Development',
  'Mixed-Use',
  'Not sure — seeking guidance',
] as const;

const inputClass =
  'w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300';

const labelClass = 'block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    country: 'KE',
    name: '',
    email: '',
    phone: '',
    company: '',
    investment_range: '',
    property_type: '',
    message: '',
    marketing_consent: false,
    website: '', // honeypot — invisible to humans, bots fill it
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          // page_url / referrer are derived server-side from the Referer
          // header for integrity; we still pass the current page for the
          // client-side fallback path.
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setReference(result.reference || '');
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send your inquiry. Please try again or contact us directly.');
      console.error('Contact form error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Get in Touch
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-[#2C2C2C]">
              Begin Your
              <br />
              <span className="italic text-[#8B7355] font-light">Consultation</span>
            </h2>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-8" />

            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-12">
              We welcome inquiries from qualified investors and institutional allocators.
              All communications are handled with the strictest confidentiality.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">Nairobi Office</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light leading-relaxed">
                    1st Floor, Diamond Plaza<br />4th Avenue Parklands<br />Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">London Office</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light leading-relaxed">
                    12 Berkeley Square<br />Mayfair, London W1J 6BS<br />United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">Telephone</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light">
                    +254 115 277 610 (Nairobi)<br />+44 7864 855742 (London)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">Email</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light">office@murivest.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">Office Hours</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light">
                    Monday – Friday: 08:00 – 18:00 EAT<br />Saturday: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="border border-[#E5E2DC] bg-white p-6 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-16 h-16 text-[#8B7355] mx-auto mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-serif mb-4 text-[#2C2C2C]">Thank You</h3>
                  <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-4">
                    Your inquiry has been received. A senior advisor will contact you within 48 hours.
                  </p>
                  {reference && (
                    <p className="text-[13px] tracking-[0.15em] uppercase text-[#8B7355]">
                      Reference: {reference}
                    </p>
                  )}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Country — the key field: drives reference number, routing,
                      currency and country-specific confirmation messaging */}
                  <div>
                    <label htmlFor="country" className={labelClass}>
                      Country of Interest *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.code}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input
                        id="name" type="text" name="name" required
                        value={formData.name} onChange={handleChange}
                        className={inputClass} placeholder="Your name" maxLength={120}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input
                        id="email" type="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className={inputClass} placeholder="your@email.com" maxLength={254}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input
                        id="phone" type="tel" name="phone"
                        value={formData.phone} onChange={handleChange}
                        className={inputClass} placeholder="+254 700 000 000" maxLength={40}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company / Organization</label>
                      <input
                        id="company" type="text" name="company"
                        value={formData.company} onChange={handleChange}
                        className={inputClass} placeholder="Company name" maxLength={160}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="investment_range" className={labelClass}>Investment Range</label>
                      <select
                        id="investment_range" name="investment_range"
                        value={formData.investment_range} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a range</option>
                        {INVESTMENT_RANGES.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="property_type" className={labelClass}>Property Type</label>
                      <select
                        id="property_type" name="property_type"
                        value={formData.property_type} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a type</option>
                        {PROPERTY_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Message</label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={formData.message} onChange={handleChange}
                      className={`${inputClass} resize-none`} maxLength={5000}
                      placeholder="Please describe your inquiry..."
                    />
                  </div>

                  {/* Marketing consent — deliberately separate from the enquiry.
                      Submitting an enquiry must NOT imply marketing opt-in (UK GDPR / PECR). */}
                  <div className="flex items-start gap-3">
                    <input
                      id="marketing_consent"
                      type="checkbox"
                      name="marketing_consent"
                      checked={formData.marketing_consent}
                      onChange={handleChange}
                      className="mt-1 accent-[#8B7355]"
                    />
                    <label htmlFor="marketing_consent" className="text-[12px] leading-relaxed text-[#5A5A5A]">
                      I would also like to receive Murivest research updates and market news by email.
                      You can unsubscribe at any time.
                    </label>
                  </div>

                  {/* Honeypot: hidden from humans, bots fill it and get silently accepted */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                    <label htmlFor="website">Website</label>
                    <input
                      id="website" type="text" name="website" tabIndex={-1}
                      autoComplete="off" value={formData.website} onChange={handleChange}
                    />
                  </div>

                  <div className="pt-4">
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#0B3D2E] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{isLoading ? 'Sending...' : 'Send Inquiry'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#5A5A5A] italic">
                    * Required fields. All information is held in strict confidence.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';
import { validateContactForm, ContactFormData } from '../utils/ngo-logic.ts';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact-us" className="py-16 md:py-24 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-3">
            <span>Connect & Support</span>
            <span aria-hidden="true">·</span>
            <span>Reach Our Desk</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight mb-4">
            Contact The Sunrise Academy
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Have questions about student admissions, volunteering opportunities, corporate CSR partnerships, or visiting our Behala campus? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${ACADEMY_DATA.brand.phone.replace(/\s+/g, '')}`}
                      className="text-base font-semibold text-stone-900 hover:text-amber-700 transition-colors block"
                    >
                      {ACADEMY_DATA.brand.phone}
                    </a>
                    <span className="text-xs text-stone-700">
                      Alternate: {ACADEMY_DATA.brand.alternatePhone}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200/50">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${ACADEMY_DATA.brand.email}`}
                      className="text-sm sm:text-base font-semibold text-stone-900 hover:text-amber-700 transition-colors block truncate"
                    >
                      {ACADEMY_DATA.brand.email}
                    </a>
                    <a
                      href={`mailto:${ACADEMY_DATA.brand.secondaryEmail}`}
                      className="text-xs text-stone-700 hover:text-stone-900 transition-colors block truncate"
                    >
                      {ACADEMY_DATA.brand.secondaryEmail}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/50">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5">
                      Campus & Office Location
                    </div>
                    <p className="text-sm font-semibold text-stone-900 leading-snug">
                      {ACADEMY_DATA.brand.address}
                    </p>
                    <span className="text-xs text-stone-700">
                      Near Diamond Harbour Road, South Kolkata
                    </span>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-0.5">
                      Office Hours
                    </div>
                    <p className="text-xs text-stone-800 font-medium">
                      {ACADEMY_DATA.brand.visitingHours}
                    </p>
                    <span className="text-xs text-stone-700">
                      Sunday: Closed (Volunteer coaching by appointment)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Visit Card */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-xs text-stone-700">
              <span className="font-bold text-amber-900 block mb-1">Open Door Policy for Donors & Visitors</span>
              We warmly invite sponsors, parents, and well-wishers to tour our classrooms and computer lab during open hours to observe classes and interact with our teachers.
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-xs">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-8">
              Fill out the details below and our coordinator will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-emerald-950 mb-2">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto mb-6 leading-relaxed">
                  Your message has been safely received. A member of The Sunrise Academy team will reach out to you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Mukherjee"
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                    } focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ananya@example.com"
                      className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                      } focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98301 23456"
                      className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                      } focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How would you like to partner with or support The Sunrise Academy?"
                    className={`w-full px-4 py-2.5 rounded-lg text-sm bg-white border ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                    } focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors resize-y`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-xs transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

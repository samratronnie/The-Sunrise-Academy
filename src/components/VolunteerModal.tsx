import React, { useState } from 'react';
import { X, Users, CheckCircle2, HeartHandshake, AlertCircle } from 'lucide-react';
import { validateVolunteerForm, VolunteerFormData } from '../utils/ngo-logic.ts';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    name: '',
    email: '',
    phone: '',
    area: '',
    availability: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    const result = validateVolunteerForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      area: '',
      availability: '',
      notes: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="volunteer-dialog-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close volunteer modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 animate-in fade-in duration-200">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Welcome to the WBYEF Family, {formData.name}!
            </h3>

            <p className="text-sm text-stone-600 mb-6 leading-relaxed">
              We have received your volunteer application for <strong>{formData.area}</strong>. Our youth volunteer coordinator will reach out to you within 24–48 hours for orientation and district camp alignment.
            </p>

            <div className="p-4 rounded-xl bg-amber-50 text-xs text-stone-700 border border-amber-200/80 mb-6 text-left">
              <span className="font-bold text-amber-900 block mb-1">What to expect next:</span>
              <ul className="list-disc pl-4 space-y-1 text-stone-600">
                <li>Brief introductory call with our District Volunteer Lead</li>
                <li>Digital or in-person orientation to WBYEF youth programs</li>
                <li>Assignment to local rural career camps or online mentorship</li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              <Users className="w-4 h-4 text-amber-700" />
              <span>Join As A Volunteer · WBYEF</span>
            </div>

            <h3 id="volunteer-dialog-title" className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Become a Volunteer
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Contribute your time, skills, and expertise to empower youth across West Bengal. One volunteer can transform a student's life.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Soumen Roy"
                  className={`w-full px-3.5 py-2 rounded-lg text-sm bg-white border ${
                    errors.name ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                  } focus:outline-none focus:ring-1 focus:ring-amber-600`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. soumen@example.com"
                    className={`w-full px-3.5 py-2 rounded-lg text-sm bg-white border ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                    } focus:outline-none focus:ring-1 focus:ring-amber-600`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98301 23456"
                    className={`w-full px-3.5 py-2 rounded-lg text-sm bg-white border ${
                      errors.phone ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                    } focus:outline-none focus:ring-1 focus:ring-amber-600`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Volunteer Activity / Area <span className="text-red-500">*</span>
                </label>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2 rounded-lg text-sm bg-white border ${
                    errors.area ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                  } focus:outline-none focus:ring-1 focus:ring-amber-600`}
                >
                  <option value="">Select an activity...</option>
                  <option value="Teaching & Mentoring Underprivileged Students">Teaching & Mentoring</option>
                  <option value="Career Guidance & Higher Education Advice">Career Guidance</option>
                  <option value="Community & Household Surveys">Community Surveys</option>
                  <option value="Rural Outreach & Village Career Camps">Rural Outreach</option>
                  <option value="Digital Awareness & Internet Safety">Digital Awareness</option>
                  <option value="Event Management & Youth Conferences">Event Management</option>
                  <option value="Social Campaigns & Public Drives">Social Campaigns</option>
                  <option value="Youth Leadership & Peer Mentoring">Youth Leadership Activities</option>
                </select>
                {errors.area && <p className="text-xs text-red-600 mt-1">{errors.area}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Availability <span className="text-red-500">*</span>
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2 rounded-lg text-sm bg-white border ${
                    errors.availability ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                  } focus:outline-none focus:ring-1 focus:ring-amber-600`}
                >
                  <option value="">Select your availability...</option>
                  <option value="Weekends (Saturday or Sunday)">Weekends (Saturday or Sunday)</option>
                  <option value="Weekday Evenings (4 PM - 6:30 PM)">Weekday Evenings (4 PM - 6:30 PM)</option>
                  <option value="Monthly Workshops / Guest Seminars">Monthly Workshops / Guest Seminars</option>
                  <option value="Remote Digital Mentoring">Remote Digital Mentoring</option>
                </select>
                {errors.availability && <p className="text-xs text-red-600 mt-1">{errors.availability}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Short Note / Motivation
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us a little about your background or why you'd like to volunteer..."
                  className="w-full px-3.5 py-2 rounded-lg text-sm bg-white border border-stone-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <HeartHandshake className="w-4 h-4 text-white" />
                    <span>Submit Volunteer Application</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

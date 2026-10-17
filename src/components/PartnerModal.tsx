import React, { useState } from 'react';
import { X, Building2, CheckCircle2, Handshake, AlertCircle } from 'lucide-react';
import { validatePartnerForm, PartnerFormData } from '../utils/ngo-logic.ts';
import { WBYEF_DATA } from '../data/academyData.ts';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<PartnerFormData>({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnerType: '',
    collaborationInterest: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    const result = validatePartnerForm(formData);
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
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      partnerType: '',
      collaborationInterest: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-dialog-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close partnership modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 animate-in fade-in duration-200">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Partnership Inquiry Received!
            </h3>

            <p className="text-sm text-stone-600 mb-6 leading-relaxed">
              Thank you, <strong>{formData.contactPerson}</strong>. We are thrilled at the prospect of collaborating with <strong>{formData.organizationName}</strong>. Our institutional partnership lead will connect with you within 24–48 hours.
            </p>

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
              <Handshake className="w-4 h-4 text-amber-700" />
              <span>Institutional Collaboration · WBYEF</span>
            </div>

            <h3 id="partner-dialog-title" className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Partner With Us
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Collaborate with WBYEF to bring career camps, skill development, and scholarships to youth across West Bengal.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Organization / Institution Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  placeholder="e.g. Calcutta University NSS Unit / TCS CSR"
                  className={`w-full px-3.5 py-2 rounded-lg text-sm bg-white border ${
                    errors.organizationName ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                  } focus:outline-none focus:ring-1 focus:ring-amber-600`}
                />
                {errors.organizationName && <p className="text-xs text-red-600 mt-1">{errors.organizationName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Contact Person & Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="e.g. Prof. Anirban Roy, Head of Student Affairs"
                  className={`w-full px-3.5 py-2 rounded-lg text-sm bg-white border ${
                    errors.contactPerson ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                  } focus:outline-none focus:ring-1 focus:ring-amber-600`}
                />
                {errors.contactPerson && <p className="text-xs text-red-600 mt-1">{errors.contactPerson}</p>}
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
                    placeholder="e.g. contact@domain.edu"
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
                  Organization Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2 rounded-lg text-sm bg-white border ${
                    errors.partnerType ? 'border-red-500 bg-red-50/20' : 'border-stone-300 focus:border-amber-600'
                  } focus:outline-none focus:ring-1 focus:ring-amber-600`}
                >
                  <option value="">Select entity type...</option>
                  {WBYEF_DATA.partners.partnerTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.partnerType && <p className="text-xs text-red-600 mt-1">{errors.partnerType}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Collaboration Scope / Objectives
                </label>
                <textarea
                  name="collaborationInterest"
                  rows={2}
                  value={formData.collaborationInterest}
                  onChange={handleChange}
                  placeholder="How would you like to collaborate with WBYEF (e.g. host a rural camp, offer internships, co-sponsor digital kits)?"
                  className="w-full px-3.5 py-2 rounded-lg text-sm bg-white border border-stone-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Handshake className="w-4 h-4 text-white" />
                    <span>Submit Partnership Proposal</span>
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

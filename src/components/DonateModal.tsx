import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, ArrowRight, Download, Printer, QrCode } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData.ts';
import { calculateDonationImpact, formatINR } from '../utils/ngo-logic.ts';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 1000,
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [donorPhone, setDonorPhone] = useState('');

  const [isProcessing, setIsProcessing] = useState(false);
  const [receiptData, setReceiptData] = useState<{
    txnId: string;
    date: string;
    name: string;
    amount: number;
    frequency: string;
  } | null>(null);

  if (!isOpen) return null;

  const impact = calculateDonationImpact(amount);

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorEmail.trim()) {
      alert('Please provide your name and email for the 80G tax receipt.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setReceiptData({
        txnId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        name: donorName,
        amount: amount,
        frequency: frequency === 'monthly' ? 'Monthly Sustainer' : 'One-Time Contribution',
      });
    }, 700);
  };

  const handleResetAndClose = () => {
    setReceiptData(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-dialog-title"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Close donation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {receiptData ? (
          /* Receipt View */
          <div className="text-center py-4 animate-in fade-in duration-200">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Section 80G Tax Exemption Receipt</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
              Thank You for Your Generosity!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Your donation directly empowers children at The Sunrise Academy.
            </p>

            {/* Formal Receipt Card */}
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 text-left text-xs text-stone-700 space-y-2 mb-6">
              <div className="flex justify-between border-b border-stone-200/80 pb-2">
                <span className="font-semibold text-stone-900">Receipt Ref:</span>
                <span className="font-mono text-stone-700 font-bold">{receiptData.txnId}</span>
              </div>
              <div className="flex justify-between">
                <span>Donor Name:</span>
                <span className="font-semibold text-stone-900">{receiptData.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Contribution Amount:</span>
                <span className="font-bold text-amber-900 text-sm">{formatINR(receiptData.amount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Contribution Type:</span>
                <span className="capitalize">{receiptData.frequency}</span>
              </div>
              <div className="flex justify-between">
                <span>Date of Issue:</span>
                <span>{receiptData.date}</span>
              </div>
              <div className="flex justify-between">
                <span>Institution:</span>
                <span className="font-medium text-stone-900">The Sunrise Academy (Kolkata)</span>
              </div>
              <div className="flex justify-between border-t border-stone-200/80 pt-2 text-[11px] text-stone-700">
                <span>Tax Exemption:</span>
                <span>Eligible under Sec 80G ({ACADEMY_DATA.brand.registrationNumber})</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF Receipt</span>
              </button>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Donation Form */
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              <Heart className="w-4 h-4 text-amber-700 fill-amber-700/20" />
              <span>Support Our Mission · The Sunrise Academy</span>
            </div>

            <h3 id="donate-dialog-title" className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Transform a Child’s Life Today
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mb-6">
              Your gift funds high-quality education, computer literacy, nutritious meals, and school kits for underprivileged children in Kolkata.
            </p>

            {/* Frequency Selector */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setFrequency('one-time')}
                className={`py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  frequency === 'one-time'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                One-Time Gift
              </button>
              <button
                type="button"
                onClick={() => setFrequency('monthly')}
                className={`py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  frequency === 'monthly'
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Monthly Sustainer (Recommended)
              </button>
            </div>

            {/* Predefined Amounts */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                Select Amount (INR)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {[500, 1000, 2500, 5000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAmount(amt)}
                    className={`py-2.5 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      amount === amt
                        ? 'border-amber-600 bg-amber-50/80 text-amber-900'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    {formatINR(amt)}
                  </button>
                ))}
              </div>

              {/* Custom Amount input */}
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-stone-500 font-bold text-sm">₹</span>
                <input
                  type="number"
                  min="100"
                  step="100"
                  value={amount || ''}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  placeholder="Or enter custom amount"
                  className="w-full pl-8 pr-4 py-2.5 rounded-lg text-sm bg-white border border-stone-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 font-semibold"
                />
              </div>
            </div>

            {/* Dynamic Real Impact Breakdown */}
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 mb-6 text-xs text-stone-800">
              <span className="font-bold text-amber-900 block mb-1">Your Impact with {formatINR(amount)}:</span>
              <p className="text-stone-700">{impact.impactSummary}</p>
            </div>

            {/* Donor Information */}
            <form onSubmit={handleDonateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Full Name (for 80G Receipt) *
                </label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g. Rahul Sen"
                  className="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm bg-white border border-stone-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm bg-white border border-stone-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    PAN Card (Optional for 80G)
                  </label>
                  <input
                    type="text"
                    value={donorPan}
                    onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                    placeholder="ABCDE1234F"
                    className="w-full px-3.5 py-2 rounded-lg text-xs sm:text-sm bg-white border border-stone-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 uppercase"
                  />
                </div>
              </div>

              {/* Payment Method selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Payment Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'upi', label: 'UPI / QR' },
                    { id: 'card', label: 'Debit / Credit' },
                    { id: 'netbanking', label: 'Net Banking' },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setPaymentMethod(mode.id as any)}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                        paymentMethod === mode.id
                          ? 'border-amber-600 bg-amber-50 text-amber-900 font-semibold'
                          : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {isProcessing ? (
                  <span>Processing Secure Donation...</span>
                ) : (
                  <>
                    <Heart className="w-4 h-4 fill-white/20 text-white" />
                    <span>Complete {formatINR(amount)} Donation</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-700 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>256-bit Encrypted · Tax Deductible under Sec 80G</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

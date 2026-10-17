/**
 * Pure business logic for The Sunrise Academy NGO
 * Decoupled from UI for testing and high reliability.
 */

export interface DonationImpact {
  studentsSupportedMonths: number;
  mealsProvided: number;
  booksSupplied: number;
  digitalLabHours: number;
  impactSummary: string;
}

export function calculateDonationImpact(amountInInr: number): DonationImpact {
  const safeAmount = Math.max(0, Number(amountInInr) || 0);

  const studentsSupportedMonths = Math.floor(safeAmount / 1000);
  const mealsProvided = Math.floor(safeAmount / 50);
  const booksSupplied = Math.floor(safeAmount / 200);
  const digitalLabHours = Math.floor(safeAmount / 150);

  let impactSummary = 'Every rupee helps empower an underprivileged child.';
  if (safeAmount >= 5000) {
    impactSummary = `Funds 5 months of comprehensive schooling, books, and nutrition for a student.`;
  } else if (safeAmount >= 2500) {
    impactSummary = `Covers school kits and nutritious meals for 2 children for a full term.`;
  } else if (safeAmount >= 1000) {
    impactSummary = `Sponsors 1 child's educational materials, uniform, and classroom support.`;
  } else if (safeAmount >= 500) {
    impactSummary = `Provides 10 nutritious meals and essential study stationery.`;
  }

  return {
    studentsSupportedMonths,
    mealsProvided,
    booksSupplied,
    digitalLabHours,
    impactSummary,
  };
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
  email?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const trimmedName = (data.name || '').trim();
  if (!trimmedName) {
    errors.name = 'Full name is required.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const cleanedPhone = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!cleanedPhone) {
    errors.phone = 'Phone number is required.';
  } else if (cleanedPhone.length < 7 || !/^\d+$/.test(cleanedPhone)) {
    errors.phone = 'Please provide a valid phone number with at least 7 digits.';
  }

  const trimmedMessage = (data.message || '').trim();
  if (!trimmedMessage) {
    errors.message = 'Please enter your message.';
  } else if (trimmedMessage.length < 5) {
    errors.message = 'Message must be at least 5 characters.';
  }

  if (data.email && data.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  area: string;
  availability: string;
  notes?: string;
}

export function validateVolunteerForm(data: VolunteerFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name?.trim()) {
    errors.name = 'Full name is required.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email?.trim() || !emailRegex.test(data.email.trim())) {
    errors.email = 'Valid email address is required.';
  }
  const cleanedPhone = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!cleanedPhone || cleanedPhone.length < 7) {
    errors.phone = 'Valid phone number is required.';
  }
  if (!data.area || data.area === '') {
    errors.area = 'Please select a volunteer area.';
  }
  if (!data.availability || data.availability === '') {
    errors.availability = 'Please select your availability.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface PartnerFormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  partnerType: string;
  collaborationInterest: string;
}

export function validatePartnerForm(data: PartnerFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.organizationName?.trim()) {
    errors.organizationName = 'Organization / Institution name is required.';
  }
  if (!data.contactPerson?.trim()) {
    errors.contactPerson = 'Contact person name is required.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email?.trim() || !emailRegex.test(data.email.trim())) {
    errors.email = 'Valid email address is required.';
  }
  const cleanedPhone = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!cleanedPhone || cleanedPhone.length < 7) {
    errors.phone = 'Valid phone number is required.';
  }
  if (!data.partnerType || data.partnerType === '') {
    errors.partnerType = 'Please select your organization type.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

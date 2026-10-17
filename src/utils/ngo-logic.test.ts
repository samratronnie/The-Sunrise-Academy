import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateDonationImpact,
  validateContactForm,
  validateVolunteerForm,
  validatePartnerForm,
  formatINR,
} from './ngo-logic.ts';

test('validatePartnerForm checks required organization and contact info', () => {
  const valid = validatePartnerForm({
    organizationName: 'Jadavpur University Innovation Club',
    contactPerson: 'Dr. Debasish Roy',
    email: 'debasish@univ.edu.in',
    phone: '9830198301',
    partnerType: 'Universities',
    collaborationInterest: 'Student internship and rural youth mentorship',
  });
  assert.equal(valid.isValid, true);

  const invalid = validatePartnerForm({
    organizationName: '',
    contactPerson: '',
    email: 'not-an-email',
    phone: '12',
    partnerType: '',
    collaborationInterest: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.organizationName);
  assert.ok(invalid.errors.contactPerson);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.partnerType);
});

test('formatINR formats currency strings properly', () => {
  const formatted = formatINR(1000);
  assert.ok(formatted.includes('1,000'));
});

test('calculateDonationImpact calculates accurately for ₹1,000', () => {
  const impact = calculateDonationImpact(1000);
  assert.equal(impact.studentsSupportedMonths, 1);
  assert.equal(impact.mealsProvided, 20);
  assert.equal(impact.booksSupplied, 5);
  assert.equal(impact.digitalLabHours, 6);
  assert.match(impact.impactSummary, /Sponsors 1 child/);
});

test('calculateDonationImpact handles 0 and negative inputs gracefully', () => {
  const zeroImpact = calculateDonationImpact(0);
  assert.equal(zeroImpact.studentsSupportedMonths, 0);
  assert.equal(zeroImpact.mealsProvided, 0);

  const negImpact = calculateDonationImpact(-500);
  assert.equal(negImpact.studentsSupportedMonths, 0);
  assert.equal(negImpact.mealsProvided, 0);
});

test('validateContactForm rejects empty form', () => {
  const result = validateContactForm({
    name: '',
    phone: '',
    message: '',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid data without email', () => {
  const result = validateContactForm({
    name: 'Anjali Sen',
    phone: '+91 7980344722',
    message: 'I would like to inquire about enrolling a student from our community.',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactForm rejects invalid email if provided', () => {
  const result = validateContactForm({
    name: 'Anjali Sen',
    phone: '+91 7980344722',
    message: 'I would like to inquire about enrolling a student from our community.',
    email: 'invalid-email',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email);
});

test('validateVolunteerForm validates required fields', () => {
  const valid = validateVolunteerForm({
    name: 'Vikram Roy',
    email: 'vikram@example.org',
    phone: '9830123456',
    area: 'Teaching & Mentorship',
    availability: 'Weekends',
  });
  assert.equal(valid.isValid, true);

  const invalid = validateVolunteerForm({
    name: '',
    email: 'bad-email',
    phone: '123',
    area: '',
    availability: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.area);
  assert.ok(invalid.errors.availability);
});

test('formatINR formats currency strings properly', () => {
  const formatted = formatINR(1000);
  assert.ok(formatted.includes('1,000'));
});

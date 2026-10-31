import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

type Fields = { name: string; email: string; phone: string };
type FieldErrors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: '', email: '', phone: '' };

// Accepts spaces, dashes, dots and brackets while typing; stores digits with an optional leading +
const normalizePhone = (phone: string) => phone.trim().replace(/[\s\-().]/g, '');

const validate = ({ name, email, phone }: Fields): FieldErrors => {
  const errors: FieldErrors = {};
  const trimmedName = name.trim();

  if (trimmedName.length < 2 || trimmedName.length > 100) {
    errors.name = 'Please enter your name (2–100 characters).';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!/^\+?[0-9]{10,15}$/.test(normalizePhone(phone))) {
    errors.phone = 'Please enter a valid mobile number (10–15 digits, optional + country code).';
  }
  return errors;
};

const NewsletterForm = () => {
  const [formData, setFormData] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: normalizePhone(formData.phone),
          source: 'newsletter',
        }]);

      if (error) {
        // 23505 = unique_violation on newsletter_subscribers.email
        if (error.code === '23505') {
          setStatus('duplicate');
          return;
        }
        throw error;
      }

      setStatus('success');
      setFormData(EMPTY);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
    }
  };

  const inputClass = (field: keyof Fields) =>
    `w-full px-4 py-2 bg-space-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm ${
      errors[field] ? 'border-red-500' : 'border-space-700'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-3">
      <div>
        <label htmlFor="newsletter_name" className="sr-only">Name</label>
        <input
          type="text"
          id="newsletter_name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'newsletter_name_error' : undefined}
          className={inputClass('name')}
        />
        {errors.name && <p id="newsletter_name_error" className="mt-1 text-red-500 text-xs">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="newsletter_email" className="sr-only">Email address</label>
        <input
          type="email"
          id="newsletter_email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'newsletter_email_error' : undefined}
          className={inputClass('email')}
        />
        {errors.email && <p id="newsletter_email_error" className="mt-1 text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="newsletter_phone" className="sr-only">Mobile number</label>
        <input
          type="tel"
          id="newsletter_phone"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your mobile number"
          required
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'newsletter_phone_error' : undefined}
          className={inputClass('phone')}
        />
        {errors.phone && <p id="newsletter_phone_error" className="mt-1 text-red-500 text-xs">{errors.phone}</p>}
      </div>

      <button
        type="submit"
        className={`btn-primary py-2 text-sm ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <p className="text-green-500 text-sm">Thanks! Your details have been saved to the ASRL newsletter list.</p>
        )}

        {status === 'duplicate' && (
          <p className="text-yellow-400 text-sm">This email address is already subscribed.</p>
        )}

        {status === 'error' && (
          <p className="text-red-500 text-sm">Something went wrong and your details weren't saved. Please try again.</p>
        )}
      </div>
    </form>
  );
};

export default NewsletterForm

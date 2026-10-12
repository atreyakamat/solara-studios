import React, { useState, useEffect } from 'react';
import { submitEnquiry, validateEnquiry } from '../../lib/enquiryApi';
import type { EnquiryPayload } from '../../lib/enquiryApi';
import { trackEvent } from '../../lib/analytics';

interface AgencyContactProps {
  initialService?: string;
}

export const AgencyContact: React.FC<AgencyContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<EnquiryPayload>({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Website design and development',
    budget: '$1,500–$3,000',
    timeline: 'Within two weeks',
    description: '',
    honeypot: '',
    sourceCta: 'Agency Contact Section',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const serviceOptions = [
    'Website design and development',
    'Landing page',
    'SEO and website optimization',
    'White-label agency development',
    'Other',
  ];

  const budgetOptions = [
    'Under $750',
    '$750–$1,500',
    '$1,500–$3,000',
    '$3,000–$5,000',
    '$5,000+',
    'Not sure yet',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('enquiry_form_started', { category: 'contact' });

    const validationErrors = validateEnquiry(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      trackEvent('enquiry_form_validation_failure', { category: 'contact' });
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`agency-field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const result = await submitEnquiry(formData);
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        trackEvent('enquiry_form_submitted', { label: formData.service });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message);
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage('Network connectivity issue. Please try again or reach out directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 sm:py-32 bg-cream-grid text-ink border-b border-borderLine relative"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Supporting Copy, Founder Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-deepOlive text-lime font-mono text-xs uppercase tracking-widest font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span>Get In Touch</span>
            </div>

            <h2
              id="contact-title"
              className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-ink uppercase leading-none mb-6"
            >
              Let&apos;s talk.
            </h2>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed mb-8">
              Tell us what you&apos;re building, what needs to improve, or where you need technical support. We&apos;ll review your requirements and work out the next step.
            </p>

            {/* Direct Founder Information Card */}
            <div className="p-6 rounded-2xl bg-white border border-borderLine shadow-subtle space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-borderLine">
                <span className="text-muted uppercase tracking-wider">FOUNDER &amp; LEAD</span>
                <span className="text-ink font-bold">Atreya Kamat</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-borderLine">
                <span className="text-muted uppercase tracking-wider">PORTFOLIO</span>
                <a
                  href="https://atreyakamat.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink font-bold hover:text-lime-muted underline"
                >
                  atreyakamat.dev ↗
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted uppercase tracking-wider">DELIVERY SPRINT</span>
                <span className="text-ink font-bold">7–10 Business Days</span>
              </div>
            </div>

            <div className="mt-8 font-sans text-xs text-muted leading-relaxed">
              Every project enquiry is reviewed personally. No unsolicited marketing emails, no data selling, and zero obligations.
            </div>
          </div>

          {/* Right Column: Complete Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-borderLine shadow-elevated">
              
              {submitStatus === 'success' ? (
                <div role="alert" className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-lime/20 border-2 border-lime text-ink mx-auto flex items-center justify-center font-bold text-2xl">
                    ✓
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
                    Message Dispatched Successfully
                  </h3>
                  <p className="font-sans text-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    {statusMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData((prev) => ({ ...prev, description: '' }));
                    }}
                    className="mt-4 px-6 py-3 rounded-full bg-ink text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-deepOlive hover:text-lime transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {submitStatus === 'error' && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2"
                    >
                      <span className="font-bold">⚠</span>
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {/* Honeypot Spam Protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="agency-hp">Do not fill this</label>
                    <input
                      type="text"
                      id="agency-hp"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="agency-field-name"
                        className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                      >
                        Your Name <span className="text-lime-muted">*</span>
                      </label>
                      <input
                        type="text"
                        id="agency-field-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Elena Vance"
                        aria-invalid={!!errors.name}
                        className={`w-full px-4 py-3 rounded-xl bg-cream border text-ink text-sm font-sans transition-colors ${
                          errors.name ? 'border-red-500' : 'border-borderLine focus:border-ink'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 font-mono text-[11px] text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="agency-field-email"
                        className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                      >
                        Business Email <span className="text-lime-muted">*</span>
                      </label>
                      <input
                        type="email"
                        id="agency-field-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="elena@company.com"
                        aria-invalid={!!errors.email}
                        className={`w-full px-4 py-3 rounded-xl bg-cream border text-ink text-sm font-sans transition-colors ${
                          errors.email ? 'border-red-500' : 'border-borderLine focus:border-ink'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 font-mono text-[11px] text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="agency-field-company"
                      className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                    >
                      Company or Business Name <span className="text-lime-muted">*</span>
                    </label>
                    <input
                      type="text"
                      id="agency-field-company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Studio Drift / Vance Capital"
                      aria-invalid={!!errors.company}
                      className={`w-full px-4 py-3 rounded-xl bg-cream border text-ink text-sm font-sans transition-colors ${
                        errors.company ? 'border-red-500' : 'border-borderLine focus:border-ink'
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 font-mono text-[11px] text-red-600">{errors.company}</p>
                    )}
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="agency-field-service"
                        className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                      >
                        Service Required <span className="text-lime-muted">*</span>
                      </label>
                      <select
                        id="agency-field-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream border border-borderLine text-ink text-sm font-sans focus:border-ink"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="agency-field-budget"
                        className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                      >
                        Budget Range (USD) <span className="text-lime-muted">*</span>
                      </label>
                      <select
                        id="agency-field-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream border border-borderLine text-ink text-sm font-sans focus:border-ink"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message / Description */}
                  <div>
                    <label
                      htmlFor="agency-field-description"
                      className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                    >
                      Project Description <span className="text-lime-muted">*</span>
                    </label>
                    <textarea
                      id="agency-field-description"
                      name="description"
                      rows={4}
                      required
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your current business challenge, required deliverables, timeline, and goals..."
                      aria-invalid={!!errors.description}
                      className={`w-full px-4 py-3 rounded-xl bg-cream border text-ink text-sm font-sans transition-colors ${
                        errors.description ? 'border-red-500' : 'border-borderLine focus:border-ink'
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1 font-mono text-[11px] text-red-600">{errors.description}</p>
                    )}
                  </div>

                  {/* Submit Button & Privacy */}
                  <div className="pt-4 border-t border-borderLine flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="font-sans text-xs text-muted leading-relaxed max-w-xs">
                      By submitting, you agree to our{' '}
                      <a href="/privacy" className="text-ink underline hover:text-lime-muted">
                        Privacy Policy
                      </a>.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-lime text-ink font-heading font-bold text-sm uppercase tracking-wider transition-all duration-200 hover:bg-lime-light hover:shadow-lime-pill active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-ink/20 border-t-ink rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Send message</span>
                          <span>↗</span>
                        </span>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyContact;

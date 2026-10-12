import React, { useState, useEffect } from 'react';
import { submitEnquiry, validateEnquiry } from '../../lib/enquiryApi';
import type { EnquiryPayload } from '../../lib/enquiryApi';
import { trackEvent } from '../../lib/analytics';

interface EnquirySectionProps {
  initialService?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<EnquiryPayload>({
    name: '',
    email: '',
    company: '',
    service: initialService || 'Website design and development',
    budget: '$1,500–$3,000',
    timeline: 'Within two weeks',
    description: '',
    honeypot: '',
    sourceCta: 'Website Enquiry Form',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Synchronize when initialService prop updates from other CTA clicks on page
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Extract UTM parameters on client mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setFormData((prev) => ({
        ...prev,
        utmSource: params.get('utm_source') || undefined,
        utmMedium: params.get('utm_medium') || undefined,
        utmCampaign: params.get('utm_campaign') || undefined,
      }));
    }
  }, []);

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

  const timelineOptions = [
    'As soon as possible',
    'Within two weeks',
    'Within one month',
    'Flexible',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear inline error on change
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
    trackEvent('enquiry_form_started', { category: 'form' });

    const validationErrors = validateEnquiry(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      trackEvent('enquiry_form_validation_failure', { category: 'form' });
      // Scroll first invalid field into view
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
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
        // Reset non-essential fields, keeping customer oriented
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
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24 border-b border-borderLight bg-porcelain"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Conversion Pitch Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-vermilion font-bold uppercase tracking-widest mb-2">
            08 // START A PROJECT
          </div>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight mb-4"
          >
            Have something worth building?
          </h2>
          <p className="text-muted text-base sm:text-lg font-sans leading-relaxed">
            Tell us what you're trying to achieve. We'll review the requirements and work out whether Solara Studios is the right fit. Every submission is reviewed directly by founder Atreya Kamat.
          </p>
        </div>

        {/* Enquiry Form Container */}
        <div className="border border-borderLight bg-white shadow-subtle p-6 sm:p-10 lg:p-12 max-w-4xl">
          
          {submitStatus === 'success' ? (
            <div
              role="alert"
              className="p-8 bg-porcelain border border-ink/20 text-center space-y-4"
            >
              <div className="w-12 h-12 bg-aqua/20 border border-aqua text-ink mx-auto rounded-full flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <h3 className="font-serif text-3xl text-ink font-bold">
                Project Enquiry Received
              </h3>
              <p className="text-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-sans">
                {statusMessage}
              </p>
              <div className="pt-4 font-mono text-xs text-muted">
                Reference: {formData.company} · {formData.service}
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitStatus('idle');
                    setFormData((prev) => ({
                      ...prev,
                      description: '',
                    }));
                  }}
                  className="btn-solara-secondary text-xs"
                >
                  Submit Another Project Scope
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              
              {/* Submission error alert if any */}
              {submitStatus === 'error' && (
                <div
                  role="alert"
                  className="p-4 bg-vermilion/10 border border-vermilion text-vermilion text-xs sm:text-sm font-sans flex items-start gap-2"
                >
                  <span className="font-bold">⚠</span>
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Honeypot anti-spam trap (invisible to screen readers & sighted users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-hp">Leave this empty</label>
                <input
                  type="text"
                  id="website-hp"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Row 1: Name and Business Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="field-name"
                    className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                  >
                    Your Name <span className="text-vermilion">*</span>
                  </label>
                  <input
                    type="text"
                    id="field-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Elena Vance"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    className={`w-full px-4 py-3 bg-porcelain border text-ink text-sm font-sans rounded-none transition-colors ${
                      errors.name ? 'border-vermilion focus:border-vermilion' : 'border-borderLight focus:border-ink'
                    }`}
                  />
                  {errors.name && (
                    <p id="error-name" className="mt-1.5 font-mono text-[11px] text-vermilion">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="field-email"
                    className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                  >
                    Business Email <span className="text-vermilion">*</span>
                  </label>
                  <input
                    type="email"
                    id="field-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="elena@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className={`w-full px-4 py-3 bg-porcelain border text-ink text-sm font-sans rounded-none transition-colors ${
                      errors.email ? 'border-vermilion focus:border-vermilion' : 'border-borderLight focus:border-ink'
                    }`}
                  />
                  {errors.email && (
                    <p id="error-email" className="mt-1.5 font-mono text-[11px] text-vermilion">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Company or Business Name */}
              <div>
                <label
                  htmlFor="field-company"
                  className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                >
                  Company or Business Name <span className="text-vermilion">*</span>
                </label>
                <input
                  type="text"
                  id="field-company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Vance Capital / Studio Drift"
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? 'error-company' : undefined}
                  className={`w-full px-4 py-3 bg-porcelain border text-ink text-sm font-sans rounded-none transition-colors ${
                    errors.company ? 'border-vermilion focus:border-vermilion' : 'border-borderLight focus:border-ink'
                  }`}
                />
                {errors.company && (
                  <p id="error-company" className="mt-1.5 font-mono text-[11px] text-vermilion">
                    {errors.company}
                  </p>
                )}
              </div>

              {/* Service Required (Pill Selector) */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2">
                  Service Required <span className="text-vermilion">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.service === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, service: opt }));
                          if (errors.service) {
                            setErrors((prev) => {
                              const next = { ...prev };
                              delete next.service;
                              return next;
                            });
                          }
                        }}
                        className={`text-left p-3 border font-sans text-xs sm:text-sm transition-all ${
                          isSelected
                            ? 'border-ink bg-ink text-white font-semibold'
                            : 'border-borderLight bg-porcelain text-ink hover:border-ink/50'
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          <span>{opt}</span>
                          {isSelected && <span className="text-aqua ml-1 font-bold">✓</span>}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.service && (
                  <p className="mt-1.5 font-mono text-[11px] text-vermilion">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Budget Range (Pill Selector) */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2">
                  Estimated Budget Range (USD) <span className="text-vermilion">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {budgetOptions.map((opt) => {
                    const isSelected = formData.budget === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, budget: opt }))}
                        className={`p-2.5 text-center border font-mono text-xs transition-all ${
                          isSelected
                            ? 'border-ink bg-ink text-white font-bold'
                            : 'border-borderLight bg-porcelain text-ink hover:border-ink/50'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desired Timeline (Pill Selector) */}
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2">
                  Desired Timeline <span className="text-vermilion">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timelineOptions.map((opt) => {
                    const isSelected = formData.timeline === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, timeline: opt }))}
                        className={`p-2.5 text-center border font-mono text-xs transition-all ${
                          isSelected
                            ? 'border-ink bg-ink text-white font-bold'
                            : 'border-borderLight bg-porcelain text-ink hover:border-ink/50'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label
                  htmlFor="field-description"
                  className="block font-mono text-xs uppercase tracking-wider text-ink font-bold mb-2"
                >
                  Project Details &amp; Objectives <span className="text-vermilion">*</span>
                </label>
                <textarea
                  id="field-description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your business, current website or challenge, target deliverables, and any relevant links..."
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? 'error-description' : undefined}
                  className={`w-full px-4 py-3 bg-porcelain border text-ink text-sm font-sans rounded-none transition-colors ${
                    errors.description ? 'border-vermilion focus:border-vermilion' : 'border-borderLight focus:border-ink'
                  }`}
                />
                {errors.description && (
                  <p id="error-description" className="mt-1.5 font-mono text-[11px] text-vermilion">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Privacy Notice and Submission Action */}
              <div className="pt-4 border-t border-borderLight flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <p className="font-sans text-xs text-muted max-w-sm leading-relaxed">
                  We respect your privacy. Details submitted are used solely to evaluate your scope and respond to your enquiry. Read our{' '}
                  <a href="/privacy" className="text-ink underline hover:text-vermilion">
                    Privacy Policy
                  </a>.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-solara-primary py-3.5 px-8 text-sm disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending enquiry...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Submit Project Enquiry</span>
                      <span className="text-aqua" aria-hidden="true">→</span>
                    </span>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

export default EnquirySection;

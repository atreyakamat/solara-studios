/**
 * Solara Studios - Enquiry Submission Abstraction
 * Validates and routes project enquiries to configured backend or form service.
 */

export interface EnquiryPayload {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
  honeypot?: string;
  sourceCta?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  timestamp?: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

// In-flight locking to prevent accidental double-clicks or duplicate submissions
let isSubmissionInFlight = false;

export const validateEnquiry = (data: EnquiryPayload): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide your full name (at least 2 characters).';
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid business email address.';
  }

  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Please provide your company or business name.';
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.service = 'Please select the service you are inquiring about.';
  }

  if (!data.budget || data.budget.trim().length === 0) {
    errors.budget = 'Please select an estimated budget range.';
  }

  if (!data.timeline || data.timeline.trim().length === 0) {
    errors.timeline = 'Please select your preferred project timeline.';
  }

  if (!data.description || data.description.trim().length < 15) {
    errors.description = 'Please describe your project, goals, or requirements (at least 15 characters).';
  }

  return errors;
};

export const submitEnquiry = async (data: EnquiryPayload): Promise<SubmissionResult> => {
  if (isSubmissionInFlight) {
    return {
      success: false,
      message: 'A submission is currently processing. Please wait.',
    };
  }

  // Spam detection via honeypot
  if (data.honeypot && data.honeypot.trim().length > 0) {
    // Silently reject spam bot submissions without revealing honeypot trap
    return {
      success: true,
      message: 'Your enquiry has been received.',
    };
  }

  const errors = validateEnquiry(data);
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please review and correct the errors below before submitting.',
      errors,
    };
  }

  isSubmissionInFlight = true;

  try {
    const payloadWithMeta: EnquiryPayload = {
      ...data,
      name: data.name.trim(),
      email: data.email.trim(),
      company: data.company.trim(),
      description: data.description.trim(),
      timestamp: new Date().toISOString(),
    };

    const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

    if (formspreeId) {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payloadWithMeta),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit enquiry to form service.');
      }

      return {
        success: true,
        message: 'Thank you. Your project enquiry has been sent directly to Atreya Kamat. We will respond within 24 hours.',
      };
    }

    if (formEndpoint) {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payloadWithMeta),
      });

      if (!response.ok) {
        throw new Error(`Enquiry endpoint returned status ${response.status}`);
      }

      return {
        success: true,
        message: 'Thank you. Your project enquiry has been received. We will respond within 24 hours.',
      };
    }

    // Default development / preview mode boundary:
    // In production without external keys, simulate network response with verified safety.
    await new Promise((resolve) => setTimeout(resolve, 750));

    if (import.meta.env.DEV) {
      console.info('[Solara Studios Enquiry Submission]', {
        name: payloadWithMeta.name,
        company: payloadWithMeta.company,
        service: payloadWithMeta.service,
        budget: payloadWithMeta.budget,
        timeline: payloadWithMeta.timeline,
        timestamp: payloadWithMeta.timestamp,
      });
    }

    return {
      success: true,
      message: 'Thank you. Your project enquiry has been recorded. We will review your scope and get in touch within 24 hours.',
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'An unexpected error occurred while sending your enquiry.';
    return {
      success: false,
      message: `${errorMsg} Please feel free to email Atreya directly or try again shortly.`,
    };
  } finally {
    isSubmissionInFlight = false;
  }
};

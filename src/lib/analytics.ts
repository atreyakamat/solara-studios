/**
 * Solara Studios - Analytics Dispatcher
 * Dispatches conversion events only when an analytics provider is configured.
 * Never stores or transmits personal information or form field values.
 */

type AnalyticsEvent =
  | 'primary_cta_click'
  | 'portfolio_project_click'
  | 'service_cta_click'
  | 'enquiry_form_started'
  | 'enquiry_form_validation_failure'
  | 'enquiry_form_submitted'
  | 'agency_partnership_enquiry';

interface EventProperties {
  category?: string;
  label?: string;
  value?: number;
  source?: string;
}

type WindowWithAnalytics = Window & {
  gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
  plausible?: (event: string, options?: { props: Record<string, unknown> }) => void;
};

export const trackEvent = (event: AnalyticsEvent, properties?: EventProperties) => {
  const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
  if (!analyticsId) {
    // Analytics is disabled when no provider ID is set.
    return;
  }

  try {
    const win = typeof window !== 'undefined' ? (window as unknown as WindowWithAnalytics) : null;
    if (!win) return;

    // Check if gtag (Google Analytics) is present
    if (typeof win.gtag === 'function') {
      win.gtag('event', event, {
        event_category: properties?.category || 'engagement',
        event_label: properties?.label || '',
        value: properties?.value,
        source: properties?.source,
      });
    }

    // Check if plausible is present
    if (typeof win.plausible === 'function') {
      win.plausible(event, {
        props: {
          category: properties?.category || 'engagement',
          label: properties?.label || '',
          source: properties?.source || '',
        },
      });
    }
  } catch {
    // Fail silently without disrupting user interaction
  }
};

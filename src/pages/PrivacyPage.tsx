import React, { useEffect } from 'react';
import AgencyHeader from '../components/agency/AgencyHeader';
import AgencyFooter from '../components/agency/AgencyFooter';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ink text-white flex flex-col font-sans selection:bg-lime selection:text-ink">
      <AgencyHeader />

      <main className="flex-1 py-28 sm:py-36 bg-cream-grid text-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="border-b border-borderLine pb-8 mb-10">
            <a
              href="/"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted hover:text-ink mb-6"
            >
              <span>←</span>
              <span>Back to Solara Studios</span>
            </a>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-deepOlive text-lime font-mono text-xs uppercase tracking-widest font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span>LEGAL INFORMATION</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl text-ink font-bold tracking-tight mb-4 uppercase">
              Privacy Policy
            </h1>
            <p className="font-mono text-xs text-muted">
              Last updated: October 2026 · Solara Studios
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-10 text-sm sm:text-base leading-relaxed text-ink/90 font-sans">
            
            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-bold text-ink uppercase">
                1. Overview &amp; Scope
              </h2>
              <p>
                Solara Studios (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an independent digital studio founded by Atreya Kamat. This Privacy Policy describes how we handle information submitted to us through our website at solarastudios.com, project enquiry forms, or direct email correspondence.
              </p>
              <p>
                We do not sell personal data, do not run invasive behavioral advertising networks, and collect only information required to evaluate potential client projects and communicate with prospective business clients.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-bold text-ink uppercase">
                2. Information We Collect
              </h2>
              <p>
                When you choose to submit a project enquiry through our website, we may collect the following details:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted">
                <li><strong className="text-ink">Contact Details:</strong> Your name and business email address.</li>
                <li><strong className="text-ink">Business Information:</strong> Your company or trade name.</li>
                <li><strong className="text-ink">Project Requirements:</strong> Desired service, estimated budget range, preferred timeline, and brief scope description.</li>
                <li><strong className="text-ink">Submission Metadata:</strong> Timestamp and optional referral parameters (such as campaign or page source) to evaluate enquiry routing.</li>
              </ul>
              <p>
                We do not collect payment card information directly on this website. Any project payments are invoiced electronically through verified third-party banking and payment processors under separate commercial agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-bold text-ink uppercase">
                3. Purpose of Processing
              </h2>
              <p>
                The information you provide is processed solely for the following legitimate business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted">
                <li>Evaluating your project scope and determining suitability for a sprint engagement.</li>
                <li>Preparing preliminary proposals, estimates, and scoping documents.</li>
                <li>Communicating directly with you regarding your enquiry.</li>
                <li>Maintaining standard records of prospective client communications.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-bold text-ink uppercase">
                4. Data Retention
              </h2>
              <p>
                Enquiry submissions that do not progress to an active project are retained in our secure email or contact archive for up to twelve (12) months to facilitate future follow-up, after which they are routinely cleared. For clients who enter into paid engagements, communication records and project deliverables are retained for the duration required by applicable legal, tax, and accounting standards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-bold text-ink uppercase">
                5. Third-Party Service Providers
              </h2>
              <p>
                To operate our digital infrastructure, we may utilize reputable technical service providers under standard terms of service:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted">
                <li><strong className="text-ink">Hosting &amp; Content Delivery:</strong> Static assets and application code are hosted on reliable cloud providers (such as Vercel, Netlify, or GitHub Pages).</li>
                <li><strong className="text-ink">Form Routing &amp; Email Delivery:</strong> Secure submission delivery services (such as Formspree or direct SMTP services) to route enquiries to our inbox.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-bold text-ink uppercase">
                6. Analytics &amp; Cookies
              </h2>
              <p>
                Our website does not use invasive third-party tracking cookies or behavioral profile advertising. We may collect minimal, privacy-conscious aggregate usage metrics to maintain site performance and assess technical health.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-2xl font-bold text-ink uppercase">
                7. Your Rights &amp; Access Requests
              </h2>
              <p>
                You may request access to, correction of, or deletion of the personal information you have submitted through our enquiry form at any time.
              </p>
            </section>

            <section className="space-y-3 p-6 bg-white border border-borderLine rounded-2xl shadow-subtle">
              <h2 className="font-heading text-2xl font-bold text-ink uppercase">
                8. Contact for Privacy Inquiries
              </h2>
              <p className="text-sm text-muted">
                For questions regarding this policy or to request data removal, please contact:
              </p>
              <div className="font-mono text-xs text-ink space-y-1 pt-2">
                <div><strong>Founder:</strong> Atreya Kamat</div>
                <div><strong>Portfolio &amp; Direct Channel:</strong> <a href="https://atreyakamat.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-lime-muted">https://atreyakamat.dev</a></div>
                <div><strong>Location:</strong> Operating globally · Asynchronous first</div>
              </div>
            </section>

          </div>

        </div>
      </main>

      <AgencyFooter />
    </div>
  );
};

export default PrivacyPage;

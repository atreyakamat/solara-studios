import React, { useState } from 'react';
import { FAQS } from '../../data/faqData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item expanded by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 border-b border-borderLight bg-porcelain"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLight pb-6 mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-vermilion font-bold uppercase tracking-widest mb-1.5">
              07 // FREQUENTLY ASKED QUESTIONS
            </div>
            <h2
              id="faq-heading"
              className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight"
            >
              Straight answers to common questions.
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-sans max-w-md leading-relaxed">
            Everything you need to know about working with Solara Studios, project pricing, timelines, and commitments.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border border-borderLight bg-white divide-y divide-borderLight max-w-3xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="transition-colors">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleIndex(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-serif text-xl sm:text-2xl text-ink hover:text-vermilion transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span
                      className={`font-mono text-base font-bold text-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-45 text-vermilion' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-6 sm:px-8 pb-6 font-sans text-sm sm:text-base text-muted leading-relaxed ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className="pt-2 border-t border-borderLight/40 text-ink/80">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Contact Link */}
        <div className="mt-8 text-center font-mono text-xs text-muted">
          Have a unique requirement not covered here?{' '}
          <a
            href="#contact"
            className="text-ink underline hover:text-vermilion font-semibold"
          >
            Submit an enquiry below
          </a>{' '}
          or inspect founder background at{' '}
          <a
            href="https://atreyakamat.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline hover:text-vermilion font-semibold"
          >
            atreyakamat.dev
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

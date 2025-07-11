import React, { useState } from 'react';

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: 99,
    period: "month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "AI Consultation (2 hours)",
      "Basic AI Model Development",
      "Email Support",
      "Monthly Reports",
      "Basic Analytics Dashboard"
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: 299,
    period: "month",
    description: "Ideal for growing businesses with advanced AI needs",
    features: [
      "AI Consultation (5 hours)",
      "Advanced AI Model Development",
      "Process Automation Setup",
      "Priority Support",
      "Custom Analytics Dashboard",
      "API Integration",
      "Monthly Strategy Sessions"
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: 0,
    period: "custom",
    description: "Custom solutions for large organizations",
    features: [
      "Unlimited AI Consultation",
      "Custom AI Solutions",
      "Full Automation Suite",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Custom Integrations",
      "On-site Training",
      "SLA Guarantee"
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<'Monthly' | 'Yearly'>('Monthly');

  return (
    <div className="relative flex min-h-screen flex-col bg-[#141216] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 flex-col items-center w-full bg-transparent">
          <div className="w-full max-w-6xl mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Pricing Plans</h1>
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business. All plans include our core AI and automation features with different levels of support and customization.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className={`text-sm font-medium ${billing === 'Monthly' ? 'text-white' : 'text-[#a89db8]'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBilling(billing === 'Monthly' ? 'Yearly' : 'Monthly')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2d2938] transition-colors"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billing === 'Yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${billing === 'Yearly' ? 'text-white' : 'text-[#a89db8]'}`}>
                  Yearly
                  <span className="ml-1 text-[#6211d4]">(Save 20%)</span>
                </span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-xl border p-8 transition-all duration-300 hover:scale-105 ${
                    plan.highlight
                      ? 'border-[#6211d4] bg-gradient-to-br from-[#2d1a4a] to-[#1a1620]'
                      : 'border-[#433c53] bg-[#1f1c26] hover:border-[#6211d4]'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#6211d4] text-white text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-[#a89db8] mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      {plan.price === 0 ? (
                        <div className="text-4xl font-black text-white">Custom</div>
                      ) : (
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-black text-white">
                            ${billing === 'Yearly' ? Math.round(plan.price * 0.8) : plan.price}
                          </span>
                          <span className="text-lg text-[#a89db8]">
                            /{billing === 'Yearly' ? 'year' : plan.period}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <button
                      className={`w-full py-3 rounded-lg font-bold transition-colors ${
                        plan.highlight
                          ? 'bg-[#6211d4] hover:bg-[#4f0eb0] text-white'
                          : 'bg-[#2d2938] hover:bg-[#433c53] text-white'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#6211d4] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-[#a89db8] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#1f1c26] rounded-xl p-6 border border-[#433c53]">
                  <h3 className="text-xl font-bold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-[#a89db8]">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                </div>
                <div className="bg-[#1f1c26] rounded-xl p-6 border border-[#433c53]">
                  <h3 className="text-xl font-bold text-white mb-3">What if I need custom features?</h3>
                  <p className="text-[#a89db8]">Our Enterprise plan includes custom development. Contact us to discuss your specific requirements.</p>
                </div>
                <div className="bg-[#1f1c26] rounded-xl p-6 border border-[#433c53]">
                  <h3 className="text-xl font-bold text-white mb-3">Is there a free trial?</h3>
                  <p className="text-[#a89db8]">Yes, we offer a 14-day free trial for all plans. No credit card required to start.</p>
                </div>
                <div className="bg-[#1f1c26] rounded-xl p-6 border border-[#433c53]">
                  <h3 className="text-xl font-bold text-white mb-3">What support is included?</h3>
                  <p className="text-[#a89db8]">All plans include email support. Professional and Enterprise plans include priority support.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-[#2d1a4a] to-[#1a1620] rounded-xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see how AI and automation can transform your business.
              </p>
              <button className="bg-[#6211d4] hover:bg-[#4f0eb0] text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

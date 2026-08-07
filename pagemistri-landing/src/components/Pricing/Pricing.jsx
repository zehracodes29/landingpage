import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'One-Time Payment',
    price: '₹5,000',
    description: 'Everything you need to get your professional business website.',
    features: [
      'Professionally Designed Website',
      'Mobile Responsive',
      'Enquiry Form',
      'Lead Dashboard',
      'Performance Tracking',
      'Basic SEO',
      'Domain Connection',
      'Two Revisions',
      'Delivered in 3–5 Days'
    ],
    buttonText: "Let's Build My Website",
    cardBg: 'bg-[#F1F3F5]',
    buttonBg: 'bg-[#4400AF]'
  },
  {
    name: 'Hosted by Pagemistri',
    price: '₹99',
    period: '/month',
    description: 'Pagemistri Subdomain',
    features: [
      '50 Leads/month',
      'Secure Hosting',
      'Lead Dashboard',
      'Basic Analytics',
      'SEO Integration',
      'Payment Gateway Integration'
    ],
    buttonText: 'Get started',
    cardBg: 'bg-white',
    buttonBg: 'bg-[#4400AF]'
  },
  {
    name: 'Hosted on Your Brand',
    price: '₹349',
    period: '/month',
    description: 'Custom Domain',
    features: [
      '350 Leads/month',
      'Secure Hosting',
      'Lead Dashboard',
      'Basic Analytics',
      'SEO Integration',
      'Payment Gateway Integration'
    ],
    buttonText: 'Get started',
    cardBg: 'bg-white',
    buttonBg: 'bg-[#4400AF]'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#FAF9F7] font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[36px] font-[800] text-[#111827] tracking-tight leading-tight mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-[#4B5563] text-[16px] leading-relaxed max-w-2xl">
            A one-time setup to build your website, followed by a simple monthly plan to keep it live and manage your enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl border border-slate-200 shadow-sm p-10 flex flex-col transition-all duration-300 hover:shadow-[0_15px_40px_-10px_rgba(68,0,175,0.1)] ${plan.cardBg} ${index === 0 ? 'h-[105%]' : 'h-full'}`}
            >
              <div className="text-center mb-4">
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">{plan.name}</h3>
              </div>
              
              <div className="text-center mb-4 flex items-baseline justify-center gap-1">
                <span className="text-[48px] font-[800] text-[#111827] leading-none tracking-tight">{plan.price}</span>
                {plan.period && <span className="text-[#6B7280] text-[13px] font-medium">{plan.period}</span>}
              </div>

              <div className="text-center mb-10">
                <p className="text-[#6B7280] text-[13px] px-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-1 px-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start justify-center gap-2">
                    <Check className="w-[16px] h-[16px] text-[#4400AF] shrink-0 mt-[1px]" strokeWidth={2.5} />
                    <span className="text-[#4B5563] text-[12px] font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-lg font-bold text-[13px] transition-all duration-300 text-white hover:bg-[#35008a] hover:shadow-md ${plan.buttonBg}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

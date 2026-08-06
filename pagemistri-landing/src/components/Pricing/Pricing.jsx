import React from 'react';
import SectionBadge from '../../ui/SectionBadge';
import SectionTitle from '../../ui/SectionTitle';

const plans = [
  {
    name: 'One Time Payment',
    price: '₹5,000',
    description: 'Complete Website Setup',
    features: [
      'Professional Website Design',
      'Mobile-Friendly Layout',
      'Enquiry Form Integration',
      'Lead Dashboard Access',
      'Basic SEO Setup',
      'Delivery in 3-5 Days'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline'
  },
  {
    name: 'Hosted by Pagemistri',
    price: '₹99',
    period: '/month',
    description: 'Pagemistri Subdomain',
    features: [
      'Hosting on Pagemistri Servers',
      'Free Pagemistri Subdomain',
      '50 Leads/month',
      'SSL Certificate Included',
      'Email Support'
    ],
    buttonText: 'Choose Plan',
    buttonVariant: 'outline'
  },
  {
    name: 'Hosted on Your Brand',
    price: '₹299',
    period: '/month',
    description: 'Custom Domain',
    features: [
      'Hosting on Premium Servers',
      'Connect Custom Domain',
      'Unlimited Leads',
      'SSL Certificate Included',
      'Priority Support',
      'Monthly Backups'
    ],
    buttonText: 'Choose Premium',
    buttonVariant: 'primary'
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6">
            <SectionBadge>PRICING</SectionBadge>
          </div>
          <SectionTitle>
            Simple, Transparent Pricing
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border ${plan.buttonVariant === 'primary' ? 'border-[#4400AF] shadow-[0_20px_40px_-10px_rgba(68,0,175,0.15)] relative' : 'border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(68,0,175,0.1)]'} p-8 bg-white flex flex-col h-full transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.buttonVariant === 'primary' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#4400AF] text-white text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}
              
              <h3 className="text-[20px] font-bold text-center text-[#111827] mb-2">{plan.name}</h3>
              <p className="text-[#4B5563] text-center mb-6">{plan.description}</p>
              
              <div className="text-center mb-8">
                <span className="text-[40px] font-bold text-[#111827]">{plan.price}</span>
                {plan.period && <span className="text-[#6B7280] font-semibold">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4400AF] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#4B5563] text-[15px]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all duration-300 ${
                  plan.buttonVariant === 'primary' 
                    ? 'bg-[#4400AF] text-white hover:bg-[#35008a] hover:shadow-xl hover:shadow-[#4400AF]/20' 
                    : 'bg-[#F4EEFF] text-[#4400AF] hover:bg-[#DCCEFF]'
                }`}
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

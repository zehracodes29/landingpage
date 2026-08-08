import React from 'react';
import { Check } from 'lucide-react';
import SectionBadge from '@/ui/SectionBadge';

const Pricing = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const setupFeatures = [
    'Professionally Designed Website',
    'Mobile Responsive',
    'Enquiry Form',
    'Lead Dashboard',
    'Performance Tracking',
    'Basic SEO',
    'Domain Connection',
    'Two Revisions',
    'Delivered in 3–5 Days'
  ];

  const subPlans = [
    {
      name: 'Hosted by Pagemistri',
      price: '₹99',
      period: '/month',
      features: [
        'Pagemistri Subdomain',
        '50 Leads/month',
        'Secure Hosting',
        'Lead Dashboard',
        'Basic Analytics',
        'SEO Integration',
        'Payment Gateway integration'
      ],
      buttonText: 'Get started',
      popular: true,
    },
    {
      name: 'Hosted on Your Brand',
      price: '₹349',
      period: '/month',
      features: [
        'Custom Domain',
        '350 Leads/month',
        'Secure Hosting',
        'Lead Dashboard',
        'Basic Analytics',
        'SEO Integration',
        'Payment Gateway integration'
      ],
      buttonText: 'Get started',
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF9F7] font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* SECTION 1: SETUP COST */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Description */}
            <div className="order-2 md:order-1 text-center md:text-left flex flex-col gap-6">
              <div className="inline-flex justify-center md:justify-start">
                <SectionBadge>One-Time Setup</SectionBadge>
              </div>
              <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-[800] text-[#111827] tracking-tight leading-[1.15]">
                Setup Cost
              </h2>
              <p className="text-[#4B5563] text-[16px] md:text-[18px] leading-[1.6] max-w-lg mx-auto md:mx-0">
                We take care of the entire design, build, and setup process from scratch so you don't have to spend hours trying to build a website yourself. Get a complete, fully functional, and high-converting professional business website built specifically for your brand.
              </p>
              <div className="mt-2 flex flex-col gap-3 text-slate-700 font-bold text-[15px]">
                <span className="flex items-center justify-center md:justify-start gap-2.5">
                  <Check className="w-5 h-5 text-[#4400AF]" strokeWidth={3} />
                  Zero tech hassle
                </span>
                <span className="flex items-center justify-center md:justify-start gap-2.5">
                  <Check className="w-5 h-5 text-[#4400AF]" strokeWidth={3} />
                  Fully managed setup
                </span>
                <span className="flex items-center justify-center md:justify-start gap-2.5">
                  <Check className="w-5 h-5 text-[#4400AF]" strokeWidth={3} />
                  Ready to collect leads from Day 1
                </span>
              </div>
            </div>

            {/* Right Column: Featured Pricing Card */}
            <div className="order-1 md:order-2">
              <div className="bg-[#4400AF] text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl pointer-events-none"></div>
                
                <h3 className="text-[22px] font-bold text-white/90 mb-2">One-Time Payment</h3>
                <div className="mb-8">
                  <span className="text-[48px] md:text-[56px] font-extrabold tracking-tight">₹5,000</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {setupFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-200 shrink-0 mt-[1px]" strokeWidth={3} />
                      <span className="text-white/90 text-[15px] font-medium leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToLeadForm}
                  className="w-full bg-white text-[#4400AF] font-bold py-3.5 px-6 rounded-xl hover:bg-[#F4EEFF] transition-all shadow-md mt-6 active:scale-95"
                >
                  Let's Build My Website
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 mb-20"></div>

        {/* SECTION 2: SUBSCRIPTION PLANS */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[32px] md:text-[36px] font-[800] text-[#111827] tracking-tight leading-tight mb-4">
              Choose Your Monthly Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {subPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`flex flex-col bg-white border ${plan.popular ? 'border-[#4400AF] border-2 shadow-[0_15px_40px_-10px_rgba(68,0,175,0.15)] ring-2 ring-purple-600/10' : 'border-slate-200 shadow-sm'} rounded-3xl p-8 md:p-10 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4400AF] text-white px-5 py-1.5 rounded-full text-[12px] font-bold tracking-wide uppercase shadow-sm whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6 mt-2">
                  <h3 className="text-[22px] font-bold text-[#111827] mb-2">{plan.name}</h3>
                </div>
                
                <div className="text-center mb-10 flex items-baseline justify-center gap-1">
                  <span className="text-[44px] md:text-[48px] font-extrabold text-[#111827] tracking-tight">{plan.price}</span>
                  <span className="text-[#6B7280] text-[15px] font-medium">{plan.period}</span>
                </div>

                <div className="flex-1 flex flex-col">
                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#4400AF] shrink-0 mt-[1px]" strokeWidth={2.5} />
                        <span className="text-[#4B5563] text-[15px] font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={scrollToLeadForm}
                  className={`w-full py-3.5 rounded-xl font-bold text-[15px] shadow-sm active:scale-95 transition-all ${plan.popular ? 'bg-[#4400AF] text-white hover:bg-[#310080]' : 'bg-white text-[#4400AF] border border-[#4400AF]/30 hover:bg-[#F4EEFF]'}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;

import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const plans = [
  {
    name: 'One-Time Payment',
    price: '₹5,000',
    period: 'one-time setup',
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
    popular: true,
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
    popular: false,
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
    popular: false,
  }
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedPlans, setExpandedPlans] = useState({});

  const toggleFeatures = (index) => {
    setExpandedPlans(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-[#FAF9F7] font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[36px] font-[800] text-[#111827] tracking-tight leading-tight mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-[#4B5563] text-[16px] leading-relaxed max-w-2xl">
            A one-time setup to build your website, followed by a simple monthly plan to keep it live and manage your enquiries.
          </p>
        </div>

        {/* Mobile Tabbed Navigation */}
        <div className="md:hidden flex justify-center mb-10 overflow-x-auto scrollbar-none pb-2">
          <div className="flex bg-white rounded-full p-1 border border-slate-200 shadow-sm whitespace-nowrap w-full max-w-md mx-auto">
            {plans.map((plan, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-4 py-3 text-[14px] font-semibold rounded-full transition-all duration-300 ${activeTab === index ? 'bg-[#4400AF] text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {index === 0 ? 'One-Time' : index === 1 ? 'Hosted' : 'Custom'}
              </button>
            ))}
          </div>
        </div>

        {/* Grid / Active Tab Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const isExpanded = expandedPlans[index];
            const hasMoreFeatures = plan.features.length > 4;
            
            return (
              <div 
                key={index} 
                className={`${activeTab === index ? 'block' : 'hidden'} md:flex flex-col bg-white border ${plan.popular ? 'border-[#4400AF] ring-2 ring-[#4400AF]/20' : 'border-slate-200/80'} rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100/50 relative h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4400AF] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6 mt-2">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#111827] mb-2">{plan.name}</h3>
                  <p className="text-[#6B7280] text-[14px] px-2 min-h-[40px] md:min-h-[48px]">{plan.description}</p>
                </div>
                
                <div className="text-center mb-8 flex items-baseline justify-center gap-1">
                  <span className="text-[40px] md:text-[44px] font-extrabold text-[#111827] tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-[#6B7280] text-[14px] font-medium">{plan.period}</span>}
                </div>

                <div className="flex-1 flex flex-col">
                  <ul className="space-y-4 mb-4 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 ${i >= 4 && !isExpanded ? 'hidden md:flex' : 'flex'}`}>
                        <Check className="w-5 h-5 text-[#4400AF] shrink-0 mt-[1px]" strokeWidth={2.5} />
                        <span className="text-[#4B5563] text-[14px] font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Accordion Toggle */}
                  {hasMoreFeatures && (
                    <button 
                      onClick={() => toggleFeatures(index)}
                      className="md:hidden w-full flex items-center justify-center gap-1 text-[13px] font-semibold text-[#4400AF] py-3 mb-4 hover:opacity-80 transition-opacity bg-[#F4EEFF] rounded-lg"
                    >
                      {isExpanded ? (
                        <>See less <ChevronUp size={16} /></>
                      ) : (
                        <>See {plan.features.length - 4} more features <ChevronDown size={16} /></>
                      )}
                    </button>
                  )}
                </div>

                <button 
                  onClick={scrollToLeadForm}
                  className={`w-full mt-auto py-3.5 rounded-xl font-semibold text-[15px] shadow-sm active:scale-95 transition-all ${plan.popular ? 'bg-[#4400AF] text-white hover:bg-[#310080]' : 'bg-white text-[#4400AF] border-2 border-[#4400AF] hover:bg-[#F4EEFF]'}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

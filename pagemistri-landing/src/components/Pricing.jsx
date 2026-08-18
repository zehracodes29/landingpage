import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';

const Pricing = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const comparisonRows = [
    { feature: 'End-to-end Service', pm: 'One team, one process', diy: 'Find, manage & coordinate' },
    { feature: 'Enquiry Collection', pm: 'Built-in', diy: 'Extra cost / Manual setup' },
    { feature: 'Lead Management', pm: 'Dashboard included', diy: 'Need separate tools' },
    { feature: 'Analytics & Tracking', pm: 'Set up & ready', diy: 'Complex setup' },
    { feature: 'Hosting & Security', pm: 'Secure & managed', diy: 'You handle everything' },
    { feature: 'Support', pm: '24/7 Support', diy: 'Limited / No support' },
    { feature: 'Delivery Time', pm: '3–5 Days', diy: 'Unpredictable' },
  ];

  const setupFeatures = [
    'Professional Website Design',
    'Mobile Responsive',
    'Enquiry Form',
    'Lead Dashboard',
    'Performance Tracking',
    'Basic SEO',
    'Domain Connection',
    '2 Revisions',
    'Delivered in 3–5 Days'
  ];

  const subPlans = [
    {
      name: 'Hosted by Pagemistri',
      price: '₹99',
      period: '/mo',
      features: [
        'Pagemistri Subdomain',
        '50 Leads / month',
        'Secure Hosting',
        'Lead Dashboard',
        'Basic Analytics',
        'SEO Integration',
        'Payment Gateway'
      ]
    },
    {
      name: 'Hosted on Your Brand',
      price: '₹349',
      period: '/mo',
      features: [
        'Custom Domain',
        '350 Leads / month',
        'Secure Hosting',
        'Lead Dashboard',
        'Basic Analytics',
        'SEO Integration',
        'Payment Gateway'
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF9F7] dark:bg-slate-950 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* BOTTOM BLOCK: Pricing Section */}
        <div id="pricing" className="scroll-mt-24 max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2 block">
              Simple Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Transparent & Affordable
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Step 1 Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-900 border-2 border-purple-600 rounded-2xl p-6 flex flex-col justify-between relative shadow-lg"
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3 bg-purple-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                Recommended Setup
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Step 1: Build Your Website</h3>
                <p className="text-xs text-slate-500 font-medium mb-4">One-Time Setup Fee</p>
                
                <div className="text-4xl font-black text-purple-600 mb-6">₹5,000</div>

                <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
                  {setupFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" strokeWidth={3} />
                      <span className="font-medium leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={scrollToLeadForm}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all mt-8 active:scale-95"
              >
                Start My Website
              </button>
            </motion.div>


            {/* Step 2 Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Step 2: Choose Your Hosting</h3>
                <p className="text-xs text-slate-500 font-medium mb-6">Monthly Subscription (Cancel Anytime)</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {subPlans.map((plan, i) => (
                    <div 
                      key={i} 
                      className={`p-4 rounded-xl border flex flex-col ${
                        plan.name === 'Hosted on Your Brand' 
                        ? 'bg-purple-50/50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/50' 
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{plan.name}</h4>
                      <div className="font-extrabold text-xl text-purple-600 dark:text-purple-400 mb-4">{plan.price} <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{plan.period}</span></div>
                      
                      <ul className="space-y-2 flex-1">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-purple-500 mt-[3px] shrink-0" strokeWidth={3} />
                            <span className="text-xs text-slate-600 dark:text-slate-400 leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-500 text-center mt-2 font-medium">
                Cancel anytime. Your website remains live as per your active plan.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;

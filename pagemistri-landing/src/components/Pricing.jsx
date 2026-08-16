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
      period: '/month',
      features: [
        'Pagemistri Subdomain',
        '50 Leads / month',
        'Secure Hosting',
        'Lead Dashboard',
        'Basic Analytics',
        'SEO Integration',
        'Payment Gateway Integration'
      ]
    },
    {
      name: 'Hosted on Your Brand',
      price: '₹349',
      period: '/month',
      features: [
        'Custom Domain',
        '350 Leads / month',
        'Secure Hosting',
        'Lead Dashboard',
        'Basic Analytics',
        'SEO Integration',
        'Payment Gateway Integration'
      ]
    }
  ];

  return (
    <section id="pricing" className="scroll-mt-24 py-16 lg:py-24 bg-[#FAF9F7] dark:bg-slate-950 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="mb-8 text-center lg:text-left">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2 block">
                Why Businesses Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Pagemistri vs Doing It Yourself
              </h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/10 hover:border-purple-200 dark:hover:border-purple-800/50"
            >
              <div className="overflow-x-auto pb-2">
                <table className="w-full text-left border-collapse">
                   <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      <th className="py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">Feature</th>
                      <th className="py-2.5 px-3 text-xs sm:text-sm font-bold text-slate-900 dark:text-white border-b-2 border-purple-600">Pagemistri</th>
                      <th className="py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">Freelancer / DIY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="py-2.5 px-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">{row.feature}</td>
                        <td className="py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 mt-0.5 shrink-0" strokeWidth={3} />
                          <span className="leading-snug">{row.pm}</span>
                        </td>
                        <td className="py-2.5 px-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-start gap-2">
                            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 mt-0.5 shrink-0" strokeWidth={2.5} />
                            <span className="leading-snug">{row.diy}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950/40 rounded-xl text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300 flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>
                  No freelancer coordination. No technical setup headache.
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            <div className="mb-8 text-center lg:text-left">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2 block">
                Simple Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Transparent & Affordable
              </h2>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              
              {/* Step 1 Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl dark:hover:shadow-purple-900/20 hover:border-purple-300 dark:hover:border-purple-700/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 dark:bg-purple-900/10 rounded-full blur-2xl -mt-10 -mr-10 pointer-events-none"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-8">
                  <div className="flex flex-col justify-center text-center md:text-left">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">One-Time Setup</span>
                    <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-2">Step 1: Build Your Website</h3>
                    <div className="flex items-baseline justify-center md:justify-start gap-1 mt-1">
                      <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">₹5,000</span>
                    </div>
                  </div>
 
                  <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {setupFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-1.5 group">
                        <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" strokeWidth={2.5} />
                        <span className="font-medium leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={scrollToLeadForm}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-purple-500/20 active:scale-95 relative z-10"
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
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-900/10 hover:border-purple-200 dark:hover:border-purple-800/50"
              >
                <div className="mb-4 text-center lg:text-left">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">Monthly Plans</span>
                  <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400">Step 2: Choose Your Hosting</h3>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {subPlans.map((plan, i) => (
                    <div key={i} className={`rounded-xl p-4 flex flex-col border ${plan.name === 'Hosted on Your Brand' ? 'border-purple-500 bg-purple-50/30 dark:bg-purple-900/10 shadow-sm' : 'border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50'}`}>
                      <h4 className="font-bold text-slate-900 dark:text-white text-[14px] mb-1">{plan.name}</h4>
                      <div className="font-extrabold text-xl text-purple-600 dark:text-purple-400 mb-3">{plan.price} <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{plan.period}</span></div>
                      
                      <ul className="space-y-1.5 flex-1">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-1.5 group">
                            <Check className="w-3.5 h-3.5 text-purple-500 mt-0.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" strokeWidth={2.5} />
                            <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-5 font-medium">
                  Cancel anytime. Your website will remain live as per your plan.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;

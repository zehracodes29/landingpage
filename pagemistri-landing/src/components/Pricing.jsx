import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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

  return (
    <section className="py-16 lg:py-24 bg-[#FAF9F7] dark:bg-slate-950 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div id="pricing" className="scroll-mt-24 max-w-5xl mx-auto">
          
          {/* STEP 1: One-Time Setup Cost */}
          <div className="text-center mb-10">
            <span className="inline-block bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
              STEP 1: ONE-TIME SETUP
            </span>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Setup Cost
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto rounded-3xl bg-purple-50/60 dark:bg-slate-900/60 border border-purple-200/80 dark:border-slate-800 p-8 mb-12 shadow-sm"
          >
            {/* Left Side (Context & Copy) */}
            <div>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We take care of the entire design, build, and setup process from scratch so you don't have to spend hours trying to build a website yourself. Get a complete, fully functional, and high-converting professional business website built specifically for your brand.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-semibold">
                  <Check className="text-purple-600 w-5 h-5 shrink-0" /> Zero tech hassle
                </li>
                <li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-semibold">
                  <Check className="text-purple-600 w-5 h-5 shrink-0" /> Fully managed setup
                </li>
                <li className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-semibold">
                  <Check className="text-purple-600 w-5 h-5 shrink-0" /> Ready to collect leads from Day 1
                </li>
              </ul>
            </div>

            {/* Right Side (Price & Feature List) */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">One-Time Payment</h3>
              <div className="text-4xl font-black text-purple-600 mb-6">₹5,000</div>

              <ul className="space-y-3 mb-8">
                {setupFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 shrink-0" strokeWidth={2.5} />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToLeadForm}
                className="bg-purple-700 hover:bg-purple-800 text-white w-full py-3.5 rounded-xl font-bold transition-all shadow-md active:scale-95"
              >
                Let's Build My Website
              </button>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative my-8 flex items-center justify-center max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-800" />
            </div>
            <div className="relative bg-[#FAF9F7] dark:bg-slate-950 px-6 text-sm font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              STEP 2 &rarr; SELECT YOUR HOSTING PLAN
            </div>
          </div>

          {/* STEP 2: Subscription Based Pricing Plans */}
          <div className="text-center mb-8">
            <span className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
              STEP 2: MONTHLY HOSTING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Choose Your Monthly Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Hosted by Pagemistri (Most Popular) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 border-2 border-purple-600 rounded-3xl p-8 shadow-xl relative flex flex-col h-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                MOST POPULAR
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Hosted by Pagemistri</h3>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-black text-slate-900 dark:text-white">₹99</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {['Pagemistri Subdomain', '50 Leads/month', 'Secure Hosting', 'Lead Dashboard', 'Basic Analytics', 'SEO Integration', 'Payment Gateway integration'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 shrink-0" strokeWidth={2.5} />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToLeadForm}
                className="bg-purple-700 hover:bg-purple-800 text-white w-full py-3 rounded-xl font-semibold transition-all active:scale-95 mt-auto"
              >
                Get started
              </button>
            </motion.div>

            {/* Card 2: Hosted on Your Brand */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Hosted on Your Brand</h3>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-black text-slate-900 dark:text-white">₹349</span>
                <span className="text-slate-500 mb-1">/month</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {['Custom Domain', '350 Leads/month', 'Secure Hosting', 'Lead Dashboard', 'Basic Analytics', 'SEO Integration', 'Payment Gateway integration'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 shrink-0" strokeWidth={2.5} />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToLeadForm}
                className="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white w-full py-3 rounded-xl font-semibold transition-all active:scale-95 mt-auto"
              >
                Get started
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;

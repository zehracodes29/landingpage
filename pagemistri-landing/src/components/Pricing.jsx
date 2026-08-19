import React from 'react';
import { motion } from 'framer-motion';
import { Check, Layout, LineChart, Rocket, Cloud, Globe, HelpCircle } from 'lucide-react';

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
          <div className="text-center mb-0">
            <span className="inline-block bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
              STEP 1 &bull; ONE-TIME SETUP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 text-center">
              Setup Cost
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-10 text-center">
              Everything you need to go live—handled by us.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-6 sm:p-10 bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm relative mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Side (3 Value Proposition Cards - 5 Columns) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full shrink-0">
                    <Layout className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">We design & build a stunning website for your brand.</p>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full shrink-0">
                    <LineChart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">We set up everything you need to start collecting leads.</p>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full shrink-0">
                    <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">You go live in 3–5 days and start seeing results.</p>
                </div>
              </div>

              {/* Right Side (Featured Pricing Box - 7 Columns) */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-purple-700 text-white text-[10px] font-extrabold tracking-widest uppercase px-8 py-1 rotate-45 translate-x-6 translate-y-3 shadow-md">
                  BEST VALUE
                </div>
                
                <span className="inline-block bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-2">
                  ONE-TIME PAYMENT
                </span>
                <div className="text-4xl sm:text-5xl font-black text-purple-700 dark:text-purple-400 my-2">₹5,000</div>

                <ul className="space-y-3 mt-6 mb-8">
                  {setupFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 shrink-0" strokeWidth={2.5} />
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToLeadForm}
                  className="w-full mt-6 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3.5 rounded-2xl shadow-lg transition-all active:scale-95"
                >
                  Let's Build My Website
                </button>
              </div>
            </div>

            {/* Bottom Skip Link */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-center text-sm text-slate-600 dark:text-slate-400">
              Don't want to pay this much?{' '}
              <a 
                href="#step-2-pricing" 
                className="text-purple-600 dark:text-purple-400 font-bold underline underline-offset-4 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                Do it yourself →
              </a>
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
          <div id="step-2-pricing" className="scroll-mt-12 text-center mb-10">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
              STEP 2: MONTHLY HOSTING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Choose Your Monthly Plan
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center mb-10">
              Build your own page, forms, and SEO with our DIY plans—or select a hosting plan to keep your ₹5,000 ready-made website live and maintained. Choose ₹99/mo for Pagemistri subdomain hosting or ₹349/mo to launch on your custom domain.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-6 sm:p-10 bg-indigo-950/90 dark:bg-purple-950/80 rounded-3xl shadow-2xl border border-purple-900/50 text-white relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Card 1: Hosted by Pagemistri */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white text-slate-900 rounded-3xl p-8 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                    <Cloud className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hosted by Pagemistri</h3>
                  <div className="flex items-end gap-1 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl font-black">₹99</span>
                    <span className="text-slate-500 mb-1">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {['Pagemistri Subdomain Hosting', 'Self-serve form & SEO setup', 'Ongoing site maintenance', '50 Leads/month', 'Secure Hosting', 'Lead Dashboard', 'Basic Analytics'].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-600 shrink-0" strokeWidth={2.5} />
                        <span className="text-slate-700 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={scrollToLeadForm}
                  className="w-full mt-8 border-2 border-purple-600 text-purple-700 font-bold py-3.5 rounded-2xl hover:bg-purple-50 transition-all active:scale-95"
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
                className="bg-white text-slate-900 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  MOST POPULAR
                </div>

                <div>
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                    <Globe className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hosted on Your Brand</h3>
                  <div className="flex items-end gap-1 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl font-black">₹349</span>
                    <span className="text-slate-500 mb-1">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {['Custom Domain Hosting', 'Self-serve form & SEO setup', 'Ongoing site maintenance', '350 Leads/month', 'Secure Hosting', 'Lead Dashboard', 'Basic Analytics'].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-purple-600 shrink-0" strokeWidth={2.5} />
                        <span className="text-slate-700 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={scrollToLeadForm}
                  className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-2xl shadow-lg transition-all active:scale-95"
                >
                  Get started
                </button>
              </motion.div>
            </div>

            {/* Bottom Help Link */}
            <div className="mt-8 text-center text-sm font-medium text-slate-200 flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 shrink-0" />
              Not sure which one to choose?{' '}
              <a href="#lead-form" className="text-purple-300 hover:text-white underline underline-offset-4 transition-colors">
                We're here to help &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;

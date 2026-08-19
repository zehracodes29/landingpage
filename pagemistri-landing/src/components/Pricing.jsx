import React from 'react';
import { motion } from 'framer-motion';
import { Check, Layout, LineChart, Rocket, Cloud, Globe, HelpCircle } from 'lucide-react';

const Pricing = () => {
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
    <section className="py-6 sm:py-8 bg-[#FAF9F7] dark:bg-slate-950 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div id="pricing" className="scroll-mt-24 max-w-5xl mx-auto">
          
          {/* STEP 1: One-Time Setup Cost */}
          <div className="text-center mb-0">
            <span className="inline-block bg-[rgba(68,0,175,0.08)] text-[#4400AF] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-1.5">
              STEP 1 &bull; ONE-TIME SETUP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-white mb-1 text-center">
              Setup Cost
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 mb-4 sm:mb-6 text-center">
              Everything you need to go live—handled by us.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-4 sm:p-6 bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm relative mb-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Side (3 Value Proposition Cards - 5 Columns) */}
              <div className="lg:col-span-5 flex flex-col gap-2.5">
                <div className="flex items-center gap-4 p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <div className="w-8 h-8 bg-[rgba(68,0,175,0.08)] rounded-full flex items-center justify-center shrink-0">
                    <Layout className="w-4 h-4 text-[#4400AF]" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">We design & build a stunning website for your brand.</p>
                </div>
                
                <div className="flex items-center gap-4 p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <div className="w-8 h-8 bg-[rgba(68,0,175,0.08)] rounded-full flex items-center justify-center shrink-0">
                    <LineChart className="w-4 h-4 text-[#4400AF]" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">We set up everything you need to start collecting leads.</p>
                </div>
                
                <div className="flex items-center gap-4 p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                  <div className="w-8 h-8 bg-[rgba(68,0,175,0.08)] rounded-full flex items-center justify-center shrink-0">
                    <Rocket className="w-4 h-4 text-[#4400AF]" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">You go live in 3–5 days and start seeing results.</p>
                </div>
              </div>

              {/* Right Side (Featured Pricing Box - 7 Columns) */}
              <div className="lg:col-span-7 bg-white dark:bg-slate-900 border-2 border-[rgba(68,0,175,0.18)] rounded-3xl p-4 sm:p-5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#4400AF] text-white text-[10px] font-extrabold tracking-widest uppercase px-8 py-1 rotate-45 translate-x-6 translate-y-3 shadow-md">
                  BEST VALUE
                </div>
                
                <span className="inline-block bg-[rgba(68,0,175,0.08)] text-[#4400AF] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-2">
                  ONE-TIME PAYMENT
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#4400AF] my-1">₹5,000</div>

                <ul className="space-y-1.5 mt-4 mb-4">
                  {setupFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#4400AF] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-slate-700 dark:text-slate-300 font-medium text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#complete-website-setup"
                  className="w-full mt-4 bg-[#4400AF] hover:bg-[#310080] text-white font-bold py-2.5 text-sm rounded-2xl shadow-md transition-all active:scale-95 block text-center"
                >
                  Let's Build My Website
                </a>
              </div>
            </div>

            {/* Bottom Skip Link */}
            <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-center text-xs text-[#6B7280] dark:text-slate-400">
              Don't want to pay this much?{' '}
              <a 
                href="#step-2-pricing" 
                className="text-[#4400AF] font-bold underline underline-offset-4 hover:text-[#4400AF] dark:hover:text-[#4400AF] transition-colors"
              >
                Do it yourself →
              </a>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="relative mt-16 sm:mt-20 mb-8 flex items-center justify-center max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-800" />
            </div>
            <div className="relative bg-[#FAF9F7] dark:bg-slate-950 px-6 text-sm font-bold text-[#52627A] uppercase tracking-widest flex items-center gap-2">
              STEP 2 &rarr; SELECT YOUR HOSTING PLAN
            </div>
          </div>

          {/* STEP 2: Subscription Based Pricing Plans */}
          <div id="step-2-pricing" className="pt-8 sm:pt-12 scroll-mt-20 text-center mb-6">
            <span className="inline-block bg-[rgba(68,0,175,0.08)] text-[#4400AF] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-1">
              STEP 2: MONTHLY HOSTING
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] dark:text-white mb-1">
              Choose Your Monthly Plan
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] dark:text-slate-400 max-w-xl mx-auto text-center mb-4 sm:mb-6">
              Build your own page, forms, and SEO with our DIY plans—or select a hosting plan to keep your ₹5,000 ready-made website live and maintained. Choose ₹99/mo for Pagemistri subdomain hosting or ₹349/mo to launch on your custom domain.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-[#310080] rounded-3xl shadow-2xl text-white relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Card 1: Hosted by Pagemistri */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between border border-slate-200"
              >
                <div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[rgba(68,0,175,0.08)] rounded-full flex items-center justify-center text-[#4400AF] mb-2">
                    <Cloud className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hosted by Pagemistri</h3>
                  <div className="flex items-end gap-1 mb-4 pb-4 border-b border-slate-100">
                    <span className="text-2xl sm:text-3xl font-extrabold">₹99</span>
                    <span className="text-[#52627A] mb-1">/month</span>
                  </div>

                  <ul className="space-y-1.5 mb-4 text-xs sm:text-sm">
                    {['Pagemistri Subdomain Hosting', 'Self-serve form & SEO setup', 'Ongoing site maintenance', '50 Leads/month', 'Secure Hosting', 'Lead Dashboard', 'Basic Analytics'].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#4400AF] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-slate-700 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#complete-website-setup"
                  className="w-full mt-4 border-2 border-[#4400AF] text-[#4400AF] font-bold py-2.5 text-sm rounded-2xl hover:bg-[rgba(68,0,175,0.05)] transition-all active:scale-95 block text-center"
                >
                  Get started
                </a>
              </motion.div>

              {/* Card 2: Hosted on Your Brand */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative border-2 border-[#4400AF]"
              >
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4400AF] text-white text-[10px] font-extrabold tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                  MOST POPULAR
                </div>

                <div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[rgba(68,0,175,0.08)] rounded-full flex items-center justify-center text-[#4400AF] mb-2">
                    <Globe className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hosted on Your Brand</h3>
                  <div className="flex items-end gap-1 mb-4 pb-4 border-b border-slate-100">
                    <span className="text-2xl sm:text-3xl font-extrabold">₹349</span>
                    <span className="text-[#52627A] mb-1">/month</span>
                  </div>

                  <ul className="space-y-1.5 mb-4 text-xs sm:text-sm">
                    {['Custom Domain Hosting', 'Self-serve form & SEO setup', 'Ongoing site maintenance', '350 Leads/month', 'Secure Hosting', 'Lead Dashboard', 'Basic Analytics'].map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#4400AF] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-slate-700 font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#complete-website-setup"
                  className="w-full mt-4 bg-[#4400AF] hover:bg-[#310080] text-white font-bold py-2.5 text-sm rounded-2xl shadow-md transition-all active:scale-95 block text-center"
                >
                  Get started
                </a>
              </motion.div>
            </div>

            {/* Bottom Help Link */}
            <div className="mt-3 text-center text-xs font-medium text-slate-200 flex items-center justify-center gap-2">
              <HelpCircle className="w-3 h-3 shrink-0" />
              Not sure which one to choose?{' '}
              <a href="#complete-website-setup" className="text-white/80 hover:text-white underline underline-offset-4 transition-colors">
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

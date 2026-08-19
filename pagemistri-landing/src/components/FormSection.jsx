import React from 'react';
import LeadForm from '@/components/LeadForm';
import { Check } from 'lucide-react';

const FormSection = () => {
  const features = [
    "Professionally Designed Website",
    "Mobile Responsive Design",
    "Enquiry & Lead Capture Form",
    "Built-in Lead Dashboard",
    "Performance & Analytics Tracking",
    "Basic Search Engine Optimization (SEO)",
    "Custom Domain Connection",
    "Two Free Revision Rounds",
  ];

  return (
    <section id="complete-website-setup" className="scroll-mt-20 py-16 sm:py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Content & Checklist */}
          <div className="lg:col-span-7 w-full flex flex-col">
            <span className="inline-flex items-center gap-2 bg-[rgba(68,0,175,0.08)] text-[#4400AF] w-fit text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[rgba(68,0,175,0.18)]">
              ✨ COMPLETE SETUP — ₹5,000 ONE-TIME
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Everything Included in Your Custom Website Setup
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              Fill out your business details to start your build. Here is everything you get with our flat ₹5,000 setup package—no hidden fees.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <Check className="w-5 h-5 text-[#4400AF] shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                </div>
              ))}
              {/* Highlighted item */}
              <div className="flex items-start gap-3 p-3 bg-[rgba(68,0,175,0.04)] rounded-xl border border-[rgba(68,0,175,0.18)] shadow-sm">
                <Check className="w-5 h-5 text-[#4400AF] shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-sm font-semibold text-[#4400AF] leading-snug">Delivered in 3–5 Days</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">⚡ Fast 3–5 Day Launch</span>
              <span className="flex items-center gap-1.5">🔒 100% Data Security</span>
              <span className="flex items-center gap-1.5">📞 Full Support Included</span>
            </div>
          </div>
          
          {/* RIGHT COLUMN: Lead Form */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full max-w-[550px] mx-auto relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl shadow-[rgba(68,0,175,0.1)] border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[rgba(68,0,175,0.05)] dark:bg-[rgba(68,0,175,0.20)] rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <LeadForm />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FormSection;

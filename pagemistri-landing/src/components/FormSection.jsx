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
          
          {/* LEFT COLUMN: Content & Categorized Feature List */}
          <div className="lg:col-span-6 w-full flex flex-col">
            <span className="inline-flex items-center gap-2 bg-[rgba(68,0,175,0.08)] text-[#4400AF] w-fit text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6 border border-[rgba(68,0,175,0.18)]">
              ✦ COMPLETE WEBSITE SETUP · ₹5,000 ONE-TIME
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
              Everything You Need to Launch Your Website
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8">
              Get a professional website built for your business.
            </p>

            <div className="flex flex-col">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 block">DESIGN & WEBSITE</h3>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> Professional Website
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> Mobile Responsive
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> Custom Domain
              </div>

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-3 block">LEADS & GROWTH</h3>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> Lead Capture
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> Lead Dashboard
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> Analytics
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> Basic SEO
              </div>

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-3 block">LAUNCH & SUPPORT</h3>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> 2 Revision Rounds
              </div>
              <div className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                <span className="text-[#4400AF] font-bold mr-2">✓</span> 3–5 Day Delivery
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[rgba(68,0,175,0.05)] border border-[rgba(68,0,175,0.18)] font-bold text-[#4400AF] text-sm flex items-center gap-2 w-fit">
              ⚡ WEBSITE READY IN 3–5 DAYS
            </div>
          </div>
          
          {/* RIGHT COLUMN: Lead Form */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full max-w-[550px] mx-auto relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-800">
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

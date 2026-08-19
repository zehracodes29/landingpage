import React from 'react';
import LeadForm from '@/components/LeadForm';

const FormSection = () => {
  return (
    <section id="complete-website-setup" className="scroll-mt-20 py-16 sm:py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT COLUMN: Empty space to maintain right-aligned form layout */}
          <div className="hidden lg:block w-full"></div>
          
          {/* RIGHT COLUMN: Lead Form */}
          <div className="w-full">
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

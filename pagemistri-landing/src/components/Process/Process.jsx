import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';

const steps = [
  {
    num: '01',
    title: 'Tell Us About Your Business',
    description: 'Fill out a quick form with your business name, services, and logo.'
  },
  {
    num: '02',
    title: 'Custom Website Build',
    description: 'We design and build your high-converting landing page in 3–5 days.'
  },
  {
    num: '03',
    title: 'Domain & Gateway Setup',
    description: 'We connect your custom domain or subdomain & configure payment gateways.'
  },
  {
    num: '04',
    title: 'Review & Refine',
    description: 'Provide feedback with two included rounds of revisions.'
  },
  {
    num: '05',
    title: 'Launch & Collect Leads',
    description: 'Your site goes live—start receiving lead notifications instantly on your dashboard.'
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#FAF9F7] font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="mb-6 inline-flex">
            <SectionBadge>How It Works</SectionBadge>
          </div>
          <h2 className="text-[32px] md:text-[44px] font-[800] text-[#111827] tracking-tight leading-[1.15] mb-6">
            Simple 5-Step Process to Get Your Website Live
          </h2>
          <p className="text-[17px] text-[#4B5563] leading-[1.6]">
            From initial details to launch day—we handle the technical heavy lifting.
          </p>
        </div>

        {/* Desktop Layout (Tabs + Content Card) */}
        <div className="hidden md:block max-w-5xl mx-auto">
          {/* Horizontal Step Bar */}
          <div className="relative flex justify-between items-center mb-16 px-4">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-slate-200 -z-10 -translate-y-1/2" />
            
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 relative z-10 ${
                    isActive 
                      ? 'bg-[#4400AF] text-white shadow-xl shadow-purple-500/30 ring-4 ring-[#FAF9F7] scale-110' 
                      : 'bg-white text-slate-500 border-2 border-slate-200 hover:border-[#4400AF]/50 hover:text-[#4400AF] hover:shadow-md'
                  }`}
                >
                  {step.num}
                </button>
              );
            })}
          </div>

          {/* Active Card Preview */}
          <div className="relative h-[240px] max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-3xl bg-white border border-slate-200 p-10 shadow-[0_20px_60px_-15px_rgba(68,0,175,0.08)] absolute inset-0 flex flex-col justify-center items-center text-center"
              >
                <span className="text-[#4400AF] font-bold tracking-[0.15em] text-[13px] mb-4 uppercase">
                  Step {steps[activeStep].num}
                </span>
                <h3 className="text-2xl md:text-3xl font-[800] text-[#111827] mb-4 tracking-tight">
                  {steps[activeStep].title}
                </h3>
                <p className="text-[17px] text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout (Vertical Timeline) */}
        <div className="md:hidden">
          <div className="relative pl-6 ml-4 border-l-2 border-[#4400AF]/20 space-y-12 py-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Node */}
                <div className="absolute -left-[45px] top-0 w-10 h-10 rounded-full bg-white border-2 border-[#4400AF] flex items-center justify-center text-sm font-bold text-[#4400AF] shadow-sm z-10 transition-transform group-hover:scale-110">
                  {step.num}
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm transition-all duration-300 group-hover:border-[#4400AF]/30 group-hover:shadow-md">
                  <h3 className="text-[19px] font-bold text-[#111827] mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;

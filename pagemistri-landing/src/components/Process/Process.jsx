import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';
import SectionTitle from '../../ui/SectionTitle';

const steps = [
  {
    title: 'Step 1: Tell Us About Your Business',
    description: 'Clarify the offer, audience, goals, and must-have page sections before design starts.'
  },
  {
    title: 'Step 2: Share Your Content',
    description: "Send your logo, photos and business details. Don't have everything ready? We'll guide you."
  },
  {
    title: 'Step 3: We Build Your Website',
    description: 'Our team designs and develops your business website based on your requirements.'
  },
  {
    title: 'Step 4: Review & Approve',
    description: "We'll share the first version with you. Two revisions are included to make sure everything looks perfect."
  },
  {
    title: 'Step 5: Go Live',
    description: 'Your website is published and ready to receive enquiries from your customers.'
  }
];

const Process = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="mb-6">
            <SectionBadge>Simple 5-Step Process</SectionBadge>
          </div>
          <SectionTitle>
            Getting Your Business Online Is Easier Than You Think
          </SectionTitle>
          <p className="text-[17px] text-[#4B5563] leading-[1.6] max-w-2xl mx-auto mt-6">
            From your first enquiry to a live website, we've made the entire process simple, transparent and stress-free.
          </p>
        </div>

        <div className="relative">
          {/* Mobile Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-[#F4EEFF] md:hidden" />
          
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-[27px] left-[10%] right-[10%] h-[2px] bg-[#F4EEFF]" />

          <div className="flex flex-col md:flex-row md:items-stretch space-y-12 md:space-y-0 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-row md:flex-col items-start w-full md:flex-1"
              >
                {/* Timeline Dot */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-white border-4 border-[#F4EEFF] flex items-center justify-center z-10 md:mx-auto mr-6 md:mr-0 md:mb-8 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#4400AF]" />
                </div>

                {/* Content Card */}
                <div className="w-full flex-1 flex">
                  <div className="w-full bg-white rounded-2xl p-6 shadow-[0_4px_20px_-5px_rgba(68,0,175,0.05)] border border-slate-100 hover:shadow-[0_15px_35px_-5px_rgba(68,0,175,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col md:text-center">
                    <h3 className="text-[18px] xl:text-[20px] font-bold text-[#111827] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#4B5563] leading-relaxed text-[14px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

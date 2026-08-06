import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';
import SectionTitle from '../../ui/SectionTitle';

const steps = [
  {
    title: 'Step 1: Tell Us About Your Business',
    description: 'Fill out our simple enquiry form with your business details, goals, and any specific requirements you have for your new website.'
  },
  {
    title: 'Step 2: Share Your Content',
    description: 'Provide us with your logo, images, and any text you want to include. If you don\'t have professional photos, we can provide high-quality stock images.'
  },
  {
    title: 'Step 3: We Build Your Website',
    description: 'Our team gets to work designing and developing your website. We ensure it looks professional, works perfectly on mobile, and is optimized for search engines.'
  },
  {
    title: 'Step 4: Review & Approve',
    description: 'We share a preview link with you. You can review the website and request any minor adjustments before we make it live to the public.'
  },
  {
    title: 'Step 5: Go Live',
    description: 'Once you approve, we launch your website! You can start sharing it with customers and collecting leads through your new dashboard.'
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <SectionBadge>HOW IT WORKS</SectionBadge>
          </div>
          <SectionTitle>
            Simple 5-Step Process
          </SectionTitle>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-[#F4EEFF] md:left-1/2 md:-ml-[1px]" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:justify-between`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-white border-4 border-[#F4EEFF] flex items-center justify-center -ml-[0px] md:-ml-7 shadow-sm z-10">
                  <div className="w-5 h-5 rounded-full bg-[#4400AF]" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-5px_rgba(68,0,175,0.05)] border border-slate-100 hover:shadow-[0_15px_35px_-5px_rgba(68,0,175,0.1)] transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-[22px] font-bold text-[#111827] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#4B5563] leading-relaxed text-[15px]">
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

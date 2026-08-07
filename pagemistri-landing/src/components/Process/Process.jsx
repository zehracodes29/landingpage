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
    description: 'Provide feedback with two included rounds of revisions.'
  },
  {
    title: 'Step 5: Launch & Collect Leads',
    description: 'Your site goes live—start receiving lead notifications instantly on your dashboard.'
  }
];

const Process = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex">
            <SectionBadge>How It Works</SectionBadge>
          </div>
          <SectionTitle>
            Simple 5-Step Process
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#4400AF] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-sm">
                {index + 1}
              </div>
              <h3 className="text-[19px] font-bold text-[#111827] mb-3">{step.title}</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

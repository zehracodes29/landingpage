import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';

export default function DomainCTA() {
  return (
    <section className="py-24 bg-[#F4EEFF]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex">
            <SectionBadge>Domain Setup</SectionBadge>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] tracking-tight leading-tight mb-4">
            Need a Custom Domain?
          </h2>
          <p className="text-[#4B5563] text-[15px] md:text-[16px] max-w-2xl mx-auto mb-10 leading-relaxed">
            Already have one? We'll connect it. Don't have one yet? We'll guide you through buying the right domain for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#4400AF] text-white font-bold text-[14px] rounded-xl hover:bg-[#35008a] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Let's Build My Website
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#4400AF]/30 text-[#4400AF] font-bold text-[14px] rounded-xl hover:bg-[#4400AF]/5 transition-all duration-300 flex items-center justify-center gap-2">
              See Pricing <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

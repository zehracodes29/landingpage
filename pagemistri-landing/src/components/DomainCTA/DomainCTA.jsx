import React from 'react';
import { motion } from 'framer-motion';

const DomainCTA = () => {
  return (
    <section className="py-20 bg-[#FAF9F7]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#4400AF] rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl shadow-[#4400AF]/20"
        >
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-[32px] md:text-[44px] font-bold text-white tracking-tight leading-tight mb-6">
              Need a Custom Domain?
            </h2>
            <p className="text-[#DCCEFF] text-[18px] max-w-2xl mx-auto mb-10 leading-relaxed">
              Want your website to live at www.yourbusiness.com? We can help you secure and connect a custom domain to your new website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#4400AF] font-bold text-[15px] rounded-xl hover:bg-[#F4EEFF] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Yes, I Need a Domain
              </button>
              <button className="px-8 py-4 bg-transparent border border-[#DCCEFF] text-white font-bold text-[15px] rounded-xl hover:bg-white/10 transition-all duration-300">
                I Already Have One
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainCTA;

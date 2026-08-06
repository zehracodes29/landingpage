import React from 'react';
import { motion } from 'framer-motion';
import { Clock, LayoutGrid, Sparkles, CheckCircle2 } from 'lucide-react';
import image1 from '../assets/images/image1.png';

const BusinessBenefits = () => {
  return (
    <section className="relative bg-[#FAF9F7] py-16 md:py-24 overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-[32px] w-full">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex flex-col items-start gap-8 z-20 relative"
          >
            {/* Header Content */}
            <div className="flex flex-col gap-4 w-full">
              <span className="text-[#4400AF] text-[16px] font-bold">
                Built for Busy Business Owners
              </span>
              <h2 className="text-[36px] md:text-[46px] lg:text-[48px] xl:text-[52px] font-[800] text-[#111827] leading-[1.15] tracking-tight">
                Your Business Needs Your Time.<br />Your Website Doesn't.
              </h2>
              <p className="text-[17px] text-[#4B5563] leading-[1.6] max-w-[540px] mt-2">
                You're busy running your business. We'll design, build and launch your website - so you can focus on serving your customers.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-[28px] w-full mt-4">
              {/* Feature 1 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex gap-[20px] items-start transition-all"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#F4EEFF] text-[#4400AF]">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <h3 className="text-[17px] font-bold text-[#111827]">Save Your Time</h3>
                  <p className="text-[15px] text-[#4B5563] mt-1 leading-snug">Focus on running your business while we build your website.</p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex gap-[20px] items-start transition-all"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#F4EEFF] text-[#4400AF]">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <h3 className="text-[17px] font-bold text-[#111827]">Complete Website Setup</h3>
                  <p className="text-[15px] text-[#4B5563] mt-1 leading-snug">Everything from design and setup to lead collection and analytics.</p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex gap-[20px] items-start transition-all"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[12px] bg-[#F4EEFF] text-[#4400AF]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <h3 className="text-[17px] font-bold text-[#111827]">Ready in Just 3–5 Days</h3>
                  <p className="text-[15px] text-[#4B5563] mt-1 leading-snug">A professional website delivered quickly without compromising quality.</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <button className="mt-4 h-[48px] px-[24px] bg-[#F4EEFF] text-[#111827] font-semibold text-[15px] rounded-lg flex items-center justify-center gap-2 hover:bg-[#EBE6F5] hover:shadow-md transition-all duration-300 transform hover:-translate-y-[2px]">
              See What's Included &rarr;
            </button>
          </motion.div>

          {/* Right Column (Image + Cards) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[65%] relative mt-16 lg:mt-0 lg:-ml-[10%]"
          >
            {/* Image Container with seamless fade masks */}
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
              <img 
                src={image1} 
                alt="Business Owner working" 
                className="w-full h-full object-cover rounded-3xl lg:rounded-none lg:rounded-l-3xl"
                style={{ objectPosition: '70% center' }}
              />
              {/* Fade masks to blend into background on desktop */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#FAF9F7] via-transparent to-transparent w-[30%]" />
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#FAF9F7] via-transparent to-transparent h-full" />
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-[#FAF9F7] via-transparent to-transparent h-[15%]" />

              {/* Floating Overlays */}
              
              {/* Top-Left: Website Preview */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-4 md:top-12 left-4 md:left-[15%] w-[280px] md:w-[340px] bg-white rounded-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden z-20"
              >
                {/* Fake Browser Header */}
                <div className="bg-white border-b border-slate-100 p-2.5 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                {/* Fake Website Content */}
                <div className="p-4 bg-[#F8F9FA] h-[160px] relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-[#E5E7EB]" />
                    <div className="flex gap-2">
                      <div className="w-8 h-1.5 rounded-full bg-slate-300" />
                      <div className="w-8 h-1.5 rounded-full bg-slate-300" />
                      <div className="w-8 h-1.5 rounded-full bg-slate-300" />
                    </div>
                  </div>
                  <div className="w-2/3 h-3 bg-slate-200 rounded-full mb-2" />
                  <div className="w-1/2 h-3 bg-slate-200 rounded-full mb-4" />
                  <div className="w-16 h-6 bg-[#111827] rounded-full" />
                  
                  {/* Fake floral decorative shape */}
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#E2E8F0] rounded-full opacity-50" />
                </div>
              </motion.div>

              {/* Top-Right: Notification Card */}
              <motion.div 
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute top-28 md:top-40 right-2 md:right-[5%] w-[260px] md:w-[280px] bg-white rounded-[16px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] border border-slate-100 p-4 z-30 flex gap-3.5 items-start"
              >
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#22C55E] flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <h4 className="text-[13px] font-bold text-[#111827]">New Enquiry Received!</h4>
                    <span className="text-[10px] font-bold text-[#4400AF]">NOW</span>
                  </div>
                  <p className="text-[12px] text-[#4B5563] leading-snug">Someone just submitted the contact form.</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;

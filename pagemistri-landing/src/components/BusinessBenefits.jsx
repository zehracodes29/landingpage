import React from 'react';
import { motion } from 'framer-motion';
import { Clock, LayoutGrid, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import image1 from '../assets/images/image1.png';

const BusinessBenefits = () => {
  return (
    <section className="relative bg-[#FAF9F7] py-16 md:py-24 lg:py-[96px] overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-8 lg:px-[32px] w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[64px] items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-[42%] flex flex-col items-start gap-10"
          >
            {/* Header Content */}
            <div className="flex flex-col gap-6 w-full">
              <span className="text-[#4400AF] text-xs md:text-[13px] font-bold uppercase tracking-[0.15em]">
                Built for Busy Business Owners
              </span>
              <h2 className="text-[36px] md:text-[46px] lg:text-[56px] xl:text-[60px] font-[800] text-[#111827] leading-[1.1] tracking-tight">
                Your Business Needs Your Time.<br />Your Website Doesn't.
              </h2>
              <p className="text-[18px] text-[#4B5563] leading-[1.8] max-w-[540px]">
                We understand that your focus should be on growing your business, not figuring out how to build a website. We take care of everything so you don't have to.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-[28px] w-full">
              {/* Feature 1 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex gap-[20px] items-start transition-all hover:shadow-[0_10px_30px_-15px_rgba(68,0,175,0.15)] rounded-2xl p-2 -ml-2 bg-transparent hover:bg-white/50"
              >
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#F4EEFF] text-[#4400AF]">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center min-h-[56px]">
                  <h3 className="text-lg font-bold text-[#111827]">Save Your Time</h3>
                  <p className="text-[#4B5563] mt-1 leading-snug">Focus on running your business while we build your website.</p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex gap-[20px] items-start transition-all hover:shadow-[0_10px_30px_-15px_rgba(68,0,175,0.15)] rounded-2xl p-2 -ml-2 bg-transparent hover:bg-white/50"
              >
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#F4EEFF] text-[#4400AF]">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center min-h-[56px]">
                  <h3 className="text-lg font-bold text-[#111827]">Complete Website Setup</h3>
                  <p className="text-[#4B5563] mt-1 leading-snug">Everything from design and setup to lead collection and analytics.</p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                whileHover={{ y: -2 }}
                className="flex gap-[20px] items-start transition-all hover:shadow-[0_10px_30px_-15px_rgba(68,0,175,0.15)] rounded-2xl p-2 -ml-2 bg-transparent hover:bg-white/50"
              >
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[16px] bg-[#F4EEFF] text-[#4400AF]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center min-h-[56px]">
                  <h3 className="text-lg font-bold text-[#111827]">Ready in Just 3–5 Days</h3>
                  <p className="text-[#4B5563] mt-1 leading-snug">A professional website delivered quickly without compromising quality.</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <button className="mt-2 h-[50px] px-[32px] bg-[#4400AF] text-white font-semibold text-[15px] rounded-xl flex items-center justify-center gap-2.5 hover:bg-[#35008a] hover:shadow-lg hover:shadow-[#4400AF]/20 transition-all duration-300 transform hover:-translate-y-[2px]">
              See What's Included
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[58%] relative"
          >
            {/* Subtle warm radial gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(244,238,255,0.8)_0%,rgba(250,249,247,0)_70%)] rounded-full -z-10 pointer-events-none" />

            {/* Image Container */}
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[640px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(68,0,175,0.1)] border border-[#DCCEFF]/50 bg-[#FAF9F7]">
              <img 
                src={image1} 
                alt="Business Owner working" 
                className="w-full h-full object-cover"
              />

              {/* Floating Overlays */}
              
              {/* Top-Left: Website Preview */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-8 left-4 md:left-8 w-[220px] md:w-[260px] bg-white rounded-[20px] shadow-lg border border-slate-100 overflow-hidden z-20"
              >
                <div className="bg-slate-50 border-b border-slate-100 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                </div>
                <div className="p-4 bg-white space-y-3">
                  <div className="w-1/2 h-3 bg-slate-100 rounded-full" />
                  <div className="w-3/4 h-3 bg-slate-100 rounded-full" />
                  <div className="w-full h-16 bg-[#F4EEFF]/60 rounded-xl mt-4" />
                </div>
              </motion.div>

              {/* Top-Right: Notification Card */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-16 right-4 md:right-8 w-[240px] md:w-[280px] bg-white rounded-[20px] shadow-xl border border-slate-100 p-4 z-20 flex gap-3.5 items-start"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex justify-between items-center mb-1">
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

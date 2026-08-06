import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Blocks, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#FAF9F7] pt-24 pb-20 flex items-center overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Copy & Checklist */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-10"
          >
            <div className="flex flex-col gap-6">
              <div className="inline-flex">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F4EEFF] border border-[#DCCEFF] text-[#4400AF] text-[13px] font-bold uppercase tracking-[0.12em] shadow-sm">
                  Professional Website Setup • Starting at ₹5,000
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight leading-[1.15]">
                Your Professional Business Website, Ready in Just 3-5 Days
              </h1>
              <p className="text-lg lg:text-xl text-[#4B5563] leading-relaxed max-w-xl">
                Get a completely done-for-you, mobile-friendly, and lead-optimized website without lifting a finger. You run your business, we build your brand online.
              </p>
            </div>

            <div className="flex flex-col gap-7 w-full">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex gap-5 items-start transition-transform"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4EEFF] text-[#4400AF] shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-[#111827]">Save Your Time</h3>
                  <p className="text-[16px] text-[#4B5563] mt-1.5 leading-snug">We handle all the technical heavy lifting.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="flex gap-5 items-start transition-transform"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4EEFF] text-[#4400AF] shadow-sm">
                  <Blocks className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-[#111827]">Complete Website Setup</h3>
                  <p className="text-[16px] text-[#4B5563] mt-1.5 leading-snug">From domain connection to mobile optimization.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="flex gap-5 items-start transition-transform"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4EEFF] text-[#4400AF] shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-[#111827]">Ready in Just 3-5 Days</h3>
                  <p className="text-[16px] text-[#4B5563] mt-1.5 leading-snug">Fast delivery without compromising on quality.</p>
                </div>
              </motion.div>
            </div>

            <button className="mt-2 px-8 py-4 bg-[#F4EEFF] text-[#111827] font-semibold text-[15px] rounded-xl hover:bg-[#DCCEFF] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-[#DCCEFF]/50">
              See What's Included &rarr;
            </button>
          </motion.div>

          {/* Right Column: Multi-step Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative lg:pl-4"
          >
            {/* Background Blob / Glow for premium feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-[#F4EEFF] to-transparent rounded-full blur-[120px] opacity-80 -z-10 pointer-events-none" />

            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(68,0,175,0.1)] border border-[#DCCEFF]/60 p-8 sm:p-10 w-full relative z-10 transition-shadow hover:shadow-[0_25px_65px_-15px_rgba(68,0,175,0.15)]">
              
              {/* Step Indicators */}
              <div className="flex items-center justify-center gap-2.5 mb-10">
                <div className="flex items-center gap-2.5">
                  <div className="h-3 w-3 rounded-full bg-[#4400AF] ring-4 ring-[#F4EEFF]" />
                  <div className="h-1 w-10 rounded-full bg-[#F4EEFF]" />
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>

              <div className="text-center mb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B5563]">
                  Tell Us About Your Business
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#111827]">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all shadow-sm hover:border-[#DCCEFF]" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#111827]">
                    Business name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your business name" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all shadow-sm hover:border-[#DCCEFF]" 
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#111827]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="you@example.com" 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all shadow-sm hover:border-[#DCCEFF]" 
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#111827]">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all shadow-sm hover:border-[#DCCEFF]" 
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#111827]">
                    Business Category <span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all shadow-sm hover:border-[#DCCEFF] appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundPosition: "right 1.25rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.25em" }}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Enter select</option>
                    <option value="coach">Coach / Consultant</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="restaurant">Restaurant / Café</option>
                    <option value="salon">Salon / Spa</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail Store</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#111827]">
                    What do you offer? <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Interior Design Services, Home Bakery" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all shadow-sm hover:border-[#DCCEFF]" 
                    required
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="button" 
                    className="w-auto px-10 py-4 bg-[#4400AF] text-white font-bold text-[15px] rounded-xl hover:bg-[#35008a] hover:shadow-xl hover:shadow-[#4400AF]/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

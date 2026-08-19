import React from 'react';
import { motion } from 'framer-motion';
import { Clock, LayoutGrid, Sparkles } from 'lucide-react';
import DomainSetupCard from '@/components/DomainSetupCard';

const BusinessBenefits = () => {
 return (
 <section className="relative bg-slate-50 dark:bg-[#090d16] py-16 lg:py-24 font-sans overflow-hidden">
 <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-[32px] w-full">
 <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
 
 {/* Left Column (Visual) */}
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="w-full lg:col-span-6 relative z-20"
 >
 <DomainSetupCard />
 </motion.div>

 {/* Right Column (Text Content) */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.7, ease: "easeOut" }}
 className="w-full lg:col-span-6 flex flex-col items-start z-20 relative lg:pl-6"
 >
 {/* Header Content */}
 <div className="flex flex-col gap-4 w-full mb-10">
 <div className="inline-flex mb-1">
 <span className="bg-[rgba(68,0,175,0.08)] text-[#4400AF] dark:border text-xs font-bold px-3 py-1.5 rounded-full tracking-wide shadow-sm uppercase">
 👤 BUILT FOR BUSY BUSINESS OWNERS
 </span>
 </div>
 <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-[800] text-[#111827] dark:text-white leading-[1.2] tracking-tight">
 Your Business Needs Your Time. Your Website <span className="text-[#4400AF]">Doesn't.</span>
 </h2>
 <p className="text-[17px] text-[#6B7280] dark:text-slate-400 leading-[1.6] max-w-[540px] mt-2">
 You're busy running your business. We'll design, build and launch your website - so you can focus on serving your customers.
 </p>
 </div>

 {/* Features List */}
 <div className="flex flex-col w-full">
 {/* Feature 1 */}
 <motion.div 
 whileHover={{ x: 4 }}
 className="flex gap-[20px] items-start transition-all border-b border-slate-200 dark:border-slate-800/60 pb-6 mb-6"
 >
 <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-2xl bg-[rgba(68,0,175,0.08)] dark:bg-[rgba(68,0,175,0.08)] text-[#4400AF] shadow-sm">
 <Clock className="w-6 h-6" />
 </div>
 <div className="flex flex-col justify-center pt-0.5">
 <h3 className="text-[17px] font-bold text-[#111827] dark:text-white mb-1.5">Save Your Time</h3>
 <p className="text-[15px] text-[#6B7280] dark:text-slate-400 leading-relaxed max-w-md">Focus on running your business while we build your website.</p>
 </div>
 </motion.div>

 {/* Feature 2 */}
 <motion.div 
 whileHover={{ x: 4 }}
 className="flex gap-[20px] items-start transition-all border-b border-slate-200 dark:border-slate-800/60 pb-6 mb-6"
 >
 <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-2xl bg-[rgba(68,0,175,0.08)] dark:bg-[rgba(68,0,175,0.08)] text-[#4400AF] shadow-sm">
 <LayoutGrid className="w-6 h-6" />
 </div>
 <div className="flex flex-col justify-center pt-0.5">
 <h3 className="text-[17px] font-bold text-[#111827] dark:text-white mb-1.5">Complete Website Setup</h3>
 <p className="text-[15px] text-[#6B7280] dark:text-slate-400 leading-relaxed max-w-md">Everything from design and setup to lead collection and analytics.</p>
 </div>
 </motion.div>

 {/* Feature 3 */}
 <motion.div 
 whileHover={{ x: 4 }}
 className="flex gap-[20px] items-start transition-all"
 >
 <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-2xl bg-[rgba(68,0,175,0.08)] dark:bg-[rgba(68,0,175,0.08)] text-[#4400AF] shadow-sm">
 <Sparkles className="w-6 h-6" />
 </div>
 <div className="flex flex-col justify-center pt-0.5">
 <h3 className="text-[17px] font-bold text-[#111827] dark:text-white mb-1.5">Ready in Just 3–5 Days</h3>
 <p className="text-[15px] text-[#6B7280] dark:text-slate-400 leading-relaxed max-w-md">A professional website delivered quickly without compromising quality.</p>
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

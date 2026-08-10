import React from 'react';
import { motion } from 'framer-motion';
import { Clock, LayoutGrid, Sparkles } from 'lucide-react';
import SectionBadge from '@/ui/SectionBadge';
import LeadForm from '@/components/LeadForm';

const BusinessBenefits = () => {
 return (
 <section id="lead-form" className="relative bg-[#FAF9F7] py-16 md:py-24 font-sans scroll-mt-20">
 <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-[32px] w-full">
 <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
 
 {/* Left Column (Form) */}
 <motion.div 
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 1, ease: "easeOut" }}
 className="w-full lg:col-span-7 relative z-20"
 >
 <LeadForm />
 </motion.div>

 {/* Right Column (Text Content) */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.7, ease: "easeOut" }}
 className="w-full lg:col-span-5 flex flex-col items-start gap-8 z-20 relative lg:pl-4"
 >
 {/* Header Content */}
 <div className="flex flex-col gap-4 w-full">
 <div className="inline-flex mb-2">
 <SectionBadge>Built for Busy Business Owners</SectionBadge>
 </div>
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
 </motion.div>

 </div>
 </div>
 </section>
 );
};

export default BusinessBenefits;

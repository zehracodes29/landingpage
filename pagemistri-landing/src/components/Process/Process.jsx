import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';

const steps = [
 {
 num: '1',
 title: 'Tell Us About Your Business',
 description: 'Clarify the offer, audience, goals, and must-have page sections before design starts.'
 },
 {
 num: '2',
 title: 'Share Your Content',
 description: "Send your logo, photos and business details. Don't have everything ready? We'll guide you."
 },
 {
 num: '3',
 title: 'We Build Your Website',
 description: 'Our team designs and develops your business website based on your requirements.'
 },
 {
 num: '4',
 title: 'Review & Approve',
 description: "We'll share the first version with you. Two revisions are included to make sure everything looks perfect."
 },
 {
 num: '5',
 title: 'Go Live',
 description: 'Your website is published and ready to receive enquiries from your customers.'
 }
];

const Process = () => {
 const containerRef = useRef(null);
 
 // For the animated line
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start 80%", "end 50%"]
 });
 
 const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

 return (
 <section id="how-it-works" className="py-12 lg:py-16 bg-[#FAF9F7] font-sans overflow-hidden">
 <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
 
 {/* Header */}
 <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
 <div className="mb-6 inline-flex">
 <SectionBadge>Simple 5-Step Process</SectionBadge>
 </div>
 <h2 className="text-[32px] md:text-[44px] font-[800] text-[#111827] tracking-tight leading-[1.15] mb-6">
 Getting Your Business Online Is Easier Than You Think
 </h2>
 <p className="text-[17px] text-[#4B5563] leading-[1.6]">
 From your first enquiry to a live website, we've made the entire process simple, transparent and stress-free.
 </p>
 </div>

 {/* Timeline Container */}
 <div ref={containerRef} className="relative max-w-6xl mx-auto">
 
 {/* Desktop View (Horizontal Grid - md and up) */}
 <div className="hidden md:block relative pt-8">
 {/* Background Line */}
 <div className="absolute top-[58px] left-[10%] right-[10%] h-0.5 bg-slate-200 " />
 
 {/* Animated Progress Line */}
 <motion.div 
 className="absolute top-[58px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 origin-left"
 style={{ scaleX: lineScaleX }}
 />

 <div className="grid grid-cols-5 gap-4">
 {steps.map((step, index) => (
 <motion.div 
 key={index}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.5, delay: index * 0.15 }}
 className="flex flex-col items-center text-center relative z-10 group"
 >
 {/* Node */}
 <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-lg font-bold text-slate-700 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-purple-500/20 group-hover:border-purple-500 mb-6 relative z-10">
 <span className="group-hover:text-purple-600 transition-colors">{step.num}</span>
 </div>
 
 {/* Content */}
 <div className="px-2">
 <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
 {step.title}
 </h3>
 <p className="text-xs text-slate-600 leading-relaxed">
 {step.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 {/* Mobile View (Vertical Timeline - below md) */}
 <div className="md:hidden block relative mt-2 mb-4 px-2">
 <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-600 via-indigo-500 to-purple-300" />
 
 <div className="flex flex-col gap-5 relative">
 {steps.map((step, index) => (
 <motion.div 
 key={index}
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.4, delay: index * 0.1 }}
 className="flex items-start gap-4 relative group"
 >
 {/* Node */}
 <div className="flex items-center justify-center w-8 h-8 shrink-0 bg-white border-2 border-purple-600 p-1.5 rounded-full shadow-md z-10 mt-2">
 <span className="text-xs font-bold text-purple-600">{step.num}</span>
 </div>
 
 {/* Content Card */}
 <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 shadow-sm flex-1">
 <h3 className="text-sm font-bold text-slate-900 mb-1.5">
 {step.title}
 </h3>
 <p className="text-xs text-slate-600 leading-relaxed">
 {step.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>

 </div>
 </div>
 </section>
 );
};

export default Process;

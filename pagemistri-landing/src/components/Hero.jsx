import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CountUp from 'react-countup';
import SectionBadge from '@/ui/SectionBadge';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
 return (
 <section className="bg-gradient-to-b from-purple-50/60 via-white to-slate-50 relative pt-16 md:pt-24 lg:pt-32 pb-8 w-full font-sans min-h-[90vh] flex flex-col justify-center">
 {/* Radial Gradient Glow */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

 <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
 
 {/* LEFT COLUMN: Content & CTAs */}
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6 }}
 className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
 >
 <div className="inline-flex justify-center lg:justify-start mb-6">
 <SectionBadge>PROFESSIONAL WEBSITE SETUP • STARTING AT ₹5,000</SectionBadge>
 </div>
 
 <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
 Your Professional<br className="hidden lg:block" /> Business Website,<br className="hidden lg:block" /> Ready in Just 3-5 Days
 </h1>
 
 <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
 From design and setup to lead collection and analytics, we build everything for you - so you can focus on growing your business, not building your website.
 </p>

 <motion.div 
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2, duration: 0.5 }}
 className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mx-auto lg:mx-0 mb-8"
 >
 {[
 { text: <>Starting at ₹<CountUp end={5000} duration={2.5} separator="," /></> },
 { text: <>Delivered in 3–<CountUp end={5} duration={2.5} /> Working Days</> },
 { text: "Lead Collection Included" },
 { text: "Mobile-Friendly" }
 ].map((item, i) => (
 <div key={i} className="bg-white/80 border border-slate-200/80 p-3 rounded-xl font-medium text-sm text-slate-800 shadow-sm flex items-center gap-2 justify-center sm:justify-start">
 <CheckCircle2 className="w-4 h-4 text-[#4400AF] shrink-0" />
 <span>{item.text}</span>
 </div>
 ))}
 </motion.div>

 <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
 <button 
 onClick={() => document.getElementById('whats-included')?.scrollIntoView({ behavior: 'smooth' })}
 className="px-6 py-3 bg-[#4400AF] text-white font-semibold text-[15px] rounded-lg hover:bg-[#310080] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-[1px] w-full sm:w-auto border-none"
 >
 See How It Works &rarr;
 </button>
 </div>
 </motion.div>

 {/* RIGHT COLUMN: Lead Form */}
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.3, duration: 0.6 }}
 className="relative w-full mt-10 lg:mt-0 order-2 lg:order-2"
 >
 <div className="w-full max-w-[550px] mx-auto bg-transparent shadow-none border-none p-0">
 <LeadForm />
 </div>
 </motion.div>
 </div>
 </section>
 );
};

export default Hero;

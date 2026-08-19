import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CountUp from 'react-countup';
import SectionBadge from '@/ui/SectionBadge';
import HeroMockupVisual from '@/components/HeroMockupVisual';

const Hero = () => {
 return (
 <section id="hero" className="bg-gradient-to-b from-purple-50/60 dark:from-slate-900 via-white dark:via-slate-950 to-slate-50 dark:to-slate-950 relative pt-24 lg:pt-32 pb-12 lg:pb-16 w-full font-sans min-h-[90vh] flex flex-col justify-center">
 
 <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
 
 {/* LEFT COLUMN: Content & CTAs */}
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6 }}
 className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
 >
 <div className="inline-flex justify-center lg:justify-start mb-6">
 <SectionBadge>Complete website setup from ₹5,000.</SectionBadge>
 </div>
 
 <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-text-primary dark:text-white leading-tight tracking-tight mb-6">
 A Professional<br className="hidden lg:block" /> Business Website That Helps You<br className="hidden lg:block" /> Collect Leads
 </h1>
 
 <p className="text-lg md:text-xl text-text-muted dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
 Get a mobile-responsive website equipped with enquiry forms and a built-in lead dashboard — set up and launched in 3–5 days.
 </p>



 <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
 <a 
 href="#complete-website-setup"
 className="bg-brand hover:bg-brand-hover text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 w-full sm:w-auto inline-block text-center"
 >
 Start My Website
 </a>
 <button 
 onClick={() => document.getElementById('whats-included')?.scrollIntoView({ behavior: 'smooth' })}
 className="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition-all w-full sm:w-auto"
 >
 See How It Works
 </button>
 </div>
 </motion.div>

 {/* RIGHT COLUMN: Visual & Badges */}
 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.3, duration: 0.6 }}
 className="relative w-full mt-10 lg:mt-0 order-2 lg:order-2 flex flex-col justify-center"
 >
 <HeroMockupVisual />
 
 <motion.div 
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.4, duration: 0.5 }}
 className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[550px] mx-auto mt-8 lg:mt-12"
 >
 {[
 { text: <>Starting at ₹<CountUp end={5000} duration={2.5} separator="," /></> },
 { text: <>Delivered in 3–<CountUp end={5} duration={2.5} /> Working Days</> },
 { text: "Lead Collection Included" },
 { text: "Mobile-Friendly" }
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 shadow-sm justify-center sm:justify-start">
 <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
 <span>{item.text}</span>
 </div>
 ))}
 </motion.div>
 </motion.div>
 </div>
 </section>
 );
};

export default Hero;

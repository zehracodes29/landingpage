import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CountUp from 'react-countup';
import SectionBadge from '@/ui/SectionBadge';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50/60 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative py-16 md:py-24 lg:py-32 w-full font-sans min-h-[90vh] flex flex-col justify-center">
      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
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
          
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
            Your Professional<br className="hidden lg:block" /> Business Website,<br className="hidden lg:block" /> Ready in Just 3-5 Days
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
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
              <div key={i} className="bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-3 rounded-xl font-medium text-sm text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#4400AF] dark:text-purple-400 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#4400AF] text-white font-bold text-[15px] rounded-xl hover:bg-[#35008a] transition-all duration-300 shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Let's Build My Website &rarr;
            </button>
            <button 
              onClick={() => document.getElementById('whats-included')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-[15px] rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 w-full sm:w-auto"
            >
              See How It Works
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Browser Frame & Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-full mt-10 lg:mt-0"
        >
          <div className="relative group w-full max-w-[600px] mx-auto">
            {/* Floating Badge 1 */}
            <div className="absolute -top-6 -left-2 md:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 z-20 animate-[bounce_3s_infinite]">
              <span className="text-xl">⚡</span>
              <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">Ready in 3-5 Days</span>
            </div>
            
            {/* Floating Badge 2 */}
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse" />
              <span className="text-xl">🎉</span>
              <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">Leads Managed Effortlessly</span>
            </div>

            {/* Modern Browser Mockup Window */}
            <div className="w-full max-w-xl lg:max-w-none min-h-[320px] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 overflow-hidden relative">
              {/* Browser Header Bar */}
              <div className="bg-slate-100 dark:bg-slate-800/50 px-4 py-3 flex items-center border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white dark:bg-slate-900 rounded-md px-4 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    pagemistri.com
                  </div>
                </div>
              </div>
              
              {/* Actual Local Image */}
              <img 
                src="/image1.png" 
                alt="Hero Preview" 
                className="w-full h-auto object-cover max-h-[480px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

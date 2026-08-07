import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CountUp from 'react-countup';
import SectionBadge from '../../ui/SectionBadge';
import heroBg from '../../assets/images/image1.png';

const Hero = () => {
  return (
    <section 
      className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden font-sans min-h-[90vh] flex items-center justify-center bg-[#FAF9F7]"
      style={{ 
        backgroundImage: `url(${heroBg.src || heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-0" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full relative z-10 text-center flex flex-col items-center justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="inline-flex justify-center mb-2">
            <SectionBadge>PROFESSIONAL WEBSITE SETUP • STARTING AT ₹5,000</SectionBadge>
          </div>
          
          <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-[800] text-[#111827] tracking-tight leading-[1.1]">
            Your Professional<br />Business Website,<br />Ready in Just 3-5 Days
          </h1>
          
          <p className="text-[18px] md:text-[20px] text-[#4B5563] leading-[1.6] max-w-[600px] mt-4 mb-2">
            From design and setup to lead collection and analytics, we build everything for you - so you can focus on growing your business, not building your website.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto my-6"
          >
            {[
              { text: <>Starting at ₹<CountUp end={5000} duration={2.5} separator="," /></> },
              { text: <>Delivered in 3–<CountUp end={5} duration={2.5} /> Working Days</> },
              { text: "Lead Collection Included" },
              { text: "Mobile-Friendly" }
            ].map((item, i) => (
              <div key={i} className="group p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200 shadow-sm flex items-center justify-center sm:justify-start gap-3.5 transition-all duration-300 relative overflow-hidden hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 cursor-default text-left">
                {/* Top Edge Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container with Pulse */}
                <div className="relative w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center border border-purple-200 shrink-0">
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:animate-ping" />
                  <CheckCircle2 className="w-4 h-4 text-[#4400AF] relative z-10" strokeWidth={3} />
                </div>
                
                <span className="text-[14px] font-semibold text-slate-800 relative z-10">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#4400AF] text-white font-bold text-[15px] rounded-xl hover:bg-[#35008a] transition-all duration-300 shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Let's Build My Website &rarr;
            </button>
            <button 
              onClick={() => document.getElementById('whats-included')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 text-[#111827] font-bold text-[15px] rounded-xl hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto hover:shadow-sm"
            >
              See What's Included
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

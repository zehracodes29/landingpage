import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Layout, MessageSquare, LineChart, Bell, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen bg-[#faf9f7] overflow-hidden flex items-center justify-center pt-24 pb-16"
      style={{ fontFamily: "'Inter', sans-serif" }} 
    >
      {/* Soft Purple Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#4400af]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#4400af]/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="inline-flex items-center rounded-full bg-[#ebe6f5] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#4400af] ring-1 ring-inset ring-[#4400af]/10 mb-6 shadow-sm">
                Professional Website Setup • Starting at ₹5,000
              </span>
              <h1 className="text-5xl lg:text-[4rem] font-bold text-[#111827] tracking-tight leading-[1.15]">
                Your Professional <br />Business Website,<br /> Ready in 3-5 Days
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-[#4b5563] max-w-lg leading-relaxed">
              Get a stunning, mobile-friendly, and lead-ready website designed to grow your business. We handle everything from setup to launch, so you can focus on what you do best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="inline-flex justify-center items-center gap-2 rounded-xl bg-[#4400af] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#4400af]/20 hover:bg-[#35008a] hover:shadow-xl transition-all hover:-translate-y-0.5">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex justify-center items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#111827] shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-0.5">
                <Play className="w-5 h-5 fill-[#111827] text-[#111827]" />
                See How It Works
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#4400af]" />
                <span className="text-[15px] font-medium text-[#4b5563]">Mobile-friendly design</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#4400af]" />
                <span className="text-[15px] font-medium text-[#4b5563]">Lead capture ready</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#4400af]" />
                <span className="text-[15px] font-medium text-[#4b5563]">SEO optimized</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockup (Floating 3D Composition with Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[550px] lg:h-[650px] w-full flex items-center justify-center mt-12 lg:mt-0"
            style={{ perspective: "1200px" }}
          >
            {/* Background Image of Business Owner */}
            <motion.div
               animate={{ y: [-5, 5, -5] }}
               transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
               className="absolute w-[85%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl z-0 border-8 border-white"
               style={{ transform: "rotateY(-5deg) rotateX(2deg) translateZ(-50px)" }}
            >
               <img 
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1600&auto=format&fit=crop" 
                 alt="Business Owner"
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#4400af]/30 to-transparent" />
            </motion.div>

            {/* Main Landing Page Preview Card */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute left-0 top-[5%] w-[65%] max-w-[320px] bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden z-10"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="bg-slate-50 border-b border-slate-100 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="mx-auto bg-white rounded-md px-8 py-1 text-[10px] font-medium text-slate-400 border border-slate-200 shadow-sm flex items-center gap-1.5">
                  <Layout className="w-3 h-3" />
                  yourbrand.com
                </div>
              </div>
              <div className="p-5 h-[280px] bg-white relative">
                <div className="w-16 h-4 bg-[#ebe6f5] rounded-md mb-6" />
                <div className="w-full h-8 bg-[#111827] rounded-lg mb-3" />
                <div className="w-2/3 h-8 bg-[#111827] rounded-lg mb-4" />
                <div className="w-1/2 h-3 bg-slate-100 rounded-full mb-8" />
                <div className="w-24 h-8 bg-[#4400af] rounded-lg mb-8 shadow-sm shadow-[#4400af]/30" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 bg-slate-50 rounded-xl border border-slate-100 p-3">
                     <div className="w-6 h-6 rounded-full bg-[#ebe6f5] mb-2" />
                     <div className="w-full h-1.5 bg-slate-200 rounded-full mb-1.5" />
                     <div className="w-2/3 h-1.5 bg-slate-200 rounded-full" />
                  </div>
                  <div className="h-20 bg-slate-50 rounded-xl border border-slate-100 p-3">
                     <div className="w-6 h-6 rounded-full bg-[#ebe6f5] mb-2" />
                     <div className="w-full h-1.5 bg-slate-200 rounded-full mb-1.5" />
                     <div className="w-2/3 h-1.5 bg-slate-200 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Notification Card */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 top-[20%] w-64 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl p-4 z-20 flex items-start gap-4"
              style={{ transform: "translateZ(60px)" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#4400af] flex items-center justify-center shrink-0 shadow-lg shadow-[#4400af]/30">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#111827]">New Lead Captured</p>
                <p className="text-xs text-[#4b5563] mt-0.5">Rahul submitted the enquiry form</p>
                <p className="text-[10px] font-semibold text-[#4400af] mt-2 uppercase tracking-wide">Just now</p>
              </div>
            </motion.div>

            {/* WhatsApp Lead Card */}
            <motion.div 
              animate={{ y: [12, 0, 12] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-6 bottom-[10%] w-60 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/50 shadow-[0_20px_50px_-12px_rgba(68,0,175,0.15)] p-4 z-30"
              style={{ transform: "translateZ(80px)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                  <span className="text-sm font-bold text-[#111827]">WhatsApp</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.6)]" />
              </div>
              <div className="bg-[#f0f2f5] rounded-xl p-3 text-xs text-[#4b5563] border border-slate-100 shadow-inner">
                "Hi, I'd like to book a consultation for my business."
              </div>
            </motion.div>

            {/* Analytics Mini Chart */}
            <motion.div 
              animate={{ y: [-5, 10, -5] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
              className="absolute left-4 bottom-[2%] w-48 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl p-5 z-20"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-[#ebe6f5] flex items-center justify-center">
                  <LineChart className="w-4 h-4 text-[#4400af]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#4b5563] font-bold mb-0.5">Visits</p>
                  <p className="text-sm font-black text-[#111827]">+2,408</p>
                </div>
              </div>
              {/* Chart lines */}
              <div className="flex items-end gap-1.5 h-12">
                <motion.div initial={{ height: "30%" }} animate={{ height: "40%" }} transition={{ delay: 1, duration: 1 }} className="w-full bg-[#ebe6f5] rounded-t-md" />
                <motion.div initial={{ height: "50%" }} animate={{ height: "60%" }} transition={{ delay: 1.2, duration: 1 }} className="w-full bg-[#d7cdf0] rounded-t-md" />
                <motion.div initial={{ height: "40%" }} animate={{ height: "45%" }} transition={{ delay: 1.4, duration: 1 }} className="w-full bg-[#c2b4eb] rounded-t-md" />
                <motion.div initial={{ height: "70%" }} animate={{ height: "85%" }} transition={{ delay: 1.6, duration: 1 }} className="w-full bg-[#9a80e1] rounded-t-md" />
                <motion.div initial={{ height: "90%" }} animate={{ height: "100%" }} transition={{ delay: 1.8, duration: 1 }} className="w-full bg-[#4400af] rounded-t-md shadow-[0_0_12px_rgba(68,0,175,0.4)]" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

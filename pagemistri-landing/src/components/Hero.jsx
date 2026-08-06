import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Layout, MessageSquare, LineChart, Bell, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen bg-slate-50 overflow-hidden flex items-center justify-center pt-20 pb-12"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Soft Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-500/20 mb-6 shadow-sm">
                Built for Indian businesses
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Launch faster. <br className="hidden lg:block"/>
                Capture leads. <br className="hidden lg:block"/>
                Grow your business.
              </h1>
            </div>
            
            <p className="text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
              Create stunning landing pages in minutes. Pagemistri provides everything you need to build your online presence, manage enquiries, and scale seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="inline-flex justify-center items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Start for ₹99/month
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex justify-center items-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-all">
                <Play className="w-5 h-5 fill-slate-700 text-slate-700" />
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-600">10 min setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-600">Mobile ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-600">Lead dashboard included</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockup (Floating 3D Composition) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[650px] w-full flex items-center justify-center mt-12 lg:mt-0"
            style={{ perspective: "1000px" }}
          >
            {/* Main Landing Page Mockup */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute w-[95%] max-w-[480px] bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10"
              style={{ transform: "rotateY(-5deg) rotateX(2deg)" }}
            >
              <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto bg-white rounded-md px-16 py-1.5 text-xs text-slate-400 border border-slate-200 shadow-sm flex items-center gap-2">
                  <Layout className="w-3 h-3" />
                  yourbrand.pagemistri.com
                </div>
              </div>
              <div className="p-8 h-[420px] bg-white relative">
                <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-50/50 to-transparent" />
                <div className="relative z-10">
                  <div className="w-24 h-6 bg-slate-200/60 rounded-md mb-8" />
                  <div className="w-full h-12 bg-slate-800 rounded-xl mb-4" />
                  <div className="w-3/4 h-12 bg-slate-800 rounded-xl mb-6" />
                  <div className="w-1/2 h-4 bg-slate-200 rounded-md mb-10" />
                  <div className="w-36 h-10 bg-blue-600 rounded-xl mb-12 shadow-sm shadow-blue-200" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                       <div className="w-8 h-8 rounded-full bg-blue-50 mb-3" />
                       <div className="w-full h-2 bg-slate-100 rounded-full mb-2" />
                       <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                    </div>
                    <div className="h-28 bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
                       <div className="w-8 h-8 rounded-full bg-blue-50 mb-3" />
                       <div className="w-full h-2 bg-slate-100 rounded-full mb-2" />
                       <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Notification Card */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-2 top-16 w-64 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xl p-4 z-20 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">New Enquiry</p>
                <p className="text-xs text-slate-500 mt-0.5">Rahul asked for a quote</p>
                <p className="text-xs text-blue-600 font-medium mt-2">Just now</p>
              </div>
            </motion.div>

            {/* WhatsApp Lead Card */}
            <motion.div 
              animate={{ y: [12, 0, 12] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-6 bottom-40 w-60 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-4 z-30"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-bold text-slate-900">WhatsApp</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              </div>
              <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 border border-slate-200 shadow-inner">
                "Hi, I'm interested in the premium plan. Can we connect?"
              </div>
            </motion.div>

            {/* Analytics Mini Chart */}
            <motion.div 
              animate={{ y: [-5, 10, -5] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute -right-4 bottom-16 w-48 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xl p-5 z-20"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center shadow-md">
                  <LineChart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">Conversion</p>
                  <p className="text-sm font-bold text-slate-900">12.4%</p>
                </div>
              </div>
              {/* Dummy Chart lines */}
              <div className="flex items-end gap-1.5 h-12">
                <motion.div initial={{ height: "10%" }} animate={{ height: "30%" }} transition={{ delay: 1, duration: 1 }} className="w-full bg-blue-100 rounded-t-md" />
                <motion.div initial={{ height: "20%" }} animate={{ height: "50%" }} transition={{ delay: 1.2, duration: 1 }} className="w-full bg-blue-200 rounded-t-md" />
                <motion.div initial={{ height: "15%" }} animate={{ height: "40%" }} transition={{ delay: 1.4, duration: 1 }} className="w-full bg-blue-300 rounded-t-md" />
                <motion.div initial={{ height: "30%" }} animate={{ height: "70%" }} transition={{ delay: 1.6, duration: 1 }} className="w-full bg-blue-400 rounded-t-md" />
                <motion.div initial={{ height: "40%" }} animate={{ height: "90%" }} transition={{ delay: 1.8, duration: 1 }} className="w-full bg-blue-600 rounded-t-md shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

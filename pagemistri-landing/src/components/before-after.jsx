"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Mail, 
  Table, 
  FileText,
  Camera,
  ArrowRight,
  User
} from "lucide-react";


export function BeforeAfterSection() {
  const [isWithPagemistri, setIsWithPagemistri] = useState(true);

  return (
    <section id="about-pagemistri" className="scroll-mt-20 relative bg-white dark:bg-slate-950 py-16 sm:py-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - COPY & TOGGLE */}
          <motion.div 
            className="flex flex-col items-start text-left max-w-xl lg:pr-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 dark:border-purple-800/50 dark:bg-purple-900/20 dark:text-purple-300 mb-6">
              BEFORE & AFTER PAGEMISTRI
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              From chaos to <span className="text-[#4400AF]">clarity.</span> In one switch.
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-md">
              Everything connected. Every lead tracked. Every follow-up remembered.
            </p>
            
            {/* Interactive Toggle Switch */}
            <div className="bg-slate-100 dark:bg-zinc-900 p-1.5 rounded-full flex items-center w-fit gap-1 shadow-inner border border-slate-200/50 dark:border-zinc-800/50">
              <button
                onClick={() => setIsWithPagemistri(false)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${!isWithPagemistri ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
              >
                Before Pagemistri
              </button>
              <button
                onClick={() => setIsWithPagemistri(true)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${isWithPagemistri ? "bg-[#4400AF] text-white shadow-md shadow-[#4400AF]/20" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
              >
                With Pagemistri
              </button>
            </div>
          </motion.div>

          {/* RIGHT CONTAINER - VISUALIZATION */}
          <div className="relative w-full h-[550px] lg:h-[650px] flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              {!isWithPagemistri ? (
                /* =========================================
                   STATE A: BEFORE PAGEMISTRI
                   ========================================= */
                <motion.div 
                  key="before"
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* Background Wavy Lines */}
                  <svg className="absolute inset-0 w-full h-full -z-10 opacity-40 dark:opacity-20" preserveAspectRatio="none">
                    <motion.path 
                      d="M -10% 20% Q 30% 0% 50% 50% T 110% 80%" 
                      fill="none" stroke="#4400AF" strokeWidth="1" strokeDasharray="5 5"
                      animate={{ strokeDashoffset: [0, -100] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path 
                      d="M -10% 80% Q 20% 100% 50% 50% T 110% 20%" 
                      fill="none" stroke="#4400AF" strokeWidth="1" strokeDasharray="5 5"
                      animate={{ strokeDashoffset: [0, -100] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path 
                      d="M 20% -10% Q 0% 30% 50% 50% T 80% 110%" 
                      fill="none" stroke="#4400AF" strokeWidth="1" strokeDasharray="5 5"
                      animate={{ strokeDashoffset: [0, -100] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>

                  {/* Scattered Cards */}
                  <div className="relative w-full max-w-[500px] h-full">
                    
                    {/* WhatsApp */}
                    <motion.div 
                      className="absolute top-[15%] left-[5%] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 shadow-lg flex items-center gap-4 z-10 w-[220px]"
                      animate={{ y: [-4, 4, -4], rotate: [-2, 2, -2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="bg-green-100 dark:bg-green-900/30 p-2.5 rounded-full shrink-0 relative">
                        <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white dark:border-zinc-900">3</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-0.5">WhatsApp</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">3 unread messages</div>
                      </div>
                    </motion.div>

                    {/* Instagram DMs */}
                    <motion.div 
                      className="absolute top-[30%] right-[0%] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 shadow-lg flex items-center gap-4 z-10 w-[220px]"
                      animate={{ y: [4, -4, 4], rotate: [2, -2, 2] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div className="bg-pink-100 dark:bg-pink-900/30 p-2.5 rounded-full shrink-0 relative">
                        <Camera className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white dark:border-zinc-900">12</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-0.5">Instagram DMs</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">12 new messages</div>
                      </div>
                    </motion.div>

                    {/* Emails */}
                    <motion.div 
                      className="absolute bottom-[35%] left-[0%] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 shadow-lg flex items-center gap-4 z-10 w-[200px]"
                      animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-full shrink-0 relative">
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white dark:border-zinc-900">7</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-0.5">Emails</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">7 unread</div>
                      </div>
                    </motion.div>

                    {/* Spreadsheet */}
                    <motion.div 
                      className="absolute bottom-[10%] right-[10%] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-4 shadow-lg flex items-center gap-4 z-10 w-[190px]"
                      animate={{ y: [5, -5, 5], rotate: [3, -3, 3] }}
                      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    >
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2.5 rounded-full shrink-0">
                        <Table className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-0.5">Spreadsheet</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">84 rows</div>
                      </div>
                    </motion.div>

                    {/* Notes */}
                    <motion.div 
                      className="absolute top-[60%] left-[25%] bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900/50 rounded-2xl p-4 shadow-lg flex items-center gap-3 z-10 w-[180px]"
                      animate={{ x: [-4, 4, -4], rotate: [-4, 4, -4] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    >
                      <FileText className="w-5 h-5 text-yellow-600 dark:text-yellow-500 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-0.5">Notes</div>
                        <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">Call tomorrow</div>
                      </div>
                    </motion.div>
                    
                    {/* CENTER ACTION BUTTON */}
                    <div className="absolute inset-0 m-auto w-16 h-16 z-30">
                      <button 
                        onClick={() => setIsWithPagemistri(true)}
                        className="w-full h-full bg-[#4400AF] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#4400AF]/40 hover:scale-110 hover:shadow-[#4400AF]/60 transition-all duration-300 group"
                        aria-label="Switch to With Pagemistri view"
                      >
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              ) : (
                /* =========================================
                   STATE B: WITH PAGEMISTRI
                   ========================================= */
                <motion.div 
                  key="after"
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="relative w-full max-w-[500px]">
                    
                    {/* Glow effect behind dashboard */}
                    <div className="absolute inset-0 bg-[#4400AF]/20 dark:bg-[#4400AF]/10 blur-[80px] rounded-full scale-110 -z-10" />

                    <div className="bg-white dark:bg-zinc-950 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100/80 dark:border-zinc-800/80">
                      
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Lead Dashboard</h3>
                      
                      {/* KPI Metrics Row */}
                      <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">New</span>
                          <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">12</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">Contacted</span>
                          <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">8</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">Qualified</span>
                          <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">5</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] sm:text-xs text-[#4400AF] dark:text-purple-400 font-medium uppercase tracking-wider mb-1">Won</span>
                          <span className="text-xl sm:text-2xl font-black text-[#4400AF] dark:text-purple-400">3</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-b border-gray-100 dark:border-zinc-800/80 my-5" />

                      {/* Recent Enquiries List */}
                      <div className="space-y-4">
                        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Recent Enquiries</div>
                        
                        {/* Entry 1 */}
                        <div className="flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-zinc-900/50 p-2 -mx-2 rounded-xl transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 dark:bg-zinc-800 p-2 rounded-full text-slate-500 dark:text-slate-400">
                              <User className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 dark:text-white">John Doe</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">2 mins ago</div>
                            </div>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[11px] font-bold px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-900/50">
                            New
                          </div>
                        </div>

                        {/* Entry 2 */}
                        <div className="flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-zinc-900/50 p-2 -mx-2 rounded-xl transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 dark:bg-zinc-800 p-2 rounded-full text-slate-500 dark:text-slate-400">
                              <User className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 dark:text-white">Sarah Smith</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">15 mins ago</div>
                            </div>
                          </div>
                          <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[11px] font-bold px-2.5 py-1 rounded-md border border-green-100 dark:border-green-900/50">
                            Contacted
                          </div>
                        </div>

                        {/* Entry 3 */}
                        <div className="flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-zinc-900/50 p-2 -mx-2 rounded-xl transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="bg-slate-100 dark:bg-zinc-800 p-2 rounded-full text-slate-500 dark:text-slate-400">
                              <User className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 dark:text-white">Michael Brown</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">1 hour ago</div>
                            </div>
                          </div>
                          <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-[11px] font-bold px-2.5 py-1 rounded-md border border-yellow-100 dark:border-yellow-900/50">
                            Qualified
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}

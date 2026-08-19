"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import React from "react";

export function AboutPagemistri() {
  return (
    <section id="about-pagemistri" className="scroll-mt-20 relative w-full overflow-hidden bg-gradient-to-tr from-[#4400AF]/5 via-white to-white dark:from-[#4400AF]/10 dark:via-slate-950 dark:to-slate-950 py-16 sm:py-20 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-5 space-y-8 z-10">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#4400AF] bg-[rgba(68,0,175,0.10)] uppercase">
              ABOUT PAGEMISTRI
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-[#111827] dark:text-white tracking-tight">
              What is <span className="text-[#4400AF]">Pagemistri?</span>
            </h2>

            <div className="space-y-6 text-lg text-[#6B7280] dark:text-slate-300 leading-relaxed">
              <p>
                Pagemistri helps businesses create an online presence,{" "}
                <strong>collect customer enquiries</strong>, and manage every
                opportunity from one place.
              </p>
              <p>
                Instead of using separate tools for landing pages, forms, and
                lead tracking, everything works together in one connected
                system.
              </p>
              <p>
                Whether enquiries come from social media, referrals, ads, or
                search, you always know where they are and what to do next.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#complete-website-setup"
                className="bg-[#4400AF] hover:bg-[#310080] text-white rounded-xl px-8 py-4 text-base font-bold shadow-md active:scale-95 transition-all group flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="bg-white hover:bg-gray-50 text-[#111827] border border-gray-200 hover:border-[#4400AF] dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-white dark:border-slate-800 dark:hover:border-[#4400AF] rounded-xl px-8 py-4 text-base font-bold group flex items-center justify-center transition-all"
              >
                <PlayCircle className="w-5 h-5 mr-2 text-[#52627A] dark:text-slate-400 group-hover:text-[#4400AF] transition-colors" />
                See How It Works
              </a>
            </div>
          </div>

          {/* Right Column - Showcase Canvas */}
          <div className="lg:col-span-7 relative z-10 w-full mt-8 lg:mt-0 flex flex-col">
            <WhatIsPagemistriShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatIsPagemistriShowcase() {
  return (
    <div className="w-full relative flex flex-col items-center">
      {/* STEP 1: Main Dashboard Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full z-10"
      >
        <div className="shadow-xl shadow-[#4400AF]/10 border border-[#4400AF]/20 dark:border-[#4400AF]/20 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
          <div className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <img
            src="/dashboard.png"
            alt="Dashboard Main"
            className="w-full h-auto object-cover block"
          />
        </div>
      </motion.div>

      {/* 3-COLUMN CONNECTOR & CARD GRID */}
      <div className="w-full grid grid-cols-3 gap-4 mt-2 relative">
        {/* COLUMN 1 */}
        <div className="flex flex-col items-center relative">
          <svg
            className="w-full h-10 overflow-visible pointer-events-none"
            viewBox="0 0 100 40"
          >
            <motion.path
              d="M 50 0 L 50 32 M 44 26 L 50 32 L 56 26"
              fill="none"
              stroke="#4400AF"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
            />
          </svg>
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 30 }}
            whileInView={{
              opacity: [0, 1, 1, 1],
              scale: [0.4, 1.75, 1.75, 1],
              y: [30, -20, -20, 0],
              zIndex: [1, 50, 50, 10],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 1.25,
              times: [0, 0.25, 0.75, 1],
              ease: [0.4, 0, 0.2, 1],
            }}
            className="w-full shadow-2xl shadow-[#4400AF]/10 rounded-xl overflow-hidden border border-[#4400AF]/20 bg-white origin-top dark:bg-slate-900 dark:border-[#4400AF]/20"
          >
            <img
              src="/leads_transactions.png"
              alt="Recent Transactions"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col items-center relative">
          <svg
            className="w-full h-10 overflow-visible pointer-events-none"
            viewBox="0 0 100 40"
          >
            <motion.path
              d="M 50 0 L 50 32 M 44 26 L 50 32 L 56 26"
              fill="none"
              stroke="#4400AF"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 2.3, ease: [0.4, 0, 0.2, 1] }}
            />
          </svg>
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 30 }}
            whileInView={{
              opacity: [0, 1, 1, 1],
              scale: [0.4, 1.75, 1.75, 1],
              y: [30, -20, -20, 0],
              zIndex: [1, 50, 50, 10],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 2.55,
              times: [0, 0.25, 0.75, 1],
              ease: [0.4, 0, 0.2, 1],
            }}
            className="w-full shadow-2xl shadow-[#4400AF]/10 rounded-xl overflow-hidden border border-[#4400AF]/20 bg-white origin-top dark:bg-slate-900 dark:border-[#4400AF]/20"
          >
            <img
              src="/leads_pipeline.png"
              alt="Leads Pipeline"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col items-center relative">
          <svg
            className="w-full h-10 overflow-visible pointer-events-none"
            viewBox="0 0 100 40"
          >
            <motion.path
              d="M 50 0 L 50 32 M 44 26 L 50 32 L 56 26"
              fill="none"
              stroke="#4400AF"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 3.6, ease: [0.4, 0, 0.2, 1] }}
            />
          </svg>
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 30 }}
            whileInView={{
              opacity: [0, 1, 1, 1],
              scale: [0.4, 1.75, 1.75, 1],
              y: [30, -20, -20, 0],
              zIndex: [1, 50, 50, 10],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 3.85,
              times: [0, 0.25, 0.75, 1],
              ease: [0.4, 0, 0.2, 1],
            }}
            className="w-full shadow-2xl shadow-[#4400AF]/10 rounded-xl overflow-hidden border border-[#4400AF]/20 bg-white origin-top dark:bg-slate-900 dark:border-[#4400AF]/20"
          >
            <img
              src="/leads_overtimechart.png"
              alt="Leads Over Time"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPagemistri;

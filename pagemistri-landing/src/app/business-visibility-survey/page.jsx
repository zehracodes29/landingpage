"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award, ShieldCheck, CheckCircle2, BarChart3, Zap, Search, FileText, Layers } from 'lucide-react';

export default function BusinessVisibilitySurvey() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background Mesh & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/80 via-white to-purple-50/40 -z-10" />
      <div 
        className="absolute inset-0 opacity-[0.03] -z-10" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b21a8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* 1. TOP ANNOUNCEMENT BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="relative inline-flex items-center justify-center bg-purple-50/80 backdrop-blur-md text-purple-700 border border-purple-300/50 text-xs sm:text-sm font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-[pulse_3s_ease-in-out_infinite]">
              PAGEMISTRI RESEARCH INITIATIVE • 2026
            </span>
          </motion.div>

          {/* 2. MAIN HEADLINE & SUBHEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight max-w-4xl mx-auto mb-8 text-center"
          >
            Share Your Business Experience. Receive Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-500 drop-shadow-sm filter">Personalised Visibility Report</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-center leading-relaxed"
          >
            We're inviting small business owners across India to share how they attract customers, build their online presence, and grow their business. Your responses will contribute to our Business Visibility Survey 2026, and you'll receive a FREE personalised Business Visibility Report with practical recommendations for your business.
          </motion.p>

          {/* 3. ACTION BUTTONS (CTAs) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
          >
            <button
              onClick={() => {
                const element = document.getElementById('survey-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:-translate-y-0.5 cursor-pointer text-base sm:text-lg w-full sm:w-auto overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Get My Visibility Report
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <button
              className="group relative text-gray-700 hover:text-purple-700 font-semibold px-6 py-4 rounded-2xl transition-colors duration-300 text-base sm:text-lg cursor-pointer w-full sm:w-auto"
            >
              Why Should I Participate?
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-[calc(100%-3rem)] rounded-full opacity-0 group-hover:opacity-100"></span>
            </button>
          </motion.div>

          {/* 4. TRUST BADGES / HIGHLIGHT STRIP */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500 font-medium mt-16 pt-8 border-t border-gray-200/60 w-full max-w-3xl"
          >
            <div className="flex items-center gap-2 hover:scale-105 hover:text-purple-600 transition-all cursor-default">
              <Clock className="w-4 h-4 text-purple-500" />
              <span>Less than 2 minutes</span>
            </div>
            <span className="hidden sm:inline-block text-gray-300">•</span>
            <div className="flex items-center gap-2 hover:scale-105 hover:text-purple-600 transition-all cursor-default">
              <Award className="w-4 h-4 text-purple-500" />
              <span>FREE Business Visibility Report</span>
            </div>
            <span className="hidden sm:inline-block text-gray-300">•</span>
            <div className="flex items-center gap-2 hover:scale-105 hover:text-purple-600 transition-all cursor-default">
              <ShieldCheck className="w-4 h-4 text-purple-500" />
              <span>Your responses remain confidential</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-12 sm:py-16 bg-white w-full relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-3">
            What You'll Receive
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Complete the survey to receive a personalised Business Visibility Report with insights and recommendations tailored to your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-purple-50/60 via-white to-purple-50/30 border border-purple-100 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Visibility Score</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get a simple score that reflects your business's current online visibility.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-50/60 via-white to-purple-50/30 border border-purple-100 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Personalised Recommendations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get tailored recommendations to improve your online visibility and business growth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-50/60 via-white to-purple-50/30 border border-purple-100 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Visibility Report</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A report highlighting your responses, key insights, and opportunities for improvement.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 font-medium text-center mt-10 tracking-wide">
            Every Business Visibility Report is personalised using your survey responses - no two reports are the same.
          </p>
        </div>
      </section>

      {/* Why Your Experience Matters Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white via-purple-50/20 to-white w-full overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-12">
          Why Your Experience Matters
        </h2>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - FEATURED HIGHLIGHT CARD */}
          <div className="col-span-12 lg:col-span-6 bg-gradient-to-br from-purple-50 via-purple-100/40 to-white border border-purple-200/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg shadow-purple-100/50 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-purple-300">
            {/* Background Glow Orb */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/30 blur-2xl rounded-full pointer-events-none"></div>
            
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 font-normal relative z-10">
              <strong>Every business grows differently.</strong> Some rely on referrals, others on social media, Google Search, paid advertising, or years of trust within their community.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal relative z-10">
              Yet much of the advice available online assumes every business should follow the same strategy.
            </p>
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed mb-6 font-semibold text-purple-900 bg-purple-100/60 p-4 rounded-xl border-l-4 border-purple-600 relative z-10">
              That's why we're conducting the Business Visibility Survey 2026 - to learn directly from business owners instead of making assumptions.
            </p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium relative z-10">
              Your experience helps us build a clearer understanding of how small businesses build visibility and grow online.
            </p>
          </div>

          {/* RIGHT SIDE - LIST & CTA */}
          <div className="col-span-12 lg:col-span-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 sm:mb-8">
              Every response helps us:
            </h3>

            <div className="flex flex-col">
              {/* Item 1 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-purple-100 border border-transparent hover:border-purple-100 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Understand how businesses attract customers
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-purple-100 border border-transparent hover:border-purple-100 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Identify common visibility challenges
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-purple-100 border border-transparent hover:border-purple-100 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Publish meaningful research and insights
                </span>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-purple-100 border border-transparent hover:border-purple-100 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Develop practical resources for small businesses
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('survey-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-base"
            >
              Get My Visibility Report
            </button>
          </div>
          
        </div>
      </section>

      {/* Placeholder for the survey form */}
      <div id="survey-form" className="py-20 bg-gray-50 flex items-center justify-center min-h-[30vh]">
        <p className="text-gray-400 italic">Survey form integration will go here.</p>
      </div>
    </div>
  );
}

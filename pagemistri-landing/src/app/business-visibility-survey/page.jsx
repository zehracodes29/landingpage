"use client";
import React from 'react';

export default function BusinessVisibilitySurvey() {
  return (
    <div className="min-h-screen bg-white">
      <section className="w-full bg-gradient-to-b from-purple-50/50 via-white to-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* 1. TOP ANNOUNCEMENT BADGE */}
          <span className="bg-purple-100 text-purple-700 border border-purple-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block shadow-sm">
            PAGEMISTRI RESEARCH INITIATIVE • 2026
          </span>

          {/* 2. MAIN HEADLINE & SUBHEADLINE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto mb-6 text-center">
            Share Your Business Experience. Receive Your <span className="text-purple-600">Personalised Visibility Report</span>.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 text-center leading-relaxed">
            We're inviting small business owners across India to share how they attract customers, build their online presence, and grow their business. Your responses will contribute to our Business Visibility Survey 2026, and you'll receive a FREE personalised Business Visibility Report with practical recommendations for your business.
          </p>

          {/* 3. ACTION BUTTONS (CTAs) */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <button
              onClick={() => {
                const element = document.getElementById('survey-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-purple-200 transition-all cursor-pointer text-base w-full sm:w-auto"
            >
              Get My Visibility Report
            </button>
            <button
              className="text-gray-700 hover:text-purple-600 font-semibold px-6 py-3.5 rounded-xl transition-all text-base cursor-pointer hover:bg-gray-100/60 w-full sm:w-auto"
            >
              Why Should I Participate?
            </button>
          </div>

          {/* 4. TRUST BADGES / HIGHLIGHT STRIP */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 font-medium mt-8 pt-6 border-t border-gray-100 w-full">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Less than 2 minutes</span>
            </div>
            <span className="hidden sm:inline-block text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>FREE Business Visibility Report</span>
            </div>
            <span className="hidden sm:inline-block text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Your responses remain confidential</span>
            </div>
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

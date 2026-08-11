import React from 'react';
import { Globe, Search, CheckCircle2 } from 'lucide-react';

const DomainSetupCard = () => {
  return (
    <div className="relative w-full max-w-[500px] mx-auto mt-8 lg:mt-0">
      
      {/* Floating Domain Badges */}
      <div className="absolute -top-5 -left-4 md:-left-8 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xl px-4 py-2 rounded-xl font-bold text-sm border border-slate-100 dark:border-slate-700 z-20 animate-[bounce_3s_infinite]">
        .com
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xl px-4 py-2 rounded-xl font-bold text-sm border border-slate-100 dark:border-slate-700 z-20 animate-[bounce_3.5s_infinite]">
        .in
      </div>
      <div className="absolute -bottom-5 -left-2 md:-left-6 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xl px-4 py-2 rounded-xl font-bold text-sm border border-slate-100 dark:border-slate-700 z-20 animate-[bounce_4s_infinite]">
        .co
      </div>

      {/* Main Card Container */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 md:p-8 shadow-2xl relative z-10 w-full">
        
        <div className="flex justify-start mb-4">
          <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400 text-[10px] font-bold uppercase px-3 py-1.5 rounded-full tracking-wider">
            DOMAIN SETUP
          </span>
        </div>
        
        <h3 className="text-2xl md:text-[28px] font-bold text-slate-900 dark:text-white leading-tight mb-2">
          Find & Connect<br />Your Domain
        </h3>
        
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Give your business a professional identity
        </p>

        {/* Domain Search Bar */}
        <div className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-1.5 flex items-center mb-3 transition-all focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
          <div className="pl-3 pr-2 text-slate-400">
            <Globe className="w-5 h-5" />
          </div>
          <input 
            type="text"
            defaultValue="yourbusiness.com"
            className="flex-1 bg-transparent text-slate-900 dark:text-white text-sm focus:outline-none placeholder-slate-400"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 font-medium text-sm transition-colors shadow-sm">
            Search
          </button>
        </div>

        {/* Success State */}
        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-full px-3 py-1.5 text-[11px] font-bold w-fit mb-6 border border-emerald-100 dark:border-emerald-900/50">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Great! This domain is available.
        </div>

        {/* Action Button */}
        <button 
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3.5 font-semibold text-[15px] transition-all shadow-md shadow-purple-500/20 hover:-translate-y-0.5"
        >
          Connect Domain &rarr;
        </button>

        {/* Secondary Link */}
        <div className="mt-4 text-center">
          <a href="#lead-form" className="text-purple-600 dark:text-purple-400 hover:underline text-xs font-semibold transition-all">
            Already have a domain?
          </a>
        </div>

        {/* Bottom Feature Grid */}
        <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 rounded-xl p-2.5 text-[11px] text-center font-bold text-slate-700 dark:text-slate-300 flex flex-col items-center justify-center gap-1">
            <span className="text-base mb-0.5">🔒</span>
            SSL Included
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 rounded-xl p-2.5 text-[11px] text-center font-bold text-slate-700 dark:text-slate-300 flex flex-col items-center justify-center gap-1">
            <span className="text-base mb-0.5">✉️</span>
            Pro Email
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 rounded-xl p-2.5 text-[11px] text-center font-bold text-slate-700 dark:text-slate-300 flex flex-col items-center justify-center gap-1">
            <span className="text-base mb-0.5">🔀</span>
            DNS Setup
          </div>
        </div>

      </div>
    </div>
  );
};

export default DomainSetupCard;

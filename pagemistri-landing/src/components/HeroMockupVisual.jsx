import React from 'react';
import Image from 'next/image';
import { Lock } from 'lucide-react';

const HeroMockupVisual = () => {
  return (
    <div className="relative w-full mt-10 lg:mt-0">
      <div className="relative group w-full max-w-[600px] mx-auto">
        {/* Floating Badge 1 (Top Right) */}
        <div className="absolute -top-4 -right-2 md:-right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 z-20 animate-[bounce_3s_infinite]">
          <span className="text-lg">⚡</span>
          <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">Ready in 3-5 Days</span>
        </div>
        
        {/* Floating Badge 2 (Middle Left) */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2 z-20 animate-[bounce_4s_infinite]">
          <span className="text-lg">✓</span>
          <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">Hosted in minutes</span>
        </div>

        {/* Floating Badge 3 (Bottom Right) */}
        <div className="absolute -bottom-6 -right-2 md:-right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2.5 z-20 animate-[bounce_3.5s_infinite]">
          <span className="text-lg">🟢</span>
          <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">Leads Managed Effortlessly</span>
        </div>

        {/* Modern Browser Mockup Window */}
        <div className="w-full max-w-xl lg:max-w-none min-h-[320px] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 overflow-hidden relative">
          {/* Browser Header Bar */}
          <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center border-b border-slate-200 dark:border-slate-700">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white dark:bg-slate-900 rounded-md px-4 py-1 text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                <Lock className="w-3 h-3" />
                pagemistri.com
              </div>
            </div>
          </div>
          
          {/* Actual Local Image */}
          <Image 
            src="/image1.png" 
            alt="Hero Preview" 
            width={800}
            height={480}
            priority
            quality={85}
            className="w-full h-auto object-cover max-h-[480px] dark:opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroMockupVisual;

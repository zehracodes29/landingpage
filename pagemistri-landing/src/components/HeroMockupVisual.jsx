import React from 'react';

const HeroMockupVisual = () => {
  return (
    <div className="relative w-full mt-10 lg:mt-0">
      <div className="relative group w-full max-w-[600px] mx-auto">
        {/* Floating Badge 1 */}
        <div className="absolute -top-6 -left-2 md:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 z-20 animate-[bounce_3s_infinite]">
          <span className="text-xl">⚡</span>
          <span className="font-semibold text-sm text-slate-800 ">Ready in 3-5 Days</span>
        </div>
        
        {/* Floating Badge 2 */}
        <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse" />
          <span className="text-xl">🎉</span>
          <span className="font-semibold text-sm text-slate-800 ">Leads Managed Effortlessly</span>
        </div>

        {/* Modern Browser Mockup Window */}
        <div className="w-full max-w-xl lg:max-w-none min-h-[320px] rounded-2xl border border-slate-200 shadow-2xl bg-white overflow-hidden relative">
          {/* Browser Header Bar */}
          <div className="bg-slate-100 px-4 py-3 flex items-center border-b border-slate-200 ">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white rounded-md px-4 py-1 text-xs font-medium text-slate-500 border border-slate-200 shadow-sm flex items-center gap-2">
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
    </div>
  );
};

export default HeroMockupVisual;

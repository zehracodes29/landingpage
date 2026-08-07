import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#FAF9F7] font-sans">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
          
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Badge */}
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-6 inline-block relative z-10">
            ⚡ Ready to get started?
          </span>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-tight leading-tight mb-6 relative z-10 max-w-3xl">
            Ready to Transform Your Online Presence?
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] md:text-[18px] text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
            Tell us about your business today and get a custom, high-converting website delivered in 3–5 days.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative z-10 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Get Your Website Built <span>&rarr;</span>
          </button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-[13px] font-medium text-slate-300 mt-8 relative z-10">
            <span className="flex items-center gap-1.5"><span className="text-purple-400">✓</span> Quick 3-5 Day Delivery</span>
            <span className="flex items-center gap-1.5"><span className="text-purple-400">✓</span> Mobile & SEO Optimized</span>
            <span className="flex items-center gap-1.5"><span className="text-purple-400">✓</span> No Hidden Charges</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

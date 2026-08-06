import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glows for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#F4EEFF] to-transparent rounded-full blur-[100px] opacity-70 -z-10" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-[44px] md:text-[56px] font-[800] text-[#111827] tracking-tight leading-[1.1] mb-8">
          Ready to Get Your Business Online?
        </h2>
        <p className="text-[19px] text-[#4B5563] leading-[1.6] max-w-2xl mx-auto mb-10">
          Join other small businesses who have successfully launched their professional websites with Pagemistri.
        </p>
        <button className="px-10 py-5 bg-[#4400AF] text-white font-bold text-[16px] rounded-xl hover:bg-[#35008a] hover:shadow-[0_20px_40px_-10px_rgba(68,0,175,0.4)] hover:-translate-y-1 transition-all duration-300">
          Start Your Project Today &rarr;
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;

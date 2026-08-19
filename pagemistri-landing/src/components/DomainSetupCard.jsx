import React from 'react';

const DomainSetupCard = () => {
  return (
    <div className="bg-purple-900 dark:bg-purple-950 p-8 sm:p-10 rounded-3xl text-white border border-purple-800/60 shadow-xl relative overflow-hidden max-w-5xl mx-auto my-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 text-center">
        Need a Custom Domain?
      </h2>
      <p className="text-purple-100/90 text-sm sm:text-base text-center max-w-md mx-auto mb-8">
        Already have one? We'll connect it. Don't have one yet? We'll guide you through buying the right domain for your business.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <a 
          href="#complete-website-setup"
          className="bg-white hover:bg-slate-100 text-[#5B06BE] font-extrabold px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 w-full sm:w-auto text-center inline-block"
        >
          Let's Build My Website
        </a>
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all w-full sm:w-auto text-center"
        >
          See Pricing &rarr;
        </button>
      </div>
    </div>
  );
};

export default DomainSetupCard;

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
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button 
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white hover:bg-slate-100 text-purple-900 font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all"
        >
          Let's Build My Website
        </button>
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-purple-300/40 hover:bg-purple-800/50 text-white font-semibold px-6 py-3 rounded-xl transition-all"
        >
          See Pricing &rarr;
        </button>
      </div>
    </div>
  );
};

export default DomainSetupCard;

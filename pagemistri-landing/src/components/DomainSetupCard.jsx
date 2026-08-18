import React from 'react';

const DomainSetupCard = () => {
  return (
    <div className="bg-purple-50/60 dark:bg-slate-900/60 py-16 px-4 text-center rounded-3xl max-w-5xl mx-auto my-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Need a Custom Domain?
      </h2>
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
        Already have one? We'll connect it. Don't have one yet? We'll guide you through buying the right domain for your business.
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button 
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-md transition-all active:scale-95"
        >
          Let's Build My Website
        </button>
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 font-semibold px-8 py-3.5 rounded-full transition-all"
        >
          See Pricing &rarr;
        </button>
      </div>
    </div>
  );
};

export default DomainSetupCard;

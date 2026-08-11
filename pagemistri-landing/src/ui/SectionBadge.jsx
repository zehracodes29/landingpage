import React from 'react';

const SectionBadge = ({ children }) => {
 return (
 <span className="inline-flex items-center px-4 py-2 rounded-full border bg-slate-100/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 text-[11px] font-bold uppercase tracking-[0.1em]">
 {children}
 </span>
 );
};

export default SectionBadge;

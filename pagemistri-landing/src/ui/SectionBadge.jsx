import React from 'react';

const SectionBadge = ({ children }) => {
 return (
 <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#DCCEFF] bg-transparent text-[#4400AF] text-[11px] font-bold uppercase tracking-[0.1em]">
 {children}
 </span>
 );
};

export default SectionBadge;

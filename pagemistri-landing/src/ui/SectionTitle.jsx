import React from 'react';

const SectionTitle = ({ children, align = 'center', className = '' }) => {
 return (
 <h2 className={`text-[36px] md:text-[44px] font-[800] text-[#111827] dark:text-white tracking-tight leading-[1.1] text-${align} ${className}`}>
 {children}
 </h2>
 );
};

export default SectionTitle;

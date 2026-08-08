import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#4400AF] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="text-[#111827] font-bold text-xl tracking-tight">
              Pagemistri
            </span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-[#4B5563] hover:text-[#4400AF] transition-colors text-[14px] font-medium">Terms</a>
            <a href="#" className="text-[#4B5563] hover:text-[#4400AF] transition-colors text-[14px] font-medium">Privacy</a>
            <a href="#" className="text-[#4B5563] hover:text-[#4400AF] transition-colors text-[14px] font-medium">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100 text-center md:text-left text-[#9CA3AF] text-[13px]">
          &copy; {new Date().getFullYear()} Pagemistri. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

'use client';
import React from 'react';

export default function Footer() {
 const scrollToSection = (e, href) => {
 e.preventDefault();
 document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
 };

 return (
 <footer className="bg-white border-t border-slate-100 py-12 font-sans">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="flex flex-col md:flex-row justify-between items-center gap-8">
 <div className="flex items-center gap-2">
 <div className="w-8 h-8 bg-[#4400AF] rounded-lg flex items-center justify-center text-white font-bold text-xl">
 P
 </div>
 <span className="text-[#111827] font-bold text-xl tracking-tight">
 Pagemistri
 </span>
 </div>
 
 <div className="flex flex-wrap justify-center gap-6 md:gap-8">
 <a href="#whats-included" onClick={(e) => scrollToSection(e, '#whats-included')} className="text-[#4B5563] hover:text-[#4400AF] transition-colors text-[14px] font-medium">What's Included</a>
 <a href="#how-it-works" onClick={(e) => scrollToSection(e, '#how-it-works')} className="text-[#4B5563] hover:text-[#4400AF] transition-colors text-[14px] font-medium">How It Works</a>
 <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="text-[#4B5563] hover:text-[#4400AF] transition-colors text-[14px] font-medium">Pricing</a>
 <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="text-[#4B5563] hover:text-[#4400AF] transition-colors text-[14px] font-medium">FAQ</a>
 </div>

 <div className="flex items-center gap-4">
 <a 
 href="https://wa.me/918565860872" 
 target="_blank" 
 rel="noopener noreferrer"
 className="text-[#25D366] hover:text-[#1ebd5a] transition-colors flex items-center gap-2"
 aria-label="Chat on WhatsApp"
 >
 <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
 </svg>
 <span className="text-[14px] font-bold">Chat with us</span>
 </a>
 </div>
 </div>
 
 <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[#9CA3AF] text-[13px]">
 <div>&copy; {new Date().getFullYear()} Pagemistri. All rights reserved.</div>
 <div className="flex gap-4">
 <a href="#" className="hover:text-[#4B5563] transition-colors">Terms</a>
 <a href="#" className="hover:text-[#4B5563] transition-colors">Privacy</a>
 </div>
 </div>
 </div>
 </footer>
 );
}

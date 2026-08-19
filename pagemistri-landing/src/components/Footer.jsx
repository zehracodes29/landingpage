'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
 const scrollToSection = (e, href) => {
 e.preventDefault();
 document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
 };

 return (
 <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12 font-sans">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="flex flex-col md:flex-row justify-between items-center gap-8">
 <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="block">
 <img src="/pagemistri-logo.png" alt="PageMistri Logo" className="h-8 md:h-10 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all dark:invert dark:opacity-70 dark:hover:opacity-100" />
 </a>
 
 <div className="flex flex-wrap justify-center gap-6 md:gap-8">
 <a href="#whats-included" onClick={(e) => scrollToSection(e, '#whats-included')} className="text-[#4B5563] dark:text-slate-400 hover:text-[#4400AF] transition-colors text-[14px] font-medium">What's Included</a>
 <a href="#how-it-works" onClick={(e) => scrollToSection(e, '#how-it-works')} className="text-[#4B5563] dark:text-slate-400 hover:text-[#4400AF] transition-colors text-[14px] font-medium">How It Works</a>
 <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="text-[#4B5563] dark:text-slate-400 hover:text-[#4400AF] transition-colors text-[14px] font-medium">Pricing</a>
 <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="text-[#4B5563] dark:text-slate-400 hover:text-[#4400AF] transition-colors text-[14px] font-medium">FAQ</a>
 </div>

 <div className="flex items-center gap-6">
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
              <span className="text-[14px] font-bold hidden sm:inline">Chat with us</span>
            </a>
            <a 
              href="https://www.instagram.com/pagemistri?igsh=MWVuYzI4cmdpMXMwMg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pagemistri Instagram"
              className="text-slate-400 hover:text-pink-500 hover:scale-110 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
 </div>
 
 <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[#9CA3AF] text-[13px]">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div>&copy; {new Date().getFullYear()} Pagemistri. All rights reserved.</div>
            <div className="flex items-center gap-3">
              <a 
                href="https://socialmistry.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-xs text-[#6B7280] dark:text-slate-400 font-medium hover:border-purple-300 dark:hover:border-purple-500 transition-colors border border-transparent"
              >
                A Product of Socialmistry
              </a>
              <a
                href="https://www.linkedin.com/company/socialmistry/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Socialmistry LinkedIn"
                className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/terms-of-service" className="text-sm text-[#6B7280] dark:text-slate-400 hover:text-[#4400AF] dark:hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-sm text-[#6B7280] dark:text-slate-400 hover:text-[#4400AF] dark:hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
 </div>
 </footer>
 );
}

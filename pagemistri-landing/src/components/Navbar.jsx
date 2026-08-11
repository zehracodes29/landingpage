// Navbar component
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

const navLinks = [
 { name: "What's Included", href: '#whats-included' },
 { name: 'How It Works', href: '#how-it-works' },
 { name: 'Pricing', href: '#pricing' },
 { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
 const [isScrolled, setIsScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const scrollToHero = (e) => {
 e.preventDefault();
 document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
 setMobileMenuOpen(false);
 };

 const scrollToSection = (e, href) => {
 e.preventDefault();
 document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
 setMobileMenuOpen(false);
 };

 return (
 <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm dark:shadow-none py-4' : 'bg-transparent py-6'}`}>
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="flex items-center justify-between">
 
 {/* Logo */}
 <div className="flex-shrink-0">
 <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="block">
 <img src="/pagemistri-logo.png" alt="PageMistri Logo" className="h-8 md:h-10 w-auto" />
 </a>
 </div>

 {/* Desktop Links */}
 <div className="hidden md:flex items-center space-x-8">
 {navLinks.map((link) => (
 <a
 key={link.name}
 href={link.href}
 onClick={(e) => scrollToSection(e, link.href)}
 className="text-[15px] font-semibold text-[#4400AF] hover:opacity-80 transition-opacity"
 >
 {link.name}
 </a>
 ))}
 </div>

 
 <ThemeToggle />
 
 {/* CTA Buttons */}
 <div className="hidden md:flex items-center space-x-3">
 <Link 
 href="/business-visibility-survey"
 className="px-5 py-2.5 bg-white text-[#4400AF] text-[15px] font-semibold rounded-lg hover:bg-gray-50 dark:bg-slate-800 border border-[#4400AF] transition-colors shadow-sm dark:shadow-none hover:shadow-md dark:shadow-none transform hover:-translate-y-[1px]"
 >
 Take a Visibility Test
 </Link>
 <button 
 onClick={scrollToHero}
 className="px-5 py-2.5 bg-[#4400AF] text-white text-[15px] font-semibold rounded-lg hover:bg-[#310080] transition-colors shadow-sm dark:shadow-none hover:shadow-md dark:shadow-none transform hover:-translate-y-[1px]"
 >
 Start building my website
 </button>
 </div>

 
 <ThemeToggle />
 
 {/* Mobile Menu Button */}
 <div className="md:hidden flex items-center">
 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="text-[#111827] dark:text-white hover:text-gray-600 dark:text-slate-400 focus:outline-none"
 >
 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>
 </div>
 </div>

 {/* Mobile Menu */}
 {mobileMenuOpen && (
 <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 shadow-lg dark:shadow-none py-4 px-6 flex flex-col space-y-4">
 {navLinks.map((link) => (
 <a
 key={link.name}
 href={link.href}
 onClick={(e) => scrollToSection(e, link.href)}
 className="text-[16px] font-semibold text-[#4400AF] py-2 border-b border-gray-50 dark:border-slate-800"
 >
 {link.name}
 </a>
 ))}
 <Link 
 href="/business-visibility-survey"
 onClick={() => setMobileMenuOpen(false)}
 className="w-full mt-4 px-5 py-3 bg-white dark:bg-slate-900 border border-[#4400AF] text-[#4400AF] hover:bg-gray-50 dark:bg-slate-800 transition-colors text-[16px] font-semibold rounded-lg text-center"
 >
 Take a Visibility Test
 </Link>
 <button 
 onClick={scrollToHero}
 className="w-full mt-3 px-5 py-3 bg-[#4400AF] hover:bg-[#310080] transition-colors text-white text-[16px] font-semibold rounded-lg text-center"
 >
 Start building my website
 </button>
 </div>
 )}
 </nav>
 );
}

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function SurveyNavbar() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between font-sans transition-colors duration-300">
      
      {/* Left Side: Logo & Back Link */}
      <div className="flex items-center gap-4">
        <Link href="/" className="block">
          <img 
            src="/pagemistri-logo.png" 
            alt="PageMistri Logo" 
            className="h-8 md:h-9 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all dark:invert dark:opacity-80 dark:hover:opacity-100" 
          />
        </Link>
        <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
        <Link 
          href="/" 
          className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <a href="#overview" onClick={(e) => scrollToSection(e, 'overview')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Overview</a>
        <a href="#why-participate" onClick={(e) => scrollToSection(e, 'why-participate')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Why Participate</a>
        <a href="#survey-form" onClick={(e) => scrollToSection(e, 'survey-form')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Take Assessment</a>
        <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">What You Get</a>
      </div>

      {/* Right Side: Theme Toggle */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>

    </nav>
  );
}

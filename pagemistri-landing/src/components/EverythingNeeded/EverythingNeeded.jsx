import React from 'react';
import { GitPullRequest, ListTodo, LayoutGrid, TrendingUp, CheckCheck, Zap } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const features = [
 {
 title: 'Complete Business Website',
 description: 'A professionally designed, mobile-friendly website tailored to your business.',
 icon: GitPullRequest,
 },
 {
 title: 'Enquiry Form',
 description: 'Let customers contact you directly through your website.',
 icon: ListTodo,
 },
 {
 title: 'Lead Dashboard',
 description: 'View and manage every enquiry from one simple dashboard.',
 icon: LayoutGrid,
 },
 {
 title: 'Performance Tracking',
 description: "Google Analytics and Meta Pixel setup to measure your website's performance.",
 icon: TrendingUp,
 },
 {
 title: 'SEO Ready',
 description: 'Built with essential SEO settings to help your business get discovered online.',
 icon: CheckCheck,
 },
 {
 title: 'Fast Delivery',
 description: 'Your website is ready to launch in just 3–5 working days.',
 icon: Zap,
 }
];

const EverythingNeeded = () => {
 return (
 <section id="whats-included" className="scroll-mt-24 py-12 lg:py-16 bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] relative overflow-hidden font-sans">
 <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
 
 {/* LEFT COLUMN: Content & Features */}
 <div className="lg:col-span-7 w-full flex flex-col order-2 lg:order-1">
 <div className="mb-10 text-center lg:text-left">
 <div className="mb-4 inline-flex">
 <span className="bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:border dark:border-purple-800/50 dark:text-purple-300 text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase shadow-sm">
 ✨ COMPLETE BUSINESS WEBSITE SETUP
 </span>
 </div>
 <h2 className="text-[32px] md:text-[40px] font-[800] text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
 Everything Your Business Needs to <span className="text-purple-600 dark:text-purple-400">Get Online</span>
 </h2>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
 {features.map((feature, index) => (
 <div 
 key={index} 
 className="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-slate-900/60 p-4 shadow-sm hover:shadow-md transition-all group"
 >
 <div className="bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-xl p-2.5 w-fit mb-2.5 transition-colors group-hover:bg-purple-200 dark:group-hover:bg-purple-900/60">
 <feature.icon className="w-5 h-5" strokeWidth={2} />
 </div>
 <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm mb-1">
 {feature.title}
 </h3>
 <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
 {feature.description}
 </p>
 </div>
 ))}
 </div>
 
 {/* Action Bar */}
 <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full">
 <button 
 onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
 className="px-5 py-2.5 bg-transparent border border-purple-600 text-purple-600 dark:text-purple-400 font-medium text-[15px] rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 w-full sm:w-auto text-center"
 >
 See How It Works
 </button>
 <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
 <span className="flex items-center gap-1">⚡ 3–5 Days Delivery</span>
 <span className="flex items-center gap-1">&lt;/&gt; No Coding Required</span>
 <span className="flex items-center gap-1">✓ Easy to Use</span>
 </div>
 </div>
 </div>
 
 {/* RIGHT COLUMN: Lead Form */}
 <div className="lg:col-span-5 w-full order-1 lg:order-2">
 <div className="w-full max-w-[550px] mx-auto relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-500/10 border border-slate-200 dark:border-slate-800 overflow-hidden">
 {/* Radial Gradient Glow (contained) */}
 <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
 <div className="relative z-10">
 <LeadForm />
 </div>
 </div>
 </div>
 
 </div>
 
 {/* Bottom Stat Bar */}
 <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-slate-200 dark:divide-slate-800 text-center">
 <div className="flex flex-col items-center justify-center px-4">
 <span className="text-2xl mb-1">🚀</span>
 <span className="text-slate-900 dark:text-white font-bold text-lg">3–5 Days</span>
 <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mt-0.5">Fast Delivery</span>
 </div>
 <div className="flex flex-col items-center justify-center px-4">
 <span className="text-2xl mb-1">👥</span>
 <span className="text-slate-900 dark:text-white font-bold text-lg">100+</span>
 <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mt-0.5">Businesses Online</span>
 </div>
 <div className="flex flex-col items-center justify-center px-4">
 <span className="text-2xl mb-1">🎧</span>
 <span className="text-slate-900 dark:text-white font-bold text-lg">24/7</span>
 <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mt-0.5">Support</span>
 </div>
 <div className="flex flex-col items-center justify-center px-4">
 <span className="text-2xl mb-1">🛡️</span>
 <span className="text-slate-900 dark:text-white font-bold text-lg">99.9%</span>
 <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mt-0.5">Uptime</span>
 </div>
 </div>
 </div>

 </div>
 </section>
 );
};

export default EverythingNeeded;

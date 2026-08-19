import React from 'react';
import { GitPullRequest, ListTodo, LayoutGrid, TrendingUp, CheckCheck, Zap } from 'lucide-react';

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
 <section id="everything-needed" className="scroll-mt-20 py-12 lg:py-16 bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] relative overflow-hidden font-sans">
 <div id="whats-included" className="absolute top-0 -mt-24"></div>
 <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
 <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
 
 {/* Content & Features */}
 <div className="w-full flex flex-col">
 <div className="mb-10 text-center">
 <div className="mb-4 inline-flex">
 <span className="bg-[rgba(68,0,175,0.08)] text-[#4400AF] dark:border text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase shadow-sm">
 ✨ COMPLETE BUSINESS WEBSITE SETUP
 </span>
 </div>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
 Everything Your Business Needs to Get Online
 </h2>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
 {features.map((feature, index) => (
 <div 
 key={index} 
 className="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-slate-900/60 p-4 shadow-sm hover:shadow-md transition-all group"
 >
 <div className="bg-[rgba(68,0,175,0.08)] dark:bg-[rgba(68,0,175,0.08)] text-[#4400AF] rounded-xl p-2.5 w-fit mb-2.5 transition-colors group-hover:bg-purple-200">
 <feature.icon className="w-5 h-5" strokeWidth={2} />
 </div>
 <h3 className="text-lg font-bold text-slate-900 mb-1">
 {feature.title}
 </h3>
 <p className="text-[#52627A] dark:text-slate-400 text-xs leading-relaxed">
 {feature.description}
 </p>
 </div>
 ))}
 </div>
 
 {/* Action Bar */}
 <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full">
 <button 
 onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
 className="px-5 py-2.5 bg-transparent border border-[#4400AF] text-[#4400AF] font-medium text-[15px] rounded-xl hover:bg-[rgba(68,0,175,0.05)] dark:hover:bg-[rgba(68,0,175,0.08)] transition-all duration-300 w-full sm:w-auto text-center"
 >
 See How It Works
 </button>
 <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[#52627A] dark:text-slate-400">
 <span className="flex items-center gap-1">⚡ 3–5 Days Delivery</span>
 <span className="flex items-center gap-1">&lt;/&gt; No Coding Required</span>
 <span className="flex items-center gap-1">✓ Easy to Use</span>
 </div>
 </div>
 </div>
 
 </div>
 
 {/* Bottom Stat Bar */}
 <div className="max-w-3xl mx-auto mt-12 p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800">
     
     {/* Metric 1 */}
     <div className="flex flex-col items-center justify-center py-4 sm:py-0">
       <span className="text-2xl mb-2">🚀</span>
       <span className="text-xl font-extrabold text-[#111827] dark:text-white">3–5 Days</span>
       <span className="text-xs font-semibold tracking-wider text-[#52627A] uppercase mt-1">FAST DELIVERY</span>
     </div>

     {/* Metric 2 */}
     <div className="flex flex-col items-center justify-center py-4 sm:py-0">
       <span className="text-2xl mb-2">💰</span>
       <span className="text-xl font-extrabold text-[#4400AF]">₹5,000</span>
       <span className="text-xs font-semibold tracking-wider text-[#4400AF]/80 uppercase mt-1">ONE-TIME COST</span>
     </div>

     {/* Metric 3 */}
     <div className="flex flex-col items-center justify-center py-4 sm:py-0">
       <span className="text-2xl mb-2">🛡️</span>
       <span className="text-xl font-extrabold text-[#111827] dark:text-white">99.9%</span>
       <span className="text-xs font-semibold tracking-wider text-[#52627A] uppercase mt-1">UPTIME</span>
     </div>

   </div>
 </div>

 </div>
 </section>
 );
};

export default EverythingNeeded;

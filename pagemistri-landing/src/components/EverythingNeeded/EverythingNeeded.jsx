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
 <section id="complete-website-setup" className="scroll-mt-20 py-12 lg:py-16 bg-slate-50 dark:bg-slate-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] relative overflow-hidden font-sans">
 <div id="whats-included" className="absolute top-0 -mt-24"></div>
 <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
 
 {/* LEFT COLUMN: Content & Features */}
 <div className="lg:col-span-7 w-full flex flex-col order-2 lg:order-1">
 <div className="mb-10 text-center lg:text-left">
 <div className="mb-4 inline-flex">
 <span className="bg-brand-surface-sm text-brand dark:border text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase shadow-sm">
 ✨ COMPLETE BUSINESS WEBSITE SETUP
 </span>
 </div>
 <h2 className="text-[32px] md:text-[40px] font-[800] text-text-primary dark:text-white tracking-tight leading-tight mb-4">
 Everything Your Business Needs to <span className="text-brand">Get Online</span>
 </h2>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
 {features.map((feature, index) => (
 <div 
 key={index} 
 className="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-slate-900/60 p-4 shadow-sm hover:shadow-md transition-all group"
 >
 <div className="bg-brand-surface-sm dark:bg-brand-surface-sm text-brand rounded-xl p-2.5 w-fit mb-2.5 transition-colors group-hover:bg-purple-200">
 <feature.icon className="w-5 h-5" strokeWidth={2} />
 </div>
 <h3 className="text-text-primary dark:text-slate-100 font-bold text-sm mb-1">
 {feature.title}
 </h3>
 <p className="text-text-secondary dark:text-slate-400 text-xs leading-relaxed">
 {feature.description}
 </p>
 </div>
 ))}
 </div>
 
 {/* Action Bar */}
 <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 w-full">
 <button 
 onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
 className="px-5 py-2.5 bg-transparent border border-brand text-brand font-medium text-[15px] rounded-xl hover:bg-brand-surface-xs dark:hover:bg-brand-surface-sm transition-all duration-300 w-full sm:w-auto text-center"
 >
 See How It Works
 </button>
 <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-text-secondary dark:text-slate-400">
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
 <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-surface-xs0/20 dark:bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>
 <div className="relative z-10">
 <LeadForm />
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
       <span className="text-xl font-extrabold text-text-primary dark:text-white">3–5 Days</span>
       <span className="text-xs font-semibold tracking-wider text-text-secondary uppercase mt-1">FAST DELIVERY</span>
     </div>

     {/* Metric 2 */}
     <div className="flex flex-col items-center justify-center py-4 sm:py-0">
       <span className="text-2xl mb-2">💰</span>
       <span className="text-xl font-extrabold text-brand">₹5,000</span>
       <span className="text-xs font-semibold tracking-wider text-brand/80 uppercase mt-1">ONE-TIME COST</span>
     </div>

     {/* Metric 3 */}
     <div className="flex flex-col items-center justify-center py-4 sm:py-0">
       <span className="text-2xl mb-2">🛡️</span>
       <span className="text-xl font-extrabold text-text-primary dark:text-white">99.9%</span>
       <span className="text-xs font-semibold tracking-wider text-text-secondary uppercase mt-1">UPTIME</span>
     </div>

   </div>
 </div>

 </div>
 </section>
 );
};

export default EverythingNeeded;

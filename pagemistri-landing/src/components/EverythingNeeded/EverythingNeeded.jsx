import React from 'react';
import SectionBadge from '../../ui/SectionBadge';
import { GitPullRequest, ListTodo, LayoutGrid, TrendingUp, CheckCheck, Zap } from 'lucide-react';
import HeroMockupVisual from '@/components/HeroMockupVisual';

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
 <section id="whats-included" className="py-24 bg-[#FAF9F7]">
 <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
 
 {/* LEFT COLUMN: Visual Showcase */}
 <div className="lg:col-span-5 w-full">
   <HeroMockupVisual />
 </div>

 {/* RIGHT COLUMN: Content & Features */}
 <div className="lg:col-span-7 w-full flex flex-col">
 <div className="mb-10 text-center lg:text-left">
 <div className="mb-4 inline-flex">
 <SectionBadge>Complete Business Website Setup</SectionBadge>
 </div>
 <h2 className="text-[32px] md:text-[40px] font-[800] text-[#111827] tracking-tight leading-tight mb-4">
 Everything Your Business Needs to Get Online
 </h2>
 <p className="text-[16px] text-[#4B5563] leading-[1.6]">
 More than just a website. We build a complete online presence that helps your business look professional and capture customer enquiries from day one.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 {features.map((feature, index) => (
 <div 
 key={index} 
 className="bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-purple-200 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
 >
 <div className="bg-purple-100/60 text-purple-600 rounded-xl p-2.5 w-fit mb-3">
 <feature.icon className="w-5 h-5" strokeWidth={2} />
 </div>
 <h3 className="text-slate-900 font-bold text-sm mb-1">
 {feature.title}
 </h3>
 <p className="text-slate-500 text-xs leading-relaxed">
 {feature.description}
 </p>
 </div>
 ))}
 </div>
 
 {/* CTA Button aligned under the grid */}
 <div className="mt-10 text-center lg:text-left">
 <button 
 onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
 className="px-8 py-3.5 bg-[#4400AF] text-white font-bold text-[14px] rounded-lg hover:bg-[#35008a] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
 Let's Build My Website
 </button>
 </div>
 </div>
 
 </div>
 </div>
 </section>
 );
};

export default EverythingNeeded;

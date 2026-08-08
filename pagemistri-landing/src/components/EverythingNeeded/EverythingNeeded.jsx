import React from 'react';
import SectionBadge from '../../ui/SectionBadge';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';
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
 <section id="whats-included" className="py-24 bg-[#FAF9F7]">
 <div className="max-w-7xl mx-auto px-6 lg:px-8">
 <div className="text-center max-w-4xl mx-auto mb-16">
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

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {features.map((feature, index) => (
 <Card key={index} index={index}>
 <div className="flex flex-col h-full text-left p-2">
 <div className="w-12 h-12 bg-[#F4EEFF] rounded-lg flex items-center justify-center mb-6 text-[#4400AF]">
 <feature.icon className="w-[22px] h-[22px]" strokeWidth={2} />
 </div>
 <h3 className="text-[17px] font-bold text-[#111827] mb-3">
 {feature.title}
 </h3>
 <p className="text-[#4B5563] text-[14px] leading-relaxed">
 {feature.description}
 </p>
 </div>
 </Card>
 ))}
 </div>

 <div className="mt-16 text-center">
 <button 
 onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
 className="px-8 py-3.5 bg-[#4400AF] text-white font-bold text-[14px] rounded-lg hover:bg-[#35008a] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
 Let's Build My Website
 </button>
 </div>
 </div>
 </section>
 );
};

export default EverythingNeeded;

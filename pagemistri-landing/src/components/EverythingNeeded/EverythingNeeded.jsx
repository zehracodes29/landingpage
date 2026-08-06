import React from 'react';
import SectionBadge from '../../ui/SectionBadge';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';
import { LayoutDashboard, Target, Zap, Search, MessageSquare, Globe } from 'lucide-react';

const features = [
  {
    title: 'Complete Business Website',
    description: 'Get a professional, mobile-responsive website tailored to your brand. We handle the design, development, and hosting so you can focus on your business.',
    icon: Globe,
  },
  {
    title: 'Enquiry Form',
    description: 'Capture leads effortlessly with built-in enquiry forms. Make it easy for potential customers to reach out to you directly from your website.',
    icon: MessageSquare,
  },
  {
    title: 'Lead Dashboard',
    description: 'Manage all your customer inquiries in one centralized dashboard. Track, organize, and respond to leads without missing an opportunity.',
    icon: LayoutDashboard,
  },
  {
    title: 'Performance Tracking',
    description: 'Monitor your website\'s success with integrated analytics. Understand your visitors, track conversions, and make data-driven decisions.',
    icon: Target,
  },
  {
    title: 'SEO Ready',
    description: 'Rank higher in search results with our SEO-optimized structure. We ensure your website is built following the latest search engine guidelines.',
    icon: Search,
  },
  {
    title: 'Fast Delivery',
    description: 'Launch your online presence quickly. Our streamlined process ensures your professional website is ready and live in just 3-5 working days.',
    icon: Zap,
  }
];

const EverythingNeeded = () => {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6">
            <SectionBadge>FEATURES</SectionBadge>
          </div>
          <SectionTitle className="mb-6">
            Everything Your Business Needs To Get Online
          </SectionTitle>
          <p className="text-[19px] text-[#4B5563] leading-[1.6]">
            We provide a complete end-to-end solution. From design and development to hosting and lead management, everything is included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} index={index}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-[#F4EEFF] rounded-xl flex items-center justify-center mb-6 text-[#4400AF]">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#4400AF] text-white font-bold text-[15px] rounded-xl hover:bg-[#35008a] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            Get Started Today &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default EverythingNeeded;

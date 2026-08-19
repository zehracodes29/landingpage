import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';
import SectionTitle from '../../ui/SectionTitle';

const faqs = [
  {
  question: "Is this a custom website or a template?",
  answer: "We build custom-designed websites tailored to your brand. While we use proven high-converting layouts as a foundation, your website's colors, typography, images, and content will be completely unique to your business."
  },
  {
  question: "What exactly is included in the ₹5,000 setup?",
  answer: "The setup includes a professional mobile-friendly design, enquiry forms, a lead dashboard, basic SEO setup, domain connection, and initial content population."
  },
  {
  question: "What is the difference between the ₹5,000 setup fee and the monthly hosting plans?",
  answer: "The ₹5,000 setup fee is a one-time cost to design and build your website from scratch. The monthly plans cover ongoing secure hosting, continuous maintenance, lead management dashboard access, and technical support."
  },
  {
  question: "Who owns my website content and where do my enquiries/leads go?",
  answer: "You own all your website content. All enquiries and leads generated through your website are securely stored in your personal lead dashboard, which only you have access to."
  },
  {
  question: "How long will it take to build my website?",
  answer: "Your website will be ready in just 3-5 working days after we receive all your requirements and content."
  },
  {
  question: "Can I use my own domain name?",
  answer: "Yes, absolutely! You can connect any custom domain you own. We'll provide you with the necessary DNS records and help you set it up."
  },
  {
  question: "I don't have a logo or professional photos. Can I still get started?",
  answer: "Yes! We can use high-quality stock photos related to your industry and set up a clean text-based logo for you to get started immediately."
  },
  {
  question: "What happens after I submit the form?",
  answer: "We'll review your requirements and contact you within one business day to discuss your business and the next steps."
  },
  {
  question: "Will my website work on mobile phones?",
  answer: "Yes, every website we build is fully responsive and optimized to look and work perfectly on smartphones, tablets, and desktops."
  }
];

const FAQ = () => {
 const [openIndex, setOpenIndex] = useState(null);

 const toggleFAQ = (index) => {
 setOpenIndex(openIndex === index ? null : index);
 };

 return (
 <section id="faq" className="scroll-mt-24 py-12 lg:py-16 bg-[#FAF9F7] dark:bg-slate-950">
 <div className="max-w-3xl mx-auto px-6 lg:px-8">
 <div className="text-center mb-16">
 <div className="mb-6">
  <span className="inline-block bg-[rgba(68,0,175,0.08)] text-[#4400AF] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-1.5">FAQ</span>
 </div>
 <SectionTitle>
  Questions in your mind
 </SectionTitle>
 </div>

 <div className="space-y-4">
 {faqs.map((faq, index) => (
 <div 
 key={index}
 className={`bg-white dark:bg-slate-900 rounded-xl border ${openIndex === index ? 'border-[#4400AF] dark:border-slate-800 shadow-md dark:shadow-none' : 'border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none'} overflow-hidden transition-all duration-300`}
 >
 <button 
 onClick={() => toggleFAQ(index)}
 className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
 >
 <span className={`text-[17px] font-semibold ${openIndex === index ? 'text-[#4400AF] dark:text-white' : 'text-[#111827] dark:text-white'}`}>
 {faq.question}
 </span>
 <svg 
 className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#4400AF]' : 'text-slate-400'}`} 
 viewBox="0 0 24 24" 
 fill="none" 
 stroke="currentColor" 
 strokeWidth="2" 
 strokeLinecap="round" 
 strokeLinejoin="round"
 >
 <polyline points="6 9 12 15 18 9"></polyline>
 </svg>
 </button>
 
 <AnimatePresence>
 {openIndex === index && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3 }}
 >
 <div className="px-6 pb-5">
 <p className="text-[#4B5563] dark:text-slate-400 text-[15px] leading-relaxed">
 {faq.answer}
 </p>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default FAQ;

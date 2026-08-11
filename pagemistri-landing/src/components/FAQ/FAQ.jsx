import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionBadge from '../../ui/SectionBadge';
import SectionTitle from '../../ui/SectionTitle';

const faqs = [
 {
 question: "How long will it take to build my website?",
 answer: "Your website will be ready in just 3-5 working days after we receive all your requirements and content."
 },
 {
 question: "What is included in the ₹5,000 website setup?",
 answer: "The setup includes a professional mobile-friendly design, enquiry form, lead dashboard, basic SEO setup, and initial content population."
 },
 {
 question: "Why is there a monthly subscription?",
 answer: "The monthly subscription covers premium secure hosting, continuous maintenance, lead management dashboard access, and technical support to keep your website running smoothly."
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
 <section id="faq" className="py-12 lg:py-16 bg-[#FAF9F7]">
 <div className="max-w-3xl mx-auto px-6 lg:px-8">
 <div className="text-center mb-16">
 <div className="mb-6">
 <SectionBadge>FAQ</SectionBadge>
 </div>
 <SectionTitle>
 Frequently Asked Questions
 </SectionTitle>
 </div>

 <div className="space-y-4">
 {faqs.map((faq, index) => (
 <div 
 key={index}
 className={`bg-white rounded-xl border ${openIndex === index ? 'border-[#4400AF] shadow-md' : 'border-slate-200 shadow-sm'} overflow-hidden transition-all duration-300`}
 >
 <button 
 onClick={() => toggleFAQ(index)}
 className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
 >
 <span className={`text-[17px] font-semibold ${openIndex === index ? 'text-[#4400AF]' : 'text-[#111827]'}`}>
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
 <p className="text-[#4B5563] text-[15px] leading-relaxed">
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

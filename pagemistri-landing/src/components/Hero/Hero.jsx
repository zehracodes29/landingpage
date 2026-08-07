import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Blocks, Sparkles, CheckCircle2 } from 'lucide-react';
import CountUp from 'react-countup';
import SectionBadge from '../../ui/SectionBadge';

const Hero = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    category: "",
    offering: "",
    hasWebsite: "",
    hasDomain: "",
    websiteGoals: [],
    websiteUrl: "",
    websiteDescription: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const currentGoals = [...formData.websiteGoals];
      if (checked) {
        currentGoals.push(value);
      } else {
        const index = currentGoals.indexOf(value);
        if (index > -1) currentGoals.splice(index, 1);
      }
      setFormData({ ...formData, [name]: currentGoals });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear error when user starts typing/selecting
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.businessName) newErrors.businessName = "Business name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.category) newErrors.category = "Business category is required";
    if (!formData.offering) newErrors.offering = "Offering is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.hasWebsite) newErrors.hasWebsite = "Please select an option";
    if (!formData.hasDomain) newErrors.hasDomain = "Please select an option";
    if (formData.websiteGoals.length === 0) newErrors.websiteGoals = "Please select at least one goal";
    if (!formData.websiteDescription) newErrors.websiteDescription = "Website description is required";
    if (!formData.message) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      console.log(formData);
      // Ready for POST /api/leads
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  // Direction: 1 for forward, -1 for backward
  const direction = step === 2 ? 1 : -1;

  return (
    <section className="relative bg-[#FAF9F7] pt-32 pb-12 md:pb-16 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Copy & Checklist */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-8 mt-0 pt-0"
          >
            <div className="flex flex-col gap-6 mt-0 pt-0">
              <div className="inline-flex mt-0 pt-0">
                <SectionBadge>PROFESSIONAL WEBSITE SETUP • STARTING AT ₹5,000</SectionBadge>
              </div>
              <h1 className="text-[44px] lg:text-[56px] font-[800] text-[#111827] tracking-tight leading-[1.1]">
                Your Professional<br />Business Website,<br />Ready in Just 3-5 Days
              </h1>
              <p className="text-[19px] text-[#4B5563] leading-[1.6] max-w-[500px]">
                From design and setup to lead collection and analytics, we build everything for you - so you can focus on growing your business, not building your website.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mb-8 mt-4"
            >
              {[
                { text: <>Starting at ₹<CountUp end={5000} duration={2.5} separator="," /></> },
                { text: <>Delivered in 3–<CountUp end={5} duration={2.5} /> Working Days</> },
                { text: "Lead Collection Included" },
                { text: "Mobile-Friendly" }
              ].map((item, i) => (
                <div key={i} className="group p-4 rounded-2xl bg-white/70 dark:bg-slate-950/20 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3.5 transition-all duration-300 relative overflow-hidden hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 cursor-default">
                  {/* Top Edge Glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Container with Pulse */}
                  <div className="relative w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center border border-purple-200 shrink-0">
                    <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:animate-ping" />
                    <CheckCircle2 className="w-4 h-4 text-[#4400AF] relative z-10" strokeWidth={3} />
                  </div>
                  
                  <span className="text-[14px] font-semibold text-slate-800 dark:text-slate-200 relative z-10">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <button 
              onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 px-5 py-2.5 bg-[#F4EEFF] text-[#111827] font-bold text-[14px] rounded hover:bg-[#DCCEFF] transition-all duration-300">
              See What's Included &rarr;
            </button>
          </motion.div>

          {/* Right Column: Multi-step Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative lg:pl-4"
          >
            {/* Background Blob / Glow for premium feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-[#F4EEFF] to-transparent rounded-full blur-[120px] opacity-80 -z-10 pointer-events-none" />

            <div id="lead-form" className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(68,0,175,0.1)] border border-[#DCCEFF]/60 p-8 sm:p-10 w-full relative z-10 transition-shadow hover:shadow-[0_25px_65px_-15px_rgba(68,0,175,0.15)] overflow-hidden min-h-[600px]">
              
              {/* Step Indicators */}
              <div className="flex items-center justify-center gap-2.5 mb-10 relative z-20">
                {step === 1 ? (
                  <>
                    <div className="flex items-center gap-2.5">
                      <div className="h-3 w-3 rounded-full bg-[#4400AF] ring-4 ring-[#F4EEFF]" />
                      <div className="h-1 w-10 rounded-full bg-[#F4EEFF]" />
                    </div>
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#4400AF]" />
                      <div className="h-1 w-10 rounded-full bg-[#4400AF]" />
                    </div>
                    <div className="h-3 w-3 rounded-full bg-[#4400AF] ring-4 ring-[#F4EEFF]" />
                  </>
                )}
              </div>

              <div className="relative">
                <AnimatePresence custom={direction} mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="text-center mb-8">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B5563]">
                          TELL US ABOUT YOUR BUSINESS
                        </p>
                      </div>

                      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                        <div className="space-y-2">
                          <label className="text-[14px] font-bold text-[#111827]">
                            Full name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name" 
                            className={`w-full px-5 py-4 rounded-xl border ${errors.fullName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#4400AF] focus:ring-[#4400AF]/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-sm hover:border-[#DCCEFF]`}
                          />
                          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-bold text-[#111827]">
                            Business name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            placeholder="Enter your business name" 
                            className={`w-full px-5 py-4 rounded-xl border ${errors.businessName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#4400AF] focus:ring-[#4400AF]/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-sm hover:border-[#DCCEFF]`}
                          />
                          {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#111827]">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="you@example.com" 
                              className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#4400AF] focus:ring-[#4400AF]/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-sm hover:border-[#DCCEFF]`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#111827]">
                              Phone number <span className="text-red-500">*</span>
                            </label>
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 XXXXX XXXXX" 
                              className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#4400AF] focus:ring-[#4400AF]/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-sm hover:border-[#DCCEFF]`}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-bold text-[#111827]">
                            Business Category <span className="text-red-500">*</span>
                          </label>
                          <select 
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className={`w-full px-5 py-4 rounded-xl border ${errors.category ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#4400AF] focus:ring-[#4400AF]/20'} bg-white text-[#111827] focus:outline-none focus:ring-2 transition-all shadow-sm hover:border-[#DCCEFF] appearance-none`}
                            style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundPosition: "right 1.25rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.25em" }}
                          >
                            <option value="" disabled>Select category</option>
                            <option value="coach">Coach / Consultant</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="real-estate">Real Estate</option>
                            <option value="restaurant">Restaurant / Café</option>
                            <option value="salon">Salon / Spa</option>
                            <option value="education">Education</option>
                            <option value="retail">Retail Store</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-bold text-[#111827]">
                            What do you offer? <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            name="offering"
                            value={formData.offering}
                            onChange={handleInputChange}
                            placeholder="e.g. Interior Design Services, Home Bakery" 
                            className={`w-full px-5 py-4 rounded-xl border ${errors.offering ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#4400AF] focus:ring-[#4400AF]/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-sm hover:border-[#DCCEFF]`}
                          />
                          {errors.offering && <p className="text-red-500 text-xs mt-1">{errors.offering}</p>}
                        </div>

                        <div className="pt-4">
                          <button 
                            type="submit" 
                            className="w-auto px-10 py-4 bg-[#4400AF] text-white font-bold text-[15px] rounded-xl hover:bg-[#35008a] hover:shadow-xl hover:shadow-[#4400AF]/20 hover:-translate-y-0.5 transition-all duration-300"
                          >
                            Next
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="text-center mb-8">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4B5563]">
                          WEBSITE REQUIREMENTS
                        </p>
                      </div>

                      <form className="space-y-6" onSubmit={handleSubmit}>
                        
                        <div className="space-y-3">
                          <label className="text-[14px] font-bold text-[#111827]">
                            Do you already have a website? <span className="text-red-500">*</span>
                          </label>
                          <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input 
                                type="radio" 
                                name="hasWebsite" 
                                value="Yes" 
                                checked={formData.hasWebsite === 'Yes'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#4400AF] border-slate-300 focus:ring-[#4400AF]"
                              />
                              <span className="text-[14px] text-[#4B5563]">Yes</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input 
                                type="radio" 
                                name="hasWebsite" 
                                value="No" 
                                checked={formData.hasWebsite === 'No'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#4400AF] border-slate-300 focus:ring-[#4400AF]"
                              />
                              <span className="text-[14px] text-[#4B5563]">No</span>
                            </label>
                          </div>
                          {errors.hasWebsite && <p className="text-red-500 text-xs mt-1">{errors.hasWebsite}</p>}
                        </div>

                        <div className="space-y-3">
                          <label className="text-[14px] font-bold text-[#111827]">
                            Do you already have a domain? <span className="text-red-500">*</span>
                          </label>
                          <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input 
                                type="radio" 
                                name="hasDomain" 
                                value="Yes" 
                                checked={formData.hasDomain === 'Yes'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#4400AF] border-slate-300 focus:ring-[#4400AF]"
                              />
                              <span className="text-[14px] text-[#4B5563]">Yes</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input 
                                type="radio" 
                                name="hasDomain" 
                                value="No" 
                                checked={formData.hasDomain === 'No'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#4400AF] border-slate-300 focus:ring-[#4400AF]"
                              />
                              <span className="text-[14px] text-[#4B5563]">No</span>
                            </label>
                          </div>
                          {errors.hasDomain && <p className="text-red-500 text-xs mt-1">{errors.hasDomain}</p>}
                        </div>

                        <div className="space-y-3">
                          <label className="text-[14px] font-bold text-[#111827]">
                            Why do you want a website? <span className="text-red-500">*</span>
                          </label>
                          <div className="flex flex-col gap-3">
                            {['Get More Enquiries', 'Build Trust', 'Showcase My Business', 'Replace My Current Website'].map(goal => (
                              <label key={goal} className="flex items-center gap-3 cursor-pointer">
                                <input 
                                  type="checkbox" 
                                  name="websiteGoals" 
                                  value={goal}
                                  checked={formData.websiteGoals.includes(goal)}
                                  onChange={handleInputChange}
                                  className="w-4 h-4 text-[#4400AF] border-slate-300 rounded focus:ring-[#4400AF]"
                                />
                                <span className="text-[14px] text-[#4B5563]">{goal}</span>
                              </label>
                            ))}
                          </div>
                          {errors.websiteGoals && <p className="text-red-500 text-xs mt-1">{errors.websiteGoals}</p>}
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-bold text-[#111827]">
                            If you have a website - Enter your URL:
                          </label>
                          <input 
                            type="url" 
                            name="websiteUrl"
                            value={formData.websiteUrl}
                            onChange={handleInputChange}
                            placeholder="https://example.com" 
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all shadow-sm hover:border-[#DCCEFF]"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-bold text-[#111827]">
                            Tell us about your website <span className="text-red-500">*</span>
                          </label>
                          <textarea 
                            name="websiteDescription"
                            value={formData.websiteDescription}
                            onChange={handleInputChange}
                            placeholder="Describe your current website..." 
                            rows={4}
                            className={`w-full px-5 py-4 rounded-xl border ${errors.websiteDescription ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#4400AF] focus:ring-[#4400AF]/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-sm hover:border-[#DCCEFF] resize-none`}
                          />
                          {errors.websiteDescription && <p className="text-red-500 text-xs mt-1">{errors.websiteDescription}</p>}
                        </div>

                        <div className="space-y-2">
                          <label className="text-[14px] font-bold text-[#111827]">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Anything else we should know?" 
                            rows={4}
                            className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#4400AF] focus:ring-[#4400AF]/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all shadow-sm hover:border-[#DCCEFF] resize-none`}
                          />
                          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <div className="pt-4 flex justify-between items-center">
                          <button 
                            type="button" 
                            onClick={handleBack}
                            className="w-auto px-8 py-3.5 bg-white border border-slate-300 text-[#4B5563] font-semibold text-[15px] rounded-xl hover:bg-slate-50 transition-all duration-300"
                          >
                            Back
                          </button>
                          <button 
                            type="submit" 
                            className="w-auto px-10 py-4 bg-[#4400AF] text-white font-bold text-[15px] rounded-xl hover:bg-[#35008a] hover:shadow-xl hover:shadow-[#4400AF]/20 hover:-translate-y-0.5 transition-all duration-300"
                          >
                            Let's Build
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

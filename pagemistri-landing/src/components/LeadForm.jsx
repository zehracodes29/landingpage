import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadForm = () => {
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

 const direction = step === 2 ? 1 : -1;

 return (
 <div className="w-full font-sans">
 <div className="text-center mb-8">
 <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
 Tell Us About Your Business
 </h2>
 <p className="text-[15px] text-[#4B5563] leading-relaxed max-w-xl mx-auto">
 Fill out the quick form below to start your custom website build.
 </p>
 </div>

 <div className="w-full relative flex items-center justify-center">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#F4EEFF] to-transparent rounded-[3rem] blur-[80px] opacity-70 -z-10 pointer-events-none" />

 <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-100 w-full max-w-lg mx-auto relative z-10 transition-shadow overflow-hidden min-h-[500px]">
 
 {/* Step Indicators */}
 <div className="flex items-center justify-center gap-2.5 mb-3 relative z-20">
 {step === 1 ? (
 <>
 <div className="flex items-center gap-2.5">
 <div className="h-3 w-3 rounded-full bg-purple-600 ring-4 ring-purple-100 " />
 <div className="h-1 w-10 rounded-full bg-purple-100 " />
 </div>
 <div className="h-2.5 w-2.5 rounded-full bg-slate-200 " />
 </>
 ) : (
 <>
 <div className="flex items-center gap-2.5">
 <div className="h-2.5 w-2.5 rounded-full bg-purple-600" />
 <div className="h-1 w-10 rounded-full bg-purple-600" />
 </div>
 <div className="h-3 w-3 rounded-full bg-purple-600 ring-4 ring-purple-100 " />
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
 <div className="text-center mb-4">
 <p className="text-xs tracking-wider text-slate-400 font-bold uppercase">
 TELL US ABOUT YOUR BUSINESS
 </p>
 </div>

 <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Full name <span className="text-red-500">*</span>
 </label>
 <input 
 type="text" 
 name="fullName"
 value={formData.fullName}
 onChange={handleInputChange}
 placeholder="Enter your full name" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.fullName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-600 focus:ring-purple-600/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.fullName && <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>}
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Business name <span className="text-red-500">*</span>
 </label>
 <input 
 type="text" 
 name="businessName"
 value={formData.businessName}
 onChange={handleInputChange}
 placeholder="Enter your business name" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.businessName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-600 focus:ring-purple-600/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.businessName && <p className="text-red-500 text-[10px] mt-1">{errors.businessName}</p>}
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Email <span className="text-red-500">*</span>
 </label>
 <input 
 type="email" 
 name="email"
 value={formData.email}
 onChange={handleInputChange}
 placeholder="you@example.com" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-600 focus:ring-purple-600/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Phone number <span className="text-red-500">*</span>
 </label>
 <input 
 type="tel" 
 name="phone"
 value={formData.phone}
 onChange={handleInputChange}
 placeholder="+91 XXXXX XXXXX" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-600 focus:ring-purple-600/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
 </div>
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Business Category <span className="text-red-500">*</span>
 </label>
 <select 
 name="category"
 value={formData.category}
 onChange={handleInputChange}
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.category ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-600 focus:ring-purple-600/20'} bg-white text-[#111827] focus:outline-none focus:ring-2 transition-all appearance-none`}
 style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.875rem center", backgroundRepeat: "no-repeat", backgroundSize: "1em" }}
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
 {errors.category && <p className="text-red-500 text-[10px] mt-1">{errors.category}</p>}
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 What do you offer? <span className="text-red-500">*</span>
 </label>
 <input 
 type="text" 
 name="offering"
 value={formData.offering}
 onChange={handleInputChange}
 placeholder="e.g. Interior Design Services, Home Bakery" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.offering ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-600 focus:ring-purple-600/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.offering && <p className="text-red-500 text-[10px] mt-1">{errors.offering}</p>}
 </div>

 <div className="pt-2">
 <button 
 type="submit" 
 className="py-2.5 px-6 rounded-xl font-bold text-sm bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md shadow-purple-500/20"
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
 <div className="text-center mb-4">
 <p className="text-xs tracking-wider text-slate-400 font-bold uppercase">
 WEBSITE REQUIREMENTS
 </p>
 </div>

 <form className="space-y-3" onSubmit={handleSubmit}>
 
 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Do you already have a website? <span className="text-red-500">*</span>
 </label>
 <div className="flex gap-4">
 <label className="flex items-center gap-2 cursor-pointer">
 <input 
 type="radio" 
 name="hasWebsite" 
 value="Yes" 
 checked={formData.hasWebsite === 'Yes'}
 onChange={handleInputChange}
 className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-600"
 />
 <span className="text-sm text-slate-600 ">Yes</span>
 </label>
 <label className="flex items-center gap-2 cursor-pointer">
 <input 
 type="radio" 
 name="hasWebsite" 
 value="No" 
 checked={formData.hasWebsite === 'No'}
 onChange={handleInputChange}
 className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-600"
 />
 <span className="text-sm text-slate-600 ">No</span>
 </label>
 </div>
 {errors.hasWebsite && <p className="text-red-500 text-[10px] mt-1">{errors.hasWebsite}</p>}
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Do you already have a domain? <span className="text-red-500">*</span>
 </label>
 <div className="flex gap-4">
 <label className="flex items-center gap-2 cursor-pointer">
 <input 
 type="radio" 
 name="hasDomain" 
 value="Yes" 
 checked={formData.hasDomain === 'Yes'}
 onChange={handleInputChange}
 className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-600"
 />
 <span className="text-sm text-slate-600 ">Yes</span>
 </label>
 <label className="flex items-center gap-2 cursor-pointer">
 <input 
 type="radio" 
 name="hasDomain" 
 value="No" 
 checked={formData.hasDomain === 'No'}
 onChange={handleInputChange}
 className="w-4 h-4 text-purple-600 border-slate-300 focus:ring-purple-600"
 />
 <span className="text-sm text-slate-600 ">No</span>
 </label>
 </div>
 {errors.hasDomain && <p className="text-red-500 text-[10px] mt-1">{errors.hasDomain}</p>}
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Why do you want a website? <span className="text-red-500">*</span>
 </label>
 <div className="flex flex-col gap-1.5">
 {['Get More Enquiries', 'Build Trust', 'Showcase My Business', 'Replace My Current Website'].map(goal => (
 <label key={goal} className="flex items-center gap-2 cursor-pointer">
 <input 
 type="checkbox" 
 name="websiteGoals" 
 value={goal}
 checked={formData.websiteGoals.includes(goal)}
 onChange={handleInputChange}
 className="w-3.5 h-3.5 text-purple-600 border-slate-300 rounded focus:ring-purple-600"
 />
 <span className="text-sm text-slate-600 ">{goal}</span>
 </label>
 ))}
 </div>
 {errors.websiteGoals && <p className="text-red-500 text-[10px] mt-1">{errors.websiteGoals}</p>}
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 If you have a website - Enter your URL:
 </label>
 <input 
 type="url" 
 name="websiteUrl"
 value={formData.websiteUrl}
 onChange={handleInputChange}
 placeholder="https://example.com" 
 className="w-full py-2.5 px-3.5 text-sm rounded-xl border border-slate-200 bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all"
 />
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Tell us about your website <span className="text-red-500">*</span>
 </label>
 <textarea 
 name="websiteDescription"
 value={formData.websiteDescription}
 onChange={handleInputChange}
 placeholder="Describe your current website..." 
 rows={2}
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.websiteDescription ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-600 focus:ring-purple-600/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none`}
 />
 {errors.websiteDescription && <p className="text-red-500 text-[10px] mt-1">{errors.websiteDescription}</p>}
 </div>

 <div>
 <label className="text-xs font-semibold text-slate-700 mb-1 block">
 Message <span className="text-red-500">*</span>
 </label>
 <textarea 
 name="message"
 value={formData.message}
 onChange={handleInputChange}
 placeholder="Anything else we should know?" 
 rows={2}
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-purple-600 focus:ring-purple-600/20'} bg-white text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none`}
 />
 {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
 </div>

 <div className="pt-2 flex justify-between items-center">
 <button 
 type="button" 
 onClick={handleBack}
 className="py-2.5 px-6 rounded-xl font-bold text-sm bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 :bg-slate-700 transition-all shadow-sm"
 >
 Back
 </button>
 <button 
 type="submit" 
 className="py-2.5 px-6 rounded-xl font-bold text-sm bg-purple-600 hover:bg-purple-700 text-white transition-all shadow-md shadow-purple-500/20"
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
 </div>
 </div>
 );
};

export default LeadForm;

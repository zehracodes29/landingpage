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
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState(null);
 const [submitMessage, setSubmitMessage] = useState("");

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

 const handleSubmit = async (e) => {
 e.preventDefault();
 if (validateStep2()) {
 setIsSubmitting(true);
 setSubmitStatus(null);
 
 const payload = {
 full_name: formData.fullName,
 business_name: formData.businessName,
 email: formData.email,
 phone_number: formData.phone,
 business_category: formData.category,
 what_do_you_offer: formData.offering,
 has_website: formData.hasWebsite,
 has_domain: formData.hasDomain,
 reasons_for_website: formData.websiteGoals,
 existing_website_url: formData.websiteUrl,
 website_description: formData.websiteDescription,
 message: formData.message
 };

 try {
 const response = await fetch('https://pagemistri.in/submit-lead.php', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify(payload)
 });

 if (response.ok) {
 setSubmitStatus('success');
 setSubmitMessage("Thank you! Your inquiry has been submitted. We'll be in touch soon.");
 } else {
 setSubmitStatus('error');
 setSubmitMessage("Something went wrong. Please try again later.");
 }
 } catch (error) {
 setSubmitStatus('error');
 setSubmitMessage("Failed to submit. Please check your connection and try again.");
 } finally {
 setIsSubmitting(false);
 }
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
 <h2 className="text-[28px] md:text-[32px] font-extrabold text-text-primary dark:text-white tracking-tight leading-tight mb-3">
 Tell Us About Your Business
 </h2>
 <p className="text-[15px] text-[#4B5563] dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
 Fill out the quick form below to start your custom website build.
 </p>
 </div>

 <div className="w-full relative flex items-center justify-center">
 <div className="bg-transparent shadow-none border-none p-0 sm:p-2 w-full max-w-lg mx-auto relative z-10 overflow-visible min-h-[540px]">
 
 {/* Step Indicators */}
 <div className="flex items-center justify-center gap-2.5 mb-4 relative z-20 sticky top-0 bg-transparent py-2">
 {step === 1 ? (
 <>
 <div className="flex items-center gap-2.5">
 <div className="h-3 w-3 rounded-full bg-brand ring-4 ring-purple-100" />
 <div className="h-1 w-10 rounded-full bg-brand-surface-sm" />
 </div>
 <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
 </>
 ) : (
 <>
 <div className="flex items-center gap-2.5">
 <div className="h-2.5 w-2.5 rounded-full bg-brand" />
 <div className="h-1 w-10 rounded-full bg-brand" />
 </div>
 <div className="h-3 w-3 rounded-full bg-brand ring-4 ring-purple-100" />
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

 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Full name <span className="text-red-500">*</span>
 </label>
 <input 
 type="text" 
 name="fullName"
 value={formData.fullName}
 onChange={handleInputChange}
 placeholder="Enter your full name" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.fullName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 dark:focus:ring-purple-500/20'} bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.fullName && <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>}
 </div>

 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Business name <span className="text-red-500">*</span>
 </label>
 <input 
 type="text" 
 name="businessName"
 value={formData.businessName}
 onChange={handleInputChange}
 placeholder="Enter your business name" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.businessName ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 dark:focus:ring-purple-500/20'} bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.businessName && <p className="text-red-500 text-[10px] mt-1">{errors.businessName}</p>}
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Email <span className="text-red-500">*</span>
 </label>
 <input 
 type="email" 
 name="email"
 value={formData.email}
 onChange={handleInputChange}
 placeholder="you@example.com" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 dark:focus:ring-purple-500/20'} bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
 </div>

 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Phone number <span className="text-red-500">*</span>
 </label>
 <input 
 type="tel" 
 name="phone"
 value={formData.phone}
 onChange={handleInputChange}
 placeholder="+91 XXXXX XXXXX" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 dark:focus:ring-purple-500/20'} bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
 </div>
 </div>

 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Business Category <span className="text-red-500">*</span>
 </label>
 <select 
 name="category"
 value={formData.category}
 onChange={handleInputChange}
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.category ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 dark:focus:ring-purple-500/20'} bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 focus:outline-none focus:ring-2 transition-all appearance-none`}
 style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")", backgroundPosition: "right 0.875rem center", backgroundRepeat: "no-repeat", backgroundSize: "1em" }}
 >
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="" disabled>Select category</option>
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="coach">Coach / Consultant</option>
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="healthcare">Healthcare</option>
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="real-estate">Real Estate</option>
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="restaurant">Restaurant / Café</option>
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="salon">Salon / Spa</option>
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="education">Education</option>
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="retail">Retail Store</option>
 <option className="bg-white dark:bg-slate-900 text-text-primary dark:text-slate-100" value="other">Other</option>
 </select>
 {errors.category && <p className="text-red-500 text-[10px] mt-1">{errors.category}</p>}
 </div>

 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 What do you offer? <span className="text-red-500">*</span>
 </label>
 <input 
 type="text" 
 name="offering"
 value={formData.offering}
 onChange={handleInputChange}
 placeholder="e.g. Interior Design Services, Home Bakery" 
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.offering ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 dark:focus:ring-purple-500/20'} bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 transition-all`}
 />
 {errors.offering && <p className="text-red-500 text-[10px] mt-1">{errors.offering}</p>}
 </div>

 <div className="pt-2">
 <button 
 type="submit" 
 className="py-2.5 px-6 rounded-xl font-bold text-sm bg-brand hover:bg-brand-hover text-white transition-all shadow-md dark:shadow-none shadow-purple-500/20 active:scale-95"
 >
 Start My Website
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

 <form className="space-y-4" onSubmit={handleSubmit}>
 
 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Do you already have a website? <span className="text-red-500">*</span>
 </label>
 <div className="grid grid-cols-2 gap-3">
<label className={`cursor-pointer rounded-xl border py-3 text-center font-medium transition-all ${
 formData.hasWebsite === 'Yes' 
 ? 'border-brand bg-brand-surface-xs dark:bg-brand-surface-sm text-brand  ring-1 ring-brand shadow-sm dark:shadow-none'
 : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-text-muted dark:text-slate-400 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:shadow-sm dark:shadow-none'
 }`}>
 <input 
 type="radio" 
 name="hasWebsite" 
 value="Yes" 
 checked={formData.hasWebsite === 'Yes'}
 onChange={handleInputChange}
 className="sr-only"
 />
 Yes
 </label>
 <label className={`cursor-pointer rounded-xl border py-3 text-center font-medium transition-all ${
 formData.hasWebsite === 'No' 
 ? 'border-brand bg-brand-surface-xs dark:bg-brand-surface-sm text-brand  ring-1 ring-brand shadow-sm dark:shadow-none'
 : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-text-muted dark:text-slate-400 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:shadow-sm dark:shadow-none'
 }`}>
 <input 
 type="radio" 
 name="hasWebsite" 
 value="No" 
 checked={formData.hasWebsite === 'No'}
 onChange={handleInputChange}
 className="sr-only"
 />
 No
 </label>
 </div>
 {errors.hasWebsite && <p className="text-red-500 text-[10px] mt-1">{errors.hasWebsite}</p>}
 </div>

 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Do you already have a domain? <span className="text-red-500">*</span>
 </label>
 <div className="grid grid-cols-2 gap-3">
<label className={`cursor-pointer rounded-xl border py-3 text-center font-medium transition-all ${
 formData.hasDomain === 'Yes' 
 ? 'border-brand bg-brand-surface-xs dark:bg-brand-surface-sm text-brand  ring-1 ring-brand shadow-sm dark:shadow-none'
 : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-text-muted dark:text-slate-400 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:shadow-sm dark:shadow-none'
 }`}>
 <input 
 type="radio" 
 name="hasDomain" 
 value="Yes" 
 checked={formData.hasDomain === 'Yes'}
 onChange={handleInputChange}
 className="sr-only"
 />
 Yes
 </label>
 <label className={`cursor-pointer rounded-xl border py-3 text-center font-medium transition-all ${
 formData.hasDomain === 'No' 
 ? 'border-brand bg-brand-surface-xs dark:bg-brand-surface-sm text-brand  ring-1 ring-brand shadow-sm dark:shadow-none'
 : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-text-muted dark:text-slate-400 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:shadow-sm dark:shadow-none'
 }`}>
 <input 
 type="radio" 
 name="hasDomain" 
 value="No" 
 checked={formData.hasDomain === 'No'}
 onChange={handleInputChange}
 className="sr-only"
 />
 No
 </label>
 </div>
 {errors.hasDomain && <p className="text-red-500 text-[10px] mt-1">{errors.hasDomain}</p>}
 </div>

 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Why do you want a website? <span className="text-red-500">*</span>
 </label>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 {['Get More Enquiries', 'Build Trust', 'Showcase My Business', 'Replace My Current Website'].map(goal => (
 <label key={goal} className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${
 formData.websiteGoals.includes(goal) 
 ? 'border-brand bg-brand-surface-xs ring-1 ring-brand shadow-sm dark:shadow-none' 
 : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-purple-400 hover:bg-slate-50 dark:bg-slate-900/50 hover:shadow-sm dark:shadow-none'
 }`}>
 <input 
 type="checkbox" 
 name="websiteGoals" 
 value={goal}
 checked={formData.websiteGoals.includes(goal)}
 onChange={handleInputChange}
 className="w-4 h-4 text-brand border-slate-300 rounded focus:ring-brand"
 />
 <span className={`text-sm font-medium ${formData.websiteGoals.includes(goal) ? 'text-brand' : 'text-text-muted dark:text-slate-400'}`}>{goal}</span>
 </label>
 ))}
 </div>
 {errors.websiteGoals && <p className="text-red-500 text-[10px] mt-1">{errors.websiteGoals}</p>}
 </div>

 {formData.hasWebsite === 'Yes' && (
 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 If you have a website - Enter your URL:
 </label>
 <input 
 type="url" 
 name="websiteUrl"
 value={formData.websiteUrl}
 onChange={handleInputChange}
 placeholder="https://example.com" 
 className="w-full py-2.5 px-3.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-500/20 dark:focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-500 transition-all"
 />
 </div>
 )}

 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Tell us about your website <span className="text-red-500">*</span>
 </label>
 <textarea 
 name="websiteDescription"
 value={formData.websiteDescription}
 onChange={handleInputChange}
 placeholder="Describe your current website..." 
 rows={2}
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.websiteDescription ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 dark:focus:ring-purple-500/20'} bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 transition-all max-h-32 overflow-y-auto`}
 />
 {errors.websiteDescription && <p className="text-red-500 text-[10px] mt-1">{errors.websiteDescription}</p>}
 </div>

 <div>
 <label className="text-sm font-semibold text-text-secondary dark:text-slate-400 mb-2 block">
 Message <span className="text-red-500">*</span>
 </label>
 <textarea 
 name="message"
 value={formData.message}
 onChange={handleInputChange}
 placeholder="Anything else we should know?" 
 rows={2}
 className={`w-full py-2.5 px-3.5 text-sm rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-purple-500 dark:focus:border-purple-500 focus:ring-purple-500/20 dark:focus:ring-purple-500/20'} bg-white dark:bg-slate-900/90 text-text-primary dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:outline-none focus:ring-2 transition-all max-h-32 overflow-y-auto`}
 />
 {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
 </div>

 <div className="pt-2 flex flex-col gap-3">
 {submitStatus && (
 <div className={`p-3 rounded-xl text-sm font-medium flex items-center gap-2 ${submitStatus === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
 {submitStatus === 'success' ? (
 <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
 ) : (
 <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
 )}
 {submitMessage}
 </div>
 )}
 <div className="flex justify-between items-center w-full">
 <button 
 type="button" 
 onClick={handleBack}
 disabled={isSubmitting}
 className="py-2.5 px-6 rounded-xl font-bold text-sm bg-white dark:bg-slate-900 border border-slate-300 text-text-muted dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900/50 transition-all shadow-sm dark:shadow-none disabled:opacity-50"
 >
 Back
 </button>
 <button 
 type="submit" 
 disabled={isSubmitting}
 className={`py-2.5 px-6 rounded-xl font-bold text-sm bg-brand text-white transition-all shadow-md dark:shadow-none flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-hover shadow-purple-500/20 active:scale-95'}`}
 >
 {isSubmitting ? (
 <>
 <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
 Submitting...
 </>
 ) : "Start My Website"}
 </button>
 </div>
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

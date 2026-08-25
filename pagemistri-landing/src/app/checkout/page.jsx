"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, UploadCloud, ChevronDown, Lock, ShieldCheck, Zap } from "lucide-react";

const STEPS = [
  { num: 1, title: "Basics" },
  { num: 2, title: "Brand" },
  { num: 3, title: "Offerings" },
  { num: 4, title: "Assets" },
  { num: 5, title: "Payment" },
];

const BRAND_PALETTES = ["#4400AF", "#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#000000"];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    hasDomain: "No",
    domainDetails: "",
    phone: "",
    address: "",
    socialLinks: "",
    brandColors: "#4400AF",
    aboutBusiness: "",
    productsServices: "",
    description: "",
    usp: "",
    testimonials: "",
    paymentGateway: "No",
  });
  
  const [isClient, setIsClient] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0); // mock progress

  // Load from LocalStorage
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("pagemistri_onboarding");
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("pagemistri_onboarding", JSON.stringify(formData));
    }
  }, [formData, isClient]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e?.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = (e) => {
    e?.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCheckout = () => {
    alert("Razorpay Checkout SDK Triggered!");
  };

  const getWordCount = (str) => {
    return str.trim() ? str.trim().split(/\s+/).length : 0;
  };

  const mockUpload = (e) => {
    if (e.target.files?.length > 0) {
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  // Form Step Variants
  const formVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-100 flex flex-col font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 mt-16 max-w-7xl mx-auto w-full">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Website Setup & Onboarding</h1>
            <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-slate-600">Secure Process</span>
            </div>
          </div>
          
          <div className="relative">
            {/* Progress Track Background */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#4400AF]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
            
            {/* Steps */}
            <div className="relative flex justify-between">
              {STEPS.map((s, idx) => {
                const isCompleted = currentStep > s.num;
                const isCurrent = currentStep === s.num;
                return (
                  <div key={s.num} className="flex flex-col items-center">
                    <motion.div 
                      className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white transition-colors duration-300 ${
                        isCompleted ? "border-green-500 bg-green-50 text-green-500" : 
                        isCurrent ? "border-[#4400AF] bg-[#4400AF] text-white" : "border-slate-200 text-slate-400"
                      }`}
                      animate={isCompleted ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5 text-green-500 animate-pulse" />
                      ) : (
                        <span className="font-bold text-sm">{s.num}</span>
                      )}
                      
                      {/* Glow effect for completed */}
                      {isCompleted && (
                        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
                      )}
                    </motion.div>
                    <span className={`mt-2 text-xs font-semibold hidden sm:block ${isCurrent ? "text-[#4400AF]" : isCompleted ? "text-slate-600" : "text-slate-400"}`}>
                      {s.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form Setup (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-xl shadow-slate-200/50 p-6 sm:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  variants={formVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <form className="space-y-8" onSubmit={currentStep === 5 ? (e) => { e.preventDefault(); handleCheckout(); } : handleNext}>
                    
                    {/* Step 1: Business Basics */}
                    {currentStep === 1 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                          <span className="bg-[#4400AF]/10 text-[#4400AF] p-2 rounded-xl"><Zap className="w-5 h-5" /></span>
                          Business Basics
                        </h2>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Business Name *</label>
                            <input required type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50" placeholder="e.g. Acme Corp" />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Domain Status *</label>
                            <div className="flex gap-4 mb-3">
                              <label className={`flex-1 flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.hasDomain === "Yes" ? "border-[#4400AF] bg-[#4400AF]/5" : "border-slate-100 hover:border-slate-200"}`}>
                                <input type="radio" name="hasDomain" value="Yes" checked={formData.hasDomain === "Yes"} onChange={handleInputChange} className="accent-[#4400AF] w-4 h-4" />
                                <span className="text-sm font-semibold text-slate-700">I have a domain</span>
                              </label>
                              <label className={`flex-1 flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.hasDomain === "No" ? "border-[#4400AF] bg-[#4400AF]/5" : "border-slate-100 hover:border-slate-200"}`}>
                                <input type="radio" name="hasDomain" value="No" checked={formData.hasDomain === "No"} onChange={handleInputChange} className="accent-[#4400AF] w-4 h-4" />
                                <span className="text-sm font-semibold text-slate-700">I need one</span>
                              </label>
                            </div>
                            <input required type="text" name="domainDetails" value={formData.domainDetails} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50 mt-2" placeholder={formData.hasDomain === "Yes" ? "Enter your domain (e.g. example.com)" : "Preferred domain name to check availability"} />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                              <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50" placeholder="+91 XXXXX XXXXX" />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-2">Business Address *</label>
                              <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50" placeholder="City, State" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Brand Identity */}
                    {currentStep === 2 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Brand Identity</h2>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Logo Upload</label>
                            <div className="border-2 border-dashed border-purple-200 hover:border-[#4400AF] bg-purple-50/30 transition-all rounded-2xl p-8 text-center cursor-pointer group relative overflow-hidden">
                              <input type="file" accept=".svg,.png,.jpg,.jpeg" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                              <UploadCloud className="w-10 h-10 text-purple-300 group-hover:text-[#4400AF] mx-auto mb-3 transition-colors" />
                              <p className="text-sm font-semibold text-slate-700">Drag & drop your logo here, or <span className="text-[#4400AF]">browse</span></p>
                              <p className="text-xs text-slate-400 mt-1">Supports SVG, PNG, JPG (Max 5MB)</p>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Brand Color</label>
                            <div className="flex flex-wrap items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                              <div className="flex gap-2">
                                {BRAND_PALETTES.map(color => (
                                  <button
                                    key={color}
                                    type="button"
                                    onClick={() => setFormData(prev => ({...prev, brandColors: color}))}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${formData.brandColors.toLowerCase() === color.toLowerCase() ? "border-slate-800 scale-110 shadow-md" : "border-transparent hover:scale-110"}`}
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                              <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>
                              <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 px-3 py-1.5 focus-within:ring-2 focus-within:ring-[#4400AF]/20 focus-within:border-[#4400AF] transition-all flex-grow sm:flex-grow-0">
                                <input type="color" name="brandColors" value={formData.brandColors} onChange={handleInputChange} className="w-6 h-6 rounded cursor-pointer border-0 p-0 bg-transparent" />
                                <input type="text" name="brandColors" value={formData.brandColors} onChange={handleInputChange} className="w-24 text-sm font-mono focus:outline-none uppercase" />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="flex justify-between items-end mb-2">
                              <span className="block text-sm font-semibold text-slate-700">About Your Business</span>
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getWordCount(formData.aboutBusiness) > 250 ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-500"}`}>
                                {getWordCount(formData.aboutBusiness)} / 250 words
                              </span>
                            </label>
                            <textarea name="aboutBusiness" value={formData.aboutBusiness} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50 min-h-[120px] resize-y" placeholder="Briefly describe what your business does..." />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Social Links</label>
                            <input type="text" name="socialLinks" value={formData.socialLinks} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50" placeholder="instagram.com/yourhandle, etc." />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Offerings */}
                    {currentStep === 3 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Offerings & Content</h2>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Core Products / Services *</label>
                            <textarea required name="productsServices" value={formData.productsServices} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50 min-h-[100px]" placeholder="List the primary things you want to sell or promote..." />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Detailed Description *</label>
                            <textarea required name="description" value={formData.description} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50 min-h-[120px]" placeholder="Elaborate on your offerings, target audience, and pricing..." />
                          </div>

                          {/* Accordion for Optionals */}
                          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                            <button type="button" onClick={() => setOpenAccordion(openAccordion === 'usp' ? null : 'usp')} className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
                              <span className="font-semibold text-sm text-slate-700">Add USP / Key Benefits (Optional)</span>
                              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openAccordion === 'usp' ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {openAccordion === 'usp' && (
                                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                  <div className="px-5 pb-5 pt-2">
                                    <textarea name="usp" value={formData.usp} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50 min-h-[100px]" placeholder="Why choose you over competitors?" />
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          
                          <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                            <button type="button" onClick={() => setOpenAccordion(openAccordion === 'testi' ? null : 'testi')} className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
                              <span className="font-semibold text-sm text-slate-700">Add Testimonials (Optional)</span>
                              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openAccordion === 'testi' ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {openAccordion === 'testi' && (
                                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                  <div className="px-5 pb-5 pt-2">
                                    <textarea name="testimonials" value={formData.testimonials} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 focus:border-[#4400AF] transition-all bg-slate-50/50 min-h-[100px]" placeholder="Paste customer reviews here..." />
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Assets & Integration */}
                    {currentStep === 4 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Assets & Integrations</h2>
                        
                        <div className="space-y-6">
                          <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                            <label className="block text-sm font-semibold text-slate-800 mb-1">Documents & Media Files</label>
                            <p className="text-xs text-slate-500 mb-4">Upload forms, PDFs, or a ZIP of your assets.</p>
                            
                            <div className="border-2 border-dashed border-slate-200 hover:border-[#4400AF] bg-slate-50 transition-all rounded-xl p-6 text-center cursor-pointer relative overflow-hidden">
                              <input type="file" multiple onChange={mockUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                              <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                              <p className="text-sm font-semibold text-slate-700">Click to browse or drag files</p>
                              
                              {uploadProgress > 0 && uploadProgress < 100 && (
                                <div className="mt-4 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                  <motion.div initial={{ width: 0 }} animate={{ width: `${uploadProgress}%` }} className="h-full bg-[#4400AF]" />
                                </div>
                              )}
                              {uploadProgress === 100 && (
                                <p className="text-xs font-bold text-green-500 mt-3 flex items-center justify-center gap-1"><Check className="w-3 h-3" /> Files attached successfully</p>
                              )}
                            </div>
                          </div>

                          <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50/50 border border-purple-100 rounded-2xl relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-200/50 rounded-full blur-2xl"></div>
                            <div className="relative z-10">
                              <label className="block text-base font-bold text-slate-900 mb-1">Payment Gateway Integration</label>
                              <p className="text-sm text-slate-600 mb-5">Do you want a payment gateway (e.g. Razorpay) integrated into your website's lead form?</p>
                              
                              <div className="flex gap-4">
                                <label className={`flex-1 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.paymentGateway === "Yes" ? "border-[#4400AF] bg-white shadow-md shadow-purple-900/5" : "border-slate-200 bg-white/50 hover:bg-white"}`}>
                                  <input type="radio" name="paymentGateway" value="Yes" checked={formData.paymentGateway === "Yes"} onChange={handleInputChange} className="sr-only" />
                                  <span className="text-sm font-bold text-slate-800">Yes, include it</span>
                                  <span className="text-xs text-slate-500 text-center">Accept online payments</span>
                                </label>
                                <label className={`flex-1 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.paymentGateway === "No" ? "border-slate-800 bg-white shadow-md" : "border-slate-200 bg-white/50 hover:bg-white"}`}>
                                  <input type="radio" name="paymentGateway" value="No" checked={formData.paymentGateway === "No"} onChange={handleInputChange} className="sr-only" />
                                  <span className="text-sm font-bold text-slate-800">No, skip this</span>
                                  <span className="text-xs text-slate-500 text-center">I don't need payments</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Empty space to let right column shine, just final confirm button */}
                    {currentStep === 5 && (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6 relative">
                          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-green-400 rounded-full opacity-20 blur-md"></motion.div>
                          <Check className="w-10 h-10 text-green-500 relative z-10" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">You're all set!</h2>
                        <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                          Please review your order summary on the right and proceed to secure payment to begin your website setup.
                        </p>
                      </div>
                    )}

                    {/* Form Controls */}
                    <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                      {currentStep > 1 ? (
                        <button type="button" onClick={handlePrev} className="px-6 py-3 rounded-xl font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all flex items-center gap-2">
                          Back
                        </button>
                      ) : <div></div>}
                      
                      {currentStep < 5 && (
                        <button type="submit" className="bg-[#4400AF] hover:bg-[#310080] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 active:scale-[0.98] flex items-center gap-2">
                          Next Step
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </form>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Sticky Summary (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl border border-purple-100 shadow-2xl shadow-purple-900/10 p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Business Name</p>
                      <p className="text-xs text-slate-500 mt-0.5">{formData.businessName || "Pending..."}</p>
                    </div>
                    {formData.businessName && <Check className="w-4 h-4 text-green-500" />}
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Domain Strategy</p>
                      <p className="text-xs text-slate-500 mt-0.5 truncate max-w-[200px]">
                        {formData.hasDomain === "Yes" ? "Existing: " : "Needs: "} 
                        {formData.domainDetails || "Pending..."}
                      </p>
                    </div>
                    {formData.domainDetails && <Check className="w-4 h-4 text-green-500" />}
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Payment Gateway Add-on</p>
                      <p className="text-xs text-slate-500 mt-0.5">{formData.paymentGateway === "Yes" ? "Included" : "Skipped"}</p>
                    </div>
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600 font-medium">Setup Package</span>
                    <span className="text-slate-900 font-bold">₹5,000</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Taxes & Fees</span>
                    <span className="text-green-600 font-semibold text-xs bg-green-100 px-2 py-0.5 rounded">Included</span>
                  </div>
                  
                  <div className="border-t border-slate-200 mt-4 pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900">Total Due Today</span>
                    <span className="text-3xl font-black text-[#4400AF]">₹5,000</span>
                  </div>
                </div>
                
                {currentStep === 5 ? (
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-[#4400AF] to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-900/30 flex justify-center items-center gap-2 group"
                  >
                    <Lock className="w-4 h-4 group-hover:hidden" />
                    <Zap className="w-5 h-5 hidden group-hover:block text-yellow-300" />
                    Pay ₹5,000 & Complete Setup
                  </motion.button>
                ) : (
                  <button disabled className="w-full bg-slate-100 text-slate-400 font-bold py-4 rounded-xl flex justify-center items-center gap-2 cursor-not-allowed">
                    Complete Form to Pay
                  </button>
                )}

                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1"><Lock className="w-3 h-3" /> 256-bit SSL</div>
                  <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure Payment via Razorpay</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

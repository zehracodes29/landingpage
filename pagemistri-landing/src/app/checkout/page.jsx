"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, UploadCloud, ChevronDown, Lock, ShieldCheck, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const PHP_API_URL = "https://pagemistri.in/api/submit-form.php";

const STEPS = [
  { num: 1, title: "Basics" },
  { num: 2, title: "Brand" },
  { num: 3, title: "Offerings" },
  { num: 4, title: "Assets" },
  { num: 5, title: "Payment" },
];

const BRAND_PALETTES = ["#4400AF", "#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#000000"];

const baseSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().min(2, "Business name is required"),
  hasDomain: z.string(),
  domainDetails: z.string().optional(),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
  businessAddress: z.string().min(5, "Address is required"),
  
  socialLinks: z.string().optional(),
  logoUrl: z.string().min(1, "Please upload a logo before proceeding"),
  brandColor: z.string().min(1, "Select or enter a brand color"),
  aboutBusiness: z.string().refine(val => val && val.trim().split(/\s+/).length >= 20, "Please provide at least 20 words about your business"),
  
  targetOffering: z.string().min(3, "Please specify your main product or service"),
  offeringDetails: z.string().min(10, "Please describe your product/service details"),
  uspBenefits: z.string().optional(),
  testimonialsPricing: z.string().optional(),
  
  formRequirementsDocUrl: z.string().min(1, "Please upload the form requirements document"),
  extraDocsUrl: z.string().optional(),
  mediaFilesUrl: z.string().optional(),
  paymentGatewayRequested: z.enum(["Yes", "No"]).default("No"),
});

export default function CheckoutPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const { register, trigger, watch, setValue, formState: { errors }, reset } = useForm({
    resolver: zodResolver(baseSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      businessName: "",
      hasDomain: "No",
      domainDetails: "",
      phone: "",
      businessAddress: "",
      socialLinks: "",
      brandColor: "#4400AF",
      aboutBusiness: "",
      targetOffering: "",
      offeringDetails: "",
      uspBenefits: "",
      testimonialsPricing: "",
      logoUrl: "",
      formRequirementsDocUrl: "",
      extraDocsUrl: "",
      mediaFilesUrl: "",
      paymentGatewayRequested: "No",
    }
  });

  const formData = watch();

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("pagemistri_onboarding");
    if (saved) {
      try {
        reset(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
  }, [reset]);

  useEffect(() => {
    if (isClient) {
      const subscription = watch((value) => {
        localStorage.setItem("pagemistri_onboarding", JSON.stringify(value));
      });
      return () => subscription.unsubscribe();
    }
  }, [watch, isClient]);

  const stepFields = {
    1: ["fullName", "email", "businessName", "phone", "businessAddress", "domainDetails"],
    2: ["logoUrl", "brandColor", "aboutBusiness"],
    3: ["targetOffering", "offeringDetails"],
    4: ["formRequirementsDocUrl"]
  };

  const handleNext = async (e) => {
    e?.preventDefault();
    const fieldsToValidate = stepFields[currentStep];
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid && currentStep < 5) {
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

  const handleCheckout = async (e) => {
    e?.preventDefault();
    const isValid = await trigger();
    if (!isValid) return;

    const paymentDetails = {
      razorpay_order_id: "order_mock_" + Math.random().toString(36).substr(2, 9),
      razorpay_payment_id: "pay_mock_" + Math.random().toString(36).substr(2, 9)
    };

    const payload = {
      full_name: formData.fullName || "",
      business_name: formData.businessName || "",
      phone: formData.phone || "",
      email: formData.email || "",
      business_address: formData.businessAddress || "",
      domain_details: formData.domainDetails || "",
      social_links: formData.socialLinks || "",
      logo_url: formData.logoUrl || "",
      brand_color: formData.brandColor || "",
      about_business: formData.aboutBusiness || "",
      target_offering: formData.targetOffering || "",
      offering_details: formData.offeringDetails || "",
      usp_benefits: formData.uspBenefits || "",
      testimonials_pricing: formData.testimonialsPricing || "",
      form_requirements_doc_url: formData.formRequirementsDocUrl || "",
      extra_docs_url: formData.extraDocsUrl || "",
      media_files_url: formData.mediaFilesUrl || "",
      payment_gateway_requested: formData.paymentGatewayRequested === "Yes" ? "Yes" : "No",
      razorpay_order_id: paymentDetails.razorpay_order_id || "",
      razorpay_payment_id: paymentDetails.razorpay_payment_id || "",
      payment_status: "Success"
    };

    try {
      const response = await fetch(PHP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.status === "success") {
        localStorage.clear();
        router.push("/thank-you");
      } else {
        console.error("Submission error:", result.message);
        alert(`Error saving form: ${result.message}`);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const getWordCount = (str) => {
    return str && typeof str === 'string' && str.trim() ? str.trim().split(/\s+/).length : 0;
  };

  const formVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const getInputClass = (fieldName) => `w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#4400AF]/20 transition-all bg-slate-50/50 ${
    errors[fieldName] ? 'border-red-500 focus:border-red-500 bg-red-50/10' : 'border-slate-200 focus:border-[#4400AF]'
  }`;

  const renderError = (fieldName) => {
    return errors[fieldName] ? <p className="text-red-500 text-xs mt-1 font-semibold">{errors[fieldName]?.message}</p> : null;
  };

  const handleMockUpload = (field) => (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(field, URL.createObjectURL(file), { shouldValidate: true });
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-100 flex flex-col font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-grow py-4 px-4 sm:px-6 lg:px-8 mt-16 max-w-7xl mx-auto w-full flex flex-col items-center justify-start">
        <div className="mb-6 w-full max-w-3xl text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-between mb-4">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Website Setup & Onboarding</h1>
            <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-slate-600">Secure Process</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#4400AF]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
            
            <div className="relative flex justify-between">
              {STEPS.map((s) => {
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
                      {isCompleted ? <Check className="w-5 h-5 text-green-500 animate-pulse" /> : <span className="font-bold text-sm">{s.num}</span>}
                      {isCompleted && <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>}
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

        {currentStep < 5 ? (
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={currentStep} variants={formVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                    <form className="flex flex-col relative" onSubmit={handleNext}>
                      
                      {currentStep === 1 && (
                        <div>
                          <h2 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                            <span className="bg-[#4400AF]/10 text-[#4400AF] p-2 rounded-xl"><Zap className="w-5 h-5" /></span>
                            Business Basics
                          </h2>
                          
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name *</label>
                                <input type="text" {...register("fullName")} className={getInputClass("fullName")} placeholder="John Doe" />
                                {renderError("fullName")}
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address *</label>
                                <input type="email" {...register("email")} className={getInputClass("email")} placeholder="john@example.com" />
                                {renderError("email")}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-1">Business Name *</label>
                              <input type="text" {...register("businessName")} className={getInputClass("businessName")} placeholder="e.g. Acme Corp" />
                              {renderError("businessName")}
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-1">Domain Status *</label>
                              <div className="flex gap-4 mb-3">
                                <label className={`flex-1 flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.hasDomain === "Yes" ? "border-[#4400AF] bg-[#4400AF]/5" : "border-slate-100 hover:border-slate-200"}`}>
                                  <input type="radio" value="Yes" {...register("hasDomain")} className="accent-[#4400AF] w-4 h-4" />
                                  <span className="text-sm font-semibold text-slate-700">I have a domain</span>
                                </label>
                                <label className={`flex-1 flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.hasDomain === "No" ? "border-[#4400AF] bg-[#4400AF]/5" : "border-slate-100 hover:border-slate-200"}`}>
                                  <input type="radio" value="No" {...register("hasDomain")} className="accent-[#4400AF] w-4 h-4" />
                                  <span className="text-sm font-semibold text-slate-700">I need one</span>
                                </label>
                              </div>
                              <input type="text" {...register("domainDetails")} className={getInputClass("domainDetails")} placeholder={formData.hasDomain === "Yes" ? "Enter your domain (e.g. example.com)" : "Preferred domain name to check availability"} />
                              {renderError("domainDetails")}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number *</label>
                                <input type="tel" {...register("phone")} className={getInputClass("phone")} placeholder="9XXXXXXXXX" />
                                {renderError("phone")}
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Business Address *</label>
                                <input type="text" {...register("businessAddress")} className={getInputClass("businessAddress")} placeholder="City, State" />
                                {renderError("businessAddress")}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div>
                          <h2 className="text-2xl font-bold mb-4 text-slate-900">Brand Identity</h2>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-1">Logo Upload *</label>
                              {formData.logoUrl ? (
                                <div className="relative border border-slate-200 rounded-xl p-4 inline-block bg-slate-50">
                                  <img src={formData.logoUrl} alt="Logo Preview" className="h-20 object-contain" />
                                  <button type="button" onClick={() => setValue("logoUrl", "", { shouldValidate: true })} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md">X</button>
                                </div>
                              ) : (
                                <div className={`border-2 border-dashed rounded-2xl p-8 text-center relative ${errors.logoUrl ? 'border-red-500 bg-red-50/10' : 'border-purple-200 bg-purple-50/30'}`}>
                                  <input type="file" onChange={handleMockUpload('logoUrl')} accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                  <UploadCloud className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                                  <p className="text-sm font-semibold text-slate-700">Click to upload Logo</p>
                                </div>
                              )}
                              {renderError("logoUrl")}
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-1">Brand Color *</label>
                              <div className={`flex flex-wrap items-center gap-4 bg-slate-50 p-4 rounded-2xl border ${errors.brandColor ? 'border-red-500 bg-red-50/10' : 'border-slate-100'}`}>
                                <div className="flex gap-2">
                                  {BRAND_PALETTES.map(color => (
                                    <button
                                      key={color}
                                      type="button"
                                      onClick={() => setValue('brandColor', color, { shouldValidate: true })}
                                      className={`w-8 h-8 rounded-full border-2 transition-all ${(formData.brandColor || "").toLowerCase() === color.toLowerCase() ? "border-slate-800 scale-110 shadow-md" : "border-transparent hover:scale-110"}`}
                                      style={{ backgroundColor: color }}
                                    />
                                  ))}
                                </div>
                                <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>
                                <div className="flex items-center gap-2 bg-white rounded-xl border border-slate-200 px-3 py-1.5 focus-within:ring-2 focus-within:ring-[#4400AF]/20 focus-within:border-[#4400AF] transition-all">
                                  <input type="color" value={formData.brandColor || "#000000"} onChange={(e) => setValue("brandColor", e.target.value, { shouldValidate: true, shouldDirty: true })} className="w-6 h-6 rounded cursor-pointer border-0 p-0 bg-transparent" />
                                  <input type="text" value={formData.brandColor || ""} onChange={(e) => setValue("brandColor", e.target.value, { shouldValidate: true, shouldDirty: true })} className="w-24 text-sm font-mono focus:outline-none uppercase" placeholder="#000000" />
                                </div>
                              </div>
                              {renderError("brandColor")}
                            </div>

                            <div>
                              <label className="flex justify-between items-end mb-1">
                                <span className="block text-sm font-semibold text-slate-700">About Your Business *</span>
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getWordCount(formData.aboutBusiness) < 20 ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-500"}`}>
                                  {getWordCount(formData.aboutBusiness)} / 20+ words
                                </span>
                              </label>
                              <textarea {...register("aboutBusiness")} className={`${getInputClass("aboutBusiness")} min-h-[120px] resize-y`} placeholder="Provide at least 20 words describing what your business does..." />
                              {renderError("aboutBusiness")}
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-1">Social Links</label>
                              <input type="text" {...register("socialLinks")} className={getInputClass("socialLinks")} placeholder="instagram.com/yourhandle, etc." />
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div>
                          <h2 className="text-2xl font-bold mb-4 text-slate-900">Offerings & Content</h2>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-1">Core Products / Services *</label>
                              <textarea {...register("targetOffering")} className={`${getInputClass("targetOffering")} min-h-[100px]`} placeholder="List the primary things you want to sell or promote..." />
                              {renderError("targetOffering")}
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-1">Detailed Description *</label>
                              <textarea {...register("offeringDetails")} className={`${getInputClass("offeringDetails")} min-h-[120px]`} placeholder="Elaborate on your offerings, target audience, and pricing..." />
                              {renderError("offeringDetails")}
                            </div>

                            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                              <button type="button" onClick={() => setOpenAccordion(openAccordion === 'usp' ? null : 'usp')} className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
                                <span className="font-semibold text-sm text-slate-700">Add USP / Key Benefits (Optional)</span>
                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openAccordion === 'usp' ? 'rotate-180' : ''}`} />
                              </button>
                              <AnimatePresence>
                                {openAccordion === 'usp' && (
                                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                                    <div className="px-5 pb-5 pt-2">
                                      <textarea {...register("uspBenefits")} className={`${getInputClass("uspBenefits")} min-h-[100px]`} placeholder="Why choose you over competitors?" />
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
                                      <textarea {...register("testimonialsPricing")} className={`${getInputClass("testimonialsPricing")} min-h-[100px]`} placeholder="Paste customer reviews here..." />
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 4 && (
                        <div>
                          <h2 className="text-2xl font-bold mb-4 text-slate-900">Assets & Integrations</h2>
                          <div className="space-y-4">
                            <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                              <label className="block text-sm font-semibold text-slate-800 mb-1">Form Requirements Document *</label>
                              <p className="text-xs text-slate-500 mb-4">Upload the PDF or DOCX listing required fields for your site's contact form.</p>
                              
                              {formData.formRequirementsDocUrl ? (
                                <div className="mb-4 flex items-center justify-between bg-white px-4 py-3 rounded-lg border border-green-200 shadow-sm">
                                  <div className="flex items-center gap-2 text-sm text-slate-700 truncate">
                                    <Check className="w-5 h-5 text-green-500" /> Document Uploaded
                                  </div>
                                  <button type="button" onClick={() => setValue('formRequirementsDocUrl', '', { shouldValidate: true })} className="text-xs text-red-500 font-semibold hover:underline">Change File</button>
                                </div>
                              ) : (
                                <div className={`border-2 border-dashed rounded-2xl p-8 text-center relative ${errors.formRequirementsDocUrl ? 'border-red-500 bg-red-50/10' : 'border-purple-200 bg-purple-50/30'}`}>
                                  <input type="file" onChange={handleMockUpload('formRequirementsDocUrl')} accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                  <UploadCloud className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                                  <p className="text-sm font-semibold text-slate-700">Click to upload Document</p>
                                </div>
                              )}
                              {renderError("formRequirementsDocUrl")}
                              
                              <div className="mt-8 pt-6 border-t border-slate-100">
                                <label className="block text-sm font-semibold text-slate-800 mb-1">Additional Media & Documents (Optional)</label>
                                <p className="text-xs text-slate-500 mb-4">Upload images or extra files.</p>
                                <div className={`border-2 border-dashed rounded-2xl p-6 text-center relative border-slate-200 bg-slate-50`}>
                                  <input type="file" multiple onChange={handleMockUpload('mediaFilesUrl')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-1" />
                                  <p className="text-sm font-semibold text-slate-700">Click to upload Additional Assets</p>
                                </div>
                                {formData.mediaFilesUrl && (
                                  <p className="text-xs text-green-600 mt-2 font-medium flex items-center gap-1"><Check className="w-4 h-4"/> Additional assets uploaded successfully</p>
                                )}
                              </div>
                            </div>

                            <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50/50 border border-purple-100 rounded-2xl relative overflow-hidden">
                              <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-200/50 rounded-full blur-2xl"></div>
                              <div className="relative z-10">
                                <label className="block text-base font-bold text-slate-900 mb-1">Payment Gateway Integration</label>
                                <p className="text-sm text-slate-600 mb-5">Do you want a payment gateway (e.g. Razorpay) integrated into your website's lead form?</p>
                                
                                <div className="flex gap-4">
                                  <label className={`flex-1 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.paymentGatewayRequested === "Yes" ? "border-[#4400AF] bg-white shadow-md shadow-purple-900/5" : "border-slate-200 bg-white/50 hover:bg-white"}`}>
                                    <input type="radio" value="Yes" {...register("paymentGatewayRequested")} className="sr-only" />
                                    <span className="text-sm font-bold text-slate-800">Yes, include it</span>
                                  </label>
                                  <label className={`flex-1 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.paymentGatewayRequested === "No" ? "border-slate-800 bg-white shadow-md" : "border-slate-200 bg-white/50 hover:bg-white"}`}>
                                    <input type="radio" value="No" {...register("paymentGatewayRequested")} className="sr-only" />
                                    <span className="text-sm font-bold text-slate-800">No, skip this</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center sticky bottom-0 bg-white py-3 z-10 w-full -mx-4 sm:-mx-6 px-4 sm:px-6">
                        <button type="button" onClick={handlePrev} className={`px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-all rounded-lg ${currentStep === 1 ? 'invisible' : 'visible'}`}>
                          ← Back
                        </button>
                        
                        <button type="submit" className="px-6 py-2.5 bg-[#4400AF] text-white font-medium text-sm rounded-lg hover:bg-[#310080] transition-all">
                          Next Step →
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200 shadow-xl p-8 h-full"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6 relative">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-green-400 rounded-full opacity-20 blur-md"></motion.div>
                  <Check className="w-8 h-8 text-green-500 relative z-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Final Review</h2>
                <p className="text-slate-600 mb-8">Please review your setup details before proceeding to payment.</p>

                <div className="space-y-6">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Business Profile</h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Name</p>
                        <p className="text-sm font-semibold text-slate-800">{formData.fullName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Business</p>
                        <p className="text-sm font-semibold text-slate-800">{formData.businessName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Email</p>
                        <p className="text-sm font-semibold text-slate-800 truncate">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Phone</p>
                        <p className="text-sm font-semibold text-slate-800">{formData.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Assets & Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Logo Uploaded</span>
                        {formData.logoUrl ? <Check className="w-4 h-4 text-green-500" /> : <span className="text-sm text-slate-400">No</span>}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Documents Uploaded</span>
                        {formData.formRequirementsDocUrl ? <Check className="w-4 h-4 text-green-500" /> : <span className="text-sm text-slate-400">No</span>}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Brand Color</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono">{formData.brandColor}</span>
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: formData.brandColor }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <button type="button" onClick={() => setCurrentStep(1)} className="text-sm font-semibold text-[#4400AF] hover:underline">
                    ← Edit Details
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl border border-purple-100 shadow-2xl shadow-purple-900/10 p-6 sm:p-8 relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-4 mb-8 flex-grow">
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
                    {(formData.domainDetails || formData.hasDomain === "No") && <Check className="w-4 h-4 text-green-500" />}
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Payment Gateway Add-on</p>
                      <p className="text-xs text-slate-500 mt-0.5">{formData.paymentGatewayRequested === "Yes" ? "Included" : "Skipped"}</p>
                    </div>
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-6 mt-auto">
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

                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1"><Lock className="w-3 h-3" /> 256-bit SSL</div>
                  <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure Payment via Razorpay</div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

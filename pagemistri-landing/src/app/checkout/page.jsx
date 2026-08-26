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
  countryCode: z.string().default("+91"),
  phone: z.string().regex(/^[0-9]{7,12}$/, "Enter a valid phone number"),
  businessAddress: z.string().min(5, "Address is required"),
  
  socialInstagram: z.string().optional(),
  socialFacebook: z.string().optional(),
  socialLinkedIn: z.string().optional(),
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
      countryCode: "+91",
      phone: "",
      businessAddress: "",
      socialInstagram: "",
      socialFacebook: "",
      socialLinkedIn: "",
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
      phone: (formData.countryCode || "+91") + " " + (formData.phone || ""),
      email: formData.email || "",
      business_address: formData.businessAddress || "",
      domain_details: formData.domainDetails || "",
      social_links: [
        formData.socialInstagram ? `IG: ${formData.socialInstagram}` : "",
        formData.socialFacebook ? `FB: ${formData.socialFacebook}` : "",
        formData.socialLinkedIn ? `LI: ${formData.socialLinkedIn}` : ""
      ].filter(Boolean).join(" | "),
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
          
          <div className="relative w-full max-w-3xl mx-auto mb-8 px-4">
            {/* Horizontal Background Line (Centering Fix) */}
            <div className="absolute top-[18px] left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
            
            {/* Active Filled Progress Line */}
            <div 
              className="absolute top-[18px] left-8 -translate-y-1/2 h-0.5 bg-[#4400AF] transition-all duration-300 z-0"
              style={{ width: `calc(${((currentStep - 1) / 4) * 100}% - 4rem)` }}
            />

            {/* Stepper Circles & Labels Container */}
            <div className="relative z-10 flex justify-between items-center w-full">
              {STEPS.map((step, index) => {
                const isCompleted = currentStep > index + 1;
                const isActive = currentStep === index + 1;

                return (
                  <div key={step.num} className="flex flex-col items-center">
                    {/* Centered Circle */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-xs transition-all bg-white border-2 ${
                        isCompleted
                          ? "border-emerald-500 text-emerald-500"
                          : isActive
                          ? "border-[#4400AF] text-[#4400AF] shadow-md ring-4 ring-[#4400AF]/10"
                          : "border-slate-200 text-slate-400"
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4 text-emerald-500"/> : index + 1}
                    </div>

                    {/* Label below circle */}
                    <span
                      className={`mt-2 text-[10px] sm:text-xs font-medium ${
                        isActive ? "text-[#4400AF] font-bold" : isCompleted ? "text-slate-900" : "text-slate-400"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {currentStep < 5 ? (
          <div className="flex justify-center w-full">
            <div className="w-full max-w-3xl mx-auto min-w-[320px] md:min-w-[650px]">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-6 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={currentStep} variants={formVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="w-full">
                    <form className="flex flex-col relative" onSubmit={handleNext}>
                      
                      {currentStep === 1 && (
                        <div className="w-full block">
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
                                  <span className="text-sm font-semibold text-slate-700">I have one</span>
                                </label>
                                <label className={`flex-1 flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.hasDomain === "No" ? "border-[#4400AF] bg-[#4400AF]/5" : "border-slate-100 hover:border-slate-200"}`}>
                                  <input type="radio" value="No" {...register("hasDomain")} className="accent-[#4400AF] w-4 h-4" />
                                  <span className="text-sm font-semibold text-slate-700">I don't have one</span>
                                </label>
                              </div>
                              <input type="text" {...register("domainDetails")} className={getInputClass("domainDetails")} placeholder={formData.hasDomain === "No" ? "Enter preferred domain name, e.g., mybusiness.com" : "e.g., mybusiness.com"} />
                              {renderError("domainDetails")}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number *</label>
                                <div className={`flex rounded-xl overflow-hidden transition-all ${errors.phone ? 'border-2 border-red-500 bg-red-50/10' : 'border border-slate-200 bg-slate-50/50 focus-within:border-[#4400AF] focus-within:ring-2 focus-within:ring-[#4400AF]/20'}`}>
                                  <select
                                    {...register("countryCode")}
                                    className="bg-transparent text-slate-700 text-sm px-3 py-3.5 border-r border-slate-200 focus:outline-none cursor-pointer hover:bg-slate-100"
                                  >
                                    <option value="+91">🇮🇳 +91</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+44">🇬🇧 +44</option>
                                    <option value="+971">🇦🇪 +971</option>
                                    <option value="+61">🇦🇺 +61</option>
                                  </select>
                                  <input type="tel" {...register("phone")} className="w-full px-4 py-3.5 bg-transparent focus:outline-none" placeholder="9876543210" />
                                </div>
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
                        <div className="w-full block">
                          <h2 className="text-2xl font-bold mb-4 text-slate-900">Brand Identity</h2>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-semibold text-slate-700 mb-1">Logo Link *</label>
                              <p className="text-xs text-slate-500 mb-2">Provide a URL to your logo (e.g., Google Drive link, Figma link, or direct image URL).</p>
                              <input type="url" {...register("logoUrl")} className={getInputClass("logoUrl")} placeholder="https://link-to-your-logo.com" />
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
                            
                            <div className="space-y-3">
                              <label className="block text-sm font-semibold text-slate-700">Social Links (Optional)</label>
                              <div className="grid grid-cols-1 gap-3">
                                <input type="url" {...register("socialInstagram")} className={getInputClass("socialInstagram")} placeholder="https://instagram.com/yourhandle" />
                                <input type="url" {...register("socialFacebook")} className={getInputClass("socialFacebook")} placeholder="https://facebook.com/yourpage" />
                                <input type="url" {...register("socialLinkedIn")} className={getInputClass("socialLinkedIn")} placeholder="https://linkedin.com/company/yourcompany" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="w-full block">
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
                        <div className="w-full block">
                          <h2 className="text-2xl font-bold mb-4 text-slate-900">Assets & Integrations</h2>
                          <div className="space-y-4">
                            <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
                              <label className="block text-sm font-semibold text-slate-800 mb-1">Form Requirements Document Link *</label>
                              <p className="text-xs text-slate-500 mb-4">Paste a link to the PDF or DOCX listing required fields for your site's contact form.</p>
                              <input type="url" {...register("formRequirementsDocUrl")} className={getInputClass("formRequirementsDocUrl")} placeholder="https://docs.google.com/document/d/..." />
                              {renderError("formRequirementsDocUrl")}
                              
                              <div className="mt-8 pt-6 border-t border-slate-100">
                                <label className="block text-sm font-semibold text-slate-800 mb-1">Additional Media & Documents Link (Optional)</label>
                                <p className="text-xs text-slate-500 mb-4">Provide a link to a folder containing images or extra files.</p>
                                <input type="url" {...register("mediaFilesUrl")} className={getInputClass("mediaFilesUrl")} placeholder="https://drive.google.com/drive/folders/..." />
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
                        <p className="text-sm font-semibold text-slate-800">{formData.countryCode} {formData.phone}</p>
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

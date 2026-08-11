"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Award, ShieldCheck, CheckCircle2, BarChart3, Zap, Search, FileText, Layers, Check, Loader2, MapPin, Star, User, Mail, Phone, AlertCircle, Send, Sparkles, Lock, Quote } from 'lucide-react';

export default function BusinessVisibilitySurvey() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [showErrorToast, setShowErrorToast] = useState(false);
  
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    city: '',
    yearsInBusiness: '',
    employees: '',
    monthlyEnquiries: '',
    activePlatforms: [],
    customerSource: '',
    leadImportance: '',
    paidAds: '',
    hasWebsite: '',
    websiteUse: [],
    websiteSatisfaction: '',
    noWebsiteReason: '',
    enquiryProcess: [],
    responseSpeed: '',
    marketingChallenge: '',
    biggestChallenge: [],
    improvements: [],
    onlinePresenceRating: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    additionalFeedback: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const toggleArrayData = (field, value) => {
    setFormData(prev => {
      const array = prev[field] || [];
      if (array.includes(value)) {
        return { ...prev, [field]: array.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...array, value] };
      }
    });
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const triggerError = (newErrors) => {
    setErrors(newErrors);
    setShowErrorToast(true);
    setTimeout(() => setShowErrorToast(false), 3000);
    const firstErrorField = Object.keys(newErrors)[0];
    setTimeout(() => {
      document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.businessName) newErrors.businessName = "Business name is required";
      if (!formData.businessType) newErrors.businessType = "Please select your business type";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.yearsInBusiness) newErrors.yearsInBusiness = "Please select how long you've been in business";
      if (!formData.employees) newErrors.employees = "Please select employee count";
      if (!formData.monthlyEnquiries) newErrors.monthlyEnquiries = "Please select monthly enquiries";
    }
    if (step === 2) {
      if (formData.activePlatforms.length === 0) newErrors.activePlatforms = "Please select at least one platform";
      if (!formData.customerSource) newErrors.customerSource = "Please select your primary customer source";
      if (!formData.leadImportance) newErrors.leadImportance = "Please select the importance of leads";
      if (!formData.paidAds) newErrors.paidAds = "Please select your paid advertising status";
      if (!formData.hasWebsite) newErrors.hasWebsite = "Please select if you have a website";
      
      if (formData.hasWebsite === 'Yes') {
        if (formData.websiteUse.length === 0) newErrors.websiteUse = "Please select how you use your website";
        if (!formData.websiteSatisfaction) newErrors.websiteSatisfaction = "Please select your website satisfaction";
      }
      if (formData.hasWebsite === 'No') {
        if (!formData.noWebsiteReason) newErrors.noWebsiteReason = "Please select why you don't have a website";
      }
      
      if (formData.enquiryProcess.length === 0) newErrors.enquiryProcess = "Please select your enquiry process";
      if (!formData.responseSpeed) newErrors.responseSpeed = "Please select your average response speed";
    }
    if (step === 3) {
      if (formData.biggestChallenge.length === 0) newErrors.biggestChallenge = "Please select your biggest challenge";
      if (formData.improvements.length === 0) newErrors.improvements = "Please select what you'd like to improve";
      if (!formData.onlinePresenceRating) newErrors.onlinePresenceRating = "Please rate your online presence";
    }
    if (step === 4) {
      if (!formData.fullName) newErrors.fullName = "Full name is required";
      if (!formData.email) {
        newErrors.email = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = "Phone number is required";
      } else if (formData.phoneNumber.replace(/\D/g, '').length < 10) {
        newErrors.phoneNumber = "Please enter a valid phone number (min 10 digits)";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      triggerError(newErrors);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(4)) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://pagemistri.in/api/submit-survey.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setIsSuccess(true);
      } else {
        setShowErrorToast(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setShowErrorToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderProgressBar = () => {
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
          <span>Step {currentStep} of 3</span>
          <span>{currentStep === 1 ? "Business Identity" : currentStep === 2 ? "Online Reach" : "Contact & Goals"}</span>
        </div>
        <div className="w-full bg-purple-100 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${currentStep === 1 ? '33.33%' : currentStep === 2 ? '66.66%' : '100%'}` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 relative overflow-x-hidden w-full font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {showErrorToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3.5 bg-red-50 border border-red-200 text-red-800 rounded-2xl shadow-xl flex items-center gap-3 font-semibold text-sm animate-bounce"
          >
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            Please complete all required fields before proceeding.
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Mesh & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/80 via-white dark:via-slate-950 to-purple-50/40 -z-10" />
      <div 
        className="absolute inset-0 opacity-[0.03] -z-10" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b21a8' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* 1. TOP ANNOUNCEMENT BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="relative inline-flex items-center justify-center bg-purple-50/80 backdrop-blur-md text-purple-700 border border-purple-300/50 text-xs sm:text-sm font-semibold px-5 py-2 rounded-full uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-[pulse_3s_ease-in-out_infinite]">
              PAGEMISTRI RESEARCH INITIATIVE • 2026
            </span>
          </motion.div>

          {/* 2. MAIN HEADLINE & SUBHEADLINE */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight max-w-4xl mx-auto mb-8 text-center"
          >
            Share Your Business Experience. Receive Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-500 drop-shadow-sm dark:shadow-none filter">Personalised Visibility Report</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 text-center leading-relaxed"
          >
            We're inviting small business owners across India to share how they attract customers, build their online presence, and grow their business. Your responses will contribute to our Business Visibility Survey 2026, and you'll receive a FREE personalised Business Visibility Report with practical recommendations for your business.
          </motion.p>

          {/* 3. ACTION BUTTONS (CTAs) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
          >
            <button
              onClick={() => {
                const element = document.getElementById('survey-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg dark:shadow-none shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:-translate-y-0.5 cursor-pointer text-base sm:text-lg w-full sm:w-auto overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Get My Visibility Report
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <button
              className="group relative text-gray-700 hover:text-purple-700 font-semibold px-6 py-4 rounded-2xl transition-colors duration-300 text-base sm:text-lg cursor-pointer w-full sm:w-auto"
            >
              Why Should I Participate?
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-[calc(100%-3rem)] rounded-full opacity-0 group-hover:opacity-100"></span>
            </button>
          </motion.div>

          {/* 4. TRUST BADGES / HIGHLIGHT STRIP */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500 font-medium mt-16 pt-8 border-t border-gray-200/60 w-full max-w-3xl"
          >
            <div className="flex items-center gap-2 hover:scale-105 hover:text-purple-600 transition-all cursor-default">
              <Clock className="w-4 h-4 text-purple-500" />
              <span>Less than 2 minutes</span>
            </div>
            <span className="hidden sm:inline-block text-gray-300">•</span>
            <div className="flex items-center gap-2 hover:scale-105 hover:text-purple-600 transition-all cursor-default">
              <Award className="w-4 h-4 text-purple-500" />
              <span>FREE Business Visibility Report</span>
            </div>
            <span className="hidden sm:inline-block text-gray-300">•</span>
            <div className="flex items-center gap-2 hover:scale-105 hover:text-purple-600 transition-all cursor-default">
              <ShieldCheck className="w-4 h-4 text-purple-500" />
              <span>Your responses remain confidential</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-slate-900 w-full relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-3">
            What You'll Receive
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Complete the survey to receive a personalised Business Visibility Report with insights and recommendations tailored to your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-purple-50/60 dark:from-slate-900 via-white dark:via-slate-950 to-purple-50/30 border border-purple-100 dark:border-purple-900/50 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm dark:shadow-none relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Visibility Score</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                Get a simple score that reflects your business's current online visibility.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-50/60 dark:from-slate-900 via-white dark:via-slate-950 to-purple-50/30 border border-purple-100 dark:border-purple-900/50 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm dark:shadow-none relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Personalised Recommendations</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                Get tailored recommendations to improve your online visibility and business growth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-50/60 dark:from-slate-900 via-white dark:via-slate-950 to-purple-50/30 border border-purple-100 dark:border-purple-900/50 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm dark:shadow-none relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Visibility Report</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                A report highlighting your responses, key insights, and opportunities for improvement.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 font-medium text-center mt-10 tracking-wide">
            Every Business Visibility Report is personalised using your survey responses - no two reports are the same.
          </p>
        </div>
      </section>

      {/* Why Your Experience Matters Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white via-purple-50/20 to-white w-full overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-12">
          Why Your Experience Matters
        </h2>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - FEATURED HIGHLIGHT CARD */}
          <div className="col-span-12 lg:col-span-6 bg-gradient-to-br from-purple-50 via-purple-100/40 to-white border border-purple-200/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg dark:shadow-none shadow-purple-100/50 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-purple-300">
            {/* Background Glow Orb */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/30 blur-2xl rounded-full pointer-events-none"></div>
            
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 font-normal relative z-10">
              <strong>Every business grows differently.</strong> Some rely on referrals, others on social media, Google Search, paid advertising, or years of trust within their community.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal relative z-10">
              Yet much of the advice available online assumes every business should follow the same strategy.
            </p>
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed mb-6 font-semibold text-purple-900 bg-purple-100/60 p-4 rounded-xl border-l-4 border-purple-600 relative z-10">
              That's why we're conducting the Business Visibility Survey 2026 - to learn directly from business owners instead of making assumptions.
            </p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium relative z-10">
              Your experience helps us build a clearer understanding of how small businesses build visibility and grow online.
            </p>
          </div>

          {/* RIGHT SIDE - LIST & CTA */}
          <div className="col-span-12 lg:col-span-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 sm:mb-8">
              Every response helps us:
            </h3>

            <div className="flex flex-col">
              {/* Item 1 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white dark:bg-slate-900 hover:shadow-md dark:shadow-none hover:shadow-purple-100 border border-transparent hover:border-purple-100 dark:border-purple-900/50 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm dark:shadow-none">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Understand how businesses attract customers
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white dark:bg-slate-900 hover:shadow-md dark:shadow-none hover:shadow-purple-100 border border-transparent hover:border-purple-100 dark:border-purple-900/50 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm dark:shadow-none">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Identify common visibility challenges
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white dark:bg-slate-900 hover:shadow-md dark:shadow-none hover:shadow-purple-100 border border-transparent hover:border-purple-100 dark:border-purple-900/50 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm dark:shadow-none">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Publish meaningful research and insights
                </span>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white dark:bg-slate-900 hover:shadow-md dark:shadow-none hover:shadow-purple-100 border border-transparent hover:border-purple-100 dark:border-purple-900/50 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm dark:shadow-none">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Develop practical resources for small businesses
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('survey-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg dark:shadow-none shadow-purple-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-base"
            >
              Get My Visibility Report
            </button>
          </div>
          
        </div>
      </section>

      {/* Interactive Survey Form Section */}
      <section id="survey-form" className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-purple-200/20 blur-3xl pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-purple-100/80 shadow-2xl shadow-purple-950/5 rounded-3xl p-6 sm:p-10 min-h-[500px] flex flex-col relative overflow-hidden">
            
            {!isSuccess ? (
              <>
                <div className="text-center mb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-950 text-center mb-2">Business Visibility Survey 2026</h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 text-center max-w-xl mx-auto mb-6 leading-relaxed">
                    Share your experience in this 2-minute survey and receive a personalised Business Visibility Report with insights and recommendations tailored to your business.
                  </p>
                </div>
                
                {/* 4-STEP PROGRESS INDICATOR */}
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4].map(step => (
                      <div 
                        key={step} 
                        className={`rounded-full h-2.5 transition-all duration-500 ${currentStep >= step ? 'w-8 bg-purple-600' : 'w-2.5 bg-gray-200'}`}
                      />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-purple-700 uppercase tracking-wider text-center mt-2">
                    Step {currentStep} of 4: {
                      currentStep === 1 ? "Tell Us About Your Business" :
                      currentStep === 2 ? "Online Reach" :
                      currentStep === 3 ? "Your Growth Goals" : "Contact Details"
                    }
                  </div>
                </div>

                <div className="flex-1 relative">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-0"
                      >
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">TELL US ABOUT YOUR BUSINESS</span>

                        {/* Field 1: Name */}
                        <div id="businessName" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Name of your business <span className="text-purple-600">*</span></label>
                          <input 
                            type="text" 
                            className={`w-full px-4 py-3 rounded-xl border transition-all text-sm outline-none shadow-sm dark:shadow-none focus:scale-[1.01] ${errors.businessName ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                            placeholder="Enter name"
                            value={formData.businessName}
                            onChange={(e) => updateFormData('businessName', e.target.value)}
                          />
                          {errors.businessName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.businessName}</p>}
                        </div>

                        {/* Field 2: Business Type Grid */}
                        <div id="businessType" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">What type of business do you own? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              'Coach / Consultant', 'Freelancer', 'Real Estate', 'Healthcare / Clinic', 
                              'Salon / Spa', 'Gym / Fitness', 'Restaurant / Café', 'Retail Store', 
                              'Home-Based Business', 'Agency', 'Education / Training', 'E-commerce', 
                              'Manufacturing', 'Other'
                            ].map((type) => (
                              <button
                                key={type}
                                onClick={() => updateFormData('businessType', type)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium ${
                                  formData.businessType === type 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 shadow-sm dark:shadow-none font-semibold' 
                                    : errors.businessType
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {type}
                                {formData.businessType === type && <Check className="w-4 h-4 text-purple-600" />}
                              </button>
                            ))}
                          </div>
                          {errors.businessType && <p className="text-xs text-red-500 mt-2 font-medium">{errors.businessType}</p>}
                        </div>

                        {/* Field 3: City */}
                        <div id="city" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Which city do you operate from? <span className="text-purple-600">*</span></label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input 
                              type="text" 
                              className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all text-sm outline-none shadow-sm dark:shadow-none focus:scale-[1.01] ${errors.city ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                              placeholder="Location"
                              value={formData.city}
                              onChange={(e) => updateFormData('city', e.target.value)}
                            />
                          </div>
                          {errors.city && <p className="text-xs text-red-500 mt-1 font-medium">{errors.city}</p>}
                        </div>

                        {/* Field 4: Years in Business */}
                        <div id="yearsInBusiness" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">How long have you been running your business? <span className="text-purple-600">*</span></label>
                          <select 
                            className={`w-full px-4 py-3 rounded-xl border transition-all text-sm outline-none bg-white dark:bg-slate-900 shadow-sm dark:shadow-none cursor-pointer appearance-none focus:scale-[1.01] ${errors.yearsInBusiness ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                            value={formData.yearsInBusiness}
                            onChange={(e) => updateFormData('yearsInBusiness', e.target.value)}
                          >
                            <option value="">Enter select</option>
                            <option value="Less than 1 year">Less than 1 year</option>
                            <option value="1 - 3 years">1 - 3 years</option>
                            <option value="3 - 5 years">3 - 5 years</option>
                            <option value="5+ years">5+ years</option>
                          </select>
                          {errors.yearsInBusiness && <p className="text-xs text-red-500 mt-1 font-medium">{errors.yearsInBusiness}</p>}
                        </div>

                        {/* Field 5: Employees */}
                        <div id="employees" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">How many people currently work in your business? <span className="text-purple-600">*</span></label>
                          <select 
                            className={`w-full px-4 py-3 rounded-xl border transition-all text-sm outline-none bg-white dark:bg-slate-900 shadow-sm dark:shadow-none cursor-pointer appearance-none focus:scale-[1.01] ${errors.employees ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                            value={formData.employees}
                            onChange={(e) => updateFormData('employees', e.target.value)}
                          >
                            <option value="">Enter select</option>
                            <option value="Just me (1)">Just me (1)</option>
                            <option value="2 - 5 employees">2 - 5 employees</option>
                            <option value="6 - 10 employees">6 - 10 employees</option>
                            <option value="11 - 25 employees">11 - 25 employees</option>
                            <option value="25+ employees">25+ employees</option>
                          </select>
                          {errors.employees && <p className="text-xs text-red-500 mt-1 font-medium">{errors.employees}</p>}
                        </div>

                        {/* Field 6: Monthly Enquiries */}
                        <div id="monthlyEnquiries" className="mb-8">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Approximately how many enquiries does your business receive every month? <span className="text-purple-600">*</span></label>
                          <select 
                            className={`w-full px-4 py-3 rounded-xl border transition-all text-sm outline-none bg-white dark:bg-slate-900 shadow-sm dark:shadow-none cursor-pointer appearance-none focus:scale-[1.01] ${errors.monthlyEnquiries ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                            value={formData.monthlyEnquiries}
                            onChange={(e) => updateFormData('monthlyEnquiries', e.target.value)}
                          >
                            <option value="">Enter select</option>
                            <option value="0 - 10 enquiries">0 - 10 enquiries</option>
                            <option value="10 - 50 enquiries">10 - 50 enquiries</option>
                            <option value="50 - 100 enquiries">50 - 100 enquiries</option>
                            <option value="100+ enquiries">100+ enquiries</option>
                          </select>
                          {errors.monthlyEnquiries && <p className="text-xs text-red-500 mt-1 font-medium">{errors.monthlyEnquiries}</p>}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-0"
                      >
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">YOUR ONLINE PRESENCE AND CHALLENGES</span>

                        {/* Field 1: Active Platforms */}
                        <div id="activePlatforms" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Which platforms do you actively use to market your business? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {['Instagram / Facebook / LinkedIn', 'WhatsApp', 'Google Business Profile', 'Website / Online Referrals', 'Marketplace (Justdial, IndiaMART etc.)', 'YouTube', 'Other'].map((platform) => (
                              <button
                                key={platform}
                                onClick={() => toggleArrayData('activePlatforms', platform)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.activePlatforms.includes(platform) 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                    : errors.activePlatforms
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {platform}
                                {formData.activePlatforms.includes(platform) && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                          {errors.activePlatforms && <p className="text-xs text-red-500 mt-2 font-medium">{errors.activePlatforms}</p>}
                        </div>

                        {/* Field 2: Customer Source */}
                        <div id="customerSource" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Where do most of your customers come from today? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {['Instagram / Facebook / LinkedIn', 'WhatsApp', 'Google Business Profile', 'Website / Online Referrals', 'Marketplace (Justdial, IndiaMART etc.)', 'YouTube', 'Other'].map((source) => (
                              <button
                                key={source}
                                onClick={() => updateFormData('customerSource', source)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.customerSource === source 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                    : errors.customerSource
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {source}
                                {formData.customerSource === source && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                          {errors.customerSource && <p className="text-xs text-red-500 mt-2 font-medium">{errors.customerSource}</p>}
                        </div>

                        {/* Field 3: Lead Importance */}
                        <div id="leadImportance" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">How important are customer enquiries or leads to your business? <span className="text-purple-600">*</span></label>
                          <div className="space-y-2">
                            {['Extremely important', 'Important', 'Somewhat important', 'Not very important', 'Not applicable to my business'].map((importance) => (
                              <button
                                key={importance}
                                onClick={() => updateFormData('leadImportance', importance)}
                                className={`w-full p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.leadImportance === importance 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                    : errors.leadImportance
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {importance}
                                {formData.leadImportance === importance && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                          {errors.leadImportance && <p className="text-xs text-red-500 mt-2 font-medium">{errors.leadImportance}</p>}
                        </div>

                        {/* Field 4: Paid Ads */}
                        <div id="paidAds" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Do you currently invest in paid advertising for your business? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['Yes, regularly', 'Occasionally', 'I have tried it before', 'Never'].map((adStatus) => (
                              <button
                                key={adStatus}
                                onClick={() => updateFormData('paidAds', adStatus)}
                                className={`p-2 sm:p-3 rounded-xl border text-center cursor-pointer transition-all text-xs sm:text-sm font-medium min-h-[48px] flex items-center justify-center ${
                                  formData.paidAds === adStatus 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                    : errors.paidAds
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {adStatus}
                              </button>
                            ))}
                          </div>
                          {errors.paidAds && <p className="text-xs text-red-500 mt-2 font-medium">{errors.paidAds}</p>}
                        </div>

                        {/* Field 5: Website */}
                        <div id="hasWebsite" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Do you currently have a business website? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-2 gap-4">
                            {['Yes', 'No'].map((hasWeb) => (
                              <button
                                key={hasWeb}
                                onClick={() => updateFormData('hasWebsite', hasWeb)}
                                className={`p-4 rounded-xl border text-center cursor-pointer transition-all text-sm font-semibold min-h-[48px] ${
                                  formData.hasWebsite === hasWeb 
                                    ? 'border-purple-600 bg-purple-600 text-white shadow-md dark:shadow-none' 
                                    : errors.hasWebsite
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {hasWeb}
                              </button>
                            ))}
                          </div>
                          {errors.hasWebsite && <p className="text-xs text-red-500 mt-2 font-medium">{errors.hasWebsite}</p>}
                        </div>

                        {/* Field 5 Conditional Logic */}
                        <AnimatePresence>
                          {formData.hasWebsite === 'Yes' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden mb-6 pl-4 border-l-2 border-purple-200 space-y-6"
                            >
                              <div id="websiteUse">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">What do you mainly use your website for?</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {['Business information', 'Lead generation', 'Appointment booking', 'Selling products', 'Portfolio', 'Accepting payments', 'Other'].map((use) => (
                                    <button
                                      key={use}
                                      onClick={() => toggleArrayData('websiteUse', use)}
                                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                        formData.websiteUse.includes(use) 
                                          ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                          : errors.websiteUse
                                            ? 'border-red-500 bg-red-50/30 text-red-800'
                                            : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                      }`}
                                    >
                                      {use}
                                      {formData.websiteUse.includes(use) && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                                    </button>
                                  ))}
                                </div>
                                {errors.websiteUse && <p className="text-xs text-red-500 mt-2 font-medium">{errors.websiteUse}</p>}
                              </div>
                              <div id="websiteSatisfaction">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Are you satisfied with your current website?</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {['Very satisfied', 'Somewhat satisfied', 'Needs improvement', 'Planning to redesign'].map((sat) => (
                                    <button
                                      key={sat}
                                      onClick={() => updateFormData('websiteSatisfaction', sat)}
                                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                        formData.websiteSatisfaction === sat 
                                          ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                          : errors.websiteSatisfaction
                                            ? 'border-red-500 bg-red-50/30 text-red-800'
                                            : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                      }`}
                                    >
                                      {sat}
                                      {formData.websiteSatisfaction === sat && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                                    </button>
                                  ))}
                                </div>
                                {errors.websiteSatisfaction && <p className="text-xs text-red-500 mt-2 font-medium">{errors.websiteSatisfaction}</p>}
                              </div>
                            </motion.div>
                          )}
                          {formData.hasWebsite === 'No' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden mb-6 pl-4 border-l-2 border-purple-200"
                            >
                              <div id="noWebsiteReason">
                                <label className="block text-sm font-semibold text-gray-700 mb-3">What is stopping you from creating a website?</label>
                                <div className="space-y-2">
                                  {['Too expensive', 'Not sure where to start', 'No technical knowledge', "Don't have time", 'Never felt the need', 'Already planning one', 'Other'].map((reason) => (
                                    <button
                                      key={reason}
                                      onClick={() => updateFormData('noWebsiteReason', reason)}
                                      className={`w-full p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                        formData.noWebsiteReason === reason 
                                          ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                          : errors.noWebsiteReason
                                            ? 'border-red-500 bg-red-50/30 text-red-800'
                                            : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                      }`}
                                    >
                                      {reason}
                                      {formData.noWebsiteReason === reason && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                                    </button>
                                  ))}
                                </div>
                                {errors.noWebsiteReason && <p className="text-xs text-red-500 mt-2 font-medium">{errors.noWebsiteReason}</p>}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Field 6: Enquiry Process */}
                        <div id="enquiryProcess" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">What happens after someone enquires about your business? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {['WhatsApp', 'Phone Call', 'Instagram DM', 'Facebook Messenger', 'Manual Spreadsheet', 'CRM Software', "I Don't Track Enquiries", 'Other'].map((process) => (
                              <button
                                key={process}
                                onClick={() => toggleArrayData('enquiryProcess', process)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.enquiryProcess.includes(process) 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                    : errors.enquiryProcess
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {process}
                                {formData.enquiryProcess.includes(process) && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                          {errors.enquiryProcess && <p className="text-xs text-red-500 mt-2 font-medium">{errors.enquiryProcess}</p>}
                        </div>

                        {/* Field 7: Response Speed */}
                        <div id="responseSpeed" className="mb-8">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">On average, how quickly do you respond to a new enquiry? <span className="text-purple-600">*</span></label>
                          <select 
                            className={`w-full px-4 py-3 rounded-xl border transition-all text-sm outline-none bg-white dark:bg-slate-900 shadow-sm dark:shadow-none cursor-pointer appearance-none focus:scale-[1.01] ${errors.responseSpeed ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                            value={formData.responseSpeed}
                            onChange={(e) => updateFormData('responseSpeed', e.target.value)}
                          >
                            <option value="">Select a time...</option>
                            <option value="Within 15-30 minutes">Within 15-30 minutes</option>
                            <option value="Within 1 hour">Within 1 hour</option>
                            <option value="Within the same day">Within the same day</option>
                            <option value="More than a day">More than a day</option>
                            <option value="It depends">It depends</option>
                          </select>
                          {errors.responseSpeed && <p className="text-xs text-red-500 mt-1 font-medium">{errors.responseSpeed}</p>}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-0"
                      >
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">YOUR GROWTH GOALS</span>

                        {/* Field 1: Biggest Challenge */}
                        <div id="biggestChallenge" className="mb-8">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">What is your biggest challenge in growing your business today? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {['Getting more enquiries', 'Building trust', 'Managing leads', 'Getting repeat customers', 'Marketing budget', 'Taking my business online', 'Time management', 'Something else'].map((challenge) => (
                              <button
                                key={challenge}
                                onClick={() => toggleArrayData('biggestChallenge', challenge)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.biggestChallenge.includes(challenge) 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                    : errors.biggestChallenge
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {challenge}
                                {formData.biggestChallenge.includes(challenge) && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                          {errors.biggestChallenge && <p className="text-xs text-red-500 mt-2 font-medium">{errors.biggestChallenge}</p>}
                        </div>

                        {/* Field 2: Improvements */}
                        <div id="improvements" className="mb-8">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">What would you most like to improve over the next 12 months? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {['More enquiries', 'Professional online presence', 'Better lead management', 'More appointments', 'Online sales', 'Brand awareness', 'Customer trust', 'Other'].map((imp) => (
                              <button
                                key={imp}
                                onClick={() => toggleArrayData('improvements', imp)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.improvements.includes(imp) 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm dark:shadow-none' 
                                    : errors.improvements
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                {imp}
                                {formData.improvements.includes(imp) && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                          {errors.improvements && <p className="text-xs text-red-500 mt-2 font-medium">{errors.improvements}</p>}
                        </div>

                        {/* Field 3: Online Presence Rating */}
                        <div id="onlinePresenceRating" className="mb-8">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">How would you rate your business's current online presence? <span className="text-purple-600">*</span></label>
                          <div className="space-y-2.5">
                            {[
                              { val: '1', label: 'Very Poor', stars: 1 },
                              { val: '2', label: 'Poor', stars: 2 },
                              { val: '3', label: 'Average', stars: 3 },
                              { val: '4', label: 'Good', stars: 4 },
                              { val: '5', label: 'Excellent', stars: 5 }
                            ].map((rating) => (
                              <button
                                key={rating.val}
                                onClick={() => updateFormData('onlinePresenceRating', rating.val)}
                                className={`w-full p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center gap-3 text-sm font-medium min-h-[48px] group ${
                                  formData.onlinePresenceRating === rating.val 
                                    ? 'border-purple-600 bg-purple-50/80 shadow-sm dark:shadow-none' 
                                    : errors.onlinePresenceRating
                                      ? 'border-red-500 bg-red-50/30 text-red-800'
                                      : 'border-gray-200 bg-white dark:bg-slate-900 hover:border-purple-300 hover:bg-gray-50 dark:bg-slate-800'
                                }`}
                              >
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map((starIdx) => (
                                    <Star 
                                      key={starIdx} 
                                      className={`w-5 h-5 transition-colors ${
                                        starIdx <= rating.stars 
                                          ? 'fill-amber-400 text-amber-400 group-hover:scale-110' 
                                          : 'text-gray-300'
                                      }`} 
                                    />
                                  ))}
                                </div>
                                <span className={
                                  formData.onlinePresenceRating === rating.val 
                                    ? 'text-purple-950 font-bold' 
                                    : errors.onlinePresenceRating
                                      ? 'text-red-800 font-bold'
                                      : 'text-gray-700'
                                }>
                                  {rating.label}
                                </span>
                              </button>
                            ))}
                          </div>
                          {errors.onlinePresenceRating && <p className="text-xs text-red-500 mt-2 font-medium">{errors.onlinePresenceRating}</p>}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-0"
                      >
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">FINAL STEP</span>

                        <div id="fullName" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-purple-600">*</span></label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input 
                              type="text" 
                              className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all text-sm outline-none shadow-sm dark:shadow-none focus:scale-[1.01] ${errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                              placeholder="Enter name"
                              value={formData.fullName}
                              onChange={(e) => updateFormData('fullName', e.target.value)}
                            />
                          </div>
                          {errors.fullName && <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>}
                        </div>

                        <div id="email" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email <span className="text-purple-600">*</span></label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input 
                              type="email" 
                              className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all text-sm outline-none shadow-sm dark:shadow-none focus:scale-[1.01] ${errors.email ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                              placeholder="Enter email"
                              value={formData.email}
                              onChange={(e) => updateFormData('email', e.target.value)}
                            />
                          </div>
                          {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
                        </div>

                        <div id="phoneNumber" className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone number <span className="text-purple-600">*</span></label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input 
                              type="tel" 
                              className={`w-full pl-11 pr-4 py-3 rounded-xl border transition-all text-sm outline-none shadow-sm dark:shadow-none focus:scale-[1.01] ${errors.phoneNumber ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'}`}
                              placeholder="Your personal number"
                              value={formData.phoneNumber}
                              onChange={(e) => updateFormData('phoneNumber', e.target.value)}
                            />
                          </div>
                          {errors.phoneNumber && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phoneNumber}</p>}
                        </div>

                        <div id="additionalFeedback" className="mb-8">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Is there anything else you'd like to share about your business or your experience with growing online? (Optional)</label>
                          <textarea 
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none shadow-sm dark:shadow-none resize-none focus:scale-[1.01]"
                            placeholder="Enter message"
                            value={formData.additionalFeedback}
                            onChange={(e) => updateFormData('additionalFeedback', e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-slate-800 w-full">
                  {currentStep > 1 ? (
                    <button
                      onClick={handleBack}
                      className="px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all text-sm cursor-pointer flex-1 sm:flex-none text-center"
                      disabled={isSubmitting}
                    >
                      ← Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  {currentStep < 4 ? (
                    <button
                      onClick={handleNext}
                      className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg dark:shadow-none shadow-purple-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm flex items-center justify-center gap-2 flex-1 sm:flex-none"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-10 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg dark:shadow-none shadow-purple-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm flex items-center justify-center gap-2 disabled:opacity-70 flex-1 sm:flex-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing Visibility...
                        </>
                      ) : (
                        "Submit Survey"
                      )}
                    </button>
                  )}
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-purple-600 animate-[bounce_1s_ease-in-out]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Survey Submitted Successfully!</h3>
                <p className="text-sm text-gray-600 dark:text-slate-400 max-w-md mx-auto mb-8">
                  Thank you for contributing to the Business Visibility Survey 2026. Your Personalised Visibility Report will be delivered to your email shortly.
                </p>
                <a
                  href="/"
                  className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg dark:shadow-none shadow-purple-200 transition-all w-full sm:w-auto inline-flex justify-center"
                >
                  Return to PageMistri Home
                </a>
              </motion.div>
            )}
            
          </div>
        </div>
      </section>

      {/* SECTION 1: What Happens Next? */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-4">
            What Happens Next?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed px-4">
            Once you submit your responses, we'll review them and prepare your personalised Business Visibility Report. The report will be delivered to the email address you provide during the survey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-[3.75rem] left-[16.6%] right-[16.6%] border-t-2 border-dashed border-purple-200 z-0"></div>

            {/* Card 1 */}
            <div className="bg-gradient-to-br from-purple-50/50 via-white dark:via-slate-950 to-purple-50/20 border border-purple-100/80 rounded-3xl p-8 text-left transition-all duration-300 shadow-sm dark:shadow-none relative group hover:shadow-xl hover:shadow-purple-100/60 hover:-translate-y-1 hover:border-purple-300 z-10 bg-white dark:bg-slate-900">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 shadow-sm dark:shadow-none group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-950 transition-colors">
                Step 1: Submit Your Survey
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                Complete the Business Visibility Survey 2026 by answering a few questions about your business.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-50/50 via-white dark:via-slate-950 to-purple-50/20 border border-purple-100/80 rounded-3xl p-8 text-left transition-all duration-300 shadow-sm dark:shadow-none relative group hover:shadow-xl hover:shadow-purple-100/60 hover:-translate-y-1 hover:border-purple-300 z-10 bg-white dark:bg-slate-900">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 shadow-sm dark:shadow-none group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-950 transition-colors">
                Step 2: We Prepare Your Report
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                We'll analyse your responses and generate a personalised Business Visibility Report with practical insights and recommendations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-50/50 via-white dark:via-slate-950 to-purple-50/20 border border-purple-100/80 rounded-3xl p-8 text-left transition-all duration-300 shadow-sm dark:shadow-none relative group hover:shadow-xl hover:shadow-purple-100/60 hover:-translate-y-1 hover:border-purple-300 z-10 bg-white dark:bg-slate-900">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 shadow-sm dark:shadow-none group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-950 transition-colors">
                Step 3: Receive Your Report
              </h3>
              <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                Your report will be delivered to your email, ready for you to review and use to improve your online visibility.
              </p>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-gray-500 font-medium text-center mt-12 tracking-wide max-w-2xl mx-auto px-4 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-gray-400 shrink-0" />
            <span>Your responses remain confidential and are used only to prepare your personalised report and generate anonymised research insights.</span>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: Who Is Behind This Initiative? */}
      <section className="w-full max-w-full overflow-hidden py-10 sm:py-20 bg-gradient-to-b from-white via-purple-50/20 to-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto box-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Story Content */}
          <div className="col-span-12 lg:col-span-6">
            <h2 className="break-words hyphens-auto text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug mb-4">
              Who Is Behind This Initiative?
            </h2>
            <p className="break-words whitespace-normal max-w-full text-sm sm:text-base text-gray-700 leading-relaxed mb-4 font-medium">
              Business Visibility Survey 2026 is an independent research initiative by SocialMistry, a company focused on building practical digital solutions for small businesses.
            </p>
            <p className="break-words whitespace-normal max-w-full text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              At SocialMistry, we believe the best products are built by <span className="text-purple-900 font-semibold">listening first</span>. Instead of relying on assumptions, we're learning directly from business owners to understand how they build visibility, attract customers, and grow.
            </p>
            <div className="w-full max-w-full box-border p-4 sm:p-5 rounded-2xl bg-purple-50/60 border-l-4 border-purple-600 my-6 overflow-hidden">
              <p className="break-words whitespace-normal text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                The insights from this survey will help shape future research, educational resources, and digital products that solve real business challenges.
              </p>
            </div>
          </div>

          {/* Right Column - Founder Spotlight Card */}
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full max-w-full box-border bg-gradient-to-br from-purple-50/80 via-white dark:via-slate-950 to-purple-100/40 border border-purple-200/80 rounded-3xl p-4 sm:p-8 shadow-xl overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:shadow-purple-100/80 hover:-translate-y-1 group">
              <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-start gap-4 sm:gap-6 w-full max-w-full">
                
                {/* Founder Photo Avatar */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-4 border-purple-200 shadow-md dark:shadow-none mx-auto sm:mx-0 group-hover:border-purple-400 group-hover:scale-105 transition-all duration-300 relative">
                  <img src="/founder-avatar.jpeg" alt="Bharvi Sharma - Founder, SocialMistry" className="w-full h-full object-cover object-center rounded-full" />
                </div>
                
                {/* Quote & Details */}
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <Quote className="text-purple-300 opacity-40 text-4xl mb-2 w-10 h-10 mx-auto sm:mx-0" />
                    <p className="italic break-words whitespace-normal max-w-full text-sm sm:text-base text-gray-800 leading-relaxed mb-4 group-hover:text-purple-950 transition-colors">
                      "The best way to build meaningful solutions is to first understand the people they're meant to help. That's why your experience matters."
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">Bharvi Sharma</h3>
                    <p className="text-xs sm:text-sm font-semibold text-purple-600 tracking-wide mt-0.5">Founder, SocialMistry</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: A Message */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-purple-50/40 to-purple-100/30 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-white/90 via-purple-50/50 to-white/90 border border-purple-200/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-purple-950/5 relative overflow-hidden transition-all duration-300 hover:border-purple-300">
            {/* Background Glow Orb */}
            <div className="bg-purple-300/20 blur-3xl rounded-full w-64 h-64 absolute -top-10 -right-10 pointer-events-none"></div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-4 relative z-10">
              A message
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal relative z-10">
              Thank you for contributing to the Business Visibility Survey 2026. Your experience helps us better understand the challenges and opportunities faced by small businesses, while helping you gain valuable insights into your own business visibility.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Footer */}
      <footer className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16 border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-purple-900/40">
            
            {/* BRANDING & LOGO */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white font-extrabold flex items-center justify-center text-lg shadow-md dark:shadow-none shadow-purple-900/50">
                  BS
                </div>
                <span className="text-xl font-bold text-white tracking-tight">Business Survey</span>
              </div>
              <p className="text-sm text-gray-400 mt-3 font-normal">
                Copyright 2026 Business Survey. All rights reserved.
              </p>
            </div>

            {/* QUICK NAVIGATION / CTA */}
            <div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm sm:text-base font-semibold text-purple-300 hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group"
              >
                Get My Visibility Report 2026
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* BOTTOM CREDITS STRIP */}
          <div className="text-center text-xs text-gray-500 pt-6 font-medium tracking-wide">
            Built using <span className="font-bold text-purple-400 hover:text-purple-300 transition-colors">PageMistri</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

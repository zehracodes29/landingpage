"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Award, ShieldCheck, CheckCircle2, BarChart3, Zap, Search, FileText, Layers, Check, Loader2, MapPin } from 'lucide-react';

export default function BusinessVisibilitySurvey() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
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
    fullName: '',
    email: '',
    primaryGoal: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.businessName || !formData.businessType || !formData.city || !formData.yearsInBusiness || !formData.employees || !formData.monthlyEnquiries) {
        alert("Please fill in all required fields to proceed.");
        return;
      }
    }
    if (currentStep === 2) {
      if (formData.activePlatforms.length === 0 || !formData.customerSource || !formData.leadImportance || !formData.paidAds || !formData.hasWebsite || formData.enquiryProcess.length === 0 || !formData.responseSpeed) {
        alert("Please answer all questions to proceed.");
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
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
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background Mesh & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/80 via-white to-purple-50/40 -z-10" />
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
            Share Your Business Experience. Receive Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-500 drop-shadow-sm filter">Personalised Visibility Report</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-center leading-relaxed"
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
              className="group relative bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:-translate-y-0.5 cursor-pointer text-base sm:text-lg w-full sm:w-auto overflow-hidden flex items-center justify-center"
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
      <section className="py-12 sm:py-16 bg-white w-full relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-3">
            What You'll Receive
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Complete the survey to receive a personalised Business Visibility Report with insights and recommendations tailored to your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-purple-50/60 via-white to-purple-50/30 border border-purple-100 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Visibility Score</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get a simple score that reflects your business's current online visibility.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-50/60 via-white to-purple-50/30 border border-purple-100 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Personalised Recommendations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get tailored recommendations to improve your online visibility and business growth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-50/60 via-white to-purple-50/30 border border-purple-100 rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl inline-block mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Business Visibility Report</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
          <div className="col-span-12 lg:col-span-6 bg-gradient-to-br from-purple-50 via-purple-100/40 to-white border border-purple-200/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg shadow-purple-100/50 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-purple-300">
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
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-purple-100 border border-transparent hover:border-purple-100 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Understand how businesses attract customers
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-purple-100 border border-transparent hover:border-purple-100 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Identify common visibility challenges
                </span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-purple-100 border border-transparent hover:border-purple-100 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-purple-950 transition-colors">
                  Publish meaningful research and insights
                </span>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-md hover:shadow-purple-100 border border-transparent hover:border-purple-100 group cursor-default mb-3">
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
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
              className="mt-8 inline-flex items-center justify-center w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-base"
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
          
          <div className="max-w-2xl mx-auto bg-white border border-purple-100/80 shadow-2xl shadow-purple-950/5 rounded-3xl p-6 sm:p-10 min-h-[500px] flex flex-col relative overflow-hidden">
            
            {!isSuccess ? (
              <>
                <div className="text-center mb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-950 text-center mb-2">Business Visibility Survey 2026</h2>
                  <p className="text-xs sm:text-sm text-gray-600 text-center max-w-xl mx-auto mb-6 leading-relaxed">
                    Share your experience in this 2-minute survey and receive a personalised Business Visibility Report with insights and recommendations tailored to your business.
                  </p>
                </div>
                
                {/* 4-STEP PROGRESS INDICATOR */}
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4].map(step => (
                      <div 
                        key={step} 
                        className={`rounded-full h-2.5 transition-all duration-500 ${currentStep === step ? 'w-8 bg-purple-600' : currentStep > step ? 'w-8 bg-purple-300' : 'w-2.5 bg-gray-200'}`}
                      />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-purple-700 uppercase tracking-wider text-center mt-2">
                    Step {currentStep} of 4: {
                      currentStep === 1 ? "Tell Us About Your Business" :
                      currentStep === 2 ? "Online Reach" :
                      currentStep === 3 ? "Contact & Goals" : "Final Step"
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
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Name of your business <span className="text-purple-600">*</span></label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none mb-6 shadow-sm focus:scale-[1.01]"
                            placeholder="Enter name"
                            value={formData.businessName}
                            onChange={(e) => updateFormData('businessName', e.target.value)}
                          />
                        </div>

                        {/* Field 2: Business Type Grid */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">What type of business do you own? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
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
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 shadow-sm font-semibold' 
                                    : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                }`}
                              >
                                {type}
                                {formData.businessType === type && <Check className="w-4 h-4 text-purple-600" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Field 3: City */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Which city do you operate from? <span className="text-purple-600">*</span></label>
                          <div className="relative mb-6">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input 
                              type="text" 
                              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none shadow-sm focus:scale-[1.01]"
                              placeholder="Location"
                              value={formData.city}
                              onChange={(e) => updateFormData('city', e.target.value)}
                            />
                          </div>
                        </div>

                        {/* Field 4: Years in Business */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">How long have you been running your business? <span className="text-purple-600">*</span></label>
                          <select 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none mb-6 bg-white shadow-sm cursor-pointer appearance-none focus:scale-[1.01]"
                            value={formData.yearsInBusiness}
                            onChange={(e) => updateFormData('yearsInBusiness', e.target.value)}
                          >
                            <option value="">Enter select</option>
                            <option value="Less than 1 year">Less than 1 year</option>
                            <option value="1 - 3 years">1 - 3 years</option>
                            <option value="3 - 5 years">3 - 5 years</option>
                            <option value="5+ years">5+ years</option>
                          </select>
                        </div>

                        {/* Field 5: Employees */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">How many people currently work in your business? <span className="text-purple-600">*</span></label>
                          <select 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none mb-6 bg-white shadow-sm cursor-pointer appearance-none focus:scale-[1.01]"
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
                        </div>

                        {/* Field 6: Monthly Enquiries */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Approximately how many enquiries does your business receive every month? <span className="text-purple-600">*</span></label>
                          <select 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none mb-8 bg-white shadow-sm cursor-pointer appearance-none focus:scale-[1.01]"
                            value={formData.monthlyEnquiries}
                            onChange={(e) => updateFormData('monthlyEnquiries', e.target.value)}
                          >
                            <option value="">Enter select</option>
                            <option value="0 - 10 enquiries">0 - 10 enquiries</option>
                            <option value="10 - 50 enquiries">10 - 50 enquiries</option>
                            <option value="50 - 100 enquiries">50 - 100 enquiries</option>
                            <option value="100+ enquiries">100+ enquiries</option>
                          </select>
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
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Which platforms do you actively use to market your business? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {['Instagram / Facebook / LinkedIn', 'WhatsApp', 'Google Business Profile', 'Website / Online Referrals', 'Marketplace (Justdial, IndiaMART etc.)', 'YouTube', 'Other'].map((platform) => (
                              <button
                                key={platform}
                                onClick={() => toggleArrayData('activePlatforms', platform)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.activePlatforms.includes(platform) 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm' 
                                    : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                }`}
                              >
                                {platform}
                                {formData.activePlatforms.includes(platform) && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Field 2: Customer Source */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Where do most of your customers come from today? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {['Instagram / Facebook / LinkedIn', 'WhatsApp', 'Google Business Profile', 'Website / Online Referrals', 'Marketplace (Justdial, IndiaMART etc.)', 'YouTube', 'Other'].map((source) => (
                              <button
                                key={source}
                                onClick={() => updateFormData('customerSource', source)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.customerSource === source 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm' 
                                    : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                }`}
                              >
                                {source}
                                {formData.customerSource === source && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Field 3: Lead Importance */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">How important are customer enquiries or leads to your business? <span className="text-purple-600">*</span></label>
                          <div className="space-y-2 mb-6">
                            {['Extremely important', 'Important', 'Somewhat important', 'Not very important', 'Not applicable to my business'].map((importance) => (
                              <button
                                key={importance}
                                onClick={() => updateFormData('leadImportance', importance)}
                                className={`w-full p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.leadImportance === importance 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm' 
                                    : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                }`}
                              >
                                {importance}
                                {formData.leadImportance === importance && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Field 4: Paid Ads */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Do you currently invest in paid advertising for your business? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                            {['Yes, regularly', 'Occasionally', 'I have tried it before', 'Never'].map((adStatus) => (
                              <button
                                key={adStatus}
                                onClick={() => updateFormData('paidAds', adStatus)}
                                className={`p-2 sm:p-3 rounded-xl border text-center cursor-pointer transition-all text-xs sm:text-sm font-medium min-h-[48px] flex items-center justify-center ${
                                  formData.paidAds === adStatus 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm' 
                                    : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                }`}
                              >
                                {adStatus}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Field 5: Website */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Do you currently have a business website? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {['Yes', 'No'].map((hasWeb) => (
                              <button
                                key={hasWeb}
                                onClick={() => updateFormData('hasWebsite', hasWeb)}
                                className={`p-4 rounded-xl border text-center cursor-pointer transition-all text-sm font-semibold min-h-[48px] ${
                                  formData.hasWebsite === hasWeb 
                                    ? 'border-purple-600 bg-purple-600 text-white shadow-md' 
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                }`}
                              >
                                {hasWeb}
                              </button>
                            ))}
                          </div>
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
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">What do you mainly use your website for?</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {['Business information', 'Lead generation', 'Appointment booking', 'Selling products', 'Portfolio', 'Accepting payments', 'Other'].map((use) => (
                                    <button
                                      key={use}
                                      onClick={() => toggleArrayData('websiteUse', use)}
                                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                        formData.websiteUse.includes(use) 
                                          ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm' 
                                          : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                      }`}
                                    >
                                      {use}
                                      {formData.websiteUse.includes(use) && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Are you satisfied with your current website?</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {['Very satisfied', 'Somewhat satisfied', 'Needs improvement', 'Planning to redesign'].map((sat) => (
                                    <button
                                      key={sat}
                                      onClick={() => updateFormData('websiteSatisfaction', sat)}
                                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                        formData.websiteSatisfaction === sat 
                                          ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm' 
                                          : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                      }`}
                                    >
                                      {sat}
                                      {formData.websiteSatisfaction === sat && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                                    </button>
                                  ))}
                                </div>
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
                              <label className="block text-sm font-semibold text-gray-700 mb-3">What is stopping you from creating a website?</label>
                              <div className="space-y-2">
                                {['Too expensive', 'Not sure where to start', 'No technical knowledge', "Don't have time", 'Never felt the need', 'Already planning one', 'Other'].map((reason) => (
                                  <button
                                    key={reason}
                                    onClick={() => updateFormData('noWebsiteReason', reason)}
                                    className={`w-full p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                      formData.noWebsiteReason === reason 
                                        ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm' 
                                        : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                    }`}
                                  >
                                    {reason}
                                    {formData.noWebsiteReason === reason && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Field 6: Enquiry Process */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">What happens after someone enquires about your business? <span className="text-purple-600">*</span></label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {['WhatsApp', 'Phone Call', 'Instagram DM', 'Facebook Messenger', 'Manual Spreadsheet', 'CRM Software', "I Don't Track Enquiries", 'Other'].map((process) => (
                              <button
                                key={process}
                                onClick={() => toggleArrayData('enquiryProcess', process)}
                                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-sm font-medium min-h-[48px] ${
                                  formData.enquiryProcess.includes(process) 
                                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-semibold shadow-sm' 
                                    : 'border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-gray-50'
                                }`}
                              >
                                {process}
                                {formData.enquiryProcess.includes(process) && <Check className="w-4 h-4 text-purple-600 shrink-0" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Field 7: Response Speed */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">On average, how quickly do you respond to a new enquiry? <span className="text-purple-600">*</span></label>
                          <select 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm outline-none mb-8 bg-white shadow-sm cursor-pointer appearance-none focus:scale-[1.01]"
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
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-600 transition-all focus:scale-[1.01]"
                            placeholder="Jane Doe"
                            value={formData.fullName}
                            onChange={(e) => updateFormData('fullName', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                          <p className="text-xs text-gray-500 mb-2">Where should we send your personalised report?</p>
                          <input 
                            type="email" 
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-600 transition-all focus:scale-[1.01]"
                            placeholder="jane@example.com"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Goal for 2026</label>
                          <select 
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-600 transition-all focus:scale-[1.01] appearance-none"
                            value={formData.primaryGoal}
                            onChange={(e) => updateFormData('primaryGoal', e.target.value)}
                          >
                            <option value="">Select a goal...</option>
                            <option value="more_leads">Generate more leads</option>
                            <option value="brand_awareness">Increase brand awareness</option>
                            <option value="better_conversion">Improve conversion rates</option>
                            <option value="expand_market">Expand into new markets</option>
                          </select>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-100 w-full">
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
                      className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm flex items-center justify-center gap-2 flex-1 sm:flex-none"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm flex items-center justify-center gap-2 disabled:opacity-70 flex-1 sm:flex-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Calculating...
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
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">You're All Set!</h3>
                <p className="text-gray-600 text-lg mb-8 max-w-md">
                  Your responses have been saved. Your Visibility Score is being generated and will be sent to your email shortly.
                </p>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-200 transition-all w-full sm:w-auto"
                >
                  Return to Top
                </button>
              </motion.div>
            )}
            
          </div>
        </div>
      </section>
    </div>
  );
}

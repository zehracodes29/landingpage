"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < 5) setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCheckout = () => {
    // Razorpay Integration Placeholder
    alert("Razorpay Checkout SDK Triggered!");
    // You would integrate Razorpay here like:
    // const options = {
    //   key: "YOUR_RAZORPAY_KEY",
    //   amount: 500000, // in paise
    //   currency: "INR",
    //   name: "Pagemistri",
    //   description: "Website Setup",
    //   handler: function (response) { ... }
    // };
    // const rzp = new window.Razorpay(options);
    // rzp.open();
  };

  const steps = [
    { num: 1, title: "Basics" },
    { num: 2, title: "Brand" },
    { num: 3, title: "Offerings" },
    { num: 4, title: "Assets" },
    { num: 5, title: "Payment" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 mt-16 max-w-4xl mx-auto w-full">
        {/* Header & Progress Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {steps.map((s, idx) => (
              <React.Fragment key={s.num}>
                <div className={`flex items-center ${currentStep === s.num ? "text-[#4400AF] font-bold" : currentStep > s.num ? "text-[#4400AF]" : "text-slate-400"}`}>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm mr-2 transition-colors ${
                    currentStep === s.num ? "border-[#4400AF] bg-[#4400AF] text-white" : 
                    currentStep > s.num ? "border-[#4400AF] bg-[#4400AF] text-white" : "border-slate-300"
                  }`}>
                    {currentStep > s.num ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                      s.num
                    )}
                  </div>
                  <span className="whitespace-nowrap">{s.title}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`mx-2 ${currentStep > s.num ? "text-[#4400AF]" : "text-slate-300"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <div className="bg-[#4400AF]/10 text-[#4400AF] border border-[#4400AF]/20 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm whitespace-nowrap self-start md:self-auto flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            Total Setup Cost: ₹5,000 One-Time
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10">
          <form className="space-y-8" onSubmit={currentStep === 5 ? (e) => { e.preventDefault(); handleCheckout(); } : handleNext}>
            {/* Step 1: Business Basics */}
            {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">1. Business Basics</h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Business Name *</label>
                    <input required type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all" placeholder="e.g. Acme Corp" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Existing Domain Details *</label>
                    <div className="flex gap-4 mb-3">
                      <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                        <input type="radio" name="hasDomain" value="Yes" checked={formData.hasDomain === "Yes"} onChange={handleInputChange} className="accent-[#4400AF]" />
                        <span className="text-sm font-medium">I have a domain</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                        <input type="radio" name="hasDomain" value="No" checked={formData.hasDomain === "No"} onChange={handleInputChange} className="accent-[#4400AF]" />
                        <span className="text-sm font-medium">I need a new domain</span>
                      </label>
                    </div>
                    {formData.hasDomain === "Yes" ? (
                      <input required type="text" name="domainDetails" value={formData.domainDetails} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all" placeholder="Enter your domain (e.g. example.com)" />
                    ) : (
                      <input required type="text" name="domainDetails" value={formData.domainDetails} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all" placeholder="Preferred domain name to check availability" />
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Business Address *</label>
                      <input required type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all" placeholder="City, State" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Brand Identity */}
            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">2. Brand Identity</h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Social Media Links & Public Contact Info</label>
                    <textarea name="socialLinks" value={formData.socialLinks} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all min-h-[100px] resize-none" placeholder="Instagram, Facebook, LinkedIn, public email, etc." />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Logo Upload</label>
                    <input type="file" accept=".svg,.png,.jpg,.jpeg" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#4400AF]/10 file:text-[#4400AF] hover:file:bg-[#4400AF]/20" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Preferred Brand Colors</label>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl border border-slate-200">
                      <input type="color" name="brandColors" value={formData.brandColors} onChange={handleInputChange} className="w-12 h-12 rounded cursor-pointer border-0 p-0 shadow-sm" />
                      <input type="text" name="brandColors" value={formData.brandColors} onChange={handleInputChange} className="flex-grow px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all uppercase bg-white font-mono text-slate-700" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">About Your Business</label>
                    <textarea name="aboutBusiness" value={formData.aboutBusiness} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all min-h-[140px] resize-y" placeholder="Describe your business in up to 250 words..." />
                    <p className="text-xs text-slate-500 mt-2 flex items-center justify-between">
                      <span>Provide a brief overview for your website copy.</span>
                      <span className="font-medium bg-slate-100 px-2 py-1 rounded text-slate-600">Max ~250 words</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Offerings & Copy */}
            {currentStep === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">3. Offerings & Copy</h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Products / Services to mention on landing page</label>
                    <textarea required name="productsServices" value={formData.productsServices} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all min-h-[100px] resize-none" placeholder="List your key products or services" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Detailed Description of Services / Products</label>
                    <textarea required name="description" value={formData.description} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all min-h-[140px] resize-y" placeholder="Explain what they do, who they are for, and pricing if applicable..." />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">USP / Key Benefits <span className="text-slate-400 font-normal ml-1">(Optional)</span></label>
                    <textarea name="usp" value={formData.usp} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all min-h-[100px] resize-none" placeholder="Why should customers choose you?" />
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <label className="block text-sm font-semibold text-slate-700 mb-1">Testimonials & Pricing/Package Details <span className="text-slate-400 font-normal ml-1">(Optional)</span></label>
                    <textarea name="testimonials" value={formData.testimonials} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4400AF]/50 focus:border-[#4400AF] transition-all min-h-[100px] mb-4 resize-none bg-white" placeholder="Paste text here or upload a file below" />
                    
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                      <input type="file" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-white file:border-slate-200 file:border file:text-slate-700 hover:file:bg-slate-100 transition-all cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Form Requirements & Assets */}
            {currentStep === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">4. Form Requirements & Assets</h2>
                
                <div className="space-y-6">
                  <div className="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <label className="block text-sm font-semibold text-slate-900 mb-1">Form Content Document</label>
                    <p className="text-xs text-slate-500 mb-4">Upload a file listing the fields you want in your site's contact/lead form.</p>
                    <input type="file" accept=".pdf,.doc,.docx,.txt" className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#4400AF]/10 file:text-[#4400AF] hover:file:bg-[#4400AF]/20 transition-all cursor-pointer bg-white border border-slate-200 rounded-xl p-1" />
                  </div>

                  <div className="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <label className="block text-sm font-semibold text-slate-900 mb-1">Additional Documents</label>
                    <p className="text-xs text-slate-500 mb-4">Any extra content (PDF, DOCX) for context.</p>
                    <input type="file" multiple accept=".pdf,.doc,.docx" className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#4400AF]/10 file:text-[#4400AF] hover:file:bg-[#4400AF]/20 transition-all cursor-pointer bg-white border border-slate-200 rounded-xl p-1" />
                  </div>

                  <div className="border border-slate-200 p-5 rounded-xl bg-slate-50">
                    <label className="block text-sm font-semibold text-slate-900 mb-1">Media Assets</label>
                    <p className="text-xs text-slate-500 mb-4">Upload images, videos, or a ZIP file containing your media.</p>
                    <input type="file" multiple accept="image/*,video/*,.zip" className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#4400AF]/10 file:text-[#4400AF] hover:file:bg-[#4400AF]/20 transition-all cursor-pointer bg-white border border-slate-200 rounded-xl p-1" />
                  </div>

                  <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100 mt-8">
                    <label className="block text-base font-semibold text-slate-900 mb-4">Integrate Payment Gateway for my website lead form?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-3 cursor-pointer bg-white px-5 py-3 rounded-xl border border-slate-200 hover:border-[#4400AF]/30 hover:shadow-sm transition-all">
                        <input type="radio" name="paymentGateway" value="Yes" checked={formData.paymentGateway === "Yes"} onChange={handleInputChange} className="accent-[#4400AF] w-5 h-5" />
                        <span className="text-sm font-semibold text-slate-700">Yes, please integrate</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer bg-white px-5 py-3 rounded-xl border border-slate-200 hover:border-[#4400AF]/30 hover:shadow-sm transition-all">
                        <input type="radio" name="paymentGateway" value="No" checked={formData.paymentGateway === "No"} onChange={handleInputChange} className="accent-[#4400AF] w-5 h-5" />
                        <span className="text-sm font-semibold text-slate-700">No, not needed</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Review & Checkout */}
            {currentStep === 5 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Review & Complete Setup</h2>
                  <p className="text-slate-500 mt-2">You're almost done! Review your details and proceed to payment.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-8 space-y-5">
                  <h3 className="text-lg font-bold border-b border-slate-100 pb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4400AF]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                    Summary
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <span className="text-slate-500 block mb-1 text-xs uppercase tracking-wider font-semibold">Business Name</span>
                      <span className="font-bold text-slate-900 text-base">{formData.businessName || "Not provided"}</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <span className="text-slate-500 block mb-1 text-xs uppercase tracking-wider font-semibold">Domain Status</span>
                      <span className="font-bold text-slate-900 text-base">{formData.hasDomain === "Yes" ? "Existing Domain" : "Needs Domain"}</span>
                      {formData.domainDetails && <span className="block text-slate-600 mt-1 truncate">{formData.domainDetails}</span>}
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <span className="text-slate-500 block mb-1 text-xs uppercase tracking-wider font-semibold">Phone</span>
                      <span className="font-bold text-slate-900 text-base">{formData.phone || "Not provided"}</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <span className="text-slate-500 block mb-1 text-xs uppercase tracking-wider font-semibold">Payment Gateway</span>
                      <span className="font-bold text-slate-900 text-base flex items-center gap-2">
                        {formData.paymentGateway === "Yes" ? (
                           <><span className="w-2 h-2 rounded-full bg-green-500"></span> Requested</>
                        ) : (
                           <><span className="w-2 h-2 rounded-full bg-slate-300"></span> Not requested</>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-[#4400AF]/20 bg-[#4400AF]/5 p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <span className="text-xl font-semibold text-slate-800">Total Setup Cost</span>
                    <span className="text-4xl font-black text-[#4400AF]">₹5,000</span>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 mb-6 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5 flex-shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <p className="text-sm text-slate-600">
                      <strong>Secure & transparent.</strong> No hidden fees. This is a one-time payment for the complete setup of your website as per our standard package.
                    </p>
                  </div>
                  
                  <button type="submit" className="bg-[#4400AF] hover:bg-[#310080] text-white font-bold py-4 px-6 rounded-xl w-full transition-all text-lg shadow-xl shadow-[#4400AF]/25 flex justify-center items-center gap-3 transform hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                    Pay ₹5,000 & Complete Setup
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Payments are securely processed via Razorpay
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className={`flex items-center pt-8 mt-8 border-t border-slate-200 ${currentStep === 1 ? 'justify-end' : 'justify-between'}`}>
              {currentStep > 1 && (
                <button type="button" onClick={handlePrev} className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all border border-transparent hover:border-slate-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
                  Back
                </button>
              )}
              {currentStep < 5 && (
                <button type="submit" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Next Step
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

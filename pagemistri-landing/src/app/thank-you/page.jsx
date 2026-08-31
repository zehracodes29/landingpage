"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("payment_id");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-6 relative">
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 blur-md animate-pulse"></div>
            <CheckCircle className="w-10 h-10 text-green-500 relative z-10" />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h1>
          
          <p className="text-slate-600 mb-6">
            Your project request and payment were received successfully. Our team will review your details and get back to you shortly.
          </p>
          
          {paymentId && (
            <div className="bg-slate-50 rounded-xl p-4 mb-8 border border-slate-100">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Transaction ID</p>
              <p className="text-sm font-mono text-slate-800 break-all">{paymentId}</p>
            </div>
          )}
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center w-full bg-[#4400AF] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#310080] transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
    </div>
  );
}

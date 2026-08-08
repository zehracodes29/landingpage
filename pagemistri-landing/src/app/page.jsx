'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatsIncluded from '../components/EverythingNeeded/EverythingNeeded';
import HowItWorks from '../components/Process/Process';
import BusinessBenefits from '../components/BusinessBenefits';
import LeadForm from '../components/LeadForm';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar/>
      <Hero/>
      <WhatsIncluded/>
      <HowItWorks/>
      <BusinessBenefits/>
      <LeadForm/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </main>
  );
}

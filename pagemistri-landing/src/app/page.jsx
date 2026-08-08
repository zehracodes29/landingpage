'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BusinessBenefits from '@/components/BusinessBenefits';
import LeadForm from '@/components/LeadForm';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BusinessBenefits />
      <LeadForm />
      <Pricing />
      <Footer />
    </main>
  );
}

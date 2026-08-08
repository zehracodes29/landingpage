'use client';

import Navbar from '../src/components/Navbar/Navbar';
import Hero from '../src/components/Hero/Hero';
import BusinessBenefits from '../src/components/BusinessBenefits/BusinessBenefits';
import LeadForm from '../src/components/LeadForm/LeadForm';
import Pricing from '../src/components/Pricing/Pricing';
import Footer from '../src/components/Footer/Footer';

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

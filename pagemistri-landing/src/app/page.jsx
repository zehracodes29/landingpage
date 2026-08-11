'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatsIncluded from '../components/EverythingNeeded/EverythingNeeded';
import DomainCTA from '../components/DomainCTA/DomainCTA';
import HowItWorks from '../components/Process/Process';
import BusinessBenefits from '../components/BusinessBenefits';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer';

export default function Home() {
 return (
 <main className="min-h-screen bg-slate-50 text-slate-900 dark:text-white ">
 <Navbar/>
 <Hero/>
 <WhatsIncluded/>
 <DomainCTA/>
 <HowItWorks/>
 <BusinessBenefits/>
 <Pricing/>
 <FAQ/>
 <Footer/>
 </main>
 );
}

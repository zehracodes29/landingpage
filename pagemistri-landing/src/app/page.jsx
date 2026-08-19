'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';

const WhatsIncluded = dynamic(() => import('../components/EverythingNeeded/EverythingNeeded'), { ssr: false });
const HowItWorks = dynamic(() => import('../components/Process/Process'), { ssr: false });
const BusinessBenefits = dynamic(() => import('../components/BusinessBenefits'), { ssr: false });
const Pricing = dynamic(() => import('../components/Pricing'), { ssr: false });
const WhoIsItFor = dynamic(() => import('../components/WhoIsItFor'), { ssr: false });
const FAQ = dynamic(() => import('../components/FAQ/FAQ'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

export default function Home() {
 return (
 <main className="min-h-screen bg-slate-50 text-slate-900 dark:text-white ">
 <Navbar/>
 <Hero/>
 <WhatsIncluded/>

 <HowItWorks/>
 <BusinessBenefits/>
 <WhoIsItFor/>
 <Pricing/>
 <FAQ/>
 <Footer/>
 </main>
 );
}

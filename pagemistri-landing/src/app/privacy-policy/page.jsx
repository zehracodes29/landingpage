"use client";

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-120px 0px -40% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sections = [
    { id: "1-introduction", label: "1. Introduction" },
    { id: "2-information-we-collect", label: "2. Information We Collect" },
    { id: "3-how-we-use-information", label: "3. How We Use Information" },
    { id: "4-data-storage-security", label: "4. Data Storage & Security" },
    { id: "5-data-sharing-third-parties", label: "5. Data Sharing & Third Parties" },
    { id: "6-your-rights-compliance", label: "6. Your Rights & Compliance" },
    { id: "7-contact-us", label: "7. Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Last Updated: August 2026
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                📋 CONTENTS
              </h2>
              <nav className="flex flex-col space-y-1">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(item.id);
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        // Update URL hash without jumping
                        window.history.pushState(null, '', `#${item.id}`);
                      }
                    }}
                    className={`block px-3 py-1.5 text-sm rounded-lg transition-all ${
                      activeSection === item.id
                        ? "text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-950/40 border-l-2 border-purple-600"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Main Content */}
          <div className="flex-1 space-y-12 max-w-3xl text-slate-600 dark:text-slate-300">
            {/* Intro paragraph */}
            <div className="text-lg leading-relaxed">
              At PageMistri (operated under Socialmistry.com), we are committed to protecting your privacy and ensuring the security of the data you share with us. This Privacy Policy outlines how we collect, use, and safeguard your information across our website setup services and lead capture tools.
            </div>

            <section id="1-introduction" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                1. Introduction
              </h2>
              <p className="leading-relaxed">
                Welcome to PageMistri. We provide end-to-end professional business website creation, lead management dashboards, and custom landing page setups for businesses. This privacy policy explains our data practices regarding the information we collect directly from you ("Account Data") and the lead data collected on your behalf ("Lead Data"). By using PageMistri, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section id="2-information-we-collect" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                2. Information We Collect
              </h2>
              
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-8 mb-4">Account & Business Data</h3>
              <p className="leading-relaxed mb-4">
                When you request a website setup or fill out our visibility assessment form, we collect essential business information required to build your site:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>Contact Information:</strong> Full name, email address, phone number, and business name.</li>
                <li><strong>Business Details:</strong> Business category, services offered, domain preferences, and setup requirements.</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Lead Data</h3>
              <p className="leading-relaxed">
                Through the lead collection forms integrated into your custom business website, you collect data from your prospective clients. <strong>We act strictly as a data processor for your Lead Data.</strong> You retain full ownership and control over this information. We process Lead Data solely to deliver lead notification alerts and populate your lead management dashboard.
              </p>
            </section>

            <section id="3-how-we-use-information" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                3. How We Use Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the collected data for the following primary purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To build, configure, and launch your customized business website within 3–5 working days.</li>
                <li>To communicate project updates, domain setups, and revisions.</li>
                <li>To deliver customer support and maintain system reliability.</li>
              </ul>
            </section>

            <section id="4-data-storage-security" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                4. Data Storage & Security
              </h2>
              <p className="leading-relaxed">
                Security is foundational to PageMistri. All stored data—including business submission records and collected lead details—is hosted in secure cloud infrastructure with encryption both at rest and in transit. We enforce strict access control protocols to ensure only authorized system processes and personnel can interact with your data.
              </p>
            </section>

            <section id="5-data-sharing-third-parties" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                5. Data Sharing & Third Parties
              </h2>
              <p className="leading-relaxed">
                <strong>We do not sell your personal information or your Lead Data to third parties.</strong>
              </p>
            </section>

            <section id="6-your-rights-compliance" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                6. Your Rights & Compliance
              </h2>
              <p className="leading-relaxed mb-4">
                We uphold high data protection standards:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal or business data we hold about you.</li>
                <li><strong>Correction:</strong> Request updates or corrections to any inaccurate business information.</li>
                <li><strong>Deletion:</strong> Request the complete deletion of your account history or stored leads.</li>
              </ul>
            </section>

            <section id="7-contact-us" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-6">
                7. Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:
              </p>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white">PageMistri Privacy Team</p>
                <p className="text-purple-600 dark:text-purple-400 mt-1">
                  <a href="mailto:privacy@pagemistri.in" className="hover:underline">privacy@pagemistri.in</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

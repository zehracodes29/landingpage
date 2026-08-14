"use client";

import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('');
  const isManualScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return; // Skip updating state during manual click scroll

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sections = [
    { id: "1-about-pagemistriin", label: "1. About Pagemistri.in" },
    { id: "2-acceptance-of-these-terms", label: "2. Acceptance of These Terms" },
    { id: "3-business-survey-and-enquiry-forms", label: "3. Business Survey and Enquiry Forms" },
    { id: "4-information-you-provide", label: "4. Information You Provide" },
    { id: "5-what-happens-after-you-submit-a-form", label: "5. What Happens After You Submit a Form" },
    { id: "6-service-information", label: "6. Service Information" },
    { id: "7-pricing-and-estimates", label: "7. Pricing and Estimates" },
    { id: "8-delivery-timelines", label: "8. Delivery Timelines" },
    { id: "9-customer-content", label: "9. Customer Content" },
    { id: "10-intellectual-property", label: "10. Intellectual Property" },
    { id: "11-third-party-services-and-links", label: "11. Third Party Services and Links" },
    { id: "12-communication", label: "12. Communication" },
    { id: "13-no-guarantee-of-results", label: "13. No Guarantee of Results" },
    { id: "14-website-availability", label: "14. Website Availability" },
    { id: "15-prohibited-use", label: "15. Prohibited Use" },
    { id: "16-privacy", label: "16. Privacy" },
    { id: "17-separate-terms-for-pagemistri-services", label: "17. Separate Terms for Pagemistri Services" },
    { id: "18-disclaimer", label: "18. Disclaimer" },
    { id: "19-limitation-of-liability", label: "19. Limitation of Liability" },
    { id: "20-indemnification", label: "20. Indemnification" },
    { id: "21-changes-to-these-terms", label: "21. Changes to These Terms" },
    { id: "22-governing-law", label: "22. Governing Law" },
    { id: "23-severability", label: "23. Severability" },
    { id: "24-contact-us", label: "24. Contact Us" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Last Updated: August 14, 2026
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
                      isManualScrolling.current = true;
                      setActiveSection(item.id);
                      
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', `#${item.id}`);
                      }
                      
                      setTimeout(() => {
                        isManualScrolling.current = false;
                      }, 800);
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
          <div className="flex-1 space-y-10 max-w-3xl text-slate-600 dark:text-slate-300">
            {/* Intro paragraph */}
            <div className="text-lg leading-relaxed">
              <p className="mb-4">Welcome to Pagemistri.in.</p>
              <p className="mb-4">These Terms of Service ("Terms") govern your use of the Pagemistri.in website ("Website") and the services, information, forms, and other functionality made available through it.</p>
              <p className="mb-4">Pagemistri.in is primarily an informational and lead-generation website operated to help businesses learn about Pagemistri and submit their business requirements for website development and related services.</p>
              <p>By accessing or using this Website, or by submitting information through any form on the Website, you agree to these Terms. If you do not agree with these Terms, please do not use the Website or submit information through it.</p>
            </div>

            <section id="1-about-pagemistriin" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                1. About Pagemistri.in
              </h2>
              <p className="leading-relaxed mb-4">Pagemistri.in is an online website through which businesses and individuals can:</p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4">
                <li>Learn about Pagemistri's website development and related services.</li>
                <li>Tell us about their business and website requirements.</li>
                <li>Submit an enquiry or business survey.</li>
                <li>Request information about our services.</li>
                <li>Provide contact information for follow-up.</li>
                <li>Explore available website setup options, features, pricing, and processes.</li>
                <li>Contact the Pagemistri team.</li>
              </ul>
              <p className="leading-relaxed">Pagemistri.in is not the primary Pagemistri product platform. The main Pagemistri product and platform is available through Pagemistri.com. Certain services, features, subscriptions, accounts, hosting arrangements, or product functionality may be governed by separate terms applicable to Pagemistri.com.</p>
            </section>

            <section id="2-acceptance-of-these-terms" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                2. Acceptance of These Terms
              </h2>
              <p className="leading-relaxed mb-4">By accessing Pagemistri.in, you confirm that:</p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>You have read and understood these Terms.</li>
                <li>You agree to comply with these Terms.</li>
                <li>The information you provide to us is accurate to the best of your knowledge.</li>
                <li>You have the authority to provide any business information or information relating to an organization that you submit through the Website.</li>
                <li>If you are submitting information on behalf of a business, you represent that you are authorized to provide that information.</li>
              </ul>
            </section>

            <section id="3-business-survey-and-enquiry-forms" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                3. Business Survey and Enquiry Forms
              </h2>
              <p className="leading-relaxed mb-4">Pagemistri.in may provide forms that allow you to tell us about your business, website requirements, goals, services, and other relevant information.</p>
              <p className="leading-relaxed mb-4">Information requested through these forms may include: Full name, Business name, Email address, Phone number, Business category, Description of your products or services, Website requirements, Branding or design preferences, Existing website or social media information, and Other information relevant to understanding your business.</p>
              <p className="leading-relaxed mb-4">The purpose of collecting this information is to understand your requirements and determine how Pagemistri may be able to assist you.</p>
              <p className="leading-relaxed">Submitting a form does not automatically create an account, subscription, customer relationship, or binding service agreement.</p>
            </section>

            <section id="4-information-you-provide" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                4. Information You Provide
              </h2>
              <p className="leading-relaxed mb-4">You agree to provide information that is accurate, complete, and not intentionally misleading.</p>
              <p className="leading-relaxed">You should not submit: False or fraudulent information; Information belonging to another person without authorization; Confidential information that you are not authorized to disclose; Content that violates applicable law; Malicious code or files; or Information intended to abuse, disrupt, or compromise our systems.</p>
            </section>

            <section id="5-what-happens-after-you-submit-a-form" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                5. What Happens After You Submit a Form
              </h2>
              <p className="leading-relaxed">After submitting a business enquiry or survey, the Pagemistri team may review the information you provide. We may contact you using the submitted details to discuss your project, clarify information, explain services, and provide pricing. Submitting a form does not guarantee project acceptance.</p>
            </section>

            <section id="6-service-information" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                6. Service Information
              </h2>
              <p className="leading-relaxed">The information displayed on Pagemistri.in describes services including: Professional website design, Mobile-responsive development, Enquiry forms, Lead collection, Lead dashboards, Analytics setup, Basic SEO, Domain connection, Hosting, Payment gateway integration, and Website setup & launch. Service scope and features may vary by project.</p>
            </section>

            <section id="7-pricing-and-estimates" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                7. Pricing and Estimates
              </h2>
              <p className="leading-relaxed">Prices displayed on Pagemistri.in are for informational purposes and subject to change. They do not constitute a binding quotation unless expressly confirmed by Pagemistri.</p>
            </section>

            <section id="8-delivery-timelines" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                8. Delivery Timelines
              </h2>
              <p className="leading-relaxed">Target delivery periods (e.g., 3–5 working days) are estimates dependent on timely content delivery, client feedback, domain setup, and project complexity.</p>
            </section>

            <section id="9-customer-content" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                9. Customer Content
              </h2>
              <p className="leading-relaxed">You remain responsible for any logos, images, or content you provide, guaranteeing you possess necessary rights and permissions.</p>
            </section>

            <section id="10-intellectual-property" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                10. Intellectual Property
              </h2>
              <p className="leading-relaxed">Pagemistri.in, its design, code, branding, and original content are owned by or licensed to Pagemistri. You may not copy, redistribute, reverse engineer, or scrape site materials without permission. Your own business content remains yours.</p>
            </section>

            <section id="11-third-party-services-and-links" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                11. Third-Party Services and Links
              </h2>
              <p className="leading-relaxed">We are not responsible for third-party services, domains, hosting, or external websites linked on Pagemistri.in.</p>
            </section>

            <section id="12-communication" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                12. Communication
              </h2>
              <p className="leading-relaxed">By submitting details, you consent to follow-ups via Email, Phone, or WhatsApp regarding your enquiry.</p>
            </section>

            <section id="13-no-guarantee-of-results" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                13. No Guarantee of Results
              </h2>
              <p className="leading-relaxed">Pagemistri does not guarantee specific traffic numbers, sales, lead counts, or search engine rankings.</p>
            </section>

            <section id="14-website-availability" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                14. Website Availability
              </h2>
              <p className="leading-relaxed">We do not guarantee uninterrupted or error-free site access due to potential maintenance or network disruptions.</p>
            </section>

            <section id="15-prohibited-use" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                15. Prohibited Use
              </h2>
              <p className="leading-relaxed">Lawful site use only. Fraudulent submissions, hacking attempts, or scraping are strictly prohibited.</p>
            </section>

            <section id="16-privacy" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                16. Privacy
              </h2>
              <p className="leading-relaxed">Data processing is governed by our Privacy Policy.</p>
            </section>

            <section id="17-separate-terms-for-pagemistri-services" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                17. Separate Terms for Pagemistri Services
              </h2>
              <p className="leading-relaxed">Full product usage on Pagemistri.com may be governed by separate terms and subscription agreements.</p>
            </section>

            <section id="18-disclaimer" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                18. Disclaimer
              </h2>
              <p className="leading-relaxed">Information is for general business purposes; we reserve the right to update site content at any time.</p>
            </section>

            <section id="19-limitation-of-liability" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                19. Limitation of Liability
              </h2>
              <p className="leading-relaxed">Pagemistri is not liable for indirect, incidental, or consequential business losses arising from website usage.</p>
            </section>

            <section id="20-indemnification" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                20. Indemnification
              </h2>
              <p className="leading-relaxed">You agree to indemnify Pagemistri against claims resulting from your breach of these Terms or misuse of the site.</p>
            </section>

            <section id="21-changes-to-these-terms" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                21. Changes to These Terms
              </h2>
              <p className="leading-relaxed">Updated terms will be reflected by the "Last Updated" date above.</p>
            </section>

            <section id="22-governing-law" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                22. Governing Law
              </h2>
              <p className="leading-relaxed">Governed by the laws of India under applicable local jurisdiction.</p>
            </section>

            <section id="23-severability" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                23. Severability
              </h2>
              <p className="leading-relaxed">Unenforceable provisions will be severed without affecting remaining terms.</p>
            </section>

            <section id="24-contact-us" className="scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                24. Contact Us
              </h2>
              <p className="leading-relaxed mb-4">For questions regarding these Terms, contact us at pagemistri.in or support@sahihain.in.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

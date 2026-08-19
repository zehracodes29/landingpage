"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Compass,
  Sparkles,
} from "lucide-react";
import React from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const PERSONAS = [
  {
    title: "Coaches & consultants",
    description:
      "Create landing pages for programs, workshops, and consultations while managing every enquiry from one place.",
    icon: Compass,
  },
  {
    title: "Real estate professionals",
    description:
      "Capture property enquiries, organize buyer information, and manage follow-ups efficiently.",
    icon: Building2,
  },
  {
    title: "Training institutes & educators",
    description:
      "Collect admissions, registrations, and course enquiries through dedicated landing pages and forms.",
    icon: BookOpen,
  },
  {
    title: "Local service businesses",
    description:
      "Manage enquiries generated through social media, referrals, advertisements, and search engines.",
    icon: Briefcase,
  },
  {
    title: "Freelancers & agencies",
    description:
      "Create professional pages, collect project enquiries, and organize potential clients before they convert.",
    icon: Sparkles,
  },
];

export default function WhoIsItFor() {
  return (
    <motion.section
      id="who-is-it-for"
      className="relative bg-slate-50/50 dark:bg-slate-950 py-16 sm:py-20 w-full overflow-hidden border-y border-slate-100 dark:border-slate-800/50 z-0 scroll-mt-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4400AF]/20 via-slate-50/20 dark:from-[#4400AF]/20 dark:via-slate-900/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center mx-auto max-w-2xl mb-12"
        >
          <span className="bg-[rgba(68,0,175,0.10)] text-[#4400AF] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-4">
            WHO CAN USE
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] dark:text-white tracking-tight text-center max-w-2xl mx-auto">
            Who is Pagemistri for?
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 mt-12 w-full"
          variants={containerVariants}
        >
          {/* 5-Column Grid on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {PERSONAS.map((persona, i) => {
              const Icon = persona.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-[#4400AF]/5 hover:border-[#4400AF]/40 transition-all duration-200 relative group flex flex-col items-center text-center cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(68,0,175,0.10)] dark:bg-[#4400AF]/20 text-[#4400AF] dark:text-[#4400AF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-white group-hover:text-[#4400AF] dark:group-hover:text-[#4400AF] transition-colors mb-3 leading-snug">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-slate-400 leading-relaxed">
                    {persona.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            },
          }}
          className="flex justify-center"
        >
          <a
            href="#complete-website-setup"
            className="bg-[#4400AF] hover:bg-[#310080] text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2 mx-auto mt-12 group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

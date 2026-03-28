"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ────────────────────────────────────────────
   TYPES
   ──────────────────────────────────────────── */
export interface ProductBenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProductFeatureSection {
  title: string;
  description: string;
  /** CSS-built dashboard mockup */
  mockup: React.ReactNode;
}

export interface RelatedResource {
  tag: string;
  title: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductDetailPageProps {
  /** Small pill text at top of hero, e.g. "AI Investigator" */
  badge: string;
  /** Main hero heading */
  heroHeading: string;
  /** Hero sub-description */
  heroDescription: string;
  /** Large centered dashboard mockup below hero */
  heroMockup: React.ReactNode;
  /** Trust bar logos — rendered as text since we don't have image assets */
  trustLogos?: string[];
  /** Benefits section */
  benefitsHeading: string;
  benefitsSubtext: string;
  benefits: ProductBenefitCard[];
  /** Alternating two-column feature sections */
  features: ProductFeatureSection[];
  /** Related resources carousel */
  resources: RelatedResource[];
  /** FAQ accordion */
  faqs: FAQItem[];
}

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */
export default function ProductDetailPage({
  badge,
  heroHeading,
  heroDescription,
  heroMockup,
  trustLogos = ["Cipla", "Strides", "Biocon", "Granules", "VALENT", "acme", "Zydus", "Dr. Reddy's"],
  benefitsHeading,
  benefitsSubtext,
  benefits,
  features,
  resources,
  faqs,
}: ProductDetailPageProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Pill badge */}
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-full bg-white/70 backdrop-blur-sm mb-6">
              {badge}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-gray-900 leading-[1.08] tracking-tight">
              {heroHeading}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              {heroDescription}
            </p>
            <div className="mt-10">
              <Link
                href="/schedule-demo"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300 group shadow-xl shadow-gray-900/15"
              >
                Request a Demo
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Hero dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-14 md:mt-20 max-w-5xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200/60 bg-white">
              {heroMockup}
            </div>
          </motion.div>
        </div>
      </section>



      {/* ── BENEFITS ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
              {benefitsHeading}
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              {benefitsSubtext}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-5 text-gray-700">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATING FEATURE SECTIONS ── */}
      <section className="py-8 md:py-12 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-3xl bg-gradient-to-br from-gray-50 to-slate-50/50 p-8 md:p-12 border border-gray-100`}
              >
                {/* Text */}
                <div className={isReversed ? "lg:order-2" : ""}>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                {/* Mockup */}
                <div className={isReversed ? "lg:order-1" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-xl shadow-gray-900/5 border border-gray-200/60 bg-white">
                    {feature.mockup}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CONSULTATION CTA ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl bg-white border border-gray-100 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-10 md:p-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight">
                  Experience{" "}
                  <span className="text-blue-600">SYNCOMX AI</span>
                  <br />
                  Powered pharma manufacturing
                </h2>
                <div className="mt-8">
                  <Link
                    href="/schedule-demo"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all duration-300 group"
                  >
                    Request Consultation
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                  300+ pharma facilities worldwide use SYNCOMX to stay compliant. Talk to one of our expert consultants at SYNCOMX to learn how.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* ── FAQ ── */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50/50">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQAccordion
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ────────────────────────────────────────────
   FAQ Accordion Item
   ──────────────────────────────────────────── */
import { useState } from "react";

function FAQAccordion({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-xl border border-gray-100 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
      >
        {question}
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`shrink-0 ml-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

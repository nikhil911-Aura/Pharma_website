"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    title: "Reduce Batch Delays",
    description:
      "Identify and resolve production bottlenecks in real time. Proactively mitigate risks to ensure seamless execution.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="32" r="24" />
        <polyline points="32 18 32 32 40 36" />
        <path d="M32 56 L32 60" />
        <path d="M24 54 L28 50" />
        <circle cx="32" cy="50" r="2" fill="#0f172a" />
        <path d="M32 44 L32 48" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Reduce Cost of Quality",
    description:
      "Minimize deviations, improve compliance efficiency, and prevent costly rework with AI-driven process controls.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 48 L20 24" />
        <path d="M32 48 L32 16" />
        <path d="M44 48 L44 32" />
        <rect x="16" y="24" width="8" height="24" rx="1" fill="none" />
        <rect x="28" y="16" width="8" height="32" rx="1" fill="none" />
        <rect x="40" y="32" width="8" height="16" rx="1" fill="none" />
        <circle cx="26" cy="14" r="6" />
        <path d="M26 12 L26 16" />
        <path d="M24 14 L28 14" />
      </svg>
    ),
  },
  {
    title: "Improve OTIF Performance",
    description:
      "Optimize planning, execution, and release cycles to consistently deliver batches On Time, In Full.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#0f172a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="22" cy="20" r="6" />
        <path d="M22 26 L22 38" />
        <path d="M16 32 L28 32" />
        <path d="M36 44 L36 20" />
        <path d="M30 26 L36 20 L42 26" />
        <circle cx="42" cy="20" r="4" />
        <path d="M38 40 L46 40" />
        <rect x="14" y="42" width="36" height="8" rx="2" fill="none" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Unlock Tangible Benefits with Leucine
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Track every batch from planning to release—identify constraints,
            detect bottlenecks, and take proactive actions to eliminate delays.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Experience{" "}
              <span className="text-blue-600">Leucine AI</span>
              <br />
              Powered pharma
              <br />
              manufacturing
            </h2>
            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300 group shadow-lg shadow-gray-900/20"
              >
                Request Consultation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="btn-arrow"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-base text-gray-500 leading-relaxed">
              Join leading pharmaceutical companies in transforming batch
              execution. Ensure regulatory compliance, reduce deviations and
              accelerate batch release—all with one intelligent solution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

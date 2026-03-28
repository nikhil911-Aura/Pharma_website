"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const mainFeatures = [
  {
    title: "AI Investigator",
    description:
      "Leverage AI-powered root cause analysis and CAPA recommendations to drive consistent, science-based investigations.",
    href: "/products/quality/ai-investigator",
    large: true,
  },
  {
    title: "FDA Tracker",
    description:
      "Analyze FDA 483 trends, monitor warning letters, and proactively address regulatory gaps to ensure inspection readiness.",
    href: "/products/quality/fda-tracker",
    large: false,
  },
  {
    title: "Cleaning Validation",
    description:
      "Calculate safe carryover limits, track residue trends in real-time, and generate audit-ready validation reports effortlessly.",
    href: "/products/quality/cleaning-validation",
    large: false,
  },
];

export default function QMSSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-2xl">
            Quality
            <br />
            Management System
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl leading-relaxed">
            Ensure seamless regulatory compliance and quality excellence with
            AI-driven quality solutions.
          </p>
        </motion.div>

        {/* Main Feature - AI Investigator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {mainFeatures[0].title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed mb-6">
                  {mainFeatures[0].description}
                </p>
                <Link
                  href={mainFeatures[0].href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors group"
                >
                  Know More
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
              <div className="p-6 md:p-8">
                {/* AI Investigation Dashboard mock */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="dashboard-topbar flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z"
                          fill="white"
                        />
                      </svg>
                      <span className="text-white text-xs font-semibold">
                        Leucine
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-gray-300">
                      <span>New York</span>
                      <span>Quality Team</span>
                      <span className="bg-gray-700 px-2 py-0.5 rounded flex items-center gap-1">
                        <span className="w-4 h-4 rounded bg-blue-500 text-[8px] flex items-center justify-center text-white font-bold">
                          SC
                        </span>
                        Smith Cowell
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-800">
                        Temperature Excursion in Storage Area B
                      </span>
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-medium rounded-full border border-amber-200">
                        Investigation in Progress
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">
                        Root Cause Analysis
                      </h4>
                      <div className="grid grid-cols-6 gap-2">
                        {[
                          "MAN",
                          "Machine",
                          "Method",
                          "Material",
                          "Measurement",
                          "Environment",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex flex-col items-center gap-1 p-2 bg-white rounded border border-gray-100"
                          >
                            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#64748b"
                                strokeWidth="2"
                              >
                                <rect
                                  x="4"
                                  y="4"
                                  width="16"
                                  height="16"
                                  rx="2"
                                />
                              </svg>
                            </div>
                            <span className="text-[8px] font-medium text-gray-500 text-center leading-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Features - FDA Tracker & Cleaning Validation */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {mainFeatures.slice(1).map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-gray-50 rounded-2xl overflow-hidden h-full">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors group"
                  >
                    Know More
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
                {/* Dashboard Mockup */}
                <div className="px-6 pb-6">
                  {feature.title === "FDA Tracker" ? (
                    <FDATrackerMockup />
                  ) : (
                    <CleaningValidationMockup />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FDATrackerMockup() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <span className="text-xs font-bold tracking-wider">FDA</span>
          <span className="text-[10px] text-gray-400">TRACKER</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-400">Feedback</span>
          <span className="w-5 h-5 rounded-full bg-amber-500 text-[8px] flex items-center justify-center font-bold">
            AH
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[10px] text-gray-400 mb-1">Home</p>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Welcome to FDA Tracker, Angela
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="border border-gray-200 rounded-lg p-3">
            <h5 className="text-xs font-semibold text-gray-700">
              Recent Form 483s
            </h5>
            <p className="text-[10px] text-gray-400 mb-2">
              Latest Form 483 Inspections
            </p>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-[9px] text-gray-600 truncate">
                Dr. Reddy&apos;s Laboratories Limited (Un...
              </p>
              <span className="text-[8px] px-1.5 py-0.5 bg-red-50 text-red-500 rounded font-medium mt-1 inline-block">
                Form 483
              </span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-3">
            <h5 className="text-xs font-semibold text-gray-700">
              Recent Warning Letters
            </h5>
            <p className="text-[10px] text-gray-400 mb-2">
              Latest FDA Warning Letters
            </p>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-[9px] text-gray-600 truncate">
                Shantou Kangjie Daily Chemical I...
              </p>
              <span className="text-[8px] px-1.5 py-0.5 bg-amber-50 text-amber-500 rounded font-medium mt-1 inline-block">
                Warning Letter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CleaningValidationMockup() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="dashboard-topbar flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z"
              fill="white"
            />
          </svg>
          <span className="text-white text-xs font-semibold">Leucine</span>
        </div>
        <div className="text-[10px] text-gray-300 flex items-center gap-2">
          <span>New York</span>
          <span>Batch Manufacturing</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[10px] text-gray-400 mb-1">Custom Report</p>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Cleaning Procedure Residue Trending Report
        </h4>
        <div className="flex gap-2 mb-3 text-[10px]">
          {["Location 1", "Location 2", "Location 3", "Location 4", "Location 5"].map(
            (loc, i) => (
              <span
                key={loc}
                className={`${
                  i === 0
                    ? "text-red-500 font-medium border-b border-red-500"
                    : "text-gray-400"
                } pb-1`}
              >
                {loc}
              </span>
            )
          )}
        </div>
        {/* Chart mockup */}
        <div className="h-[100px] relative bg-gradient-to-b from-red-50 to-white rounded overflow-hidden">
          <svg
            viewBox="0 0 300 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 Q30 25 60 35 Q90 40 120 32 Q150 28 180 38 Q210 42 240 35 Q270 30 300 40"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              opacity="0.6"
            />
            <path
              d="M0 50 Q30 48 60 52 Q90 55 120 50 Q150 48 180 54 Q210 58 240 52 Q270 50 300 56"
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
              opacity="0.5"
            />
            <path
              d="M0 70 Q30 68 60 72 Q90 75 120 70 Q150 68 180 74 Q210 78 240 72 Q270 70 300 76"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

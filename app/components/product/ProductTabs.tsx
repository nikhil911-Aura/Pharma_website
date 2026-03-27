"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export interface ProductTabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  learnMoreHref: string;
  /** CSS-built dashboard mockup content */
  mockupContent: React.ReactNode;
}

interface ProductTabsProps {
  tabs: ProductTabItem[];
  defaultTab?: string;
}

export default function ProductTabs({ tabs, defaultTab }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "");
  const active = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="py-6 md:py-10 bg-gradient-to-b from-white to-slate-50/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab bar */}
        <div className="flex items-center justify-center gap-1 mb-16 md:mb-20">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-gray-900 bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content — two-column showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left — Text content */}
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {active.icon}
                </div>
                <span className="text-base font-semibold text-gray-900">
                  {active.label}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
                {active.heading}
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-6">
                {active.description}
              </p>
              <Link
                href={active.learnMoreHref}
                className="inline-flex items-center gap-2 text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors group"
              >
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Right — App UI mockup */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200/60 bg-white">
                {active.mockupContent}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial fade at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249,250,251,0) 0%, rgba(249,250,251,0.7) 100%)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] font-extrabold text-gray-900 leading-[1.1] tracking-[-0.02em]">
            Simplifying
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Manufacturing & Compliance
          </h1>
          <p className="mt-5 sm:mt-7 md:mt-9 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal px-4 sm:px-2">
            Coordinate, monitor, and scale every operation. Achieve peak
            throughput with intelligent software &amp; robust safety protocols.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-7 sm:mt-9 md:mt-11 flex justify-center"
          >
            <Link
              href="/schedule-demo"
              className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-gray-800 transition-all duration-300 group shadow-xl shadow-gray-900/25 hover:shadow-gray-900/35 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Your Tour
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Interactive Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 sm:mt-14 md:mt-18 w-full"
        >
          <HeroTabs />
        </motion.div>
      </div>
    </section>
  );
}

function HeroTabs() {
  const [activeTab, setActiveTab] = useState("manufacturing");

  const tabs = [
    {
      id: "manufacturing",
      label: "Manufacturing",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <path d="M8 7v10" />
          <path d="M12 7v10" />
          <path d="M16 7v10" />
        </svg>
      ),
    },
    {
      id: "quality",
      label: "Quality",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center gap-2 sm:gap-2.5 mb-5 sm:mb-6 flex-wrap px-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
              activeTab === tab.id
                ? "bg-white border-gray-200 text-gray-900 shadow-sm"
                : "bg-transparent border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dashboard Preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {/* Tablet/device frame */}
          <div
            className="rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-900/10"
            style={{
              background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
              padding: "2px",
            }}
          >
            <div className="rounded-[10px] sm:rounded-[18px] overflow-hidden bg-white">
              {activeTab === "manufacturing" && <ManufacturingDashboard />}
              {activeTab === "quality" && <QualityDashboard />}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function DashboardTopbar({ subtitle }: { subtitle: string }) {
  return (
    <div className="bg-[#1e293b] flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 text-white">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className="flex items-center justify-center">
          <Image
            src="/logo1.png"
            alt="SYNCOMX"
            width={12}
            height={12}
            className="w-3 h-3 object-contain"
          />
        </div>
        <span className="text-xs sm:text-sm font-semibold">SYNCOMX</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-400">
        <span className="hidden md:inline">📍 New York</span>
        <span className="hidden sm:inline">⚙️ {subtitle}</span>
        <span className="bg-white/10 px-2 sm:px-2.5 py-1 rounded-md flex items-center gap-1 sm:gap-1.5">
          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500 text-[9px] sm:text-[10px] flex items-center justify-center text-white font-bold shrink-0">
            SC
          </span>
          <span className="hidden sm:inline">System Core</span>
        </span>
      </div>
    </div>
  );
}

function ManufacturingDashboard() {
  return (
    <>
      <DashboardTopbar subtitle="Continuous Operations" />
      <div className="p-3 sm:p-4 md:p-5 bg-white">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
            Production Floor Overview
          </h3>
          <span className="px-2 sm:px-2.5 py-0.5 bg-green-50 text-green-600 text-[10px] sm:text-xs font-medium rounded-full border border-green-200">
            Active
          </span>
        </div>

        {/* Responsive grid: stacks on mobile, 3 cols on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg p-2.5 sm:p-3">
            <h4 className="font-semibold text-[10px] sm:text-xs text-gray-800 mb-2">
              Tablet Press Machine
            </h4>
            <div className="space-y-1.5 text-[10px] sm:text-[11px]">
              {[
                ["MACHINE ID", "TP - 001", false],
                ["STATUS", "Running", true],
                ["TEMP & PRESSURE", "75°C, 1500 psi", false],
                ["OPERATING RPM", "1200 RPM", false],
                ["OUTPUT RATE", "500 bpm", false],
              ].map(([label, value, isStatus]) => (
                <div key={label as string} className="flex justify-between items-center gap-2">
                  <span className="text-gray-400 truncate">{label as string}</span>
                  <span
                    className={`font-medium shrink-0 ${
                      isStatus
                        ? "text-green-600 bg-green-50 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px]"
                        : "text-gray-700"
                    }`}
                  >
                    {value as string}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg p-2.5 sm:p-3">
            <h4 className="font-semibold text-[10px] sm:text-xs text-gray-800 mb-2">
              Cleanroom 101
            </h4>
            <div className="space-y-1.5 text-[10px] sm:text-[11px]">
              {[
                ["AREA ID", "CR - 001", false],
                ["STATUS", "Operational", true],
                ["TEMP & HUMIDITY", "22°C, 45%RH", false],
                ["PARTICLE COUNT", "70 particle/m³", false],
                ["AIRFLOW", "2000 m³/h", false],
              ].map(([label, value, isStatus]) => (
                <div key={label as string} className="flex justify-between items-center gap-2">
                  <span className="text-gray-400 truncate">{label as string}</span>
                  <span
                    className={`font-medium shrink-0 ${
                      isStatus
                        ? "text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px]"
                        : "text-gray-700"
                    }`}
                  >
                    {value as string}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 – Bar chart */}
          <div className="border border-gray-200 rounded-lg p-2.5 sm:p-3 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-[10px] sm:text-xs text-gray-800 mb-2">
              LABOUR UTILISATION
            </h4>
            <div className="h-[90px] sm:h-[100px] md:h-[110px] flex items-end justify-between gap-0.5 px-1">
              {[22, 24, 23, 21, 24, 22, 25, 23, 22, 24, 21, 23].map(
                (val, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-blue-400 rounded-t-sm hover:bg-blue-500 transition-colors cursor-pointer"
                    style={{ height: `${(val / 26) * 100}%` }}
                  />
                )
              )}
            </div>
            <p className="text-[8px] sm:text-[9px] text-gray-400 mt-1.5 text-center">
              Man Hours In Each Batch
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function QualityDashboard() {
  return (
    <>
      <DashboardTopbar subtitle="Quality Team" />
      <div className="p-3 sm:p-4 md:p-5 bg-white">
        <div className="flex flex-wrap items-start sm:items-center gap-2 mb-3">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#64748b"
            strokeWidth="2"
            className="shrink-0 mt-0.5 sm:mt-0"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
            Temperature Excursion in Storage Area B
          </span>
          <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[9px] sm:text-[10px] font-medium rounded-full border border-amber-200 whitespace-nowrap">
            Investigation in Progress
          </span>
        </div>

        <div className="bg-gray-50 rounded-lg p-2.5 sm:p-3">
          <h4 className="text-[10px] sm:text-xs font-semibold text-gray-700 mb-2 sm:mb-3">
            Root Cause Analysis
          </h4>
          {/* 3 cols on mobile, 6 on sm+ */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
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
                className="flex flex-col items-center gap-1 sm:gap-1.5 p-2 sm:p-2.5 bg-white rounded-lg border border-gray-100"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[9px] font-medium text-gray-500 text-center leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

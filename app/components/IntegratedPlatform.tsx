"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
  {
    id: "manufacturing",
    label: "Manufacturing",
    title: "Manufacturing Execution Engine",
    description:
      "Command line operations smoothly with smart activity orchestration, continuous output monitoring, and digital tracking.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7v10" /><path d="M12 7v10" /><path d="M16 7v10" />
      </svg>
    ),
  },
  {
    id: "quality",
    label: "Quality",
    title: "Quality Assurance Hub",
    description:
      "Streamline root cause analysis, maintain robust audit readiness, and transform digital sanitation workflows safely.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

const sidebarItems = [
  { icon: "📊", label: "Dashboard" },
  { icon: "📥", label: "Inbox" },
  { icon: "📋", label: "Job" },
  { icon: "⚙️", label: "Process" },
  { icon: "🔗", label: "Ontology" },
  { icon: "📈", label: "Reporting" },
  { icon: "👥", label: "Users" },
];

export default function IntegratedPlatform() {
  const [activeTab, setActiveTab] = useState("manufacturing");
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Unified Ecosystem to Coordinate, Track, and Perfect Every Cycle—From
            Start to Finish.
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Monitor each stage from inception to delivery—uncover hurdles,
            spot inefficiencies, and deploy early interventions to prevent slowdowns.
          </p>
        </motion.div>

        {/* Tab cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-2 md:p-3"
        >
          {/* Tab buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 mb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex flex-col items-start text-left p-5 md:p-6 rounded-xl transition-all duration-300 group outline-none"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-white shadow-xl shadow-gray-200/50 border border-gray-100 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className="relative z-10 w-full">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className={`${
                        activeTab === tab.id ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
                      } transition-colors`}
                    >
                      {tab.icon}
                    </span>
                    <h3
                      className={`text-lg font-bold transition-colors ${
                        activeTab === tab.id ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    >
                      {tab.label}
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      activeTab === tab.id ? "text-gray-600" : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  >
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Tab content - Dashboard Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-3"
            >
              <DashboardPreview tab={currentTab} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardSidebar() {
  return (
    <div className="hidden md:flex flex-col w-[180px] bg-white border-r border-gray-100 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
        <Image
          src="/logo1.png"
          alt="SYNCOMX"
          width={18}
          height={18}
          className="w-[18px] h-[18px] object-contain"
        />
        <span className="text-sm font-bold text-gray-900">SYNCOMX</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" className="ml-auto">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
        </svg>
      </div>
      {/* Nav items */}
      <nav className="flex-1 py-2">
        {sidebarItems.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center justify-between px-4 py-2 text-xs cursor-pointer transition-colors ${
              i === 0
                ? "text-gray-900 font-medium bg-gray-50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[13px]">{item.icon}</span>
              <span>{item.label}</span>
            </div>
            {(item.label === "Inbox" || item.label === "Job") && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

function DashboardPreview({ tab }: { tab: (typeof tabs)[number] }) {
  if (tab.id === "manufacturing") {
    return (
      <div className="tablet-frame">
        <div className="tablet-screen">
          <DashboardToolbar title="Continuous Operations" />
          <div className="flex">
            <DashboardSidebar />
            <div className="flex-1 p-4 md:p-5 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm md:text-base font-semibold text-gray-800">
                  Shop Floor Monitor
                </h3>
                <span className="px-2.5 py-0.5 bg-green-50 text-green-600 text-xs font-medium rounded-full border border-green-200">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Tablet Press Machine */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-xs text-gray-800 mb-2.5">
                    Tablet Press Machine
                  </h4>
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between"><span className="text-gray-400">MACHINE ID</span><span className="font-medium text-gray-700">TP - 001</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">CURRENT STATUS</span><span className="px-1.5 py-0.5 bg-green-50 text-green-600 rounded text-[10px] font-medium">Running</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">TEMPERATURE &amp; PRESSURE</span><span className="font-medium text-gray-700">75°C, 1500 psi</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">OPERATING RPM</span><span className="font-medium text-gray-700">1200 RPM</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">OUTPUT RATE</span><span className="font-medium text-gray-700">500 bpm</span></div>
                  </div>
                </div>

                {/* Cleanroom 101 */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-xs text-gray-800 mb-2.5">
                    Cleanroom 101
                  </h4>
                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between"><span className="text-gray-400">AREA ID</span><span className="font-medium text-gray-700">CR - 001</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">CURRENT STATUS</span><span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-medium">Operational</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">TEMPERATURE &amp; HUMIDITY</span><span className="font-medium text-gray-700">22°C, 45%RH</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">PARTICLE COUNT</span><span className="font-medium text-gray-700">70 particle/m³</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">AIRFLOW</span><span className="font-medium text-gray-700">2000 m³/h</span></div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-xs text-gray-800 mb-2.5">
                    LABOUR UTILISATION ANALYTICS
                  </h4>
                  <div className="h-[130px] flex items-end justify-between gap-0.5 px-1">
                    {[22, 24, 23, 21, 24, 22, 25, 23, 22, 24, 21, 23].map(
                      (val, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-blue-400 rounded-t-sm hover:bg-blue-500 transition-colors"
                          style={{ height: `${(val / 26) * 100}%` }}
                        />
                      )
                    )}
                  </div>
                  <p className="text-[9px] text-gray-400 mt-1.5 text-center">
                    Man Hours In Each Batch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (tab.id === "quality") {
    return (
      <div className="tablet-frame">
        <div className="tablet-screen">
          <DashboardToolbar title="FO/Solid" />
          <div className="flex">
            <DashboardSidebar />
            <div className="flex-1 p-4 md:p-5 bg-white">
              <div className="text-[10px] text-gray-400 mb-1">
                Settings / Cleaning Limit Policies / Cleaning Limit Policy for Actives
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Cleaning Limit Policy for Actives
              </h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-3 py-2 font-medium text-xs text-gray-700">
                  Direct Surface Policy
                </div>
                <div className="flex">
                  <div className="w-[140px] border-r border-gray-200 shrink-0">
                    {[
                      "For Active to Active",
                      "For Active to Intermediate",
                      "Configure Policy",
                      "Configure Representations",
                      "Upper Cap Setting",
                    ].map((item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 text-[10px] ${
                          i === 0
                            ? "text-blue-600 font-medium bg-blue-50 border-l-2 border-blue-600"
                            : "text-gray-500"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 p-3">
                    <h4 className="text-xs font-semibold text-gray-800 mb-1">
                      Active to Active
                    </h4>
                    <p className="text-[10px] text-gray-500 mb-2">
                      Policy selection Preference
                    </p>
                    <div className="space-y-2">
                      <label className="flex items-start gap-1.5 text-[10px]">
                        <input type="radio" name="policy" className="mt-0.5" readOnly />
                        <div>
                          <span className="font-medium text-gray-700">Use Minimum of Selected Criteria</span>
                          <p className="text-gray-400 mt-0.5 leading-relaxed">
                            Use Minimum of MAC (Toxicity), MAC (Dosage) &amp; MAC (Default: ARL).
                          </p>
                        </div>
                      </label>
                      <label className="flex items-start gap-1.5 text-[10px]">
                        <input type="radio" name="policy" className="mt-0.5" defaultChecked readOnly />
                        <div>
                          <span className="font-medium text-gray-700">Use Preferential</span>
                          <p className="text-gray-400 mt-0.5 leading-relaxed">
                            1. Use MAC (Toxicity)<br />
                            2. If not available use MAC (Dosage)<br />
                            3. If not available use MAC (Default)
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: Manufacturing dashboard
  return (
    <div className="tablet-frame">
      <div className="tablet-screen">
        <DashboardToolbar title="Batch Manufacturing" />
        <div className="flex">
          <DashboardSidebar />
          <div className="flex-1 p-4 md:p-5 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm md:text-base font-semibold text-gray-800">
                Shop Floor Monitor
              </h3>
              <span className="px-2.5 py-0.5 bg-green-50 text-green-600 text-xs font-medium rounded-full border border-green-200">
                Active
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-semibold text-xs text-gray-800 mb-2.5">Tablet Press Machine</h4>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between"><span className="text-gray-400">MACHINE ID</span><span className="font-medium text-gray-700">TP - 001</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">CURRENT STATUS</span><span className="px-1.5 py-0.5 bg-green-50 text-green-600 rounded text-[10px] font-medium">Running</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">TEMPERATURE</span><span className="font-medium text-gray-700">75°C</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">OUTPUT RATE</span><span className="font-medium text-gray-700">500/min</span></div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-semibold text-xs text-gray-800 mb-2.5">Cleanroom 101</h4>
                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between"><span className="text-gray-400">AREA ID</span><span className="font-medium text-gray-700">CR - 001</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">STATUS</span><span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-medium">Operational</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">TEMP & HUMIDITY</span><span className="font-medium text-gray-700">22°C, 45%</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">PARTICLE COUNT</span><span className="font-medium text-gray-700">70/m³</span></div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-semibold text-xs text-gray-800 mb-2.5">LABOUR ANALYTICS</h4>
                <div className="h-[130px] flex items-end justify-between gap-0.5 px-1">
                  {[22, 24, 23, 21, 24, 22, 25, 23, 22, 24, 21, 23].map((val, i) => (
                    <div key={i} className="flex-1 bg-indigo-400 rounded-t-sm hover:bg-indigo-500 transition-colors" style={{ height: `${(val / 26) * 100}%` }} />
                  ))}
                </div>
                <p className="text-[9px] text-gray-400 mt-1.5 text-center">Man Hours Per Batch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardToolbar({ title }: { title: string }) {
  return (
    <div className="dashboard-topbar flex items-center justify-between px-4 py-2.5">
      <div className="flex items-center gap-3">
        <Image
          src="/logo1.png"
          alt="SYNCOMX"
          width={18}
          height={18}
          className="w-[18px] h-[18px] object-contain"
        />
        <span className="text-white text-sm font-semibold">SYNCOMX</span>
      </div>
      <div className="flex items-center gap-3 text-xs text-gray-300">
        <span className="hidden sm:flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          New York
        </span>
        <span className="hidden sm:flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33" />
          </svg>
          {title}
        </span>
        <span className="flex items-center gap-1.5 bg-white/10 px-2 py-1 rounded-md">
          <span className="w-5 h-5 rounded-full bg-blue-500 text-[10px] flex items-center justify-center text-white font-bold">
            SC
          </span>
          <span className="hidden sm:inline">System Core</span>
        </span>
      </div>
    </div>
  );
}

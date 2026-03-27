"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Environmental Monitoring",
    description:
      "Automate sampling, track microbial trends in real-time, and ensure full compliance with intelligent monitoring.",
    href: "#",
  },
  {
    title: "Instrument Management",
    description:
      "Digitally track instrument calibration, usage, and maintenance schedules to prevent disruptions and ensure audit readiness.",
    href: "#",
  },
];

export default function LESSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-2xl">
            Laboratory
            <br />
            Execution System
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl leading-relaxed">
            Transform lab operations with AI-powered automation.
          </p>
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden h-full feature-card">
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
                  {feature.title === "Environmental Monitoring" ? (
                    <EnvironmentalMonitoringMockup />
                  ) : (
                    <InstrumentManagementMockup />
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

function EnvironmentalMonitoringMockup() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="dashboard-topbar flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 40 40" fill="none">
            <path d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z" fill="white" />
          </svg>
          <span className="text-white text-xs font-semibold">Leucine</span>
        </div>
        <div className="text-[10px] text-gray-300 flex items-center gap-2">
          <span>New York</span>
          <span>Batch Manufacturing</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Environmental Monitoring Dashboard
        </h4>
        {/* Bar chart mockup */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {[
            { label: "Zone A", count: 12, color: "bg-blue-500" },
            { label: "Zone B", count: 8, color: "bg-green-500" },
            { label: "Zone C", count: 15, color: "bg-amber-500" },
            { label: "Zone D", count: 6, color: "bg-purple-500" },
          ].map((zone) => (
            <div key={zone.label} className="text-center">
              <div className="h-[80px] flex items-end justify-center mb-1">
                <div
                  className={`w-8 ${zone.color} rounded-t transition-all`}
                  style={{ height: `${(zone.count / 15) * 100}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-500">{zone.label}</span>
              <p className="text-xs font-semibold text-gray-700">
                {zone.count}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {["Viable", "Non-Viable", "Settle Plates", "Active Air"].map(
            (item) => (
              <span
                key={item}
                className="flex items-center gap-1 text-[9px] text-gray-400"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function InstrumentManagementMockup() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="dashboard-topbar flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 40 40" fill="none">
            <path d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z" fill="white" />
          </svg>
          <span className="text-white text-xs font-semibold">Leucine</span>
        </div>
        <div className="text-[10px] text-gray-300 flex items-center gap-2">
          <span>New York</span>
          <span>Batch Manufacturing</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Autoclave Usage and Maintenance Log
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-1.5 text-gray-500 font-medium">
                  Status
                </th>
                <th className="text-left py-1.5 text-gray-500 font-medium">
                  Job ID
                </th>
                <th className="text-left py-1.5 text-gray-500 font-medium">
                  Started By
                </th>
                <th className="text-left py-1.5 text-gray-500 font-medium">
                  Start Date
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  status: "Completed",
                  statusColor: "bg-green-50 text-green-600",
                  id: "87543",
                  user: "John Doe",
                  date: "2024-07-20",
                },
                {
                  status: "In Progress",
                  statusColor: "bg-blue-50 text-blue-600",
                  id: "74785",
                  user: "Jane Smith",
                  date: "2024-07-30",
                },
                {
                  status: "Completed",
                  statusColor: "bg-green-50 text-green-600",
                  id: "78500",
                  user: "Robert Brown",
                  date: "2024-07-05",
                },
                {
                  status: "Completed",
                  statusColor: "bg-green-50 text-green-600",
                  id: "39665",
                  user: "Emily Davis",
                  date: "2024-08-15",
                },
              ].map((row) => (
                <tr key={row.id} className="border-b border-gray-50">
                  <td className="py-1.5">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${row.statusColor}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-1.5 text-gray-700">{row.id}</td>
                  <td className="py-1.5 text-gray-700">{row.user}</td>
                  <td className="py-1.5 text-gray-500">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

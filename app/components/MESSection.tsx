"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const topFeatures = [
  {
    title: "Batch Execution",
    subtitle: "Modernize and Standardize Operational Workflows.",
    description:
      "Guarantee precise asset allocation, mandate step verification, and capture execution insights for flawless operation logs.",
    href: "/products/manufacturing/batch-execution",
  },
  {
    title: "Batch Intelligence",
    subtitle: "Oversee operations as they happen.",
    description:
      "Identify risks instantly and deploy strategic countermeasures to boost overall output.",
    href: "/products/manufacturing/batch-intelligence",
  },
  {
    title: "Production Logbooks",
    subtitle: "Electronically record equipment sanitation and state changes.",
    description:
      "Synchronize maintenance workflows to maintain a continuously audit-compliant environment.",
    href: "/products/manufacturing/production-logbooks",
  },
];

const bottomFeatures = [
  {
    title: "Accelerate Workflow Finalization",
    subtitle: "Simplify your document review cycle.",
    description:
      "Targeted alert mechanisms to hasten sign-offs, boost precision, and uphold stringent quality guidelines.",
    href: "/products/manufacturing",
  },
  {
    title: "Visualize Your Ecosystem, End-to-End",
    subtitle: "Achieve unparalleled clarity into all macro and micro operations.",
    description:
      "View detailed status updates on machinery, run progress, and holistic site efficiency.",
    href: "/products/manufacturing",
  },
  {
    title: "Monitor Goods-in-Process in Real-Time",
    subtitle: "Attain granular tracking capabilities.",
    description:
      "Sophisticated inventory modules enabling tight operational tolerances.",
    href: "/products/manufacturing",
  },
];

const allFeatures = [...topFeatures, ...bottomFeatures];

export default function MESSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-2xl">
            Manufacturing
            <br />
            Execution Engine
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl leading-relaxed">
            Streamline every phase of the process, from resource pooling to final
            authorization.
          </p>
        </motion.div>

        {/* Top 3 Feature Cards with Dashboard Previews */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Link
                href={feature.href}
                className="feature-card flex flex-col bg-white rounded-xl overflow-hidden w-full group transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200"
              >
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                      {feature.subtitle}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-6">
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
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                    <div className="h-[140px] w-full">
                      <MiniDashboard type={feature.title} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom 3 Feature Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bottomFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Link
                href={feature.href}
                className="feature-card flex flex-col bg-white rounded-xl p-6 md:p-8 w-full group transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    {feature.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mt-auto">
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
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniDashboard({ type }: { type: string }) {
  if (type === "Batch Execution") {
    return (
      <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-800 text-white px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 40 40" fill="none">
              <path d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z" fill="white" />
            </svg>
            <span className="text-[10px] font-semibold">SYNCOMX</span>
          </div>
          <span className="text-[8px] text-gray-400">Batch Manufacturing</span>
        </div>
        <div className="p-2.5">
          <div className="text-[9px] font-semibold text-gray-700 mb-2">Batch Record Execution</div>
          <div className="space-y-1.5">
            {["Weighing & Dispensing", "Granulation", "Compression", "Coating"].map((step, i) => (
              <div key={step} className="flex items-center gap-2 text-[9px]">
                <div className={`w-3 h-3 rounded-full flex items-center justify-center ${i < 2 ? "bg-green-500" : i === 2 ? "bg-blue-500" : "bg-gray-200"}`}>
                  {i < 2 && <svg width="6" height="6" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                </div>
                <span className={`${i < 2 ? "text-gray-400 line-through" : i === 2 ? "text-blue-600 font-medium" : "text-gray-500"}`}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "Batch Intelligence") {
    return (
      <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-800 text-white px-3 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 40 40" fill="none">
              <path d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z" fill="white" />
            </svg>
            <span className="text-[10px] font-semibold">SYNCOMX</span>
          </div>
          <span className="text-[8px] text-gray-400">OTIF Analysis</span>
        </div>
        <div className="p-2.5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-semibold text-gray-700">OTIF Analysis</span>
            <span className="px-1 py-0.5 bg-green-50 text-green-600 text-[7px] font-bold rounded">Live</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-white rounded p-1.5 border border-gray-100">
              <p className="text-[7px] text-gray-400">Current OTIF</p>
              <p className="text-sm font-bold text-gray-800">94.5%</p>
              <p className="text-[7px] text-green-500">+5.2% from Last</p>
            </div>
            <div className="bg-white rounded p-1.5 border border-gray-100">
              <p className="text-[7px] text-gray-400">Average Delay</p>
              <p className="text-sm font-bold text-gray-800">1.8 days</p>
              <p className="text-[7px] text-amber-500">-0.2 days</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Production Logbooks
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
      <div className="bg-gray-800 text-white px-3 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 40 40" fill="none">
            <path d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z" fill="white" />
          </svg>
          <span className="text-[10px] font-semibold">SYNCOMX</span>
        </div>
        <span className="text-[8px] text-gray-400">Production Logbooks</span>
      </div>
      <div className="p-2.5">
        <div className="text-[9px] font-semibold text-gray-700 mb-2">Blister Pack Machine Log</div>
        <div className="overflow-hidden">
          <table className="w-full text-[8px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-1 text-gray-400 font-medium">Status</th>
                <th className="text-left py-1 text-gray-400 font-medium">Job ID</th>
                <th className="text-left py-1 text-gray-400 font-medium">By</th>
              </tr>
            </thead>
            <tbody>
              {[
                { status: "completed", id: "87543", user: "J. Doe" },
                { status: "in-progress", id: "74785", user: "J. Smith" },
                { status: "completed", id: "78500", user: "R. Brown" },
              ].map((row) => (
                <tr key={row.id} className="border-b border-gray-50">
                  <td className="py-1">
                    <span className={`px-1 py-0.5 rounded text-[7px] font-medium ${
                      row.status === "completed" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                    }`}>
                      {row.status === "completed" ? "Done" : "Active"}
                    </span>
                  </td>
                  <td className="py-1 text-gray-600">{row.id}</td>
                  <td className="py-1 text-gray-600">{row.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    id: "quality",
    title: "Quality Management System",
    subtitle: "10x QMS",
    description:
      "Accelerate investigations, enforce compliance, and automate validation with AI-driven tools.",
    href: "/products/quality",
    color: "blue",
    products: [
      "AI Investigator",
      "FDA Tracker",
      "Cleaning Validation",
      "Market Complaints",
      "Change Control",
      "CAPA Manager",
      "Deviation Management",
      "Audit Management",
    ],
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "manufacturing",
    title: "Manufacturing Execution System",
    subtitle: "10x MES",
    description:
      "Optimize production with AI-powered batch execution, real-time OTIF tracking, and production logbooks.",
    href: "/products/manufacturing",
    color: "indigo",
    products: [
      "Batch Execution",
      "Batch Intelligence",
      "Production Logbooks",
    ],
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7v10" />
        <path d="M12 7v10" />
        <path d="M16 7v10" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Our Products
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              AI-powered platform solutions for pharma manufacturing execution and
              quality management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  href={category.href}
                  className="block bg-white rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group h-full"
                >
                  {/* Icon + subtitle */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        category.color === "blue"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-indigo-50 text-indigo-600"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        category.color === "blue"
                          ? "text-blue-600"
                          : "text-indigo-600"
                      }`}
                    >
                      {category.subtitle}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {category.title}
                  </h2>
                  <p className="text-base text-gray-500 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Product tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {category.products.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-600 border border-gray-100"
                      >
                        {product}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Explore Products
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
    </>
  );
}

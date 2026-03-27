"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              About Leucine
            </h1>
            <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Transforming pharmaceutical manufacturing with AI-powered intelligence. 
              We help pharma companies plan, execute, and optimize every batch — delivering On Time, In Full.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                Our Mission
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Leucine is dedicated to transforming pharmaceutical manufacturing through 
                AI-powered solutions that ensure compliance, enhance quality, and optimize 
                productivity across the entire batch lifecycle.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Our integrated platform brings together manufacturing, quality, and laboratory 
                operations in one digital ecosystem, enabling pharmaceutical companies to 
                deliver life-saving medicines faster and more reliably.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { stat: "100+", label: "Pharma Companies" },
                { stat: "50M+", label: "Batches Processed" },
                { stat: "99.9%", label: "Uptime SLA" },
                { stat: "40%", label: "Faster Batch Release" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100"
                >
                  <div className="text-3xl font-extrabold text-gray-900 mb-1">
                    {item.stat}
                  </div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Experience the Future of Pharma Manufacturing
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Join leading pharmaceutical companies in transforming batch execution and quality management.
          </p>
          <Link
            href="/schedule-demo"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300 group shadow-lg shadow-gray-900/20"
          >
            Schedule a Demo
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
          </Link>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ConsultationCTAProps {
  heading?: string;
  highlightText?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ConsultationCTA({
  heading = "Powered pharma manufacturing",
  highlightText = "Experience Leucine AI",
  description = "300+ pharma facilities worldwide use Leucine to stay compliant. Talk to one of our expert consultants at Leucine to learn how.",
  ctaText = "Request Consultation",
  ctaHref = "#",
}: ConsultationCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-white border border-gray-100 overflow-hidden"
        >
          {/* Grid background pattern */}
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
            {/* Left */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight">
                {highlightText}{" "}
                <span className="text-blue-600">{""}</span>
                <br />
                {heading}
              </h2>
              <div className="mt-8">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all duration-300 group"
                >
                  {ctaText}
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
            </div>

            {/* Right */}
            <div>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

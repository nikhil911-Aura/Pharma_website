"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProductHeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ProductHero({
  title,
  description,
  ctaText = "Schedule a Demo",
  ctaHref = "/schedule-demo",
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      {/* Gradient accent at top */}

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="mt-10">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300 group shadow-xl shadow-gray-900/15"
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
        </motion.div>
      </div>
    </section>
  );
}

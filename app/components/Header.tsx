"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const qualityProducts = [
  { name: "AI Investigator", desc: "Close Investigations Faster", href: "/products/quality/ai-investigator" },
  { name: "FDA Tracker", desc: "Track FDA 483 Observations", href: "/products/quality/fda-tracker" },
  { name: "Cleaning Validation", desc: "FDA Ready Cleaning Validations", href: "/products/quality/cleaning-validation" },

];

const laboratoryProducts = [
  { name: "Environmental Monitoring", desc: "Plan, Track & Analyse EM Samples", href: "/products/laboratory/environmental-monitoring" },
  { name: "Instrument Logbooks", desc: "Track Instrument Usage & Inventory", href: "/products/laboratory/instrument-logbooks" },
];

const ProductIcon = ({ color = "#3b82f6" }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LabIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v7l4 8H5l4-8V3z" />
    <path d="M9 3h6" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("quality");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileProductsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const tabContent = activeTab === "quality"
    ? {
        title: "Quality Management System",
        description: "Accelerate investigations, enforce compliance, and automate validation with AI-driven tools.",
        products: qualityProducts,
        href: "/products/quality",
        iconColor: "#3b82f6",
      }
    : {
        title: "Laboratory Execution System",
        description: "Enhance lab efficiency with automated environmental monitoring and intelligent instrument management.",
        products: laboratoryProducts,
        href: "/products/laboratory",
        iconColor: "#10b981",
      };

  const tabs = [
    { id: "quality", label: "QUALITY" },
    { id: "laboratory", label: "LABORATORY" },
  ];

  return (
    <>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 sm:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z" fill="#0f172a" />
                <path d="M20 8C15 8 12 12 12 16C12 20 15 24 20 30C25 24 28 20 28 16C28 12 25 8 20 8Z" fill="white" />
                <path d="M20 12C17.5 12 16 14 16 16C16 18 17.5 20 20 24C22.5 20 24 18 24 16C24 14 22.5 12 20 12Z" fill="#0f172a" />
              </svg>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Leucine
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/products"
                  className="flex items-center gap-1.5 text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
                >
                  Products
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Link>

                <AnimatePresence>
                  {activeDropdown === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      style={{ width: "min(800px, calc(100vw - 48px))" }}
                      onMouseEnter={() => handleMouseEnter("products")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="flex">
                          {/* Left sidebar tabs */}
                          <div className="w-[180px] xl:w-[200px] border-r border-gray-100 py-4 shrink-0">
                            {tabs.map((tab) => (
                              <button
                                key={tab.id}
                                onMouseEnter={() => setActiveTab(tab.id)}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center justify-between px-4 xl:px-5 py-3 text-xs font-semibold tracking-wide transition-all ${
                                  activeTab === tab.id
                                    ? "text-gray-900 bg-gray-50 border-l-2 border-blue-600"
                                    : "text-gray-400 hover:text-gray-600 border-l-2 border-transparent"
                                }`}
                              >
                                {tab.label}
                                {activeTab === tab.id && (
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                  </svg>
                                )}
                              </button>
                            ))}
                          </div>

                          {/* Center content */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeTab}
                              initial={{ opacity: 0, x: 6 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -6 }}
                              transition={{ duration: 0.15 }}
                              className="flex-1 p-5 xl:p-6 min-w-0"
                            >
                              <Link href={tabContent.href} className="group">
                                <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                  {tabContent.title}
                                </h3>
                              </Link>
                              <p className="text-xs xl:text-sm text-gray-500 mb-4 leading-relaxed">
                                {tabContent.description}
                              </p>
                              <div className="grid grid-cols-2 gap-2 xl:gap-3">
                                {tabContent.products.map((product) => (
                                  <Link
                                    key={product.name}
                                    href={product.href}
                                    className="flex items-start gap-2.5 p-2.5 xl:p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                      {activeTab === "quality" ? <ProductIcon /> : <LabIcon />}
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-xs xl:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                                        {product.name}
                                      </div>
                                      <div className="text-[10px] xl:text-xs text-gray-500 mt-0.5 leading-tight">
                                        {product.desc}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          </AnimatePresence>

                          {/* Right sidebar */}
                          <div className="w-[180px] xl:w-[220px] bg-gray-50 p-4 xl:p-5 flex flex-col justify-center shrink-0 border-l border-gray-100">
                            <div className="rounded-xl overflow-hidden mb-3">
                              <div className="h-[100px] xl:h-[120px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white">
                                <div className="text-center">
                                  <div className="text-[9px] xl:text-[10px] uppercase tracking-wider opacity-70 mb-1">Experience</div>
                                  <div className="text-sm font-bold">Centre</div>
                                </div>
                              </div>
                            </div>
                            <Link href="#" className="text-xs xl:text-sm font-semibold text-gray-900 flex items-center gap-1 hover:text-blue-600 transition-colors leading-tight">
                              Visit Leucine&apos;s Experience Center
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </Link>
                            <p className="text-[10px] xl:text-xs text-gray-500 mt-2 leading-relaxed">
                              Discover our integrated AI-powered platform that helps you plan, execute, &amp; optimize every batch
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Us */}
              <Link
                href="/about"
                className="text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                About Us
              </Link>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* CTA — visible on md+ */}
              <Link
                href="/schedule-demo"
                className="hidden md:flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group whitespace-nowrap"
              >
                Schedule a Demo
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {mobileOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 sm:px-6 py-5 space-y-1 max-h-[calc(100svh-120px)] overflow-y-auto">

                {/* Products accordion */}
                <div>
                  <button
                    className="flex items-center justify-between w-full py-3 text-sm font-semibold text-gray-900"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  >
                    Products
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {/* Tabs */}
                        <div className="flex gap-2 mb-3 px-1">
                          {tabs.map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                                activeTab === tab.id
                                  ? "bg-gray-900 text-white"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        {/* Category link */}
                        <Link
                          href={tabContent.href}
                          className="block px-3 py-2 mb-1 text-xs font-semibold text-blue-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          View all {activeTab === "quality" ? "Quality" : "Laboratory"} products →
                        </Link>

                        {/* Products list */}
                        <div className="space-y-1 mb-3">
                          {tabContent.products.map((product) => (
                            <Link
                              key={product.name}
                              href={product.href}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                                {activeTab === "quality" ? <ProductIcon /> : <LabIcon />}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 leading-tight">{product.name}</div>
                                <div className="text-xs text-gray-500 leading-tight">{product.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100" />

                {/* About Us */}
                <Link
                  href="/about"
                  className="block py-3 text-sm font-semibold text-gray-900"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>

                <div className="h-px bg-gray-100" />

                {/* CTA */}
                <div className="pt-2 pb-1">
                  <Link
                    href="/schedule-demo"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    Schedule a Demo
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
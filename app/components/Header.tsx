"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const qualityProducts = [
  { name: "AI Investigator", desc: "Resolve Alerts Swiftly", href: "/products/quality/ai-investigator" },
  { name: "FDA Tracker", desc: "Watch Global Guidelines", href: "/products/quality/fda-tracker" },
  { name: "Cleaning Validation", desc: "Audit-Proof Hygiene Logs", href: "/products/quality/cleaning-validation" },
];

const manufacturingProducts = [
  { name: "Batch Execution", desc: "Smart Process Orchestration", href: "/products/manufacturing/batch-execution" },
  { name: "Batch Intelligence", desc: "Achieve Max Throughput", href: "/products/manufacturing/batch-intelligence" },
  { name: "Production Logbooks", desc: "Synchronize Operations Data", href: "/products/manufacturing/production-logbooks" },
];

const ProductIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ManufacturingIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="18" rx="2" />
    <path d="M8 7v10" />
    <path d="M12 7v10" />
    <path d="M16 7v10" />
  </svg>
);

/* ──────────────────────────────────────────
   DROPDOWN PANEL — shared by both nav items
   ────────────────────────────────────────── */
function DropdownPanel({
  title,
  description,
  href,
  products,
  icon,
  accentColor,
  onClose,
}: {
  title: string;
  description: string;
  href: string;
  products: typeof qualityProducts;
  icon: React.ReactNode;
  accentColor: string;
  onClose: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="flex">
        {/* Main content */}
        <div className="flex-1 p-5 xl:p-6">
          <Link href={href} className="group" onClick={onClose}>
            <h3 className="text-base xl:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-xs xl:text-sm text-gray-500 mb-5 leading-relaxed">
            {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xl:gap-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="flex items-start gap-2.5 p-2.5 xl:p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                onClick={onClose}
              >
                <div
                  className="w-7 h-7 xl:w-8 xl:h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accentColor}12` }}
                >
                  {icon}
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
        </div>


      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   HEADER
   ────────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileQualityOpen, setMobileQualityOpen] = useState(false);
  const [mobileManufacturingOpen, setMobileManufacturingOpen] = useState(false);
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
        setMobileQualityOpen(false);
        setMobileManufacturingOpen(false);
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

  return (
    <>
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
                SYNCOMX
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">

              {/* Quality Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("quality")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/products/quality"
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors py-2 ${
                    activeDropdown === "quality" ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Quality
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-200 ${activeDropdown === "quality" ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Link>

                <AnimatePresence>
                  {activeDropdown === "quality" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      style={{ width: "min(700px, calc(100vw - 48px))" }}
                      onMouseEnter={() => handleMouseEnter("quality")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <DropdownPanel
                        title="Quality Assurance Hub"
                        description="Streamline root cause analysis, maintain robust audit readiness, and transform digital sanitation workflows safely."
                        href="/products/quality"
                        products={qualityProducts}
                        icon={<ProductIcon />}
                        accentColor="#3b82f6"
                        onClose={() => setActiveDropdown(null)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Manufacturing Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("manufacturing")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/products/manufacturing"
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors py-2 ${
                    activeDropdown === "manufacturing" ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Manufacturing
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-200 ${activeDropdown === "manufacturing" ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Link>

                <AnimatePresence>
                  {activeDropdown === "manufacturing" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      style={{ width: "min(700px, calc(100vw - 48px))" }}
                      onMouseEnter={() => handleMouseEnter("manufacturing")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <DropdownPanel
                        title="Manufacturing Execution Engine"
                        description="Command line operations smoothly with smart activity orchestration, continuous output monitoring, and digital tracking."
                        href="/products/manufacturing"
                        products={manufacturingProducts}
                        icon={<ManufacturingIcon />}
                        accentColor="#6366f1"
                        onClose={() => setActiveDropdown(null)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* CTA — visible on md+ */}
              <Link
                href="/schedule-demo"
                className="hidden md:flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group whitespace-nowrap"
              >
                Schedule Your Tour
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

        {/* ── Mobile Menu ── */}
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

                {/* Quality accordion */}
                <MobileAccordion
                  label="Quality"
                  isOpen={mobileQualityOpen}
                  onToggle={() => setMobileQualityOpen(!mobileQualityOpen)}
                  products={qualityProducts}
                  icon={<ProductIcon />}
                  viewAllHref="/products/quality"
                  viewAllLabel="View all Quality products"
                  onClose={() => setMobileOpen(false)}
                />

                <div className="h-px bg-gray-100" />

                {/* Manufacturing accordion */}
                <MobileAccordion
                  label="Manufacturing"
                  isOpen={mobileManufacturingOpen}
                  onToggle={() => setMobileManufacturingOpen(!mobileManufacturingOpen)}
                  products={manufacturingProducts}
                  icon={<ManufacturingIcon />}
                  viewAllHref="/products/manufacturing"
                  viewAllLabel="View all Manufacturing products"
                  onClose={() => setMobileOpen(false)}
                />

                <div className="h-px bg-gray-100" />

                {/* CTA */}
                <div className="pt-2 pb-1">
                  <Link
                    href="/schedule-demo"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    Schedule Your Tour
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

/* ──────────────────────────────────────────
   MOBILE ACCORDION
   ────────────────────────────────────────── */
function MobileAccordion({
  label,
  isOpen,
  onToggle,
  products,
  icon,
  viewAllHref,
  viewAllLabel,
  onClose,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  products: typeof qualityProducts;
  icon: React.ReactNode;
  viewAllHref: string;
  viewAllLabel: string;
  onClose: () => void;
}) {
  return (
    <div>
      <button
        className="flex items-center justify-between w-full py-3 text-sm font-semibold text-gray-900"
        onClick={onToggle}
      >
        {label}
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {/* Category link */}
            <Link
              href={viewAllHref}
              className="block px-3 py-2 mb-1 text-xs font-semibold text-blue-600"
              onClick={onClose}
            >
              {viewAllLabel} →
            </Link>

            {/* Products list */}
            <div className="space-y-1 mb-3">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    {icon}
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
  );
}
"use client";

import Link from "next/link";

const productLinks = [
  { name: "Anomaly Detective", href: "/products/quality/ai-investigator" },
  { name: "Regulation Monitor", href: "/products/quality/fda-tracker" },
  { name: "Sanitization Check", href: "/products/quality/cleaning-validation" },
  { name: "Run Engine", href: "/products/manufacturing/batch-execution" },
  { name: "Process Analytics", href: "/products/manufacturing/batch-intelligence" },
];

const qualityLinks = [
  { name: "Quality Assurance Hub", href: "/products/quality" },
  { name: "Manufacturing Execution Engine", href: "/products/manufacturing" },
  { name: "Market Complaints", href: "/products/quality/market-complaints" },
  { name: "Digital Records", href: "/products/manufacturing/production-logbooks" },
];

const aboutLinks = [
  { name: "About NovaRx", href: "/about" },
  { name: "All Products", href: "/products" },
  { name: "Careers", href: "#", badge: "We are Hiring !" },
  { name: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left side - Branding */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <svg
                width="28"
                height="28"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4C12 4 8 10 8 16C8 22 12 28 20 36C28 28 32 22 32 16C32 10 28 4 20 4Z"
                  fill="white"
                />
                <path
                  d="M20 8C15 8 12 12 12 16C12 20 15 24 20 30C25 24 28 20 28 16C28 12 25 8 20 8Z"
                  fill="#0b1221"
                />
                <path
                  d="M20 12C17.5 12 16 14 16 16C16 18 17.5 20 20 24C22.5 20 24 18 24 16C24 14 22.5 12 20 12Z"
                  fill="white"
                />
              </svg>
              <span className="text-xl font-bold text-white tracking-tight">
                NovaRx
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Accelerate the Next Era of Life Sciences Production.
            </p>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-5">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-5">
              Solutions
            </h4>
            <ul className="space-y-3">
              {qualityLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white mb-5">About</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="text-red-400 font-semibold text-xs">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© Copyright 2026 NovaRx</p>
          <div className="flex items-center gap-5">
            {/* YouTube */}
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="YouTube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            {/* LinkedIn */}
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            {/* X (Twitter) */}
            <Link
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

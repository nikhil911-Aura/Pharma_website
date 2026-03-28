"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "PHARMACORP", style: "text-lg font-bold tracking-[0.15em] uppercase" },
  { name: "BIO-GEN", style: "text-2xl font-black tracking-wide uppercase" },
  { name: "synthia", style: "text-2xl font-bold italic" },
  { name: "vitas", style: "text-2xl font-bold tracking-wider lowercase" },
  { name: "MedLife", style: "text-xl font-bold" },
  { name: "LUMINA", style: "text-2xl font-black tracking-[0.15em] uppercase" },
  { name: "ApexLife", style: "text-xl font-semibold tracking-wide" },
  { name: "Evolva", style: "text-2xl font-bold" },
];

export default function TrustBar() {
  // Double the logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-10 md:py-14 bg-gray-50 overflow-hidden border-t border-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          {/* Fade gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <div className="marquee-track flex items-center shrink-0">
              {allLogos.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex items-center justify-center shrink-0 mx-10 md:mx-14"
                >
                  <span
                    className={`text-gray-800 whitespace-nowrap opacity-30 hover:opacity-60 transition-opacity duration-300 select-none ${logo.style}`}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

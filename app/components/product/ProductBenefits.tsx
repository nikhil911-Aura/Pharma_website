"use client";

import { motion } from "framer-motion";

export interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductBenefitsProps {
  heading: string;
  benefits: BenefitItem[];
}

export default function ProductBenefits({
  heading,
  benefits,
}: ProductBenefitsProps) {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 text-center leading-tight tracking-tight mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-5 text-gray-700">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

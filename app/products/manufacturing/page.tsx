"use client";

import ProductHero from "@/app/components/product/ProductHero";
import ProductTabs from "@/app/components/product/ProductTabs";
import type { ProductTabItem } from "@/app/components/product/ProductTabs";
import ProductBenefits from "@/app/components/product/ProductBenefits";
import ConsultationCTA from "@/app/components/product/ConsultationCTA";
import {
  BatchExecutionMockup,
  BatchIntelligenceMockup,
  ProductionLogbooksMockup,
} from "@/app/components/product/DashboardMockup";

const mesTabs: ProductTabItem[] = [
  {
    id: "batch-execution",
    label: "Batch Execution",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    heading: "AI-Powered Electronic Batch Records, Built for Compliance",
    description:
      "Digitize and standardize manufacturing workflows. Ensure accurate material dispensing, enforce process interlocks, and capture real-time execution data for error-free batches.",
    learnMoreHref: "/products/manufacturing/batch-execution",
    mockupContent: <BatchExecutionMockup />,
  },
  {
    id: "batch-intelligence",
    label: "Batch Intelligence",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    heading: "Intelligent Manufacturing Insights — On Time In Full",
    description:
      "Monitor production in real-time, detect potential delays early, and take proactive corrective actions to optimize efficiency and deliver every batch on time.",
    learnMoreHref: "/products/manufacturing/batch-intelligence",
    mockupContent: <BatchIntelligenceMockup />,
  },
  {
    id: "production-logbooks",
    label: "Production Logbooks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M12 6v6" />
        <path d="M9 9h6" />
      </svg>
    ),
    heading: "Digital Production Logbooks — Always Audit-Ready",
    description:
      "Digitally capture cleaning and usage logs, maintenance records, and changeovers to ensure a seamless, audit-ready production process.",
    learnMoreHref: "/products/manufacturing/production-logbooks",
    mockupContent: <ProductionLogbooksMockup />,
  },
];

const mesBenefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Faster Batch Start",
    description:
      "Automated readiness checks for materials, equipment, and operators ensure smooth batch initiation.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Smarter Manufacturing",
    description:
      "AI-driven intelligence detects risks early and keeps every batch on schedule.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "Effortless Compliance",
    description:
      "Digital records and tamper-proof audit trails simplify inspections and ensure regulatory alignment.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <ProductHero
        title="AI-Powered MES Software for Pharma Manufacturing"
        description="Optimize every stage of production with AI-powered batch execution, real-time intelligence, and digital logbooks — ensuring compliance and accelerating release."
      />

      <ProductTabs tabs={mesTabs} />

      <ProductBenefits
        heading="Streamline Manufacturing from Batch Start to Release"
        benefits={mesBenefits}
      />

      <ConsultationCTA />
    </>
  );
}

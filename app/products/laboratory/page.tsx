"use client";

import ProductHero from "@/app/components/product/ProductHero";
import ProductTabs from "@/app/components/product/ProductTabs";
import type { ProductTabItem } from "@/app/components/product/ProductTabs";
import ProductBenefits from "@/app/components/product/ProductBenefits";
import ConsultationCTA from "@/app/components/product/ConsultationCTA";
import {
  EnvironmentalMonitoringMockup,
  InstrumentLogbooksMockup,
} from "@/app/components/product/DashboardMockup";

const lesTabs: ProductTabItem[] = [
  {
    id: "environmental-monitoring",
    label: "Environmental Monitoring",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    heading: "Plan, Track & Analyze Samples to Reduce Contamination Risk",
    description:
      "Automate sampling schedules, track microbial trends in real-time, manage excursions intelligently, and ensure full compliance with environmental monitoring standards.",
    learnMoreHref: "/products/laboratory/environmental-monitoring",
    mockupContent: <EnvironmentalMonitoringMockup />,
  },
  {
    id: "instrument-logbooks",
    label: "Instrument Logbooks",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M12 6v6" />
        <path d="M9 9h6" />
      </svg>
    ),
    heading: "Digitize Instrument Usage & Ensure Audit-Ready Compliance",
    description:
      "Replace paper-based logbooks with intelligent digital records. Track calibration, usage, and maintenance schedules to prevent disruptions and ensure complete traceability.",
    learnMoreHref: "/products/laboratory/instrument-logbooks",
    mockupContent: <InstrumentLogbooksMockup />,
  },
];

const lesBenefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Reduced Contamination Risk",
    description:
      "Automated environmental monitoring helps prevent microbial risks before they escalate.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "End-to-End Traceability",
    description:
      "Digital instrument records ensure complete visibility across calibration, maintenance, and usage.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "Audit-Ready Compliance",
    description:
      "Electronic signatures, tamper-proof audit trails, and structured reports simplify FDA inspections.",
  },
];

export default function LaboratoryPage() {
  return (
    <>
      <ProductHero
        title="Minimize Contamination in Production & Maintain Full Instrument Compliance."
        description="Plan, track, and analyze environmental samples to reduce contamination risks, while digitizing instrument logbooks to ensure traceability and audit readiness."
      />

      <ProductTabs tabs={lesTabs} />

      <ProductBenefits
        heading="One Platform to Control Contamination and Ensure Instrument Compliance"
        benefits={lesBenefits}
      />

      <ConsultationCTA />
    </>
  );
}

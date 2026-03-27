"use client";

import ProductHero from "@/app/components/product/ProductHero";
import ProductTabs from "@/app/components/product/ProductTabs";
import type { ProductTabItem } from "@/app/components/product/ProductTabs";
import ProductBenefits from "@/app/components/product/ProductBenefits";
import ConsultationCTA from "@/app/components/product/ConsultationCTA";
import {
  AIInvestigatorMockup,
  FDATrackerMockup,
  CleaningValidationMockup,
} from "@/app/components/product/DashboardMockup";

const qmsTabs: ProductTabItem[] = [
  {
    id: "ai-investigator",
    label: "AI Investigator",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    heading: "AI-Powered Investigations, Faster CAPAs, Lower Risks",
    description:
      "Standardize investigations with AI-driven RCA, generate science-backed CAPAs, and reduce recurrence to protect quality.",
    learnMoreHref: "/products/quality/ai-investigator",
    mockupContent: <AIInvestigatorMockup />,
  },
  {
    id: "fda-tracker",
    label: "FDA Tracker",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    heading: "Proactive FDA Readiness, Always Audit-Prepared",
    description:
      "Track FDA 483 observations, analyze warning letter trends, and benchmark compliance posture against the industry.",
    learnMoreHref: "/products/quality/fda-tracker",
    mockupContent: <FDATrackerMockup />,
  },
  {
    id: "cleaning-validation",
    label: "Cleaning Validation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    heading: "Effortless Cleaning Validation, 100% FDA Compliant",
    description:
      "Automate HBEL-based residue calculations, track residue data in real-time, and auto-generate validation reports.",
    learnMoreHref: "/products/quality/cleaning-validation",
    mockupContent: <CleaningValidationMockup />,
  },
];

const qmsBenefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Consistent Investigations",
    description:
      "AI ensures every investigation follows a standardized, science-based approach for reliable outcomes.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Audit Readiness",
    description:
      "Automated reports, digital records, and proactive monitoring ensure every site is inspection-ready.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "Effortless Validation",
    description:
      "Residue calculations, risk assessments, and compliant reports—automated for speed and accuracy.",
  },
];

export default function QualityPage() {
  return (
    <>
      <ProductHero
        title="AI-Powered QMS Software for Pharma Compliance"
        description="Ensure seamless regulatory compliance and faster resolution of deviations. Standardize investigations, automate validation, and stay audit-ready."
      />

      <ProductTabs tabs={qmsTabs} />

      <ProductBenefits
        heading="Unifying Investigations, CAPAs, and Validation in One QMS"
        benefits={qmsBenefits}
      />

      <ConsultationCTA />
    </>
  );
}

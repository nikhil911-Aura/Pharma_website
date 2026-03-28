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
    heading: "Algorithmic Deviation Resolution: Swift & Decisive",
    description:
      "Systemize discrepancy hunting via AI-powered Root Cause Analysis, forge bulletproof CAPAs, and secure untarnished compliance.",
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
    heading: "Preemptive Regulatory Alignment, Always Audit-Ready",
    description:
      "Monitor international guidelines, dissect citation trends, and benchmark your facility's posture securely against aggregate industry data.",
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
    heading: "Frictionless Sanitization Auditing, Completely Assured",
    description:
      "Digitize residue limits, monitor hygienic parameters live, and auto-compile extensive validation dossiers.",
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
    title: "Uniform Discrepancy Parsing",
    description:
      "Algorithmic rules maintain a strict, scientific framework for every deviation.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Instant Verification",
    description:
      "Generated dossiers and live monitoring guarantee absolute inspection-readiness.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
    title: "Streamlined Assurances",
    description:
      "Calculations, threat matrices, and compliant logs—assembled autonomously for supreme accuracy.",
  },
];

export default function QualityPage() {
  return (
    <>
      <ProductHero
        title="Next-Generation Quality Management System"
        description="Secure unwavering compliance and rapid exception processing. Systematize resolution, digitize validation, and operate perpetually ready for oversight."
      />

      <ProductTabs tabs={qmsTabs} />

      <ProductBenefits
        heading="Converging Root Cause Analysis, Corrections, and Audits Under One Engine"
        benefits={qmsBenefits}
      />

      <ConsultationCTA />
    </>
  );
}

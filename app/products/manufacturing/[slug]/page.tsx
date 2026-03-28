"use client";

import { useParams, notFound } from "next/navigation";
import ProductDetailPage from "@/app/components/product/ProductDetailPage";
import {
  BatchExecutionHeroDashboard,
  BatchIntelligenceHeroDashboard,
  ProductionLogbooksHeroDashboard,
  BatchWorkflowMockup,
  OTIFDashboardMockup,
  LogbookEntryMockup,
} from "@/app/components/product/DetailPageMockups";

/* ────────────────────────────────────────────
   ICON HELPERS
   ──────────────────────────────────────────── */
const Icon = ({ d }: { d: string }) => (
  <svg
    width="22" height="22" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);

/* ────────────────────────────────────────────
   PRODUCT DATA
   ──────────────────────────────────────────── */
const products: Record<
  string,
  React.ComponentProps<typeof ProductDetailPage>
> = {
  /* ── BATCH EXECUTION ── */
  "batch-execution": {
    badge: "Batch Execution",
    heroHeading:
      "AI-Powered Electronic Batch Records,\nBuilt for Pharma Compliance",
    heroDescription:
      "Digitize and standardize manufacturing workflows. Ensure accurate material dispensing, enforce process interlocks, and capture real-time execution data for error-free batches.",
    heroMockup: <BatchExecutionHeroDashboard />,
    benefitsHeading:
      "Eliminate Manual Errors. Accelerate Batch Execution.",
    benefitsSubtext:
      "Auto-enforced SOPs, barcode-verified materials, and tamper-proof digital records — all on one platform.",
    benefits: [
      {
        icon: <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: "Process Interlocks",
        description:
          "Automated checks prevent wrong materials, unapproved operators, and out-of-sequence steps.",
      },
      {
        icon: <Icon d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />,
        title: "Digital Batch Records",
        description:
          "100% paperless, GxP-compliant batch records with electronic signatures and full audit trails.",
      },
      {
        icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />,
        title: "Real-Time Data Capture",
        description:
          "Automatic capture of critical process parameters — temperature, pressure, RPM — at every step.",
      },
    ],
    features: [
      {
        title: "Workflow-Driven Execution with Built-in Interlocks",
        description:
          "Guide operators step-by-step through batch procedures with auto-enforced interlocks. Material barcode scanning, equipment readiness checks, and operator authentication all happen automatically before each step can proceed.",
        mockup: <BatchWorkflowMockup />,
      },
      {
        title: "Exception-Based Review for Faster Batch Release",
        description:
          "Eliminate lengthy manual reviews. Our AI flags only the deviations and exceptions, allowing reviewers to focus on what matters and release batches up to 40% faster.",
        mockup: <OTIFDashboardMockup />,
      },
    ],
    resources: [
      {
        tag: "Guide",
        title: "How to Digitize Batch Records in Pharma Manufacturing",
        href: "#",
      },
      {
        tag: "Case Study",
        title: "40% Faster Batch Release with Electronic Batch Records",
        href: "#",
      },
      {
        tag: "Whitepaper",
        title: "The Future of AI-Powered Batch Execution",
        href: "#",
      },
    ],
    faqs: [
      {
        question: "How does Leucine ensure data integrity in electronic batch records?",
        answer:
          "Every action is captured with a tamper-proof audit trail including timestamps, user details, and electronic signatures. The system is fully 21 CFR Part 11 compliant.",
      },
      {
        question: "Can Leucine integrate with existing ERP and MES systems?",
        answer:
          "Yes, Leucine integrates with SAP, Oracle, and other ERP systems via standard APIs. We also support OPC-UA for equipment-level integration.",
      },
      {
        question: "What types of process interlocks does Leucine support?",
        answer:
          "Material verification (barcode/RFID), operator authentication, equipment readiness, environmental condition checks, and sequential step enforcement.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "A typical MES module deployment takes 8–12 weeks, including configuration, validation, and training.",
      },
    ],
  },

  /* ── BATCH INTELLIGENCE ── */
  "batch-intelligence": {
    badge: "Batch Intelligence",
    heroHeading:
      "Deliver Every Batch\nOn Time, In Full",
    heroDescription:
      "Monitor production in real-time, detect potential delays early, and take proactive corrective actions to optimize efficiency across every manufacturing line.",
    heroMockup: <BatchIntelligenceHeroDashboard />,
    benefitsHeading:
      "Proactive Manufacturing Intelligence — Not Reactive Firefighting",
    benefitsSubtext:
      "AI-driven insights transform your approach from fixing problems to preventing them.",
    benefits: [
      {
        icon: <Icon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
        title: "OTIF Tracking",
        description:
          "Real-time On Time In Full metrics with drill-down by product, line, and plant.",
      },
      {
        icon: <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: "Predictive Delays",
        description:
          "AI models predict batch delays 24–48 hours in advance, giving you time to act before it's too late.",
      },
      {
        icon: <Icon d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
        title: "Facility Visibility",
        description:
          "Centralised dashboard showing equipment status, batch progress, and resource utilisation across all lines.",
      },
    ],
    features: [
      {
        title: "Real-Time Batch Tracking & Risk Scoring",
        description:
          "Every batch is tracked from start to release with an AI-generated risk score. Automated alerts flag batches that are likely to miss their targets, so teams can intervene early.",
        mockup: <OTIFDashboardMockup />,
      },
      {
        title: "Data-Driven Cycle Time Optimisation",
        description:
          "Analyse historical batch data to identify bottlenecks, optimise equipment changeovers, and reduce average cycle time by up to 20%.",
        mockup: <BatchWorkflowMockup />,
      },
    ],
    resources: [
      {
        tag: "Guide",
        title: "Improving OTIF in Pharmaceutical Manufacturing",
        href: "#",
      },
      {
        tag: "Webinar",
        title: "Predictive Analytics for Batch Manufacturing",
        href: "#",
      },
      {
        tag: "Case Study",
        title: "How a Top-10 Pharma Achieved 95% OTIF with Leucine",
        href: "#",
      },
    ],
    faqs: [
      {
        question: "What data sources does Batch Intelligence use?",
        answer:
          "It aggregates data from batch records, equipment sensors (OPC-UA), ERP schedules, and historical production data to generate insights.",
      },
      {
        question: "How accurate are the delay predictions?",
        answer:
          "Our models achieve 85%+ accuracy for 24-hour predictions. Accuracy improves as more historical data is collected.",
      },
      {
        question: "Can I customise the OTIF dashboard?",
        answer:
          "Yes, dashboards are fully configurable. You can filter by plant, product line, time period, and custom KPIs.",
      },
    ],
  },

  /* ── PRODUCTION LOGBOOKS ── */
  "production-logbooks": {
    badge: "Production Logbooks",
    heroHeading:
      "Digital Production Logbooks\n— Always Audit-Ready",
    heroDescription:
      "Digitally capture cleaning records, usage logs, maintenance activities, and changeovers. Ensure a seamless, audit-ready production process with tamper-proof electronic records.",
    heroMockup: <ProductionLogbooksHeroDashboard />,
    benefitsHeading:
      "From Paper Logbooks to Digital — in Weeks, Not Months",
    benefitsSubtext:
      "Configurable digital logbooks that match your existing SOPs while eliminating paper-based inefficiencies.",
    benefits: [
      {
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
        title: "Equipment Logbooks",
        description:
          "Track usage, cleaning, and maintenance of every piece of equipment with e-signatures.",
      },
      {
        icon: <Icon d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
        title: "Audit-Ready Records",
        description:
          "21 CFR Part 11 compliant records with electronic signatures, timestamps, and complete audit trails.",
      },
      {
        icon: <Icon d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
        title: "Seamless Changeover",
        description:
          "Built-in changeover checklists ensure nothing is missed when switching between products or campaigns.",
      },
    ],
    features: [
      {
        title: "Configurable Logbook Templates Matching Your SOPs",
        description:
          "Create digital logbooks that mirror your existing paper-based procedures. Drag and drop fields, add validation rules, and deploy new logbooks without IT involvement.",
        mockup: <LogbookEntryMockup />,
      },
      {
        title: "Real-Time Equipment Status & History",
        description:
          "See the complete lifecycle of every piece of equipment — from last cleaning to next maintenance window — in a single, searchable timeline.",
        mockup: <BatchWorkflowMockup />,
      },
    ],
    resources: [
      {
        tag: "Guide",
        title: "Transitioning from Paper to Digital Logbooks",
        href: "#",
      },
      {
        tag: "Case Study",
        title: "Eliminating Paper Logbooks at a Multi-Site Pharma Company",
        href: "#",
      },
      {
        tag: "Whitepaper",
        title: "Best Practices for Equipment Cleaning Verification",
        href: "#",
      },
    ],
    faqs: [
      {
        question: "Can we customise logbook templates?",
        answer:
          "Yes, logbook templates are fully configurable. You can add custom fields, validation rules, conditional logic, and approval workflows.",
      },
      {
        question: "How does digitisation help with FDA inspections?",
        answer:
          "Digital logbooks provide instant search, complete audit trails, and tamper-proof records — drastically reducing inspection preparation time.",
      },
      {
        question: "Can production logbooks integrate with our CMMS?",
        answer:
          "Yes, we integrate with popular CMMS platforms to sync maintenance schedules and work orders automatically.",
      },
    ],
  },
};

/* ────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────── */
export default function ManufacturingProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const data = products[slug];
  if (!data) return notFound();

  return <ProductDetailPage {...data} />;
}

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
      "Next-Gen Operation Flows,\nDesigned for Strict Adherence",
    heroDescription:
      "Deploy unified execution systems. Validate allocations, enforce constraints, and log all events to secure continuous delivery.",
    heroMockup: <BatchExecutionHeroDashboard />,
    benefitsHeading:
      "Eradicate Mistakes. Fast-Track Operations.",
    benefitsSubtext:
      "System-guided procedures, auto-validated components, and secure activity logs — converged in a singular interface.",
    benefits: [
      {
        icon: <Icon d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: "Constraint Enforcement",
        description:
          "Intelligent gating safeguards against incorrect resources, untrained staff, and out-of-order execution.",
      },
      {
        icon: <Icon d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />,
        title: "Paperless Run History",
        description:
          "Fully digitized, standards-compliant execution histories featuring electronic authorizations and exhaustive tracking.",
      },
      {
        icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />,
        title: "Live Telemetry",
        description:
          "Instant logging of essential operating parameters — environment, settings, speed — at every milestone.",
      },
    ],
    features: [
      {
        title: "Guided Execution Featuring Intrinsic Safeguards",
        description:
          "Direct personnel linearly through processes using mandatory gating mechanisms. Component scanning, asset checks, and credential validations fire seamlessly prior to any progression.",
        mockup: <BatchWorkflowMockup />,
      },
      {
        title: "Targeted Deviation Reviews For Swift Dispatch",
        description:
          "Remove tedious document scouring. Our engine surfaces only outliers and protocol breaks, enabling supervisors to rapidly process final sign-offs.",
        mockup: <OTIFDashboardMockup />,
      },
    ],
    resources: [
      {
        tag: "Guide",
        title: "Digital Transition Guide for High-Stakes Operations",
        href: "#",
      },
      {
        tag: "Case Study",
        title: "Use Case: Accelerating Time-To-Market via Systemic Execution",
        href: "#",
      },
      {
        tag: "Whitepaper",
        title: "The Horizon of Integrated Execution",
        href: "#",
      },
    ],
    faqs: [
      {
        question: "How does SYNCOMX safeguard data integrity within operational histories?",
        answer:
          "Every action is captured with a tamper-proof audit trail including timestamps, user details, and electronic signatures. The system is fully compliant with global electronic record standards.",
      },
      {
        question: "Is SYNCOMX compatible with legacy systems?",
        answer:
          "Yes, SYNCOMX integrates with SAP, Oracle, and other ERP systems via standard APIs. We also support OPC-UA for equipment-level integration.",
      },
      {
        question: "What gating features does SYNCOMX deploy?",
        answer:
          "Material verification (barcode/RFID), operator authentication, equipment readiness, environmental condition checks, and sequential step enforcement.",
      },
      {
        question: "What is the expected deployment timeline?",
        answer:
          "A typical module deployment takes 8–12 weeks, including configuration, validation, and training.",
      },
    ],
  },

  /* ── BATCH INTELLIGENCE ── */
  "batch-intelligence": {
    badge: "Batch Intelligence",
    heroHeading:
      "Ensure Punctual & Complete\nDeliveries, Every Run",
    heroDescription:
      "Oversee operations dynamically, flag delays before they escalate, and leverage autonomous course-corrections to maintain supreme output regularity.",
    heroMockup: <BatchIntelligenceHeroDashboard />,
    benefitsHeading:
      "Anticipatory Analytics — Moving Beyond Reaction",
    benefitsSubtext:
      "Algorithmic foresight shifts operational behavior from putting out fires to structural prevention.",
    benefits: [
      {
        icon: <Icon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
        title: "Performance Trajectory",
        description:
          "Live execution metrics aggregated and drillable by stage, unit, and geographic site.",
      },
      {
        icon: <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: "Delay Forecasting",
        description:
          "Analytical engines project slowdowns hours in advance, allowing preemptive resource reallocation.",
      },
      {
        icon: <Icon d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
        title: "Ecosystem Transparency",
        description:
          "Aggregate vantage point highlighting asset utilization, phase completion, and macro-efficiency.",
      },
    ],
    features: [
      {
        title: "Live Pipeline Tracking & Threat Profiling",
        description:
          "Each cycle is monitored from ignition to sign-off alongside a dynamic threat parameter. Automatic notifications highlight jeopardized sequences for immediate remedy.",
        mockup: <OTIFDashboardMockup />,
      },
      {
        title: "Empirical Continuity Refinement",
        description:
          "Evaluate past run telemetry to uncover strictures, smooth changeovers, and condense general execution lengths significantly.",
        mockup: <BatchWorkflowMockup />,
      },
    ],
    resources: [
      {
        tag: "Guide",
        title: "Optimizing Output Dependability in Complex Factories",
        href: "#",
      },
      {
        tag: "Webinar",
        title: "Anticipatory Science in Continuous Production",
        href: "#",
      },
      {
        tag: "Case Study",
        title: "Client Success: Hitting Zenith Output Targets via SYNCOMX",
        href: "#",
      },
    ],
    faqs: [
      {
        question: "What upstream data powers Batch Intelligence?",
        answer:
          "It aggregates data from batch records, equipment sensors (OPC-UA), ERP schedules, and historical production data to generate insights.",
      },
      {
        question: "What is the reliability of the forecasting algorithms?",
        answer:
          "Our models achieve 85%+ accuracy for 24-hour predictions. Accuracy improves as more historical data is collected.",
      },
      {
        question: "Are dashboard layouts malleable?",
        answer:
          "Yes, dashboards are fully configurable. You can filter by plant, product line, time period, and custom KPIs.",
      },
    ],
  },

  /* ── PRODUCTION LOGBOOKS ── */
  "production-logbooks": {
    badge: "Production Logbooks",
    heroHeading:
      "Immutable System Logs\n— Perpetually Verified",
    heroDescription:
      "Digitize sanitation records, consumption logs, and shift transitions. Create an impenetrable, always-ready compliance structure powered by cryptographic histories.",
    heroMockup: <ProductionLogbooksHeroDashboard />,
    benefitsHeading:
      "Phase Out Paper — Complete Digital Transition Rapidly",
    benefitsSubtext:
      "Adaptable digital sheets that map directly to current protocol while excising physical friction.",
    benefits: [
      {
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
        title: "Asset Maintenance Ledgers",
        description:
          "Monitor usage, cleaning cycles, and upkeep activities via authenticated input.",
      },
      {
        icon: <Icon d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
        title: "Instant Compliance Extraction",
        description:
          "Digitally certified records enriched with timestamps, user tracking, and absolute revision history.",
      },
      {
        icon: <Icon d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
        title: "Fluid Campaign Transitions",
        description:
          "Integrated checklists verify all prerequisites are fulfilled prior to launching disparate product lines.",
      },
    ],
    features: [
      {
        title: "Malleable Templates Adapting to Core Ratios",
        description:
          "Build digital interfaces mirroring legacy standards. Arrange attributes, configure rulesets, and publish modifications without heavy engineering.",
        mockup: <LogbookEntryMockup />,
      },
      {
        title: "Live Asset Health & Retrospective",
        description:
          "Observe the macro-lifecycle of every physical asset—from previous washdown to upcoming calibration—within a searchable timeline.",
        mockup: <BatchWorkflowMockup />,
      },
    ],
    resources: [
      {
        tag: "Guide",
        title: "The Guide to Paperless Operations",
        href: "#",
      },
      {
        tag: "Case Study",
        title: "Scaling Digital Logs Across Multinational Hubs",
        href: "#",
      },
      {
        tag: "Whitepaper",
        title: "Protocols for Absolute Asset Sanitation",
        href: "#",
      },
    ],
    faqs: [
      {
        question: "Are the logging formats configurable?",
        answer:
          "Yes, logbook templates are fully configurable. You can add custom fields, validation rules, conditional logic, and approval workflows.",
      },
      {
        question: "In what ways do digital records support global audits?",
        answer:
          "Digital logbooks provide instant search, complete audit trails, and tamper-proof records — drastically reducing inspection preparation time.",
      },
      {
        question: "Is there native integration with external maintenance software?",
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

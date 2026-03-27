"use client";

import { use } from "react";
import Link from "next/link";
import ProductDetailPage from "@/app/components/product/ProductDetailPage";
import {
  EnvironmentalMonitoringHeroDashboard,
  InstrumentLogbooksHeroDashboard,
  EMSmartPlanningMockup,
  ExcursionManagementMockup,
  InstrumentCalibrationMockup,
  AuditTrailMockup,
} from "@/app/components/product/DetailPageMockups";

/* ────────────────────────────────────────────
   ICON HELPERS
   ──────────────────────────────────────────── */
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const ActivityIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const CheckDocIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M9 15l2 2 4-4" />
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const SettingsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);
const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);

/* ────────────────────────────────────────────
   PRODUCT DATA
   ──────────────────────────────────────────── */
const productPages: Record<string, React.ComponentProps<typeof ProductDetailPage>> = {
  "environmental-monitoring": {
    badge: "Environmental Monitoring",
    heroHeading: "AI-Driven Environmental Monitoring Software, Reduce Contamination Risk.",
    heroDescription:
      "Automate sampling, track microbial trends in real-time, and ensure regulatory compliance with a fully configurable, AI-powered EM platform.",
    heroMockup: <EnvironmentalMonitoringHeroDashboard />,
    benefitsHeading: "Proactive Contamination Control with Intelligent Monitoring",
    benefitsSubtext:
      "Detect risks early, manage excursions efficiently, and maintain full regulatory compliance across all cleanroom zones.",
    benefits: [
      {
        icon: <ShieldIcon />,
        title: "Reduce Contamination Risk",
        description: "Automated environmental monitoring helps prevent microbial risks before they escalate into costly production disruptions.",
      },
      {
        icon: <ActivityIcon />,
        title: "Real-Time Trend Analysis",
        description: "Track microbial trends across all zones in real-time with intelligent alerting for excursions and limit breaches.",
      },
      {
        icon: <CheckDocIcon />,
        title: "Audit-Ready Compliance",
        description: "Electronic signatures, tamper-proof audit trails, and structured reports simplify FDA inspections.",
      },
    ],
    features: [
      {
        title: "Smart Sampling Planning & Automation",
        description:
          "Automatically generate optimized sampling schedules based on zone classifications, historical data, and risk assessments. The system ensures complete coverage across all Grade A/B/C/D zones while minimizing resource waste.",
        mockup: <EMSmartPlanningMockup />,
      },
      {
        title: "Intelligent Excursion Management",
        description:
          "When out-of-limit results are detected, the system automatically triggers investigation workflows with root cause analysis tools. Track excursions from detection through corrective action and re-sampling to ensure complete closure.",
        mockup: <ExcursionManagementMockup />,
      },
      {
        title: "Comprehensive Trending & Dashboards",
        description:
          "Rich trending reports, heatmaps, and operational dashboards provide complete visibility into environmental monitoring performance. Identify contamination patterns before they become critical issues.",
        mockup: <EMSmartPlanningMockup />,
      },
    ],
    resources: [
      { tag: "Blog", title: "Environmental Monitoring Excellence Hub", href: "#" },
      { tag: "Guide", title: "EM Best Practices for Pharma Facilities", href: "#" },
      { tag: "Checklist", title: "EM Audit Readiness Checklist", href: "#" },
    ],
    faqs: [
      { question: "What types of environmental monitoring does the system support?", answer: "The system supports all standard EM methods including settle plates, active air sampling (using Andersen samplers, SAS devices), surface monitoring (contact plates, swabs), and personnel monitoring across all cleanroom grades (A, B, C, D)." },
      { question: "How does the system handle excursion investigations?", answer: "When an out-of-limit result is detected, the system automatically triggers a configurable investigation workflow. This includes initial assessment, root cause analysis using Ishikawa methodology, corrective action planning, re-sampling scheduling, and effectiveness verification." },
      { question: "Can sampling schedules be customized?", answer: "Yes, sampling schedules are fully configurable based on zone classifications, monitoring types, frequencies, and risk levels. The system also supports dynamic schedule adjustments based on historical trending data and seasonal patterns." },
      { question: "Is the system compliant with EU GMP Annex 1?", answer: "Yes, the system is fully aligned with the updated EU GMP Annex 1 requirements for environmental monitoring, including continuous monitoring capabilities, electronic data integrity, and comprehensive trending analysis." },
    ],
  },
  "instrument-logbooks": {
    badge: "Instrument Logbooks",
    heroHeading: "Digitize Instrument Logbooks, Track Inventory & Ensure Compliance",
    heroDescription:
      "Ensure complete traceability, eliminate manual errors, and maintain audit-ready records with AI-powered instrument logbooks.",
    heroMockup: <InstrumentLogbooksHeroDashboard />,
    benefitsHeading: "Complete Instrument Lifecycle Management in One Platform",
    benefitsSubtext:
      "From calibration to maintenance, usage logging to audit trails — everything you need for instrument compliance.",
    benefits: [
      {
        icon: <BookIcon />,
        title: "Digital Usage Logging",
        description: "Record instrument usage electronically with user authentication, timestamp verification, and automatic data capture.",
      },
      {
        icon: <CalendarIcon />,
        title: "Calibration Management",
        description: "Track calibration schedules, results, and certificates with automated reminders and alerts for upcoming due dates.",
      },
      {
        icon: <SettingsIcon />,
        title: "Preventive Maintenance",
        description: "Plan and track preventive maintenance activities to minimize instrument downtime and ensure optimal performance.",
      },
    ],
    features: [
      {
        title: "Smart Calibration Scheduling & Tracking",
        description:
          "Automated calibration scheduling with risk-based frequency management. Track calibration status across your entire instrument fleet, receive proactive alerts for upcoming and overdue calibrations, and maintain complete calibration history.",
        mockup: <InstrumentCalibrationMockup />,
      },
      {
        title: "21 CFR Part 11 Compliant Audit Trail",
        description:
          "Electronic records with complete audit trail functionality. Every usage, calibration, and maintenance event is recorded with time-stamped entries, electronic signatures, and tamper-proof documentation that meets FDA inspection standards.",
        mockup: <AuditTrailMockup />,
      },
      {
        title: "Real-Time Instrument Availability Dashboard",
        description:
          "See the real-time status of every instrument in your facility. Track which instruments are in use, available, or under maintenance. Manage bookings and prevent scheduling conflicts.",
        mockup: <InstrumentCalibrationMockup />,
      },
    ],
    resources: [
      { tag: "Blog", title: "Instrument Management Best Practices", href: "#" },
      { tag: "Guide", title: "Digital Logbook Implementation Guide", href: "#" },
      { tag: "Checklist", title: "Instrument Compliance Audit Checklist", href: "#" },
    ],
    faqs: [
      { question: "How does the digital logbook replace paper records?", answer: "The digital logbook captures all the information traditionally recorded on paper — usage details, operator identity, timestamps, observations — but does so electronically with automatic data validation, electronic signatures, and tamper-proof audit trails." },
      { question: "Is the system 21 CFR Part 11 compliant?", answer: "Yes, the system is fully compliant with FDA 21 CFR Part 11 requirements including electronic signatures, complete audit trails, data integrity controls, and role-based access management." },
      { question: "Can the system integrate with existing LIMS or ERP systems?", answer: "Yes, the system provides APIs and pre-built connectors for popular LIMS and ERP platforms. Integration allows automatic synchronization of instrument master data, calibration results, and maintenance records." },
      { question: "How does preventive maintenance scheduling work?", answer: "Maintenance schedules can be configured based on time intervals, usage counts, or condition-based triggers. The system sends automated reminders, tracks work orders, and maintains a complete maintenance history for each instrument." },
    ],
  },
  "qc-planning": {
    badge: "QC Planning",
    heroHeading: "Intelligent Quality Control Planning & Workflow Management",
    heroDescription:
      "Streamline quality control planning with intelligent scheduling and automated workflow management. Optimize resource allocation and ensure timely completion of all QC activities.",
    heroMockup: <InstrumentLogbooksHeroDashboard />,
    benefitsHeading: "Optimize Lab Efficiency with Intelligent Planning",
    benefitsSubtext: "From sample receipt to result release — streamlined QC workflows for faster batch release.",
    benefits: [
      { icon: <CalendarIcon />, title: "Intelligent Scheduling", description: "AI-powered scheduling that optimizes resource allocation and instrument availability for QC testing." },
      { icon: <ActivityIcon />, title: "Progress Tracking", description: "Real-time visibility into QC testing progress with bottleneck identification and automated alerts." },
      { icon: <SettingsIcon />, title: "Integration Ready", description: "Seamless integration with LIMS, ERP, and manufacturing systems for end-to-end visibility." },
    ],
    features: [
      { title: "Dynamic Priority Management", description: "Dynamic priority assignment based on batch criticality, customer requirements, and regulatory deadlines ensures the most important work gets done first.", mockup: <EMSmartPlanningMockup /> },
      { title: "Automated Workflow Orchestration", description: "Automated QC workflows from sample receipt through testing, review, and result release eliminate manual handoffs and reduce cycle times.", mockup: <InstrumentCalibrationMockup /> },
    ],
    resources: [
      { tag: "Blog", title: "QC Planning in Pharma Labs", href: "#" },
    ],
    faqs: [
      { question: "How does QC Planning integrate with manufacturing?", answer: "QC Planning integrates with MES and ERP systems to automatically receive batch information, testing requirements, and priority levels, enabling proactive resource allocation." },
    ],
  },
};

export default function LaboratoryProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const pageData = productPages[slug];

  if (!pageData) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link href="/products/laboratory" className="text-blue-600 hover:underline">← Back to Laboratory Products</Link>
      </div>
    );
  }

  return <ProductDetailPage {...pageData} />;
}

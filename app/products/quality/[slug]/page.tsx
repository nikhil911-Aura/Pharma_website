"use client";

import { use } from "react";
import Link from "next/link";
import ProductDetailPage from "@/app/components/product/ProductDetailPage";
import {
  AIInvestigatorHeroDashboard,
  CleaningValidationHeroDashboard,
  RCADashboardMockup,
  CAPAReportMockup,
  HypothesisVerificationMockup,
  CleaningProtocolMockup,
  ResidueTrendMockup,
} from "@/app/components/product/DetailPageMockups";

/* ────────────────────────────────────────────
   ICON HELPERS
   ──────────────────────────────────────────── */
const FilterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const DocIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const AlertIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const ZapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

/* ────────────────────────────────────────────
   PRODUCT DATA
   ──────────────────────────────────────────── */
const productPages: Record<string, React.ComponentProps<typeof ProductDetailPage>> = {
  "ai-investigator": {
    badge: "AI Investigator",
    heroHeading: "Close Investigations Faster, Identify Effective CAPAs",
    heroDescription:
      "Leverage automated root cause analysis, data-driven CAPA recommendations, and comprehensive audit trails to protect your brand from costly disruptions.",
    heroMockup: <AIInvestigatorHeroDashboard />,
    benefitsHeading: "Lower Cost of Quality with Consistent Investigations and Effective CAPAs",
    benefitsSubtext:
      "Cut non-compliance costs and operational delays by speeding up investigations and implementing targeted corrective actions",
    benefits: [
      {
        icon: <FilterIcon />,
        title: "Reduce Deviation Recurrence",
        description: "Pinpoint underlying issues with AI-driven root cause analysis. Prevent repeat deviations and ensure a more stable production process.",
      },
      {
        icon: <DocIcon />,
        title: "Improve Investigation Consistency",
        description: "Ensures every investigation follows a standardized, data-driven approach for reliable, repeatable outcomes.",
      },
      {
        icon: <SearchIcon />,
        title: "Improve CAPA Effectiveness",
        description: "Generates precise, data-driven corrective action recommendations that boost the success of CAPAs and lead to lasting quality improvements.",
      },
    ],
    features: [
      {
        title: "Standardize RCA with proven methodologies",
        description:
          "Use AI-powered Ishikawa 6M methodology and historical data patterns to systematically analyze and diagnose the causes of deviations. The platform ensures every investigation follows a standardized framework.",
        mockup: <RCADashboardMockup />,
      },
      {
        title: "Generate effective CAPAs to prevent recurrence",
        description:
          "Confirms generated hypotheses by cross-referencing batch records, test results, and other critical production data. Auto-generate targeted corrective and preventive actions.",
        mockup: <CAPAReportMockup />,
      },
      {
        title: "Verify Hypothesis With Data",
        description:
          "Confirms generated hypotheses by cross-referencing batch records, test results, and other critical production data. Automatically assembles investigation data into structured, precise reports.",
        mockup: <HypothesisVerificationMockup />,
      },
    ],
    resources: [
      { tag: "Audit Readiness Checklist", title: "Quality Risk Management Audit Readiness Checklist", href: "#" },
      { tag: "Audit Readiness Checklist", title: "Document Management Audit Readiness Checklist", href: "#" },
      { tag: "Audit Readiness Checklist", title: "CAPA Management Audit Readiness Checklist", href: "#" },
    ],
    faqs: [
      { question: "What is AI Investigator and how does it work?", answer: "AI Investigator is an AI-powered quality management tool that automates root cause analysis using Ishikawa 6M methodology. It analyzes historical deviation data, identifies patterns, and generates science-based hypotheses for faster investigation closure." },
      { question: "How does AI Investigator improve CAPA effectiveness?", answer: "The platform generates data-driven CAPA recommendations by cross-referencing batch records, test results, and historical data. This ensures corrective actions address actual root causes rather than symptoms, reducing deviation recurrence by up to 60%." },
      { question: "Is AI Investigator compliant with FDA 21 CFR Part 11?", answer: "Yes, AI Investigator is fully compliant with FDA 21 CFR Part 11 requirements, including electronic signatures, complete audit trails, and tamper-proof records. All investigation activities are documented with time-stamped entries." },
      { question: "How long does it take to implement AI Investigator?", answer: "Typical implementation takes 4-8 weeks depending on the complexity of your quality processes and integration requirements. Our team provides full support during setup, configuration, and validation." },
    ],
  },
  "cleaning-validation": {
    badge: "CLEEN - Cleaning Validation",
    heroHeading: "Cleaning Validation Software for Effortless FDA Compliance",
    heroDescription:
      "Automate safe carryover limit analysis and real-time residue trend monitoring with CLEEN. Validate worst-case product cleaning protocols, generate audit-ready documentation, and ensure seamless FDA compliance effortlessly.",
    heroMockup: <CleaningValidationHeroDashboard />,
    benefitsHeading: "Effortless Cleaning Validation that Meets FDA Inspection Standards",
    benefitsSubtext:
      "Stay audit-ready with automated residue monitoring, compliant change assessments, and seamless FDA alignment.",
    benefits: [
      {
        icon: <ClockIcon />,
        title: "Compliant Change Impact Assessment",
        description: "Automate risk evaluation for process and product changes, ensuring compliance while minimizing disruptions to validated cleaning processes.",
      },
      {
        icon: <AlertIcon />,
        title: "Adhere to FDA Regulations",
        description: "Automated HBEL-based residue calculations eliminate manual errors, ensuring adherence to FDA and global regulatory standards.",
      },
      {
        icon: <ZapIcon />,
        title: "Accelerate New Drug Introduction",
        description: "Instant risk-based assessments enable rapid carryover limit calculations, expediting go/no-go decisions for manufacturing expansions.",
      },
    ],
    features: [
      {
        title: "Calculate safe carryover limits instantly",
        description:
          "Automated HBEL-based MACO/MAC calculations for all product-equipment combinations. The system evaluates worst-case scenarios instantly, eliminating manual spreadsheet work and ensuring consistent, defensible results.",
        mockup: <ResidueTrendMockup />,
      },
      {
        title: "Auto-generate standardized, compliant protocols",
        description:
          "Combines limit data, worst-case scenarios, and essential cleaning parameters to auto-generate validation protocols tailored to specific products and equipment.",
        mockup: <CleaningProtocolMockup />,
      },
      {
        title: "Track residue trends in real-time",
        description:
          "Monitor cleaning residue data trends in real-time against established MACO limits. Automated alerts notify when residue levels approach or exceed acceptable thresholds, enabling proactive corrective actions.",
        mockup: <ResidueTrendMockup />,
      },
    ],
    resources: [
      { tag: "Audit Readiness Checklist", title: "Cleaning Validation Audit Readiness Blueprint", href: "#" },
      { tag: "Blog", title: "Cleaning Validation Excellence Hub", href: "#" },
      { tag: "Guide", title: "FDA Cleaning Validation Compliance Guide", href: "#" },
    ],
    faqs: [
      { question: "What is CLEEN and how does it automate cleaning validation?", answer: "CLEEN is Leucine's cleaning validation software that automates HBEL-based residue limit calculations, worst-case product identification, and validation protocol generation. It eliminates manual spreadsheets and ensures consistent, defensible cleaning validation documentation." },
      { question: "How does CLEEN handle change impact assessments?", answer: "When new products are introduced or processes change, CLEEN automatically re-evaluates all product-equipment combinations, recalculates MACO limits, identifies new worst-case pairs, and flags any validation gaps that need to be addressed." },
      { question: "Does CLEEN support HBEL-based cleaning validation?", answer: "Yes, CLEEN fully supports HBEL (Health-Based Exposure Limit) methodology as recommended by the EMA and FDA. It calculates ADE/PDE-based limits and applies them to determine maximum allowable carryover for all products." },
      { question: "Can CLEEN generate audit-ready documentation?", answer: "Absolutely. CLEEN auto-generates complete validation protocols, cleaning verification reports, and change assessment documentation that meet FDA, EU GMP, and other regulatory standards for audit readiness." },
    ],
  },
  "fda-tracker": {
    badge: "FDA Tracker",
    heroHeading: "Stay Ahead of FDA Inspections with AI-Powered Analysis",
    heroDescription:
      "Analyze FDA 483 trends, monitor warning letters, and proactively address regulatory gaps to ensure inspection readiness.",
    heroMockup: <AIInvestigatorHeroDashboard />,
    benefitsHeading: "Proactive FDA Readiness with Data-Driven Intelligence",
    benefitsSubtext: "Monitor, analyze, and benchmark your compliance posture against the industry.",
    benefits: [
      { icon: <DocIcon />, title: "Real-Time 483 Tracking", description: "Monitor FDA 483 observations as they are issued with comprehensive categorization." },
      { icon: <SearchIcon />, title: "Warning Letter Analysis", description: "Track warning letter trends and identify patterns that could affect your compliance posture." },
      { icon: <FilterIcon />, title: "Investigator Profiles", description: "Analyze individual FDA investigator patterns, focus areas, and historical observation data." },
    ],
    features: [
      { title: "FDA 483 Observation Analysis", description: "AI-powered analysis of FDA observations with pattern recognition and trend identification across facilities, products, and inspection systems.", mockup: <CAPAReportMockup /> },
      { title: "Six-System Gap Assessment", description: "Evaluate your readiness across FDA's six inspection systems with comprehensive gap analysis tools and benchmarking against industry peers.", mockup: <HypothesisVerificationMockup /> },
    ],
    resources: [
      { tag: "Tool", title: "FDA Form 483 Analysis", href: "#" },
      { tag: "Tool", title: "FDA Investigator Profiles", href: "#" },
      { tag: "Analysis", title: "FDA Six-Systems Inspection Analysis", href: "#" },
    ],
    faqs: [
      { question: "What data sources does FDA Tracker use?", answer: "FDA Tracker aggregates data from publicly available FDA databases including 483 observations, warning letters, and enforcement actions, enriched with AI analysis." },
      { question: "How often is the data updated?", answer: "Data is updated as new FDA actions are published, typically within 24-48 hours of public release." },
    ],
  },
  "market-complaints": {
    badge: "Market Complaints",
    heroHeading: "Resolve Market Complaints Faster with Automated Triage",
    heroDescription: "Automate triage with global regulatory compliance while ensuring swift and accurate complaint handling.",
    heroMockup: <AIInvestigatorHeroDashboard />,
    benefitsHeading: "Faster Resolution. Better Compliance. Happier Customers.",
    benefitsSubtext: "Streamline complaint management processes to protect product quality and patient safety.",
    benefits: [
      { icon: <ZapIcon />, title: "Automated Complaint Triage", description: "AI-assisted categorization and prioritization of incoming complaints for faster resolution." },
      { icon: <AlertIcon />, title: "Reportable Event Detection", description: "Automatically flag potential reportable events based on regulatory criteria." },
      { icon: <DocIcon />, title: "Investigation Integration", description: "Seamlessly link complaints to investigations and CAPAs for complete traceability." },
    ],
    features: [
      { title: "Smart Complaint Categorization", description: "AI-powered categorization automatically classifies complaints by type, severity, and regulatory impact for prioritized processing.", mockup: <RCADashboardMockup /> },
      { title: "Global Regulatory Compliance", description: "Built-in compliance workflows for FDA, EU MDR, Health Canada, and other global regulatory bodies with automated reporting.", mockup: <CAPAReportMockup /> },
    ],
    resources: [
      { tag: "Blog", title: "Market Complaint Management in Pharma", href: "#" },
      { tag: "Checklist", title: "Market Complaints Audit Readiness", href: "#" },
    ],
    faqs: [
      { question: "How does automated triage work?", answer: "The system uses NLP and historical complaint data to automatically categorize, prioritize, and route complaints to the appropriate review team." },
    ],
  },
  "change-control": {
    badge: "Change Control",
    heroHeading: "Streamline Change Management with Complete Documentation",
    heroDescription: "Streamline change management workflows and ensure complete documentation of all facility and process changes.",
    heroMockup: <CleaningValidationHeroDashboard />,
    benefitsHeading: "Manage Changes Efficiently, Ensure Compliance",
    benefitsSubtext: "Complete visibility and control over every change in your facility.",
    benefits: [
      { icon: <DocIcon />, title: "Structured Change Requests", description: "Standardized change request forms with configurable approval workflows and impact assessments." },
      { icon: <SearchIcon />, title: "Impact Assessment", description: "Comprehensive impact evaluation across quality, regulatory, and operational dimensions." },
      { icon: <ClockIcon />, title: "Effectiveness Checks", description: "Schedule and track post-implementation effectiveness reviews to verify change success." },
    ],
    features: [
      { title: "Multi-Level Approval Workflows", description: "Configurable approval chains with electronic signatures, notifications, and escalation rules ensure changes are properly reviewed.", mockup: <CAPAReportMockup /> },
    ],
    resources: [
      { tag: "Blog", title: "Change Control in Pharma", href: "#" },
    ],
    faqs: [
      { question: "What types of changes can be managed?", answer: "The system supports all types of changes including equipment, process, facility, document, and system changes with configurable workflow templates." },
    ],
  },
  "capa-manager": {
    badge: "CAPA Manager",
    heroHeading: "Track and Close CAPAs with Automated Workflows",
    heroDescription: "Track corrective and preventive actions with automated workflows to ensure timely resolution and compliance.",
    heroMockup: <AIInvestigatorHeroDashboard />,
    benefitsHeading: "Drive Continuous Improvement with Data-Driven CAPA",
    benefitsSubtext: "Close CAPAs faster, prevent recurrence, and demonstrate quality improvement.",
    benefits: [
      { icon: <FilterIcon />, title: "CAPA Initiation & Planning", description: "Structured CAPA initiation with root cause linkage and action planning templates." },
      { icon: <ClockIcon />, title: "Effectiveness Monitoring", description: "Schedule effectiveness checks and track CAPA performance with KPI dashboards." },
      { icon: <DocIcon />, title: "Regulatory Reporting", description: "Generate regulatory-compliant CAPA reports with full audit trails." },
    ],
    features: [
      { title: "Automated CAPA Tracking", description: "Assign, track, and monitor CAPA tasks with automated reminders, escalations, and real-time progress dashboards.", mockup: <CAPAReportMockup /> },
    ],
    resources: [
      { tag: "Blog", title: "CAPA Management in Pharma", href: "#" },
      { tag: "Checklist", title: "CAPA Audit Readiness 2025", href: "#" },
    ],
    faqs: [
      { question: "How does CAPA Manager integrate with investigations?", answer: "CAPA Manager seamlessly links to investigation findings, automatically populating root cause data and generating appropriate corrective actions." },
    ],
  },
  "deviation-management": {
    badge: "Deviation Management",
    heroHeading: "Streamline Deviation Reporting & Resolution",
    heroDescription: "Streamline deviation reporting, investigation, and resolution with intelligent workflows.",
    heroMockup: <CleaningValidationHeroDashboard />,
    benefitsHeading: "Faster Deviation Closure, Better Compliance",
    benefitsSubtext: "Reduce deviation closure times while maintaining complete compliance.",
    benefits: [
      { icon: <AlertIcon />, title: "Risk Assessment", description: "Built-in risk assessment tools to evaluate deviation impact on quality and compliance." },
      { icon: <FilterIcon />, title: "Trend Monitoring", description: "Track deviation trends to identify systemic issues and drive preventive improvements." },
      { icon: <SearchIcon />, title: "CAPA Integration", description: "Direct linkage to CAPA system for corrective and preventive action tracking." },
    ],
    features: [
      { title: "Guided Investigation Workflows", description: "Pre-configured investigation templates with root cause analysis tools ensure consistent and thorough deviation investigations.", mockup: <RCADashboardMockup /> },
    ],
    resources: [
      { tag: "Blog", title: "Everything About Deviation Management", href: "#" },
    ],
    faqs: [
      { question: "What types of deviations can be managed?", answer: "The system supports planned and unplanned deviations across manufacturing, laboratory, and warehouse processes with configurable severity classifications." },
    ],
  },
  "audit-management": {
    badge: "Audit Management",
    heroHeading: "Plan, Execute & Track Audits with Precision",
    heroDescription: "Plan, execute, and track audits with automated scheduling and comprehensive reporting tools.",
    heroMockup: <AIInvestigatorHeroDashboard />,
    benefitsHeading: "Maintain Audit Readiness at All Times",
    benefitsSubtext: "Complete audit management lifecycle from planning to follow-up.",
    benefits: [
      { icon: <ClockIcon />, title: "Risk-Based Planning", description: "Risk-based audit scheduling with automated frequency management and resource allocation." },
      { icon: <DocIcon />, title: "Finding Management", description: "Comprehensive finding tracking with severity classification and CAPA linkage." },
      { icon: <SearchIcon />, title: "Regulatory Alignment", description: "Pre-built audit protocols aligned with FDA, EU, WHO, and other regulatory frameworks." },
    ],
    features: [
      { title: "Guided Audit Execution", description: "Structured checklists with finding capture, evidence attachment, and real-time collaboration during audit execution.", mockup: <CAPAReportMockup /> },
    ],
    resources: [
      { tag: "Blog", title: "Audit Management in Pharma", href: "#" },
    ],
    faqs: [
      { question: "Can audit protocols be customized?", answer: "Yes, audit protocols are fully configurable. Pre-built templates for FDA, EU GMP, WHO, and ICH are provided as starting points that can be tailored to your needs." },
    ],
  },
};

export default function QualityProductPage({
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
        <Link href="/products/quality" className="text-blue-600 hover:underline">← Back to Quality Products</Link>
      </div>
    );
  }

  return <ProductDetailPage {...pageData} />;
}

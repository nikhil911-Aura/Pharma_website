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
    heroHeading: "Resolve Deviations Instantly, Formulate Impervious CAPAs",
    heroDescription:
      "Capitalize on algorithmic root cause mapping, empirical CAPA suggestions, and absolute audit trails to shield output from compounding errors.",
    heroMockup: <AIInvestigatorHeroDashboard />,
    benefitsHeading: "Reduce Quality Overhead with Perfected Discrepancy Tracking",
    benefitsSubtext:
      "Minimize compliance spend and structural delays by resolving issues rapidly and installing permanent corrective parameters.",
    benefits: [
      {
        icon: <FilterIcon />,
        title: "Curtail Successive Deviations",
        description: "Isolate systemic flaws using AI-led discovery. Intercept recurring anomalies to lock in process predictability.",
      },
      {
        icon: <DocIcon />,
        title: "Standardize Resolution Protocols",
        description: "Guarantee that every discrepancy analysis conforms to rigorous, data-driven methodology.",
      },
      {
        icon: <SearchIcon />,
        title: "Maximize CAPA Potency",
        description: "Produce exact, empirically grounded corrective algorithms that amplify success rates and manifest permanent operational upgrades.",
      },
    ],
    features: [
      {
        title: "Harmonize RCA via Verified Paradigms",
        description:
          "Apply algorithmic 6M methodology and historical event mapping to structurally dissect discrepancies. The engine enforces an unyielding evaluation framework.",
        mockup: <RCADashboardMockup />,
      },
      {
        title: "Synthesize Protective CAPAs to Halt Drift",
        description:
          "Produce precise corrective mandates corroborated by telemetry and operational logs securely. Auto-generate targeted corrective and preventive actions.",
        mockup: <CAPAReportMockup />,
      },
      {
        title: "Empirically Corroborate Hypotheses",
        description:
          "Validate generated theories by interpolating batch logs, telemetry, and secondary constraints. Automatically assemble structured, undeniable dossiers.",
        mockup: <HypothesisVerificationMockup />,
      },
    ],
    resources: [
      { tag: "Audit Readiness Checklist", title: "Risk Mitigation Strategy Dossier", href: "#" },
      { tag: "Audit Readiness Checklist", title: "Information Governance Protocol", href: "#" },
      { tag: "Audit Readiness Checklist", title: "Systemic Correction Playbook", href: "#" },
    ],
    faqs: [
      { question: "What is AI Investigator and how does it work?", answer: "AI Investigator is an AI-powered quality management tool that automates root cause analysis using Ishikawa 6M methodology. It analyzes historical deviation data, identifies patterns, and generates science-based hypotheses for faster investigation closure." },
      { question: "How does AI Investigator improve CAPA effectiveness?", answer: "The platform generates data-driven CAPA recommendations by cross-referencing batch records, test results, and historical data. This ensures corrective actions address actual root causes rather than symptoms, reducing deviation recurrence by up to 60%." },
      { question: "Is AI Investigator compliant with FDA 21 CFR Part 11?", answer: "Yes, AI Investigator is fully compliant with FDA 21 CFR Part 11 requirements, including electronic signatures, complete audit trails, and tamper-proof records. All investigation activities are documented with time-stamped entries." },
      { question: "How long does it take to implement AI Investigator?", answer: "Typical implementation takes 4-8 weeks depending on the complexity of your quality processes and integration requirements. Our team provides full support during setup, configuration, and validation." },
    ],
  },
  "cleaning-validation": {
    badge: "Cleaning Validation",
    heroHeading: "Sanitization Audit Software for Effortless Global Compliance",
    heroDescription:
      "Systematize carryover limit computations and live residue trend analysis. Certify extreme-case protocols, spawn verified documentation, and lock in seamless regulatory alignment.",
    heroMockup: <CleaningValidationHeroDashboard />,
    benefitsHeading: "Frictionless Sanitization Auditing That Exceeds Agency Scrutiny",
    benefitsSubtext:
      "Remain inspection-ready via algorithmic residue watching, adaptive change evaluations, and total FDA adherence.",
    benefits: [
      {
        icon: <ClockIcon />,
        title: "Compliant Evolution Assessments",
        description: "Systematize threat computation for procedural shifts, sustaining compliance while insulating certified processes from drag.",
      },
      {
        icon: <AlertIcon />,
        title: "Uphold Global Dictates",
        description: "Algorithmic HBEL computations eradicate human calculation faults, cementing adherence to FDA and equivalent worldwide parameters.",
      },
      {
        icon: <ZapIcon />,
        title: "Expedite New Formulations",
        description: "Immediate threat-based forecasting permits swift carryover parameter calculations, hastening operational pipeline decisions.",
      },
    ],
    features: [
      {
        title: "Autonomous Safe Carryover Computations",
        description:
          "Instantly generate MACO/MAC boundaries across every asset combination. Pre-evaluate worst-case permutations automatically and remove error-prone spreadsheet tabulations.",
        mockup: <ResidueTrendMockup />,
      },
      {
        title: "Generative Compliant Documentation",
        description:
          "Compile limit metrics, threat contours, and fundamental cleaning parameters into cohesive validation protocols instantaneously.",
        mockup: <CleaningProtocolMockup />,
      },
      {
        title: "Live Pathogen & Residue Charting",
        description:
          "Observe hygiene parameters actively against formulated limits. Receive autonomous alerts the moment measurements drift towards critical markers.",
        mockup: <ResidueTrendMockup />,
      },
    ],
    resources: [
      { tag: "Audit Readiness Checklist", title: "Cleaning Validation Audit Readiness Blueprint", href: "#" },
      { tag: "Blog", title: "Cleaning Validation Excellence Hub", href: "#" },
      { tag: "Guide", title: "FDA Cleaning Validation Compliance Guide", href: "#" },
    ],
    faqs: [
      { question: "What is Cleaning Validation and how does it automate cleaning validation?", answer: "Cleaning Validation is NovaRx's cleaning validation software that automates HBEL-based residue limit calculations, worst-case product identification, and validation protocol generation. It eliminates manual spreadsheets and ensures consistent, defensible cleaning validation documentation." },
      { question: "How does Cleaning Validation handle change impact assessments?", answer: "When new products are introduced or processes change, Cleaning Validation automatically re-evaluates all product-equipment combinations, recalculates MACO limits, identifies new worst-case pairs, and flags any validation gaps that need to be addressed." },
      { question: "Does Cleaning Validation support HBEL-based cleaning validation?", answer: "Yes, Cleaning Validation fully supports HBEL (Health-Based Exposure Limit) methodology as recommended by the EMA and FDA. It calculates ADE/PDE-based limits and applies them to determine maximum allowable carryover for all products." },
      { question: "Can Cleaning Validation generate audit-ready documentation?", answer: "Absolutely. Cleaning Validation auto-generates complete validation protocols, cleaning verification reports, and change assessment documentation that meet FDA, EU GMP, and other regulatory standards for audit readiness." },
    ],
  },
  "fda-tracker": {
    badge: "FDA Tracker",
    heroHeading: "Outpace Agency Scrutiny via Preemptive Analysis",
    heroDescription:
      "Parse citation patterns dynamically, monitor international warning circulars, and systematically close adherence gaps prior to formal audits.",
    heroMockup: <AIInvestigatorHeroDashboard />,
    benefitsHeading: "Preemptive Preparation Utilizing Actionable Intelligence",
    benefitsSubtext: "Observe and benchmark your firm's stance continuously against global competitors.",
    benefits: [
      { icon: <DocIcon />, title: "Live Citation Monitoring", description: "Track agency citations the moment they print, categorized accurately via algorithmic parsing." },
      { icon: <SearchIcon />, title: "Formal Notice Dissection", description: "Highlight enforcement trends and recognize shifting regulatory winds that could jeopardize your operating license." },
      { icon: <FilterIcon />, title: "Auditor Profiling", description: "Gauge individual auditor eccentricities, primary vectors of inquiry, and historical citation behavior." },
    ],
    features: [
      { title: "Agency Observation Deconstruction", description: "Utilize intelligent pattern extraction on formal observations spanning distinct sites, product clusters, and inspection methodologies.", mockup: <CAPAReportMockup /> },
      { title: "Comprehensive Quality System Threat Assessment", description: "Index your operational readiness across major required pillars utilizing granular benchmarking logic.", mockup: <HypothesisVerificationMockup /> },
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

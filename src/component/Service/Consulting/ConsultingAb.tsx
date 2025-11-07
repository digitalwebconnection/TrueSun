"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Cog,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  LineChart,
  Wrench,
  CheckCircle2,
  Building2,
  Factory,
  Home,
  TrendingUp,
  DollarSign,
  UserCheck,
} from "lucide-react";

/* =============================
    THEME
============================= */
const TBRAND = {
  primary: "#262755", // deep blue
  accent: "#ff7a1a",  // warm orange
  surface: "#ffffff",
  muted: "#f6f7fb",
  darkMuted: "#e0e4eb",
};

/* =============================
    ANIMATIONS
============================= */
const tContainer: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const tItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/* =============================
    PRIMITIVES
============================= */
const TSection = ({
  id,
  className = "",
  style,
  children,
}: {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => (
  <section id={id} className={`relative ${className}`} style={style}>
    {children}
  </section>
);

const TWrap = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const TBadge = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
    style={{
      background: `${TBRAND.accent}22`,
      color: TBRAND.primary,
      border: `1px solid ${TBRAND.accent}55`,
    }}
  >
    {children}
  </span>
);

const TCard = ({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`rounded-2xl bg-white/95 ring-1 ring-slate-800/50 shadow-lg transition-shadow duration-300 hover:shadow-xl ${className}`}
    style={style}
  >
    {children}
  </div>
);

/* =============================
    DATA
============================= */
const technicalBlocks = [
  {
    icon: <Cog className="h-6 w-6" style={{ color: TBRAND.primary }} />,
    title: "Design & Engineering",
    desc: "Optimise plant capacity, array layout, and string planning to ensure maximum energy yield.",
    points: [
      "Decide plant capacity suited to the site",
      "Array/layout designing & string planning",
      "Energy yield estimation for the project",
    ],
  },
  {
    icon: <Wrench className="h-6 w-6" style={{ color: TBRAND.primary }} />,
    title: "Technology Assessment",
    desc: "Evaluate technical constraints, inverter technology fit, and suggest optimal system design.",
    points: [
      "Identify technical constraints at proposal stage",
      "Evaluate inverter/technology fit for rooftop & environment",
      "Suggest right inverter sizing and system design",
    ],
  },
  {
    icon: <TrendingUp className="h-6 w-6" style={{ color: TBRAND.primary }} />,
    title: "Electricals & BOQ",
    desc: "Prepare detailed Bill of Quantities (BOQ), Single-Line Diagrams, and cable sizing studies.",
    points: [
      "Prepare detailed BOQ",
      "Single-Line Diagram per inverter for net-metering",
      "Cable sizing study from inverter to meter room",
    ],
  },
  {
    icon: <DollarSign className="h-6 w-6 text-green-600" />,
    title: "Financial Analysis",
    desc: "Cost-benefit analysis to determine payback & ROI, benchmark proposals, and negotiate costs.",
    points: [
      "Cost-benefit analysis with payback & ROI vs vendors",
      "Benchmark proposals & negotiate optimal cost",
    ],
  },
  {
    icon: <UserCheck className="h-6 w-6 text-blue-600" />,
    title: "Project Support",
    desc: "Provide vendor-neutral guidance, highlight risks, and support contract evaluations.",
    points: [
      "Support client in informed decisions",
      "Highlight risks & mitigation techniques",
      "Evaluate vendor contracts incl. AMC/warranty",
      "Presentation support for management/SGBM",
    ],
  },
];

const bidAdvisory = [
  "Assist in awarding contracts – T&Cs, payment terms, handover & warranties",
  "Technical support in contract finalization",
  "Vendor interaction for price discovery & best-value services",
];

const monitoringItems = [
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Implementation Review",
    desc: "Monitor project parameters and progress during execution and post-completion.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Quality Control",
    desc: "Review workmanship, safety, and procedures at site against industry standards.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Weekly Progress",
    desc: "Provide concise weekly reports, highlight gaps, and route actions to stakeholders.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Non-Conformity Track",
    desc: "Flag and track Non-Conformities (NCs) versus standards with clear recommendations.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Project Closure",
    desc: "Prepare the final comprehensive documentation pack for all key stakeholders.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Handover & O&M",
    desc: "Ensure a smooth transfer to the client or society's Operations & Maintenance team.",
  },
];

/* =============================
    PAGE
============================= */
export default function ConsultingPage() {
  const timelineItems = technicalBlocks.slice(0, 3);
  const assessmentCards = technicalBlocks.slice(3);

  return (
    <main className=" bg-white text-slate-800">
      {/* HERO */}
      <TSection id="hero" className="relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        {/* layered overlays for contrast */}
        <div className="absolute inset-0 -z-10 bg-slate-900/40" />
        <div className="absolute inset-0 -z-10 bg-white/50" />
        <TWrap className="py-8 md:py-14">
          <motion.div
            variants={tContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl"
          >
            <TBadge>
              <Cog className="h-4 w-4" /> Consulting Services
            </TBadge>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight  sm:text-5xl drop-shadow-lg">
              Project Management Consulting for Solar
            </h1>
            <p className="mt-4  text-lg drop-shadow-md">
              We optimise design, price, and quality with technical diligence, bid advisory, construction monitoring, and CSR enablement.
            </p>
          </motion.div>
        </TWrap>
      </TSection>

      {/* TECHNICAL & FINANCIAL ASSESSMENT (VISUAL TIMELINE) */}
      <TSection id="assessment" className="py-8 md:py-10 max-w-7xl mx-auto" style={{ backgroundColor: TBRAND.muted }}>
        <TWrap>
          <motion.div
            variants={tContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Technical & Financial Assessment
              </h2>
              <p className="mt-3 text-slate-600">
                End-to-end diligence that de-risks execution and accelerates ROI.
              </p>
            </div>

            {/* timeline */}
            <div className="mt-8">
              <div className="relative flex justify-between space-x-4">
                <div
                  className="absolute left-0 bg-black right-0 top-1/4 h-0.5 -translate-y-1/2"
                  
                />
                {timelineItems.map((b, i) => (
                  <motion.div key={i} variants={tItem} className="relative w-1/3 p-4 text-center group">
                    <div className="flex justify-center">
                      <div
                        className="h-12 w-12 flex items-center justify-center rounded-full border-4 bg-white z-10"
                        
                      >
                        {b.icon}
                      </div>
                    </div>
                    <h4 className="mt-4 text-base font-semibold text-slate-900">{b.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* detail cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {assessmentCards.map((b, i) => (
                <motion.div
                  key={i}
                  variants={tItem}
                  className="rounded-2xl bg-white p-6 ring-1 ring-slate-600 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${TBRAND.accent}22` }}>
                      {b.icon}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">{b.title}</h4>
                </div>
                  <p className="text-sm text-slate-700 font-semibold mb-4">{b.desc}</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {b.points.map((p, j) => (
                      <li key={j} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TWrap>
      </TSection>

      {/* BID ADVISORY */}
      <TSection id="bid" className="py-8 md:py-10 " style={{ backgroundColor: TBRAND.primary }}>
        <TWrap>
          <motion.div
            variants={tContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Bid Advisory — The Smart Selection</h2>
              <p className="mt-3 text-white/80">
                Transparent vendor evaluation and contract finalization to ensure you select the best value partner.
              </p>
            </div>
            <TCard
              className="mt-8 p-6 md:p-8 text-white border-2"
              style={{ background: TBRAND.primary, borderColor: TBRAND.accent }}
            >
              <ul className="grid gap-6 md:grid-cols-3 text-base text-white">
                {bidAdvisory.map((p, i) => (
                  <motion.li key={i} variants={tItem} className="flex items-start gap-3 p-4 rounded-lg bg-white/10">
                    <ClipboardCheck className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: TBRAND.accent }} />
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>
            </TCard>
          </motion.div>
        </TWrap>
      </TSection>

      {/* CONSTRUCTION MONITORING */}
      <TSection id="monitoring" className="py-8 md:py-10" style={{ backgroundColor: TBRAND.muted }}>
        <TWrap>
          <motion.div
            variants={tContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Construction Monitoring</h2>
              <p className="mt-3 text-slate-600">
                Dedicated monitoring to avoid delays, ensure quality, and extend plant life.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {monitoringItems.map((m, i) => (
                <motion.div
                  key={i}
                  variants={tItem}
                  className="rounded-2xl bg-white p-6 ring-1 ring-slate-900/50 shadow-xl shadow-black/50 transition-shadow hover:shadow-2xl"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl text-slate-900" style={{ background: `${TBRAND.accent}44` }}>
                    {m.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{m.title}</h4>
                  <p className="mt-2 text-sm text-slate-700">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TWrap>
      </TSection>

      {/* CSR CONSULTING */}
      <TSection id="csr" className="py-8 md:py-10">
        <TWrap>
          <motion.div
            variants={tContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">CSR Consulting</h2>
              <p className="mt-3 text-slate-600">
                Enable CSR impact via decentralised solar – schools, PHCs, hostels and community assets.
              </p>
            </div>
            <TCard className="mt-8 p-6 md:p-8">
              <div className="grid gap-26 md:grid-cols-2 text-sm text-slate-700">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-500 pb-2">How we help</h4>
                  <ul className="mt-4 space-y-3">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Site identification & beneficiary mapping, ensuring maximum social impact.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Technical design, budgeting, and project timelines for smooth execution.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>Implementation partner selection & project monitoring for accountability.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-500 pb-2">Typical beneficiaries</h4>
                  <ul className="mt-4 space-y-3">
                    <li className="flex gap-2 items-start">
                      <Home className="mt-0.5 h-4 w-4 text-slate-500 flex-shrink-0" />
                      <span>Rural schools, student hostels, and educational institutions.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <Building2 className="mt-0.5 h-4 w-4 text-slate-500 flex-shrink-0" />
                      <span>Primary Health Centres (PHCs) and community clinics.</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <Factory className="mt-0.5 h-4 w-4 text-slate-500 flex-shrink-0" />
                      <span>Community facilities, training centres, and non-profits.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TCard>
          </motion.div>
        </TWrap>
      </TSection>

    </main>
  );
}

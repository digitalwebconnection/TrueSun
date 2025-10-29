"use client";

import React, { useMemo, useState, useId } from "react";
import { Wrench, Settings, ClipboardList, Gauge, Activity, AlertTriangle, CheckCircle2, Globe2, BadgeCheck, Grid, Building2, Plug, ShieldCheck, Sparkles, Layers, SunDim, LineChart, ScrollText, Timer, FileCheck2, MapPin, ArrowRight } from "lucide-react";

// --- Icons ---
function SolarPanelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="10" rx="1" />
      <path d="M3 8h18M9 4v10M15 4v10" />
      <path d="M12 14v6M8 20h8" />
    </svg>
  );
}

// --- Types ---
 type TabKey = "projects" | "om" | "consulting" | "advisory";
 type ServiceItem = { title: string; desc: string; };
 type Badge = { icon: React.ReactNode; label: string };

 interface ContentItem {
  icon: React.ReactNode;
  heading: string;
  intro: string;
  points: ServiceItem[];
  seoTags: string[];
  highlights: Badge[];
  stats: { label: string; value: string }[];
 }

// --- Content ---
const CONTENT: Record<TabKey, ContentItem> = {
  projects: {
    icon: <SolarPanelIcon className="h-5 w-5" />,
    heading: "Solar Projects (EPC)",
    intro: "Rooftop systems for homes, housing societies, commercial & industrial— engineered for safety, yield and clean aesthetics.",
    points: [
      { title: "Design & Engineering", desc: "Load study, shade analysis, string sizing, structural checks." },
      { title: "Permits & Net Metering", desc: "Utility files, approvals and meter changeover handled end‑to‑end." },
      { title: "Commissioning", desc: "QA, safety validation, sync with grid, handover & training." },
      { title: "Residential Excellence", desc: "Compact routing, neat cabling, app monitoring configuration." },
    ],
    seoTags: ["Home Solar Solutions Mumbai", "Solar System for Home in Maharashtra"],
    highlights: [
      { icon: <ShieldCheck className="h-4 w-4" />, label: "Safety First" },
      { icon: <Sparkles className="h-4 w-4" />, label: "Neat Workmanship" },
      { icon: <SunDim className="h-4 w-4" />, label: "Tier‑1 Modules" },
    ],
    stats: [
      { label: "Typical PR", value: ">= 78%" },
      { label: "Install Time", value: "2‑5 days" },
      { label: "Warranty", value: "25 yrs*" },
    ],
  },
  om: {
    icon: <Wrench className="h-5 w-5" />,
    heading: "Operation & Maintenance",
    intro: "Proactive care that maximizes uptime and output—so your plant performs year after year.",
    points: [
      { title: "Health Audits", desc: "Visual checks, torqueing, IV curves, thermography." },
      { title: "Performance Monitoring", desc: "PR tracking, alerts, monthly reporting, SCADA/app dashboards." },
      { title: "Fault Response", desc: "MPPT/inverter diagnostics, part replacement coordination." },
    ],
    seoTags: ["Solar AMC", "Solar Plant Maintenance"],
    highlights: [
      { icon: <Activity className="h-4 w-4" />, label: "High Uptime" },
      { icon: <LineChart className="h-4 w-4" />, label: "Live Monitoring" },
      { icon: <Timer className="h-4 w-4" />, label: "Fast SLA" },
    ],
    stats: [
      { label: "Uptime", value: ">= 99%" },
      { label: "Visits", value: "Monthly/Qtly" },
      { label: "Tickets", value: "24×7" },
    ],
  },
  consulting: {
    icon: <Settings className="h-5 w-5" />,
    heading: "Consulting",
    intro: "Independent advice on technology selection, price discovery and feasibility—so you invest with clarity.",
    points: [
      { title: "Feasibility & Policy", desc: "Tariff study, payback, subsidy/compliance mapping." },
      { title: "Tech Advisory", desc: "Module/inverter choice, BOS optimization, safety codes." },
      { title: "RFP & Vendor Eval", desc: "BoQ definition, comparative bids, negotiation support." },
    ],
    seoTags: ["Solar Consulting Company in India"],
    highlights: [
      { icon: <ScrollText className="h-4 w-4" />, label: "Code‑Compliant" },
      { icon: <Layers className="h-4 w-4" />, label: "Bankable BoQ" },
      { icon: <FileCheck2 className="h-4 w-4" />, label: "Transparent" },
    ],
    stats: [
      { label: "Payback", value: "3‑5 yrs" },
      { label: "Capex Saved", value: "5‑12%" },
      { label: "Policies", value: "State/Discom" },
    ],
  },
  advisory: {
    icon: <ClipboardList className="h-5 w-5" />,
    heading: "Advisory",
    intro: "Board‑level guidance on footprinting, CSR energy programs, and credible net‑zero declarations.",
    points: [
      { title: "Carbon Footprinting", desc: "GHG inventory (Scopes 1‑3), baselines and targets." },
      { title: "CSR Renewables", desc: "Solar‑first projects for schools, PHCs, utilities." },
      { title: "Net‑Zero Readiness", desc: "Frameworks, verification support, disclosures." },
    ],
    seoTags: ["Net Zero", "ESG Energy"],
    highlights: [
      { icon: <Globe2 className="h-4 w-4" />, label: "ESG Aligned" },
      { icon: <Building2 className="h-4 w-4" />, label: "Institutional" },
      { icon: <Plug className="h-4 w-4" />, label: "Decarbonize" },
    ],
    stats: [
      { label: "Scopes", value: "1‑3" },
      { label: "Programs", value: "CSR/ESG" },
      { label: "Assurance", value: "Ready" },
    ],
  },
};



function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-neutral-500/60 bg-white p-4 text-center shadow-sm">
      <div className="text-2xl font-bold text-neutral-900">{value}</div>
      <div className="text-xs text-neutral-600">{label}</div>
    </div>
  );
}

// --- Main Component ---
export default function SolarServicesShowcase() {
  const [active, setActive] = useState<TabKey>("projects");
  const idBase = useId();
  const data = CONTENT[active];

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = useMemo(() => ([
    { key: "projects", label: "Solar Projects", icon: <SolarPanelIcon className="h-4 w-4" /> },
    { key: "om", label: "O&M", icon: <Wrench className="h-4 w-4" /> },
    { key: "consulting", label: "Consulting", icon: <Settings className="h-4 w-4" /> },
    { key: "advisory", label: "Advisory", icon: <ClipboardList className="h-4 w-4" /> },
  ]), []);

  return (
    <section id="what-we-do" className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 to-white py-10">
      {/* <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-amber-300/50 blur-3xl" /> */}
      {/* <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-amber-300/50 blur-3xl" /> */}

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/90 px-3 py-1 text-sm font-medium text-black ring-1 ring-amber-200">
            <BadgeCheck className="h-4 w-4" />
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Outcome‑First Solar Services
          </h2>
          <p className="mt-3 text-neutral-700">
            From EPC to O&M, from independent consulting to net‑zero advisory—choose the track that fits your stage.
          </p>
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Solar service categories" className="mt-5 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                id={`${idBase}-${t.key}-tab`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${idBase}-${t.key}-panel`}
                onClick={() => setActive(t.key)}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  isActive ? "bg-amber-500 text-white shadow-lg shadow-amber-300" : "bg-white text-neutral-900 border border-black/50 ring-1 ring-neutral-200 hover:bg-amber-50",
                ].join(" ")}
              >
                {t.icon}
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div id={`${idBase}-${active}-panel`} role="tabpanel" aria-labelledby={`${idBase}-${active}-tab`} className="relative mt-10 grid gap-8 lg:grid-cols-3">
          {/* Left: Summary card */}
          <div className="rounded-2xl border border-neutral-600/50 bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                {data.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">{data.heading}</h3>
                <p className="mt-1 text-sm text-neutral-600">{data.intro}</p>
              </div>
            </div>

            {/* SEO tags / intents */}
            <div className="mt-5 flex flex-wrap gap-2">
              {data.seoTags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-amber-300 px-3 py-1.5 text-xs text-neutral-900">
                  <Globe2 className="h-3.5 w-3.5" />
                  {t}
                </span>
              ))}
            </div>

        

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-white shadow transition hover:bg-amber-600">
                Book a Free Site Audit <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg border border-neutral-500 bg-white px-5 py-2.5 font-semibold text-neutral-900 hover:bg-neutral-50">
                View Recent Installs
              </a>
            </div>
          </div>

          {/* Right: Feature grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {data.points.map((p) => (
              <div key={p.title} className="group rounded-xl border border-neutral-600/50 bg-white/90 p-5 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-emerald-50 p-2 text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{p.title}</h4>
                    <p className="mt-1 text-sm text-neutral-700">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process timeline */}
        <div className="mt-12">
          <h3 className="mb-4 text-center text-md font-semibold uppercase tracking-wider text-orange-600">How it works</h3>
          <ol className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: <MapPin className="h-4 w-4" />, t: "Site Survey", d: "On‑site assessment & shade study" },
              { icon: <Grid className="h-4 w-4" />, t: "Design & BoQ", d: "Optimized strings & safety BoM" },
              { icon: <ShieldCheck className="h-4 w-4" />, t: "Install", d: "Neat cabling, QA & safety checks" },
              { icon: <Plug className="h-4 w-4" />, t: "Commission", d: "Net‑metering & performance handover" },
               { icon: <Plug className="h-4 w-4" />, t: "Commission", d: "Net‑metering & performance handover" },
            ].map((s, i) => (
              <li key={i} className="rounded-xl border border-neutral-600/50 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">{s.icon}</div>
                <div className="font-semibold text-neutral-900">{s.t}</div>
                <div className="mt-1 text-xs text-neutral-600">{s.d}</div>
              </li>
            ))}
          </ol>
        </div>

        
      </div>
    </section>
  );
}

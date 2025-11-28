"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SunMedium,
  MapPin,
  Sparkles,
  Building2,
  Leaf,
  BadgeCheck,
  Download,
  ChevronRight,
  X,
} from "lucide-react";

/* ───────────────────────────────── Types ───────────────────────────────── */
type Project = {
  name: string;
  segment: string;
  location: string;
  description: string;
  image: string;
  capacity: string;
  roofType: string;
  co2Mitigated: string;
  annualGen: string;
  payback: string;
  savings: string;
  caseStudyUrl?: string;

  // NEW EXTRA DETAIL FIELDS (all optional)
  clientType?: string;
  clientName?: string;
  commissioningYear?: string;
  modulesUsed?: string;
  invertersUsed?: string;
  mountingType?: string;
  specialFeatures?: string[];
  keyObjectives?: string[];
  challenges?: string[];
  implementationHighlights?: string[];
};

/* ───────────────────────────────── Data ───────────────────────────────── */
const projects: Project[] = [
  {
    name: "Industrial Solar Rooftop Project – Gujarat",
    segment: "Industrial",
    location: "Vadodara, Gujarat",
    description:
      "A 1.5 MWp rooftop solar system designed for continuous operations with smart energy analytics and minimal maintenance requirements.",
    image:
      "https://truesun.in/wp-content/uploads/2021/06/IMG-20210406-WA0010-768x575.jpg",
    capacity: "1.5 MWp",
    roofType: "RCC Roof",
    co2Mitigated: "2,000 tonnes/yr",
    annualGen: "2.1 GWh/yr",
    payback: "3.8 years",
    savings: "₹55L/yr",
    caseStudyUrl: "#",
    clientType: "Continuous-process manufacturing unit",
    clientName: "Leading chemical manufacturer",
    commissioningYear: "FY 2023–24",
    modulesUsed: "540 Wp mono PERC, Tier-1 modules",
    invertersUsed: "String inverters with DC combiner boxes",
    mountingType: "RCC ballast structure with corrosion-protected fasteners",
    keyObjectives: [
      "Reduce daytime grid consumption and diesel usage",
      "Achieve payback under 4 years",
      "Enable remote performance monitoring for management",
    ],
    challenges: [
      "Limited roof availability due to existing utilities (HVAC, tanks, vents)",
      "Non-uniform roof levels requiring careful string planning",
      "Need to avoid production shutdown during installation",
    ],
    implementationHighlights: [
      "Executed in phases without interrupting plant operations",
      "String-level monitoring integrated with plant energy dashboard",
      "Optimized string design for shadow-prone zones near structures",
    ],
    specialFeatures: [
      "24×7 remote monitoring and automated alerts",
      "Compact DC cabling layout for reduced losses",
      "Integrated safety interlocks and walkways for O&M teams",
    ],
  },
  {
    name: "Commercial Complex Solar Installation – Maharashtra",
    segment: "Commercial",
    location: "Pune, Maharashtra",
    description:
      "Installed a 800 kWp rooftop system for a major retail complex, ensuring 24×7 monitoring and optimized net-metering performance.",
    image:
      "https://static.fibre2fashion.com/newsresource/images/270/shutterstock-600344045_282578.jpg",
    capacity: "800 kWp",
    roofType: "Sheet Roof",
    co2Mitigated: "1,200 tonnes/yr",
    annualGen: "1.05 GWh/yr",
    payback: "4.1 years",
    savings: "₹28L/yr",
    caseStudyUrl: "#",
    clientType: "Premium retail & commercial complex",
    clientName: "Multi-brand shopping destination",
    commissioningYear: "FY 2022–23",
    modulesUsed: "535 Wp mono half-cut modules",
    invertersUsed: "String inverters with smart metering",
    mountingType: "Non-penetrative sheet-roof structures",
    keyObjectives: [
      "Offset common-area loads (HVAC, lifts, lighting)",
      "Optimize net-metering for weekday and weekend profiles",
      "Visually neat installation matching building aesthetics",
    ],
    challenges: [
      "Irregular roof geometry across multiple blocks",
      "High public footfall demanding strict safety controls",
      "Net-metering approvals with multiple HT connections",
    ],
    implementationHighlights: [
      "Segment-wise array layout aligned to block-wise loads",
      "Night-time safety work to avoid disruption during mall hours",
      "Integrated generation screens for facility management team",
    ],
    specialFeatures: [
      "Real-time display screen in lobby showing live generation",
      "Weather-compensated performance analysis",
      "Provisions for future expansion on adjacent blocks",
    ],
  },
  {
    name: "Institutional Solar Project – Maharashtra",
    segment: "Institutional",
    location: "Nagpur, Maharashtra",
    description:
      "Hybrid grid-tied solar solution for a leading university, integrating EV charging and real-time energy dashboards.",
    image:
      "https://i0.wp.com/solarquarter.com/wp-content/uploads/2022/10/18.png?fit=1200%2C675&ssl=1",
    capacity: "600 kWp",
    roofType: "RCC Roof",
    co2Mitigated: "950 tonnes/yr",
    annualGen: "900 MWh/yr",
    payback: "3.6 years",
    savings: "₹22L/yr",
    caseStudyUrl: "#",
    clientType: "Deemed university campus",
    clientName: "Multi-faculty higher education institution",
    commissioningYear: "FY 2021–22",
    modulesUsed: "Mono PERC modules with 25-year performance warranty",
    invertersUsed: "Hybrid inverters with battery-ready architecture",
    mountingType: "RCC structure with walkway and safety railing",
    keyObjectives: [
      "Showcase sustainability commitment to students and stakeholders",
      "Reduce day-time demand charges from the DISCOM",
      "Create a live learning lab for engineering students",
    ],
    challenges: [
      "Different building heights and orientations",
      "Requirement of minimal visual impact on heritage blocks",
      "Future integration with EV chargers and lab experiments",
    ],
    implementationHighlights: [
      "Distributed plant design across academic and hostel blocks",
      "Energy dashboard installed in central auditorium lobby",
      "Provisioned spare capacity for EV charging plaza",
    ],
    specialFeatures: [
      "Student-accessible dashboard for project data",
      "Hybrid-ready design to support future batteries",
      "Modules arranged to spell institute initials (visible aerially)",
    ],
  },
  {
    name: "Textile Manufacturing Plant Solar – Rajasthan",
    segment: "Industrial",
    location: "Bhilwara, Rajasthan",
    description:
      "High-efficiency rooftop system designed for heavy day-time loads with staggered start-up curves to protect machinery.",
    image: "https://etimg.etb2bimg.com/photo/78053867.cms",
    capacity: "1.2 MWp",
    roofType: "Metal Sheet",
    co2Mitigated: "1,600 tonnes/yr",
    annualGen: "1.7 GWh/yr",
    payback: "4.0 years",
    savings: "₹45L/yr",
    caseStudyUrl: "#",
    clientType: "Textile & garment manufacturing unit",
    clientName: "Export-oriented textile mill",
    commissioningYear: "FY 2022–23",
    modulesUsed: "540 Wp mono PERC high-efficiency modules",
    invertersUsed: "High-efficiency string inverters with PLC interface",
    mountingType: "Sheet-roof mounting with wind-speed certified structures",
    keyObjectives: [
      "Lower energy cost per metre of fabric produced",
      "Stabilize voltage variation affecting sensitive equipment",
      "Utilize otherwise unused roof area for predictable savings",
    ],
    challenges: [
      "High wind-speed zone requiring robust mounting design",
      "Multiple exhausts and skylights causing shadows",
      "Need to align generation with process load profile",
    ],
    implementationHighlights: [
      "Row-wise string planning to minimize shadow losses",
      "Integrated plant alarms with control room dashboard",
      "Calibrated start-up strategy to protect motors and drives",
    ],
    specialFeatures: [
      "Export-ready monitoring reports for ESG compliance",
      "Monthly performance review support for client team",
      "Provision for adding ground-mount extension in Phase-II",
    ],
  },
];

/* ─────────────────────── Derived stats ─────────────────────── */
function parseNumber(str: string): number {
  const cleaned = str.replace(/,/g, "");
  const match = cleaned.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

// total capacity in kWp
const totalCapacityKw = projects.reduce((sum, p) => {
  const n = parseNumber(p.capacity);
  if (p.capacity.toLowerCase().includes("mw")) return sum + n * 1000;
  return sum + n;
}, 0);

const totalCapacityLabel =
  totalCapacityKw >= 1000
    ? `${(totalCapacityKw / 1000).toFixed(1)} MWp`
    : `${totalCapacityKw.toFixed(0)} kWp`;

const totalCo2Tonnes = projects.reduce(
  (sum, p) => sum + parseNumber(p.co2Mitigated),
  0
);

const uniqueSegments = Array.from(new Set(projects.map((p) => p.segment)));
const uniqueStates = Array.from(
  new Set(
    projects.map((p) => {
      const parts = p.location.split(",");
      return parts[parts.length - 1].trim();
    })
  )
);

/* ─────────────────────── Small UI helpers ─────────────────────── */

function StatPill({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 px-3 py-2 text-xs text-slate-100 ring-1 ring-slate-700/70">
      <Icon className="h-4 w-4 text-amber-300" />
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
        <span className="text-xs font-semibold">{value}</span>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-600/50 bg-white/90 px-4 py-3 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50">
        <Icon className="h-4 w-4 text-sky-600" />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-semibold text-slate-900">
          {value}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Modal component ─────────────────────── */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-120 flex items-center justify-center bg-black/60 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-1.5 text-slate-100 hover:bg-black"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image */}
        <div className="relative h-52 w-full lg:h-64">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute left-5 right-14 bottom-4 space-y-2 text-slate-50">
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/95 px-3 py-1 text-xs font-semibold text-white">
                <SunMedium className="h-3.5 w-3.5" />
                {project.segment}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1 text-[11px]">
                <MapPin className="h-3.5 w-3.5 text-sky-300" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1 text-[11px]">
                <Building2 className="h-3.5 w-3.5 text-amber-300" />
                {project.capacity} • {project.roofType}
              </span>
              {project.commissioningYear && (
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1 text-[11px]">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" />
                  Commissioned: {project.commissioningYear}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold sm:text-xl">{project.name}</h3>
          </div>
        </div>

        {/* Body */}
        <div className="grid max-h-112 gap-6 overflow-y-auto p-5 sm:p-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* LEFT SIDE – STORY & NARRATIVE */}
          <div className="space-y-4">
            {/* Client info */}
            {(project.clientType || project.clientName) && (
              <div className="rounded-2xl bg-slate-50 p-3 text-[11px] text-slate-600 sm:text-xs">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Client Profile
                </div>
                <div className="mt-1 text-slate-800">
                  {project.clientName && (
                    <span className="font-semibold">
                      {project.clientName}
                    </span>
                  )}
                  {project.clientName && project.clientType && " · "}
                  {project.clientType}
                </div>
              </div>
            )}

            <p className="text-sm text-slate-700">{project.description}</p>

            {/* Objectives & challenges */}
            <div className="grid gap-3 sm:grid-cols-2">
              {project.keyObjectives && project.keyObjectives.length > 0 && (
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Key objectives
                  </div>
                  <ul className="mt-2 space-y-1.5 text-[11px] text-slate-700">
                    {project.keyObjectives.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Site challenges
                  </div>
                  <ul className="mt-2 space-y-1.5 text-[11px] text-slate-700">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Outcome summary */}
            <div className="rounded-2xl bg-slate-50 p-3 text-[11px] text-slate-600">
              <span className="font-semibold text-slate-800">
                Project outcome:
              </span>{" "}
              Stable generation of {project.annualGen} with CO₂ savings of{" "}
              {project.co2Mitigated}, improving payback to{" "}
              <span className="font-semibold">{project.payback}</span> and
              delivering roughly{" "}
              <span className="font-semibold">{project.savings}</span> in annual
              savings.
            </div>

            {/* Implementation highlights */}
            {project.implementationHighlights &&
              project.implementationHighlights.length > 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Implementation highlights
                  </div>
                  <ul className="mt-2 space-y-1.5 text-[11px] text-slate-700">
                    {project.implementationHighlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.caseStudyUrl || "#"}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-slate-800"
              >
                <Download className="h-4 w-4" />
                Download case study
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-sky-900"
              >
                Talk about a similar project
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE – PERFORMANCE & TECH CONFIG */}
          <div className="space-y-4 rounded-2xl bg-slate-50 p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Performance snapshot
            </div>

            <div className="grid gap-2">
              <StatPill
                icon={SunMedium}
                label="Annual generation"
                value={project.annualGen}
              />
              <StatPill
                icon={Leaf}
                label="CO₂ mitigated"
                value={project.co2Mitigated}
              />
              <StatPill
                icon={BadgeCheck}
                label="Expected payback"
                value={project.payback}
              />
              <StatPill
                icon={Sparkles}
                label="Estimated savings"
                value={project.savings}
              />
            </div>

            {/* System configuration */}
            {(project.modulesUsed ||
              project.invertersUsed ||
              project.mountingType ||
              (project.specialFeatures &&
                project.specialFeatures.length > 0)) && (
              <div className="mt-3 border-t border-slate-200 pt-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  System configuration
                </div>
                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-700">
                  {project.modulesUsed && (
                    <li className="flex gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>
                        <span className="font-semibold">Modules: </span>
                        {project.modulesUsed}
                      </span>
                    </li>
                  )}
                  {project.invertersUsed && (
                    <li className="flex gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                      <span>
                        <span className="font-semibold">Inverters: </span>
                        {project.invertersUsed}
                      </span>
                    </li>
                  )}
                  {project.mountingType && (
                    <li className="flex gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>
                        <span className="font-semibold">Mounting: </span>
                        {project.mountingType}
                      </span>
                    </li>
                  )}
                  {project.specialFeatures &&
                    project.specialFeatures.length > 0 && (
                      <li className="flex gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-purple-500" />
                        <span>
                          <span className="font-semibold">
                            Special features:{" "}
                          </span>
                          <span className="block">
                            {project.specialFeatures.join(" • ")}
                          </span>
                        </span>
                      </li>
                    )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────── Main component ─────────────────────── */

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const activeProject = projects[activeIndex];

  /* Auto change project every 8 seconds (pause when modal open) */
  useEffect(() => {
    if (isModalOpen) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 8000);

    return () => clearInterval(id);
  }, [isModalOpen]);

  const openModalForProject = (project: Project, index: number) => {
    setActiveIndex(index);
    setModalProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProject(null);
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-0">
      {/* Subtle background blob */}
      <div className="pointer-events-none absolute inset-x-0 top-32 -z-10 h-72 bg-linear-to-r from-sky-100 via-emerald-50 to-transparent blur-3xl" />

      {/* Heading row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            Project Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            C&I Solar Installations Across India
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            A quick view of how TrueSun implementations are helping factories,
            commercial complexes and institutions reduce grid dependence and
            improve cash flow.
          </p>
        </div>

        {/* Global stats strip */}
        <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] md:text-xs">
          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-slate-50">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Cumulative Capacity
            </div>
            <div className="mt-1 text-sm font-semibold">
              {totalCapacityLabel}
            </div>
          </div>
          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-emerald-900">
            <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-600">
              CO₂ Mitigated / year
            </div>
            <div className="mt-1 text-sm font-semibold">
              {totalCo2Tonnes.toLocaleString()} tonnes
            </div>
          </div>
        </div>
      </div>

      {/* Active project hero + side stats */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        {/* Hero */}
        <motion.div
          key={activeProject.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl shadow-slate-900/40"
        >
          <div className="relative h-72 w-full sm:h-90 lg:h-118">
            <img
              src={activeProject.image}
              alt={activeProject.name}
              className="h-full w-full object-cover brightness-[0.9]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Overlay content */}
            <div className="absolute inset-x-5 bottom-5 space-y-3 text-slate-50">
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                  <SunMedium className="h-3.5 w-3.5" />
                  {activeProject.segment}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                  <MapPin className="h-3.5 w-3.5 text-sky-300" />
                  {activeProject.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                  <Building2 className="h-3.5 w-3.5 text-amber-300" />
                  {activeProject.capacity} • {activeProject.roofType}
                </span>
                {activeProject.commissioningYear && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                    <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" />
                    {activeProject.commissioningYear}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold sm:text-2xl">
                {activeProject.name}
              </h3>
              <p className="max-w-2xl text-xs text-slate-200 sm:text-sm">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openModalForProject(activeProject, activeIndex)}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-slate-900/40 hover:bg-slate-100 sm:text-sm"
                >
                  <Download className="h-4 w-4" />
                  View full case study
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-200 hover:text-white sm:text-sm"
                >
                  Discuss a similar system
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right-side stats panel */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-600/50 bg-white/90 p-4 shadow-sm shadow-black/50">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Impact Snapshot
            </div>
            <p className="mt-2 text-xs text-slate-600">
              Quick view of performance metrics for this project.
            </p>

            <div className="mt-4 grid gap-2">
              <StatPill
                icon={SunMedium}
                label="Annual generation"
                value={activeProject.annualGen}
              />
              <StatPill
                icon={Leaf}
                label="CO₂ mitigated"
                value={activeProject.co2Mitigated}
              />
              <StatPill
                icon={BadgeCheck}
                label="Expected payback"
                value={activeProject.payback}
              />
              <StatPill
                icon={Sparkles}
                label="Estimated savings"
                value={activeProject.savings}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <InfoCard
              icon={Building2}
              label="Segments Served"
              value={uniqueSegments.join(" • ")}
            />
            <InfoCard
              icon={MapPin}
              label="Installations Across"
              value={`${uniqueStates.length}+ states`}
            />
          </div>

          <div className="rounded-2xl border border-dashed border-emerald-600/50 bg-emerald-50/70 p-3 text-[11px] text-emerald-900">
            <span className="font-semibold text-emerald-800">Note: </span>
            Most C&I clients recover their investment within{" "}
            <span className="font-semibold">{activeProject.payback}</span>{" "}
            while enjoying predictable energy costs for 20–25 years.
          </div>
        </div>
      </div>

      {/* Horizontal rail of projects */}
      <div className="mt-10">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Browse Other Installations
          </div>
          <div className="text-[11px] text-slate-400">
            Click a card to open full case study
          </div>
        </div>

        <div className="-mx-6 flex gap-4 overflow-x-auto px-1 pb-2 pt-1 scroll-smooth lg:mx-0">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={project.name}
                type="button"
                onClick={() => openModalForProject(project, index)}
                className={`relative flex w-64 shrink-0 flex-col overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-transform duration-200 ${
                  isActive
                    ? "border-sky-500 shadow-[0_0_0_1px_rgba(56,189,248,0.4)] scale-[1.02]"
                    : "border-slate-600/50 hover:border-sky-300 hover:shadow-md hover:scale-[1.01]"
                }`}
              >
                <div className="relative h-28 w-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-2 left-3 flex items-center gap-2 text-[10px] text-slate-50">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2 py-0.5">
                      <SunMedium className="h-3 w-3 text-amber-300" />
                      {project.segment}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-2 py-0.5">
                      <MapPin className="h-3 w-3 text-sky-300" />
                      {project.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-3.5 py-3">
                  <div className="line-clamp-2 text-xs font-semibold text-slate-900">
                    {project.name}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-600">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">
                      {project.capacity}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">
                      {project.roofType}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">
                      {project.payback} payback
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Tap to view details</span>
                    {isActive && (
                      <ChevronRight className="h-3.5 w-3.5 text-sky-600" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modalProject && (
        <ProjectModal project={modalProject} onClose={closeModal} />
      )}
    </section>
  );
}

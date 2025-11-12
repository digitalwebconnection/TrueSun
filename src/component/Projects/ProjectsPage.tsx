"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
};

/* ───────────────────────────────── Data (sample) ───────────────────────────────── */
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
  },
  {
    name: "Commercial Complex Solar Installation – Maharashtra",
    segment: "Commercial",
    location: "Pune, Maharashtra",
    description:
      "Installed a 800 kWp rooftop system for a major retail complex, ensuring 24×7 monitoring and optimized net-metering performance.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
    capacity: "800 kWp",
    roofType: "Sheet Roof",
    co2Mitigated: "1,200 tonnes/yr",
    annualGen: "1.05 GWh/yr",
    payback: "4.1 years",
    savings: "₹28L/yr",
    caseStudyUrl: "#",
  },
  {
    name: "Institutional Solar Project – Tamil Nadu",
    segment: "Institutional",
    location: "Chennai, Tamil Nadu",
    description:
      "Hybrid grid-tied solar solution for a leading university, integrating EV charging and real-time energy dashboards.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
    capacity: "600 kWp",
    roofType: "RCC Roof",
    co2Mitigated: "950 tonnes/yr",
    annualGen: "900 MWh/yr",
    payback: "3.6 years",
    savings: "₹22L/yr",
    caseStudyUrl: "#",
  },
  
];

/* ───────────────────────────────── UI helpers ───────────────────────────────── */
const kpiPill =
  "inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200";

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-slate-700">
      <Icon className="h-4 w-4 text-sky-600" />
      <div>
        <span className="font-semibold">{label}: </span>
        {value}
      </div>
    </div>
  );
}

/* ───────────────────────────────── Modal ───────────────────────────────── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus close on open + ESC support + body scroll lock
  useEffect(() => {
    if (!project) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 grid place-items-center px-4 py-10"
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header image */}
              <div className="relative h-56 sm:h-72">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                    {project.segment}
                  </span>
                  <span className={kpiPill}>
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </span>
                </div>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="grid gap-6 p-6 sm:p-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-slate-600">{project.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <Spec icon={Sparkles} label="Plant Capacity" value={project.capacity} />
                  <Spec icon={Building2} label="Installed on" value={project.roofType} />
                  <Spec icon={SunMedium} label="Annual Generation" value={project.annualGen} />
                  <Spec icon={Leaf} label="CO₂ Mitigated" value={project.co2Mitigated} />
                  <Spec icon={BadgeCheck} label="Payback" value={project.payback} />
                  <Spec icon={BadgeCheck} label="Savings" value={project.savings} />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.caseStudyUrl || "#"}
                    className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-600 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:brightness-[1.06]"
                  >
                    <Download className="h-4 w-4" />
                    Download case study
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-sky-900"
                  >
                    Request a similar project
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ───────────────────────────────── Page ───────────────────────────────── */
export default function ProjectShowcase() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Featured Solar Projects
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Explore recent commercial and industrial installations delivering measurable savings,
          sustainability, and performance.
        </p>
      </div>

      <div className="space-y-14">
        {projects.map((p, i) => (
          <ProjectCard key={i} p={p} i={i} onOpen={() => setSelected(p)} />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

/* ───────────────────────────────── Card ───────────────────────────────── */
function ProjectCard({
  p,
  i,
  onOpen,
}: {
  p: Project;
  i: number;
  onOpen: () => void;
}) {
  const isEven = i % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14, scale: 0.98, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className={`group grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-800/50 bg-white shadow-[0_10px_30px_rgba(2,6,23,0.08)] transition h-100 hover:shadow-[0_16px_40px_rgba(2,6,23,0.12)] md:grid-cols-[1.1fr_1fr] ${
        isEven ? "md:[direction:rtl]" : ""
      }`}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      aria-label={`Open details for ${p.name}`}
    >
      {/* Text */}
      <div className={`p-6 sm:p-8 ${isEven ? "md:[direction:ltr]" : ""}`}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
            <SunMedium className="h-3.5 w-3.5" />
            {p.segment}
          </span>
          <span className={kpiPill}>
            <MapPin className="h-3.5 w-3.5" />
            {p.location}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
          {p.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-slate-600">
          {p.description}
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Spec icon={Sparkles} label="Plant Capacity" value={p.capacity} />
          <Spec icon={Building2} label="Installed on" value={p.roofType} />
          <Spec icon={SunMedium} label="Annual Generation" value={p.annualGen} />
          <Spec icon={Leaf} label="CO₂ Mitigated" value={p.co2Mitigated} />
          <Spec icon={BadgeCheck} label="Payback" value={p.payback} />
          <Spec icon={BadgeCheck} label="Savings" value={p.savings} />
        </div>

        <div className="mt-6 text-sm font-semibold text-sky-700">
          Click to view full details
        </div>
      </div>

      {/* Image */}
      <div className="relative min-h-64 sm:min-h-[280px]">
        <img
          src={p.image}
          alt={p.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/10 to-transparent" />
      </div>
    </motion.article>
  );
}

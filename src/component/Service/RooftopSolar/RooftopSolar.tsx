"use client";

import React from "react";
import type { ReactNode } from "react"; // ✅ type-only import
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ type-only import
import {
  Wrench,
  BadgeCheck,
  ClipboardCheck,
  Gauge,
  ShieldCheck,
  LineChart,
} from "lucide-react";

/* =============================
   THEME TOKENS (easy customization)
============================= */
const BRAND = {
  // You can swap to your brand tokens here
  primary: "#262755", // deep blue
  accent: "#ffd740", // warm yellow
  surface: "#ffffff",
  text: "#0f172a", // slate-900
  subtext: "#475569", // slate-600
};

/* =============================
   ANIMATION VARIANTS
============================= */
const containerStagger: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const itemRise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

/* =============================
   PRIMITIVES
============================= */
interface CardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const GlassCard: React.FC<CardProps> = ({ icon, title, desc }) => (
  <motion.article
    variants={itemRise}
    whileHover={{
      y: -6,
      scale: 1.01,
      boxShadow:
        "0 16px 40px -10px rgba(38,39,85,0.35), 0 6px 16px -6px rgba(0,0,0,0.08)",
    }}
    className="group relative h-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-md transition-all duration-300"
  >
    {/* spotlight hover */}
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          `radial-gradient(600px circle at 100% 0%, ${BRAND.accent}26 0%, transparent 60%)`,
      }}
    />
    <div className="relative z-10 flex items-start gap-4">
      <span
        className="rounded-xl p-3 shadow-inner ring-1"
        style={{
          background: `${BRAND.accent}1a`,
          color: BRAND.accent,
          boxShadow: `inset 0 0 24px ${BRAND.accent}22`,
          borderColor: `${BRAND.accent}33`,
        }}
      >
        {icon}
      </span>
      <div>
        <h4 className="text-xl font-bold" style={{ color: BRAND.text }}>
          {title}
        </h4>
        <p className="mt-2 text-base" style={{ color: BRAND.subtext }}>
          {desc}
        </p>
      </div>
    </div>
  </motion.article>
);

interface StepProps {
  idx: number;
  total: number;
  badge: string;
  title: string;
  text: string;
}

const TimelineStep: React.FC<StepProps> = ({ idx, total, badge, title, text }) => {
  const isLast = idx === total - 1;
  return (
    <motion.div
      variants={itemRise}
      transition={{ delay: idx * 0.06, duration: 0.45 }}
      className="relative"
    >
      {/* connector (desktop) */}
      {!isLast && (
        <div
          aria-hidden
          className="absolute right-[-16px] top-8 hidden h-[3px] w-[calc(100%+32px)] sm:block"
          style={{
            background: `linear-gradient(90deg, ${BRAND.accent}55, ${BRAND.accent})`,
            boxShadow: `0 0 0 2px ${BRAND.accent}10`,
          }}
        />
      )}

      {/* node */}
      <div className="flex items-start gap-3 sm:block sm:pt-12">
        <div className="flex-shrink-0">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full font-bold shadow-lg ring-4 sm:h-12 sm:w-12"
            style={{
              background: BRAND.accent,
              color: BRAND.primary,
              boxShadow: `0 8px 24px ${BRAND.accent}66`,
              borderColor: `${BRAND.accent}44`,
            }}
          >
            {idx + 1}
          </div>
        </div>

        {/* mobile connector */}
        {!isLast && (
          <div
            className="absolute left-[20px] top-[40px] h-full w-0.5 sm:hidden"
            aria-hidden
            style={{ background: `${BRAND.accent}66` }}
          />
        )}

        <div className="pb-10 sm:p-0">
          <div
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: BRAND.accent }}
          >
            {badge}
          </div>
          <h4 className="mt-1 text-xl font-bold" style={{ color: BRAND.text }}>
            {title}
          </h4>
          <p className="mt-2 text-base" style={{ color: BRAND.subtext }}>
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* =============================
   MAIN SECTION
============================= */
export default function SolutionsAndProcessV2() {
  const solutions: CardProps[] = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Design & Engineering",
      desc:
        "Layout, string sizing, wind-load analysis, and structure design tailored to your roof and site constraints.",
    },
    {
      icon: <BadgeCheck className="h-6 w-6" />,
      title: "Finance & Subsidies",
      desc:
        "MNRE/DISCOM documentation, subsidy guidance, and bank tie-ups for a smooth financial journey.",
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Installation & Commissioning",
      desc:
        "Rigorous QA–QC checklists, strict safety protocols, and grid-synced handover post commissioning.",
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Net Metering & Approvals",
      desc:
        "End-to-end application, coordination, and compliance for swift DISCOM net-metering approvals.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Maintenance (O&M)",
      desc:
        "Scheduled cleaning, IV curve tests, thermal scans, and quick SLAs to ensure peak performance.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Consulting & Feasibility",
      desc:
        "Yield assessments, DPRs, and ROI modeling for CAPEX/RESCO with realistic risk assumptions.",
    },
  ];

  const steps = [
    { badge: "Step 1", title: "Initial Feasibility", text: "Comprehensive load study, roof viability, and detailed shadow analysis." },
    { badge: "Step 2", title: "Custom Proposal", text: "Clear sizing, projected savings, payback, and full compliance scope." },
    { badge: "Step 3", title: "Regulatory Approvals", text: "Managing DISCOM documentation with on-time submission and coordination." },
    { badge: "Step 4", title: "Installation & Testing", text: "Professional mounting, precise cabling, commissioning, and QA checks." },
    { badge: "Step 5", title: "Handover & Support", text: "Monitoring app setup, team training, and AMC options." },
  ];

  // NEW: benefits, KPIs, badges, FAQ
  const benefits = [
    { k: "Up to 30% Higher Yield", v: "vs. baseline, with optimized stringing & tilt" },
    { k: "< 45 Day Install", v: "typical 10–30 kW rooftop under standard approvals" },
    { k: "Bank-grade DPR", v: "ROI models accepted by leading lenders" },
    { k: "Tier-1 BOM", v: "Adani/Polycab panels & inverters on request" },
  ];

  const badges = ["MNRE Aligned", "ISO 9001", "IEC Compliant", "Safety First"];

  const faqs = [
    { q: "What size system do I need?", a: "We start with your last 12 months' bills, sanctioned load and roof area to size a system that targets 60–90% offset depending on your tariff and goals." },
    { q: "How long is the payback?", a: "Typical residential payback ranges 3.5–5.5 years; commercial/industrial can be faster depending on tariff slab and usage profile." },
    { q: "What is covered in O&M?", a: "Periodic cleaning, electrical health checks, IV-curve tests, thermal scans, performance reporting and rapid-response SLAs." },
    { q: "Do you help with subsidies?", a: "Yes. We manage the complete MNRE/DISCOM process and documentation to accelerate approval." },
  ];

  return (
    <section className="relative overflow-hidden pt-20" style={{ background: BRAND.surface }}>
      {/* Background gradients */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="pointer-events-none absolute -top-40 -right-20 -z-10 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: `${BRAND.accent}33` }}
      />
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: `${BRAND.primary}22` }}
      />

      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Tip: Wire these fonts in your layout: Alegreya Sans SC for headings, Stencil for slogans */}
          <motion.p
            variants={itemRise}
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: BRAND.accent }}
          >
            End-to-End Solar EPC
          </motion.p>
          <motion.h2
            variants={itemRise}
            className="mt-2 text-4xl font-extrabold sm:text-5xl"
            style={{ color: BRAND.primary }}
          >
            Integrated <span style={{ color: BRAND.accent }}>Solutions</span>
          </motion.h2>
          <motion.p
            variants={itemRise}
            className="mx-auto mt-4 max-w-2xl text-lg"
            style={{ color: BRAND.subtext }}
          >
            From design to maintenance, a refined, high-performance journey for every rooftop.
          </motion.p>
        </motion.div>

        {/* NEW: KPI strip */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.k}
              variants={itemRise}
              className="rounded-2xl border bg-white/70 p-4 text-center shadow-sm backdrop-blur"
              style={{ borderColor: `${BRAND.primary}14` }}
            >
              <div className="text-base font-semibold" style={{ color: BRAND.primary }}>
                {b.k}
              </div>
              <div className="mt-1 text-sm" style={{ color: BRAND.subtext }}>
                {b.v}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((s) => (
            <GlassCard key={s.title} {...s} />
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-20 h-px w-24" style={{ background: BRAND.accent }} />

      {/* Process Timeline */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={itemRise}
            className="text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: BRAND.accent }}
          >
            The Solar Execution Roadmap
          </motion.p>
          <motion.h2
            variants={itemRise}
            className="mt-2 text-4xl font-extrabold sm:text-5xl"
            style={{ color: BRAND.primary }}
          >
            Our <span style={{ color: BRAND.accent }}>5-Step Process</span>
          </motion.h2>
          <motion.p
            variants={itemRise}
            className="mx-auto mt-4 max-w-2xl text-lg"
            style={{ color: BRAND.subtext }}
          >
            Built for predictability, transparency, and on-time delivery.
          </motion.p>
        </motion.div>

        {/* progress rail (desktop) */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0, ease: "easeInOut", delay: 0.15 }}
          className="relative mx-auto mt-14 hidden h-1 w-full max-w-5xl origin-left rounded-full sm:block"
          style={{
            background: `linear-gradient(90deg, ${BRAND.primary}22, ${BRAND.accent}77)`,
            boxShadow: `0 8px 24px ${BRAND.accent}33`,
          }}
          aria-hidden
        />

        {/* steps */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-5"
        >
          {steps.map((s, idx) => (
            <TimelineStep
              key={s.badge}
              idx={idx}
              total={steps.length}
              badge={s.badge}
              title={s.title}
              text={s.text}
            />
          ))}
        </motion.div>
      </div>

      {/* NEW: Compliance & trust badges */}
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-3 sm:grid-cols-4"
        >
          {badges.map((b) => (
            <motion.div
              key={b}
              variants={itemRise}
              className="rounded-xl border bg-white/60 px-4 py-3 text-center text-sm font-semibold backdrop-blur"
              style={{ borderColor: `${BRAND.primary}14`, color: BRAND.primary }}
            >
              {b}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* NEW: CTA banner */}
      <div className="relative mx-auto mb-16 max-w-6xl overflow-hidden rounded-3xl px-6 py-10 sm:px-10">
        <div className="absolute inset-0 -z-10" style={{
          background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
          opacity: 0.92,
        }} />
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
        >
          <motion.h3 variants={itemRise} className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to cut your bills and carbon?
          </motion.h3>
          <motion.a
            variants={itemRise}
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-gray-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get a Free Rooftop Assessment
          </motion.a>
        </motion.div>
      </div>

      {/* NEW: FAQ */}
      <div className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <motion.h3 variants={itemRise} className="text-3xl font-extrabold" style={{ color: BRAND.primary }}>
            Frequently Asked Questions
          </motion.h3>
          <motion.p variants={itemRise} className="mt-2 text-base" style={{ color: BRAND.subtext }}>
            Quick answers to the most common solar queries.
          </motion.p>
        </motion.div>

        <div className="divide-y rounded-2xl border bg-white/70 backdrop-blur" style={{ borderColor: `${BRAND.primary}14` }}>
          {faqs.map((f, i) => (
            <FAQRow key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple FAQ row with motion expand
const FAQRow: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="px-5 py-4">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-base font-semibold" style={{ color: BRAND.primary }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl leading-none"
          style={{ color: BRAND.accent }}
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden pr-10"
      >
        <p className="pt-2 text-sm" style={{ color: BRAND.subtext }}>{a}</p>
      </motion.div>
    </div>
  );
};

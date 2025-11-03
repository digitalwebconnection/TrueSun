"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionProps, Variants, Easing } from "framer-motion";
import { Sun, Zap, Leaf, Users, Award, CheckCircle, Factory, Building2, Battery, ShieldCheck, GaugeCircle, Sparkles } from "lucide-react";

// ---------------------------
// Motion Setup
// ---------------------------
const EASE: Easing = [0.25, 0.46, 0.45, 0.94];

const fadeUpProps: MotionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE },
  viewport: { once: true, amount: 0.3 },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2, ease: EASE } },
};

const childFade: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

const floatIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const boxTilt: MotionProps = {
  whileHover: { y: -4, rotateX: -2, rotateY: 2, transition: { type: "spring", stiffness: 250, damping: 20 } },
};

// Parallax util
const useParallax = (distance: number) => {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, -distance]);
};

// ---------------------------
// MAIN COMPONENT (Default Export)
// ---------------------------
export default function AboutTrueSun() {
  const y = useParallax(120);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/40 to-emerald-50/40 text-gray-900">
      {/* Soft nebula background */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-28 -left-16 h-72 w-72 rounded-full bg-yellow-200 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-96 w-96 rounded-full bg-green-200 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-100 blur-3xl" />
      </motion.div>

      <HeroSplit />
      <StatsRibbon />
      <BentoSolutions />
      <ZigZagWhyUs />
      <CurvedSteps />
      <AlternatingTimeline />
      <FAQAccordion />
      <CTASection />
    </section>
  );
}

// ---------------------------
// Sections (Varied "stretched" layouts, not all boxes)
// ---------------------------
function HeroSplit() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8">
      {/* Diagonal top accent */}
      <div className="pointer-events-none absolute -top-16 left-0 h-40 w-full -skew-y-3 bg-gradient-to-r from-yellow-200/60 to-green-200/60" />

      <div className="relative grid items-center gap-12 lg:grid-cols-12">
        <motion.div {...fadeUpProps} className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/70 px-4 py-1.5 text-xs font-semibold text-amber-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Trusted Solar Partner
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            About <span className="bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text text-transparent">TrueSun</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            We democratize clean energy—bringing high‑performance solar to homes, businesses, and industries with speed, compliance, and lifetime support.
          </p>
          <div className="mt-8 grid w-full grid-cols-2 gap-3 sm:max-w-xl">
            {[
              { icon: Sun, label: "MNRE & ALMM", sub: "Tier‑1 components" },
              { icon: ShieldCheck, label: "Zero‑Hassle", sub: "Net metering + subsidy" },
              { icon: GaugeCircle, label: "High Yield", sub: "AI‑aided design" },
              { icon: Users, label: "AMC & 24/7", sub: "Remote monitoring" },
            ].map((i, idx) => (
              <motion.div key={idx} variants={childFade} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 p-3 shadow-sm backdrop-blur">
                <i.icon className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{i.label}</div>
                  <div className="text-xs text-gray-600">{i.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Glass card stack */}
        <motion.div variants={floatIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <motion.div className="relative rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl" {...boxTilt}>
              <div className="flex items-center gap-3">
                <Leaf className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-bold">Our Vision</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                Lead India toward <span className="font-semibold text-green-700">net‑zero</span>—500+ MWp by 2030 via smart grids, storage, and community solar.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Innovative smart grid integration",
                  "Battery storage solutions",
                  "Community solar initiatives",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-green-600" /> <span>{t}</span></li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="absolute -right-6 -bottom-6 hidden w-[88%] rounded-3xl border border-amber-200 bg-amber-50/70 p-4 shadow-xl backdrop-blur xl:block" {...boxTilt}>
              <div className="flex items-center gap-3">
                <Sun className="h-5 w-5 text-amber-600" />
                <h4 className="text-sm font-bold">Our Mission</h4>
              </div>
              <p className="mt-1 text-xs text-gray-700">
                Make solar accessible to every household—fast surveys, compliant installs, lifetime care.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StatsRibbon() {
  const stats = [
    { k: ">85 MWp", d: "installed capacity" },
    { k: "1,000+", d: "sites energized" },
    { k: "4.9/5", d: "customer rating" },
    { k: "15+", d: "states served" },
  ];
  return (
    <div className="relative bg-gradient-to-r from-amber-100 via-white to-emerald-100 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <motion.ul variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.li key={i} variants={childFade} className="rounded-2xl border border-amber-200 bg-white/70 p-5 text-center shadow-sm backdrop-blur">
              <div className="text-2xl font-extrabold tracking-tight text-gray-900">{s.k}</div>
              <div className="text-xs text-gray-600">{s.d}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {/* angled divider */}
      <div className="pointer-events-none absolute -bottom-6 left-0 h-6 w-full -skew-y-2 bg-gradient-to-r from-amber-200/40 to-emerald-200/40" />
    </div>
  );
}

function BentoSolutions() {
  const tiles = [
    { span: "col-span-2 row-span-2", title: "Residential Rooftop", bullets: ["3–10 kW", "On‑grid / Hybrid", "App monitoring"], Icon: Sun, tint: "from-amber-50 to-white", border: "border-amber-300" },
    { span: "col-span-1 row-span-1", title: "Commercial", bullets: ["10–250 kW", "CAPEX / OPEX"], Icon: Building2, tint: "from-blue-50 to-white", border: "border-blue-300" },
    { span: "col-span-1 row-span-2", title: "Industrial", bullets: ["250 kW–5 MW", "Harmonics audits"], Icon: Factory, tint: "from-emerald-50 to-white", border: "border-emerald-300" },
    { span: "col-span-2 row-span-1", title: "Utility Scale", bullets: [">5 MWp", "SCADA & EPC"], Icon: Zap, tint: "from-violet-50 to-white", border: "border-violet-300" },
  ];
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <motion.div {...fadeUpProps} className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Solutions we offer</h2>
        <p className="mt-2 text-gray-600">A flexible bento layout that scales from homes to utilities</p>
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid auto-rows-[12rem] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Make first tile span 2 columns on large for staggered feel */}
        {tiles.map((t, i) => (
          <motion.div key={i} variants={childFade} {...boxTilt} className={`group relative overflow-hidden rounded-3xl border ${t.border} bg-gradient-to-br ${t.tint} p-6 shadow-sm ${i === 0 ? "lg:col-span-2 lg:row-span-2" : t.span.split(" ").map((s) => "lg:" + s).join(" ")}`}>
            <div className="flex items-center gap-3">
              <t.Icon className="h-6 w-6 text-gray-800/80" />
              <h3 className="text-lg font-semibold">{t.title}</h3>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-gray-700">
              {t.bullets.map((b, bi) => (
                <li key={bi} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gray-800/70" />{b}</li>
              ))}
            </ul>
            <Battery className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rotate-12 text-gray-800/10" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function ZigZagWhyUs() {
  const points = [
    { Icon: Award, title: "Certified Excellence", desc: "Tier‑1 components & BIS compliance ensure peak performance & safety." },
    { Icon: Zap, title: "Smart Technology", desc: "AI‑assisted design + real‑time monitoring to maximize yield." },
    { Icon: Users, title: "Lifetime Partnership", desc: "AMC plans, SLAs, and remote care—support that stays." },
    { Icon: ShieldCheck, title: "Compliance Mastery", desc: "Net metering & subsidy documentation without headaches." },
  ];
  return (
    <div className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUpProps} className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold">Why industry leaders <span className="text-emerald-600">trust us</span></h2>
          <p className="mt-4 text-gray-600">A zig‑zag layout for visual rhythm, not more boxes.</p>
        </motion.div>

        <div className="space-y-16">
          {points.map((p, i) => (
            <motion.div key={i} variants={floatIn} initial="hidden" whileInView="show" viewport={{ once: true }} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-last" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-amber-100/50 to-emerald-100/50 blur-xl" />
                <div className="rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-xl backdrop-blur" >
                  <div className="flex items-center gap-3">
                    <p.Icon className="h-7 w-7 text-emerald-600" />
                    <h3 className="text-xl font-bold">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-gray-700">{p.desc}</p>
                </div>
              </div>
              <div className="relative h-56 w-full overflow-hidden rounded-3xl border border-dashed border-emerald-300/70 bg-gradient-to-br from-emerald-50 to-white">
                {/* Decorative diagonal stripes */}
                <div className="absolute inset-0 -skew-x-6 bg-[repeating-linear-gradient(45deg,transparent_0,transparent_8px,rgba(16,185,129,0.08)_8px,rgba(16,185,129,0.08)_16px)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* curved divider */}
      <svg className="-mb-1 mt-20 block h-10 w-full text-emerald-50" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,0 C320,40 1120,40 1440,0 L1440,40 L0,40 Z" />
      </svg>
    </div>
  );
}

function CurvedSteps() {
  const steps = [
    { n: 1, title: "Free Site Survey", desc: "Load assessment, shading, and roof structure check" },
    { n: 2, title: "Design & Proposal", desc: "Energy yield, ROI, and bill‑saving report" },
    { n: 3, title: "Approvals & Subsidy", desc: "DISCOM coordination and subsidy documentation" },
    { n: 4, title: "Installation", desc: "Certified hardware, safety compliance, QA checks" },
    { n: 5, title: "Handover & Training", desc: "App setup, performance KPIs, maintenance guide" },
  ];
  return (
    <div className="relative bg-emerald-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...fadeUpProps} className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="mt-2 text-gray-600">A curved stepper path that guides the eye</p>
        </motion.div>

        <motion.ol variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative grid gap-6 md:grid-cols-5">
          {/* Curved path line */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -z-10 hidden h-1 -translate-y-1/2 rounded bg-gradient-to-r from-amber-300 via-emerald-300 to-amber-300 md:block" />
          {steps.map((s, i) => (
            <motion.li key={i} variants={childFade} className="relative rounded-2xl border border-emerald-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700 ring-1 ring-amber-300">{s.n}</div>
              <div className="font-semibold text-gray-900">{s.title}</div>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
}

function AlternatingTimeline() {
  const timeline = [
    { year: "2015", title: "Founded", desc: "TrueSun began with a vision to make solar accessible." },
    { year: "2017", title: "1st 100 Projects", desc: "Crossed 10 MWp milestone in just 2 years." },
    { year: "2019", title: "National Expansion", desc: "Expanded to 15+ states across India." },
    { year: "2022", title: "50 MWp Achieved", desc: "Touched 1,000+ homes & businesses." },
    { year: "2024", title: "Market Leader", desc: "85+ MWp installed, 4.9/5 customer rating." },
  ];
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2 {...fadeUpProps} className="mb-12 text-4xl font-bold text-gray-900">Our Journey</motion.h2>
      <div className="relative">
        {/* central line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded bg-gradient-to-b from-amber-300 via-emerald-300 to-amber-300" />
        <motion.ul variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-8">
          {timeline.map((t, i) => (
            <motion.li key={i} variants={childFade} className={`relative flex ${i % 2 ? "md:justify-start" : "md:justify-end"}`}>
              <div className={`w-full md:w-1/2 ${i % 2 ? "md:pl-8" : "md:pr-8"}`}>
                <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="absolute -left-3 top-6 hidden h-6 w-6 rounded-full border-4 border-white bg-amber-500 shadow md:block" />
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700">{t.year}</div>
                  <div className="mt-1 text-xl font-semibold text-gray-900">{t.title}</div>
                  <p className="mt-1 text-gray-600">{t.desc}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const faqs = [
    { q: "Can you help with subsidies?", a: "Yes, we handle end‑to‑end documentation and DISCOM coordination for applicable schemes." },
    { q: "Do you offer O&M?", a: "We provide AMC and remote monitoring with SLAs tailored to your plant size." },
    { q: "What warranties do I get?", a: "Typically 25‑year performance on modules, 5‑10 years on inverters, and workmanship warranty." },
    { q: "How soon can I go live?", a: "Residential systems often go live in 2‑4 weeks depending on approvals; commercial timelines vary." },
  ];
  return (
    <div className="bg-gradient-to-br from-white via-amber-50/50 to-emerald-50/50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...fadeUpProps} className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold">FAQs</h2>
          <p className="mt-2 text-gray-600">Quick answers to common questions</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <AccordionItem key={i} q={f.q} a={f.a} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  // Fixed: removed invalid `whileGroupOpen` from Framer Motion.
  // Uses Tailwind's `group-open` variant to rotate the plus icon when <details> is open.
  return (
    <details className="group">
      <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left text-base font-semibold text-gray-900">
        {q}
        <span className="rounded-full border border-gray-300 p-1 transition-transform duration-300 group-open:rotate-45">
          <PlusIcon />
        </span>
      </summary>
      <div className="bg-gradient-to-r from-white to-emerald-50/40 p-5 pt-0 text-gray-700">{a}</div>
    </details>
  );
}
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CTASection() {
  return (
    <div className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.15)_0,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.15)_0,transparent_40%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUpProps} className="rounded-3xl border border-amber-200 bg-white/80 p-8 text-center shadow-2xl backdrop-blur">
          <h3 className="text-2xl font-bold">Ready to start your solar journey?</h3>
          <p className="mt-2 text-gray-700">Get a free survey, transparent proposal, and guaranteed compliance—end to end.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#" className="rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-700">Book Free Survey</a>
            <a href="#" className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">Download Company Profile</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

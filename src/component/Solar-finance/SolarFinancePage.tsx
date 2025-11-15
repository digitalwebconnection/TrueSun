"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CreditCard,
  CircleDollarSign,
  Handshake,
  Home,
  Building2,
  Factory,
  TrendingUp,
  Zap,
  DollarSign,
  Calculator,
  ShieldCheck,
  BadgeCheck,
  Award,
  CheckCircle2,
  CalendarClock,
  ClipboardCheck,
  Wrench,
  Wallet,
  LineChart,
  Sparkles,
  Users2,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* ===================== TYPES ===================== */

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface OptionCardProps {
  tag?: string;
  color?: string;
  title: string;
  icon: React.ReactNode;
  points: string[];
}

interface ScenarioCardProps {
  tag: string;
  title: string;
  systemCost: string;
  emi: string;
  savings: string;
  tenure: string;
  icon: React.ReactNode;
  gradient: string;
}

/* ===================== ANIMATION HELPERS ===================== */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const floatVariants: Variants = {
  initial: { y: 0 },
  animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
};

const cardHover: Variants = {
  initial: { y: 0, scale: 1 },
  hover: { scale: 1.03, y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", transition: { duration: 0.25 } },
};

function AnimatedSection({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section id={id} className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
      {children}
    </motion.section>
  );
}

/* ===================== PAGE WRAPPER ===================== */

export default function SolarFinancePage() {
  return (
    <main
      className="
        relative mx-auto max-w-7xl pb-24 pt-12 space-y-10
        px-6 md:px-0
        overflow-x-clip
      "
    >
      <BGDecoration />

      <HeroCTA />
      <TrustBadges />

      <OverviewSection />
      <FinanceSnapshot />
      <SavingsCalculator />

      <FinanceOptionsSection />
      <FinanceComparisonTable />

      <ExampleScenariosSection />
      <ProcessTimeline />
    </main>
  );
}

function BGDecoration() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute top-1/3 right-0 translate-x-1/3 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_1px_1px,var(--color-slate-300)_1px,transparent_1px)]/25 bg-size-[20px_20px]" />
      <div className="absolute inset-x-0 -top-16 h-40 bg-linear-to-b from-white to-transparent" />
    </div>
  );
}

/* ===================== HERO + TRUST ===================== */

function HeroCTA() {
  return (
    <AnimatedSection className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] items-center">
      <div className="space-y-4">
        <motion.h1 className="text-4xl text-center md:text-5xl font-extrabold tracking-tight text-slate-900" variants={fadeUp}>
          Solar Finance that <span className="text-emerald-600">pays for itself</span>
        </motion.h1>
        <motion.p className="text-lg text-center mx-auto text-slate-700 max-w-5xl" variants={fadeUp}>
          Turn high electricity bills into predictable monthly payments. Own the system or pay only for the energy—your call.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-2xl border border-slate-600/30 bg-white p-5 shadow-xl"
      >
        <div className="grid grid-cols-2 gap-4 text-sm">
          <MiniKPI icon={<ShieldCheck className="h-4 w-4" />} label="Tier-1 Hardware" value="25-yr Warranty" />
          <MiniKPI icon={<LineChart className="h-4 w-4" />} label="Cash-flow" value="Positive from Day 1*" />
          <MiniKPI icon={<Wallet className="h-4 w-4" />} label="Zero-CAPEX" value="PPA / RESCO" />
          <MiniKPI icon={<ClipboardCheck className="h-4 w-4" />} label="Trusted Partners" value="Banks + NBFCs" />
        </div>
        <p className="mt-3 text-xs text-slate-500">*Subject to tariff, site, and financing terms.</p>
      </motion.div>
    </AnimatedSection>
  );
}

function TrustBadges() {
  return (
    <AnimatedSection className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <Badge icon={<BadgeCheck className="h-5 w-5" />} text="MNRE Aligned" />
      <Badge icon={<Award className="h-5 w-5" />} text="ISO Practices" />
      <Badge icon={<CheckCircle2 className="h-5 w-5" />} text="650+ Projects" />
      <Badge icon={<ShieldCheck className="h-5 w-5" />} text="Performance O&M" />
    </AnimatedSection>
  );
}

/* ===================== OVERVIEW ===================== */

function OverviewSection() {
  return (
    <AnimatedSection id="overview" className="space-y-4 text-center">
      <motion.h2 className="text-3xl font-bold text-slate-900" variants={fadeUp}>
        How Solar Finance Works 💡
      </motion.h2>
      <motion.p className="text-lg text-slate-700 max-w-3xl mx-auto" variants={fadeUp}>
        Instead of paying the entire cost upfront, convert it into monthly payments. Your{" "}
        <span className="font-extrabold text-emerald-600">bill savings help pay for the system</span>—often making cash-flow positive from day one.
      </motion.p>

      <motion.div className="grid gap-6 sm:grid-cols-3 pt-2" variants={stagger}>
        <OverviewCard icon={<Home className="h-6 w-6" />} title="Residential" desc="Cut bills and hedge against tariff hikes." />
        <OverviewCard icon={<Building2 className="h-6 w-6" />} title="Commercial (SME)" desc="Stabilise daytime energy costs." />
        <OverviewCard icon={<Factory className="h-6 w-6" />} title="Industrial" desc="Offset process loads for major OPEX cuts." />
      </motion.div>
    </AnimatedSection>
  );
}

/* ===================== FINANCE SNAPSHOT (INFOGRAPHIC CARDS) ===================== */

function FinanceSnapshot() {
  const items = [
    { icon: <TrendingUp className="h-5 w-5" />, label: "Typical ROI", value: "20–28% IRR" },
    { icon: <CalendarClock className="h-5 w-5" />, label: "Payback", value: "~4–5 years" },
    { icon: <Zap className="h-5 w-5" />, label: "Savings", value: "₹6k–65k / mo" },
    { icon: <DollarSign className="h-5 w-5" />, label: "EMI Range", value: "₹5k–50k / mo" },
  ];
  return (
    <AnimatedSection className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {items.map((it, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="flex items-center gap-3 rounded-xl border border-slate-600/30 bg-white p-4 shadow-sm"
        >
          <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
            {it.icon}
          </div>
          <div>
            <div className="text-xs text-slate-500">{it.label}</div>
            <div className="text-base font-semibold text-slate-900">{it.value}</div>
          </div>
        </motion.div>
      ))}
    </AnimatedSection>
  );
}

/* ===================== SAVINGS CALCULATOR ===================== */

function SavingsCalculator() {
  const [bill, setBill] = useState(8000);
  const [rate, setRate] = useState(10); // interest %
  const [tenure, setTenure] = useState(72); // months

  // simple assumptions (illustrative only)
  const monthlyGenerationKWh = useMemo(() => Math.max(250, Math.min(1800, Math.round(bill / 6))), [bill]); // proxy
  const tariff = 9; // ₹/kWh
  const savings = monthlyGenerationKWh * tariff;

  // mock EMI using flat-rate-ish approx (for UX demo)
  const principal = Math.max(1.6, (bill * 36) / 100000) * 100000; // ~ system size proxy
  const monthlyRate = rate / 12 / 100;
  const emi = Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1) || 0);

  const positive = savings >= emi;

  return (
    <AnimatedSection id="calculator" className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
      <motion.div variants={fadeUp} className="flex items-center justify-between gap-4 flex-wrap">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="h-6 w-6 text-emerald-600" /> Quick Savings Calculator
        </h3>
        <span className={`text-sm font-semibold ${positive ? "text-emerald-700" : "text-slate-600"}`}>
          {positive ? "Cash-flow Positive" : "Close to Break-even"}
        </span>
      </motion.div>

      <div className="mt-5 grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
        {/* Controls */}
        <div className="space-y-6">
          <LabeledSlider label="Your monthly bill (₹)" min={2000} max={150000} step={500} value={bill} onChange={setBill} />
          <div className="grid grid-cols-2 gap-4">
            <LabeledSlider label="Interest rate (%)" min={6} max={16} step={0.5} value={rate} onChange={setRate} />
            <LabeledSlider label="Tenure (months)" min={36} max={120} step={6} value={tenure} onChange={setTenure} />
          </div>
          <p className="text-xs text-slate-500">This is an illustrative tool. Exact values depend on site, shadow, tariff, and final lender terms.</p>
        </div>

        {/* Results */}
        <motion.div variants={fadeUp} className="grid gap-4">
          <ResultCard label="Approx. Monthly EMI" value={`₹${emi.toLocaleString()}/mo`} tone="indigo" icon={<TrendingUp className="h-4 w-4" />} />
          <ResultCard label="Est. Monthly Savings" value={`₹${savings.toLocaleString()}/mo`} tone="emerald" icon={<Zap className="h-4 w-4" />} />
          <ResultCard label="Cashflow (Savings − EMI)" value={`₹${(savings - emi).toLocaleString()}/mo`} tone={positive ? "emerald" : "slate"} icon={<Wallet className="h-4 w-4" />} />
          <a href="/contact" className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition">
            Get a custom EMI plan <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function LabeledSlider({
  label, min, max, step, value, onChange,
}: { label: string; min: number; max: number; step?: number; value: number; onChange: (v: number) => void; }) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-semibold text-slate-900">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step ?? 1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-emerald-600"
      />
    </label>
  );
}

function ResultCard({ label, value, tone, icon }: { label: string; value: string; tone: "emerald" | "indigo" | "slate"; icon: React.ReactNode }) {
  const color = tone === "emerald" ? "emerald" : tone === "indigo" ? "indigo" : "slate";
  return (
    <div className={`flex items-center justify-between rounded-xl border p-4 bg-${color}-50 border-${color}-200`}>
      <div className="flex items-center gap-2 text-slate-700">
        <div className={`h-8 w-8 rounded-lg bg-white/70 border border-white/60 flex items-center justify-center`}>{icon}</div>
        <span className="text-sm">{label}</span>
      </div>
      <span className={`text-sm font-bold text-${color}-700`}>{value}</span>
    </div>
  );
}

/* ===================== FINANCE OPTIONS + COMPARISON ===================== */

function FinanceOptionsSection() {
  return (
    <AnimatedSection id="options" className="space-y-6 text-center">
      <motion.h2 className="text-3xl font-bold text-slate-900" variants={fadeUp}>
        Finance Options with Truesun 🤝
      </motion.h2>
      <motion.p className="text-lg text-slate-700 max-w-3xl mx-auto" variants={fadeUp}>
        Choose between owning the plant (CAPEX) or paying only for energy (PPA/RESCO). Mix across sites if needed.
      </motion.p>

      <motion.div className="grid gap-6 md:grid-cols-3 pt-2" variants={stagger}>
        <OptionCard
          tag="Most Preferred"
          color="border-emerald-400 bg-emerald-50 shadow-lg shadow-emerald-200/50"
          title="Loan / EMI (CAPEX)"
          icon={<CircleDollarSign className="h-6 w-6 text-emerald-600" />}
          points={["Own from day one", "Savings help cover EMI", "Depreciation & tax (where applicable)"]}
        />
        <OptionCard
          title="PPA / RESCO"
          icon={<Handshake className="h-6 w-6 text-sky-600" />}
          points={["Zero CAPEX", "Pay per kWh at agreed tariff", "Off-balance sheet for many businesses"]}
        />
        <OptionCard
          title="Hybrid / Mix"
          icon={<CreditCard className="h-6 w-6 text-amber-600" />}
          points={["Own some, PPA some", "Useful across multi-site portfolios", "Optimise risk & payback"]}
        />
      </motion.div>
    </AnimatedSection>
  );
}

function FinanceComparisonTable() {
  const rows = [
    { key: "Ownership", capex: "You", ppa: "RESCO/Lessor", hybrid: "Split" },
    { key: "Upfront Cost", capex: "Medium–High", ppa: "Zero CAPEX", hybrid: "Low–Medium" },
    { key: "Monthly Outgo", capex: "EMI", ppa: "₹/kWh tariff", hybrid: "Both" },
    { key: "Balance Sheet", capex: "Asset on books", ppa: "Off-balance sheet*", hybrid: "Partial" },
    { key: "Tax Benefits", capex: "Depreciation (as applicable)", ppa: "N/A", hybrid: "Partial" },
    { key: "Best For", capex: "Owners & long-term ROI", ppa: "Cash-conscious expansion", hybrid: "Mixed portfolios" },
  ];

  return (
    <AnimatedSection className="overflow-hidden rounded-2xl border border-slate-600/50 bg-white shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Criteria</th>
              <th className="px-4 py-3">CAPEX</th>
              <th className="px-4 py-3">PPA / RESCO</th>
              <th className="px-4 py-3">Hybrid</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-800">{r.key}</td>
                <td className="px-4 py-3">{r.capex}</td>
                <td className="px-4 py-3">{r.ppa}</td>
                <td className="px-4 py-3">{r.hybrid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-4 py-3 text-xs text-slate-500">*Accounting treatment depends on jurisdiction and contract structure.</p>
    </AnimatedSection>
  );
}

/* ===================== EXAMPLES ===================== */

function ExampleScenariosSection() {
  return (
    <AnimatedSection id="examples" className="space-y-6 relative">
      <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-sky-50 to-amber-50 rounded-3xl -z-10 opacity-50 overflow-hidden" />
      <motion.h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center" variants={fadeUp}>
        Illustrative EMI & Savings Scenarios 📊
      </motion.h2>
      <motion.p className="text-lg text-slate-700 max-w-3xl mx-auto text-center" variants={fadeUp}>
        Indicative examples. Exacts vary by site, tariff, and finance rate.
      </motion.p>

      <motion.div className="grid gap-8 md:grid-cols-3 pt-6" variants={stagger}>
        <ScenarioCard tag="Home" title="5 kW Residential" systemCost="₹3.2L" emi="₹5,500 / month" savings="₹6,000–7,000 / month" tenure="6 years" icon={<Home className="h-8 w-8" />} gradient="from-emerald-400 to-green-500" />
        <ScenarioCard tag="Shop / Office" title="15 kW Commercial" systemCost="₹9.0L" emi="₹15,000 / month" savings="₹16,000–19,000 / month" tenure="6–7 years" icon={<Building2 className="h-8 w-8" />} gradient="from-sky-400 to-blue-500" />
        <ScenarioCard tag="Small Industry" title="50 kW Industrial" systemCost="₹30L" emi="₹50,000 / month" savings="₹55,000–65,000 / month" tenure="7 years" icon={<Factory className="h-8 w-8" />} gradient="from-amber-400 to-orange-500" />
      </motion.div>
    </AnimatedSection>
  );
}

/* ===================== PROCESS TIMELINE ===================== */

function ProcessTimeline() {
  const steps = [
    { icon: <ClipboardCheck className="h-5 w-5" />, title: "Share Bills", desc: "Upload recent bills + roof details" },
    { icon: <Wrench className="h-5 w-5" />, title: "Design", desc: "Sizing, yield estimate & savings" },
    { icon: <Wallet className="h-5 w-5" />, title: "Choose Finance", desc: "CAPEX / EMI / PPA" },
    { icon: <Users2 className="h-5 w-5" />, title: "Eligibility", desc: "Lender/RESCO checks" },
    { icon: <Factory className="h-5 w-5" />, title: "Install", desc: "Commission & inspect" },
    { icon: <Sparkles className="h-5 w-5" />, title: "Start Saving", desc: "Lower bills immediately" },
  ];
  return (
    <AnimatedSection className="space-y-6">
      <motion.h2 className="text-3xl font-bold text-slate-900 text-center" variants={fadeUp}>
        Simple Finance + Solar Process 
      </motion.h2>
      <div className="grid md:grid-cols-6 gap-4">
        {steps.map((s, i) => (
          <motion.div key={i} variants={fadeUp} className="relative rounded-2xl border border-slate-600/50 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">{s.icon}</div>
              <div className="text-sm font-semibold text-slate-900">{i + 1}. {s.title}</div>
            </div>
            <p className="text-xs text-slate-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}

/* ===================== PRIMITIVES ===================== */

function OverviewCard({ icon, title, desc }: OverviewCardProps) {
  return (
    <motion.div className="relative rounded-xl border border-slate-600/30 bg-white p-5 shadow-sm transition duration-300 overflow-hidden" variants={fadeUp} whileHover={{ y: -4 }}>
      <div className="flex gap-3 items-center text-lg font-bold text-slate-900">
        <span className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">{icon}</span>
        {title}
      </div>
      <p className="text-sm text-slate-600 mt-3 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function OptionCard({ tag, color, title, icon, points }: OptionCardProps) {
  return (
    <motion.div className={`group relative rounded-xl p-5 border bg-white shadow-xl transition duration-300 ${color || "border-slate-600/50"} overflow-hidden`} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring", stiffness: 200, damping: 18 }}>
      {tag && <span className="relative z-1 text-xs bg-emerald-100 px-3 py-1 rounded-full text-emerald-800 font-bold tracking-wider">{tag}</span>}
      <div className="relative z-1 flex items-center gap-3 mt-4 text-xl font-bold text-slate-900">
        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">{icon}</div>
        {title}
      </div>
      <ul className="relative z-1 mt-5 text-sm text-slate-700 space-y-2.5">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="h-2 w-2 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function MiniKPI({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-lg bg-emerald-50 border border-emerald-600 flex items-center justify-center text-emerald-700">{icon}</div>
      <div>
        <div className="text-xs text-slate-600">{label}</div>
        <div className="text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-600/30 bg-white px-4 py-3 shadow-sm">
      <div className="h-8 w-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">{icon}</div>
      <span className="text-sm font-medium text-slate-800">{text}</span>
    </div>
  );
}

function KPI({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-lg bg-white/70 border border-white/60 backdrop-blur flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-xs text-slate-600">{label}</div>
        <div className="text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function ScenarioCard({ tag, title, systemCost, emi, savings, tenure, icon, gradient }: ScenarioCardProps) {
  return (
    <motion.div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl border border-slate-600/50" variants={cardHover} initial="initial" whileHover="hover">
      <motion.div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      <motion.div className="absolute top-4 right-4 text-white/80" variants={floatVariants} initial="initial" animate="animate">{icon}</motion.div>
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-700 font-semibold">{tag}</span>
          <span className="text-sm font-semibold text-slate-600">{tenure} Tenure</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <div className="border-b border-slate-100 my-4" />
        <div className="grid grid-cols-1 gap-4">
          <KPI icon={<DollarSign className="h-4 w-4" />} label="System Cost" value={systemCost} />
          <KPI icon={<TrendingUp className="h-4 w-4" />} label="Approx. Monthly EMI" value={emi} />
          <KPI icon={<Zap className="h-4 w-4" />} label="Est. Savings / Month" value={savings} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-emerald-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

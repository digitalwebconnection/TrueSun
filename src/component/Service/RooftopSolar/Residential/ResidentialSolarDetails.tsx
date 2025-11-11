"use client";

import type { FC } from "react";
import type { SVGProps, ComponentType, ReactNode } from "react";
import {
  Sun,
  Home,
  Building2,
  BatteryCharging,
  Gauge,
  ShieldCheck,
  Zap,
  Wrench,
  Clock,
  IndianRupee,
  Leaf,
  CheckCircle,
  Phone,
  FileText,
} from "lucide-react";

/**
 * Residential Solar Details Page — TypeScript-Safe Version (React + Tailwind)
 * Fixes:
 * - Typed props for all subcomponents (Icon, children, etc.).
 * - Typed event handlers to remove implicit any.
 * - Arrays typed to avoid `never[]` issues.
 */

// Common icon type for lucide icons
type IconType = ComponentType<SVGProps<SVGSVGElement>>;



interface BenefitItem {
  icon: IconType;
  title: string;
  desc: string;
}

interface ProcessStep {
  step: number;
  title: string;
  text: string;
}

interface FAQItem {
  q: string;
  a: string;
}

const benefitItems: BenefitItem[] = [
  {
    icon: Gauge,
    title: "Up to 80–90% bill reduction",
    desc: "Societies and homes switching to solar consistently slash monthly electricity costs.",
  },
  {
    icon: ShieldCheck,
    title: "Non-penetrating structures",
    desc: "Modern, ballast-based mounts prevent roof damage and leakage—top-floor residents stay worry‑free.",
  },
  {
    icon: Sun,
    title: "Shade & roof protection",
    desc: "Panels act as an extra canopy, reducing heat gain and improving roof longevity.",
  },
  {
    icon: Building2,
    title: "Elevated structures for CHS",
    desc: "Use the terrace as a common space under elevated arrays while generating solar power.",
  },
  {
    icon: Clock,
    title: "< 4 years payback",
    desc: "Typical residential/CHS systems recover cost in ~36–48 months depending on tariff & usage.",
  },
  {
    icon: IndianRupee,
    title: "Flexible finance options",
    desc: "Capex not feasible? Opt for bank loans (incl. cooperative banks) or EMI support routes.",
  },
  {
    icon: FileText,
    title: "Approvals & compliance",
    desc: "End‑to‑end handling of DISCOM permissions, net‑metering, safety, and statutory paperwork.",
  },
  {
    icon: Wrench,
    title: "O&M and remote support",
    desc: "Proactive maintenance, periodic cleaning schedules, and performance monitoring for uptime.",
  },
];

const processSteps: ProcessStep[] = [
  { step: 1, title: "Site survey & load study", text: "Shade analysis, roof integrity check, sanctioned load review, and detailed bill assessment." },
  { step: 2, title: "System design & proposal", text: "Module layout, string design, inverter sizing, and energy yield with RoI projections." },
  { step: 3, title: "Regulatory & net‑metering", text: "Filing with DISCOM, safety compliance (earthing/SPD), and meter change coordination." },
  { step: 4, title: "Supply, install & commission", text: "BoS procurement, structure installation, wiring, testing, and grid synchronization." },
  { step: 5, title: "Handover & O&M", text: "Documentation, app onboarding for monitoring, cleaning & preventive maintenance plan." },
];

const faqs: FAQItem[] = [
  {
    q: "Is my home suitable for solar?",
    a: "Homes with year‑round sun exposure and accessible rooftops are ideal. A quick shade/structure check during survey confirms feasibility.",
  },
  {
    q: "Grid vs. backup: will I still have power at night?",
    a: "Grid‑tied systems export excess by day and import at night. For backup during outages, add a hybrid inverter + battery bank.",
  },
  {
    q: "Will the roof leak or get damaged?",
    a: "Non‑penetrating, ballast‑based structures prevent waterproofing issues. For penetrative mounts, we use chemical anchors and sealants as per IS/IEC guidelines.",
  },
  {
    q: "What warranties do I get?",
    a: "Typical: 12‑year product + 25‑year linear performance on modules; 5–10 years on inverters; 5 years workmanship (configurable).",
  },
  {
    q: "How fast is payback?",
    a: "Usually under 4 years, depending on your tariff slab, sanctioned load, and consumption profile.",
  },
];

const ResidentialSolarDetailsPage: FC = () => {
 
  return (
    <main className="max-w-7xl mx-auto bg-linear-to-b from-slate-50 to-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 lg:pt-20 lg:pb-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-sm font-medium">
                <Sun className="h-4 w-4" /> Residential & CHS Rooftop Solar
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Solar for the Residential Sector — Cut Bills, Protect Roofs, Power Communities
              </h1>
              <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
                Solar plants can meet common‑area loads (lifts, pumps, lighting) in Cooperative Housing Societies (CHS) and significantly
                reduce household bills. Many CHS report 80–90% savings—and some TrueSun installations have even achieved <strong>zero bills</strong>.
                We deliver end‑to‑end solutions: design & safety, installation & commissioning, and ongoing O&M.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#enquire" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold shadow-sm">
                  <Phone className="h-5 w-5" /> Book a Free Site Survey
                </a>
                <a href="#benefits" className="inline-flex items-center gap-2 rounded-xl bg-white ring-1 ring-slate-200 px-5 py-3 font-semibold shadow-sm text-slate-900">
                  <Leaf className="h-5 w-5" /> See Benefits
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0">
                <StatCard icon={Gauge} label="Bill Savings" value="80–90%" />
                <StatCard icon={Clock} label="Payback" value="< 4 yrs" />
                <StatCard icon={ShieldCheck} label="Roof Safety" value="Non‑penetrating" />
                <StatCard icon={Zap} label="Net‑Metering" value="Enabled" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Benefits of Going Solar (Homes & CHS)</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Solar panels are best suited for rooftops with ample sun exposure through the year. Grid‑linked systems provide seamless backup from the
            utility when the sun isn’t shining, while optional batteries add outage resilience.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefitItems.map((b, i) => (
              <div key={i} className="rounded-2xl border border-slate-600/50 bg-white p-5 shadow-sm hover:shadow-md transition">
                <b.icon className="h-7 w-7 text-emerald-600" />
                <h3 className="mt-3 font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHS vs Home */}
      <section className="py-7 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-white border-slate-600/50 p-6">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
                <Building2 className="h-5 w-5" /> Cooperative Housing Societies (CHS)
              </div>
              <ul className="mt-4 space-y-3 text-slate-700">
                <Li>Common loads: lifts, water pumps, passage & campus lighting.</Li>
                <Li>Elevated structures keep terraces usable for residents.</Li>
                <Li>Centralized plant & metering, simplified O&M, app monitoring.</Li>
                <Li>Loan routes via society/cooperative banks; equal member benefit policy.</Li>
                <Li>Professional design with structural safety, earthing & lightning protection.</Li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white border-slate-600/50 p-6">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
                <Home className="h-5 w-5" /> Individual Homes
              </div>
              <ul className="mt-4 space-y-3 text-slate-700">
                <Li>Optimized array for your sanctioned load and bill pattern.</Li>
                <Li>Hybrid options with batteries for outage‑proof living.</Li>
                <Li>Clean cable management and aesthetic, low‑profile mounting.</Li>
                <Li>Fast permissions, net‑metering, and safe commissioning.</Li>
                <Li>Long‑term performance guaranteed with periodic O&M.</Li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-7">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">What We Install (Typical Specifications)</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <SpecCard icon={Sun} title="Solar Modules" points={["Mono‑PERC / TOPCon", "545–620 Wp class (as per roof)", "25‑yr performance warranty"]} />
            <SpecCard icon={BatteryCharging} title="Inverters" points={["String / Hybrid (3–25 kW)", "98%+ efficiency, Wi‑Fi app", "Battery‑ready options"]} />
            <SpecCard icon={Wrench} title="Structures & BoS" points={["Non‑penetrating/Elevated", "Alu/GI, SS fasteners", "SPD, earthing, DCDB/ACDB"]} />
          </div>
        </div>
      </section>

      {/* Finance & Subsidy */}
      <section className="py-7 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Finance, Payback & Subsidy</h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-600/50 bg-white p-6">
              <h3 className="font-semibold inline-flex items-center gap-2"><IndianRupee className="h-5 w-5 text-emerald-600" /> EMI & Loans</h3>
              <p className="mt-2 text-slate-700">If Capex is a concern, opt for bank EMIs. Societies can leverage cooperative bank financing; we support documentation.</p>
            </div>
            <div className="rounded-2xl border border-slate-600/50 bg-white p-6">
              <h3 className="font-semibold inline-flex items-center gap-2"><Gauge className="h-5 w-5 text-emerald-600" /> Payback</h3>
              <p className="mt-2 text-slate-700">Most systems recover cost in under 4 years. High tariffs and daytime usage accelerate RoI. Post‑payback, enjoy decade‑long savings.</p>
            </div>
            <div className="rounded-2xl border border-slate-600/50 bg-white p-6">
              <h3 className="font-semibold inline-flex items-center gap-2"><FileText className="h-5 w-5 text-emerald-600" /> Subsidy</h3>
              <p className="mt-2 text-slate-700">Eligible residential rooftop projects may avail central/state subsidies as per current MNRE/Discom norms. We guide end‑to‑end application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-7">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">How It Works</h2>
          <ol className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-5">
            {processSteps.map((s) => (
              <li key={s.step} className="rounded-2xl border border-slate-600/50 bg-white p-6">
                <div className="text-emerald-700 font-bold">Step {s.step}</div>
                <div className="font-semibold mt-1">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof & Highlights */}
      <section className="py-7 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Why TrueSun for Residential & CHS</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Highlight icon={ShieldCheck} text="Safety‑first designs with certified BoS and protections" />
            <Highlight icon={Zap} text="Proven field performance; some sites report zero bills" />
            <Highlight icon={FileText} text="Regulatory, net‑metering & legal approvals handled" />
            <Highlight icon={CheckCircle} text="Clean install, tidy routing, labeled combiner boxes" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-7">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl text-center font-bold">FAQs</h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((f, i) => (
              <details key={i} className="group p-6">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold text-slate-900">{f.q}</span>
                  <span className="ml-4 text-slate-500 group-open:hidden">+</span>
                  <span className="ml-4 text-slate-500 hidden group-open:inline">−</span>
                </summary>
                <p className="mt-2 text-slate-900">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default ResidentialSolarDetailsPage;

// ——————————————————
// Small UI primitives (typed)
// ——————————————————
interface StatCardProps {
  icon: IconType;
  label: string;
  value: ReactNode;
}
const StatCard: FC<StatCardProps> = ({ icon: Icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-slate-600/50 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-emerald-600" />
        <div>
          <div className="text-sm text-slate-600">{label}</div>
          <div className="text-xl font-bold">{value}</div>
        </div>
      </div>
    </div>
  );
};

const Li: FC<React.PropsWithChildren> = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-600 shrink-0" />
    <span>{children}</span>
  </li>
);

interface SpecCardProps {
  icon: IconType;
  title: string;
  points: string[];
}
const SpecCard: FC<SpecCardProps> = ({ icon: Icon, title, points }) => {
  return (
    <div className="rounded-2xl border border-slate-600/50 bg-white p-6">
      <div className="inline-flex items-center gap-2">
        <Icon className="h-6 w-6 text-emerald-600" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2 text-slate-700 text-sm">
        {points.map((p, i) => (
          <Li key={i}>{p}</Li>
        ))}
      </ul>
    </div>
  );
};

interface HighlightProps {
  icon: IconType;
  text: string;
}
const Highlight: FC<HighlightProps> = ({ icon: Icon, text }) => (
  <div className="rounded-2xl border border-slate-600/50 bg-white p-5 flex items-start gap-3">
    <Icon className="h-6 w-6 text-emerald-600" />
    <p className="text-sm text-slate-700">{text}</p>
  </div>
);



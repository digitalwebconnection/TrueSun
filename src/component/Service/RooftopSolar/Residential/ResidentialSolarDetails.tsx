"use client";

import type { FC, ReactNode } from "react";
import type { SVGProps, ComponentType } from "react";
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
  CheckCircle,
  Phone,
  FileText,
} from "lucide-react";

/* ───────────────────────────────── Types ───────────────────────────────── */

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

/* ───────────────────────────── SEO-focused Content ─────────────────────── */

const benefitItems: BenefitItem[] = [
  {
    icon: Gauge,
    title: "Reduce electricity bills by 80–90%",
    desc: "Residential solar rooftop systems for apartments, villas and bungalows can offset most of your monthly power consumption.",
  },
  {
    icon: ShieldCheck,
    title: "Roof-safe mounting for societies & homes",
    desc: "We use non-penetrating and engineered structures so housing societies and bungalow roofs stay safe and leak-free.",
  },
  {
    icon: Sun,
    title: "Better comfort with cooler roofs",
    desc: "Solar panels work as an additional shade layer, reducing direct heat gain and improving comfort on top floors.",
  },
  {
    icon: Building2,
    title: "Optimised for housing societies (CHS)",
    desc: "Common-area loads like lifts, pumps and lights are planned to maximise savings for cooperative housing societies.",
  },
  {
    icon: Home,
    title: "Tailor-made for villas & bungalows",
    desc: "We design solar plants that match your sanctioned load, lifestyle and aesthetics for premium homes and villas.",
  },
  {
    icon: Clock,
    title: "Payback in 3–4 years",
    desc: "Most residential solar panel installations recover their cost in under 4 years depending on tariff and usage pattern.",
  },
  {
    icon: IndianRupee,
    title: "EMI, loans & flexible finance",
    desc: "If upfront investment is a concern, we assist with bank finance and EMI-friendly options for societies and individual homes.",
  },
  {
    icon: FileText,
    title: "End-to-end approvals & paperwork",
    desc: "From DISCOM permissions and net-metering to safety compliance, we manage the complete documentation for you.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Solar site survey & load analysis",
    text: "We visit your housing society, villa or bungalow, assess shade, roof strength, sanctioned load and past electricity bills.",
  },
  {
    step: 2,
    title: "System design & savings proposal",
    text: "We create a rooftop layout, select modules and inverters, and share expected generation, savings and payback period.",
  },
  {
    step: 3,
    title: "Approvals, net-metering & safety design",
    text: "Our team handles DISCOM applications, safety checks, earthing, lightning protection and net-metering formalities.",
  },
  {
    step: 4,
    title: "Installation & commissioning",
    text: "Structures, wiring, inverters, DCDB/ACDB and protections are installed, tested and synchronised with the grid.",
  },
  {
    step: 5,
    title: "Monitoring, O&M & long-term support",
    text: "You get app-based monitoring, cleaning schedules and preventive maintenance so your solar plant keeps performing for years.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you work with both housing societies and independent homes?",
    a: "Yes. We specialise in solar panel installation for cooperative housing societies (CHS), gated communities, villas and independent bungalows.",
  },
  {
    q: "Is my terrace strong enough for a solar plant?",
    a: "During the site survey we check roof condition, load-bearing capacity and shade. Only after confirming feasibility do we move forward with design.",
  },
  {
    q: "Will solar panels give me backup during power cuts?",
    a: "Standard grid-tied solar systems do not provide backup. For backup during power cuts, we recommend a hybrid inverter with battery storage.",
  },
  {
    q: "Can a housing society take a loan for solar?",
    a: "Many societies finance solar through cooperative banks or specialised loans. We support with technical details and documentation for the bank.",
  },
  {
    q: "How much maintenance do solar panels need?",
    a: "Solar plants mainly need periodic cleaning and routine health checks. We offer maintenance plans and remote monitoring support.",
  },
];

/* ───────────────────────────── Main Page Component ─────────────────────── */

const ResidentialSolarDetailsPage: FC = () => {
  return (
    <main className="max-w-7xl mx-auto bg-linear-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* HERO – SEO-friendly keyword rich */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 lg:pt-20 lg:pb-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            {/* Left - copy */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 text-xs sm:text-sm font-medium">
                <Sun className="h-4 w-4" />
                Residential Solar Panel Installation for Housing Societies, Villas & Bungalows
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Solar for Homes, Housing Societies, Villas & Bungalows
              </h1>

              <p className="mt-4 text-slate-700 leading-relaxed max-w-2xl">
                We design and install grid-tied rooftop solar plants for cooperative housing societies, premium villas and independent bungalows.
                With real experience in{" "}
                <strong>housing society solar projects, villa solar plants and bungalow rooftop installations</strong>,
                we focus on long-term savings, safety and clean aesthetics.
              </p>

              {/* Who we work with – pill style */}
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Tag icon={Building2}>Cooperative Housing Societies (CHS)</Tag>
                <Tag icon={Home}>Villas & Independent Bungalows</Tag>
                <Tag icon={Zap}>High-usage Residential Consumers</Tag>
              </div>

            
              {/* Simple stats strip */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <StatInline label="Typical savings" value="80–90% bill reduction" />
                <StatInline label="Payback period" value="3–4 years" />
                <StatInline label="Segments served" value="Societies, villas, bungalows" />
              </div>
            </div>

            {/* Right - abstract visual */}
            <div className="flex-1">
              <div className="relative mt-4 lg:mt-0">
                <div className="absolute -inset-4 bg-linear-to-tr from-emerald-200/40 via-sky-200/30 to-amber-200/40 blur-3xl -z-10" />
                <div className="rounded-3xl bg-white/70 backdrop-blur shadow-lg border border-slate-200 px-5 py-5 sm:px-7 sm:py-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Residential Solar Snapshot
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <Li>
                      Multiple completed{" "}
                      <strong>housing society solar panel installations</strong> with common-area bill reductions.
                    </Li>
                    <Li>
                      Experience in{" "}
                      <strong>villa and bungalow solar design</strong> with clean cable routing and premium finish.
                    </Li>
                    <Li>
                      Net-metered rooftop plants delivering stable generation and long-term energy security.
                    </Li>
                  </ul>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <Kpi label="Residential kWp Delivered" value="1000+ kWp (cumulative)" />
                    <Kpi label="Average plant uptime" value="> 98%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Benefits of Residential Solar Panel Installation for Housing Societies, Villas & Bungalows
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Whether you live in a cooperative housing society, a gated villa community or an independent bungalow, rooftop solar can cut your
            electricity bills, protect your roof and make your property more future-ready.
          </p>

          <dl className="mt-8 divide-y divide-slate-200 rounded-3xl bg-white/70 backdrop-blur border border-slate-100">
            {benefitItems.map((b, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3 min-w-[210px]">
                  <b.icon className="h-6 w-6 text-emerald-600 shrink-0" />
                  <dt className="font-semibold text-slate-900">{b.title}</dt>
                </div>
                <dd className="text-sm text-slate-700">{b.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* WHO WE SERVE – New Attractive Section */}
      <section className="py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-emerald-950 via-slate-950 to-sky-950 text-emerald-50 px-6 py-10 sm:px-10 sm:py-12">
            {/* Soft glow background accents */}
            <div className="pointer-events-none absolute -left-10 top-0 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-sky-500/25 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr,1.1fr] items-center">
              {/* Left – headline & copy */}
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-emerald-900/70 px-3 py-1 text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
                  <Sun className="h-4 w-4 text-amber-300" />
                  Residential Solar • Housing Societies • Villas • Bungalows
                </p>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-snug">
                  Solar Panel Installation for
                  <span className="text-emerald-300"> Housing Societies</span>,{" "}
                  <span className="text-emerald-200">Villas</span> &{" "}
                  <span className="text-emerald-200">Independent Bungalows</span>
                </h2>

                <p className="mt-3 text-sm sm:text-base text-emerald-100/90 max-w-xl">
                  We have hands-on experience implementing rooftop solar projects in cooperative housing societies, gated villas and independent
                  bungalows. From shadow analysis and structure design to approvals, installation and maintenance, everything is done keeping
                  long-term performance, safety and aesthetics in mind.
                </p>

                {/* Experience / trust chips */}
                <div className="mt-5 flex flex-wrap gap-2 text-[11px] sm:text-xs">
                  <Chip icon={Building2}>Completed CHS Rooftop Projects</Chip>
                  <Chip icon={Home}>Premium Villas & Bungalows</Chip>
                  <Chip icon={Zap}>High-usage Residential Consumers</Chip>
                </div>

                {/* SEO inline stats for dark section */}
                <div className="mt-6 flex flex-wrap gap-6 text-xs sm:text-sm">
                  <StatInlineDark label="Typical savings" value="80–90% lower electricity bills" />
                  <StatInlineDark label="Payback" value="3–4 years on average" />
                  <StatInlineDark label="Segments served" value="Societies, villas, bungalows" />
                </div>
              </div>

              {/* Right – two glass panels */}
              <div className="space-y-4">
                {/* Housing Societies card */}
                <div className="relative rounded-2xl border border-emerald-500/30 bg-white/5 backdrop-blur-md px-4 py-4 sm:px-5 sm:py-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                        <Building2 className="h-4 w-4 text-emerald-300" />
                      </span>
                      <span>Cooperative Housing Societies (CHS)</span>
                    </div>
                    <span className="rounded-full bg-emerald-900/70 px-2.5 py-1 text-[10px] uppercase tracking-wide text-emerald-100">
                      Common Area Savings
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-emerald-50/90">
                    <LiDark>Solar for lifts, water pumps, parking and campus lighting.</LiDark>
                    <LiDark>Elevated structures so residents still enjoy terrace access.</LiDark>
                    <LiDark>Central plant monitoring with app-based energy tracking.</LiDark>
                    <LiDark>Support with society resolutions, documentation & bank loans.</LiDark>
                  </ul>
                </div>

                {/* Villas & Bungalows card */}
                <div className="relative rounded-2xl border border-sky-500/30 bg-white/5 backdrop-blur-md px-4 py-4 sm:px-5 sm:py-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20">
                        <Home className="h-4 w-4 text-sky-300" />
                      </span>
                      <span>Villas, Bungalows & Independent Homes</span>
                    </div>
                    <span className="rounded-full bg-sky-900/70 px-2.5 py-1 text-[10px] uppercase tracking-wide text-sky-100">
                      Tailor-made Design
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-emerald-50/90">
                    <LiDark>Right-sized plants based on bills, sanctioned load and tariff.</LiDark>
                    <LiDark>Neat conduit work and low-profile structures for premium look.</LiDark>
                    <LiDark>Hybrid / battery-ready options for outage-prone locations.</LiDark>
                    <LiDark>Long-term O&M support to keep generation and savings stable.</LiDark>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Typical Residential Solar Plant Specifications
          </h2>
          <p className="mt-2 text-slate-600 max-w-3xl text-sm">
            Exact specifications depend on your site and DISCOM norms, but most housing society, villa and bungalow solar projects use
            similar building blocks.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpecStrip
              icon={Sun}
              title="Solar Modules"
              points={[
                "Mono-PERC / TOPCon technology",
                "545–620 Wp class (as per roof layout)",
                "25-year performance warranty",
              ]}
            />
            <SpecStrip
              icon={BatteryCharging}
              title="Inverters"
              points={[
                "String / Hybrid inverters (3–25 kW+)",
                "98%+ efficiency, Wi-Fi/app monitoring",
                "Battery-ready options for backup",
              ]}
            />
            <SpecStrip
              icon={Wrench}
              title="Structures & BoS"
              points={[
                "Non-penetrating & elevated structures as per need",
                "GI/Aluminium structures with SS hardware",
                "Earthing, lightning protection, DCDB/ACDB, SPDs",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FINANCE & PAYBACK */}
      <section className="py-10 bg-emerald-950/95 text-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Finance, Payback & Subsidy for Residential Solar
          </h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm">
            <Ribbon icon={IndianRupee} title="EMI & Loan Support">
              We assist housing societies and homeowners with bank documentation, EMI structures and basic project financials so solar becomes
              cash-flow friendly from Day 1.
            </Ribbon>
            <Ribbon icon={Gauge} title="3–4 Year Payback">
              With rising tariffs, residential solar rooftop projects usually recover their cost in around 3–4 years, after which you enjoy
              predominantly free power.
            </Ribbon>
            <Ribbon icon={FileText} title="Subsidy Guidance">
              Eligible residential rooftop projects may get central/state subsidies as per current MNRE and DISCOM policies. We guide you through
              eligibility and application steps.
            </Ribbon>
          </div>
        </div>
      </section>

      {/* PROCESS – timeline */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Our Residential Solar Installation Process
          </h2>
          <p className="mt-2 text-slate-600 text-sm max-w-3xl">
            A simple, transparent process from first discussion to live generation for your housing society, villa or bungalow.
          </p>

          <ol className="mt-7 relative border-l border-slate-200 space-y-6 pl-4 sm:pl-6">
            {processSteps.map((s) => (
              <li key={s.step} className="relative">
                <div className="absolute -left-2 sm:-left-3 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
                  {s.step}
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="font-semibold text-slate-900">{s.title}</div>
                  <p className="mt-1 text-sm text-slate-700">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Why Choose Us for Housing Society, Villa & Bungalow Solar
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
            <HighlightLine icon={ShieldCheck} text="Safety-first engineering with certified components and protections." />
            <HighlightLine icon={Zap} text="Proven performance on live residential rooftop solar plants." />
            <HighlightLine icon={FileText} text="Approvals, net-metering and legal documentation handled end-to-end." />
            <HighlightLine icon={CheckCircle} text="Neat installation finish with labelled cabling and panels." />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl text-center font-bold">Residential Solar FAQs</h2>
          <p className="mt-2 text-center text-slate-600 text-sm">
            Common questions from housing societies, villa owners and bungalow owners planning to install rooftop solar.
          </p>
          <div className="mt-6 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur">
            {faqs.map((f, i) => (
              <details key={i} className="group p-5 sm:p-6">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">{f.q}</span>
                  <span className="ml-4 text-slate-500 group-open:hidden">+</span>
                  <span className="ml-4 text-slate-500 hidden group-open:inline">−</span>
                </summary>
                <p className="mt-2 text-slate-800 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section id="enquire" className="py-10 bg-emerald-50/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to Install Solar for Your Housing Society, Villa or Bungalow?
          </h2>
          <p className="mt-2 text-slate-700 text-sm sm:text-base">
            Share your location, recent electricity bills and roof photographs. Our team will suggest the right residential solar
            solution with an estimate of savings and payback.
          </p>
          <a
            href="tel:+91XXXXXXXXXX"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 text-sm sm:text-base font-semibold shadow-sm"
          >
            <Phone className="h-5 w-5" />
            Call Now to Discuss Your Rooftop
          </a>
        </div>
      </section>
    </main>
  );
};

export default ResidentialSolarDetailsPage;

/* ───────────────────────────── UI Primitives ───────────────────────────── */

interface StatInlineProps {
  label: string;
  value: ReactNode;
}
const StatInline: FC<StatInlineProps> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs uppercase tracking-wide text-slate-500">{label}</span>
    <span className="text-sm font-semibold text-slate-900">{value}</span>
  </div>
);

interface StatInlineDarkProps {
  label: string;
  value: ReactNode;
}
const StatInlineDark: FC<StatInlineDarkProps> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-[11px] uppercase tracking-wide text-emerald-200/80">{label}</span>
    <span className="text-sm font-semibold text-emerald-50">{value}</span>
  </div>
);

interface TagProps {
  icon: IconType;
  children: ReactNode;
}
const Tag: FC<TagProps> = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 border border-slate-200 text-[11px] sm:text-xs font-medium text-slate-800">
    <Icon className="h-3.5 w-3.5 text-emerald-600" />
    {children}
  </span>
);

const Li: FC<React.PropsWithChildren> = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600 shrink-0" />
    <span>{children}</span>
  </li>
);

const LiDark: FC<React.PropsWithChildren> = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="mt-0.5 h-3.5 w-3.5 text-emerald-300 shrink-0" />
    <span>{children}</span>
  </li>
);

interface KpiProps {
  label: string;
  value: string;
}
const Kpi: FC<KpiProps> = ({ label, value }) => (
  <div>
    <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
    <div className="text-sm font-semibold text-slate-900">{value}</div>
  </div>
);

interface SpecStripProps {
  icon: IconType;
  title: string;
  points: string[];
}
const SpecStrip: FC<SpecStripProps> = ({ icon: Icon, title, points }) => (
  <div className="relative rounded-3xl bg-white/80 backdrop-blur border border-slate-100 px-5 py-5 sm:px-6 sm:py-6">
    <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
      <Icon className="h-5 w-5 text-emerald-600" />
      {title}
    </div>
    <ul className="mt-3 space-y-1 text-sm text-slate-700">
      {points.map((p, i) => (
        <Li key={i}>{p}</Li>
      ))}
    </ul>
  </div>
);

interface RibbonProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}
const Ribbon: FC<RibbonProps> = ({ icon: Icon, title, children }) => (
  <div className="relative rounded-3xl bg-emerald-900/60 px-5 py-5 sm:px-6 sm:py-6 border border-emerald-800/70">
    <div className="inline-flex items-center gap-2 text-sm font-semibold">
      <Icon className="h-5 w-5 text-emerald-300" />
      {title}
    </div>
    <p className="mt-2 text-[13px] leading-relaxed text-emerald-50">{children}</p>
  </div>
);

interface HighlightLineProps {
  icon: IconType;
  text: string;
}
const HighlightLine: FC<HighlightLineProps> = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-3 text-slate-800">
    <Icon className="h-5 w-5 text-emerald-600 mt-0.5" />
    <p className="text-sm">{text}</p>
  </div>
);

interface ChipProps {
  icon: IconType;
  children: ReactNode;
}
const Chip: FC<ChipProps> = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 border border-emerald-500/40 text-emerald-50">
    <Icon className="h-3.5 w-3.5 text-emerald-300" />
    <span>{children}</span>
  </span>
);

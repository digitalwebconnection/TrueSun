"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Factory,
  Building2,
  House,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-16 space-y-20">

      {/* ===== PAGE TITLE ===== */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Premium Solar Solutions for Every Need
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
          Rooftop and consulting services built for real savings and reliable performance.
        </p>
      </section>

      {/* ===== SERVICE GRID ===== */}
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Core Solar Services
          </h2>
          <p className="hidden md:block text-xs uppercase tracking-[0.18em] text-slate-500">
            Rooftop • Consulting • Performance
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* ========== C&I Solar ========== */}
          <ServiceCard
            title="C&I Rooftop Solar"
            desc="Optimised solar for factories, warehouses and offices."
            img="https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2023/05/Untitled-design-2023-05-12T100356.968-1.jpg"
            link="/services/rooftop/C&I"
            badge="Industries & Businesses"
            points={[
              "Capex / Opex options",
              "Net-metering friendly",
              "No production downtime",
            ]}
          />

          {/* ========== Residential Solar ========== */}
          <ServiceCard
            title="Residential Rooftop Solar"
            desc="Clean, safe rooftop solar for homes and villas."
            img="https://www.teriin.org/sites/default/files/inline-images/rooftop-solar1.jpg"
            link="/services/rooftop/residential"
            badge="Homes & Villas"
            points={[
              "Bills down up to 90%",
              "Neat wiring & routing",
              "Compact inverter setup",
            ]}
          />

          {/* ========== Carbon Consulting ========== */}
          <ServiceCard
            title="Carbon Footprinting & Consulting"
            desc="Track CO₂ reduction and align with ESG goals."
            img="https://cordis.europa.eu/docs/article/images/2023-12/448147.jpg"
            link="/services/consulting/carbon-footprinting"
            badge="ESG & Compliance"
            points={[
              "Baseline footprint study",
              "CO₂ savings reports",
              "ESG / CSR mapping",
            ]}
          />
        </div>
      </section>



{/* ===== SEGMENTS WE SERVE – TIMELINE STYLE ===== */}
<section className="space-y-6">
  <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] items-start">
    {/* Left intro block */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-slate-900">
        Where We Create Maximum Impact
      </h2>
      <p className="text-sm text-slate-600 max-w-sm">
        From heavy industries to premium homes, each segment gets a tailored solar strategy.
      </p>

      <div className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
          High daytime consumption
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
          Roof & ground-mounted
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
          Aesthetics + performance
        </span>
      </div>
    </div>

    {/* Right timeline list */}
    <div className="relative">
      {/* vertical line */}
      <div className="pointer-events-none absolute left-4 top-0 bottom-0 hidden md:block">
        <div className="h-full w-px bg-linear-to-b from-orange-300/70 via-slate-300 to-slate-200" />
      </div>

      <div className="space-y-4">
        <SegmentStep
          icon={<Factory className="h-4 w-4" />}
          title="Manufacturing & Industry"
          subtitle="High daytime loads and process-driven operations."
          chips={["High daytime loads", "Roof / ground options", "Cost control"]}
        />
        <SegmentStep
          icon={<Building2 className="h-4 w-4" />}
          title="Commercial & Retail"
          subtitle="Customer-facing spaces that run long hours."
          chips={["Malls & IT parks", "Common-area savings", "Green building"]}
        />
        <SegmentStep
          icon={<House className="h-4 w-4" />}
          title="Premium Homes"
          subtitle="Homes that want clean design with clean energy."
          chips={["Neat layouts", "Safe wiring", "App monitoring"]}
        />
      </div>
    </div>
  </div>
</section>


     {/* ===== SIMPLE PROCESS SECTION – TIMELINE STYLE ===== */}
<section className="relative overflow-hidden rounded-3xl  p-4 md:p-6 space-y-8">
  {/* subtle glow */}
  <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
  <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

  <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h2 className="text-2xl font-semibold">
        A Clear, 3-Step Solar Journey
      </h2>
      <p className="text-sm md:text-base text-slate-900 max-w-xl">
        From first call to live generation — no noise, just a structured path.
      </p>
    </div>
    <p className="text-xs uppercase tracking-[0.2em] text-slate-900">
      STUDY • DESIGN • EXECUTE
    </p>
  </div>

  {/* connecting line (desktop) */}
  <div className="relative mt-4">
    <div className="pointer-events-none absolute left-6 right-6 top-6 hidden md:block">
      <div className="h-px w-full bg-linear-to-r from-orange-300/70 via-slate-500/60 to-orange-300/70" />
    </div>

    <div className="relative grid gap-5 md:grid-cols-3">
      <StepCard
        step="01"
        label="Site & Load Study"
        text="We study your roof, shadows and consumption pattern."
      />
      <StepCard
        step="02"
        label="Design & Proposal"
        text="You get layouts, energy yield and clear payback numbers."
      />
      <StepCard
        step="03"
        label="Execution & Handover"
        text="We install, coordinate approvals and set up monitoring."
      />
    </div>
  </div>
</section>


    </main>
  );
}

/* ==============================================================
   SMALL REUSABLE COMPONENTS + MICRO-ANIMATIONS
   ============================================================== */

function ServiceCard({
  title,
  desc,
  img,
  link,
  badge,
  points,
}: {
  title: string;
  desc: string;
  img: string;
  link: string;
  badge?: string;
  points?: string[];
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-600/40 hover:bg-orange-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-orange-200">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>

        {points && points.length > 0 && (
          <ul className="space-y-1 text-xs text-slate-600">
            {points.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          to={link}
          className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition"
        >
          View Details
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}


function StepCard({
  step,
  label,
  text,
}: {
  step: string;
  label: string;
  text: string;
}) {
  return (
    <div className="relative flex flex-col items-start md:items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900 px-4 py-4 md:px-0 md:py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-300/80">
      {/* step circle */}
      <div className="flex items-center gap-3 md:flex-col md:gap-2 w-full">
        <div className="relative">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-orange-300/80 shadow-[0_0_0_4px_rgba(248,187,107,0.18)]">
            <span className="text-xs font-semibold text-orange-300">
              {step}
            </span>
          </div>
        </div>

        <div className="flex-1 md:text-center">
          <h3 className="text-sm md:text-base font-semibold text-slate-50">
            {label}
          </h3>
        </div>
      </div>

      <p className="text-xs md:text-sm text-slate-300 md:text-center">
        {text}
      </p>
    </div>
  );
}




function SegmentStep({
  icon,
  title,
  subtitle,
  chips,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  chips: string[];
}) {
  return (
    <div className="relative flex gap-3 rounded-2xl border border-slate-600/50 hover:bg-orange-300  hover:text-white bg-white px-4 py-3 md:px-5 md:py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-orange-200">
      {/* timeline dot */}
      <div className="relative mt-1 hidden md:block">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/1    0 border border-orange-300/60">
          <span className="text-[10px] text-orange-600">
            {icon}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="flex-1 space-y-2">
        <div>
          <h3 className="text-sm md:text-base font-semibold text-slate-900 ">
            {title}
          </h3>
          <p className="text-xs text-slate-600">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] text-slate-700 border border-slate-200"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


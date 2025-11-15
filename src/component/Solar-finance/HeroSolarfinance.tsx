"use client";

import React from "react";
import {
  ArrowRight,
  CreditCard,
  SunMedium,
  Percent,
  ShieldCheck,
} from "lucide-react";

interface BenefitItemProps {
  title: string;
  desc: string;
}

const TruesunSolarFinanceHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://taqat.moustadama.ps/sites/default/files/2022-09/hero-image.jpg')",
          }}
        />
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pt-16 lg:flex-row lg:items-center lg:pt-24 pb-5">
        {/* LEFT SIDE CONTENT */}
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <CreditCard className="h-3.5 w-3.5" />
            Truesun • Solar Finance
          </span>

          <div>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Make solar affordable
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-lime-200">
                with easy monthly EMIs.
              </span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-200/85 sm:text-base">
              Switch to solar without heavy upfront investment. Truesun offers EMI,
              CAPEX, and PPA options so your monthly savings can power your repayment
              — starting from the very first month.
            </p>
          </div>

          {/* BENEFITS */}
          <div className="mt-4 space-y-3 text-sm">
            <BenefitItem
              title="Low or zero upfront cost"
              desc="Finance most of the system and protect your cash flow."
            />
            <BenefitItem
              title="Savings aligned EMIs"
              desc="Monthly savings often exceed the EMI amount."
            />
            <BenefitItem
              title="Bank & NBFC friendly"
              desc="All documentation handled with approved finance partners."
            />
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#finance-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:-translate-y-px hover:bg-emerald-400 active:translate-y-0"
            >
              Get a Solar EMI Plan
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#finance-details"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 bg-slate-900/50 hover:bg-slate-800/70 transition"
            >
              Learn how finance works
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Perfect for{" "}
            <span className="font-semibold text-slate-200">
              homes, shops, offices, schools, small industries
            </span>{" "}
            wanting solar without upfront CAPEX.
          </p>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="w-full max-w-md lg:ml-auto">
          <div className="relative rounded-3xl border border-slate-700/60 bg-slate-900/80 p-5 shadow-2xl shadow-black/60 backdrop-blur-xl">
            {/* Glow Effect */}
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-[conic-gradient(from_200deg,#22c55e33,#facc1533,#22c55e33)] opacity-60 blur-xl" />

            {/* Header */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  <SunMedium className="h-4 w-4" />
                  Example Finance Snapshot
                </div>
                <div className="text-[11px] text-slate-400">
                  5 kW home / small office system
                </div>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-200 ring-1 ring-slate-600">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                Trusted Estimate
              </div>
            </div>

            {/* Simple Stats */}
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <StatCard label="Approx. system cost" value="₹3.0–3.5L" note="Brand based" />
              <StatCard label="Approx. monthly EMI" value="₹5,000–6,500" note="5–7 yrs" />
              <StatCard label="Typical bill savings" value="₹6,000–7,000" valueColor="text-emerald-300" />
              <StatCard label="Payback horizon" value="~4–5 years" />
            </div>

            {/* Small note */}
            <div className="mt-4 rounded-2xl bg-slate-900/90 p-3 text-[11px] text-slate-300 ring-1 ring-slate-700/80">
              <Percent className="mr-1 inline h-3.5 w-3.5 text-emerald-300" />
              These numbers are approximate. Truesun provides a custom EMI illustration
              for your roof, tariff & finance partner.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem: React.FC<BenefitItemProps> = ({ title, desc }) => (
  <div className="flex gap-3">
    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15">
      <Percent className="h-3 w-3 text-emerald-300" />
    </div>
    <div>
      <div className="text-sm font-semibold text-slate-50">{title}</div>
      <div className="text-xs text-slate-300/85">{desc}</div>
    </div>
  </div>
);

const StatCard = ({
  label,
  value,
  note,
  valueColor = "text-slate-50",
}: {
  label: string;
  value: string;
  note?: string;
  valueColor?: string;
}) => (
  <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-700/80">
    <div className="text-[10px] uppercase tracking-wide text-slate-400">
      {label}
    </div>
    <div className={`mt-1 text-lg font-semibold ${valueColor}`}>{value}</div>
    {note && <div className="text-[11px] text-slate-400">{note}</div>}
  </div>
);

export default TruesunSolarFinanceHero;

"use client";

import { useState } from "react";
import {
  CreditCard,
  CircleDollarSign,
  Handshake,
  Home,
  Building2,
  Factory,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import LeadPopup from "../../component/LeadPopup";
/* ===================== TYPES ===================== */

interface OverviewCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface OptionCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  points: string[];
}

/* ===================== ANIMATION HELPERS ===================== */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
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
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

/* ===================== PAGE WRAPPER ===================== */

export default function SolarFinancePage() {
  return (
    <main className="relative mx-auto max-w-7xl space-y-12 px-4 pb-20 pt-12 md:px-0">
      <OverviewSection />
      <FinanceOptionsSection />
      <ProcessAndCTA />
    </main>
  );
}

/* ===================== OVERVIEW (WITH SIMPLE IMAGE-STYLE EXPLANATION) ===================== */

function OverviewSection() {
  return (
    <AnimatedSection id="overview" className="space-y-6">
      <div className="text-center space-y-3">
        <motion.h2
          className="text-2xl font-bold text-slate-900 sm:text-3xl"
          variants={fadeUp}
        >
          How Solar Finance Works 💡
        </motion.h2>

        <motion.p
          className="mx-auto max-w-3xl text-sm sm:text-base text-slate-700"
          variants={fadeUp}
        >
          Instead of paying the entire amount at once, you spread it across{" "}
          <span className="font-semibold text-emerald-600">
            small, predictable monthly payments
          </span>
          . A big part of that EMI is covered by the money you save on your
          electricity bill.
        </motion.p>
      </div>

      {/* Text + Image-style layout */}
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        {/* LEFT – cards for segments */}
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          <OverviewCard
            icon={<Home className="h-5 w-5" />}
            title="Homes"
            desc="Reduce your light bill and own the rooftop system for 20+ years."
          />

          <OverviewCard
            icon={<Building2 className="h-5 w-5" />}
            title="Shops & Offices"
            desc="Cut daytime power costs and keep your monthly cashflow predictable."
          />

          <OverviewCard
            icon={<Factory className="h-5 w-5" />}
            title="Small Industries"
            desc="Lower per-unit energy cost for machines and production loads."
          />

          <OverviewCard
            icon={<Home className="h-5 w-5" />}
            title="Villas & Bungalows"
            desc="Premium rooftop solar setups with maximum savings and clean design."
          />

          
        </div>


        {/* RIGHT – simple visual explanation “like an image” */}
        <SimpleVisualCard />
      </div>
    </AnimatedSection>
  );
}

/* ===================== FINANCE OPTIONS ===================== */

function FinanceOptionsSection() {
  return (
    <AnimatedSection id="options" className="space-y-6 text-center">
      <motion.h2
        className="text-2xl font-bold text-slate-900 sm:text-3xl"
        variants={fadeUp}
      >
        Three Simple Ways to Finance Solar
      </motion.h2>

      <motion.p
        className="mx-auto max-w-3xl text-sm sm:text-base text-slate-700"
        variants={fadeUp}
      >
        No long paragraphs, no confusing terms. Just three clear models you can
        understand in one glance.
      </motion.p>

      <div className="grid gap-5 pt-2 md:grid-cols-3">
        <OptionCard
          title="EMI / Loan Financing"
          subtitle="Most common for homes"
          icon={<CircleDollarSign className="h-5 w-5 text-emerald-600" />}
          points={[
            "Low monthly payments",
            "Bank & NBFC tie-ups",
            "3–5 year repayment",
          ]}
        />

        <OptionCard
          title="Zero Upfront (OPEX Model)"
          subtitle="Great for commercial & industries"
          icon={<Handshake className="h-5 w-5 text-sky-600" />}
          points={[
            "No investment to start",
            "Pay per unit of energy",
            "Solar remains off your balance sheet",
          ]}
        />

        <OptionCard
          title="Subsidy + Loan Combo"
          subtitle="Ideal for homes & small businesses"
          icon={<CreditCard className="h-5 w-5 text-amber-600" />}
          points={[
            "Use state / MNRE subsidies",
            "Lower overall loan amount",
            "Best for budget-conscious buyers",
          ]}
        />
      </div>
    </AnimatedSection>
  );
}

/* ===================== PROCESS + FINAL CTA ===================== */

function ProcessAndCTA() {


    const [openLeadPopup, setOpenLeadPopup] = useState(false);

  const steps = [
    "Share last 2–3 electricity bills",
    "We design system size & savings",
    "You choose EMI / OPEX / subsidy mix",
    "Finance approval and solar installation",
    "Start using solar and watch bills drop",
  ];

  return (
    <AnimatedSection className="space-y-10">
      {/* Simple process list */}
      <div className="space-y-4">
        <motion.h2
          className="text-center text-2xl font-bold text-slate-900 sm:text-3xl"
          variants={fadeUp}
        >
          Simple 5-Step Process
        </motion.h2>
        <motion.p
          className="mx-auto max-w-2xl text-center text-sm sm:text-base text-slate-700"
          variants={fadeUp}
        >
          No complicated paperwork from your side. We guide you from first bill
          to first unit of solar.
        </motion.p>

        <ul className="mx-auto max-w-2xl space-y-3 text-sm text-slate-700">
          {steps.map((step, index) => (
            <motion.li
              key={step}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-xl bg-slate-50 px-3 py-2"
            >
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                {index + 1}
              </span>
              <span>{step}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Final CTA */}
      <div
        id="contact-finance"
        className="rounded-3xl  px-4 py-8 text-center sm:px-8"
      >
        <motion.h2
          className="text-2xl font-bold sm:text-3xl"
          variants={fadeUp}
        >
          Want solar but worried about the cost?
        </motion.h2>

        <motion.p
          className="mx-auto mt-3 max-w-4xl text-sm sm:text-base "
          variants={fadeUp}
        >
          Tell us your monthly bill and type of property. We’ll suggest the
          cleanest, simplest finance option — with numbers you can understand in
          under 5 minutes.
        </motion.p>

        <motion.div
          className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          variants={fadeUp}
        ><button
            onClick={() => setOpenLeadPopup(true)}
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#FF8A3C] to-[#FFB347] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/50 transition hover:shadow-lg hover:brightness-105"
          >
            Talk to Finance Expert
          </button>
          
        </motion.div>
      </div>
      {/* Popup Mount */}
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </AnimatedSection>
  );
}

/* ===================== PRIMITIVES ===================== */

function OverviewCard({ icon, title, desc }: OverviewCardProps) {
  return (
    <motion.div
      className="rounded-xl border border-slate-800/30 bg-white p-4 text-left shadow-sm"
      variants={fadeUp}
      whileHover={{ y: -2 }}
    >
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
          {icon}
        </span>
        {title}
      </div>
      <p className="text-xs sm:text-sm text-slate-600">{desc}</p>
    </motion.div>
  );
}

function OptionCard({ title, subtitle, icon, points }: OptionCardProps) {
  return (
    <motion.div
      className="rounded-xl border border-slate-800/40 bg-white p-5 hover:border-orange-500 text-left shadow-sm"
      variants={fadeUp}
      whileHover={{ y: -2 }}
    >
      <div className="mb-3 flex items-center gap-2">
        {icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-700">
            {icon}
          </span>
        )}
        <div>
          <div className="text-sm font-semibold text-slate-900">
            {title}
          </div>
          {subtitle && (
            <div className="text-[11px] text-slate-500">{subtitle}</div>
          )}
        </div>
      </div>
      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ===================== SIMPLE VISUAL CARD (IMAGE-STYLE) ===================== */

function SimpleVisualCard() {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-slate-600/50 bg-white p-4 shadow-sm"
    >
      {/* You can replace this whole block with a real <img> later */}
      Example:
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TsER3PzZHDjRoTsa8OQRDDOlSLZsn7lreQ&s"
        alt="How solar finance works - simple explanation"
        className="w-full h-50 rounded-xl object-cover"
      />

   
      <div className="space-y-3 rounded-xl bg-slate-50 p-3 text-xs sm:text-sm text-slate-700">
        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-600">Today</span>
          <div className="flex-1 mx-3 h-1.5 rounded-full bg-red-100">
            <div className="h-full w-3/4 rounded-full bg-red-400" />
          </div>
          <span className="font-semibold text-red-600">
            Full bill: ₹10,000
          </span>
        </div>

        <div className="text-center text-[11px] text-slate-500">
          ↓ Switch to solar finance
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-600">After Solar</span>
          <div className="flex-1 mx-3 space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-full rounded-full bg-emerald-100">
                <div className="h-full w-2/5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] text-emerald-700">
                New bill ~₹4k
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-full rounded-full bg-amber-100">
                <div className="h-full w-1/3 rounded-full bg-amber-400" />
              </div>
              <span className="text-[11px] text-amber-700">
                EMI paid from savings
              </span>
            </div>
          </div>
        </div>

        <p className="pt-1 text-[11px] text-slate-500">
          This is just a visual idea. Exact numbers change by city, tariff and
          plant size — but the concept stays simple:{" "}
          <span className="font-semibold text-emerald-700">
            pay EMI from the money you save.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import  { useEffect, useMemo, useRef, useState } from "react";
import {
  Zap,
  Download,

} from "lucide-react";
import { motion, useInView, animate as fmAnimate } from "framer-motion";
import LeadPopup from "../../component/LeadPopup";

/* =========
  Palette (from your logo)
  primary: #FC763A (bright TrueSun orange)
  accent:  #FEC24A (soft warm yellow) - derived for gradients
  neutral: #686868 (logo gray)
   ========= */
const PALETTE = {
  primary: "#FC763A",
  accent: "#FEC24A",
  neutral: "#686868",
  lightBg: "#FFF8F3",
};

/* ===================== Helpers & constants (logic unchanged) ===================== */
const fmtINR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function fmtINRForPdf(value: number): string {
  if (!Number.isFinite(value)) return "-";
  return "Rs " + value.toLocaleString("en-IN");
}

const CITY_SUN = { Maharashtra: 5.4 } as const;
type City = keyof typeof CITY_SUN;

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function subsidyForKw(kw: number): number {
  if (!kw || kw <= 0) return 0;
  const first2 = Math.min(kw, 2) * 30000;
  const third = Math.max(0, Math.min(kw - 2, 1)) * 18000;
  return Math.min(78000, Math.round(first2 + third));
}

/* ===================== PDF (kept unchanged) ===================== */
async function makePdfTable(payload: {
  city: string;
  sunHours: number;
  inputs: { monthlyBill: number; tariff: number; applySubsidy: boolean };
  results: {
    monthlyKWh: number;
    monthlyGen: number;
    recommendedKw: number;
    capex: number;
    subsidy: number;
    netCapex: number;
    monthlySavings: number;
    paybackYears: number;
    kWhPerKwMonth: number;
  };
}) {
  const jsPDF = (await import("jspdf")).default;
  const autoTable = (await import("jspdf-autotable")).default;
  const doc = new jsPDF("p", "pt", "a4");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("TrueSun — Solar Quote", 40, 40);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(
    `Location: ${payload.city}   |   Avg Sun Hours: ${payload.sunHours} kWh/m2/day`,
    40,
    60
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);


  autoTable(doc, {
    startY: 92,
    head: [["Summary", ""]],
    body: [
      ["Monthly Electricity Bill", fmtINRForPdf(payload.inputs.monthlyBill)],
      ["Electricity Tariff", `Rs ${payload.inputs.tariff}/kWh`],
      ["Estimated Monthly Consumption", `${payload.results.monthlyKWh} kWh`],
      ["Apply Subsidy", payload.inputs.applySubsidy ? "Yes" : "No"],
    ],
    theme: "grid",
    styles: { font: "helvetica", fontSize: 10, cellPadding: 6 },
    headStyles: { fillColor: [240, 240, 240], textColor: 0, fontStyle: "bold" },
    columnStyles: { 0: { cellWidth: 260 }, 1: { cellWidth: 260 } },
    margin: { left: 40, right: 40 },
  });

  const y1 = (doc as any).lastAutoTable.finalY + 16;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Recommended System", 40, y1);

  autoTable(doc, {
    startY: y1 + 8,
    head: [["System Size (kW)", "Est. Generation", "Yield", "Payback"]],
    body: [
      [
        `${payload.results.recommendedKw.toFixed(2)} kW`,
        `${payload.results.monthlyGen} kWh/month`,
        `${payload.results.kWhPerKwMonth} kWh/kW/month`,
        `${
          Number.isFinite(payload.results.paybackYears)
            ? payload.results.paybackYears.toFixed(1)
            : "—"
        } years`,
      ],
    ],
    theme: "grid",
    styles: { font: "helvetica", fontSize: 10, cellPadding: 6 },
    headStyles: { fillColor: [240, 240, 240], textColor: 0, fontStyle: "bold" },
    margin: { left: 40, right: 40 },
  });

  const y2 = (doc as any).lastAutoTable.finalY + 16;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Financial Summary", 40, y2);

  autoTable(doc, {
    startY: y2 + 8,
    head: [["Category", "Value"]],
    body: [
      ["Gross CAPEX", fmtINRForPdf(payload.results.capex)],
      ["Subsidy Applied", fmtINRForPdf(payload.results.subsidy)],
      ["Net Cost", fmtINRForPdf(payload.results.netCapex)],
      ["Monthly Savings", fmtINRForPdf(payload.results.monthlySavings)],
    ],
    theme: "grid",
    styles: { font: "helvetica", fontSize: 10, cellPadding: 6 },
    headStyles: { fillColor: [240, 240, 240], textColor: 0, fontStyle: "bold" },
    margin: { left: 40, right: 40 },
  });

  const yEnd = (doc as any).lastAutoTable.finalY + 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(90);
  doc.text("*Estimates only. Actual results may vary depending on site conditions and tariff changes.", 40, yEnd);

  return doc;
}

/* ===================== Small helper: animated count hook ===================== */
function useCountUp(target: number, run: boolean, duration = 1.2) {
  const [value, setValue] = useState(0);
  const ref = useRef<{ stop?: () => void } | null>(null);

  useEffect(() => {
    if (!run) {
      setValue(0);
      return;
    }
    if (ref.current && typeof ref.current.stop === "function") {
      try {
        ref.current.stop();
      } catch {}
    }
    ref.current = fmAnimate(0, target, {
      duration,
      ease: [0.22, 0.8, 0.2, 1],
      onUpdate(v) {
        setValue(Math.floor(v));
      },
    }) as any;
    return () => {
      if (ref.current && typeof ref.current.stop === "function") {
        try {
          ref.current.stop();
        } catch {}
      }
    };
  }, [target, run, duration]);

  return value;
}



/* ===================== Main Component (animated + nicer UI) ===================== */
export default function TrueSunAnimatedCalculator() {
  const [city] = useState<City>("Maharashtra");
  const [monthlyBill, setMonthlyBill] = useState<number>(3000);
  const [tariff, setTariff] = useState<number>(9);
  const [applySubsidy, setApplySubsidy] = useState<boolean>(true);
  const [openLeadPopup, setOpenLeadPopup] = useState(false);

  // constants
  const PR = 0.75;
  const COST_PER_KW = 55000;
  const TARGET_OFFSET = 0.8;

  const result = useMemo(() => {
    const sunHours = CITY_SUN[city];
    const monthlyKWh = monthlyBill > 0 && tariff > 0 ? monthlyBill / tariff : 0;
    const targetKWh = monthlyKWh * TARGET_OFFSET;
    const kWhPerKwMonth = sunHours * 30 * PR;
    const recommendedKw = kWhPerKwMonth > 0 ? clamp(targetKWh / kWhPerKwMonth, 0.3, 25) : 0;

    const capex = Math.round(recommendedKw * COST_PER_KW);
    const subsidy = applySubsidy ? subsidyForKw(recommendedKw) : 0;
    const netCapex = Math.max(0, capex - subsidy);
    const monthlyGen = Math.round(recommendedKw * kWhPerKwMonth);
    const monthlySavings = Math.round(monthlyGen * tariff);
    const annualSavingsNet = monthlySavings * 12;
    const paybackYears = annualSavingsNet > 0 ? netCapex / annualSavingsNet : Infinity;

    return {
      sunHours,
      monthlyKWh: Math.round(monthlyKWh),
      monthlyGen,
      recommendedKw: Number(recommendedKw.toFixed(2)),
      capex,
      subsidy,
      netCapex,
      monthlySavings,
      paybackYears,
      kWhPerKwMonth: Math.round(kWhPerKwMonth),
    };
  }, [monthlyBill, tariff, city, applySubsidy]);

  // in-view detection for animations
  const rootRef = useRef(null);
  const inView = useInView(rootRef, { once: false, amount: 0.2 });

  // Counters run when the section is in view
  const capexCount = useCountUp(result.capex, inView);
  const subsidyCount = useCountUp(result.subsidy, inView);
  const netCostCount = useCountUp(result.netCapex, inView);
  const savingsCount = useCountUp(result.monthlySavings, inView);


  return (
    <div id="calculator" ref={rootRef} className="w-full bg-linear-to-b" style={{ background: PALETTE.lightBg }}>
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: PALETTE.neutral }}
          >
            Solar Savings Calculator — <span style={{ color: PALETTE.primary }}>TrueSun</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-2 text-sm text-gray-600">
            Enter your bill & tariff — see recommended system, cost & payback.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Inputs card */}
          <motion.section
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white px-6 py-7 shadow-2xl border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-md p-2" style={{ background: `linear-gradient(90deg, ${PALETTE.primary}22, ${PALETTE.accent}22)` }}>
                <Zap className="h-5 w-5" style={{ color: PALETTE.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold" style={{ color: PALETTE.neutral }}>Your Consumption</h3>
                <p className="text-xs text-gray-500">We use conservative assumptions for realistic estimates.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">City / Location</label>
                <div className="rounded-md p-3 border border-gray-100 bg-white font-medium">Maharashtra</div>
                <div className="text-xs text-gray-500 mt-1">Avg sun hours: <strong>{CITY_SUN[city]} kWh/m²/day</strong></div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Monthly Electricity Bill (₹)</label>
                <input
                  aria-label="Monthly bill"
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value || 0))}
                  className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-2"
                  style={{ boxShadow: "inset 0 1px 0 rgba(0,0,0,0.02)" }}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Electricity Tariff (₹/kWh)</label>
                <input
                  aria-label="Tariff"
                  type="number"
                  step="0.1"
                  value={tariff}
                  onChange={(e) => setTariff(Number(e.target.value || 0))}
                  className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-2"
                />
                <div className="text-xs text-gray-500 mt-1">Estimated consumption: <strong>{result.monthlyKWh} kWh</strong></div>
              </div>

              <div className="flex items-center gap-3">
                <input id="subsidy" type="checkbox" className="h-4 w-4" checked={applySubsidy} onChange={(e) => setApplySubsidy(e.target.checked)} />
                <label htmlFor="subsidy" className="text-sm text-gray-700">Apply PM Surya Ghar Subsidy</label>
              </div>

           
            </div>
          </motion.section>

          {/* Results card */}
          <motion.section
            initial={{ opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl p-6 bg-white shadow-2xl border border-gray-100 relative overflow-hidden"
            style={{ background: "linear-gradient(180deg, #ffffff, #fff7ef)" }}
          >
            {/* decorative sun flare */}
            <div aria-hidden style={{ position: "absolute", right: -60, top: -60, width: 220, height: 220, borderRadius: 110, background: `radial-gradient(circle at 30% 30%, ${PALETTE.primary}33, transparent 40%)` }} />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
              <div>
                <div className="flex items-center gap-3">
                  <div style={{ width: 56, height: 56, borderRadius: 12, background: `linear-gradient(135deg, ${PALETTE.primary}, ${PALETTE.accent})` }} className="flex items-center justify-center shadow-md">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Recommended System Size</div>
                    <motion.div
                      initial={{ scale: 0.98, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6 }}
                      className="mt-1 text-4xl font-extrabold"
                      style={{ color: PALETTE.neutral }}
                    >
                      {showFormattedKw(kwCountFrom(result.recommendedKw))}
                      <span className="text-lg font-medium ml-2" style={{ color: PALETTE.neutral }}>kW</span>
                    </motion.div>
                    <div className="text-xs text-gray-500 mt-1">Est. monthly gen: <strong>{result.monthlyGen} kWh</strong></div>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ y: -6, boxShadow: `0 12px 30px ${PALETTE.primary}22` }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="rounded-lg border border-gray-100 bg-white p-3 text-center shadow-sm w-40"
              >
                <div className="text-xs text-gray-500">Payback</div>
                <div className="text-3xl font-bold" style={{ color: "#0ea5a6" }}>
                  {Number.isFinite(result.paybackYears) ? result.paybackYears.toFixed(1) : "—"}
                </div>
                <div className="text-xs text-gray-500">Years</div>
              </motion.div>
            </div>

            {/* progress */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div>Target generation (80%)</div>
                <div><strong>{Math.round(result.monthlyKWh * 0.8)} kWh</strong></div>
              </div>
              <div className="mt-2 h-3 rounded-full bg-gray-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, Math.round((result.monthlyGen / Math.max(1, Math.round(result.monthlyKWh * 0.8))) * 100))}%` }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${PALETTE.primary}, ${PALETTE.accent})` }}
                />
              </div>
            </div>

            {/* KPI grid */}
            <motion.div className="mt-6 grid grid-cols-2 gap-4" initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerVars()}>
              <motion.div variants={itemFade()} whileHover={{ y: -6 }} className="rounded-lg p-3 border border-gray-100 bg-white shadow-sm">
                <div className="text-xs text-gray-500">Gross CAPEX</div>
                <div className="mt-1 text-lg font-semibold" style={{ color: PALETTE.neutral }}>{fmtINR.format(capexCount)}</div>
              </motion.div>

              <motion.div variants={itemFade()} whileHover={{ y: -6 }} className="rounded-lg p-3 border border-gray-100 bg-white shadow-sm">
                <div className="text-xs text-gray-500">Subsidy Applied</div>
                <div className="mt-1 text-lg font-semibold text-[#F4320B]">{fmtINR.format(subsidyCount)}</div>
              </motion.div>

              <motion.div variants={itemFade()} whileHover={{ y: -6 }} className="rounded-lg p-3 border border-gray-100 bg-white shadow-sm">
                <div className="text-xs text-gray-500">Estimated Cost</div>
                <div className="mt-1 text-2xl font-bold text-green-700" >{fmtINR.format(netCostCount)}</div>
              </motion.div>

              <motion.div variants={itemFade()} whileHover={{ y: -6 }} className="rounded-lg p-3 border border-gray-100 bg-white shadow-sm">
                <div className="text-xs text-gray-500">Expected Monthly  Savings</div>
                <div className="mt-1 text-lg font-semibold" style={{ color: PALETTE.primary }}>{fmtINR.format(savingsCount)}</div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <motion.button
                onClick={() => setOpenLeadPopup(true)}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ background: PALETTE.primary, color: "#fff", boxShadow: `0 10px 30px ${PALETTE.primary}33` }}
              >
                Book Free Site Visit
              </motion.button>

              <motion.button
                onClick={async () => {
                  const doc = await makePdfTable({
                    city,
                    sunHours: result.sunHours,
                    inputs: { monthlyBill, tariff, applySubsidy },
                    results: result,
                  });
                  doc.save(`solar-quote-${city}-${Date.now()}.pdf`);
                }}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border"
                style={{ borderColor: PALETTE.primary, color: PALETTE.primary }}
              >
                <Download className="h-4 w-4" /> Download Report
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Lead popup mount */}
      {openLeadPopup && <LeadPopup onClose={() => setOpenLeadPopup(false)} />}
    </div>
  );

  // helpers used inside component
  function kwCountFrom(val: number) {
    // return number with one decimal as number for count hook
    return Math.round(val * 10) / 10;
  }

  function showFormattedKw(n: number) {
    if (!Number.isFinite(n)) return "—";
    return n % 1 === 0 ? n.toFixed(0) : n.toFixed(1);
  }

  function staggerVars() {
    return {
      visible: { transition: { staggerChildren: 0.06 } },
      hidden: {},
    };
  }

  function itemFade() {
    return {
      hidden: { opacity: 0, y: 8 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
  }
}

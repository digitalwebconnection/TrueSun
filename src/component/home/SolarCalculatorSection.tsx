"use client";

import { useMemo, useState } from "react";
import {
  Zap,
  IndianRupee,
  Download,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import LeadPopup from "../../component/LeadPopup"; // adjust the path if needed

/* ===================== Helpers ===================== */
// For on-screen display (cards)
const fmtINR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

// For PDF only – simple ASCII, no ₹ or special spaces
function fmtINRForPdf(value: number): string {
  if (!Number.isFinite(value)) return "-";
  return "Rs " + value.toLocaleString("en-IN"); // e.g. "Rs 1,82,000"
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

/* ===================== PDF (jsPDF + autoTable) ===================== */
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

  // Header
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

  // Inputs
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("Inputs", 40, 84);

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
    headStyles: {
      fillColor: [240, 240, 240],
      textColor: 0,
      fontStyle: "bold",
    },
    columnStyles: {
      0: { cellWidth: 260 },
      1: { cellWidth: 260 },
    },
    margin: { left: 40, right: 40 },
  });

  // Recommended system
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
    headStyles: {
      fillColor: [240, 240, 240],
      textColor: 0,
      fontStyle: "bold",
    },
    margin: { left: 40, right: 40 },
  });

  // Financial summary
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
    headStyles: {
      fillColor: [240, 240, 240],
      textColor: 0,
      fontStyle: "bold",
    },
    columnStyles: {
      0: { cellWidth: 260 },
      1: { cellWidth: 260 },
    },
    margin: { left: 40, right: 40 },
  });

  // Footer
  const yEnd = (doc as any).lastAutoTable.finalY + 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(90);
  doc.text(
    "*Estimates only. Actual results may vary depending on site conditions and tariff changes.",
    40,
    yEnd
  );

  return doc;
}

/* ===================== Component ===================== */
export default function SolarCalculatorMaharashtra() {
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
    const monthlyKWh =
      monthlyBill > 0 && tariff > 0 ? monthlyBill / tariff : 0;
    const targetKWh = monthlyKWh * TARGET_OFFSET;
    const kWhPerKwMonth = sunHours * 30 * PR;
    const recommendedKw =
      kWhPerKwMonth > 0
        ? clamp(targetKWh / kWhPerKwMonth, 0.3, 25)
        : 0;

    const capex = Math.round(recommendedKw * COST_PER_KW);
    const subsidy = applySubsidy ? subsidyForKw(recommendedKw) : 0;
    const netCapex = Math.max(0, capex - subsidy);
    const monthlyGen = Math.round(recommendedKw * kWhPerKwMonth);
    const monthlySavings = Math.round(monthlyGen * tariff);
    const annualSavingsNet = monthlySavings * 12;
    const paybackYears =
      annualSavingsNet > 0 ? netCapex / annualSavingsNet : Infinity;

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

  return (
    <div id="calculator"
 className="min-h-screen w-full bg-linear-to-b from-amber-100 via-white to-gray-600/5 text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header */}
        <header  className="mx-auto max-w-5xl space-y-3 text-center">
          <h1 className="mx-auto max-w-xl text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Calculate Your Saving With{" "}
            <span className="text-orange-600">TrueSun</span>
          </h1>
          <p className="text-base text-gray-600 sm:text-lg">
            Estimate your solar system size, cost, subsidy, and payback period
            for homes in Maharashtra.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Inputs */}
          <section className="h-fit space-y-6 rounded-2xl border border-gray-800/10 bg-white p-6 shadow-xl shadow-black/5 md:p-8 lg:col-span-1">
            <h2 className="flex items-center gap-2 border-b border-gray-200 pb-4 text-2xl font-semibold text-gray-800">
              <DollarSign className="h-5 w-5 text-green-500" />
              Your Parameters
            </h2>

            <div className="space-y-6">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  City / Location
                </label>
                <div className="rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-800">
                  Maharashtra
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Average Sun Hours:{" "}
                  <b>{CITY_SUN[city]} kWh/m²/day</b>
                </p>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Monthly Electricity Bill (₹)
                </label>
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) =>
                    setMonthlyBill(Number(e.target.value || 0))
                  }
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-800 transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Electricity Tariff (₹/kWh)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={tariff}
                  onChange={(e) =>
                    setTariff(Number(e.target.value || 0))
                  }
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-800 transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Estimated consumption:{" "}
                  <b>{result.monthlyKWh} kWh</b>
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  id="subsidy-checkbox"
                  type="checkbox"
                  checked={applySubsidy}
                  onChange={(e) => setApplySubsidy(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-400"
                />
                <label
                  htmlFor="subsidy-checkbox"
                  className="select-none text-sm text-gray-700"
                >
                  Apply PM Surya Ghar Subsidy
                </label>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="space-y-8 rounded-2xl border border-gray-800/10 bg-white p-6 shadow-xl shadow-black/5 md:p-8 lg:col-span-2">
            <h2 className="flex items-center gap-2 border-b border-gray-200 pb-4 text-2xl font-semibold text-gray-800">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Projected Investment & Savings
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-orange-600 p-6 text-white shadow-md">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Zap className="h-5 w-5" /> Recommended System Size
                </div>
                <div className="mt-2 text-5xl font-extrabold leading-none">
                  {result.recommendedKw}
                </div>
                <div className="text-xl font-semibold opacity-90">kW</div>
                <p className="mt-2 text-xs opacity-80">
                  Est. monthly generation:{" "}
                  <b>{result.monthlyGen} kWh</b>
                </p>
              </div>

              <div className="md:col-span-2 rounded-2xl border border-gray-800/10 bg-gray-50 p-6 shadow-xl shadow-black/5">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IndianRupee className="h-5 w-5 text-blue-500" /> Payback
                  Period
                </div>
                <div className="mt-2 text-5xl font-extrabold leading-none text-blue-500">
                  {Number.isFinite(result.paybackYears)
                    ? result.paybackYears.toFixed(1)
                    : "—"}
                </div>
                <div className="text-xl font-semibold text-gray-700">
                  Years
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Actual results may vary depending on location and tariff
                  escalation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-4">
              <div className="rounded-xl border border-gray-800/10 bg-gray-50 p-4 shadow-lg shadow-black/10">
                <div className="text-xs text-gray-500">Gross CAPEX</div>
                <div className="mt-1 text-lg font-bold text-gray-800">
                  {fmtINR.format(result.capex)}
                </div>
              </div>
              <div className="rounded-xl border border-gray-800/10 bg-gray-50 p-4 shadow-lg shadow-black/10">
                <div className="text-xs text-gray-500">Subsidy Applied</div>
                <div className="mt-1 text-lg font-bold text-green-600">
                  {fmtINR.format(result.subsidy)}
                </div>
              </div>
              <div className="rounded-xl border border-gray-800/10 bg-gray-50 p-4 shadow-lg shadow-black/10">
                <div className="text-xs text-gray-500">Net Cost</div>
                <div className="mt-1 text-lg font-bold text-indigo-600">
                  {fmtINR.format(result.netCapex)}
                </div>
              </div>
              <div className="rounded-xl border border-gray-800/10 bg-gray-50 p-4 shadow-lg shadow-black/10">
                <div className="text-xs text-gray-500">Monthly Savings</div>
                <div className="mt-1 text-lg font-bold text-amber-600">
                  {fmtINR.format(result.monthlySavings)}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <button
            onClick={() => setOpenLeadPopup(true)}
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#FF8A3C] to-[#FFB347] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/50 transition hover:shadow-lg hover:brightness-105"
          >
            Book a Free Site Visit
          </button>

          <button
            onClick={async () => {
              const doc = await makePdfTable({
                city,
                sunHours: result.sunHours,
                inputs: { monthlyBill, tariff, applySubsidy },
                results: result,
              });
              doc.save(`solar-quote-${city}-${Date.now()}.pdf`);
            }}
            className="flex items-center gap-3 rounded-full border border-orange-600 bg-amber-50 px-10 py-4 text-lg font-medium text-orange-600 transition hover:bg-indigo-50"
          >
            <Download className="h-5 w-5" /> Download Report
          </button>
        </div>
      </div>

      {/* Popup Mount */}
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </div>
  );
}

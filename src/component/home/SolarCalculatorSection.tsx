import { useState, useMemo } from "react";
import {
  Zap,
  IndianRupee,
  Download,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

function subsidyForKw(kw: number): number {
  if (!kw || kw <= 0) return 0;
  const first2 = Math.min(kw, 2) * 30000;
  const third = Math.max(0, Math.min(kw - 2, 1)) * 18000;
  return Math.min(78000, Math.round(first2 + third));
}

// ✅ Only one city: Maharashtra
const CITY_SUN = {
  Maharashtra: 5.4, // average solar irradiance for Maharashtra
} as const;

type City = keyof typeof CITY_SUN;

export default function SolarCalculatorMaharashtra() {
  const [city] = useState<City>("Maharashtra");
  const [monthlyBill, setMonthlyBill] = useState<number>(3000);
  const [tariff, setTariff] = useState<number>(9);
  const [applySubsidy, setApplySubsidy] = useState<boolean>(true);

  const PR = 0.75;
  const COST_PER_KW = 55000;
  const TARGET_OFFSET = 0.8;

  const sunHours = CITY_SUN[city];

  const result = useMemo(() => {
    const monthlyKWh =
      monthlyBill > 0 && tariff > 0 ? monthlyBill / tariff : 0;
    const targetKWh = monthlyKWh * TARGET_OFFSET;
    const kWhPerKwMonth = sunHours * 30 * PR;
    const recommendedKw =
      kWhPerKwMonth > 0 ? clamp(targetKWh / kWhPerKwMonth, 0.3, 25) : 0;

    const capex = Math.round(recommendedKw * COST_PER_KW);
    const subsidy = applySubsidy ? subsidyForKw(recommendedKw) : 0;
    const netCapex = Math.max(0, capex - subsidy);
    const monthlyGen = Math.round(recommendedKw * kWhPerKwMonth);
    const monthlySavings = Math.round(monthlyGen * tariff);
    const annualSavingsNet = monthlySavings * 12;
    const paybackYears =
      annualSavingsNet > 0 ? netCapex / annualSavingsNet : Infinity;

    return {
      monthlyKWh: Math.round(monthlyKWh),
      monthlyGen,
      recommendedKw: Number(recommendedKw.toFixed(2)),
      capex,
      subsidy,
      netCapex,
      monthlySavings,
      paybackYears,
    };
  }, [monthlyBill, tariff, sunHours, applySubsidy]);

  const exportQuote = (): void => {
    const payload = {
      city,
      inputs: { monthlyBill, tariff, applySubsidy },
      results: result,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `solar-quote-${city}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-amber-100 via-white to-gray-600/5 text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-3 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl max-w-xl mx-auto font-extrabold text-gray-900  justify-center items-center gap-3">
            {/* <Sun className="text-amber-500 w-8 h-8 sm:w-10 sm:h-10" /> */}
            Calculate Your Shaving With <span className="text-orange-600">TrueSun</span> 
          </h1>
          <p className="text-gray-600 text-base sm:text-lg ">
            Estimate your solar system size, cost, subsidy, and payback period
            for homes in Maharashtra.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <section className="lg:col-span-1 bg-white  rounded-2xl p-6 md:p-8 space-y-6 border-1 border-gray-800/20 shadow-xl shadow-black/30 h-fit">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-500" />
              Your Parameters
            </h2>

            <div className="space-y-6">
              {/* City Display (Fixed) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City / Location
                </label>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800">
                  Maharashtra
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Average Sun Hours: <b>{CITY_SUN[city]} kWh/m²/day</b>
                </p>
              </div>

              {/* Monthly Bill */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Electricity Bill (₹)
                </label>
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value || 0))}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                />
              </div>

              {/* Tariff */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Electricity Tariff (₹/kWh)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={tariff}
                  onChange={(e) => setTariff(Number(e.target.value || 0))}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Estimated consumption: <b>{result.monthlyKWh} kWh</b>
                </p>
              </div>

              {/* Subsidy Checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  id="subsidy-checkbox"
                  type="checkbox"
                  checked={applySubsidy}
                  onChange={(e) => setApplySubsidy(e.target.checked)}
                  className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-400"
                />
                <label
                  htmlFor="subsidy-checkbox"
                  className="text-sm text-gray-700 select-none"
                >
                  Apply PM Surya Ghar Subsidy
                </label>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="lg:col-span-2 bg-white  rounded-2xl p-6 md:p-8 space-y-8 border-1 border-gray-800/20 shadow-xl shadow-black/30">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Projected Investment & Savings
            </h2>

            {/* Recommended Size & Payback */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 p-6 rounded-xl bg-orange-600  text-white shadow-md">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Zap className="w-5 h-5" /> Recommended System Size
                </div>
                <div className="text-5xl font-extrabold mt-2 leading-none">
                  {result.recommendedKw}
                </div>
                <div className="text-xl font-semibold opacity-90">kW</div>
                <p className="text-xs opacity-80 mt-2">
                  Est. monthly generation: <b>{result.monthlyGen} kWh</b>
                </p>
              </div>

              <div className="md:col-span-2 p-6 rounded-xl bg-gray-50 border-1 border-gray-800/20 shadow-xl shadow-black/30">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <IndianRupee className="w-5 h-5 text-blue-500" /> Payback Period
                </div>
                <div className="text-5xl font-extrabold text-blue-500 mt-2 leading-none">
                  {Number.isFinite(result.paybackYears)
                    ? result.paybackYears.toFixed(1)
                    : "—"}
                </div>
                <div className="text-xl font-semibold text-gray-700">Years</div>
                <p className="text-xs text-gray-500 mt-2">
                  Actual results may vary depending on location and tariff
                  escalation.
                </p>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-gray-50 border-1 border-gray-800/20 shadow-lg shadow-black/30">
                <div className="text-xs text-gray-500">Gross CAPEX</div>
                <div className="text-lg font-bold text-gray-800 mt-1">
                  {inr.format(result.capex)}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border-1 border-gray-800/20 shadow-lg shadow-black/30">
                <div className="text-xs text-gray-500">Subsidy Applied</div>
                <div className="text-lg font-bold text-green-600 mt-1">
                  {inr.format(result.subsidy)}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border-1 border-gray-800/20 shadow-lg shadow-black/30">
                <div className="text-xs text-gray-500">Net Cost</div>
                <div className="text-lg font-bold text-indigo-600 mt-1">
                  {inr.format(result.netCapex)}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border-1 border-gray-800/20 shadow-lg shadow-black/30">
                <div className="text-xs text-gray-500">Monthly Savings</div>
                <div className="text-lg font-bold text-amber-600 mt-1">
                  {inr.format(result.monthlySavings)}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <button className="px-10 py-4 bg-amber-500 text-white rounded-full text-lg font-bold hover:bg-amber-400 transition transform hover:scale-105 shadow-md">
            Get a Personalized Quote
          </button>
          <button
            onClick={exportQuote}
            className="px-10 py-4 border border-orange-600 text-orange-600 bg-amber-50 rounded-full text-lg font-medium hover:bg-indigo-50 transition flex items-center gap-3"
          >
            <Download className="w-5 h-5" /> Download Report
          </button>
        </div>
      </div>
    </div>
  );
}

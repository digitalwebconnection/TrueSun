"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Zap } from "lucide-react";
import { useInView, animate as fmAnimate } from "framer-motion";
import LeadPopup from "../../component/LeadPopup";

/* ========= Palette ========= */

const PALETTE = {
  primary: "#FC763A",
  accent: "#FEC24A",
  neutral: "#686868",
  lightBg: "#FFF8F3",
};

/* ========= Solar Constants ========= */

const PRICE_PER_UNIT = 10;
const ONE_KW_SOLAR_AREA = 80;
const UNIT_MONTHLY_ONE_KW = 120;
const COST_PER_KW = 55000;

/* ========= Customer Categories ========= */

const CUSTOMER_CATEGORY = [
  { label: "RESIDENTIAL", value: "RESIDENTIAL", subsidyAllowed: true },
  { label: "INSTITUTIONAL", value: "INSTITUTIONAL", subsidyAllowed: false },
  { label: "INDUSTRIAL", value: "INDUSTRIAL", subsidyAllowed: false },
  { label: "COMMERCIAL", value: "COMMERCIAL", subsidyAllowed: false },
  { label: "GOVERNMENT", value: "GOVERNMENT", subsidyAllowed: false },
  { label: "SOCIAL SECTOR", value: "SOCIAL SECTOR", subsidyAllowed: false },
];

/* ========= Currency Formatter ========= */

const fmtINR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/* ========= Subsidy Calculation ========= */

function subsidyForKw(kw: number) {
  if (!kw || kw <= 0) return 0;

  const first2 = Math.min(kw, 2) * 30000;
  const third = Math.max(0, Math.min(kw - 2, 1)) * 18000;

  return Math.min(78000, Math.round(first2 + third));
}

/* ========= Counter Animation ========= */

function useCountUp(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!run) {
      setValue(0);
      return;
    }

    ref.current = fmAnimate(0, target, {
      duration: 1.2,
      onUpdate(v) {
        setValue(Math.floor(v));
      },
    });

    return () => ref.current?.stop();
  }, [target, run]);

  return value;
}

/* ================= MAIN COMPONENT ================= */

export default function TrueSunAnimatedCalculator() {

  const [pincode, setPincode] = useState("");
  const [rooftopArea, setRooftopArea] = useState(800);
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [category, setCategory] = useState("RESIDENTIAL");

  const [applySubsidy, setApplySubsidy] = useState(true);
  const [openLeadPopup, setOpenLeadPopup] = useState(false);

  /* ===== Category Check ===== */

  const selectedCategory = CUSTOMER_CATEGORY.find(
    (c) => c.value === category
  );

  const subsidyAllowed = selectedCategory?.subsidyAllowed ?? false;

  /* ===== Fix Subsidy Toggle ===== */

  useEffect(() => {
    if (subsidyAllowed) {
      setApplySubsidy(true);
    } else {
      setApplySubsidy(false);
    }
  }, [category]);

  /* ================= CALCULATIONS ================= */

  const result = useMemo(() => {

    const safeArea = Math.max(0, rooftopArea);
    const safeBill = Math.max(0, monthlyBill);

    /* Area Based System */

    const areaBasedKW = Math.round(safeArea / ONE_KW_SOLAR_AREA);

    /* Bill Based System */

    const unitsFromBill = safeBill / PRICE_PER_UNIT;
    const billBasedKW = Math.round(unitsFromBill / UNIT_MONTHLY_ONE_KW);

    /* Recommended System */

    const recommendedKw = Math.max(
      0.5,
      Math.min(areaBasedKW || 1, billBasedKW || areaBasedKW)
    );

    /* Generation */

    const monthlyGen = Math.round(recommendedKw * UNIT_MONTHLY_ONE_KW);
    const yearlyGen = monthlyGen * 12;

    /* Savings */

    const monthlySavings = Math.round(monthlyGen * PRICE_PER_UNIT);
    const annualSavings = monthlySavings * 12;

    /* Carbon Reduction */

    const carbonReduction = Math.round(recommendedKw * 1.63 * 25);

    /* Cost */

    const capex = Math.round(recommendedKw * COST_PER_KW);

    const subsidy =
      applySubsidy && subsidyAllowed
        ? subsidyForKw(recommendedKw)
        : 0;

    const netCapex = Math.max(0, capex - subsidy);

    /* Payback */

    const paybackYears =
      annualSavings > 0 ? netCapex / annualSavings : Infinity;

    return {
      areaBasedKW,
      billBasedKW,
      recommendedKw,
      monthlyGen,
      yearlyGen,
      monthlySavings,
      carbonReduction,
      capex,
      subsidy,
      netCapex,
      paybackYears,
    };

  }, [monthlyBill, rooftopArea, applySubsidy, subsidyAllowed]);

  /* ===== Animations ===== */

  const rootRef = useRef(null);
  const inView = useInView(rootRef);

  const capexCount = useCountUp(result.capex, inView);
  const subsidyCount = useCountUp(result.subsidy, inView);
  const netCostCount = useCountUp(result.netCapex, inView);
  const savingsCount = useCountUp(result.monthlySavings, inView);

  /* ================= UI ================= */

  return (

    <div ref={rootRef} style={{ background: PALETTE.lightBg }} className="py-12">
      <h1 className=" text-4xl font-bold text-center mb-2 text-[#686868]">Calculate Your Solar Savings & <span className=" text-[#FC763A]">Payback in Minutes</span> 
      </h1>
      <p className=" text-center max-w-6xl mb-4 mx-auto">Thinking about going solar but unsure about the savings? Our easy-to-use solar calculator helps you instantly estimate your monthly electricity savings, system payback period, and long-term financial returns so you can make confident, informed decisions before installing solar.</p>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 px-6">

        {/* INPUT SECTION */}

        <div className="bg-white rounded-xl shadow-lg p-6">

          <h3 className="font-semibold text-lg mb-5">
            Let's design your system
          </h3>

          {/* PINCODE */}

          <div className="mb-4">
            <label className="text-sm">Pincode</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter Pincode"
              className="w-full border p-3 rounded-lg mt-1"
            />
          </div>

          {/* ROOFTOP */}

          <div className="mb-4">
            <label className="text-sm">Total Rooftop Area (sq.ft)</label>
            <input
              type="number"
              value={rooftopArea}
              onChange={(e) =>
                setRooftopArea(Number(e.target.value || 0))
              }
              className="w-full border p-3 rounded-lg mt-1"
            />
          </div>

          {/* CATEGORY */}

          <div className="mb-4">
            <label className="text-sm">Customer Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border p-3 rounded-lg mt-1"
            >
              {CUSTOMER_CATEGORY.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* BILL */}

          <div className="mb-4">
            <label className="text-sm">
              Electricity Bill Per Month
            </label>

            <input
              type="number"
              value={monthlyBill}
              onChange={(e) =>
                setMonthlyBill(Number(e.target.value || 0))
              }
              className="w-full border p-3 rounded-lg mt-1"
            />
          </div>

          {/* SUBSIDY */}

          <div className="flex items-center gap-2 mt-4">

            <input
              type="checkbox"
              checked={applySubsidy}
              disabled={!subsidyAllowed}
              onChange={(e) => setApplySubsidy(e.target.checked)}
            />

            <span className="text-sm">
              Apply PM Surya Ghar Subsidy
            </span>

          </div>

        </div>

        {/* RESULT SECTION */}

        <div className="bg-white rounded-xl shadow-lg p-6">

          <div className="flex items-center gap-3 mb-4">
            <Zap style={{ color: PALETTE.primary }} />
            <h3 className="font-semibold text-lg">
              Recommended Solar System
            </h3>
          </div>

          <div className="text-4xl font-bold mb-2">
            {result.recommendedKw} kW
          </div>

          <div className="text-sm text-gray-500 mb-4">
            Area Based: {result.areaBasedKW}kW | Bill Based: {result.billBasedKW}kW
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">

            <div>
              <p className="text-xs text-gray-500">Monthly Generation</p>
              <p className="font-semibold">{result.monthlyGen} Units</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Yearly Generation</p>
              <p className="font-semibold">{result.yearlyGen} Units</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Monthly Savings</p>
              <p className="font-semibold">{fmtINR.format(savingsCount)}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Carbon Reduction</p>
              <p className="font-semibold">{result.carbonReduction} Tonnes</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">System Cost</p>
              <p className="font-semibold">{fmtINR.format(capexCount)}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Subsidy</p>
              <p className="font-semibold text-red-500">{fmtINR.format(subsidyCount)}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Net Cost</p>
              <p className="font-semibold text-green-600">{fmtINR.format(netCostCount)}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Payback</p>
              <p className="font-semibold">
                {Number.isFinite(result.paybackYears)
                  ? result.paybackYears.toFixed(1)
                  : "—"} Years
              </p>
            </div>

          </div>

          <div className="mt-6">
            <button
              onClick={() => setOpenLeadPopup(true)}
              className="px-6 py-2 bg-[#FC763A] rounded-full text-white"
           
            >
              Book Free Site Visit
            </button>
          </div>

        </div>

      </div>

      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}

    </div>
  );
}
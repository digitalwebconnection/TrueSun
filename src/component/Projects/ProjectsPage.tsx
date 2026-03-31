 

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SunMedium,
  MapPin,
  Sparkles,
  Building2,
  Leaf,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import bloom from "../../assets/Bloom Packaging/2.jpg"
import rentokil from "../../assets/PCI Rentokill/2.jpg";
import rustomjee from "../../assets/Rustomjee virar/3.jpeg";
import oberoi from "../../assets/Oberoi Realty/2.jpg";
import landmark from "../../assets/Landmrk Pllatinum/5.jpeg";
import kalpataru from "../../assets/Kalpataru Estate CHS Limited/2.jpg";
import ganesh from "../../assets/Ganesh kung/3.jpeg";
import sharad from "../../assets/Sharad Apt/3.jpeg";
import bungalow from "../../assets/Andheri Bungalow/1.png";

/* =========================
   Palette (TrueSun)
   ========================= */
const PALETTE = {
  primary: "#FC763A",
  accent: "#FEC24A",
  neutral: "#686868",
  softBg: "#FFF8F3",
};

/* ───────────────────────── Types ───────────────────────── */
type Project = {
  name: string;
  segment: string;
  location: string;
  description: string;
  image: string;
  // optional before/after images (useful for the gallery)
  beforeImage?: string;
  afterImage?: string;
  capacity: string;
  roofType: string;
  co2Mitigated: string;
  annualGen: string;
  payback: string;
  savings: string;
  caseStudyUrl?: string;
  clientType?: string;
  clientName?: string;
  commissioningYear?: string;
  modulesUsed?: string;
  invertersUsed?: string;
  mountingType?: string;
  specialFeatures?: string[];
  keyObjectives?: string[];
  challenges?: string[];
  implementationHighlights?: string[];
};

/* ───────────────────────── Data (same as before, added before/after placeholders) ───────────────────────── */
const projects: Project[] = [
  {
    name: "Bloom Packaging Pvt Ltd",
    segment: "Industrial",
    location: "Daman, India",
    description:
      "TrueSun Energy installed a 60 kW rooftop solar power plant for Bloom Packaging Private Limited at their manufacturing facility in Daman. The system is mounted on a metal sheet rooftop covering approximately 5,000 sq. ft.",

    image: bloom,

    capacity: "60 kW",
    roofType: "Metal Sheet Roof",
    co2Mitigated: "2,445 tonnes",
    annualGen: "90,000 kWh",
    payback: "3 years",
    savings: "₹10 Lakhs",

    clientType: "Plastic Bottle Manufacturing Unit",
    clientName: "Bloom Packaging Pvt Ltd",

    modulesUsed: "Trina Solar Half-cut Mono PERC Panels",
    invertersUsed: "Sungrow Multi-MPPT Inverters",
    mountingType: "Metal sheet rooftop mounting structure",

    specialFeatures: [
      "FRP walkways installed for safe rooftop access",
      "Net Metering enabled system",
      "Complete turnkey EPC solution",
    ],
  },

  {
    name: "Rentokil PCI",
    segment: "Commercial & Industrial",
    location: "Goregaon West, Mumbai",
    description:
      "48 kW rooftop solar installation for Rentokil PCI delivering reliable renewable energy and reducing electricity costs for the facility.",

    image: rentokil,

    capacity: "48 kW",
    roofType: "RCC Roof",
    co2Mitigated: "1,772 tonnes",
    annualGen: "74,664 kWh",
    payback: "",
    savings: "",

    clientType: "Commercial Facility",
    clientName: "Rentokil PCI",

    modulesUsed: "High efficiency solar panels",
    invertersUsed: "String Inverters",
    mountingType: "RCC rooftop structure",

    specialFeatures: [
      "Optimized rooftop layout",
      "Reduced electricity costs",
      "Lower carbon footprint",
    ],
  },

  {
    name: "Rustomjee Global City",
    segment: "Residential",
    location: "Virar, Mumbai",
    description:
      "40 kW rooftop solar installation at Global City Virar designed to efficiently utilize RCC rooftop space and generate clean renewable energy.",

    image: rustomjee,

    capacity: "40 kW",
    roofType: "RCC Roof",
    co2Mitigated: "1,476 tonnes",
    annualGen: "58,977 kWh",
    payback: "",
    savings: "₹4 Lakhs / year",

    clientType: "Residential Society",
    clientName: "Rustomjee Global City",

    modulesUsed: "Mono Solar Modules",
    invertersUsed: "Grid-tied String Inverters",
    mountingType: "RCC rooftop structure",

    specialFeatures: [
      "Residential solar generation",
      "Reduced grid dependency",
      "Lower electricity bills",
    ],
  },

  {
    name: "Oberoi Realty",
    segment: "Highrise Residential",
    location: "Bhandup West, Mumbai",
    description:
      "65 kW rooftop solar installation designed to maximize solar energy generation while ensuring long-term reliability and safety.",

    image: oberoi,

    capacity: "65 kW",
    roofType: "RCC Roof",
    co2Mitigated: "2,400 tonnes",
    annualGen: "101,000 kWh",
    payback: "",
    savings: "",

    clientType: "Highrise Residential Building",
    clientName: "Oberoi Realty",

    modulesUsed: "High efficiency solar panels",
    invertersUsed: "Grid tied inverters",
    mountingType: "RCC rooftop mounting structure",

    specialFeatures: [
      "High efficiency generation",
      "Reduced grid power usage",
      "Sustainable energy solution",
    ],
  },

  {
    name: "Landmark Platinum",
    segment: "Residential",
    location: "Bandra East, Mumbai",
    description:
      "30 kW rooftop solar installation generating approximately 45,750 kWh annually for residential energy consumption.",

    image: landmark,

    capacity: "30 kW",
    roofType: "RCC Roof",
    co2Mitigated: "1,107 tonnes",
    annualGen: "45,750 kWh",
    payback: "",
    savings: "",

    clientType: "Residential Society",
    clientName: "Landmark Platinum",

    modulesUsed: "High efficiency solar panels",
    invertersUsed: "Grid tied inverter",
    mountingType: "RCC rooftop mounting",

    specialFeatures: [
      "Optimized for Mumbai solar conditions",
      "Clean renewable power",
      "Reduced carbon footprint",
    ],
  },

  {
    name: "Kalpataru Society",
    segment: "Residential Society",
    location: "Andheri, Mumbai",
    description:
      "115 kW rooftop solar plant where TrueSun acted as Project Management Consultant, handling design, technical planning and execution supervision.",

    image: kalpataru,

    capacity: "115 kW",
    roofType: "RCC Roof",
    co2Mitigated: "4,770 tonnes",
    annualGen: "170,000 kWh",
    payback: "Less than 4 years",
    savings: "₹13 Lakhs annually",

    clientType: "Residential Society",
    clientName: "Kalpataru",

    modulesUsed: "High efficiency solar modules",
    invertersUsed: "String inverters",
    mountingType: "RCC rooftop structure",

    specialFeatures: [
      "Solar for lifts, pumps and common lighting",
      "High ROI for society",
      "Reduced electricity costs",
    ],
  },

  {
    name: "Ganesh Kunj",
    segment: "Residential",
    location: "Andheri East, Mumbai",
    description:
      "15 kW rooftop solar system installed on an RCC terrace converting unused rooftop space into renewable energy generation.",

    image: ganesh,

    capacity: "15 kW",
    roofType: "RCC Roof",
    co2Mitigated: "553 tonnes",
    annualGen: "22,732 kWh",
    payback: "",
    savings: "",

    clientType: "Residential Building",
    clientName: "Ganesh Kunj",

    modulesUsed: "Mono solar panels",
    invertersUsed: "Grid tied inverter",
    mountingType: "RCC rooftop mounting",

    specialFeatures: [
      "Clean renewable energy",
      "Reduced electricity bills",
      "Lower carbon emissions",
    ],
  },

  {
    name: "Sharad Apartment",
    segment: "Residential",
    location: "Goregaon West, Mumbai",
    description:
      "12 kW solar power system installed using an elevated mounting structure allowing solar generation while keeping terrace usable.",

    image: sharad,

    capacity: "12 kW",
    roofType: "RCC Roof",
    co2Mitigated: "442 tonnes",
    annualGen: "20,151 kWh",
    payback: "",
    savings: "",

    clientType: "Residential Apartment",
    clientName: "Sharad Apartment",

    modulesUsed: "High efficiency solar modules",
    invertersUsed: "Grid tied inverter",
    mountingType: "Elevated RCC rooftop structure",

    specialFeatures: [
      "Elevated mounting design",
      "Terrace remains usable",
      "Clean energy generation",
    ],
  },

  {
    name: "Andheri Independent Bungalow",
    segment: "Residential Bungalow",
    location: "Andheri, Mumbai",
    description:
      "15 kW rooftop solar installation executed by TrueSun as EPC for a premium independent bungalow in Mumbai.",

    image: bungalow,

    capacity: "15 kW",
    roofType: "RCC Roof",
    co2Mitigated: "",
    annualGen: "27,375 kWh",
    payback: "",
    savings: "",

    clientType: "Private Residence",
    clientName: "Independent Bungalow",

    modulesUsed: "High efficiency solar modules",
    invertersUsed: "Grid tied inverter",
    mountingType: "RCC rooftop mounting",

    specialFeatures: [
      "Custom solar EPC project",
      "Reduced electricity costs",
      "Clean residential energy generation",
    ],
  },
];

/* ───────────────────── Derived stats ───────────────────── */
function parseNumber(str: string): number {
  const cleaned = str.replace(/,/g, "");
  const match = cleaned.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

const totalCapacityKw = projects.reduce((sum, p) => {
  const n = parseNumber(p.capacity);
  if (p.capacity.toLowerCase().includes("mw")) return sum + n * 1000;
  return sum + n;
}, 0);

const totalCapacityLabel =
  totalCapacityKw >= 1000
    ? `${(totalCapacityKw / 1000).toFixed(1)} MWp`
    : `${totalCapacityKw.toFixed(0)} kWp`;

const totalCo2Tonnes = projects.reduce(
  (sum, p) => sum + parseNumber(p.co2Mitigated),
  0
);

const uniqueSegments = Array.from(new Set(projects.map((p) => p.segment)));
const uniqueStates = Array.from(
  new Set(
    projects.map((p) => {
      const parts = p.location.split(",");
      return parts[parts.length - 1].trim();
    })
  )
);

/* ───────────────────── UI Helpers ───────────────────── */
function StatPill({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs shadow-sm ring-1 ring-slate-100">
      <Icon className="h-4 w-4" style={{ color: PALETTE.primary }} />
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
        <span className="text-xs font-semibold">{value}</span>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white" style={{ boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.03)" }}>
        <Icon className="h-4 w-4" style={{ color: PALETTE.primary }} />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
          {label}
        </div>
        <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

/* ───────────────────── Modal (unchanged) ───────────────────── */

/* ───────────────────── Gallery Section (NEW) ───────────────────── */

// function BeforeAfter({
//   before,
//   after,
//   alt,
// }: {
//   before?: string;
//   after?: string;
//   alt?: string;
// }) {
//   const [pos, setPos] = useState(50);
//   // If before/after not provided, show single image
//   const imgBefore = before || after;
//   const imgAfter = after || before;

//   return (
//     <div className="rounded-xl overflow-hidden bg-black/5">
//       <div className="relative h-64 w-full">
//         {/* After (bottom) */}
//         <img src={imgAfter} alt={alt} className="h-full w-full object-cover" />
//         {/* Before (top, clipped) */}
//         <div
//           className="absolute inset-0 overflow-hidden"
//           aria-hidden
//           style={{ width: `${pos}%` }}
//         >
//           <img src={imgBefore} alt={`${alt} — before`} className="h-full w-full object-cover filter grayscale contrast-95 brightness-90" />
//         </div>

//         {/* Slider handle */}
//         <div className="absolute left-0 right-0 bottom-2 flex items-center justify-center pointer-events-none">
//           <input
//             aria-label="Adjust before / after"
//             className="pointer-events-auto w-2/3"
//             type="range"
//             min={0}
//             max={100}
//             value={pos}
//             onChange={(e) => setPos(Number(e.target.value))}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function GallerySection({
//   projects,
//   onOpenProject,
// }: {
//   projects: Project[];
//   onOpenProject: (p: Project, i: number) => void;
// }) {
//   // Testimonials derived from project clientName + short snippet
//   const testimonials = projects
//     .filter((p) => p.clientName)
//     .map((p) => ({
//       author: p.clientName as string,
//       text:
//         p.clientName && p.description
//           ? `${p.clientName.split(" ")[0]}: "${p.description.slice(0, 80)}..."`
//           : `${p.name}`,
//       projectName: p.name,
//     }));

//   const [, setTIndex] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setTIndex((s) => (s + 1) % testimonials.length), 6000);
//     return () => clearInterval(id);
//   }, [testimonials.length]);

//   return (
//     <section className="mt-12">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-semibold text-slate-900">Project Gallery</h3>
//         <div className="text-sm text-slate-500">Photos, before/after & customer stories</div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {projects.map((p, i) => (
//           <div key={p.name} className="group relative rounded-2xl overflow-hidden border hover:shadow-lg transition">
//             <BeforeAfter before={p.beforeImage} after={p.afterImage} alt={p.name} />
//             <div className="p-3 bg-white">
//               <div className="flex items-start justify-between gap-3">
//                 <div>
//                   <div className="text-sm font-semibold text-slate-900 line-clamp-2">{p.name}</div>
//                   <div className="mt-1 text-xs text-slate-500">{p.location} • {p.capacity}</div>
//                 </div>

//                 <div className="flex flex-col items-end gap-2">
//                   <button
//                     onClick={() => onOpenProject(p, i)}
//                     className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-1 text-xs font-semibold text-white shadow"
//                   >
//                     View
//                   </button>
//                   <a href={p.caseStudyUrl || "#"} className="text-xs text-slate-500 hover:text-sky-600">Case study</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

/* ───────────────────── Main Page (merged with gallery) ───────────────────── */
export default function ProjectShowcasePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setModalProject] = useState<Project | null>(null);

  const activeProject = projects[activeIndex];

  /* Auto change project every 8 seconds (pause when modal open) */
  useEffect(() => {
    if (isModalOpen) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 8000);

    return () => clearInterval(id);
  }, [isModalOpen]);

  const openModalForProject = (project: Project, index: number) => {
    setActiveIndex(index);
    setModalProject(project);
    setIsModalOpen(true);
  };


  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-0">
      {/* Subtle background blob */}
      <div className="pointer-events-none absolute inset-x-0 top-32 -z-10 h-72 bg-linear-to-r from-sky-100 via-emerald-50 to-transparent blur-3xl" />

      {/* Heading row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            Project Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">C&I Solar Installations Across India</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
            A quick view of how TrueSun implementations are helping factories, commercial complexes and institutions reduce grid dependence and improve cash flow.
          </p>
        </div>

        {/* Global stats strip */}
        <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] md:text-xs">
          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-slate-50">
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Cumulative Capacity</div>
            <div className="mt-1 text-sm font-semibold">{totalCapacityLabel}</div>
          </div>
          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-emerald-900">
            <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-600">CO₂ Mitigated / year</div>
            <div className="mt-1 text-sm font-semibold">{totalCo2Tonnes.toLocaleString()} tonnes</div>
          </div>
        </div>
      </div>

      {/* Active project hero + side stats */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        {/* Hero */}
        <motion.div
          key={activeProject.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl shadow-slate-900/40"
        >
          <div className="relative h-72 w-full sm:h-90 lg:h-140">
            <img src={activeProject.image} alt={activeProject.name} className="h-full w-full object-cover brightness-[0.9]" loading="lazy" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

            {/* Overlay content */}
            <div className="absolute inset-x-5 bottom-5 space-y-3 text-slate-50">
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                  <SunMedium className="h-3.5 w-3.5" /> {activeProject.segment}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                  <MapPin className="h-3.5 w-3.5 text-sky-300" /> {activeProject.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                  <Building2 className="h-3.5 w-3.5 text-amber-300" /> {activeProject.capacity} • {activeProject.roofType}
                </span>
                {activeProject.commissioningYear && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-[11px]">
                    <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" /> {activeProject.commissioningYear}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold sm:text-2xl">{activeProject.name}</h3>
              <p className="max-w-2xl text-xs text-slate-200 sm:text-sm">{activeProject.description}</p>


            </div>
          </div>
        </motion.div>

        {/* Right-side stats panel */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-600/50 bg-white/90 p-4 shadow-sm">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Impact Snapshot</div>
            <p className="mt-2 text-xs text-slate-600">Quick view of performance metrics for this project.</p>

            <div className="mt-4 grid gap-2">
              <StatPill icon={SunMedium} label="Annual generation" value={activeProject.annualGen} />
              <StatPill icon={Leaf} label="CO₂ mitigated" value={activeProject.co2Mitigated} />
              <StatPill icon={BadgeCheck} label="Expected payback" value={activeProject.payback} />
              <StatPill icon={Sparkles} label="Estimated savings" value={activeProject.savings} />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <InfoCard icon={Building2} label="Segments Served" value={uniqueSegments.join(" • ")} />
            <InfoCard icon={MapPin} label="Installations Across" value={`${uniqueStates.length}+ states`} />
          </div>

          <div className="rounded-2xl border border-dashed border-emerald-600/50 bg-emerald-50/70 p-3 text-[11px] text-emerald-900">
            <span className="font-semibold text-emerald-800">Note: </span> Most C&I clients recover their investment within <span className="font-semibold">{activeProject.payback}</span> while enjoying predictable energy costs for 20–25 years.
          </div>
        </div>
      </div>




      {/* Horizontal rail of projects */}
      <div className="mt-10">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Browse Other Installations</div>
          <div className="text-[11px] text-slate-400">Click a card to open full case study</div>
        </div>

        <div className="-mx-6 flex gap-4 overflow-x-auto px-1 pb-2 pt-1 scroll-smooth lg:mx-0">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={project.name}
                type="button"
                onClick={() => openModalForProject(project, index)}
                className={`relative flex w-64 shrink-0 flex-col overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition-transform duration-200 ${isActive ? "border-sky-500 shadow-[0_0_0_1px_rgba(56,189,248,0.4)] scale-[1.02]" : "border-slate-600/50 hover:border-sky-300 hover:shadow-md hover:scale-[1.01]"
                  }`}
              >
                <div className="relative h-28 w-full">
                  <img src={project.image} alt={project.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-2 left-3 flex items-center gap-2 text-[10px] text-slate-50">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2 py-0.5">
                      <SunMedium className="h-3 w-3 text-amber-300" /> {project.segment}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-2 py-0.5">
                      <MapPin className="h-3 w-3 text-sky-300" /> {project.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-3.5 py-3">
                  <div className="line-clamp-2 text-xs font-semibold text-slate-900">{project.name}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-600">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">{project.capacity}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">{project.roofType}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">{project.payback} payback</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Tap to view details</span>
                    {isActive && <ChevronRight className="h-3.5 w-3.5 text-sky-600" />}
                  </div>
                </div>
              </button>

            );
          })}
        </div>
      </div>

      {/* Project Gallery (NEW) */}
      {/* <GallerySection projects={projects} onOpenProject={openModalForProject} /> */}
      {/* Modal */}

    </section>
  );
}

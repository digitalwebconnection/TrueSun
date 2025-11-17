
import {
  Building2,
  Factory,
  Home,
  Sun,
  ArrowRight,
  Layers,
} from "lucide-react";

// --- Configuration Data ---
const tags = [
  { label: "Residential", icon: Home, color: "text-orange-300" },
  { label: "Commercial", icon: Building2, color: "text-sky-300" },
  { label: "Industrial", icon: Factory, color: "text-emerald-300" },
  { label: "CSR & Institutions", icon: Layers, color: "text-purple-300" },
];

export default function AppSimple() {
  return (
    <section className="relative  flex flex-col justify-center items-center text-white p-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://waaree.com/wp-content/uploads/2025/11/How-to-Choose-the-Right-Solar-Panel-for-Your-Home-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
      </div>

      {/* Content container aligned left */}
      <div className="relative z-10 w-full max-w-7xl text-left rounded-lg p-4 sm:py-6 md:py-4">

        {/* --- Eyebrow and Title (Updated Content) --- */}
        <div className="inline-flex items-center mb-6 text-amber-300 font-semibold uppercase tracking-widest text-xs px-3 py-1 border border-amber-300/50 rounded-full bg-black/30">
          <Sun className="h-4 w-4 mr-2" />
          TrueSun Project Portfolio in Maharashtra
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
          Powering Maharashtra with <span className="text-teal-300">Sustainable Solar Solutions</span>
        </h1>

        <p className="text-lg text-gray-200 max-w-2xl mb-10 drop-shadow">
          As a leading provider in Maharashtra, **TrueSun** delivers over 120+ MW of high-performance solar installations, driving energy independence and measurable results across the state.
        </p>

        {/* --- CTA Buttons (Left aligned) --- */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 px-8 py-3 text-base font-bold text-white transition hover:from-teal-400 hover:to-emerald-500 shadow-lg shadow-teal-500/40 w-fit"
          >
            Explore Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/40 px-8 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 shadow-md w-fit"
          >
            Get a Quote
          </a>
        </div>

        {/* --- Project Tags Area (Left aligned) --- */}
        <div className="max-w-3xl mt-8">
            <h3 className="text-lg font-semibold text-gray-100 mb-4 drop-shadow">Filter by Segment:</h3>
            <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <button
                    key={tag.label}
                    type="button"
                    className={`inline-flex items-center gap-2 rounded-full border border-gray-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 bg-black/20 ${tag.color}`}
                  >
                    <tag.icon className="h-4 w-4" />
                    {tag.label}
                  </button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
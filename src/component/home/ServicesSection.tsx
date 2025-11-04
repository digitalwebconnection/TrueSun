import { motion } from "framer-motion";
import {
  Sun,
  Home,
  Building2,
  Lightbulb,
  Droplets,
  FileCheck,
  Landmark,
  Gauge,
  Wrench,
  ChevronRight,
} from "lucide-react";

const DEFAULT_PALETTE = {
  primary: "#ED2800", // brand red
  accent: "#FFC527",  // brand yellow
  dark: "#071B0F",    // brand dark
};

const SERVICES = [
  {
    title: "Residential Rooftop Systems",
    desc: "High-efficiency DCR/Mono-PERC panels with design, net-metering, and quick installation.",
    icon: Home,
  },
  {
    title: "Commercial Rooftop Projects",
    desc: "MW-ready engineering for offices, malls, and warehouses—optimized for ROI and uptime.",
    icon: Building2,
  },
  {
    title: "Industrial & MW Solutions",
    desc: "Robust arrays with advanced protections, string design, and SCADA-ready monitoring.",
    icon: Gauge,
  },
  {
    title: "Solar Street Lighting",
    desc: "Dusk-to-dawn, low-maintenance street lights with smart controllers and Li-ion batteries.",
    icon: Lightbulb,
  },
  {
    title: "Solar Water Pumping",
    desc: "DC/AC pumps for farms and industry with VFDs, remote panels, and subsidy guidance.",
    icon: Droplets,
  },
  {
    title: "O&M, Cleaning & Monitoring",
    desc: "Preventive maintenance, performance audits, IV-curve testing, and remote dashboards.",
    icon: Wrench,
  },
  {
    title: "Net-Metering & Approvals",
    desc: "End-to-end DISCOM liaison, feasibility, meter installation, and commissioning paperwork.",
    icon: FileCheck,
  },
  {
    title: "Govt. Subsidy Assistance",
    desc: "Eligibility checks, documentation, and claim support for central/state incentive schemes.",
    icon: Landmark,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.45 },
  }),
};

export default function ServicesSection({
  palette = DEFAULT_PALETTE,
  title = "Our Solar Services",
  subtitle = "Empowering homes and businesses with clean, renewable energy.",
}) {
  const { primary, accent, dark } = palette;

  return (
    <section className="relative bg-white py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
     
          <h2
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: dark }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon || Sun;
            return (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                className="relative flex flex-col justify-between rounded-2xl bg-white border border-gray-500/50 shadow-black/20 hover:shadow-orange-300/80 shadow-xl p-4 md:p-5 transition-all duration-300  hover:-translate-y-1"
              >
                {/* Icon + Text */}
                <div>
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center text-white shadow-md"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${primary}, ${accent})`,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3
                    className="mt-4 text-lg font-semibold"
                    style={{ color: dark }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {s.desc}
                  </p>
                </div>

                {/* "Learn More" fixed at bottom */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    style={{ color: primary }}
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(320px 120px at 20% 10%, ${primary}0F, transparent 60%), radial-gradient(320px 120px at 80% 90%, ${accent}12, transparent 60%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

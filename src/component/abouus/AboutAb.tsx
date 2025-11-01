import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { Sun, ShieldCheck, Building2, BatteryCharging, Leaf, Timer, Wrench, PhoneCall } from "lucide-react";

/**
 * AboutSolarSection (White Background Edition)
 * - Clean, professional aesthetic with white & cool blue tones
 * - Built with React + Tailwind CSS
 */

const COMPANY = {
  name: "TrueSun Ltd.",
  tagline: "Powering Progress with Solar Innovation",
  blurb:
    "We design and deliver reliable, high‑performance solar energy systems for homes, industries, and institutions across India. Our expert team ensures seamless installation, smart monitoring, and lifetime service support.",
  heroPoints: [
    "Residential, Commercial & Industrial Solutions",
    "On‑Grid, Hybrid & Battery Systems",
    "MNRE & ALMM Approved Components",
    "Hassle‑Free Subsidy & Net Metering Assistance",
  ],
  stats: [
    { label: "MWp Installed", value: "85+" },
    { label: "Projects Completed", value: "1,200+" },
    { label: "ROI Period", value: "3–4 yrs" },
    { label: "Client Satisfaction", value: "4.9/5" },
  ],
  usps: [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Certified Quality",
      desc: "Tier‑1 solar modules and BIS‑compliant components for maximum safety and performance.",
    },
    {
      icon: <BatteryCharging className="h-6 w-6" />,
      title: "Smart Efficiency",
      desc: "AI‑driven design and monitoring ensure every watt counts.",
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Timely Execution",
      desc: "Precise project planning and on‑schedule delivery every time.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "After‑Sales Excellence",
      desc: "24/7 support, AMC plans, and remote O&M assistance.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Compliance & Approvals",
      desc: "Complete documentation for subsidy, DISCOM, and net‑metering.",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco Commitment",
      desc: "Sustainable practices and minimal carbon footprint across operations.",
    },
  ],
};

const CONTACT = {
  phone: "+91 74474 01177",
  email: "info@truesun.com",
  ctaText: "Book Free Consultation",
};

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // cubic-bezier for smooth ease-out
  viewport: { once: true, amount: 0.2 },
};

export default function Aboutab() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Header */}
        <motion.div {...fadeUp} className="mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-600/40 bg-blue-50 px-3 py-1 text-xs font-medium text-black">
            <Sun className="h-4 w-4" />
            <span>About {COMPANY.name}</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl">
            {COMPANY.tagline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            {COMPANY.blurb}
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2">
            {COMPANY.heroPoints.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-2 rounded-lg bg-blue-50/60 p-2 ring-1 ring-orange-500 backdrop-blur"
              >
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-black" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {COMPANY.stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-black/20 bg-white p-5 text-center shadow-lg shadow-black/20">
              <div className="text-3xl font-bold tracking-tight text-blue-800">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-blue-600">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* USPs */}
        <motion.div {...fadeUp} className="mt-16">
          <h3 className="text-xl font-semibold text-blue-900">Why Choose Us</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANY.usps.map((u, i) => (
              <div
                key={i}
                className="group relative rounded-2xl  border border-blue-200 bg-white p-6 shadow-xl transition-shadow hover:shadow-lg"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  {u.icon}
                </div>
                <h4 className="text-base font-semibold text-blue-900">{u.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{u.desc}</p>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div {...fadeUp} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
                  Ready to make the switch to solar?
                </h3>
                <p className="mt-1 text-sm text-blue-800/80">
                  Schedule your free site assessment and savings report today.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <PhoneCall className="h-4 w-4" />
                  {CONTACT.ctaText}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

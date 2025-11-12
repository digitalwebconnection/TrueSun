"use client";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Home,
  Sun,
  ArrowRight,
  Layers,
  Search,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export default function ProjectsHero() {
  const tags = [
    { label: "Residential", icon: Home },
    { label: "Commercial", icon: Building2 },
    { label: "Industrial", icon: Factory },
    { label: "CSR & Institutions", icon: Layers },
  ];

  const stats = [
    { label: "MW+ Commissioned", value: "120+" },
    { label: "Projects Delivered", value: "950+" },
    { label: "Cities Covered", value: "70+" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* ───────────── Background Layers ───────────── */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://housing.com/news/wp-content/uploads/2024/01/Solar-panels-for-home-F.jpg')",
        }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
      />

      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/60 z-1" />

      {/* Floating glowing orb (parallax accent) */}
      <motion.div
        className="absolute -top-32 left-1/2 h-160 w-160 -translate-x-1/2 rounded-full bg-linear-to-tr from-amber-300/30 via-sky-200/20 to-emerald-200/30 blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid overlay */}
      {/* <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] z-2"
        aria-hidden
      /> */}

      {/* ───────────── Content ───────────── */}
      <div className="relative z-3 mx-auto max-w-7xl px-6 pt-20 pb-14 sm:pt-24 sm:pb-10 lg:px-0 text-white">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur"
        >
          <Sun className="h-3.5 w-3.5 text-amber-300" />
          <span>TrueSun Projects Portfolio</span>
        </motion.div>

        {/* Title & subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-4xl font-extrabold sm:text-5xl lg:text-6xl drop-shadow-[0_3px_16px_rgba(0,0,0,0.75)]"
        >
          Powered by the Sun, Built to Last
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-4 max-w-3xl text-base leading-7 text-white/90 sm:text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          Explore our commissioned solar installations across residential,
          commercial, and industrial segments — engineered for performance,
          reliability, and measurable savings.
        </motion.p>

        {/* Buttons + Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#case-studies"
            className="inline-flex items-center justify-center rounded-2xl bg-linear    -to-r from-sky-600 to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition"
          >
            View Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/20"
          >
            Get a Project Quote
          </motion.a>

          <div className="relative w-full sm:ml-4 sm:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
            <input
              type="search"
              placeholder="Search by city, size, or client"
              className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-10 pr-3 text-sm text-white placeholder:text-white/80 shadow-sm backdrop-blur focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            />
          </div>
        </motion.div>

        {/* Tags */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } },
          }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {tags.map(({ label, icon: Icon }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <motion.button
                whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur"
              >
                <Icon className="h-4 w-4" />
                {label}
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Stats with stagger fade */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
          }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur hover:bg-white/20 transition"
            >
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-white/85">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 backdrop-blur"
        >
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-emerald-100">
              <CheckCircle2 className="h-5 w-5" />
              <p className="text-sm font-semibold">
                MNRE guidelines compliant • Adani & Polycab partner ecosystem • Pan-India service network
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-50/90">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                <MapPin className="h-4 w-4" />
                Maharashtra
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">Thane</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">Mumbai</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">Nagpur</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Factory,
  Building2,
  Leaf,
  Sun,
  Zap,
  Gauge,
  TrendingUp,
  Users,
  Timer,
  ShieldCheck,
} from "lucide-react";

const BRAND = {
  primary: "#262755",
  accent: "#ff7a1a",
  accent2: "#22c55e",
};

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

// ──────────────────────────────────────────────────────────────────────────────
// Types & Data
// ──────────────────────────────────────────────────────────────────────────────

type SegmentKey = "industrial" | "commercial";

const SEGMENTS: Record<
  SegmentKey,
  {
    label: string;
    pill: string;
    title: React.ReactNode;
    subtitle: string;
    chips: { icon: React.ReactNode; label: string }[];
    stats: { label: string; value: string }[];
    projectLabel: string;
    projectYield: string;
    projectPayback: string;
    projectCO2: string;
  }
> = {
  industrial: {
    label: "Industrial Solar",
    pill: "Factories • Warehouses • Manufacturing Plants",
    title: (
      <>
        Solar Power for{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-200">
          Modern Industry
        </span>
      </>
    ),
    subtitle:
      "Heavy-duty rooftop and ground-mounted solar solutions engineered for high loads, continuous operations, and strict HSE compliance.",
    chips: [
      { icon: <Factory className="h-4 w-4" />, label: "Heavy Industry Ready" },
      { icon: <Gauge className="h-4 w-4" />, label: "High Throughput Designs" },
      {
        icon: <ShieldCheck className="h-4 w-4" />,
        label: "HSE & Compliance First",
      },
    ],
    stats: [
      { label: "Industrial Projects", value: "250+" },
      { label: "Average Payback", value: "3.5–4.5 yrs" },
      { label: "Uptime Guarantee", value: "99.8%" },
    ],
    projectLabel: "1 MWp Industrial Rooftop",
    projectYield: "~14.5 Lakh kWh/yr",
    projectPayback: "3.5–4.5 yrs",
    projectCO2: "1,150+ t/yr",
  },
  commercial: {
    label: "Commercial Solar",
    pill: "Offices • Malls • Hospitals • Hotels",
    title: (
      <>
        Solar Power for{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-300 to-yellow-200">
          Commercial Buildings
        </span>
      </>
    ),
    subtitle:
      "Cut operating costs and lock predictable power rates while meeting ESG goals. Perfect for offices, malls, hospitals, hotels, and retail chains.",
    chips: [
      { icon: <Zap className="h-4 w-4" />, label: "30–50% Bill Savings" },
      { icon: <Sun className="h-4 w-4" />, label: "MNRE-Compliant Designs" },
      {
        icon: <Building2 className="h-4 w-4" />,
        label: "Net-Metering Assistance",
      },
    ],
    stats: [
      { label: "Commercial Sites", value: "300+" },
      { label: "Avg. Bill Savings", value: "30–50%" },
      { label: "Typical Payback", value: "3–4 yrs" },
    ],
    projectLabel: "250 kWp Commercial Rooftop",
    projectYield: "~3.6 Lakh kWh/yr",
    projectPayback: "3–4 yrs",
    projectCO2: "280+ t/yr",
  },
};

// ──────────────────────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────────────────────

export default function CIHeroSection() {
  const [active, setActive] = useState<SegmentKey>("industrial");
  const [autoRotate, setAutoRotate] = useState(true);
  const segment = SEGMENTS[active];

  // 🔁 Auto-rotate between Industrial & Commercial
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev === "industrial" ? "commercial" : "industrial"));
    }, 8000); // change every 10 seconds
    return () => clearInterval(interval);
  }, [autoRotate]);

  // Parallax background
  const bgRef = useRef<HTMLDivElement | null>(null);
  const y = useMotionValue(0);
  const yParallax = useTransform(y, [0, 1], [0, -40]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (window.innerHeight || 1);
      y.set(Math.min(1, scrolled));
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [y]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background image (generic C&I solar) with parallax */}
      <motion.div ref={bgRef} style={{ y: yParallax }} className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/8853505/pexels-photo-8853505.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Animated orbs + twinkles */}
      <DecorationOrbs />
      <Sparkles count={22} />

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 pt-10 md:grid-cols-2 md:pt-18 pb-5">
          {/* LEFT SIDE — Copy + Toggle */}
          <div>
            {/* Top pill */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/80 backdrop-blur-sm"
            >
              <Sun className="h-3.5 w-3.5" /> {segment.pill}
            </motion.div>

            {/* Toggle: Industrial / Commercial */}
            <div className="mt-4 inline-flex rounded-full bg-white/10 p-1 text-xs font-medium border border-white/15 backdrop-blur-sm">
              {(["industrial", "commercial"] as SegmentKey[]).map((key) => {
                const activeState = active === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setActive(key);
                      setAutoRotate(false); // stop auto-rotate after user interaction
                    }}
                    className={`relative px-4 py-1.5 rounded-full transition text-xs sm:text-[13px] ${
                      activeState ? "text-slate-900" : "text-white/75"
                    }`}
                  >
                    {activeState && (
                      <motion.span
                        layoutId="ci-toggle"
                        className="absolute inset-0 rounded-full bg-white"
                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      />
                    )}
                    <span className="relative z-10">{SEGMENTS[key].label}</span>
                  </button>
                );
              })}
            </div>

            {/* Title + subtitle (animated per segment) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
                className="mt-5"
              >
                <div className="relative inline-block">
                  <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
                    {segment.title}
                  </h1>
                  <motion.span
                    aria-hidden
                    className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.primary})`,
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  />
                </div>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
                  {segment.subtitle}
                </p>

                {/* Chips (stagger) */}
                <motion.div
                  className="mt-6 flex flex-wrap gap-3"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06 } },
                  }}
                >
                  {segment.chips.map((chip, idx) => (
                    <motion.div
                      key={idx}
                      variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                    >
                      <Chip icon={chip.icon} label={chip.label} dark />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href="#contact">Get a C&amp;I Solar Proposal</MagneticButton>
              <a
                href="#calc"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-white/90 hover:bg-white/10 backdrop-blur-sm transition active:scale-[0.98]"
              >
                Estimate ROI in 60 seconds
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-white/70 sm:grid-cols-4">
              <Trust label="Factories" />
              <Trust label="Warehouses" />
              <Trust label="Offices" />
              <Trust label="Hospitals & Malls" />
            </div>

            {/* KPI strip with counters */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stats-${active}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {segment.stats.map((s, i) => (
                  <Stat key={i} label={s.label} value={s.value} />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Scroll hint */}
            <ScrollIndicator />
          </div>

          {/* RIGHT SIDE — Visual Card & Stats */}
          <VisualCard segmentKey={active} segment={segment} />
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Visual Card
// ──────────────────────────────────────────────────────────────────────────────

function VisualCard({
  segmentKey,
  segment,
}: {
  segmentKey: SegmentKey;
  segment: (typeof SEGMENTS)[SegmentKey];
}) {
  // Hover-tilt
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: py * -6, y: px * 6 });
  };

  const onMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
      className="relative"
    >
      <motion.div
        className="absolute -inset-1 rounded-[26px] blur-xl"
        style={{
          backgroundImage: `linear-gradient(120deg, ${BRAND.primary}99, ${BRAND.accent}66)`,
          opacity: 0.7,
        }}
        animate={{ opacity: [0.45, 0.9, 0.45] }}
        transition={{ repeat: Infinity, duration: 5, ease: EASE_IN_OUT }}
      />

      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX: rotate.x, rotateY: rotate.y, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-xl"
      >
        {/* Image */}
        <div
          className="relative h-56 w-full overflow-hidden rounded-2xl ring-1 ring-white/10 md:h-72"
          style={{ transform: "translateZ(30px)" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.02 }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage:
                segmentKey === "industrial"
                  ? "url(https://images.pexels.com/photos/8853505/pexels-photo-8853505.jpeg?auto=compress&cs=tinysrgb&w=1600)"
                  : "url(https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Gradient edge glow */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(1200px 200px at 50% 120%, ${BRAND.accent}33, transparent 60%)`,
            }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: EASE_IN_OUT }}
          />
        </div>

        {/* Project meta */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wide text-white/60">
              {segment.projectLabel}
            </div>
            <div className="text-sm font-semibold text-white/95">
              Yield {segment.projectYield}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              icon={<Timer className="h-3.5 w-3.5" />}
              label={`Payback ${segment.projectPayback}`}
            />
            <Badge
              icon={<Leaf className="h-3.5 w-3.5" />}
              label={`${segment.projectCO2} CO₂ offset`}
              color={BRAND.accent2}
            />
          </div>
        </div>

        {/* KPI Widgets */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <SmallStat
            icon={<TrendingUp className="h-4 w-4" />}
            label="IRR"
            value={segmentKey === "industrial" ? "18–22%" : "16–20%"}
          />
          <SmallStat
            icon={<Users className="h-4 w-4" />}
            label="Sites Covered"
            value={segmentKey === "industrial" ? "250+" : "300+"}
          />
          <Dial label="Uptime" value={99.8} />
          <Dial
            label="Savings"
            value={segmentKey === "industrial" ? 42 : 38}
            suffix="%"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Bits
// ──────────────────────────────────────────────────────────────────────────────

function Chip({ icon, label, dark }: { icon: React.ReactNode; label: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
        dark
          ? "border border-white/30 bg-white/10 text-white/90"
          : "border border-slate-200 bg-white/70 text-slate-800"
      }`}
    >
      {icon}
      {label}
    </span>
  );
}

function Trust({ label }: { label: string }) {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: BRAND.accent }} />
      <span>{label}</span>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.35, ease: EASE_OUT }}
      className="rounded-lg bg-white/90 px-3 py-2 text-slate-800 ring-1 ring-slate-900/10"
    >
      <div className="text-[10px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-sm">
        <AnimatedCounter
          to={extractNumber(value)}
          suffix={extractSuffix(value)}
          inlineFallback={value}
        />
      </div>
    </motion.div>
  );
}

function SmallStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-2 text-slate-800 ring-1 ring-slate-900/10">
      {icon}
      <div>
        <div className="text-[10px] uppercase tracking-wide text-slate-500">
          {label}
        </div>
        <div className="text-xs font-semibold">{value}</div>
      </div>
    </div>
  );
}

function Badge({ icon, label, color }: { icon: React.ReactNode; label: string; color?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium text-white/90"
      style={{
        background: color ? `${color}33` : `${BRAND.accent}33`,
        border: `1px solid ${color || BRAND.accent}55`,
      }}
    >
      {icon}
      {label}
    </motion.span>
  );
}

function DecorationOrbs() {
  return (
    <div className="absolute inset-0 -z-10">
      <motion.span
        className="absolute -top-24 -left-24 h-[360px] w-[360px] rounded-full blur-3xl opacity-40"
        style={{ background: `${BRAND.accent}55` }}
        animate={{ x: [0, 20, 0], y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: EASE_IN_OUT }}
      />
      <motion.span
        className="absolute -bottom-28 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: `${BRAND.primary}77` }}
        animate={{ x: [0, -18, 0], y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: EASE_IN_OUT }}
      />
    </div>
  );
}

function Sparkles({ count = 16 }: { count?: number }) {
  const dots = useMemo(
    () =>
      new Array(count).fill(0).map((_, i) => ({
        key: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 6,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {dots.map((d) => (
        <motion.span
          key={d.key}
          className="absolute h-0.5 w-0.5 rounded-full bg-white"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            delay: d.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="mt-8 flex items-center gap-2 text-xs text-white/60">
      <motion.span
        className="inline-block h-5 w-3 rounded-full border border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.span
          className="mx-auto mt-0.5 block h-1.5 w-1 rounded-full bg-white/70"
          animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: EASE_IN_OUT }}
        />
      </motion.span>
      Scroll
    </div>
  );
}

function Dial({
  label,
  value,
  suffix = "%",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const progress = useSpring(0, { stiffness: 120, damping: 18 });

  useEffect(() => {
    if (inView) progress.set(value);
  }, [inView, value, progress]);

  const angle = useTransform(progress, [0, 100], [0, 180]);

  return (
    <div
      ref={ref}
      className="flex items-center gap-3 rounded-lg bg-white/90 p-3 text-slate-800 ring-1 ring-slate-900/10"
    >
      <div className="relative h-10 w-10">
        <svg viewBox="0 0 36 20" className="h-10 w-10 -rotate-90">
          <path
            d="M18 18 A 16 16 0 0 1 2 2"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="4"
          />
          <path
            d="M18 18 A 16 16 0 0 1 2 2"
            fill="none"
            stroke="#0f172a"
            strokeWidth="4"
            strokeDasharray="50"
            strokeDashoffset="50"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="50"
              to={`${50 - (value / 100) * 50}`}
              dur="1.2s"
              fill="freeze"
              begin="indefinite"
            />
          </path>
        </svg>
        <motion.div
          className="absolute left-1/2 top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 origin-bottom rounded-full bg-slate-900"
          style={{ rotate: angle }}
        />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wide text-slate-500">
          {label}
        </div>
        <div className="text-xs font-semibold">
          <AnimatedCounter to={value} suffix={suffix} />
        </div>
      </div>
    </div>
  );
}

// Animated counter for numeric strings
function AnimatedCounter({
  to,
  suffix = "",
  inlineFallback,
}: {
  to: number;
  suffix?: string;
  inlineFallback?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 120, damping: 16 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  if (Number.isNaN(to)) return <span ref={ref}>{inlineFallback ?? "—"}</span>;

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// Magnetic CTA
function MagneticButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.15, y: y * 0.15 });
  };

  const onMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white shadow-lg transition active:scale-[0.98]"
      style={{
        backgroundImage: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
        translateX: pos.x,
        translateY: pos.y,
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

// Helpers
function extractNumber(text: string): number {
  const m = text.replace(/[,~+]/g, "").match(/\d+(?:\.\d+)?/);
  return m ? parseFloat(m[0]) : NaN;
}
function extractSuffix(text: string): string {
  const m = text.match(/[^0-9.,\s]+.*$/);
  return m ? ` ${m[0]}` : "";
}

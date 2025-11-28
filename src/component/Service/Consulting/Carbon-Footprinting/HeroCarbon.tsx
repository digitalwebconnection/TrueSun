// NetZeroCommandCenterAddOn.tsx
"use client";

import { motion } from "framer-motion";
import {
    Leaf,
    Gauge,
    Calculator,
    Download,
    Truck,
    Zap,
    CheckCircle2,
} from "lucide-react";

type Props = {
    accent?: "emerald" | "sky" | string;
    title?: string;
    subtitle?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
};

/** Tailwind-safe accent helper */
function accentCls(accent: string) {
    if (accent === "emerald") return "from-emerald-600 to-emerald-500";
    if (accent === "sky") return "from-sky-600 to-sky-500";
    return `from-${accent}-600 to-${accent}-500`;
}

export default function NetZeroCommandCenterAddOn({
    accent = "emerald",
    title = "carbon compounds",
    subtitle = "Live emissions, reduction opportunities, and supplier insights — all in one clear view.",

}: Props) {
    const accentGradient = accentCls(accent);

    return (
        <section
            className="relative overflow-hidden  py-25"
            style={{
                backgroundImage: "url('https://previews.123rf.com/images/atdigit/atdigit2310/atdigit231000510/216495577-dark-background-with-3d-molecules-in-red-and-blue-ai-generated.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // keep it subtle behind content
            }}
        >
            {/* Background image layer */}
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/80"></div>

            {/* Soft animated gradient blob behind */}
            <motion.div
                initial={{ scale: 1, opacity: 0.07 }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.07, 0.12, 0.07] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className={`pointer-events-none absolute -left-40 -top-40 h-168 w-2xl rounded-full bg-linear-to-tr ${accentGradient} blur-3xl opacity-20`}
                aria-hidden
            />

            {/* A subtle overlay to improve text contrast on busy images */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-white/50 dark:bg-slate-900/50" aria-hidden />

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    {/* Left column: textual hero */}
                    <div className="z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-medium text-slate-800 shadow-sm backdrop-blur dark:bg-slate-800/60 dark:text-slate-200"
                        >
                            <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                            <span className="tracking-wide">GHG Protocol • ISO 14064 • CDP-ready</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                            className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl"
                        >
                            {title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.12 }}
                            className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300"
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18 }}
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            <a
                                href="/#calculator"
                                className={`inline-flex items-center gap-2 rounded-full bg-${accent}-600 px-5 py-3 text-base font-semibold text-white shadow-lg transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-${accent}-500`}
                            >
                                <Calculator className="h-5 w-5" />
                                Calculator
                            </a>

                        </motion.div>

                        {/* Small feature list */}
                        <motion.ul
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.28 }}
                            className="mt-6 grid max-w-md grid-cols-1 gap-2 text-sm sm:grid-cols-2"
                        >
                            {[
                                { t: "Audit trail & versioning", i: CheckCircle2 },
                                { t: "Automated utility parsing", i: Gauge },
                                { t: "Logistics & travel integrations", i: Truck },
                                { t: "Renewables planning & offsets", i: Zap },
                            ].map(({ t, i: Icon }) => (
                                <li
                                    key={t}
                                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm backdrop-blur dark:bg-slate-100"
                                >
                                    <Icon className={`h-4 w-4 text-${accent}-900 dark:text-${accent}-800`} />
                                    <span className="text-slate-700 dark:text-slate-900">{t}</span>
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Right column: compact command center cards */}
                    <div className="relative z-10 flex items-center justify-center">
                        <div className="w-full max-w-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative rounded-2xl bg-white/80 p-5 shadow-2xl backdrop-blur dark:bg-slate-800/60"
                            >
                                {/* Top row: metric chips */}
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex flex-col">
                                        <span className={`text-2xl font-semibold text-${accent}-700 dark:text-${accent}-300`}>−12.4%</span>
                                        <span className="text-xs text-slate-200 dark:text-slate-100">YoY operational emissions</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium dark:border-slate-700 dark:bg-slate-100/40">
                                            Scope 1
                                        </div>
                                        <div className="rounded-md border border-slate-2 00 bg-white px-3 py-2 text-xs font-medium dark:border-slate-700 dark:bg-slate-9 00/40">
                                            Scope 3
                                        </div>
                                    </div>
                                </div>

                                {/* Middle: miniature chart + progress */}
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="h-20 w-full rounded-lg bg-linear-to-r from-white to-slate-100 dark:from-slate-900/30 dark:to-slate-800/20 p-3">
                                            {/* Placeholder bars built with divs for a small inline chart */}
                                            <div className="flex h-full items-end gap-2">
                                                <div className="h-6 w-3 rounded-sm bg-slate-200 dark:bg-slate-700" />
                                                <div className={`h-10 w-3 rounded-sm bg-${accent}-500`} />
                                                <div className="h-8 w-3 rounded-sm bg-slate-300 dark:bg-slate-600" />
                                                {/* FIX: this line needed a template string */}
                                                <div className={`h-12 w-3 rounded-sm bg-${accent}-400`} />
                                                <div className="h-7 w-3 rounded-sm bg-slate-200 dark:bg-slate-700" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-36">
                                        <div className="text-xs text-slate-500 dark:text-slate-400">Reduction progress</div>
                                        <div className="mt-2 h-3 w-full rounded-full bg-slate-100 dark:bg-slate-700/30">
                                            <div className={`h-3 w-[62%] rounded-full bg-linear-to-r ${accentGradient}`} />
                                        </div>
                                        <div className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">62% to target</div>
                                    </div>
                                </div>

                                {/* Bottom: quick actions */}
                                <div className="mt-4 flex items-center gap-3">
                                    <a
                                        href="#actions"
                                        className={`inline-flex items-center gap-2 rounded-lg bg-${accent}-600 px-3 py-2 text-sm font-semibold text-white shadow-sm`}
                                    >
                                        <Calculator className="h-4 w-4" />
                                        Run Scenario
                                    </a>
                                    <a
                                        href="#export"
                                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-100 shadow-sm dark:border-slate-100 dark:bg-slate-900/30"
                                    >
                                        <Download className="h-4 w-4" />
                                        Export CSV
                                    </a>
                                </div>
                            </motion.div>

                            {/* Floating micro-cards orbiting the main card */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.45 }}
                                className="pointer-events-none relative mt-4 flex justify-between gap-3"
                            >
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                                    className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-800/60"
                                >
                                    <div className="flex items-center gap-2">
                                        <Gauge className={`h-4 w-4 text-${accent}-600 dark:text-${accent}-300`} />
                                        <div className="text-xs">
                                            <div className="font-medium text-slate-800 dark:text-slate-100">Meters parsed</div>
                                            <div className="text-slate-500 dark:text-slate-400">1,240</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                    className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-800/60"
                                >
                                    <div className="flex items-center gap-2">
                                        <Zap className={`h-4 w-4 text-${accent}-600 dark:text-${accent}-300`} />
                                        <div className="text-xs">
                                            <div className="font-medium text-slate-800 dark:text-slate-100">Renewable mix</div>
                                            <div className="text-slate-500 dark:text-slate-400">42%</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                    className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-800/60"
                                >
                                    <div className="flex items-center gap-2">
                                        <Truck className={`h-4 w-4 text-${accent}-600 dark:text-${accent}-300`} />
                                        <div className="text-xs">
                                            <div className="font-medium text-slate-800 dark:text-slate-100">Logistics</div>
                                            <div className="text-slate-500 dark:text-slate-400">68% covered</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

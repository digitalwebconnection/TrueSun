"use client";

import { motion, cubicBezier } from "framer-motion";
import {
    Leaf,
    Sun,
    Factory,
    Building2,
    Truck,
    LineChart,
    Zap,
    Gauge,
    Recycle,
} from "lucide-react";

const EASE = cubicBezier(0.16, 1, 0.3, 1);

export default function CarbonCommandHub() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-sky-50 py-14">
            {/* Animated gradient spheres */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2 }}
                className="absolute top-0 left-0 w-160 h-160 bg-sky-200 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{ duration: 3 }}
                className="absolute bottom-0 right-0 w-140 h-140 bg-emerald-200 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: EASE }}
                    viewport={{ once: true }}
                    className="text-center max-w-7xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 bg-sky-300 text-black rounded-full px-4 py-1 text-sm font-medium">
                        <Leaf size={16} />
                        Net-Zero Made Simple
                    </div>
                    <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold text-slate-900">
                        Your <span className="text-sky-600">Carbon Intelligence</span> Command Hub
                    </h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-slate-600 leading-relaxed">
                        Visualize your emissions, forecast reductions, and unlock clean growth opportunities—
                        all from one intelligent dashboard built for transparency and action.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
                        >
                            Launch Assessment
                        </a>
                        <a
                            href="#insights"
                            className="px-6 py-3 rounded-xl border border-slate-300 bg-white font-semibold hover:bg-slate-50 transition"
                        >
                            Explore Insights
                        </a>
                    </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
                    viewport={{ once: true }}
                    className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
                >
                    {[
                        { label: "Reduction Achieved", value: "27%", icon: Gauge },
                        { label: "Solar Projects", value: "120+", icon: Sun },
                        { label: "tCO₂e Offset", value: "3.4K", icon: Recycle },
                        { label: "Enterprises Engaged", value: "85+", icon: Factory },
                    ].map((s, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-800/50 p-5 hover:shadow-md transition"
                        >
                            <div className="flex justify-center mb-2 text-sky-600">
                                <s.icon size={24} />
                            </div>
                            <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                            <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Feature Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: EASE }}
                    viewport={{ once: true }}
                    className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="rounded-2xl bg-white p-6 shadow-xl shadow-black/40 ring-1 ring-slate-800/50"
                        >
                            <div
                                className={`flex items-center justify-center w-12 h-12 rounded-xl bg-${f.color}-100 text-${f.color}-600 mb-4`}
                            >
                                <f.icon size={24} />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Feature Data
const FEATURES = [
    {
        icon: LineChart,
        title: "Emissions Analytics",
        desc: "AI-assisted tracking across Scope 1, 2 & 3 — gain actionable insights instantly.",
        color: "sky",
    },
    {
        icon: Sun,
        title: "Solar-Driven Reduction",
        desc: "Integrate real-time generation data from your solar assets and PPAs.",
        color: "amber",
    },
    {
        icon: Truck,
        title: "Supply Chain Insights",
        desc: "Collaborate with vendors and logistics partners to cut upstream emissions.",
        color: "emerald",
    },
    {
        icon: Building2,
        title: "Facility Benchmarking",
        desc: "Compare intensity metrics and set SBT-aligned reduction goals per site.",
        color: "violet",
    },
    {
        icon: Recycle,
        title: "Mitigation & Offsets",
        desc: "Select verified, high-integrity carbon credits for residuals responsibly.",
        color: "teal",
    },
    {
        icon: Zap,
        title: "Energy Intelligence",
        desc: "Identify energy losses, optimize consumption, and accelerate ROI from renewables.",
        color: "orange",
    },
];

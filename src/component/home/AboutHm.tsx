"use client";

import type React from "react";
import {
    Leaf,
    Sun,
    Zap,
    Factory,
    Handshake,
    DollarSign,
    ShieldCheck,
    GaugeCircle,
    Globe2,
    Quote,
} from "lucide-react";

export default function AboutTrueSunNew() {
    return (
        <section className="relative overflow-hidden bg-gray-50 pt-16 pb-20 sm:pt-20 sm:pb-24">
            {/* Subtle background texture/pattern */}
            <div
                className="absolute inset-0 bg-[url('/img/solar-pattern.svg')] opacity-5 bg-size-[220px]"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-16 lg:space-y-20">
                {/* === SECTION 1: CENTERED HEADLINE & VALUE PROPOSITION === */}
                <div className="mx-auto max-w-5xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-400/90 px-8 py-2 text-sm font-semibold text-black ring-1 ring-amber-300">
                        <Sun className="h-4 w-4 text-black" />
                        TrueSun Energy Solutions
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Accelerating India&apos;s Energy Transition
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
                        Headquartered in Mumbai, we deliver complete, future-ready solar
                        solutions for enterprises and residents, guided by both{" "}
                        <span className="font-semibold text-gray-900">
                            technical excellence
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-gray-900">
                            financial foresight
                        </span>
                        .
                    </p>

                    {/* SDG Badges */}
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                        <SDGPill
                            icon={<Leaf className="h-4 w-4" />}
                            label="SDG 7: Affordable & Clean Energy"
                            color="emerald"
                        />
                        <SDGPill
                            icon={<Zap className="h-4 w-4" />}
                            label="SDG 13: Climate Action"
                            color="sky"
                        />
                    </div>

                </div>

                {/* === SECTION 1B: BENEFITS GRID (3–4 COLS) === */}
                <div className="mx-auto max-w-7xl">
                    <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">
                        Why Businesses & Homeowners Choose TrueSun
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <BenefitItem
                            icon={<DollarSign className="h-5 w-5" />}
                            title="Save up to 80%"
                            desc="Offset a major share of your recurring electricity costs with rooftop solar."
                        />
                        <BenefitItem
                            icon={<ShieldCheck className="h-5 w-5" />}
                            title="25-Year Warranty"
                            desc="Tier-1 modules and bankable components with long-term performance assurance."
                        />
                        <BenefitItem
                            icon={<GaugeCircle className="h-5 w-5" />}
                            title="Optimized ROI"
                            desc="Project sizing, subsidy, and tariff mapping to shorten payback periods."
                        />
                        <BenefitItem
                            icon={<Globe2 className="h-5 w-5" />}
                            title="Net-Zero Ready"
                            desc="Make measurable progress on ESG, SDG, and sustainability reporting goals."
                        />
                    </div>
                </div>

                {/* === SECTION 2: ROI CALCULATOR TEASER (HIGHER UP, INTERACTIVE ENTRY) === */}
                <div
                    id="roi-calculator"
                    className="mx-auto max-w-7xl rounded-2xl border border-amber-600/80 bg-linear-to-r from-amber-50 via-white to-orange-50 px-6 py-8 sm:px-10 sm:py-10 shadow-lg shadow-amber-100/70"
                >
                    <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                See Your Solar ROI Before You Install
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Adjust your connected load, tariff, and rooftop area to
                                instantly estimate payback period, monthly savings, and lifetime
                                impact.
                            </p>

                            {/* Simple “interactive” teaser stats */}
                            <div className="grid gap-4 sm:grid-cols-3 text-sm">
                                <MiniStat
                                    label="Sample Monthly Bill"
                                    value="₹18,000"
                                    subtitle="Pre-solar baseline"
                                />
                                <MiniStat
                                    label="Estimated Savings"
                                    value="₹12,500"
                                    subtitle="Every month with TrueSun*"
                                />
                                <MiniStat
                                    label="Payback Period"
                                    value="3.8 Years"
                                    subtitle="Typical SME rooftop case"
                                />
                            </div>

                            <p className="mt-3 text-xs text-gray-500">
                                *Illustrative values. Use the full calculator for a project
                                custom to your tariff and usage pattern.
                            </p>
                        </div>

                     
                    </div>
                </div>

                {/* === SECTION 3: CORE PILLARS (3-Column Layout) === */}
                <div className="mt-2 grid gap-8 md:grid-cols-3">
                    <PillarCard
                        Icon={Factory}
                        title="End-to-End Rooftop EPC"
                        desc="Design, procurement, installation, and commissioning of robust solar systems tailored to your site."
                        features={[
                            "Industrial & Commercial Rooftops",
                            "Residential & Societies",
                            "Quality-Checked Components",
                        ]}
                    />
                    <PillarCard
                        Icon={Handshake}
                        title="Strategic Solar Consultancy"
                        desc="We act as your owner’s engineer, ensuring technical, commercial, and contractual clarity."
                        features={[
                            "Project Management Consulting",
                            "Technology & Vendor Audits",
                            "Detailed Payback Modeling",
                        ]}
                    />
                    <PillarCard
                        Icon={DollarSign}
                        title="Carbon & Finance Advisory"
                        desc="Unlock the full value of your solar investment with structured finance and carbon strategy."
                        features={[
                            "Carbon Footprinting & Reporting",
                            "Carbon Credit Value Assessment",
                            "Optimal Finance Structuring",
                        ]}
                    />
                </div>



                {/* === SECTION 5: STORYTELLING BLOCK — TESTIMONIALS / CASE STUDIES === */}
                <div
                    id="case-studies"
                    className="mt-4 grid gap-10 lg:grid-cols-2 items-start"
                >
                    {/* Story / Overview */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            From Rising Bills to Predictable Savings
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Every rooftop has a story. For some, it&apos;s about keeping
                            production lines running without fear of outages. For others,
                            it&apos;s about taking the first real step toward a net-zero
                            future. TrueSun combines engineering depth with on-ground
                            understanding to make each story a success case.
                        </p>
                        <p className="text-gray-700">
                            Our team works closely with facility heads, finance teams, and
                            founders — ensuring that solar is not just installed, but
                            integrated into the way your business operates and grows.
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="grid gap-6">
                        <TestimonialCard
                            sector="Industrial Manufacturing, Navi Mumbai"
                            quote="With TrueSun, our rooftop became a profit center. Payback happened faster than projected, and the monthly savings are now funding other upgrades."
                            name="Plant Head, MSME Unit"
                        />
                        <TestimonialCard
                            sector="Premium Housing Society, Pune"
                            quote="TrueSun guided us through every step — technical, financial, and regulatory. Now our residents enjoy lower maintenance costs and climate-positive living."
                            name="Society Treasurer"
                        />
                    </div>
                </div>

                {/* === SECTION 6: VISUAL MAP — COVERAGE ACROSS 38+ CITIES === */}
                <div className="mt-6">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                        

                        <div className="w-full">
                            <div className="relative overflow-hidden rounded-2xl  border border-gray-300 bg-white shadow-xl ">
                                <div className="absolute inset-0   pointer-events-none" />
                                    {/* Replace this with an actual SVG/Map component */}
                                    <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242887.29817480632!2d72.71412895724377!3d19.082806702154134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1763097485458!5m2!1sen!2sin" className="w-full h-80"   loading="lazy" ></iframe>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}



function SDGPill({
    icon,
    label,
    color,
}: {
    icon: React.ReactNode;
    label: string;
    color: "emerald" | "sky";
}) {
    const bgClass =
        color === "emerald"
            ? "bg-emerald-200/80 ring-emerald-200 text-black"
            : "bg-sky-200/80 ring-sky-200 text-sky-950";
    const iconClass = color === "emerald" ? "text-emerald-600" : "text-sky-600";

    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ring-1 ${bgClass}`}
        >
            <span className={iconClass}>{icon}</span>
            {label}
        </span>
    );
}

function PillarCard({
    Icon,
    title,
    desc,
    features,
}: {
    Icon: React.ElementType;
    title: string;
    desc: string;
    features: string[];
}) {
    return (
        <div className="group flex flex-col rounded-xl border border-gray-900/50 bg-orange-100/30 hover:bg-orange-500/15 p-6 text-left shadow-md shadow-black/10 transition duration-300 hover:shadow-xl hover:border-black/10 hover:scale-[1.02]">
            <div className="mb-2 flex items-center gap-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 group-hover:bg-amber-200 transition duration-300">
                    <Icon className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            </div>
            <p className="mt-1 text-sm text-gray-700">{desc}</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-800 border-t border-gray-300/70 pt-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg
                            className="h-5 w-5 shrink-0 text-amber-500 mr-2 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function BenefitItem({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div className="flex flex-col gap-2 rounded-xl border border-gray-600/50 bg-white px-4 py-4 shadow-sm">
            <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                    {icon}
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
            </div>
            <p className="text-xs text-gray-600">{desc}</p>
        </div>
    );
}

function MiniStat({
    label,
    value,
    subtitle,
}: {
    label: string;
    value: string;
    subtitle: string;
}) {
    return (
        <div className="rounded-xl bg-white/80 px-4 py-3 shadow-sm border border-amber-400">
            <p className="text-[11px] font-medium uppercase tracking-wide text-amber-600">
                {label}
            </p>
            <p className="mt-1 text-base font-semibold text-gray-900">{value}</p>
            <p className="mt-0.5 text-[11px] text-gray-500">{subtitle}</p>
        </div>
    );
}

function TestimonialCard({
    sector,
    quote,
    name,
}: {
    sector: string;
    quote: string;
    name: string;
}) {
    return (
        <div className="relative rounded-2xl border border-gray-600/40 bg-white px-5 py-5 shadow-sm">
            <Quote className="absolute -top-4 -left-2 h-8 w-8 text-amber-300" />
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-1">
                {sector}
            </p>
            <p className="text-sm text-gray-800 italic leading-relaxed">“{quote}”</p>
            <p className="mt-3 text-xs text-gray-500">— {name}</p>
        </div>
    );
}



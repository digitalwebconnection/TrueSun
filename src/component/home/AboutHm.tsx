"use client";

import { Leaf, Sun, Zap, Building2, Factory, School, Home, Handshake, DollarSign, Lightbulb } from "lucide-react";

export default function AboutTrueSunNew() {
    return (
        <section className="relative overflow-hidden bg-gray-50 pt-16 pb-20 sm:pt-20 sm:pb-24">
            {/* Subtle background texture/pattern */}
            <div className="absolute inset-0 bg-[url('/img/solar-pattern.svg')] opacity-5 bg-size-[200px]" aria-hidden="true" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* === SECTION 1: CENTERED HEADLINE & VALUE PROPOSITION === */}
                <div className="mx-auto max-w-7xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-400/90 px-8 py-2 text-sm font-semibold text-black ring-1 ring-amber-300">
                        <Sun className="h-4 w-4 text-black" />
                        TrueSun Energy Solutions
                    </span>

                    <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Accelerating India's Energy Transition
                    </h2>

                    <p className=" mx-auto mt-6 text-xl text-gray-600 max-w-7xl">
                        Headquartered in Mumbai, we deliver complete, future-ready solar solutions for enterprises and residents, guided by both **technical excellence** and **financial foresight**.
                    </p>

                    {/* SDG Badges moved here for immediate credibility */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <SDGPill icon={<Leaf className="h-4 w-4" />} label="SDG 7: Affordable & Clean Energy" color="emerald" />
                        <SDGPill icon={<Zap className="h-4 w-4" />} label="SDG 13: Climate Action" color="sky" />
                    </div>
                </div>

                {/* === SECTION 2: CORE PILLARS (3-Column Layout) === */}
                <div className="mt-16 grid gap-8 md:grid-cols-4">
                    <PillarCard
                        Icon={Factory}
                        title="End-to-End Rooftop EPC"
                        desc="Complete design, procurement, installation, and commissioning of solar systems built for durability and maximum generation."
                        features={["Industrial & Commercial", "Residential & Societies", "Quality-Checked Components"]}
                    />
                    <PillarCard
                        Icon={Handshake}
                        title="Strategic Solar Consultancy"
                        desc="We act as your owner's engineer, providing objective guidance on technology, financial viability, and vendor management."
                        features={["Project Management Consulting", "Tech Selection & Audits", "Detailed Payback Modeling"]}
                    />
                    <PillarCard
                        Icon={DollarSign}
                        title="Carbon & Finance Advisory"
                        desc="Unlock the full value of your investment. We assist with finance models, price discovery, and carbon footprint reduction."
                        features={["Carbon Footprinting ", "Carbon Credit Value ", "Optimal Finance Structuring"]}
                    />
                    <PillarCard
                        Icon={Factory}
                        title="End-to-End Rooftop EPC"
                        desc="Complete design, procurement, installation, and commissioning of solar systems built for durability and maximum generation."
                        features={["Industrial & Commercial", "Residential & Societies", "Quality-Checked Components"]}
                    />
                </div>

                {/* === SECTION 3: WHO WE SERVE & CTA BLOCK (Bottom Aligned) === */}
                <div className="mt-20 border-1 px-4 border-gray-600 py-5 rounded-xl shadow-xl">
                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Sector Pills */}
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Who Trusts TrueSun?</h3>
                            <p className="text-gray-600 mb-6">Our expertise spans diverse sectors, ensuring a tailored, high-performance solar solution for every rooftop.</p>
                            <div className="flex flex-wrap gap-3">
                                <Pill icon={<Factory className="h-4 w-4" />} label="Industrial" />
                                <Pill icon={<Building2 className="h-4 w-4" />} label="Commercial & Real Estate" />
                                <Pill icon={<School className="h-4 w-4" />} label="Schools & Colleges" />
                                <Pill icon={<Home className="h-4 w-4" />} label="Housing Societies & Bungalows" />
                                <Pill icon={<Handshake className="h-4 w-4" />} label="Religious & Non-profits" />
                            </div>
                        </div>

                        {/* CTA Block */}
                        <div className="lg:col-span-1 flex items-center justify-end">
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm md:text-lg font-bold text-white transition duration-300 transform hover:scale-[1.02]"
                            >
                                <span className="absolute inset-0 rounded-xl bg-linear-to-br from-amber-500 to-orange-600 shadow-[0_10px_35px_rgba(255,153,0,0.4)]" />
                                <span className="relative z-10">Book a Free Site Audit & Quote</span>
                                <Lightbulb className="w-5 h-5 ml-3 relative z-10" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// --- Helper Components ---

// Pill component for Who We Serve (No color, just border)
function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <span className="inline-flex items-center border-1 border-black gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-gray-900 ring-1 ring-gray-200 shadow-lg">
            {icon}
            {label}
        </span>
    );
}

// SDG Pill component (Colored for visibility)
function SDGPill({ icon, label, color }: { icon: React.ReactNode; label: string, color: 'emerald' | 'sky' }) {
    const bgClass = color === 'emerald' ? 'bg-emerald-200/80 ring-emerald-200 text-black' : 'bg-sky-200/80 ring-sky-200 text-sky-950';
    const iconClass = color === 'emerald' ? 'text-emerald-600' : 'text-sky-600';

    return (
        <span className={`inline-flex items-center gap-2  rounded-full px-4 py-1.5 text-sm font-medium ring-1 ${bgClass}`}>
            <span className={iconClass}>{icon}</span>
            {label}
        </span>
    );
}

// Feature Card for the 3 Pillars
function PillarCard({ Icon, title, desc, features }: { Icon: React.ElementType, title: string, desc: string, features: string[] }) {
    return (
        <div className="group flex flex-col rounded-xl border border-gray-900/50 bg-orange-100/15 hover:bg-orange-500/25 p-6 text-center shadow-xl transition duration-300 hover:shadow-2xl hover:border-black/10 hover:scale-105">
            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 group-hover:bg-amber-200 transition duration-300`}>
                <Icon className="h-7 w-7 text-amber-500" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-3 grow text-gray-600">{desc}</p>

            {/* List of services/features */}
            <ul className="mt-5 space-y-2 text-sm text-gray-700 text-left border-t border-gray-800/50 pt-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 shrink-0 text-amber-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}
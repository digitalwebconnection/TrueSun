"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
    SunMedium,
    Search,
    ArrowRight,
    Clock,
    Tag,
} from "lucide-react";

const blogPosts = [
    {
        id: "solar-payback-explained",
        title: "Solar Payback in 5 Minutes: How Quickly Can You Recover Your Cost?",
        excerpt:
            "Understand what really drives your solar payback period – tariff slabs, load profile, roof direction and more.",
        category: "Solar Basics",
        readTime: "5 min read",
        date: "Oct 28, 2025",
        image:
            "https://goldisolar.com/wp-content/uploads/2022/07/money-1200x675.jpg",
    },
    {
        id: "factory-savings-case-study",
        title: "How One Factory Cut 45% Power Cost with Rooftop Solar",
        excerpt:
            "A real-world case study of a manufacturing unit that turned its idle roof into a cost-saving asset.",
        category: "Case Study",
        readTime: "6 min read",
        date: "Sep 12, 2025",
        image:
            "https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg",
    },
    {
        id: "residential-checklist",
        title: "Checklist Before Installing Solar at Home",
        excerpt:
            "Shadow, structure, wiring routes and approvals – here’s a simple checklist every home-owner should see once.",
        category: "Home Owners",
        readTime: "4 min read",
        date: "Aug 20, 2025",
        image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUgCK-VC-jswJTvEj9c8hOSaPiX3ZaS991z4lvGRI0N9ulo7ph",
    },
    {
        id: "esg-co2-tracking",
        title: "Tracking CO₂ Reduction from Your Solar Plant",
        excerpt:
            "Learn how businesses log CO₂ savings from solar for ESG and sustainability reports.",
        category: "ESG & Sustainability",
        readTime: "5 min read",
        date: "Aug 02, 2025",
        image:
            "https://cdn.mos.cms.futurecdn.net/eAd6TJHmtNL8gKaCfpsMi.jpg",
    },
    {
        id: "discom-approvals",
        title: "Understanding DISCOM Approvals and Net-Metering",
        excerpt:
            "Confused about approvals and net-metering? This guide breaks it down in simple language.",
        category: "Policy & Approvals",
        readTime: "7 min read",
        date: "Jul 15, 2025",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHq58zf19iQE-vqxA3vYTHC8SE2k6FfrWgT29eHADjDfhlW1Yx",
    },
    {
        id: "winter-solar-performance",
        title: "Does Solar Work Better in Winter?",
        excerpt:
            "Cooler panels, softer sun, stable output – see how seasons actually affect performance.",
        category: "Performance",
        readTime: "3 min read",
        date: "Jun 28, 2025",
        image:
            "https://enerparc.in/wp-content/uploads/2024/09/Engineering-Procurement-and-Construction.webp",
    },
];

const categories = [
    "All",
    "Solar Basics",
    "Case Study",
    "Home Owners",
    "ESG & Sustainability",
    "Policy & Approvals",
    "Performance",
];

export default function SolarBlogPage() {
    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredPosts =
        activeCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === activeCategory);

    return (
        <>
            {/* ===== BLOG HERO / INTRO ===== */}
<section className="relative overflow-hidden rounded-3xl text-slate-50 px-6 py-8 md:px-10 md:py-12">
  {/* Background image */}
  <div className="absolute inset-0">
    <img
      src="https://images.indianexpress.com/2025/08/Solar-Panels-1.jpg"
      alt="Solar panels at sunset"
      className="h-full w-full object-cover"
    />
    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-slate-900/85 to-slate-900/40" />
  </div>

  {/* Subtle corner glow */}
  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl" />
  <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

  {/* Content */}
  <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between py-12 md:py-0">
    <div className="space-y-4 max-w-xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-300 backdrop-blur-sm">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500/20">
          <SunMedium className="h-3 w-3" />
        </span>
        Solar Knowledge Hub
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Learn Solar in Simple, Practical Language.
        </h1>
        <p className="text-sm md:text-base text-slate-200/90">
          Guides, case studies and explainers to help you make confident
          solar decisions for your home, factory or business.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 text-xs text-slate-100">
        <span className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 backdrop-blur-sm">
          Payback & savings
        </span>
        <span className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 backdrop-blur-sm">
          Rooftop design basics
        </span>
        <span className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 backdrop-blur-sm">
          Approvals & policy
        </span>
      </div>
    </div>

    {/* Right highlight card */}
    <div className="relative mt-2 md:mt-0">
      <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-4 md:px-5 md:py-5 shadow-xl backdrop-blur-sm max-w-xs md:max-w-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
          Featured Reading
        </p>
        <p className="text-sm md:text-base font-medium text-slate-50">
          &ldquo;Solar Payback in 5 Minutes&rdquo; is a great place to
          start if you’re new to rooftop solar.
        </p>
        <Link
          to="/blog/solar-payback-explained"
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-300 hover:text-orange-200"
        >
          Read the article
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* subtle glow behind card */}
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-orange-500/25 blur-3xl" />
    </div>
  </div>
</section>

            <main className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 space-y-10 md:space-y-14">


                {/* ===== FILTERS + SEARCH BAR ===== */}
                <section className="space-y-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                            Browse Solar Articles
                        </h2>
                        {/* Search – UI only, can connect later */}
                        <div className="w-full md:w-72">
                            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                                <Search className="h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search topics (e.g. payback, factory)…"
                                    className="w-full bg-transparent text-xs md:text-sm outline-none placeholder:text-slate-400"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Category pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                            const isActive = cat === activeCategory;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCategory(cat)}
                                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs md:text-[13px] transition-all ${isActive
                                            ? "border-orange-500 bg-orange-50 text-orange-700"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                                        }`}
                                >
                                    <Tag className="h-3.5 w-3.5" />
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* ===== MAIN CONTENT: BLOG GRID + SIDEBAR ===== */}
                <section className="grid gap-10 lg:grid-cols-[minmax(0,2.1fr),minmax(0,1fr)] items-start">
                    {/* Blog cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-200"
                            >
                                {/* Image */}
                                <div className="relative h-44 w-full overflow-hidden md:h-40">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-900 shadow-sm">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
                                    <div className="flex items-center justify-between gap-3 text-[11px] text-slate-500">
                                        <span className="inline-flex items-center gap-1">
                                            <Clock className="h-3.5 w-3.5" />
                                            {post.readTime}
                                        </span>
                                        <span>{post.date}</span>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="text-sm md:text-[15px] font-semibold text-slate-900 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-xs md:text-[13px] text-slate-600 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-1">
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700"
                                        >
                                            Read article
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                </section>
            </main>
        </>
    );
}


"use client";

import React from "react";
import { Mail, MapPin, Phone, Leaf, SunMedium, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight, ShieldCheck, Sparkles, ChevronUp } from "lucide-react";

/**
 * SolarFooter — unique, premium footer for solar websites
 * - Curved/angled top edge using SVG
 * - Subtle aurora background + gradient ring
 * - Trust badges & certifications row
 * - Newsletter with single-field form
 * - Social links, quick links, solutions, resources, contact
 * - Dark mode ready
 */
export default function SolarFooter() {
    return (
        <footer className="relative mt-14 text-neutral-800 dark:text-neutral-100">
            {/* Decorative top curve */}
            <div className="pointer-events-none relative -mb-1 h-20 w-full overflow-hidden">
                <svg
                    viewBox="0 0 1440 150"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 w-full h-[100px]"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,100
       Q40,0 120,0
       H1320
       Q1400,0 1440,100
       L1440,150
       L0,150
       Z"
                        className="fill-amber-50 dark:fill-[#0B0D0F]"
                    />
                </svg>

            </div>

            {/* Main footer background */}
            <div className="relative overflow-hidden bg-amber-50/80 backdrop-blur dark:bg-[#0B0D0F]">



                {/* Content container */}
                <div className="mx-auto max-w-7xl px-6 pb-10 ">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
                        {/* Brand + mission */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-white shadow">
                                    <SunMedium className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight">Your Solar Brand</h3>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Rooftop EPC • O&M • Consulting</p>
                                </div>
                            </div>
                            <p className="mt-4 max-w-md text-sm text-neutral-600 dark:text-neutral-300">
                                We design and deliver high‑yield, safe rooftop solar systems for homes, housing societies, and businesses.
                                Our mission is to make clean energy effortless—end‑to‑end support from design to net‑metering.
                            </p>
                            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/60 bg-emerald-50 px-2.5 py-1 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                                    <Leaf className="h-3.5 w-3.5" /> Net‑Zero Ready
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/60 bg-amber-50 px-2.5 py-1 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
                                    <ShieldCheck className="h-3.5 w-3.5" /> Safety First
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border border-sky-300/60 bg-sky-50 px-2.5 py-1 text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
                                    <Sparkles className="h-3.5 w-3.5" /> Tier‑1 Hardware
                                </span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-2">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-neutral-900 dark:text-white">Quick Links</h4>
                            <nav className="grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                                <FooterLink href="#about">About Us</FooterLink>
                                <FooterLink href="#projects">Projects</FooterLink>
                                <FooterLink href="#services">Services</FooterLink>
                                <FooterLink href="#subsidy">Subsidy & Policy</FooterLink>
                                <FooterLink href="#blog">Blog</FooterLink>
                                <FooterLink href="#careers">Careers</FooterLink>
                            </nav>
                        </div>

                        {/* Solutions */}
                        <div className="lg:col-span-2">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-neutral-900 dark:text-white">Solutions</h4>
                            <nav className="grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                                <FooterLink href="#home-solar">Home Solar</FooterLink>
                                <FooterLink href="#society-solar">Housing Societies</FooterLink>
                                <FooterLink href="#commercial">Commercial</FooterLink>
                                <FooterLink href="#industrial">Industrial</FooterLink>
                                <FooterLink href="#om">Operation & Maintenance</FooterLink>
                            </nav>
                        </div>

                        {/* Resources */}
                        <div className="lg:col-span-2">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-neutral-900 dark:text-white">Resources</h4>
                            <nav className="grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                                <FooterLink href="#roi">ROI Calculator</FooterLink>
                                <FooterLink href="#downloads">Downloads</FooterLink>
                                <FooterLink href="#faq">FAQs</FooterLink>
                                <FooterLink href="#warranty">Warranty</FooterLink>
                                <FooterLink href="#support">Support</FooterLink>
                            </nav>
                        </div>

                        {/* Contact + Newsletter */}
                        <div className="lg:col-span-2">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-neutral-900 dark:text-white">Contact</h4>
                            <div className="grid gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                                <p className="inline-flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Mumbai • Pune • Nagpur</p>
                                <p className="inline-flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> +91 95195 18951</p>
                                <p className="inline-flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> hello@yoursolarbrand.com</p>
                            </div>
                            <div className="mt-4 flex items-center gap-3 text-neutral-500">
                                <Social href="#" label="Facebook"><Facebook className="h-4 w-4" /></Social>
                                <Social href="#" label="Instagram"><Instagram className="h-4 w-4" /></Social>
                                <Social href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></Social>
                                <Social href="#" label="YouTube"><Youtube className="h-4 w-4" /></Social>
                            </div>
                            <form className="mt-5  flex w-full max-w-5xl overflow-hidden rounded-xl border border-amber-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-white/5">
                                <input
                                    type="email"
                                    required
                                    placeholder="Join our newsletter"
                                    className="w-full bg-transparent PX-2  py-2 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none dark:text-white"
                                />
                                <button
                                    type="submit"
                                    className="group inline-flex items-center gap-2 bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
                                >
                                    Subscribe
                                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Certifications / Trust badges */}
                    <div className="mt-12 rounded-2xl border border-amber-200/60 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
                        <div className="grid items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Badge text="MNRE Approved" />
                            <Badge text="ISO 9001:2015" />
                            <Badge text="Tier-1 Modules" />
                            <Badge text="5‑Year System Warranty" />
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-amber-200/60 pt-6 text-sm text-neutral-600 dark:border-white/10 dark:text-neutral-400 md:flex-row">
                        <p>© {new Date().getFullYear()} TrueSun. All rights reserved.</p>
                        <div className="flex items-center gap-5 me-10">
                            <a href="#privacy" className="hover:text-neutral-900 dark:hover:text-white">Privacy Policy</a>
                            <a href="#terms" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
                            <a href="#sitemap" className="hover:text-neutral-900 dark:hover:text-white">Sitemap</a>
                        </div>
                    </div>
                </div>

                {/* Back to top */}
                <a
                    href="#top"
                    aria-label="Back to top"
                    className="group absolute right-6 bottom-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/90 px-3 py-2 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur transition  dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                    <ChevronUp className="h-4 w-4" />
                    Top
                </a>
            </div>
        </footer>
    );
}

/* ------- Bits ------- */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="inline-flex items-center gap-1 hover:text-neutral-900 hover:underline dark:hover:text-white"
        >
            <span className="h-1 w-1 rounded-full bg-current" />
            {children}
        </a>
    );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            aria-label={label}
            href={href}
            className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white/70 p-2 text-neutral-600 transition hover:text-neutral-900 dark:border-white/10 dark:bg-white/10 dark:text-neutral-300 dark:hover:text-white"
        >
            {children}
        </a>
    );
}

function Badge({ text }: { text: string }) {
    return (
        <div className="flex items-center justify-center gap-2 rounded-xl border border-amber-200/60 bg-amber-50/60 px-3 py-2 text-sm font-medium text-neutral-800 dark:border-white/10 dark:bg-white/10 dark:text-neutral-200">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
            {text}
        </div>
    );
}

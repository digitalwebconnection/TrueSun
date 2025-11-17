"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users} from "lucide-react";

export default function CareersHero() {
    return (
        <section className="relative overflow-hidden bg-white text-slate-900">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-16 lg:flex-row lg:items-center lg:px-0 lg:pt-20">
                {/* LEFT: Copy + CTA */}
                <div className="w-full lg:w-6/12">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500"
                    >
                        Want to work with us?
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
                    >
                        BUILD YOUR{" "}
                        <span className="relative inline-block">
                            <span className="absolute inset-0 -skew-x-6 rounded-md bg-lime-300" />
                            <span className="relative px-1">SOLAR</span>
                        </span>{" "}
                        CAREER WITH TRUESUN
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.12 }}
                        className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base"
                    >
                        TrueSun’s success is shaped by people who work every day towards a
                        greener environment. Join a team that designs, sells and executes
                        rooftop solar projects for homes, businesses and institutions across
                        India — with mentorship, learning and real responsibility from day
                        one.
                    </motion.p>

                    {/* CTA row */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="mt-7 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#career-form"
                            className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md shadow-lime-300/60 hover:bg-lime-300"
                        >
                            Apply for open roles
                            <ArrowRight className="h-4 w-4" />
                        </a>

                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-900 text-[11px] font-semibold text-white">
                                    TS
                                </span>
                                <img
                                    src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=80"
                                    alt="Team member"
                                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                                />
                                <img
                                    src="https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg?auto=compress&cs=tinysrgb&w=80"
                                    alt="Team member"
                                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                <Users className="h-3.5 w-3.5" />
                                <span>Business, design & project roles</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: Solar image cluster + stat card */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full lg:w-5/12 "
                >
                    <div className="relative h-[400px] w-full">
                        {/* ───── Top-left image ───── */}
                        <div className="absolute -left-10 top-0 h-[210px] w-[62%] overflow-hidden rounded-[28px] bg-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.28)]">
                            <img
                                src="https://waaree.com/wp-content/uploads/2024/03/TOP_Con_Technology_922ed15e22.jpg"
                                alt="Wind farm city"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* ───── Big bottom image ───── */}
                        <div className="absolute left-[12%] bottom-0 h-[310px] w-[88%] overflow-hidden rounded-4xl bg-slate-200 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
                            <img
                                src="https://www.solluz.co.in/wp-content/uploads/elementor/thumbs/ISGEC-1000-kWp-Solar-Installation-r1ojv2y6dyldh5z7zp0buoq3bf3cb5t432k0dv4ya0.webp"
                                alt="Green city overview"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* ───── Top-right black stat card ───── */}
                        <div className="absolute -right-10 top-13 w-[180px] rounded-3xl bg-slate-900 px-4 py-4 text-white shadow-[0_20px_70px_rgba(15,23,42,0.55)]">
                            <div className="relative">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                    Always Protected
                                </p>

                                {/* small round image in the corner */}
                                <div className="absolute -top-2 -right-2 h-9 w-9 overflow-hidden rounded-full border-2 border-slate-800">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOH-oY5CmNY4kp6QRuUZE0zej_qxEsktiUg&s"
                                        alt="Avatar"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 leading-none">
                                <span className="text-3xl font-extrabold">98%</span>
                            </div>
                            <p className="mt-1 text-xs text-slate-300">
                                Energy Efficiency Rate
                            </p>
                        </div>

                        {/* ───── Bottom-left mini tile (See all our project) ───── */}
                        <div className="absolute -bottom-12 left-5 h-[135px] w-[150px] overflow-hidden rounded-[22px] bg-white shadow-[0_18px_60px_rgba(15,23,42,0.25)]">
                            <div className="h-[70%] w-full overflow-hidden">
                                <img
                                    src="https://m.economictimes.com/thumb/msid-118396920,width-1200,height-900,resizemode-4,imgsize-110126/new-solar-project-tenders-to-have-two-hour-energy-storage-systems.jpg"
                                    alt="City waterfront"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex h-[30%] flex-col justify-center px-3 text-[10px]">
                                <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                    See all our
                                </span>
                                <span className="font-semibold text-slate-900">Project</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

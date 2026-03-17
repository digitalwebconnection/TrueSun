"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, X } from "lucide-react";

export default function CareersPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-white text-slate-900/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-16 lg:flex-row lg:items-center lg:px-0 lg:pt-20">
          
          {/* LEFT SIDE */}
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
              transition={{ duration: 0.55 }}
              className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            >
              BUILD YOUR{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 -skew-x-6 rounded-md bg-[#FC763A]" />
                <span className="relative px-1 text-white">SOLAR</span>
              </span>{" "}
              CAREER WITH TRUESUN
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base"
            >
              Join a team that designs, sells and executes rooftop solar
              projects across India with real responsibility from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-7 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#FC763A] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#FC763A] transition"
              >
                Apply for open roles
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-1 text-xs text-slate-500">
                <Users className="h-4 w-4" />
                <span>Business, Design & Project Roles</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full lg:w-5/12"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://www.solluz.co.in/wp-content/uploads/elementor/thumbs/ISGEC-1000-kWp-Solar-Installation-r1ojv2y6dyldh5z7zp0buoq3bf3cb5t432k0dv4ya0.webp"
                alt="Solar Project"
                className="h-[400px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
                >
                  <X />
                </button>

                <h2 className="text-2xl font-bold text-slate-900">
                  Apply for a Position
                </h2>

                <form className="mt-6 space-y-5">
                  
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#FC763A] focus:outline-none"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Surname"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#FC763A] focus:outline-none"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Position Applied For"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#FC763A] focus:outline-none"
                    required
                  />

                  <input
                    type="number"
                    placeholder="Experience (Years)"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#FC763A] focus:outline-none"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#FC763A] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#FC763A] transition"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
                                    
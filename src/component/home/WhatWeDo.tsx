"use client";

import { useState } from "react";
import {
  Wrench,
  Settings,
  ClipboardList,
  CheckCircle2,
  Sun,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "projects",
    icon: <Sun className="w-8 h-8 text-orange-500" />,
    title: "Solar Projects (EPC)",
    desc: "Turnkey rooftop systems for homes, societies, and industries — designed for safety, yield, and long-term reliability.",
    features: [
      "Structural Design & Engineering",
      "Net Metering & Subsidy Approvals",
      "Installation & Quality Testing",
      "App-based Monitoring Setup",
    ],
    gradient: "from-amber-50 to-orange-100",
  },
  {
    id: "om",
    icon: <Wrench className="w-8 h-8 text-emerald-600" />,
    title: "Operation & Maintenance",
    desc: "Annual and predictive maintenance to keep your solar plant healthy, efficient, and always-on.",
    features: [
      "Monthly Plant Audits & Cleaning",
      "Performance Monitoring & Alerts",
      "Inverter & PR Optimization",
      "24×7 Remote Support",
    ],
    gradient: "from-emerald-50 to-green-200",
  },
  {
    id: "consulting",
    icon: <Settings className="w-8 h-8 text-blue-500" />,
    title: "Consulting & Design",
    desc: "Independent solar project consultancy for investors, developers, and corporates — from feasibility to execution.",
    features: [
      "Financial & Policy Feasibility",
      "Technology & Vendor Evaluation",
      "Bidding & Tender Support",
      "Cost Optimization Strategies",
    ],
    gradient: "from-blue-50 to-indigo-200",
  },
  {
    id: "advisory",
    icon: <ClipboardList className="w-8 h-8 text-purple-600" />,
    title: "ESG & Net-Zero Advisory",
    desc: "Strategic advisory for carbon footprinting, CSR energy programs, and sustainable energy compliance.",
    features: [
      "Carbon Footprint Assessment",
      "Renewable CSR Project Design",
      "Net-Zero Roadmap Planning",
      "ESG Data & Compliance Support",
    ],
    gradient: "from-purple-50 to-pink-100",
  },
];

export default function SolarServicesShowcase() {
  const [active, setActive] = useState("projects");

  return (
    <section className="relative py-16 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border-black/20 border-2 bg-orange-200 px-6 py-1 text-sm shadow-2xl shadow-black font-semibold text-orange-700"
          >
            <Sparkles className="w-4 h-4" /> What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-4xl md:text-5xl font-bold text-gray-900"
          >
            Smarter Solar, Simplified.
          </motion.h2>
          <p className="mt-3 text-gray-600 max-w-4xl mx-auto">
            From EPC to O&M and from Consulting to Net-Zero — we deliver end-to-end solar solutions that scale with your goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {services.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActive(srv.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === srv.id
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white border border-gray-500 hover:bg-orange-50 text-gray-800"
                }`}
            >
              {srv.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Animated Panel */}
        <div className="relative ">
          <AnimatePresence mode="wait">
            {services
              .filter((s) => s.id === active)
              .map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-3xl shadow-2xl border-black/10 border-2 bg-linear-to-br ${service.gradient}  p-8 md:p-10 flex flex-col md:flex-row items-center gap-8`}
                >
                  {/* Left Side */}
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      {service.icon}
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {service.desc}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <a
                        href="#contact"
                        className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-full px-6 py-2 shadow-md transition"
                      >
                        Book a Free Consultation →
                      </a>
                    </div>
                  </div>

                  {/* Right Side Illustration */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex-1 flex justify-center"
                  >
                    <img
                      src={
                        service.id === "projects"
                          ? "https://www.solarpvmart.com/images/blogs/5/blog5.jpg"
                          : service.id === "om"
                            ? "https://waaree.com/wp-content/uploads/2024/07/technician-3936982_960_720.jpg"
                            : service.id === "consulting"
                              ? "https://waaree.com/wp-content/uploads/2024/03/solar_inverter_765a2184e3.jpg"
                              : "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
                      }
                      alt={service.title}
                      className="rounded-xl shadow-2xl shadow-black object-cover w-full h-[280px] md:h-[340px]"
                    />
                  </motion.div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

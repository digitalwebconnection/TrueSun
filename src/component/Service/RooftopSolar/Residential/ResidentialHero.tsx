"use client";

import { motion, type Variants } from "framer-motion";
import { Sun, Leaf, Zap, ArrowRight, Home, Building2 } from "lucide-react";

import LeadPopup from "../../../LeadPopup";
import { useState } from "react";
// --------------------- FIXED VARIANT ---------------------
const textVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ResidentialHero() {
    const [openLeadPopup, setOpenLeadPopup] = useState(false);
  return (
    <section
      className="relative overflow-hidden bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://instanttechnology.in/wp-content/uploads/2025/02/White-Home-with-Solar-Panels-shutterstock_1981585070-scaled-1-scaled-1.jpg')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-black/80"></div>

      <div className="relative container max-w-7xl mx-auto px-6 md:px-0 py-18 lg:py-26 flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="text-center lg:text-left lg:w-1/2 text-white"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            custom={1}
            variants={textVariant}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Power Your <span className="text-amber-400">Home</span> with  
            <br /> Clean & Affordable <span className="text-green-400">Solar Energy</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariant}
            className="text-gray-200 text-lg max-w-xl mx-auto lg:mx-0 mb-6"
          >
            Enjoy lower electricity bills and a greener planet with reliable 
            residential solar panel installation. Start saving with sustainable energy today.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariant}
            className="flex justify-center lg:justify-start gap-4"
          >
            <button   onClick={() => setOpenLeadPopup(true)} className="flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shadow-lg">
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </button>
        
          </motion.div>

          {/* FEATURE ICONS */}
          <motion.div
            custom={4}
            variants={textVariant}
            className="flex justify-center lg:justify-start gap-6 mt-8 text-gray-200"
          >
            <div className="flex items-center gap-2">
              <Sun className="text-amber-400" /> <span>Renewable</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="text-green-400" /> <span>Eco Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-300" /> <span>High Efficiency</span>
            </div>
          </motion.div>

          {/* ---------------- SERVICE TAGS ADDED HERE ---------------- */}
          <motion.div
            custom={5}
            variants={textVariant}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <Building2 className="text-blue-300" /> 
              <span>Housing Societies</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <Home className="text-green-300" /> 
              <span>Villas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20">
              <Home className="text-amber-300" /> 
              <span>Bungalows</span>
            </div>
          </motion.div>
          {/* ---------------------------------------------------------- */}

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <img
              src="https://content.jdmagicbox.com/v2/comp/mumbai/c9/022pxx22.xx22.190610203521.c9c9/catalogue/radiance-technology-pvt-ltd-bhiwandi-city-bhiwandi-solar-street-light-manufacturers-00kz3ho7ib.jpg"
              alt="Residential Solar Installation"
              className="w-[480px] max-w-full rounded-2xl shadow-2xl shadow-black"
            />
          </div>
        </motion.div>
      </div>

        {/* Popup Mount */}
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </section>
  );
}

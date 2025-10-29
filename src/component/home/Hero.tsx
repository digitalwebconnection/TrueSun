"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Leaf, Battery, Zap, Cloud } from "lucide-react";

const bgImages = [
  "https://cdn.hswstatic.com/gif/solar-cells.jpg",
  "https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg",
  "https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--8e730649-cfe6-4c4b-8eb1-fc4c2952568d/img2.png?preferwebp=true&quality=85",
];

const SLIDE_DURATION_MS = 6000;
const FADE_MS = 1000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Auto change background image
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % bgImages.length),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative py-20 overflow-hidden   ">
      {/* ===== BACKGROUND SLIDES ===== */}
      <div className="absolute inset-0 -z-10">
        {bgImages.map((src, i) => {
          const isActive = i === index;
          return (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[${FADE_MS}ms]`}
              style={{
                backgroundImage: `url(${src})`,
                opacity: isActive ? 1 : 0,
                animation: isActive
                  ? `kenburnsZoom ${SLIDE_DURATION_MS + FADE_MS}ms linear forwards`
                  : "none",
              }}
            >
              <div className="absolute inset-0 bg-yellow-500/10 mix-blend-multiply" />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* ===== FLOATING SOLAR ICONS ===== */}
      <FloatingIcons />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-left">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight opacity-0 animate-slideInLeft"
          style={{ animationDelay: "200ms" }}
        >
          Powering Your Future <br className="hidden sm:inline" /> with{" "}
          <span className="text-orange-400">Solar Energy</span>
        </h1>

        <p
          className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl opacity-0 animate-slideInLeft"
          style={{ animationDelay: "600ms" }}
        >
          Start saving on electricity and reduce your carbon footprint today.
          Get a free, no-obligation quote.
        </p>

        <div
          className="mt-8 flex gap-4 opacity-0 animate-slideInUp"
          style={{ animationDelay: "1000ms" }}
        >
          <button className="px-8 py-3 text-lg font-bold text-gray-900 bg-orange-400 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.03] hover:bg-orange-300">
            Get A Free Quote
          </button>
          <button className="px-8 py-3 text-lg font-bold text-white border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <svg
          className="w-8 h-8 text-white animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      {/* ===== CUSTOM ANIMATIONS ===== */}
      <style>{`
        @keyframes kenburnsZoom {
          0% { transform: scale(1) translateZ(0); }
          100% { transform: scale(1.08) translateZ(0); }
        }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }

        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

/* ===================== FLOATING ICON COMPONENT ===================== */
function FloatingIcons() {
  const icons = [
    { Icon: Sun, color: "text-yellow-400", size: 60, x: "10%", y: "20%" },
    { Icon: Leaf, color: "text-green-400", size: 50, x: "70%", y: "30%" },
    { Icon: Battery, color: "text-lime-300", size: 55, x: "40%", y: "70%" },
    { Icon: Zap, color: "text-orange-400", size: 45, x: "20%", y: "60%" },
    { Icon: Cloud, color: "text-sky-300", size: 65, x: "80%", y: "50%" },
  ];

  return (
    <div className="absolute inset-0 -z-0 overflow-hidden">
      {icons.map(({ Icon, color, size, x, y }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color} opacity-40`}
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}

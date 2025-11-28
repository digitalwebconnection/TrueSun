import { useEffect, useState } from "react";

const bgImages = [
  "https://t3.ftcdn.net/jpg/01/57/42/86/360_F_157428613_ZhDS00sqo623F3JH7cWhFvAK6o2FIWXh.jpg",
  "https://australianpremiumsolar.co.in/wp-content/uploads/2024/06/cleaning-solar-panel.jpg",
  "https://galaxysolarenergy.com/wp-content/uploads/2020/04/solar-rooftop-systems.jpg",
  "https://waareertl.com/wp-content/uploads/2024/05/Rooftop-Solar-System-Installation-in-India.jpg",
  "https://energyportal.in/images/solar/rooftop-solar01.jpg",
  "https://www.noidapower.com/assets/img/inner/solarto-2.jpg",
];

const SLIDE_DURATION_MS = 6000;
const FADE_MS = 1000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % bgImages.length),
      SLIDE_DURATION_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex flex-col lg:flex-row min-h-[60svh] lg:min-h-[70svh]">
        {/* ============= LEFT CONTENT ============= */}
        <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-10 py-14 lg:py-20 flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-3">
            Save More • Go Solar
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
            Cut Your Power Bills.
            <br />
            <span className="text-emerald-600">Choose Clean Solar Energy.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl">
            Switch from rising electricity costs to predictable, low monthly
            bills. Our solar solutions help you save money, protect the planet,
            and enjoy reliable power for years to come.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Up to 80% savings on electricity bills*
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              25+ years performance life
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            
            <p className="text-xs sm:text-sm text-slate-500">
              Takes less than 60 seconds. No obligation.
            </p>
          </div>
        </div>

        {/* ============= RIGHT IMAGE SIDE ============= */}
        <div className="relative w-full lg:w-1/2 min-h-80 lg:min-h-[500px] overflow-hidden">
          {/* Background slider */}
          <div className="absolute inset-0">
            {bgImages.map((src, i) => {
              const isActive = i === index;
              return (
                <div
                  key={i}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${src})`,
                    opacity: isActive ? 1 : 0,
                    transitionProperty: "opacity",
                    transitionTimingFunction: "ease",
                    transitionDuration: `${FADE_MS}ms`,
                    animation: isActive
                      ? `kenburnsZoom ${
                          SLIDE_DURATION_MS + FADE_MS
                        }ms linear forwards`
                      : "none",
                  }}
                />
              );
            })}
          </div>

          {/* Soft gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-linear-to-l from-emerald-500/45 via-emerald-500/10 to-transparent" />

          {/* Decorative shapes */}
          {/* Top-middle angled bar */}
          <div
            className="absolute top-0 left-1/2 h-24 w-28 bg-emerald-500 hidden sm:block"
            style={{
              transform: "translateX(-50%) skewX(-30deg)",
            }}
          />
          {/* Right big diagonal shape */}
          <div
            className="absolute bottom-0 right-0 h-64 w-64 bg-orange-500/80 hidden sm:block"
            style={{
              clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Floating savings badge */}
          <div className="absolute bottom-6 left-6 max-w-xs rounded-2xl bg-white/85 px-4 py-3 shadow-xl backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-600">
              Savings & Sustainability
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              “This system paid back its cost in just a few years.”
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              Real-world savings with clean, renewable solar energy for homes
              and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* ============= CUSTOM KEYFRAMES ============= */}
      <style>{`
        @keyframes kenburnsZoom {
          0% { transform: scale(1) translateZ(0); }
          100% { transform: scale(1.07) translateZ(0); }
        }
      `}</style>
    </section>
  );
}

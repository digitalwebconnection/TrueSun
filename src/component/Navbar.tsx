"use client";

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  ChevronDown,
  ChevronRight,
  Wrench,
  Users2,
} from "lucide-react";

/* Utility */
function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

/* ----------------------------- Services data ----------------------------- */
type ChildLink = { label: string; to: string };
type ServiceGroup = {
  key: string;
  label: string;
  icon: React.ReactNode;
  to?: string;
  children?: ChildLink[];
};

const SERVICES: ServiceGroup[] = [
  {
    key: "rooftop",
    label: "Rooftop Solar",
    icon: <Wrench className="h-4 w-4" />,
    to: "/services/rooftop",
    children: [
      { label: "Commercial", to: "/services/rooftop/commercial" },
      { label: "Industrial", to: "/services/rooftop/industrial" },
      { label: "Residential", to: "/services/rooftop/residential" },
    ],
  },
  {
    key: "consulting",
    label: "Consulting",
    icon: <Users2 className="h-4 w-4" />,
    to: "/services/consulting",
    children: [
      { label: "Feasibility & DPR", to: "/services/consulting/feasibility" },
      { label: "Project Finance", to: "/services/consulting/finance" },
      { label: "O&M Advisory", to: "/services/consulting/om" },
    ],
  },
];

/* ----------------------------- Services menu ----------------------------- */
function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>(SERVICES[0].key);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // close on click-outside / ESC
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        btnRef.current &&
        !btnRef.current.contains(t)
      ) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const active = SERVICES.find((s) => s.key === activeKey);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1 font-medium text-gray-800 transition-colors hover:text-orange-500"
        )}
      >
        <span className="inline-flex items-center gap-2">
          {/* small box icon feel to match screenshot */}
          {/* <span className="inline-block h-4 w-4 rounded bg-orange-100 ring-1 ring-orange-200" /> */}
          Services
        </span>
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open ? "rotate-180" : "rotate-0")}
        />
      </button>

      {/* dropdown */}
      <div
        ref={panelRef}
        onMouseLeave={() => setOpen(false)}
        className={cn(
          "absolute left-0 top-full mt-3 flex rounded-xl p-2 shadow-2xl ring-1 ring-black/5 bg-white",
          "origin-top-left transition-all duration-150",
          open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        )}
      >
        {/* left list (parents) */}
        <div className="w-46 rounded-lg  p-1">
          {SERVICES.map((s) => {
            const isActive = s.key === activeKey;
            return (
              <button
                key={s.key}
                onMouseEnter={() => setActiveKey(s.key)}
                onFocus={() => setActiveKey(s.key)}
                onClick={() => {
                  setOpen(false);
                  if (s.to) window.location.href = s.to;
                }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm",
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <span className="text-orange-500">{s.icon}</span>
                <span>{s.label}</span>
                <ChevronRight className="ml-auto h-4 w-4 opacity-60" />
              </button>
            );
          })}
        </div>

        {/* right list (children of active) */}
        <div className="ml-2 w-64 rounded-lg bg-white p-2 shadow-lg">
          {(active?.children ?? []).map((c) => (
            <Link
              key={c.to}
              to={c.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================= NAVBAR ================================= */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);

  const lastY = useRef(0);
  const ticking = useRef(false);

  const location = useLocation();
  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [location.pathname]); // keep your original behaviour

  useEffect(() => {
    lastY.current = window.scrollY || 0;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const diff = y - lastY.current;
        setElevated(y > 4);
        if (!isOpen) {
          const THRESHOLD = 8;
          if (diff > THRESHOLD) setHidden(true);
          else if (diff < -THRESHOLD) setHidden(false);
        }
        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const linkBase = "transition-colors duration-300 hover:text-orange-500";
  const activeClass = "text-orange-500";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full",
        "transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
      role="banner"
    >
      <div
        className={cn(
          "bg-white/90 backdrop-blur-md",
          elevated ? "shadow-lg ring-1 ring-black/5" : "shadow-none"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <Sun className="h-7 w-7 text-orange-500" />
            <h1 className="text-xl font-bold text-gray-800">
              True<span className="text-orange-500">Sun</span>
            </h1>
          </Link>

          {/* Desktop Menu (main structure unchanged; only Services becomes dropdown) */}
          <nav className="hidden items-center gap-8 font-medium text-gray-800 md:flex">
            <NavLink to="/about" className={({ isActive }) => cn(linkBase, isActive && activeClass)}>
              About
            </NavLink>

            {/* Services dropdown inserted here */}
            <ServicesMenu />

            <NavLink to="/projects" className={({ isActive }) => cn(linkBase, isActive && activeClass)}>
              Projects
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => cn(linkBase, isActive && activeClass)}>
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "rounded-full bg-orange-500 px-5 py-2 text-white shadow-lg transition hover:bg-orange-600",
                  isActive && "ring-2 ring-orange-300 ring-offset-2"
                )
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button (unchanged) */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className={cn(
              "text-gray-800 md:hidden z-[60] relative transition-all duration-300 hover:text-orange-500",
              isOpen ? "rotate-180" : "rotate-0"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay & drawer (unchanged from your code) */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40 transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />
      <div
        id="mobile-nav"
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-all duration-500 ease-in-out md:hidden z-50",
          isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between px-6 py-4 border-b border-gray-100 transition-all duration-500 ease-out",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Sun className="h-8 w-8 text-orange-600" />
            <h2 className="text-2xl font-extrabold text-gray-900">
              True<span className="text-orange-600">Sun</span>
            </h2>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 hover:rotate-90"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex bg-white -mt-5 flex-col space-y-2 p-6 font-semibold">
          {[
            { name: "About", to: "/about" },
            { name: "Services", to: "/services" }, // keep simple link on mobile (per your request)
            { name: "Projects", to: "/projects" },
            { name: "Careers", to: "/careers" },
          ].map(({ name, to }, index) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "text-xl py-4 px-3 rounded-lg transition-all duration-300 ease-out transform",
                  "text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:scale-105",
                  isActive ? "bg-orange-100 text-orange-600" : "",
                  isOpen ? `translate-x-0 opacity-100` : "translate-x-4 opacity-0"
                )
              }
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
            >
              {name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              "mt-6 w-full rounded-xl bg-orange-500 py-3 text-center text-lg text-white shadow-xl transition-all duration-300 ease-out transform",
              "hover:bg-orange-600 hover:scale-105 focus:ring-4 focus:ring-orange-300",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "1000ms" : "3500ms" }}
          >
            Get a Free Quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);

  // Track scroll direction
  const lastY = useRef(0);
  const ticking = useRef(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Careers", href: "#careers" },
  ];

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    lastY.current = window.scrollY || 0;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const diff = y - lastY.current;

        // Elevation shadow once you start scrolling
        setElevated(y > 4);

        // Only hide if menu is closed
        if (!isOpen) {
          const THRESHOLD = 8; // pixels to ignore small jitters
          if (diff > THRESHOLD) setHidden(true);          // scrolling down -> hide
          else if (diff < -THRESHOLD) setHidden(false);   // scrolling up -> show
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50",
        "transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
      role="banner"
    >
      <div
        className={[
          "bg-white/80 backdrop-blur-md",
          elevated ? "shadow-sm ring-1 ring-black/5" : "shadow-none",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sun className="text-orange-500 w-7 h-7" />
            <h1 className="text-xl font-bold text-gray-800">
              True<span className="text-orange-500">Sun</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-gray-800 font-medium items-center">
            {navItems.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-400 transition"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-fadeIn">
          <nav className="flex flex-col px-5 py-4 space-y-4 text-gray-700 font-medium">
            {navItems.map(({ name, href }, index) => (
              <a
                key={index}
                href={href}
                className="hover:text-orange-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full text-center py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

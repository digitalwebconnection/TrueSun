"use client";

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sun } from "lucide-react";

// Utility function to conditionally join Tailwind classes
function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);

  // Track scroll direction
  const lastY = useRef(0);
  const ticking = useRef(false);

  // Close menu on route change
  const location = useLocation();
  useEffect(() => {
    // We only set isOpen to false if a new route is actually being navigated to
    // and the menu is currently open.
    if (isOpen) setIsOpen(false);
  // NOTE: This effect relies on the 'location' from react-router-dom
  // It's technically okay, but usually, mobile links handle closing the menu on click.
  }, [location.pathname]); // Use location.pathname for better dependency array

  const navItems = [
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Careers", to: "/careers" },
  ];

  // Hide on scroll down, show on scroll up logic (kept from original)
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
          if (diff > THRESHOLD) setHidden(true); // scrolling down -> hide
          else if (diff < -THRESHOLD) setHidden(false); // scrolling up -> show
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  // Prevent body scroll when mobile menu open (kept from original)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
          "bg-white/90 backdrop-blur-md", // slightly less transparent
          elevated ? "shadow-lg ring-1 ring-black/5" : "shadow-none" // deeper shadow for elevation
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo (Always visible) */}
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <Sun className="h-7 w-7 text-orange-500" />
            <h1 className="text-xl font-bold text-gray-800">
              True<span className="text-orange-500">Sun</span>
            </h1>
          </Link>

          {/* Desktop Menu (Unchanged) */}
          <nav className="hidden items-center gap-8 font-medium text-gray-800 md:flex">
            {navItems.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => cn(linkBase, isActive && activeClass)}
              >
                {name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "rounded-full bg-orange-500 px-5 py-2 text-white shadow-lg transition hover:bg-orange-600",
                  isActive && "ring-2 ring-orange-300 ring-offset-2" // better focus ring
                )
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button (Always visible) */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className={cn(
              "text-gray-800 md:hidden z-[60] relative transition-all duration-300 hover:text-orange-500",
              isOpen ? "rotate-180" : "rotate-0" // Rotate 180 degrees when open for a fun effect
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --------------------------------- */}
      {/* ⚡ ENHANCED FULL-SCREEN MOBILE DRAWER WITH MORE ANIMATIONS ⚡ */}
      {/* --------------------------------- */}
      {/* Backdrop/Overlay (Always rendered for smooth animation) */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40 transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none" // Added scale for a zoom effect
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Full-Screen Drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transition-all duration-500 ease-in-out md:hidden z-50",
          isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95" // Added scale for a subtle zoom-in
        )}
        // Enhanced slide-in with scale for a more dynamic feel.
      >
        {/* Drawer Header (Logo and Close Button inside the drawer) */}
        <div
          className={cn(
            "flex items-center justify-between px-6 py-4 border-b border-gray-100 transition-all duration-500 ease-out",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0" // Slide down and fade in
          )}
        >
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Sun className="h-8 w-8 text-orange-600 transition-transform duration-300 hover:scale-110" />
            <h2 className="text-2xl font-extrabold text-gray-900">
              True<span className="text-orange-600">Sun</span>
            </h2>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 hover:rotate-90" // Rotate on hover for interactivity
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex bg-white -mt-5 flex-col space-y-2 p-6 font-semibold">
          {navItems.map(({ name, to }, index) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)} // Close on click
              className={({ isActive }) =>
                cn(
                  "text-xl py-4 px-3 rounded-lg transition-all duration-300 ease-out transform",
                  "text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:scale-105", // Added scale on hover
                  isActive
                    ? "bg-orange-100 text-orange-600"
                    : "",
                  // Staggered entrance: delay based on index
                  isOpen
                    ? `translate-x-0 opacity-100 delay-${index * 100}` // Slide in from left with delay
                    : "translate-x-4 opacity-0" // Start off-screen
                )
              }
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms", // Custom delay for stagger
              }}
            >
              {name}
            </NavLink>
          ))}

          {/* Contact Button */}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              "mt-6 w-full rounded-xl bg-orange-500 py-3 text-center text-lg text-white shadow-xl transition-all duration-300 ease-out transform",
              "hover:bg-orange-600 hover:scale-105 focus:ring-4 focus:ring-orange-300", // Added scale on hover
              isOpen
                ? "translate-y-0 opacity-100 delay-500" // Slide up with delay after links
                : "translate-y-4 opacity-0" // Start below
            )}
            style={{
              transitionDelay: isOpen ? "1000ms" : "3500ms", // Delay after the last link
            }}
          >
            Get a Free Quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

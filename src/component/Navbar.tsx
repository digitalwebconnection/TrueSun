"use client";

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sun } from "lucide-react";

function cn(...c: (string | false | undefined)[]) {
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
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Careers", to: "/careers" },
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

  const linkBase =
    "transition-colors duration-300 hover:text-orange-500";
  const activeClass =
    "text-orange-500";

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
          "bg-white/80 backdrop-blur-md",
          elevated ? "shadow-sm ring-1 ring-black/5" : "shadow-none"
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

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 font-medium text-gray-800 md:flex">
            {navItems.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(linkBase, isActive && activeClass)
                }
              >
                {name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "rounded-full bg-orange-500 px-5 py-2 text-white shadow-md transition hover:bg-orange-400",
                  isActive && "ring-2 ring-orange-300"
                )
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="text-gray-800 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="animate-fadeIn border-t border-gray-200 bg-white shadow-lg md:hidden"
        >
          <nav className="flex flex-col space-y-4 px-5 py-4 font-medium text-gray-700">
            {navItems.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn("transition-colors duration-200 hover:text-orange-500", isActive && "text-orange-500")
                }
              >
                {name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="w-full rounded-full bg-orange-500 py-2 text-center text-white shadow-md transition hover:bg-orange-400"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

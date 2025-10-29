// src/components/Navbar.tsx
import React from "react";
import { FaUsers, FaBox, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";

type MenuItem = { icon: React.ComponentType<{ className?: string }>; label: string; href: string };

const menuItems: MenuItem[] = [
  { icon: FaUsers, label: "ABOUT", href: "#about" },
  { icon: FaBox, label: "SERVICES", href: "#services" },
  { icon: FaCog, label: "PROJECTS", href: "#projects" },
  { icon: FaUser, label: "CAREERS", href: "#careers" },
];

/**
 * SmartNavbar: hides on scroll down, shows on scroll up.
 * Adds: scroll-elevation glass effect, mobile drawer, animated hover, top progress bar.
 */
const Navbar: React.FC = () => {
  const [hidden, setHidden] = React.useState(false);
  const [elevated, setElevated] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const lastY = React.useRef(0);
  const ticking = React.useRef(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const THRESHOLD = 8;
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          const y = window.scrollY || 0;
          setElevated(y > 4);

          // page progress
          const doc = document.documentElement;
          const total = doc.scrollHeight - doc.clientHeight;
          const pct = total > 0 ? Math.min(100, (y / total) * 100) : 0;
          setProgress(pct);

          const diff = y - lastY.current;
          if (diff > THRESHOLD) setHidden(true);
          else if (diff < -THRESHOLD) setHidden(false);

          lastY.current = y;
          ticking.current = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    // lock body scroll when drawer is open
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
      role="banner"
    >
      {/* Thin scroll progress bar */}
      <div
        className="h-0.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      <nav
        className={[
          "px-4 md:px-6",
          "backdrop-blur supports-[backdrop-filter]:bg-white/65 bg-white/80",
          elevated ? "shadow-sm ring-1 ring-black/5" : "shadow-none ring-0",
        ].join(" ")}
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between py-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3" aria-label="TrueSun Home">
            <img
              src="https://truesun.in/wp-content/uploads/2018/01/cropped-final_logo-1.png"
              alt="TrueSun Logo"
              className="h-10 w-auto object-contain"
            />
            {/* Optional wordmark fallback
            <span className="text-xl font-extrabold tracking-wide text-orange-600">True</span>
            <span className="text-xl font-extrabold tracking-wide text-gray-900">Sun</span> */}
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-7 md:flex">
            {menuItems.map(({ icon: Icon, label, href }, i) => (
              <li key={i} className="relative">
                <a
                  href={href}
                  className="group inline-flex items-center gap-2 text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50 rounded-md px-1 py-1"
                >
                  <Icon className="text-[14px] opacity-70 transition-transform group-hover:-translate-y-0.5" />
                  <span>{label}</span>
                  <span className="pointer-events-none absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}

            {/* CTA */}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 px-5 py-2 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(251,146,60,0.6)] transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 outline-none ring-0 transition-colors hover:bg-gray-900/5 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={[
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <aside
          className={[
            "absolute right-0 top-0 h-full w-80 max-w-[86%] transform bg-white shadow-2xl transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Menu"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <a href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <img
                src="https://truesun.in/wp-content/uploads/2018/01/cropped-final_logo-1.png"
                alt="TrueSun Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
            <button
              className="rounded-md p-2 text-gray-700 hover:bg-gray-900/5"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <nav className="px-3 py-4">
            <ul className="space-y-1">
              {menuItems.map(({ icon: Icon, label, href }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/50"
                  >
                    <Icon className="text-[15px] opacity-80" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-gray-100 pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(251,146,60,0.6)]"
              >
                Contact Us
              </a>
            </div>
          </nav>

          <div className="mt-auto px-5 py-4 text-xs text-gray-500">
            © {new Date().getFullYear()} TrueSun. All rights reserved.
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;

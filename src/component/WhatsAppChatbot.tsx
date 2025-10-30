"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, Sparkles, Sun, Zap, Building2, Home } from "lucide-react";

/* -------------------- Helpers (mobile-safe) -------------------- */
function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  const ua = (navigator.userAgent || "").toLowerCase();
  return /android|iphone|ipad|ipod|iemobile|blackberry|mobile/.test(ua);
}

/** Build a WhatsApp URL that works broadly on mobile + desktop.
 * - Mobile: prefer api.whatsapp.com (more reliable on iOS/Android browsers)
 * - Desktop: web.whatsapp.com; fallback to api.whatsapp.com
 */
function buildWhatsAppLink(phone: string, text: string, mobile = false) {
  const encoded = encodeURIComponent(text);
  if (mobile) {
    // mobile browser → api.whatsapp.com is safest
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
  }
  // desktop (WhatsApp Web); if user isn't logged in, browser will prompt
  return `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
}

/* -------------------- Component -------------------- */
type Props = {
  /** Digits only, no +. Example: 919876543210 */
  phoneNumber?: string;
  companyName?: string;
  prefill?: string;
  logoUrl?: string;
  autoOpenDelayMs?: number; // e.g., 3000 to auto open once per session
};

export default function WhatsAppSolarDock({
  phoneNumber = "919876543210", // <-- put your real number (no +)
  companyName = "TrueSun Solar",
  prefill = "Hello TrueSun team! I’m interested in installing solar panels. Please share more details.",
  logoUrl,
  autoOpenDelayMs = 0,
}: Props) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [message, setMessage] = useState(prefill);

  useEffect(() => {
    setIsMobile(isMobileDevice() || window.innerWidth < 768);
  }, []);

  // Optional: one-time auto open per session
  useEffect(() => {
    if (!autoOpenDelayMs) return;
    if (sessionStorage.getItem("truesun_wa_dock_opened")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("truesun_wa_dock_opened", "1");
    }, autoOpenDelayMs);
    return () => clearTimeout(t);
  }, [autoOpenDelayMs]);


  /** Mobile fix:
   * - On mobile, opening in the same tab avoids popup blockers (Safari/iOS).
   * - On desktop, open a new tab for WhatsApp Web.
   */
  const openWhatsApp = (override?: string) => {
    const finalText = override ? `${override}\n\n${prefill}` : message;
    const url = buildWhatsAppLink(phoneNumber, finalText, isMobile);

    if (isMobile) {
      window.location.href = url; // same-tab for mobile reliability
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const quickReplies = [
    { label: "Get Quote", icon: <Sparkles className="h-3.5 w-3.5" /> },
    { label: "3kW + Subsidy", icon: <Sun className="h-3.5 w-3.5" /> },
    { label: "5kW + Subsidy", icon: <Zap className="h-3.5 w-3.5" /> },
    { label: "Residential", icon: <Home className="h-3.5 w-3.5" /> },
    { label: "Commercial", icon: <Building2 className="h-3.5 w-3.5" /> },
  ];

  return (
    <>
      {/* ===== Bottom Sheet (glass) ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed z-90 right-[max(1rem,env(safe-area-inset-right))] 
                       bottom-[calc(5.5rem+max(0px,env(safe-area-inset-bottom)))]
                       w-[94vw] max-w-[380px] overflow-hidden
                       rounded-2xl border border-white/15 bg-white/80
                       shadow-[0_18px_60px_rgba(7,27,15,0.25)] backdrop-blur-md"
            role="dialog"
            aria-label="WhatsApp contact"
          >
            {/* Header chip */}
            <div className="flex items-center gap-3 px-4 py-3 bg-linear-to-r from-[#071B0F] via-[#0F7F34] to-[#0DB02B] text-white">
              <div className="h-9 w-9 rounded-full bg-white/15 ring-1 ring-white/25 grid place-items-center overflow-hidden">
                {logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logoUrl} alt="Logo" className="h-9 w-9 object-cover" />
                ) : (
                  <MessageCircle className="h-5 w-5" />
                )}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold truncate">{companyName}</div>
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[11px] text-white/90">Online • Replies in minutes</span>
                </div>
              </div>
            </div>

            {/* Greeting */}
            <div className="px-4 pt-3">
              <div className="rounded-xl border border-black/5 bg-white/80 p-3 text-[13px] text-gray-800">
                👋 Hi! We can help with pricing, subsidy eligibility, and site visits.
              </div>
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-3 flex flex-wrap gap-2">
              {quickReplies.map(({ label, icon }) => (
                <button
                  key={label}
                  onClick={() => openWhatsApp(label)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 transition hover:bg-gray-50"
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {/* Composer */}
            <div className="px-4 pb-4">
              <div className="flex items-end gap-2">
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message…"
                  className="flex-1 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-gray-300"
                />
                <button
                  onClick={() => openWhatsApp()}
                  className="h-11 w-11 rounded-xl bg-linear-to-br from-[#0DB02B] to-[#0F7F34] text-white grid place-items-center shadow-lg hover:shadow-xl transition"
                  aria-label="Send on WhatsApp"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Pill Dock Button ===== */}
      <div
        className="fixed z-95 right-[max(1rem,env(safe-area-inset-right))] 
                   bottom-[max(1rem,calc(env(safe-area-inset-bottom)+1rem))]"
      >
        <motion.button
          whileHover={{ scale: 1.04, boxShadow: "0 14px 36px rgba(13,176,43,0.35)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Chat on WhatsApp"
          className="group inline-flex items-center gap-2 rounded-full bg-linear-to-br from-[#0DB02B] to-[#0F7F34] px-4 py-3 text-white shadow-lg focus:outline-none"
          style={{ boxShadow: "0 12px 28px rgba(13,176,43,0.28)" }}
        >
          {/* Solar glow ring */}
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/25">
            <span className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-70 transition bg-[#FFC527]/50" />
            <MessageCircle className="relative h-5 w-5" />
          </span>
          <span className="hidden sm:inline text-sm font-semibold">
            {open ? "Close" : "Chat with us"}
          </span>
        </motion.button>
      </div>
    </>
  );
}

"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  MessageCircle,
  Send,
  X,
  Sparkles,
  Sun,
  Zap,
  Home,
  Building2,
  Phone,
  Mail,
} from "lucide-react";

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  const ua = (navigator.userAgent || "").toLowerCase();
  return /android|iphone|ipad|ipod|iemobile|blackberry|mobile/.test(ua);
}

function buildWhatsAppLink(phone: string, text: string, mobile = false) {
  const encoded = encodeURIComponent(text);
  return mobile
    ? `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
}

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

export type QuickReply = {
  label: string;
  value?: string;
  icon?: React.ReactNode;
};

export type WhatsAppDockProps = {
  phoneNumber?: string;
  companyName?: string;
  subtitle?: string;
  prefill?: string;
  logoUrl?: string;
  brand?: { from?: string; to?: string; ring?: string };
  quickReplies?: QuickReply[];
  footerText?: string;
  showTypingIndicator?: boolean;
};

/* Variants */
const quickReplyVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.28, ease: EASE_OUT },
  }),
};

/* Confetti */
type Particle = {
  id: number;
  x: number;
  y: number;
  r: number;
  rot: number;
  vx: number;
  vy: number;
  life: number;
  hue: number;
};

export default function WhatsAppDockPro({
  phoneNumber = "919876543210",
  companyName = "TrueSun Solar",
  subtitle = "Your Solar Experts",
  prefill = "Hello! I’m interested in installing solar panels. Please share more details.",
  logoUrl,
  brand = { from: "#0DB02B", to: "#0F7F34", ring: "#FFC527" },
  quickReplies = [
    { label: "Get Quote", icon: <Sparkles className="h-3.5 w-3.5" /> },
    { label: "3kW + Subsidy", icon: <Sun className="h-3.5 w-3.5" /> },
    { label: "5kW + Subsidy", icon: <Zap className="h-3.5 w-3.5" /> },
    { label: "Residential", icon: <Home className="h-3.5 w-3.5" /> },
    { label: "Commercial", icon: <Building2 className="h-3.5 w-3.5" /> },
  ],
  footerText = "Call: +91 98765 43210 · info@truesunsolar.com",
  showTypingIndicator = true,
}: WhatsAppDockProps) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [message, setMessage] = useState(prefill);
  const [showTyping, setShowTyping] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const panelRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const fabRef = useRef<HTMLButtonElement | null>(null);
  const [fabOffset, setFabOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMobile(isMobileDevice() || (typeof window !== "undefined" && window.innerWidth < 768));
  }, []);

  // typing animation
  useEffect(() => {
    if (open && showTypingIndicator) {
      setShowTyping(true);
      const timer = setTimeout(() => setShowTyping(false), 2000);
      return () => clearTimeout(timer);
    }
    setShowTyping(false);
  }, [open, showTypingIndicator]);

  const openWhatsApp = (override?: string) => {
    const finalText = override ? `${override}\n\n${prefill}` : message;
    const url = buildWhatsAppLink(phoneNumber, finalText, isMobile);
    if (isMobile) window.location.href = url;
    else window.open(url, "_blank", "noopener,noreferrer");
  };

  /* ---- Interactions remain untouched ---- */

  const handleMouseMovePanel = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = panelRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const maxTilt = 6;
      setTilt({ rx: dy * -maxTilt, ry: dx * maxTilt });
    },
    [prefersReducedMotion]
  );

  const handleMouseLeavePanel = useCallback(() => setTilt({ rx: 0, ry: 0 }), []);

  const handleMouseMoveFab = useCallback(
    (e: React.MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = fabRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const strength = 6;
      setFabOffset({ x: dx * strength, y: dy * strength });
    },
    [prefersReducedMotion]
  );

  const handleMouseLeaveFab = useCallback(() => setFabOffset({ x: 0, y: 0 }), []);

  const burstConfetti = useCallback(
    (atX: number, atY: number) => {
      if (prefersReducedMotion) return;
      const N = 16;
      const news: Particle[] = Array.from({ length: N }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / N + Math.random() * 0.6;
        const speed = 80 + Math.random() * 90;
        return {
          id: Date.now() + i,
          x: atX,
          y: atY,
          r: 2 + Math.random() * 3,
          rot: Math.random() * 360,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 60,
          life: 800 + Math.random() * 600,
          hue: Math.floor(Math.random() * 40) + 40,
        };
      });
      setParticles((p) => p.concat(news));
      setTimeout(() => {
        setParticles((p) => p.filter(() => false));
      }, 1600);
    },
    [prefersReducedMotion]
  );

  const [ripple, setRipple] = useState<{ x: number; y: number; key: number } | null>(null);

  const sendBtnRef = useRef<HTMLButtonElement | null>(null);
  const onSend = () => {
    if (sendBtnRef.current) {
      const rect = sendBtnRef.current.getBoundingClientRect();
      burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
    openWhatsApp();
  };

  const onQuickReplyClick = (label: string, value?: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, key: Date.now() });
    openWhatsApp(value || label);
  };

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="wa-panel-wrap"
            className="fixed right-6 bottom-24 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              aria-hidden
              className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full blur-3xl"
              style={{ background: `${brand.from}33` }}
              animate={{ x: [0, 8, -6, 0], y: [0, -6, 6, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: EASE_IN_OUT }}
            />

            <motion.div
              aria-hidden
              className="absolute -top-10 -right-8 h-40 w-40 rounded-full blur-3xl"
              style={{ background: `${brand.to}2e` }}
              animate={{ x: [0, -6, 8, 0], y: [0, 6, -6, 0] }}
              transition={{ repeat: Infinity, duration: 11, ease: EASE_IN_OUT }}
            />

            <motion.div
              ref={panelRef}
              onMouseMove={handleMouseMovePanel}
              onMouseLeave={handleMouseLeavePanel}
              style={{ transformStyle: "preserve-3d", rotateX: tilt.rx, rotateY: tilt.ry }}
            >
              <motion.div
                className="relative p-[1.2px] rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(120deg, ${brand.from}, ${brand.to})`,
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <div className="w-[94vw] max-w-[360px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_18px_60px_rgba(7,27,15,0.25)] backdrop-blur">
                  {/* header */}
                  <motion.div
                    className="flex items-center gap-3 px-4 py-3 text-white"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${brand.from}, ${brand.to})`,
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  >
                    <motion.div
                      className="h-9 w-9 rounded-full ring-2 grid place-items-center overflow-hidden"
                      whileHover={{ scale: 1.08, rotate: 1.5 }}
                      transition={{ type: "spring", stiffness: 320, damping: 18 }}
                    >
                      {logoUrl ? (
                        <img src={logoUrl} alt="Logo" className="h-9 w-9 object-cover" />
                      ) : (
                        <MessageCircle className="h-5 w-5" />
                      )}
                    </motion.div>

                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate">{companyName}</div>
                      <div className="text-[11px] text-white/90">{subtitle}</div>
                    </div>

                    <button onClick={() => setOpen(false)} className="ml-auto rounded-md p-1 hover:bg-white/10">
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>

                  {/* Intro */}
                  <div className="px-4 pt-3">
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: EASE_OUT }}
                      className="relative rounded-xl border border-black/45 bg-white/80 p-3 text-[13px] text-gray-800"
                    >
                      👋 Hi! We can help with pricing, subsidy eligibility, and site visits.
                    </motion.div>

                    {/* Typing */}
                    <AnimatePresence>
                      {showTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25, ease: EASE_OUT }}
                          className="mt-2 ms-2 flex items-center gap-1 text-xs text-gray-500"
                        >
                          <div className="flex gap-1">
                            {[0, 0.15, 0.3].map((d) => (
                              <motion.span
                                key={d}
                                className="h-2 w-2 rounded-full bg-gray-400"
                                animate={{ scale: [1, 1.25, 1] }}
                                transition={{ repeat: Infinity, duration: 1, delay: d, ease: EASE_IN_OUT }}
                              />
                            ))}
                          </div>
                          <span>Typing...</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* quick replies */}
                  <motion.div
                    className="relative px-4 py-3 flex flex-wrap gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                  >
                    {quickReplies.map(({ label, value, icon }, i) => (
                      <motion.button
                        key={label}
                        custom={i}
                        variants={quickReplyVariants}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={onQuickReplyClick(label, value)}
                        className="relative overflow-hidden inline-flex items-center gap-1.5 rounded-full border border-gray-800/50 bg-white px-3 py-1.5 text-xs text-gray-700"
                      >
                        {/* ripple */}
                        <AnimatePresence>
                          {ripple && (
                            <motion.span
                              key={ripple.key}
                              className="absolute rounded-full"
                              style={{
                                left: ripple.x - 2,
                                top: ripple.y - 2,
                                width: 4,
                                height: 4,
                                background: `${brand.from}33`,
                              }}
                              initial={{ opacity: 0.6, scale: 1 }}
                              animate={{ opacity: 0, scale: 18 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.6, ease: EASE_OUT }}
                            />
                          )}
                        </AnimatePresence>

                        <motion.span className="inline-block">{icon}</motion.span>
                        <span>{label}</span>
                      </motion.button>
                    ))}
                  </motion.div>

                  {/* input */}
                  <div className="px-4 pb-4">
                    <div className="flex items-end gap-2">
                      <textarea
                        rows={2}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 rounded-xl border border-gray-400 bg-white px-3 py-2 text-sm text-gray-900"
                      />
                      <motion.button
                        ref={sendBtnRef}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onSend}
                        className="relative h-11 w-11 rounded-xl text-white grid place-items-center shadow-lg"
                        style={{ backgroundImage: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }}
                      >
                        <Send className="h-5 w-5 relative z-10" />
                      </motion.button>
                    </div>
                  </div>

                  {/* footer */}
                  <div className="px-4 pb-3 border-t border-gray-100 pt-2">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Phone className="h-3 w-3" />
                      <Mail className="h-3 w-3" />
                      <span>{footerText}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* confetti */}
      <AnimatePresence>
        {particles.length > 0 && (
          <div className="pointer-events-none fixed inset-0 z-60">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ x: p.x, y: p.y, rotate: p.rot, opacity: 1 }}
                animate={{ x: p.x + p.vx, y: p.y + p.vy + 200, rotate: p.rot + 180 }}
                exit={{ opacity: 0 }}
                transition={{ duration: p.life / 1000, ease: EASE_OUT }}
                style={{
                  position: "absolute",
                  width: p.r * 2,
                  height: p.r * 6,
                  borderRadius: 2,
                  background: `hsl(${p.hue} 85% 55%)`,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        ref={fabRef}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onMouseMove={handleMouseMoveFab}
        onMouseLeave={handleMouseLeaveFab}
        animate={{
          x: fabOffset.x,
          y: fabOffset.y,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen((v) => !v)}
        className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-lg"
        style={{ backgroundImage: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">
          {open ? "Close" : "Chat with us"}
        </span>
      </motion.button>
    </>
  );
}

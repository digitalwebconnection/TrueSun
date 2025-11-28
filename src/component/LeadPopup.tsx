"use client";

import React from "react";

export interface LeadPopupProps {
  onClose: () => void; // ✅ THIS is what fixes the TS error
}

const LeadPopup: React.FC<LeadPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Book Your Free Site Visit
        </h2>
        <p className="mb-4 text-sm text-slate-600">
          Share your details and our TrueSun team will contact you with a custom
          solar proposal for your home or business.
        </p>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: add your submit logic (API, WhatsApp, etc.)
            onClose();
          }}
        >
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Mobile Number
            </label>
            <input
              type="tel"
              required
              placeholder="Enter your phone number"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              City / Location
            </label>
            <input
              type="text"
              placeholder="Eg. Thane, Pune, Navi Mumbai"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Approx. Monthly Electricity Bill (₹)
            </label>
            <input
              type="number"
              placeholder="Eg. 3000"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-linear-to-r from-[#FF8A3C] to-[#FFB347] py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-300/60 transition hover:brightness-105 hover:shadow-lg"
          >
            Submit & Request Call Back
          </button>

          <p className="mt-2 text-center text-[11px] text-slate-500">
            By submitting, you agree to be contacted by TrueSun for solar
            consultation. No spam, only relevant updates.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;

"use client";

import React, { useState, type JSX } from "react";

type Status = {
  loading: boolean;
  message: string;
  ok: boolean | null;
};

function ContactForm(): JSX.Element {
  const [status, setStatus] = useState<Status>({
    loading: false,
    message: "",
    ok: null,
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", ok: null });

    const form = e.currentTarget;
    const fd = new FormData(form);

    // append required access key (you provided this)
    fd.append("access_key", "379a21a3-04ba-4421-80fd-31fe44886bf5");

    // create subject with "Sun" title and append owner email for reference
    const name = fd.get("name")?.toString().trim() || "Website Visitor";
    fd.append("subject", `Sun - Owner Email | New enquiry from ${name}`);
    fd.append("owner_email", "info@truesun.in");
    fd.append("source", "Contact Page - TrueSun");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data?.success) {
        setStatus({
          loading: false,
          message: "Thanks — enquiry submitted successfully.",
          ok: true,
        });
        form.reset();
      } else {
        setStatus({
          loading: false,
          message: data?.message || "Submission failed. Please try again.",
          ok: false,
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        message: "Network error. Please try again.",
        ok: false,
      });
    }
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={onSubmit} aria-live="polite">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Company (optional)
          </label>
          <input
            name="company"
            type="text"
            placeholder="Company name"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">
            Phone / WhatsApp
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+91..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">
          Requirement Type
        </label>
        <select
          name="requirementType"
          className="w-full rounded-lg border border-slate-600/50 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
        >
          <option>Rooftop – Residential</option>
          <option>Rooftop – Commercial</option>
          <option>Industrial / Factory</option>
          <option>Corporate / Multi-site</option>
          <option>Solar + Carbon Consulting</option>
          <option>Other / Not sure</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">City / Location</label>
        <input
          name="city"
          type="text"
          placeholder="City, State"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-slate-700">
          Describe your requirement
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="E.g. 200 kW rooftop for factory, monthly bill, timeline..."
          required
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none transition"
        />
      </div>

      <input type="hidden" name="source" value="Contact Page - TrueSun" />

      <button
        type="submit"
        disabled={status.loading}
        className="mt-2 bg-linear-to-r from-blue-900 via-blue-700 to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 disabled:opacity-60"
      >
        {status.loading ? "Sending..." : "Submit enquiry"}
      </button>

      <p className="text-[11px] text-slate-500 mt-2">
        We respect your privacy. Your details are used only to connect you with the
        TrueSun team.
      </p>

      {status.message && (
        <div
          className={`mt-3 text-sm ${status.ok ? "text-emerald-600" : "text-rose-600"}`}
          role={status.ok ? "status" : "alert"}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-16">
      {/* ========= PAGE TITLE ========= */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        {/* Small pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm border border-slate-200 px-4 py-1 text-[11px] font-medium text-slate-500 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          We respond within 24 hours
        </div>

        <h1 className="text-4xl font-semibold text-slate-900">Contact TrueSun Energy</h1>

        {/* Gradient underline */}
        <div className="mt-3 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-blue-500 via-amber-400 to-emerald-500" />

        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
          Have a question about rooftop solar, industrial power savings, or large-scale projects? Our team will guide you with clarity, feasibility insights and accurate savings numbers.
        </p>
      </div>

      {/* ========= CONTACT CARDS ========= */}
      <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3 mb-16">
        {/* Phone */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/60 transition-all duration-300 ease-out">
          <p className="text-xs uppercase tracking-wide text-slate-500">Call / WhatsApp</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">Talk to our team</h3>
          <p className="mt-2 text-sm text-slate-600">For quick queries or site visit scheduling.</p>
          <div className="mt-4 space-y-1 text-sm">
            <a href="tel:+918850845149" className="text-blue-600 hover:underline inline-flex items-center gap-1"><span>📞</span> +918850845149</a>
            <a href="https://wa.me/918850845149" target="_blank" rel="noreferrer" className="text-emerald-600 hover:underline inline-flex items-center gap-1"><span>💬</span> Chat on WhatsApp</a>
          </div>
        </div>

        {/* Email */}
        <div className="rounded-2xl border border-slate-600/50 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/60 transition-all duration-300 ease-out">
          <p className="text-xs uppercase tracking-wide text-slate-500">Email</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">Project & Partnerships</h3>
          <p className="mt-2 text-sm text-slate-600">Send RFQs, energy bills, or proposal requests.</p>
          <div className="mt-4 text-sm space-y-1">
            <a href="mailto:info@truesun.in" className="text-blue-600 hover:underline break-all">info@truesun.in</a>
          </div>
        </div>

        {/* Address */}
        <div className="rounded-2xl border border-slate-600/50 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/60 transition-all duration-300 ease-out">
          <p className="text-xs uppercase tracking-wide text-slate-500">Office</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">Visit TrueSun</h3>
          <p className="mt-2 text-sm text-slate-600">Meet our engineering team and discuss your requirement.</p>
          <p className="mt-4 text-sm text-slate-700">
            Birla Centurion, Wing - B, 3rd Floor,
            Pandurang Budhkar Marg, Century Mills,
            Worli, Mumbai, Maharashtra 400030
          </p>
          <p className="mt-3 text-xs text-slate-500">Appointments preferred · Parking available</p>
        </div>
      </div>

      {/* ========= FORM + MAP ========= */}
      <div className="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-2">
        {/* ---- FORM ---- */}
        <div className="p-6 border border-slate-600/50 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
          <h2 className="text-2xl font-semibold text-slate-900">Send us your requirement</h2>
          <p className="mt-2 text-sm text-slate-500">Share a few details and our team will get back with feasibility, savings estimate and next steps.</p>

          <ContactForm />
        </div>

        {/* ---- MAP + DETAILS ---- */}
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden border border-slate-600/50 shadow-sm bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
            <div className="aspect-4/3 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6698030560838!2d72.87295050000002!3d19.122136299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83cc36fad13%3A0x66f93803f8a326db!2sTRUESUN%20ENERGY%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1763466856754!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                title="TrueSun Location"
              />
            </div>
          </div>

          <div className="p-6 border border-slate-900/50 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
            <h3 className="text-lg font-semibold text-slate-900">Areas We Serve</h3>
            <p className="mt-2 text-sm text-slate-600">TrueSun supports projects across Maharashtra and major industrial cities across India.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="text-slate-500">Primary Regions</p>
                <p> Maharashtra</p>
              </div>
              <div>
                <p className="text-slate-500">Typical Project Size</p>
                <p>20 kW – 5 MW+ (C&amp;I + Industrial)</p>
              </div>
            </div>

            <p className="text-xs text-slate-500 mt-4 border-t pt-3">
              Fast-track support available for urgent RFQs, tenders and corporate feasibility studies. Mention deadlines in your message for priority support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

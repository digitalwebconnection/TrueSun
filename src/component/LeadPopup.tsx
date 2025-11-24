"use client";

import { useEffect, useState, type FormEvent } from "react";

type LeadPopupProps = {
    delayMs?: number; // optional, default 4000ms
};

const LeadPopup: React.FC<LeadPopupProps> = ({ delayMs = 4000 }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Show popup after delay
        const timer = setTimeout(() => {
            setOpen(true);
        }, delayMs);

        return () => clearTimeout(timer);
    }, [delayMs]);

    const handleClose = () => setOpen(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: integrate with your API / form handler
        // Example: console.log("Form submitted");
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-120 flex items-center justify-center bg-black/50 backdrop-blur-lg"
            aria-modal="true"
            role="dialog"
        >
            {/* Click outside to close */}
            <div
                className="absolute inset-0"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Popup card */}
            <div className="relative z-130 w-[90%] max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    aria-label="Close popup"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Badge */}
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Limited-Time Consultation
                </div>

                {/* Heading */}
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Get a <span className="text-orange-500">Free Solar Consultation</span>
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    Share a few details and our team will help you understand savings,
                    subsidy options, and the best solar solution for your property.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label className="mb-1 block text-xs font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Enter your name"
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-orange-200 transition focus:border-orange-400 focus:ring-2"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                required
                                placeholder="Enter your phone"
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-orange-200 transition focus:border-orange-400 focus:ring-2"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-orange-200 transition focus:border-orange-400 focus:ring-2"
                            />
                        </div>

                        <div className="">
                            <label className="mb-1 block text-xs font-medium text-gray-700">
                                Type of Property
                            </label>
                            <select
                                required
                                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-orange-200 transition focus:border-orange-400 focus:ring-2"
                            >
                                <option value="">Select an option</option>
                                <option value="residential">Residential</option>
                                <option value="commercial">Commercial / Industrial</option>
                                <option value="society">Society / High-rise</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="">
                            <label className="mb-1 block text-xs font-medium text-gray-700">
                                Monthly Electricity Bill (Approx.)
                            </label>
                            <select
                                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-orange-200 transition focus:border-orange-400 focus:ring-2"
                            >
                                <option value="">Select range</option>
                                <option value="0-2000">₹0 – ₹2,000</option>
                                <option value="2000-5000">₹2,000 – ₹5,000</option>
                                <option value="5000-10000">₹5,000 – ₹10,000</option>
                                <option value="10000+">₹10,000+</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1 block text-xs font-medium text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Mumbai , Thane"
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-orange-200 transition focus:border-orange-400 focus:ring-2"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="mb-1 block text-xs font-medium text-gray-700">
                                Any specific requirement? (Optional)
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Rooftop space, KW requirement, timeline, etc."
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-orange-200 transition focus:border-orange-400 focus:ring-2"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    >
                        Get My Free Solar Consultation
                    </button>


                </form>
            </div>
        </div>
    );
};

export default LeadPopup;

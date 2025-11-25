"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DEFAULT_ITEMS = [
  {
    id: "cost",
    question: "How much does solar cost?",
    answer:
      "It depends on system size, quality of equipment, subsidy eligibility, and installation complexity.",
  },
  {
    id: "timeline",
    question: "How long does installation take?",
    answer:
      "The actual installation takes 1–3 days. Approvals, permits, and net-metering add 1–3 weeks.",
  },
  {
    id: "maintenance",
    question: "Do solar panels require maintenance?",
    answer:
      "Very little. Cleaning every few months and routine inspection ensures peak performance.",
  },
  {
    id: "battery",
    question: "Is a battery necessary?",
    answer:
      "Not required for grid-tied systems. Batteries are optional for backup and energy independence.",
  },
];

export default function PremiumFAQ({ items = DEFAULT_ITEMS }) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600">All you need to know about going solar.</p>
      </header>

      <div className="space-y-4">
        {items.map(({ id, question, answer }) => {
          const isOpen = openItem === id;

          return (
            <div
              key={id}
              className="rounded-2xl border border-gray-300 bg-white p-5 shadow-sm transition hover:shadow-lg hover:border-orange-300"
            >
              <button
                onClick={() => setOpenItem(isOpen ? null : id)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {question}
                </span>

                <ChevronDown
                  className={`h-6 w-6 text-gray-500 transition-transform ${
                    isOpen ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 leading-6">{answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

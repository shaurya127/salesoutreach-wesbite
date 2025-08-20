"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is SalesOutreach?",
    a: "SalesOutreach is an AI-powered sales automation platform that helps teams find, enrich, and engage high-quality leads—all in one place.",
  },
  {
    q: "How is it different from other tools?",
    a: "We combine accurate prospecting, verified contact data, and AI-driven outreach to ensure your emails land in inboxes (not spam).",
  },
  {
    q: "What core features do you offer?",
    a: "AI Prospecting, Contact Enrichment and Outreach in one place",
  },
  {
    q: "How will SalesOutreach help my team?",
    a: "AI-driven emails (3X replies), no more manual prospecting (10+ hours saved), and guaranteed deliverability",
  },
  {
    q: "What is SalesOutreach's pricing policy?",
    a: "We offer a flexible, usage-based pricing structure tailored to your team's needs. Pricing is usage based, with no hidden platform fees—and comprehensive support included with each package. To get a detailed pricing quote, simply reach out and request pricing",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 relative bg-[#0a0e23]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Common Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Haven’t found what you’re looking for?
            <br />
            Contact us
          </p>
          <a
            href="mailto:hello@salesoutreach.io"
            className="text-blue-400 text-lg font-medium"
          >
            hello@salesoutreach.io
          </a>
        </div>
        <div className="space-y-4 w-full">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="border-b border-white/10">
              <button
                className="w-full flex justify-between items-center py-5 text-left text-white text-lg font-medium focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                {faq.q}
                <span className="text-2xl font-bold">
                  {open === idx ? "–" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 text-gray-300 text-base">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

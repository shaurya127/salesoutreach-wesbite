"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: 199,
    credits: "3,000 Credits",
    features: [
      "Prospecting Access",
      "Enrichment Access",
      "Outbound Access",
      "No Credits Rollover",
      "1 User",
      "Email and Chat Support",
    ],
    cta: "Buy Now",
  },
  {
    name: "Pro",
    price: 399,
    credits: "10,000 Credits",
    features: [
      "Prospecting Access",
      "Enrichment Access",
      "Outbound Access",
      "Credits Rollover",
      "3 Users",
      "Email and Chat Support",
    ],
    cta: "Buy Now",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: null,
    credits: "Custom Credits",
    features: [
      "Prospecting Access",
      "Enrichment Access",
      "Outbound Access",
      "Credits Rollover",
      "3+ Users",
      "Dedicated Account Manager",
    ],
    cta: "Talk to Sales",
  },
];

const PricingSection = () => {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="pricing" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose A Plan
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible Pricing for Teams of All Sizes
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span
              className={`text-lg font-medium ${
                !yearly ? "text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </span>
            <button
              className={`w-14 h-8 rounded-full bg-white/10 border border-white/20 flex items-center px-1 transition-all duration-300 ${
                yearly ? "justify-end" : "justify-start"
              }`}
              onClick={() => setYearly((y) => !y)}
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg"
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </button>
            <span
              className={`text-lg font-medium ${
                yearly ? "text-white" : "text-gray-400"
              }`}
            >
              Yearly
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:bg-white/10 transition-all duration-300 group ${
                plan.badge ? "ring-2 ring-green-400/60" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-2 mt-4">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold mb-2">
                {plan.price !== null ? (
                  <>
                    <span className="align-top text-2xl font-medium">$</span>
                    {yearly ? plan.price * 12 * 0.8 : plan.price}
                  </>
                ) : (
                  <span>Custom Price</span>
                )}
              </div>
              <div className="text-gray-400 mb-4">
                {plan.price !== null ? (
                  <span>per month</span>
                ) : (
                  <span>per month</span>
                )}
              </div>
              <ul className="text-left space-y-2 mb-6">
                <li className="font-semibold text-green-400">{plan.credits}</li>
                {plan.features.map((f) => (
                  <li key={f} className="text-gray-300 flex items-center gap-2">
                    <span className="text-green-400">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-bold text-lg mt-auto ${
                  plan.cta === "Talk to Sales"
                    ? "bg-gradient-to-r from-blue-400 to-cyan-500 text-white"
                    : "bg-gradient-to-r from-green-400 to-emerald-500 text-black"
                } hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

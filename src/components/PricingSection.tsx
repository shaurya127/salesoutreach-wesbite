"use client";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    subtitle: "For starters",
    price: 199,
    features: [
      "3000 Credits",
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
    subtitle: "For small team",
    price: 399,
    features: [
      "10,000 Credits",
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
    subtitle: "For large team",
    price: null,
    features: [
      "Custom Credits",
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
  const [yearly, setYearly] = useState(false);
  return (
    <section className="w-full bg-[#0a0e23] py-20 sm:py-32 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Title & Toggle */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-center text-white mb-4">
          Choose A Plan
        </h2>
        <p className="text-lg text-gray-400 text-center mb-8">
          Flexible Pricing for Teams of All Sizes
        </p>
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-lg font-medium ${
              !yearly ? "text-white" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <button
            className={`w-14 h-8 rounded-full bg-[#181f36] border border-white/20 flex items-center px-1 transition-all duration-300 ${
              yearly ? "justify-end" : "justify-start"
            }`}
            onClick={() => setYearly((y) => !y)}
            aria-label="Toggle pricing"
          >
            <span
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg transition-all duration-300 ${
                yearly ? "translate-x-6" : "translate-x-0"
              }`}
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
        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-stretch justify-center">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className="relative flex flex-col bg-[#10162b] border border-[#232946] rounded-[2rem] shadow-2xl px-8 py-10 min-h-[600px] max-w-[400px] mx-auto items-center"
              style={{
                boxShadow:
                  "0 0 80px 0 rgba(28,36,76,0.25), 0 2px 24px 0 #10162b",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute top-6 right-6 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </span>
              )}
              {/* Plan Name & Subtitle */}
              <div className="w-full flex flex-col items-start mb-6">
                <span className="text-lg font-semibold text-white mb-1">
                  {plan.name}
                </span>
                <span className="text-base text-gray-400 mb-2">
                  {plan.subtitle}
                </span>
                <div className="w-full h-px bg-white/10 my-2" />
              </div>
              {/* Price */}
              <div className="w-full flex flex-col items-start mb-6">
                <span className="text-4xl sm:text-5xl font-bold text-white mb-1">
                  {plan.price !== null ? (
                    <>
                      ${yearly ? Math.round(plan.price * 12 * 0.8) : plan.price}
                    </>
                  ) : (
                    "Custom Price"
                  )}
                </span>
                <span className="text-base text-gray-400">per month</span>
              </div>
              {/* Features */}
              <ul className="w-full flex-1 flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-base text-gray-200"
                  >
                    <span className="text-green-400 text-lg">✔</span> {f}
                  </li>
                ))}
              </ul>
              {/* CTA Button */}
              <button className="w-full mt-auto py-4 rounded-xl bg-[#2563eb] text-white text-lg font-bold shadow-lg hover:bg-[#1d4ed8] transition">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

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
    <section className="w-full bg-[#0a0e23] py-20 sm:py-32 px-4 sm:px-6" id="pricing">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Title & Toggle */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-center text-white mb-4">
          Choose A Plan
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Flexible Pricing for Teams of All Sizes
        </p>
        
        {/* Perfect Toggle Button matching the image */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <span
            className={`text-lg font-medium transition-colors duration-300 ${
              !yearly ? "text-white" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <button
            className={`relative w-16 h-8 rounded-full ${yearly ? "bg-[#3a6ef2]" : "bg-gray-400"}  p-1 transition-all duration-300 ease-in-out `
}            onClick={() => setYearly((y) => !y)}
            aria-label="Toggle pricing period"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out ${
                yearly ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-lg font-medium transition-colors duration-300 ${
              yearly ? "text-white" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>
        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch justify-center max-w-6xl">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className="relative flex flex-col bg-[#0f1629] border border-[#1e293b] rounded-3xl shadow-2xl px-8 py-10 w-full max-w-[380px] mx-auto"
              style={{
            boxShadow:
              "0 0 5px 0 #1c244c, inset 0 -10px 30px #1c244c",
          }}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {plan.badge}
                </span>
              )}
              
              {/* Plan Name & Subtitle */}
              <div className="flex flex-col items-start mb-8 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {plan.subtitle}
                </p>
              </div>
              
              {/* Price */}
              <div className="flex flex-col items-start mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">
                    {plan.price !== null ? (
                      <>
                        ${yearly ? Math.round(plan.price * 12 * 0.8) : plan.price}
                      </>
                    ) : (
                      "Custom Price"
                    )}
                  </span>
                </div>
                <span className="text-sm text-gray-400 mt-1">per month</span>
              </div>
              
              {/* Features */}
              <ul className="flex-1 flex flex-col gap-4 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <svg 
                      className="w-5 h-5 text-green-400 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="w-full flex items-center justify-center">

              <button className="w-fit  px-4 py-3 rounded-xl bg-[#3a6ef2] text-white text-lg font-semibold shadow-md hover:bg-[#1e60ef] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {plan.cta}
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

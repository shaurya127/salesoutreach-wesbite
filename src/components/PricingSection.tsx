"use client";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    subtitle: "For starters",
    monthPrice: 199,
    yearPrice: 199,
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
  monthPrice: 499,
    yearPrice: 399,
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
    <section className="w-full bg-[#0a0e23] py-16 sm:py-20 md:py-24 lg:py-32 px-3 sm:px-4 md:px-6" id="pricing">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Title & Toggle */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center text-white mb-3 sm:mb-4 px-4">
          Choose A Plan
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center mb-8 sm:mb-10 md:mb-12 px-4">
          Flexible Pricing for Teams of All Sizes
        </p>
        
        {/* Perfect Toggle Button matching the image */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16 px-4">
          <span
            className={`text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 ${
              !yearly ? "text-white" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
          <button
            className={`relative w-14 h-7 sm:w-16 sm:h-8 rounded-full ${yearly ? "bg-[#3a6ef2]" : "bg-gray-400"}  p-1 transition-all duration-300 ease-in-out `
}            onClick={() => setYearly((y) => !y)}
            aria-label="Toggle pricing period"
          >
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full shadow-lg transform transition-transform duration-300 ease-in-out ${
                yearly ? "translate-x-7 sm:translate-x-8" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 ${
              yearly ? "text-white" : "text-gray-400"
            }`}
          >
            Yearly
          </span>
        </div>
        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch justify-center max-w-6xl px-3 sm:px-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="relative flex flex-col bg-[#0f1629] border border-[#1e293b] rounded-2xl sm:rounded-3xl shadow-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 w-full max-w-[320px] sm:max-w-[350px] md:max-w-[380px] mx-auto hover:scale-[105%] transition-transform duration-500"
              style={{
            boxShadow:
              "0 0 5px 0 #1c244c, inset 0 -10px 30px #1c244c",
          }}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                  {plan.badge}
                </span>
              )}
              
              {/* Plan Name & Subtitle */}
              <div className="flex flex-col items-start mb-6 sm:mb-8 mt-2 sm:mt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {plan.subtitle}
                </p>
              </div>
              
              {/* Price */}
              <div className="flex flex-col items-start mb-6 sm:mb-8">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl md:text-4xl font-medium text-white">
                    {plan.price !== null ? (
                      <>
                        ${yearly ? Math.round(plan.yearPrice) : plan.monthPrice}
                      </>
                    ) : (
                      "Custom Price"
                    )}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-400 mt-1">per month</span>
              </div>
              
              {/* Features */}
              <ul className="flex-1 flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300"
                  >
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" 
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

              <Link href="#book-demo" className="w-fit px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#3a6ef2] text-white text-sm sm:text-base md:text-lg font-semibold shadow-md hover:bg-[#1e60ef] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {plan.cta}
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

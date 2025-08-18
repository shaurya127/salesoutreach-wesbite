"use client";
import Image from "next/image";

const features = [
  {
    step: "01",
    image: "/image/howitworks_1.png",
    imageLeft: true,
    title: "Define Your Target Audience",
    desc: "Build precise customer profiles with 20+ filters (industry, revenue, demographics), so you always target the right prospects.",
  },
  {
    step: "02",
    image: "/image/howitworks_2.png",
    imageLeft: false,
    title: "Find & Verify Leads",
    desc: "Access accurate contact data, including verified emails and mobile numbers with intent signals eliminating bounced messages and gatekeepers.",
  },
  {
    step: "03",
    image: "/image/howitworks_3.png",
    imageLeft: true,
    title: "Launch Outreach",
    desc: "Our AI crafts hyper-personalized emails or use your templates in the sequences. Our email system ensures that the email lands in the inbox.",
  },
];

const HowItWorksSection = () => (
  <section className="w-full bg-[#0a0e23] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          How SalesOutreach Works?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From targeting to closing deals. Your complete outreach engine
        </p>
      </div>

      {/* Feature Steps */}
      <div className="space-y-32">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className={`relative flex flex-col lg:flex-row items-center gap-16 lg:gap-20 ${
              feature.imageLeft ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div
              className={`w-full lg:w-1/2 flex justify-center ${
                feature.imageLeft ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image Container */}
                <div className="relative w-[85%] max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-[#10172a] to-[#0a0e23] transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover rounded-3xl"
                    priority={idx === 0}
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`w-full lg:w-1/2 flex flex-col ${
                feature.imageLeft
                  ? "lg:items-start lg:text-left"
                  : "lg:items-end lg:text-right"
              } items-center text-center lg:text-left`}
            >
              <div className="max-w-lg">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Feature Highlights */}
                <div
                  className={`mt-8 flex flex-wrap gap-3 ${
                    feature.imageLeft ? "lg:justify-start" : "lg:justify-end"
                  } justify-center`}
                >
                  {idx === 0 && (
                    <>
                      <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                        20+ Filters
                      </span>
                      <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                        Industry & Revenue
                      </span>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                        Verified Emails
                      </span>
                      <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                        Intent Signals
                      </span>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                        AI-Powered
                      </span>
                      <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                        Inbox Delivery
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

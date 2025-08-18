"use client";
import Image from "next/image";

const features = [
  {
    image: "/image/howitworks_1.png",
    imageLeft: true,
    title: "Define Your Target Audience",
    desc: "Build precise customer profiles with 20+ filters (industry, revenue, demographics), so you always target the right prospects.",
  },
  {
    image: "/image/howitworks_2.png",
    imageLeft: false,
    title: "Find & Verify Leads",
    desc: "Access accurate contact data, including verified emails and mobile numbers with intent signals eliminating bounced messages and gatekeepers.",
  },
  {
    image: "/image/howitworks_3.png",
    imageLeft: true,
    title: "Launch Outreach",
    desc: "Our AI crafts hyper-personalized emails or use your templates in the sequences. Our email system ensures that the email lands in the inbox.",
  },
];

const HowItWorksSection = () => (
  <section className="w-full bg-[#0a0e23] py-20 sm:py-32 px-2 sm:px-6">
    <div className="max-w-7xl mx-auto flex flex-col gap-24">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2">
          How SalesOutreach Works?
        </h2>
        <p className="text-lg text-gray-400 mb-2">
          From targeting to closing deals. Your complete outreach engine
        </p>
      </div>
      {/* Feature Blocks */}
      {features.map((feature, idx) => (
        <div
          key={feature.title}
          className={`flex flex-col md:flex-row${
            feature.imageLeft ? "" : "-reverse"
          } items-center gap-10 md:gap-20`}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-[#10172a] to-[#0a0e23]">
              <Image
                src={feature.image}
                alt={feature.title}
                width={700}
                height={420}
                className="w-full h-auto object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-lg text-gray-300 mb-2">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksSection;

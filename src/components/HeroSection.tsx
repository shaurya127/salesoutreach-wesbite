"use client";
import Image from "next/image";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex flex-col bg-[#0a0e23] text-white pb-10">
    {/* Header Row */}
    <div className="w-full flex items-center justify-between px-4 sm:px-6 pt-6 sm:pt-8 max-w-7xl mx-auto flex-wrap gap-2">
      {/* Logo */}
      <div className="flex items-center space-x-2 sm:space-x-3 min-w-[120px]">
        <Image
          src="/image/sales_logo.png"
          alt="SalesOutreach Logo"
          width={36}
          height={36}
          className="object-contain"
          priority
        />
        <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">
          SalesOutreach
        </span>
      </div>
      {/* Nav */}
      <nav className="flex-1 flex justify-center items-center gap-6 sm:gap-12 text-base sm:text-lg min-w-[180px]">
        <a
          href="#how"
          className="text-gray-200 hover:text-white font-medium transition"
        >
          How It Works?
        </a>
        <a
          href="#pricing"
          className="text-gray-200 hover:text-white font-medium transition"
        >
          Pricing
        </a>
      </nav>
      {/* Book Demo Button */}
      <a
        href="#book-demo"
        className="border border-white/30 rounded-xl px-4 sm:px-6 py-2 text-white font-medium text-base sm:text-lg hover:bg-white/10 transition shadow-sm mt-2 sm:mt-0"
        style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)" }}
      >
        Book Demo
      </a>
    </div>
    {/* Main Content */}
    <div className="flex flex-col items-center justify-center flex-1 w-full px-2 sm:px-4 mt-10 sm:mt-16">
      <div className="mb-4 sm:mb-6">
        <span
          className="inline-block px-4 sm:px-6 py-2 rounded-full bg-[#10172a] text-blue-200 text-sm sm:text-base font-medium border border-blue-900/40 shadow-sm"
          style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)" }}
        >
          For GTM and Sales Team
        </span>
      </div>
      <h1
        className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight mb-4 sm:mb-6"
        style={{ letterSpacing: "-0.03em" }}
      >
        The All-in-One
        <br className="hidden md:block" />
        Platform to Prospect,
        <br className="hidden md:block" />
        Enrich & Outreach
      </h1>
      <p className="text-base sm:text-lg md:text-2xl text-gray-300 text-center max-w-xs sm:max-w-2xl mb-6 sm:mb-8">
        One platform for{" "}
        <span className="font-semibold text-white">finding leads</span>,{" "}
        <span className="font-semibold text-white">verifying contacts</span>,
        and{" "}
        <span className="font-semibold text-white">
          sending inbox-ready emails
        </span>{" "}
        that get replies.
      </p>
      <a
        href="#book-demo"
        className="mt-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#2563eb] text-white text-base sm:text-lg font-bold shadow-lg hover:bg-[#1d4ed8] transition"
      >
        Book Demo
      </a>
      {/* Dashboard Image with Glow */}
      <div className="relative w-full flex justify-center mt-8 sm:mt-24">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[98vw] sm:w-[90vw] max-w-2xl sm:max-w-5xl h-32 sm:h-64 bg-gradient-to-br from-blue-700/40 via-blue-500/20 to-transparent rounded-3xl blur-2xl z-0" />
        <Image
          src="/image/dashboard_1.png"
          alt="Dashboard Preview"
          width={1200}
          height={600}
          className="relative z-10 w-full max-w-2xl sm:max-w-5xl rounded-3xl shadow-2xl border border-white/10 object-cover"
          priority
        />
      </div>
    </div>
  </section>
);

export default HeroSection;

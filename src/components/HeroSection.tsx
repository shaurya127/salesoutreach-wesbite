"use client";
import Image from "next/image";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex flex-col bg-[#0a0e23] text-white pb-10">
    {/* Header Row */}
    <div className="w-full flex items-center justify-between px-8 pt-8 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/image/sales_logo.png"
          alt="SalesOutreach Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
        <span className="text-white font-bold text-2xl tracking-tight">
          SalesOutreach
        </span>
      </div>
      {/* Nav */}
      <nav className="flex-1 flex justify-center items-center gap-12">
        <a
          href="#how"
          className="text-gray-200 hover:text-white text-lg font-medium transition"
        >
          How It Works?
        </a>
        <a
          href="#pricing"
          className="text-gray-200 hover:text-white text-lg font-medium transition"
        >
          Pricing
        </a>
      </nav>
      {/* Book Demo Button */}
      <a
        href="#book-demo"
        className="border border-white/30 rounded-xl px-6 py-2 text-white font-medium text-lg hover:bg-white/10 transition shadow-sm"
        style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)" }}
      >
        Book Demo
      </a>
    </div>
    {/* Main Content */}
    <div className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-16">
      <div className="mb-6">
        <span
          className="inline-block px-6 py-2 rounded-full bg-[#10172a] text-blue-200 text-base font-medium border border-blue-900/40 shadow-sm"
          style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)" }}
        >
          For GTM and Sales Team
        </span>
      </div>
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight mb-6"
        style={{ letterSpacing: "-0.03em" }}
      >
        The All-in-One
        <br className="hidden md:block" />
        Platform to Prospect,
        <br className="hidden md:block" />
        Enrich & Outreach
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl mb-8">
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
        className="mt-2 px-8 py-4 rounded-xl bg-[#2563eb] text-white text-lg font-bold shadow-lg hover:bg-[#1d4ed8] transition"
      >
        Book Demo
      </a>
    </div>
  </section>
);

export default HeroSection;

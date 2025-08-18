"use client";
import Image from "next/image";

const DashboardPreviewSection = () => (
  <section className="py-20 relative bg-transparent">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center">
        How SalesOutreach Works?
      </h2>
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-[#0a0e23] to-[#10172a]">
          <Image
            src="/image/sales_logo.png"
            alt="Dashboard Preview"
            width={900}
            height={500}
            className="w-full h-auto object-cover opacity-80"
            priority
          />
          {/* Optionally, overlay a blue glow at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900/60 to-transparent" />
        </div>
      </div>
    </div>
  </section>
);

export default DashboardPreviewSection;

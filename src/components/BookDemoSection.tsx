"use client";

const BookDemoSection = () => (
  <section className="w-full bg-[#0a0e23] py-20 sm:py-32 px-2 sm:px-6">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
          Book a Demo
        </h2>
        <p className="text-lg sm:text-xl text-gray-400">
          Limited Demo Slots Available
        </p>
      </div>

      {/* Calendly Integration */}
      <div className="w-full flex justify-center">
        <div className="relative bg-[#10162b] border border-[#232946] rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="p-4 sm:p-8">
            <iframe
              src="https://calendly.com/shaurya1272000/30min?hide_gdpr_banner=1&background_color=0a0e23&text_color=ffffff&primary_color=2563eb"
              width="1000"
              height="700"
              frameBorder="0"
              title="Book a Demo with SalesOutreach"
              className="rounded-2xl w-full"
              style={{
                background: "transparent",
                border: "none",
                minHeight: "600px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-12">
        <p className="text-gray-400 text-base">
          Can’t find a suitable time?{" "}
          <a
            href="mailto:hello@salesoutreach.io"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Contact us directly
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default BookDemoSection;

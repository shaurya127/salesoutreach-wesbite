"use client";

const BookDemoSection = () => (
  <section className="w-full bg-gradient-to-b from-[#0a0e23] to-[#0f1428] py-16 sm:py-20 md:py-24 lg:py-32 px-3 sm:px-4 md:px-6" id="book-demo">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-14 md:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-3 sm:mb-4">
          Book a Demo
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
          Limited Demo Slots Available
        </p>
      </div>

      {/* Calendly Integration */}
      <div className="w-full flex justify-center px-2 sm:px-4">
        <div className="relative bg-gradient-to-br from-[#10162b] to-[#1a1f3a] border border-[#2d3748] rounded-xl sm:rounded-2xl lg:rounded-[2rem] shadow-2xl overflow-hidden w-full max-w-4xl">
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
           <iframe
  src="https://calendly.com/ak10012k/30min?hide_gdpr_banner=1&background_color=1a1f3a&text_color=ffffff&primary_color=3a6ef2"
 title="Book a Demo with SalesOutreach"
  className="w-full min-w-[320px] h-[700px] rounded-2xl border-0 bg-transparent"
/>

          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
        <p className="text-gray-300 text-sm sm:text-base">
          Can't find a suitable time?{" "}
          <a
            href="mailto:hello@salesoutreach.io"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
          >
            Contact us directly
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default BookDemoSection;

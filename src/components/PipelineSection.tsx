"use client";

const icons = [
  <span
    key="ai"
    className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-2xl shadow-md text-2xl"
  >
    🧬
  </span>,
  <span
    key="search"
    className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-2xl shadow-md text-2xl"
  >
    🔍
  </span>,
  <span
    key="user"
    className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-2xl shadow-md text-2xl"
  >
    👤
  </span>,
];

const PipelineSection = () => (
  <section className="w-full bg-[#0a0e23] py-16 sm:py-28 px-2 sm:px-8">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-center text-white mb-4">
        Transform Your Sales Pipeline
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-xs sm:max-w-3xl mb-10 sm:mb-16">
        Drive more conversions without scaling headcount - our AI handles the
        grunt work of prospecting to outreach so your team can focus on closing
        deals
      </p>
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center">
        {/* Left Card */}
        <div
          className="flex flex-col h-[420px] md:h-[540px] w-full max-w-[420px] bg-[#060a1e] border border-[#1c244c] rounded-[32px] shadow-2xl p-6 md:p-14 mx-auto mb-8 md:mb-0 justify-center items-center relative"
          style={{
            boxShadow:
              "0 0 80px 0 rgba(28,36,76,0.5), inset 0 -20px 60px #1c244c",
          }}
        >
          <div className="w-full flex flex-col items-center mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Find With Precision
            </h3>
            <p className="text-gray-200 text-center mb-6 text-base sm:text-lg">
              Our AI-powered prospecting delivers verified leads with accurate
              contact data.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center w-full">
            <div
              className="relative w-full bg-[#10162b] rounded-2xl shadow-lg p-5 flex flex-col justify-center overflow-hidden"
              style={{ minHeight: 180, maxWidth: 340 }}
            >
              {/* Grid overlay only behind this area */}
              <div className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
                <svg
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ minHeight: 100 }}
                >
                  <defs>
                    <pattern
                      id="gridleft"
                      width="48"
                      height="48"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 48 0 L 0 0 0 48"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        opacity="0.13"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridleft)" />
                </svg>
              </div>
              <div className="flex flex-col gap-2 z-10 w-full items-start">
                <div className="text-3xl sm:text-5xl font-extrabold text-white leading-none">
                  100%
                </div>
                <div className="text-gray-200 text-base sm:text-lg mb-1">
                  Verified Leads
                </div>
                <div className="flex items-center gap-2 sm:gap-4 mb-1">
                  {icons}
                </div>
                <div className="text-gray-300 text-xs sm:text-base mt-1">
                  Prospect smarter. With data that’s always right
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div
          className="flex flex-col h-[420px] md:h-[540px] w-full max-w-[420px] bg-[#060a1e] border border-[#1c244c] rounded-[32px] shadow-2xl p-6 md:p-14 mx-auto justify-center items-center relative"
          style={{
            boxShadow:
              "0 0 80px 0 rgba(28,36,76,0.5), inset 0 -20px 60px #1c244c",
          }}
        >
          <div className="w-full flex flex-col items-center mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Outreach That Converts
            </h3>
            <p className="text-gray-200 text-center mb-6 text-base sm:text-lg">
              Human-like emails that reliably land in inboxes and generate
              replies.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center w-full">
            <div
              className="relative w-full bg-[#10162b] rounded-2xl shadow-lg p-5 flex flex-col justify-center overflow-hidden"
              style={{ minHeight: 180, maxWidth: 340 }}
            >
              {/* Grid overlay only behind this area */}
              <div className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
                <svg
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  style={{ minHeight: 100 }}
                >
                  <defs>
                    <pattern
                      id="gridright"
                      width="48"
                      height="48"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 48 0 L 0 0 0 48"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        opacity="0.13"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridright)" />
                </svg>
              </div>
              <div className="flex flex-col gap-2 z-10 w-full items-start">
                <div className="text-3xl sm:text-5xl font-extrabold text-white leading-none">
                  90%+
                </div>
                <div className="text-gray-200 text-base sm:text-lg mb-1">
                  Optimized for Best Deliverability
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 w-full max-w-xs">
                  <div className="flex items-center w-full">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-[#181f36] border border-[#2a335c] text-white text-xs sm:text-base font-semibold w-full justify-start shadow-sm">
                      <span className="text-lg sm:text-xl">➕</span>
                      <span>Inbox Delivery</span>
                    </span>
                  </div>
                  <div className="flex items-center w-full">
                    <span className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-[#181f36] border border-[#2a335c] text-white text-xs sm:text-base font-semibold w-full justify-start shadow-sm">
                      <span className="text-lg sm:text-xl">⚡</span>
                      <span>Automated Workflows</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PipelineSection;

"use client";

const icons = [
  <span
    key="ai"
    className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-md text-3xl"
  >
    🧬
  </span>,
  <span
    key="search"
    className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-md text-3xl"
  >
    🔍
  </span>,
  <span
    key="user"
    className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-md text-3xl"
  >
    👤
  </span>,
];

const innerCardClass =
  "relative w-full max-w-[340px] mx-auto bg-[#10162b] rounded-2xl shadow-lg p-8 flex flex-col justify-center overflow-hidden";

const PipelineSection = () => (
  <section className="w-full bg-[#0a0e23] py-24 px-4">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-5xl md:text-7xl font-extrabold text-center text-white mb-4">
        Transform Your Sales Pipeline
      </h2>
      <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mb-16">
        Drive more conversions without scaling headcount - our AI handles the
        grunt work of prospecting to outreach so your team can focus on closing
        deals
      </p>
      <div className="w-full flex flex-col md:flex-row gap-12 items-stretch justify-center mt-6">
        {/* Left Card */}
        <div
          className="flex-1 min-w-[340px] max-w-[420px] flex flex-col items-center justify-start bg-[#060a1e] border border-[#1c244c] rounded-[32px] shadow-2xl p-10 md:p-[40px] overflow-hidden"
          style={{
            boxShadow: "0 8px 40px 0 #1c244c, inset 0 -10px 40px #1c244c",
            flex: "1 0 0px",
            height: "min-content",
          }}
        >
          <div className="w-full flex flex-col items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Find With Precision
            </h3>
            <p className="text-gray-200 text-center mb-8">
              Our AI-powered prospecting delivers verified leads with accurate
              contact data.
            </p>
          </div>
          <div
            className={innerCardClass}
            style={{ height: 320, alignItems: "flex-start" }}
          >
            {/* Grid overlay only behind this area */}
            <div className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
              <svg
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ minHeight: 140 }}
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
            <div className="flex flex-col gap-4 z-10 w-full items-start">
              <div className="text-5xl font-extrabold text-white leading-none">
                100%
              </div>
              <div className="text-gray-200 text-lg mb-2">Verified Leads</div>
              <div className="flex items-center gap-4 mb-2">{icons}</div>
              <div className="text-gray-300 text-base mt-2">
                Prospect smarter. With data that’s always right
              </div>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div
          className="flex-1 min-w-[340px] max-w-[420px] flex flex-col items-center justify-start bg-[#060a1e] border border-[#1c244c] rounded-[32px] shadow-2xl p-10 md:p-[40px] overflow-hidden"
          style={{
            boxShadow: "0 8px 40px 0 #1c244c, inset 0 -10px 40px #1c244c",
            flex: "1 0 0px",
            height: "min-content",
          }}
        >
          <div className="w-full flex flex-col items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Outreach That Converts
            </h3>
            <p className="text-gray-200 text-center mb-8">
              Human-like emails that reliably land in inboxes and generate
              replies.
            </p>
          </div>
          <div
            className={innerCardClass}
            style={{ height: 320, alignItems: "flex-start" }}
          >
            {/* Grid overlay only behind this area */}
            <div className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden">
              <svg
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ minHeight: 140 }}
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
            <div className="flex flex-col gap-4 z-10 w-full items-start">
              <div className="text-5xl font-extrabold text-white leading-none">
                90%+
              </div>
              <div className="text-gray-200 text-lg mb-2">
                Optimized for Best Deliverability
              </div>
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <div className="flex items-center w-full">
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#181f36] border border-[#2a335c] text-white text-base font-semibold w-full justify-start shadow-sm">
                    <span className="text-xl">➕</span>
                    <span>Inbox Delivery</span>
                  </span>
                </div>
                <div className="flex items-center w-full">
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#181f36] border border-[#2a335c] text-white text-base font-semibold w-full justify-start shadow-sm">
                    <span className="text-xl">⚡</span>
                    <span>Automated Workflows</span>
                  </span>
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

"use client";

const icons = [
  <div
    key="ai"
    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-1.5 sm:p-2 bg-white rounded-xl sm:rounded-2xl shadow-md text-lg sm:text-2xl z-10"
  >
    <svg 
   xmlns="http://www.w3.org/2000/svg" 
   width="128" 
   height="128" 
   viewBox="0 0 512 512" 
   fill="none" 
   stroke="black" 
   strokeWidth="20"
   stroke-linecap="round"
   stroke-linejoin="round"
   className="w-5 h-5 sm:w-6 sm:h-6"
 >
  
   <rect x="156" y="156" width="200" height="200" rx="32" ry="32" />

  
   <line x1="196" y1="216" x2="316" y2="216" />
   <line x1="196" y1="256" x2="316" y2="256" />
   <line x1="196" y1="296" x2="316" y2="296" />


   <line x1="256" y1="36" x2="256" y2="156" />
   <circle cx="256" cy="36" r="16" fill="black"/>

  
   <line x1="256" y1="476" x2="256" y2="356" />
   <circle cx="256" cy="476" r="16" fill="black"/>

  
   <line x1="36" y1="256" x2="156" y2="256" />
   <circle cx="36" cy="256" r="16" fill="black"/>


   <line x1="476" y1="256" x2="356" y2="256" />
   <circle cx="476" cy="256" r="16" fill="black"/>


   <line x1="96" y1="96" x2="176" y2="176" />
   <circle cx="96" cy="96" r="16" fill="black"/>

  
   <line x1="416" y1="96" x2="336" y2="176" />
   <circle cx="416" cy="96" r="16" fill="black"/>

  
   <line x1="96" y1="416" x2="176" y2="336" />
   <circle cx="96" cy="416" r="16" fill="black"/>

  
   <line x1="416" y1="416" x2="336" y2="336" />
   <circle cx="416" cy="416" r="16" fill="black"/>
 </svg>

   </div>,
   <div
     key="search"
     className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-md text-lg sm:text-2xl z-10"
   >
    <svg
   fill="#000000"
   width="600px"
   height="600px"
   viewBox="0 0 512 512"
   xmlns="http://www.w3.org/2000/svg"
   className="w-5 h-5 sm:w-6 sm:h-6"
 >
   <title>search</title>
   <path d="M416 448L319 351Q277 383 224 383 181 383 144 362 107 340 86 303 64 266 64 223 64 180 86 143 107 106 144 85 181 63 224 63 267 63 304 85 341 106 363 143 384 180 384 223 384 277 351 319L448 416 416 448ZM223 336Q270 336 303 303 335 270 335 224 335 177 303 145 270 112 223 112 177 112 144 145 111 177 111 224 111 270 144 303 177 336 223 336Z"/>
 </svg>

   </div>,
   <div
     key="user"
     className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 p-1.5 sm:p-2 bg-white rounded-xl sm:rounded-2xl shadow-md text-lg sm:text-2xl z-10"
   >
     <svg 
   width="120" 
   height="120" 
   viewBox="0 0 24 24" 
   fill="none" 
   xmlns="http://www.w3.org/2000/svg"
   className="w-5 h-5 sm:w-6 sm:h-6"
 >

   <circle cx="12" cy="8" r="4" stroke="#000" strokeWidth="2" fill="none"/>
   <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#000" strokeWidth="2" fill="none"/>

  
   <circle cx="18" cy="18" r="5" fill="#000"/>
   <path d="M16.5 18l1.5 1.5 3-3" stroke="white" strokeWidth="1" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>

   </div>,
];

const PipelineSection = () => (
  <section className="w-full bg-[#0a0e23] py-12 sm:py-16 md:py-20 lg:pt-36 lg:pb-20 px-3 sm:px-6 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-white mb-3 sm:mb-4 max-w-xl px-4">
        Transform Your Sales Pipeline
      </h2>
      <p className="text-sm sm:text-base md:text-[16px] text-[#9ea3bf] text-center max-w-xs sm:max-w-2xl md:max-w-3xl mb-8 sm:mb-10 md:mb-16 px-4 leading-relaxed">
        Drive more conversions without scaling headcount - our AI handles the
        grunt work of prospecting to outreach so your team can focus on closing
        deals
      </p>
      <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center justify-center px-2">
        {/* Left Card */}
        <div
          className="flex flex-col h-[380px] sm:h-[420px] md:h-[500px] lg:h-[580px] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] bg-[#060a1e] border border-[#1c244c] rounded-2xl sm:rounded-[24px] md:rounded-[32px] shadow-2xl p-4 sm:p-6 md:p-8 lg:p-14 mx-auto mb-6 lg:mb-0 justify-center items-center relative"
          style={{
            boxShadow:
              "0 0 5px 0 #1c244c, inset 0 -10px 30px #1c244c",
          }}
        >
          <div className="w-full flex flex-col items-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white text-center mb-2 px-2">
              Find With Precision
            </h3>
            <p className="text-center mt-2 sm:mt-3 mb-4 sm:mb-6 text-xs sm:text-sm text-[#9ea3bf] px-3 leading-relaxed">
              Our AI-powered prospecting delivers verified leads with accurate
              contact data.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center w-full">
            <div
              className="relative w-full bg-[#0a0e23] rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col justify-center overflow-hidden"
              style={{ minHeight: 160, maxWidth: 280 }}
            >
              {/* Grid overlay only behind this area */}
              <div className="absolute inset-0 w-full h-full pointer-events-none rounded-xl sm:rounded-2xl overflow-hidden" >
                <svg
                 
                   width="100%"
                   height="100%"
                   className="absolute inset-0 opacity-40"
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
                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-none">
                   100%
                 </div>
                 <div className="text-[#9ea3bf] text-xs sm:text-sm md:text-base mb-2 sm:mb-4 mt-1 sm:mt-2">
                   Verified Leads
                 </div>
                 <div className="flex items-center  gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 relative w-full justify-between">
                   <div className="border-white border-b-2 absolute top-1/2 w-full z-0"></div>
                   {icons}
                 </div>
                 <div className="text-[#9ea3bf] text-xs sm:text-sm mt-1 leading-relaxed">
                   Prospect smarter. With data that's always right
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* Right Card */}
         <div
           className="flex flex-col h-[380px] sm:h-[420px] md:h-[500px] lg:h-[580px] w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] bg-[#060a1e] border border-[#1c244c] rounded-2xl sm:rounded-[24px] md:rounded-[32px] shadow-2xl p-4 sm:p-6 md:p-8 lg:p-14 mx-auto justify-center items-center relative"
           style={{
             boxShadow:
               "0 0 5px 0 #1c244c, inset 0 -10px 30px #1c244c",
           }}
         >
           <div className="w-full flex flex-col items-center mb-4 sm:mb-6">
             <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white text-center mb-2 px-2">
               Outreach That Converts
             </h3>
             <p className="text-center mb-4 sm:mb-6 text-xs sm:text-sm mt-2 sm:mt-3 text-[#9ea3bf] px-3 leading-relaxed">
               Human-like emails that reliably land in inboxes and generate
               replies.
             </p>
           </div>
           <div className="flex-1 flex flex-col justify-center w-full">
             <div
               className="relative w-full bg-[#0a0e23] rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col justify-center overflow-hidden"
               style={{ minHeight: 160, maxWidth: 280 }}
             >
               {/* Grid overlay only behind this area */}
               <div className="absolute inset-0 w-full h-full pointer-events-none rounded-xl sm:rounded-2xl overflow-hidden">
                 <svg
                   width="100%"
                   height="100%"
                   className="absolute inset-0 opacity-40"
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
                 <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-none">
                   90%+
                 </div>
                 <div className="text-[#9ea3bf] text-xs sm:text-sm md:text-base mt-1 sm:mt-2 mb-2 sm:mb-3">
                   Optimized for Best Deliverability
                 </div>
                 <div className="flex flex-col gap-2 sm:gap-3 w-full max-w-xs">
                   <div className="flex items-center w-full">
                     <span className="inline-flex items-center gap-2 px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl bg-[#181f36] border border-[#2a335c] text-white text-xs sm:text-sm md:text-base font-medium w-full justify-start shadow-sm">
                       <span className="text-sm sm:text-lg md:text-xl border border-[#2a335c] p-1.5 sm:p-2 rounded-lg inline-flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 64 64" fill="none">
   
   
   <circle cx="32" cy="24" r="10" stroke="#fff" stroke-width="3" fill="none"/>
   
  
   <path d="M16 50c4-10 12-14 16-14s12 4 16 14" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
   
   
   
   <path d="M48 43v10M43 48h10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
 </svg>
 </span>
                       <span>Inbox Delivery</span>
                     </span>
                   </div>
                   <div className="flex items-center w-full">
                     <span className="inline-flex items-center gap-2 px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-lg sm:rounded-xl bg-[#181f36] border border-[#2a335c] text-white text-xs sm:text-sm md:text-base font-medium w-full justify-start shadow-sm">
                        <span className="text-sm sm:text-lg md:text-xl border border-[#2a335c] p-1.5 sm:p-2 rounded-lg inline-flex items-center justify-center">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512"
         className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current"
       >
         <path d="M426.666667,384 L426.666667,426.666667 L0,426.666667 L0,384 L426.666667,384 Z M277.333333,0 L384,106.666667 L149.333333,341.333333 L42.6666667,341.333333 L42.6666667,234.666667 L277.333333,0 Z M207.079667,130.583 L85.3333333,252.330667 L85.3333333,298.666667 L131.669333,298.666667 L253.415667,176.919 L207.079667,130.583 Z M277.333333,60.3306667 L237.249667,100.413 L283.585667,146.749 L323.669333,106.666667 L277.333333,60.3306667 Z" />
       </svg>
     </span>
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

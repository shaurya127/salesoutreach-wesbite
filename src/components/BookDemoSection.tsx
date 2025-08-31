"use client";

import { useEffect } from 'react';

const BookDemoSection = () => {
  useEffect(() => {
    // Cal.com inline embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});
      
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: {"layout":"month_view"},
        calLink: "sales-outreach-10rhw9/30min",
      });
      
      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
  <section className="w-full bg-gradient-to-b from-[#0a0e23] to-[#0a0e23] py-16 sm:py-20 md:py-24 lg:py-32 px-3 sm:px-4 md:px-6" id="book-demo">
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

      {/* Cal.com Integration */}
      <div className="w-full flex justify-center px-2 sm:px-4">
        <div className="relative  overflow-hidden w-full max-w-5xl">
          <div className="p-3 sm:p-4 md:p-6 lg:p-3">
            <div 
              style={{width:'100%', height:'700px', overflow:'scroll'}} 
              id="my-cal-inline-30min"
              className="rounded-2xl"
            ></div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
        <p className="text-gray-300 text-sm sm:text-base">
          Can&apos;t find a suitable time?{" "}
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
};

export default BookDemoSection;

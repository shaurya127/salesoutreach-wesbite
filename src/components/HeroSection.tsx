"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#0a0e23] to-[#0a0e23] text-white overflow-hidden">
    {/* Background Image (bottom inside) */}
    <div className="absolute -bottom-[60%] left-0 right-0 w-full z-0  ">
      <Image
        src="/image/bg.png"
        alt="Background Decorative"
        width={1000}
        height={500}
        className="w-full object-cover"
        priority
      />
    </div>

    {/* Main Content */}
    <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-4 sm:px-6 lg:px-8 pt-36 pb-4">
      {/* Badge */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span 
          className="inline-flex items-center px-6 py-3 text-white text-sm font-medium"
          style={{
            borderBottomWidth: '1px',
            borderColor: '#1c244c',
            borderLeftWidth: '1px',
            borderRightWidth: '1px',
            borderStyle: 'solid',
            borderTopWidth: '1px',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#060a1e',
            borderRadius: '32px',
            boxShadow: 'inset 0 2px 6px #3a6ef269',
            display: 'flex',
            flex: 'none',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '10px',
            height: 'min-content',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          For GTM and Sales Team
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[88px] xl:text-[88px] font-semibold text-center leading-[1.02] mb-8 max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ letterSpacing: "-0.025em" }}
      >
        <span className="block">The All-in-One</span>
        <span className="block">Platform to Prospect,</span>
        <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
          Enrich & Outreach
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="textlgg sm:text-md md:text-lg text-gray-500 text-center max-w-2xl mb-12 leading-relaxed px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        One platform for{" "}
        <span className="text-gray-400 font-semibold">finding leads</span>,{" "}
        <span className="text-gray-400 font-semibold">verifying contacts</span>, and{" "}
        <span className="text-gray-400 font-semibold">sending inbox-ready emails</span>{" "}
        that get replies.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a
          href="#book-demo"
          className="inline-flex items-center px-8 py-3 bg-[#3a6ef2] hover:bg-[#3066f1] text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Book Demo
        </a>
      </motion.div>

      {/* Dashboard Preview */}
      <motion.div
        className="relative w-full flex justify-center mt-16 lg:mt-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
       
        {/* Dashboard Image */}
        <div className="relative z-10 w-full max-w-[68rem] ">
          <Image
            src="/image/dashboard_1.png"
            alt="Dashboard Preview"
            width={1200}
            height={600}
            className="w-full rounded-2xl lg:rounded-3xl shadow-2xl border border-white/10"
            priority
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

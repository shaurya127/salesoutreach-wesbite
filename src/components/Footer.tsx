"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      className="relative  bg-[#0a0e23] overflow-clip"
      style={{
        
        color: "var(--token-7a9e47d0-5397-40af-b396-a04512fe1d9e)",
        fontFamily: "sans-serif",
        fontSize: "12px",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image (bottom inside) */}
      <div className="absolute -bottom-[420%] left-0 right-0 w-full z-0 overflow-hidden transform scale-x-[-1] rotate-[2deg]">
        <Image
          src="/image/bg.png"
          alt="Background Decorative"
          width={1000}
          height={500}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Subtle textured background effect */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Content - Company name and tagline */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 sm:space-y-8 lg:space-y-0">
          {/* Left Section - Company name and tagline */}
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center space-y-3 sm:space-y-4 lg:space-y-0 lg:space-x-6 lg:space-x-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Company Name */}
            <motion.h2
              className="text-2xl sm:text-3xl font-bold"
              style={{
                color: "var(--token-7a9e47d0-5397-40af-b396-a04512fe1d9e)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              SalesOutreach
            </motion.h2>

            <div className="hidden lg:block border-r-2  border-gray-300 opacity-45  h-7 "></div>

            {/* Tagline */}
            <motion.p
              className="text-sm sm:text-base md:text-lg font-medium text-left max-w-sm sm:max-w-md lg:max-w-md"
              style={{
                color: "var(--token-7a9e47d0-5397-40af-b396-a04512fe1d9e)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find Leads, Enrich Data & Outreach in One Platform
            </motion.p>
          </motion.div>

          {/* Right Section - Home Link */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/"
              className="text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 hover:text-white"
              style={{
                color: "var(--token-ebfdfc6f-a0e8-414d-b30e-eeab99d6e438)",
              }}
            >
              Home
            </Link>
          </motion.div>
        </div>
   <div className="border-b  border-gray-400 opacity-45 mt-8 sm:mt-10"></div>
        {/* Horizontal Separator Line */}
        <motion.div
          className="w-full h-px my-6 sm:my-8"
          style={{
            backgroundColor:
              "#00000",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        
        <motion.div
          className="flex justify-between items-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className="text-xs sm:text-sm"
            style={{
              color: "var(--token-7a9e47d0-5397-40af-b396-a04512fe1d9e)",
            }}
          >
            © SalesOutreach Inc.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

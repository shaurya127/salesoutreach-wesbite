"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--token-0a6023b7-956f-483f-b3b2-22ca5cf79ece) 0%, var(--token-30adfd80-ecab-4819-b6d1-8070a9e3e5af) 100%)",
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
      {/* Subtle textured background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Content - Company name and tagline */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          {/* Left Section - Company name and tagline */}
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Company Name */}
            <motion.h2
              className="text-3xl font-bold"
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

            {/* Vertical Divider */}
            <div
              className="hidden lg:block w-px h-8"
              style={{
                backgroundColor:
                  "var(--token-7a9e47d0-5397-40af-b396-a04512fe1d9e)",
              }}
            ></div>

            {/* Tagline */}
            <motion.p
              className="text-lg font-medium text-left max-w-md"
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
              className="text-lg font-medium transition-colors duration-300 hover:text-white"
              style={{
                color: "var(--token-ebfdfc6f-a0e8-414d-b30e-eeab99d6e438)",
              }}
            >
              Home
            </Link>
          </motion.div>
        </div>

        {/* Horizontal Separator Line */}
        <motion.div
          className="w-full h-px my-8"
          style={{
            backgroundColor:
              "var(--token-ebfdfc6f-a0e8-414d-b30e-eeab99d6e438)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Bottom Section - Copyright */}
        <motion.div
          className="flex justify-between items-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className="text-sm"
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

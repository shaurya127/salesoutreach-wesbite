"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: "How It Works?", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0e23]/30 backdrop-blur-lg "
          : "bg-transparent"
      }`}
      
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 ">
            
              <Image
                src="/image/sales_logo.png"
                alt="SalesOutreach Logo"
                width={40}
                height={40}
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white rounded-lg sm:rounded-xl p-[2px]"
              />
              <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                SalesOutreach
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-6 sm:space-x-8 lg:space-x-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-white/80 hover:text-white text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Book Demo Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="#book-demo"
              className="bg-[#1e293b] hover:bg-[#334155] text-white px-4 sm:px-6 py-2 lg:px-8 lg:py-3 rounded-lg font-medium transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 text-sm sm:text-base"
            >
              Book Demo
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-1.5 sm:p-2 rounded-md text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="px-3 sm:px-4 py-4 sm:py-6 bg-black/95 backdrop-blur-lg border-t border-white/10"
          variants={{
            open: { y: 0 },
            closed: { y: -20 },
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-3 sm:space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block text-white/90 hover:text-white py-2.5 sm:py-3 text-base sm:text-lg font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="pt-3 sm:pt-4 border-t border-white/10"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isMobileMenuOpen
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
              }
              transition={{ delay: 0.3 }}
            >
              <Link
                href="#book-demo"
                className="block w-full bg-[#1e293b] hover:bg-[#1c293d] text-white text-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 border border-slate-600/30 text-sm sm:text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Demo
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;

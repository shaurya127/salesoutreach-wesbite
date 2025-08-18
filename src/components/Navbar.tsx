"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-8 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
          className="px-4 py-6 bg-black/95 backdrop-blur-lg border-t border-white/10"
          variants={{
            open: { y: 0 },
            closed: { y: -20 },
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4">
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
                  className="block text-white/90 hover:text-white py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="pt-4 space-y-3 border-t border-white/10">
              <motion.button
                className="block w-full text-left text-white/90 hover:text-white py-2 transition-colors duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.4 }}
              >
                Sign In
              </motion.button>
              <motion.button
                className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium px-6 py-3 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isMobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.5 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;

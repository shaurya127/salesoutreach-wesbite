'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 lg:px-8 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-lg opacity-30"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Image
              src="/image/sales_logo.png"
              alt="SalesOutreach Logo"
              width={40}
              height={40}
              className="relative z-10 object-contain"
              priority
            />
          </div>
          <span className="text-white font-bold text-xl transition-all duration-300 group-hover:text-green-400">
            SalesOutreach
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={item.href}
                className="text-white/90 hover:text-white transition-all duration-200 relative group py-2"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            className="text-white/90 hover:text-white transition-all duration-200 px-4 py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            Sign In
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium px-6 py-2 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="button-bg"
            />
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-6 h-6 relative">
            <motion.span
              className="absolute top-0 left-0 w-full h-0.5 bg-white origin-center"
              animate={isMobileMenuOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-2.5 left-0 w-full h-0.5 bg-white"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-5 left-0 w-full h-0.5 bg-white origin-center"
              animate={isMobileMenuOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div 
          className="px-4 py-6 bg-black/95 backdrop-blur-lg border-t border-white/10"
          variants={{
            open: { y: 0 },
            closed: { y: -20 }
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.4 }}
              >
                Sign In
              </motion.button>
              <motion.button
                className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium px-6 py-3 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API', href: '#api' },
        { name: 'Integrations', href: '#integrations' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Help Center', href: '#help' },
        { name: 'Community', href: '#community' },
        { name: 'Status', href: '#status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'GDPR', href: '#gdpr' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'GitHub', href: '#', icon: '⚡' },
    { name: 'Discord', href: '#', icon: '💬' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* Top Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={itemVariants}
        >
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-lg opacity-40"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <Image
                  src="/image/sales_logo.png"
                  alt="SalesOutreach Logo"
                  width={48}
                  height={48}
                  className="relative z-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                SalesOutreach
              </span>
            </motion.div>
            
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed max-w-md"
              variants={itemVariants}
            >
              Transform your sales process with AI-powered outreach tools that help you connect with prospects and close more deals.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-500 hover:text-black transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <span className="text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-400">
              Get the latest updates on new features and sales insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="newsletter-button-bg"
                />
                <span className="relative z-10">Subscribe</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
        >
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              className="space-y-4"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 + 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 + 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
                    >
                      {link.name}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-white/10"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              © 2024 SalesOutreach. All rights reserved. Made with ❤️ for sales teams worldwide.
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookies
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Bottom Border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </motion.footer>
  );
};

export default Footer;

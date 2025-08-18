"use client";
import { motion } from "framer-motion";

const FeaturesSection = () => (
  <section id="features" className="py-20 relative bg-transparent">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Find With Precision & Outreach That Converts
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Our AI-powered prospecting delivers verified leads with accurate
          contact data. Human-like emails that reliably land in inboxes and
          generate replies.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex gap-4">
            <span>🧬</span>
            <span>🔍</span>
            <span>👤</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            100% Verified Leads
          </h3>
          <p className="text-gray-400">
            Prospect smarter. With data that’s always right.
          </p>
        </motion.div>
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex gap-4">
            <span>📬</span>
            <span>⚡</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            90%+ Optimized for Best Deliverability
          </h3>
          <p className="text-gray-400">Inbox Delivery & Automated Workflows</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;

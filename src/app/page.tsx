'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl"
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
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Sales Process
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              AI-powered outreach tools that help you connect with prospects and close more deals. 
              Scale your sales efforts with intelligent automation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.button
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">Start Free Trial</span>
              </motion.button>

              <motion.button
                className="border-2 border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {[
                { number: '500K+', label: 'Active Users' },
                { number: '98%', label: 'Success Rate' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="py-20 relative">
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
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to scale your outreach and close more deals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Outreach',
                description: 'Intelligent email sequences that adapt to prospect behavior',
                icon: '🤖'
              },
              {
                title: 'Smart Analytics',
                description: 'Deep insights into your sales performance and opportunities',
                icon: '📊'
              },
              {
                title: 'CRM Integration',
                description: 'Seamlessly connect with your existing sales tools',
                icon: '🔗'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

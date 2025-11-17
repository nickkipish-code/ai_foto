'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export default function ContactForm() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="w-32 h-32 rounded-full bg-[#E8E8E8] flex items-center justify-center border-4 border-[#D0D0D0] shadow-lg">
              <BookOpen className="w-16 h-16 text-[#4A4A4A]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Lead Generation Freebie
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border-2 border-[#D0D0D0] rounded-lg focus:border-[#4A4A4A] focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border-2 border-[#D0D0D0] rounded-lg focus:border-[#4A4A4A] focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gold-button w-full"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


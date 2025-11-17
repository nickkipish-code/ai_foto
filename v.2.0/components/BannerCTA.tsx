'use client'

import { motion } from 'framer-motion'

export default function BannerCTA() {
  return (
    <section className="py-12 px-4 bg-[#F5F5F5]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="premium-card bg-gradient-to-r from-[#E8E8E8] to-[#D0D0D0] flex items-center justify-between flex-wrap gap-4"
        >
          <div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Headline
            </h3>
            <p className="text-[#5A5A5A]">Call to Action Message</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="gold-button"
          >
            E.g. Bonus
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}


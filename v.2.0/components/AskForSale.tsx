'use client'

import { motion } from 'framer-motion'
import { Cloud, DollarSign } from 'lucide-react'

export default function AskForSale() {
  return (
    <section className="py-16 px-4 bg-[#F5F5F5]">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Headline
            </h2>
            <p className="text-xl text-[#5A5A5A] mb-4 font-semibold">
              Sub Headline
            </p>
            <p className="text-[#8A8A8A] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#D0D0D0] flex items-center justify-center">
                  <span className="text-[#4A4A4A] font-bold">✓</span>
                </div>
                <span className="text-[#5A5A5A]">Feature benefit 1</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#D0D0D0] flex items-center justify-center">
                  <span className="text-[#4A4A4A] font-bold">✓</span>
                </div>
                <span className="text-[#5A5A5A]">Feature benefit 2</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#E8E8E8] to-[#D0D0D0] flex items-center justify-center mb-6 border-4 border-white shadow-xl">
              <Cloud className="w-24 h-24 text-[#4A4A4A]" />
            </div>
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="w-8 h-8 text-[#4A4A4A]" />
              <span className="text-4xl font-bold text-[#2C2C2C]">99</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="gold-button text-xl px-8"
            >
              Buy Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


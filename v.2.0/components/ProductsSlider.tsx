'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

const products = [
  { id: 1, title: 'Product 1', description: 'Description' },
  { id: 2, title: 'Product 2', description: 'Description' },
  { id: 3, title: 'Product 3', description: 'Description' },
]

export default function ProductsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % products.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-[#2C2C2C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Headline
          </h2>
          <p className="text-[#5A5A5A]">Sub Headline</p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card text-center group"
              >
                <div className="w-full h-48 bg-[#E8E8E8] rounded-lg mb-4 flex items-center justify-center border-2 border-[#D0D0D0] group-hover:border-[#4A4A4A] transition-colors">
                  <ImageIcon className="w-16 h-16 text-[#9E9E9E]" />
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button className="p-2 rounded-full bg-[#E8E8E8] hover:bg-[#D0D0D0] transition-colors">
                    <ChevronLeft className="w-5 h-5 text-[#4A4A4A]" />
                  </button>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4A4A4A]" />
                    <div className="w-2 h-2 rounded-full bg-[#D0D0D0]" />
                  </div>
                  <button className="p-2 rounded-full bg-[#E8E8E8] hover:bg-[#D0D0D0] transition-colors">
                    <ChevronRight className="w-5 h-5 text-[#4A4A4A]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


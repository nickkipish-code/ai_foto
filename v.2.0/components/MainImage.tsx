'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MainImage() {
  return (
    <section className="py-12 px-4 bg-[#F5F5F5]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] bg-gradient-to-br from-[#E8E8E8] to-[#D0D0D0] rounded-lg flex items-center justify-center border-2 border-[#D0D0D0]"
        >
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border-2 border-[#D0D0D0]">
              <svg className="w-16 h-16 text-[#9E9E9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[#8A8A8A] text-sm">Головне зображення</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


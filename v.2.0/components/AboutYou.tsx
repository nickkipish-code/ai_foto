'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'

export default function AboutYou() {
  return (
    <section className="py-16 px-4 bg-[#F5F5F5]">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 rounded-full bg-[#D0D0D0] flex items-center justify-center border-4 border-white shadow-lg">
              <User className="w-24 h-24 text-[#9E9E9E]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              About You
            </h2>
            <p className="text-[#8A8A8A] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="text-[#8A8A8A] leading-relaxed">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


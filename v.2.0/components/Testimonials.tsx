'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Client 1' },
  { id: 2, name: 'Client 2' },
  { id: 3, name: 'Client 3' },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-[#F5F5F5]">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-[#2C2C2C] mb-12" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Testimonials / Proof Points
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[#D0D0D0] flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-md">
                <User className="w-12 h-12 text-[#9E9E9E]" />
              </div>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


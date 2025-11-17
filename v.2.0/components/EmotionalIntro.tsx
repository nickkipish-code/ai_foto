'use client'

import { motion } from 'framer-motion'

export default function EmotionalIntro() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Headline
            </h2>
            <p className="text-xl text-[#5A5A5A] mb-4 font-semibold">
              Sub Headline
            </p>
            <p className="text-[#8A8A8A] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#8A8A8A] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
            <p className="text-[#8A8A8A] leading-relaxed">
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


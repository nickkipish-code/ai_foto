'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Palette, Globe } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '⚡ За 30 секунд',
    description: 'Завантажте фото — отримайте результат швидше, ніж у звичайній примірочній',
    hint: 'Без очікування, без черг',
  },
  {
    icon: Palette,
    title: '🎨 Як у житті',
    description: 'AI враховує освітлення, тканину, посадку та анатомію. Результат — як справжнє фото',
    hint: 'Технологія Gemini 2.0',
  },
  {
    icon: Globe,
    title: '🌍 Будь-де',
    description: 'Примірте вдома, в кафе, в метро. Потрібен лише телефон чи комп\'ютер',
    hint: '100% онлайн',
  },
]

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 px-4 relative bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#2C2C2C]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Можливості
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#5A5A5A] mb-16 max-w-2xl mx-auto"
        >
          Сучасна технологія віртуальної примірки з використанням штучного інтелекту
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isHovered = hoveredIndex === index
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="premium-card group"
              >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#4A4A4A] border-2 border-[#D0D0D0]"
                animate={isHovered ? {
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-semibold mb-3 text-[#2C2C2C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {feature.title}
              </h3>

              <p className="text-[#5A5A5A] mb-3 leading-relaxed">
                {feature.description}
              </p>

              <p className="text-[#4A4A4A] text-sm font-semibold">
                {feature.hint}
              </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


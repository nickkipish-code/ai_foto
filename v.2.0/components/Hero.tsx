'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import MarqueeText from './MarqueeText'

interface HeroProps {
  onStartClick: () => void
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 pt-16 relative overflow-hidden bg-[#F5F5F5]">
      {/* Marquee text animation background */}
      <MarqueeText />

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse' as const,
              }}
            >
              <Sparkles className="w-16 h-16 mr-4 text-[#4A4A4A]" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-[#2C2C2C] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Примірочна AI
            </h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl mb-6 font-semibold text-[#5A5A5A]"
        >
          Примірте будь-який одяг онлайн за 30 секунд
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-[#8A8A8A]"
        >
          Завантажте фото — штучний інтелект покаже, як на вас виглядає будь-який образ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            onClick={onStartClick}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="gold-button text-xl"
            style={{
              padding: '16px 40px',
              fontSize: '20px',
            }}
          >
            Почати примірку →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}


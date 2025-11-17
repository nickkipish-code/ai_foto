'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const phrases = [
  'БЕЗДОГАННИЙ РЕЗУЛЬТАТ',
  'ЯК З ОБКЛАДИНКИ ЖУРНАЛУ',
  'ТАК САМО ПРОСТО ЯК ЗРОБИТИ СЕЛФІ',
  'ПРИРОДНЬО ВИГЛЯДАЄ НА ФІГУРІ',
  'ІНТЕГРУЄТЬСЯ НА БУДЬ-ЯКУ ПЛАТФОРМУ',
  'УТРИМУЄ УВАГУ',
  'ВИГЛЯДАЄ ЯК СТУДІЙНА ЗЙОМКА',
  'БЕЗ МОДЕЛЕЙ І КАМЕР, ТІЛЬКИ AI',
  'ЯКІСТЬ ПОЗА КОНКУРЕНЦІЄЮ',
]

export default function ScrollingText() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Scrolling text lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={currentPhrase}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.03, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="text-[#D4AF37] text-6xl md:text-8xl font-bold text-center whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {phrases[currentPhrase]}
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0D]/50 to-[#0C0C0D]" />
    </div>
  )
}


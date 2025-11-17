'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

interface HeroProps {
  onStartClick: () => void
}

export default function Hero({ onStartClick }: HeroProps) {
  const { theme } = useTheme()
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    if (theme === 'neon') {
      const timer = setTimeout(() => {
        setGlitch(true)
        setTimeout(() => setGlitch(false), 300)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [theme])

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 pt-16 relative">
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={glitch ? 'glitch-effect' : ''}
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={theme === 'neon' ? {
                filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                scale: [1, 1.1, 1],
              } : {
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'reverse' as const,
              }}
            >
              <Sparkles className={`w-16 h-16 mr-4 ${theme === 'neon' ? 'text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,1)]' : 'text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]'}`} />
            </motion.div>
            <h1 className={`text-6xl md:text-7xl font-extrabold gradient-text leading-tight ${theme === 'neon' ? 'font-oxanium tracking-wider drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]' : 'drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]'}`}>
              AI Примерочная
            </h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-2xl md:text-3xl mb-6 font-semibold ${theme === 'neon' ? 'text-pink-200 font-rajdhani' : 'text-gray-200'}`}
        >
          Примеряйте одежду онлайн за секунды.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${theme === 'neon' ? 'text-gray-300' : 'text-gray-300'}`}
        >
          Загрузите фото — и AI покажет, как на вас выглядит любой образ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            onClick={onStartClick}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`px-10 py-5 rounded-2xl text-white font-bold text-xl transition-all shadow-2xl ${
              theme === 'neon'
                ? 'neon-button bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]'
                : 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:shadow-purple-500/60 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500'
            }`}
          >
            Начать примерку →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}


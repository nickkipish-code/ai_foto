'use client'

import { motion } from 'framer-motion'

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

interface MarqueeRowProps {
  direction?: 'left' | 'right'
  speed?: number
  delay?: number
}

function MarqueeRow({ direction = 'left', speed = 30, delay = 0 }: MarqueeRowProps) {
  const duplicatedPhrases = [...phrases, ...phrases]

  return (
    <div className="relative overflow-hidden whitespace-nowrap py-4 my-2">
      <motion.div
        className="inline-block"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
            delay,
          },
        }}
      >
        {duplicatedPhrases.map((phrase, index) => (
          <span
            key={index}
            className="inline-block mx-8 text-4xl md:text-6xl font-bold text-[#D0D0D0] opacity-30"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {phrase}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function MarqueeText() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex flex-col justify-center overflow-hidden">
      <MarqueeRow direction="left" speed={50} delay={0} />
      <MarqueeRow direction="right" speed={45} delay={0} />
      <MarqueeRow direction="left" speed={55} delay={0} />
      <MarqueeRow direction="right" speed={48} delay={0} />
      <MarqueeRow direction="left" speed={52} delay={0} />
      
      {/* Light gradient overlays for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5] via-[#F5F5F5]/80 to-[#F5F5F5]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] via-transparent to-[#F5F5F5]" />
    </div>
  )
}


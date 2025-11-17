'use client'

import { signIn } from 'next-auth/react'
import { motion } from 'framer-motion'
import { Chrome } from 'lucide-react'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B89D2F] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)]">
            <span className="text-[#0C0C0D] font-black text-2xl">AI</span>
          </div>
          <h1 
            className="text-3xl font-bold gradient-text"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Примірочна AI
          </h1>
        </div>

        {/* Sign In Card */}
        <div className="premium-card">
          <h2 
            className="text-2xl font-bold text-center mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Вітаємо! 👋
          </h2>
          <p className="text-center text-[#BEBEBE] mb-8">
            Увійдіть, щоб зберігати свої примірки та отримати повний доступ до сервісу
          </p>

          {/* Google Sign In Button */}
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-lg transition-all border-2 border-transparent hover:border-[#D4AF37]"
          >
            <Chrome className="w-5 h-5" />
            Увійти через Google
          </button>

          <div className="mt-6 text-center text-sm text-[#7A7A7A]">
            Натискаючи кнопку входу, ви погоджуєтесь з{' '}
            <Link href="/terms" className="text-[#D4AF37] hover:underline">
              умовами використання
            </Link>{' '}
            та{' '}
            <Link href="/privacy" className="text-[#D4AF37] hover:underline">
              політикою конфіденційності
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link 
            href="/"
            className="text-[#BEBEBE] hover:text-[#D4AF37] transition-colors"
          >
            ← Повернутися на головну
          </Link>
        </div>
      </motion.div>
    </div>
  )
}


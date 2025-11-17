'use client'

import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

function ErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const errorMessages: Record<string, string> = {
    Configuration: 'Виникла помилка конфігурації сервера. Спробуйте пізніше.',
    AccessDenied: 'Доступ заборонено. Можливо, ви відмінили авторизацію.',
    Verification: 'Не вдалося підтвердити токен. Спробуйте увійти знову.',
    Default: 'Виникла невідома помилка. Спробуйте знову.',
  }

  const errorMessage = error && errorMessages[error] 
    ? errorMessages[error] 
    : errorMessages.Default

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

        {/* Error Card */}
        <div className="premium-card">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
            
            <h2 
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Помилка авторизації
            </h2>
            
            <p className="text-[#BEBEBE] mb-6">
              {errorMessage}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Link
                href="/auth/signin"
                className="flex-1 gold-button text-center"
              >
                Спробувати знову
              </Link>
              <Link
                href="/"
                className="flex-1 px-6 py-3 border-2 border-[#D4AF37]/30 text-[#BEBEBE] hover:text-white hover:border-[#D4AF37] rounded-lg font-semibold transition-all text-center"
              >
                На головну
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-6 text-center text-sm text-[#7A7A7A]">
          <p>
            Якщо проблема повторюється, зверніться до{' '}
            <Link href="/support" className="text-[#D4AF37] hover:underline">
              служби підтримки
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#BEBEBE]">Завантаження...</p>
        </div>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  )
}


'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Calendar, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#BEBEBE]">Завантаження...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-[#BEBEBE] hover:text-[#D4AF37] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад на головну
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold gradient-text mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Особистий кабінет
          </h1>

          <div className="premium-card">
            {/* Profile Header */}
            <div className="flex flex-col items-center mb-8 pb-8 border-b border-[#D4AF37]/20">
              {session.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-[#D4AF37] mb-4"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B89D2F] flex items-center justify-center mb-4">
                  <User className="w-16 h-16 text-[#0C0C0D]" />
                </div>
              )}
              
              <h2 className="text-2xl font-bold text-white mb-2">{session.user?.name}</h2>
              <p className="text-[#BEBEBE]">{session.user?.email}</p>
            </div>

            {/* Profile Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#1A1A1C] rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B89D2F] flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#0C0C0D]" />
                </div>
                <div>
                  <p className="text-sm text-[#BEBEBE] mb-1">Ім'я</p>
                  <p className="text-white font-semibold">{session.user?.name || 'Не вказано'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#1A1A1C] rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B89D2F] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0C0C0D]" />
                </div>
                <div>
                  <p className="text-sm text-[#BEBEBE] mb-1">Email</p>
                  <p className="text-white font-semibold">{session.user?.email || 'Не вказано'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#1A1A1C] rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B89D2F] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#0C0C0D]" />
                </div>
                <div>
                  <p className="text-sm text-[#BEBEBE] mb-1">Дата реєстрації</p>
                  <p className="text-white font-semibold">
                    {new Date().toLocaleDateString('uk-UA', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-8 border-t border-[#D4AF37]/20">
              <Link
                href="/"
                className="block w-full text-center gold-button text-lg"
              >
                Почати примірку
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-[#7A7A7A] text-sm">
            <p>Ваші дані захищені та використовуються виключно для покращення досвіду користування сервісом.</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}


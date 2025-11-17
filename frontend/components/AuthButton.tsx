'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { LogIn, LogOut, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />
    )
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-2 glass rounded-lg">
          {session.user.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || 'User'}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
          <span className="text-sm font-medium text-white hidden md:block">
            {session.user.name || session.user.email}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => signOut()}
          className="px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden md:inline">Выйти</span>
        </motion.button>
      </div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => signIn('google')}
      className="px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-sm font-medium"
    >
      <LogIn className="w-4 h-4" />
      <span className="hidden md:inline">Войти через Google</span>
      <span className="md:hidden">Войти</span>
    </motion.button>
  )
}


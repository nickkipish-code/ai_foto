'use client'

import { useState } from 'react'
import { Menu, X, User, LogOut } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { data: session, status } = useSession()

  const menuItems = [
    { label: 'Можливості', href: '#features' },
    { label: 'Як працює', href: '#how-it-works' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#D4AF37]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B89D2F] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                <span className="text-[#0C0C0D] font-black text-xl">AI</span>
              </div>
              <div>
                <span className="text-lg font-bold gradient-text leading-none block" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Примірочна AI
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#BEBEBE] hover:text-[#D4AF37] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#D4AF37] after:to-[#E5C158] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
            
            {/* Auth Section */}
            {status === 'loading' ? (
              <div className="w-8 h-8 rounded-full bg-[#1A1A1C] animate-pulse" />
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-[#D4AF37]"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B89D2F] flex items-center justify-center">
                      <User className="w-4 h-4 text-[#0C0C0D]" />
                    </div>
                  )}
                </button>
                
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 glass rounded-lg border border-[#D4AF37]/20 overflow-hidden"
                    >
                      <div className="p-3 border-b border-[#D4AF37]/20">
                        <p className="text-sm font-semibold text-white truncate">{session.user?.name}</p>
                        <p className="text-xs text-[#BEBEBE] truncate">{session.user?.email}</p>
                      </div>
                      <Link
                        href="/profile"
                        className="block px-3 py-2 text-sm text-[#BEBEBE] hover:text-[#D4AF37] hover:bg-[#1A1A1C] transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="w-4 h-4 inline mr-2" />
                        Профіль
                      </Link>
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false)
                          signOut()
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-[#BEBEBE] hover:text-red-400 hover:bg-[#1A1A1C] transition-colors"
                      >
                        <LogOut className="w-4 h-4 inline mr-2" />
                        Вийти
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => signIn('google')}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B89D2F] text-[#0C0C0D] font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
              >
                Увійти
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-2"
            >
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-[#BEBEBE] hover:text-[#D4AF37] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {session ? (
                <>
                  <Link
                    href="/profile"
                    className="block py-2 text-[#BEBEBE] hover:text-[#D4AF37] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-4 h-4 inline mr-2" />
                    Профіль
                  </Link>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      signOut()
                    }}
                    className="w-full text-left py-2 text-[#BEBEBE] hover:text-red-400 transition-colors"
                  >
                    <LogOut className="w-4 h-4 inline mr-2" />
                    Вийти
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    signIn('google')
                  }}
                  className="w-full text-left py-2 text-[#D4AF37] font-semibold"
                >
                  Увійти
                </button>
              )}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}


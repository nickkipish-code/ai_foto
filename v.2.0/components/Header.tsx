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
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#D0D0D0]">
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
              <Image
                src="/logo.svg"
                alt="Примірочна AI"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <span className="text-lg font-bold text-[#2C2C2C] leading-none block" style={{ fontFamily: "'Playfair Display', serif" }}>
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
                className="text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* Auth Section */}
            {status === 'loading' ? (
              <div className="w-8 h-8 rounded-full bg-[#E8E8E8] animate-pulse" />
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
                      className="rounded-full border-2 border-[#D0D0D0]"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#4A4A4A] flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
                
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg border-2 border-[#D0D0D0] overflow-hidden shadow-lg"
                    >
                      <div className="p-3 border-b border-[#D0D0D0] bg-[#F5F5F5]">
                        <p className="text-sm font-semibold text-[#2C2C2C] truncate">{session.user?.name}</p>
                        <p className="text-xs text-[#5A5A5A] truncate">{session.user?.email}</p>
                      </div>
                      <Link
                        href="/profile"
                        className="block px-3 py-2 text-sm text-[#5A5A5A] hover:text-[#2C2C2C] hover:bg-[#F5F5F5] transition-colors"
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
                        className="w-full text-left px-3 py-2 text-sm text-[#5A5A5A] hover:text-red-500 hover:bg-[#F5F5F5] transition-colors"
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
                className="px-6 py-2 rounded-full bg-[#4A4A4A] text-white font-semibold hover:bg-[#6B6B6B] transition-all shadow-md hover:shadow-lg"
              >
                Увійти
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2C2C2C]"
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
              className="md:hidden mt-4 space-y-2 border-t border-[#D0D0D0] pt-4"
            >
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {session ? (
                <>
                  <Link
                    href="/profile"
                    className="block py-2 text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors"
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
                    className="w-full text-left py-2 text-[#5A5A5A] hover:text-red-500 transition-colors"
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
                  className="w-full text-left py-2 text-[#4A4A4A] font-semibold"
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


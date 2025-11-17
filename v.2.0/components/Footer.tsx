'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-20 py-12 px-4 border-t-2 border-[#D0D0D0] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/logo.svg"
              alt="Примірочна AI"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h3 className="text-xl font-bold text-[#2C2C2C]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Примірочна AI
            </h3>
          </div>
          <p className="text-[#5A5A5A] mb-2">
            Віртуальна примірка одягу з штучним інтелектом
          </p>
          <p className="text-[#8A8A8A] text-sm">
            Технологія Google Gemini 2.0 Flash • Next.js 14 🚀
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h4 className="text-[#4A4A4A] font-semibold mb-3">Продукт</h4>
            <ul className="space-y-2 text-[#5A5A5A] text-sm">
              <li><a href="#features" className="hover:text-[#2C2C2C] transition-colors">Можливості</a></li>
              <li><a href="#" className="hover:text-[#2C2C2C] transition-colors">Як працює</a></li>
              <li><a href="#" className="hover:text-[#2C2C2C] transition-colors">Тарифи</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4A4A4A] font-semibold mb-3">Компанія</h4>
            <ul className="space-y-2 text-[#5A5A5A] text-sm">
              <li><a href="#" className="hover:text-[#2C2C2C] transition-colors">Про нас</a></li>
              <li><a href="#" className="hover:text-[#2C2C2C] transition-colors">Контакти</a></li>
              <li><a href="#" className="hover:text-[#2C2C2C] transition-colors">Блог</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#4A4A4A] font-semibold mb-3">Юридичне</h4>
            <ul className="space-y-2 text-[#5A5A5A] text-sm">
              <li><a href="#" className="hover:text-[#2C2C2C] transition-colors">Умови використання</a></li>
              <li><a href="#" className="hover:text-[#2C2C2C] transition-colors">Політика приватності</a></li>
              <li><a href="#" className="hover:text-[#2C2C2C] transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Share */}
        <div className="pt-8 border-t-2 border-[#D0D0D0]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.svg"
                alt="Примірочна AI"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#D0D0D0] hover:bg-[#4A4A4A] flex items-center justify-center transition-colors">
                  <span className="text-white text-xs font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#D0D0D0] hover:bg-[#4A4A4A] flex items-center justify-center transition-colors">
                  <span className="text-white text-xs font-bold">t</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#D0D0D0] hover:bg-[#4A4A4A] flex items-center justify-center transition-colors">
                  <span className="text-white text-xs font-bold">in</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#5A5A5A] text-sm">Share</span>
              <button className="px-6 py-2 rounded-full bg-[#4A4A4A] text-white text-sm font-semibold hover:bg-[#6B6B6B] transition-colors">
                xxx
              </button>
            </div>

            <div className="flex gap-4 text-sm text-[#5A5A5A]">
              <a href="#" className="hover:text-[#2C2C2C]">Imprint</a>
              <a href="#" className="hover:text-[#2C2C2C]">Privacy</a>
              <a href="#" className="hover:text-[#2C2C2C]">T&Cs</a>
              <a href="#" className="hover:text-[#2C2C2C]">Contact</a>
            </div>
          </div>

          <div className="text-center pt-6">
            <p className="text-[#8A8A8A] text-sm mb-2">Copyright</p>
            <p className="text-[#8A8A8A] text-xs">
              © {new Date().getFullYear()} Примірочна AI. Всі права захищено.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


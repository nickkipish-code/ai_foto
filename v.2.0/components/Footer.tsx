'use client'

export default function Footer() {
  return (
    <footer className="mt-20 py-12 px-4 border-t-2 border-[#D0D0D0] bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#4A4A4A] rounded-full flex items-center justify-center border-2 border-[#D0D0D0]">
              <span className="text-white font-black text-sm">AI</span>
            </div>
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

        <div className="pt-8 border-t-2 border-[#D0D0D0] text-center">
          <p className="text-[#8A8A8A] text-sm">
            © {new Date().getFullYear()} Примірочна AI. Всі права захищено.
          </p>
          <p className="text-[#8A8A8A] text-xs mt-2">
            Розроблено з ❤️ в Україні
          </p>
        </div>
      </div>
    </footer>
  )
}


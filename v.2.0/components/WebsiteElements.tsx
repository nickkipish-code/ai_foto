'use client'

import { motion } from 'framer-motion'
import { 
  Layout, 
  ImageIcon, 
  Type, 
  Users, 
  Package, 
  MessageSquare, 
  Trophy, 
  Mail,
  DollarSign,
  HelpCircle,
  FileText,
  MapPin
} from 'lucide-react'

const elements = [
  { icon: Layout, label: 'Header • Logo', description: 'Навігація / Головні посилання' },
  { icon: ImageIcon, label: 'Головне зображення', description: 'Візуальний акцент' },
  { icon: Type, label: 'Заголовок • Підзаголовок', description: 'Емоційна презентація' },
  { icon: Users, label: 'Про вас', description: 'Знайомство' },
  { icon: Package, label: 'Продукти • Сервіси', description: 'Пояснення трансформації та переваг' },
  { icon: MessageSquare, label: 'Відгуки', description: 'Історії успіху / Доказові елементи' },
  { icon: Mail, label: 'Контактна форма', description: 'Форма генерації лідів' },
  { icon: DollarSign, label: 'Ціна', description: 'Запит на продаж' },
]

const otherElements = [
  'FAQ',
  'Акордеони',
  'Форма зворотного зв\'язку',
  'Карти',
  'та багато іншого...'
]

export default function WebsiteElements() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Елементи веб-сайту
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#BEBEBE] mb-16 max-w-2xl mx-auto"
        >
          Ключові компоненти для побудови ефективного веб-сайту
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {elements.map((element, index) => {
            const Icon = element.icon
            return (
              <motion.div
                key={element.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-[#D4AF37] to-[#B89D2F] mx-auto"
                >
                  <Icon className="w-8 h-8 text-[#0C0C0D]" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {element.label}
                </h3>

                <p className="text-[#BEBEBE] text-sm">
                  {element.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Other Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Інші елементи
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherElements.map((element, index) => (
              <motion.div
                key={element}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-lg bg-[#1A1A1C] border border-[#D4AF37]/30 text-[#BEBEBE] hover:border-[#D4AF37] transition-all"
              >
                {element}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


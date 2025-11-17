'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'

const posts = [
  { id: 1, title: 'Blog Post 1' },
  { id: 2, title: 'Blog Post 2' },
  { id: 3, title: 'Blog Post 3' },
]

export default function BlogPosts() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="premium-card group cursor-pointer"
            >
              <div className="w-full h-48 bg-[#E8E8E8] rounded-lg mb-4 flex items-center justify-center border-2 border-[#D0D0D0] group-hover:border-[#4A4A4A] transition-colors">
                <ImageIcon className="w-16 h-16 text-[#9E9E9E]" />
              </div>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


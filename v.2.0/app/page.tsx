'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MainImage from '@/components/MainImage'
import EmotionalIntro from '@/components/EmotionalIntro'
import AboutYou from '@/components/AboutYou'
import ProductsSlider from '@/components/ProductsSlider'
import BannerCTA from '@/components/BannerCTA'
import BlogPosts from '@/components/BlogPosts'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import AskForSale from '@/components/AskForSale'
import FittingRoom from '@/components/FittingRoom'
import Footer from '@/components/Footer'

export default function Home() {
  const [showFittingRoom, setShowFittingRoom] = useState(false)

  return (
    <main className="min-h-screen relative">
      <Header />
      {showFittingRoom ? (
        <FittingRoom onBack={() => setShowFittingRoom(false)} />
      ) : (
        <>
          <Hero onStartClick={() => setShowFittingRoom(true)} />
          <MainImage />
          <EmotionalIntro />
          <AboutYou />
          <ProductsSlider />
          <BannerCTA />
          <BlogPosts />
          <Testimonials />
          <ContactForm />
          <AskForSale />
          <Footer />
        </>
      )}
    </main>
  )
}


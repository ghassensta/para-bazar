// src/sections/home/components/HeroSection.jsx
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import heroImg1 from '../../../assets/images/para-banner-1.png'
import heroImg2 from '../../../assets/images/para-banner-2.png'
import heroImg3 from '../../../assets/images/para-banner-3.png'
import heroImg4 from '../../../assets/images/para-banner-4.png'
import heroImg5 from '../../../assets/images/para-banner-5.png'

const SLIDES = [
  {
    id: 1,
    badge: 'Weekend Discount',
    tag: 'Limited Time',
    title: 'Get the best quality products at the lowest prices',
    desc: 'We have prepared special discounts for you on organic breakfast products.',
    price: '$21.67',
    oldPrice: '$59.99',
    discount: '64% OFF',
    img: heroImg1,
    accent: '#66B04B',
    bg: 'from-[#f0faf0] via-[#f7fbf7] to-[#eef7ee]',
  },
  {
    id: 2,
    badge: 'Fresh Arrivals',
    tag: 'New Stock',
    title: 'Fresh organic vegetables delivered to your door',
    desc: 'Farm fresh produce sourced directly from local farmers every morning.',
    price: '$15.99',
    oldPrice: '$29.99',
    discount: '47% OFF',
    img: heroImg2,
    accent: '#16a34a',
    bg: 'from-[#ecfdf5] via-[#f0fdf4] to-[#dcfce7]',
  },
  {
    id: 3,
    badge: 'Special Offer',
    tag: 'Best Seller',
    title: 'Premium dairy products at unbeatable prices',
    desc: 'High quality dairy products for your family, fresh and nutritious.',
    price: '$9.99',
    oldPrice: '$18.99',
    discount: '47% OFF',
    img: heroImg3,
    accent: '#2563eb',
    bg: 'from-[#eff6ff] via-[#f0f7ff] to-[#dbeafe]',
  },
  {
    id: 4,
    badge: 'Hot Deal',
    tag: 'Today Only',
    title: 'Handpicked exotic fruits from around the world',
    desc: 'Discover rare and delicious fruits delivered fresh straight to your doorstep.',
    price: '$12.49',
    oldPrice: '$34.99',
    discount: '64% OFF',
    img: heroImg4,
    accent: '#ea580c',
    bg: 'from-[#fff7ed] via-[#fffbf5] to-[#fef3c7]',
  },
  {
    id: 5,
    badge: 'Members Only',
    tag: 'Exclusive',
    title: 'Artisan bakery products baked fresh every morning',
    desc: 'Enjoy handcrafted breads, pastries and cakes made with natural ingredients.',
    price: '$7.99',
    oldPrice: '$14.99',
    discount: '47% OFF',
    img: heroImg5,
    accent: '#db2777',
    bg: 'from-[#fdf2f8] via-[#fef6fb] to-[#fce7f3]',
  },
]

// Variants framer-motion réutilisables
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function SlideContent({ slide }) {
  return (
    <>
      {/* ── DESKTOP ── */}
      <div className={`hidden md:grid grid-cols-2 bg-gradient-to-br ${slide.bg} min-h-[360px] relative overflow-hidden`}>

        {/* Blobs décoratifs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: slide.accent }} />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-10 blur-2xl pointer-events-none"
          style={{ background: slide.accent }} />

        {/* Gauche – Contenu animé */}
        <div className="flex flex-col justify-center px-12 py-12 z-10">

          <motion.div className="flex items-center gap-2 mb-5" {...fadeUp(0.05)}>
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white shadow-sm"
              style={{ background: slide.accent }}
            >
              {slide.badge}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 border border-gray-200 px-3 py-1 rounded-full bg-white/80">
              {slide.tag}
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-[2rem] leading-[1.2] font-extrabold text-gray-900 mb-3 max-w-sm"
            {...fadeUp(0.15)}
          >
            {slide.title}
          </motion.h1>

          <motion.p
            className="text-gray-500 text-sm leading-relaxed mb-7 max-w-xs"
            {...fadeUp(0.25)}
          >
            {slide.desc}
          </motion.p>

          <motion.div className="flex items-center gap-5" {...fadeUp(0.35)}>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-white font-bold text-sm px-7 py-3 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{ background: slide.accent }}
            >
              Shop Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-gray-900">{slide.price}</span>
                <span className="text-sm text-gray-400 line-through">{slide.oldPrice}</span>
              </div>
              <span className="text-xs font-bold mt-0.5" style={{ color: slide.accent }}>
                Save {slide.discount}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Droite – Image animée */}
        <div className="relative flex items-end justify-center overflow-hidden h-[360px]">
          <div
            className="absolute bottom-0 right-0 w-[340px] h-[340px] rounded-full opacity-15"
            style={{ background: slide.accent }}
          />
          <motion.img
            src={slide.img}
            alt={slide.title}
            className="relative z-10 h-[340px] w-full object-contain object-bottom drop-shadow-2xl"
            onError={e => { e.target.style.display = 'none' }}
            {...fadeLeft}
          />
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className={`md:hidden bg-gradient-to-br ${slide.bg} px-6 pt-8 pb-6 relative overflow-hidden`}>
        <div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-10 blur-2xl pointer-events-none"
          style={{ background: slide.accent }}
        />

        <motion.div className="flex items-center gap-2 mb-4" {...fadeUp(0.05)}>
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
            style={{ background: slide.accent }}
          >
            {slide.badge}
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-xl font-extrabold text-gray-900 leading-tight mb-2"
          {...fadeUp(0.15)}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          className="text-gray-500 text-xs leading-relaxed mb-5"
          {...fadeUp(0.22)}
        >
          {slide.desc}
        </motion.p>

        <motion.div className="flex justify-center mb-5" {...fadeLeft}>
          <img
            src={slide.img}
            alt={slide.title}
            className="h-44 object-contain drop-shadow-xl"
            onError={e => { e.target.style.display = 'none' }}
          />
        </motion.div>

        <motion.div className="flex items-center gap-4" {...fadeUp(0.3)}>
          <Link
            to="/shop"
            className="text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md"
            style={{ background: slide.accent }}
          >
            Shop Now →
          </Link>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-gray-900">{slide.price}</span>
              <span className="text-xs text-gray-400 line-through">{slide.oldPrice}</span>
            </div>
            <span className="text-[10px] font-bold" style={{ color: slide.accent }}>
              Save {slide.discount}
            </span>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="mx-4 my-4 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        onSlideChange={s => setActiveIndex(s.realIndex)}
        className="hero-swiper"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <AnimatePresence mode="wait">
              {activeIndex === i && <SlideContent key={slide.id} slide={slide} />}
            </AnimatePresence>
            {/* Fallback visible quand le slide n'est pas actif */}
            {activeIndex !== i && <SlideContent slide={slide} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-swiper .swiper-pagination { bottom: 16px; }
        .hero-swiper .swiper-pagination-bullet {
          width: 6px; height: 6px;
          background: #9ca3af; opacity: 0.5;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1; width: 28px;
          border-radius: 999px; background: #66B04B;
        }
      `}</style>
    </section>
  )
}
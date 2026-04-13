import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
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
    title: 'Get the best quality products at the lowest prices',
    desc: 'We have prepared special discounts for you on organic breakfast products.',
    price: '$21.67',
    oldPrice: '$59.99',
    img: heroImg1,
    bg: 'from-gray-50 to-gray-100',
  },
  {
    id: 2,
    badge: 'Fresh Arrivals',
    title: 'Fresh organic vegetables delivered to your door',
    desc: 'Farm fresh produce sourced directly from local farmers every morning.',
    price: '$15.99',
    oldPrice: '$29.99',
    img: heroImg2,
    bg: 'from-brand-herb-50 to-green-50',
  },
  {
    id: 3,
    badge: 'Special Offer',
    title: 'Premium dairy products at unbeatable prices',
    desc: 'High quality dairy products for your family, fresh and nutritious.',
    price: '$9.99',
    oldPrice: '$18.99',
    img: heroImg3,
    bg: 'from-brand-azure-50 to-blue-50',
  },

  {
    id: 4,
    badge: 'Hot Deal',
    title: 'Handpicked exotic fruits from around the world',
    desc: 'Discover rare and delicious fruits delivered fresh straight to your doorstep.',
    price: '$12.49',
    oldPrice: '$34.99',
    img: heroImg4,
    bg: 'from-orange-50 to-yellow-50',
  },
  {
    id: 5,
    badge: 'Members Only',
    title: 'Artisan bakery products baked fresh every morning',
    desc: 'Enjoy handcrafted breads, pastries and cakes made with natural ingredients.',
    price: '$7.99',
    oldPrice: '$14.99',
    img: heroImg5,
    bg: 'from-rose-50 to-pink-50',
  },
]


export default function HeroSection() {
  return (
    <section className="mx-4 my-4 rounded-2xl overflow-hidden border border-gray-100 md:px-6">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="hero-swiper"
      >
        {SLIDES.map(slide => (
          <SwiperSlide key={slide.id}>

            {/* Desktop */}
            <div className={`hidden md:flex items-center bg-gradient-to-r ${slide.bg} min-h-80 relative overflow-hidden`}>
              <div className="w-1/2 px-12 py-12 z-10">
                <span className="inline-block bg-white text-brand-herb-700 text-xs font-semibold px-3 py-1 rounded-badge mb-4 border border-brand-herb-100 shadow-sm">
                  {slide.badge}
                </span>
                <h1 className="font-heading text-4xl font-bold text-gray-900 leading-tight mb-3">
                  {slide.title}
                </h1>
                <p className="text-gray-500 text-sm mb-7">{slide.desc}</p>
                <div className="flex items-center gap-6">
                  <Link
                    to="/shop"
                    className="flex items-center gap-2 bg-brand-herb hover:bg-brand-herb-dark text-white font-semibold text-sm px-6 py-2.5 rounded-btn shadow-btn transition-colors"
                  >
                    Shop Now →
                  </Link>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-brand-herb font-bold text-2xl">{slide.price}</p>
                      <p className="text-gray-400 text-sm line-through">{slide.oldPrice}</p>
                    </div>
                    <p className="text-gray-400 text-2xs mt-0.5">Don't miss this limited time offer.</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-80">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-left"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>
            </div>

            {/* Mobile — texte uniquement */}
            <div className={`md:hidden bg-gradient-to-br ${slide.bg} px-8 py-10`}>
              <span className="inline-block bg-white text-brand-herb-700 text-xs font-semibold px-3 py-1 rounded-badge mb-4 border border-brand-herb-100">
                {slide.badge}
              </span>
              <h1 className="font-heading text-2xl font-bold text-gray-900 leading-tight mb-3">
                {slide.title}
              </h1>
              <p className="text-gray-500 text-sm mb-6">{slide.desc}</p>
              <div className="flex items-center gap-4">
                <Link
                  to="/shop"
                  className="bg-brand-herb text-white font-semibold text-sm px-5 py-2.5 rounded-btn shadow-btn"
                >
                  Shop Now →
                </Link>
                <div className="flex items-center gap-2">
                  <p className="text-brand-herb font-bold text-lg">{slide.price}</p>
                  <p className="text-gray-400 text-sm line-through">{slide.oldPrice}</p>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          background: #66B04B;
          opacity: 0.4;
          width: 8px;
          height: 8px;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 999px;
          transition: width 0.3s ease;
        }
        .hero-swiper .swiper-pagination {
          bottom: 12px;
        }
      `}</style>
    </section>
  )
}
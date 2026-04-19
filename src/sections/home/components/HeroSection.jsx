// src/sections/home/components/HeroSection.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import heroImg1 from '../../../assets/images/home-slider.png'
import heroImg2 from '../../../assets/images/para-banner-2.png'
import heroImg3 from '../../../assets/images/para-banner-3.png'
import heroImg4 from '../../../assets/images/para-banner-4.png'
import heroImg5 from '../../../assets/images/para-banner-5.png'

const SLIDES = [heroImg1]

export default function HeroSection() {
  return (
    <section className="mx-4 my-4 rounded-2xl overflow-hidden shadow-sm">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="hero-swiper"
      >
        {SLIDES.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full md:h-90 object-cover"
              onError={e => { e.target.style.display = 'none' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-swiper .swiper-pagination { bottom: 12px; }
        .hero-swiper .swiper-pagination-bullet {
          width: 6px; height: 6px;
          background: #fff; opacity: 0.6;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1; width: 24px;
          border-radius: 999px; background: #66B04B;
        }
      `}</style>
    </section>
  )
}
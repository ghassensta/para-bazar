// src/sections/home/components/CategoriesSection.jsx
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const CATEGORIES = [
  { img: '🥦', label: 'Fruits &\nVegetables', path: '/category/fruits' },
  { img: '🥩', label: 'Meats &\nSeafood',     path: '/category/meats' },
  { img: '🥚', label: 'Breaksfast &\nDairy',  path: '/category/dairy' },
  { img: '🥖', label: 'Breads &\nBakery',     path: '/category/breads' },
  { img: '🧃', label: 'Beverages',            path: '/category/beverages' },
  { img: '🧊', label: 'Frozen\nFoods',        path: '/category/frozen' },
  { img: '🍪', label: 'Biscuits &\nSnacks',   path: '/category/snacks' },
  { img: '🛒', label: 'Grocery &\nStaples',   path: '/category/grocery' },
  { img: '🍼', label: 'Baby &\nPregnancy',    path: '/category/baby' },
  { img: '💊', label: 'Healthcare',           path: '/category/healthcare' },
  { img: '🌿', label: 'Organic\nProducts',    path: '/category/organic' },
  { img: '🫙', label: 'Canned\nGoods',        path: '/category/canned' },
]

export default function CategoriesSection() {
  const { pathname } = useLocation()

  return (
    <section className="max-w-7xl mx-auto px-4 mb-8">

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="font-heading text-xl font-bold text-gray-800">Top Categories</h2>
        <p className="text-sm text-gray-400 hidden md:block">New products with updated stocks.</p>
        <Link
          to="/categories"
          className="ml-auto text-sm text-brand-herb font-semibold hover:text-brand-herb-dark transition-colors whitespace-nowrap"
        >
          View All →
        </Link>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode
        autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
        slidesPerView={3}
        spaceBetween={12}
        breakpoints={{
          480:  { slidesPerView: 4,  spaceBetween: 12 },
          640:  { slidesPerView: 5,  spaceBetween: 12 },
          768:  { slidesPerView: 6,  spaceBetween: 12 },
          1024: { slidesPerView: 8,  spaceBetween: 12 },
          1280: { slidesPerView: 10, spaceBetween: 12 },
        }}
        className="categories-swiper"
      >
        {CATEGORIES.map((cat, i) => {
          const isActive = pathname === cat.path
          return (
            <SwiperSlide key={cat.path}>
              <Link
                to={cat.path}
                className={`flex flex-col items-center gap-2 bg-white border rounded-card py-4 px-2
                            hover:border-brand-herb-300 hover:shadow-medical transition-all group
                            ${isActive
                              ? 'border-brand-herb-400 shadow-medical'
                              : 'border-gray-100'
                            }`}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  {cat.img}
                </span>
                <span
                  className={`text-center leading-tight whitespace-pre-line font-sans text-[11px]
                    ${isActive ? 'text-brand-herb-700 font-semibold' : 'text-gray-600'}`}
                >
                  {cat.label}
                </span>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>

    </section>
  )
}
// src/sections/home/components/PopularProductsSection.jsx
import { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import ProductCard from '../../../components/product/ProductCard'

const TABS = [
  'Breads & Bakery',
  'Breakfast & Dairy',
  'Meats & Seafood',
  'Fruits & Vegetables',
]

const PRODUCTS = [
  {
    id: 1,
    name: 'Fresh Apple Juice – 64 fl oz Bottle',
    price: '$25.99',
    oldPrice: '$38.10',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Whole Grain Bread Loaf',
    price: '$4.49',
    oldPrice: '$6.00',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Fresh Orange Juice – 1L',
    price: '$5.99',
    oldPrice: '$8.50',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Organic Free Range Eggs – 12 pack',
    price: '$6.99',
    oldPrice: '$9.00',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Fresh Strawberries – 500g',
    price: '$3.99',
    oldPrice: '$5.50',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Whole Milk – 1 Gallon',
    price: '$4.29',
    oldPrice: '$5.99',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop'
  },
  {
    id: 7,
    name: 'Avocado – Pack of 4',
    price: '$5.49',
    oldPrice: '$7.00',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop'
  },
  {
    id: 8,
    name: 'Atlantic Salmon Fillet – 500g',
    price: '$12.99',
    oldPrice: '$16.00',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=300&fit=crop'
  },
]

export default function PopularProductsSection() {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <section className="mx-auto px-4 mb-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-5">
        <div className="min-w-fit">
          <h2 className="font-heading text-xl font-bold text-gray-800">
            Popular Products
          </h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Do not miss the current offers
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide md:ml-6">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-1.5 text-sm rounded-full border transition-colors font-sans
                ${activeTab === tab
                  ? 'bg-brand-herb text-white border-brand-herb'
                  : 'border-gray-200 text-gray-600 hover:border-brand-herb-300 hover:text-brand-herb'
                }`}
            >
              {tab}
            </button>
          ))}

          <button className="ml-1 p-1.5 text-gray-400 hover:text-brand-herb transition-colors">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Products Slider */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop
        slidesPerView={2}
        spaceBetween={16}
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 16 }, // ✅ fix typo
          1024: { slidesPerView: 5, spaceBetween: 16 },
          1280: { slidesPerView: 6, spaceBetween: 16 },
        }}
      >
        {PRODUCTS.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}
// src/sections/product/components/ProductGallery.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductGallery({ images = [], badge }) {
  const [active, setActive] = useState(0)

  const imgs = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=90',
    'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=600&fit=crop&q=90',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=90',
  ]

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Main image */}
      <div className="relative bg-gray-50 rounded-card border border-gray-100 overflow-hidden aspect-square flex items-center justify-center">
        {badge && (
          <span className="absolute top-3 left-3 z-10 text-xs font-extrabold bg-brand-herb text-white px-2.5 py-1 rounded-badge shadow">
            {badge}
          </span>
        )}
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={imgs[active]}
            alt="Produit"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full h-full object-contain p-4"
            onError={e => {
              e.target.src = 'https://placehold.co/400x400/EFF9EC/66B04B?text=Produit'
            }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {imgs.length > 1 && (
        <div className="flex gap-2">
          {imgs.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-1 aspect-square rounded-input border-2 overflow-hidden bg-gray-50 transition-all duration-200
                ${active === i
                  ? 'border-brand-herb shadow-btn'
                  : 'border-gray-200 hover:border-brand-herb-300'
                }`}
            >
              <img
                src={img}
                alt={`Vue ${i + 1}`}
                className="w-full h-full object-contain p-1"
                onError={e => { e.target.src = 'https://placehold.co/80x80/EFF9EC/66B04B?text=P' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
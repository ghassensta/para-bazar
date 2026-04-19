// src/sections/product/components/RelatedProducts.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi'
import { FaStar, FaRegStar } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'

const RELATED = [
  { id: 1,  name: 'Crème Hydratante SPF 30',    price: 32.90, oldPrice: 49.90, rating: 4.5, img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=240&h=240&fit=crop&q=80' },
  { id: 2,  name: 'Sérum Vitamine C',            price: 45.00, oldPrice: 60.00, rating: 5,   img: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=240&h=240&fit=crop&q=80' },
  { id: 3,  name: 'Shampoing Nutritive',          price: 28.50, oldPrice: null,  rating: 4,   img: 'https://images.unsplash.com/photo-1526758097130-bab247274f58?w=240&h=240&fit=crop&q=80' },
  { id: 4,  name: 'Magnésium Marin 60cp',        price: 19.90, oldPrice: 26.00, rating: 4.5, img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=240&h=240&fit=crop&q=80' },
  { id: 5,  name: 'Lait Corps Karité',           price: 15.90, oldPrice: null,  rating: 4,   img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=240&h=240&fit=crop&q=80' },
  { id: 6,  name: 'Crème Solaire SPF 50+',       price: 22.00, oldPrice: 29.90, rating: 5,   img: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=240&h=240&fit=crop&q=80' },
]

function RelatedCard({ product }) {
  const [added, setAdded] = useState(false)

  return (
    <div className="bg-white rounded-card border border-gray-100 hover:border-brand-herb-200 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden group">
      <Link to={`/product/${product.id}`} className="block bg-gray-50 h-36 flex items-center justify-center overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="h-28 w-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.src = 'https://placehold.co/160x160/EFF9EC/66B04B?text=P' }}
        />
      </Link>
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs font-semibold text-gray-700 leading-snug line-clamp-2 hover:text-brand-herb transition-colors">
            {product.name}
          </p>
        </Link>
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            i <= Math.floor(product.rating)
              ? <FaStar key={i} size={10} className="text-amber-400" />
              : <FaRegStar key={i} size={10} className="text-amber-200" />
          ))}
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-extrabold text-brand-herb">{product.price.toFixed(2)} TND</span>
          {product.oldPrice && (
            <span className="text-[10px] text-gray-400 line-through">{product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        <button
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1500) }}
          className={`w-full mt-auto flex items-center justify-center gap-1.5 text-[11px] font-bold py-2 rounded-btn border transition-all duration-200
            ${added
              ? 'bg-brand-herb text-white border-brand-herb'
              : 'bg-white text-brand-herb border-brand-herb-300 hover:bg-brand-herb hover:text-white'
            }`}
        >
          <FiShoppingCart size={11} />
          {added ? 'Ajouté ✓' : 'Ajouter'}
        </button>
      </div>
    </div>
  )
}

export default function RelatedProducts({ products = RELATED }) {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-brand-azure-900 uppercase tracking-wide">
          Produits similaires
        </h2>
        <Link
          to="/shop"
          className="flex items-center gap-1 text-xs text-brand-herb font-bold hover:text-brand-herb-dark transition-colors"
        >
          Voir tout <FiArrowRight size={12} />
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={12}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="related-swiper !pb-1"
      >
        {products.map(p => (
          <SwiperSlide key={p.id}>
            <RelatedCard product={p} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .related-swiper .swiper-button-next,
        .related-swiper .swiper-button-prev {
          width: 28px; height: 28px;
          background: white; border-radius: 50%;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          top: 35%;
        }
        .related-swiper .swiper-button-next::after,
        .related-swiper .swiper-button-prev::after {
          font-size: 11px; font-weight: 900; color: #66B04B;
        }
        .related-swiper .swiper-button-disabled { opacity: 0.3; }
      `}</style>
    </div>
  )
}
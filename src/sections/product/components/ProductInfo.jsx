// src/sections/product/components/ProductInfo.jsx
import { useState } from 'react'
import { FiHeart, FiShoppingCart, FiMinus, FiPlus, FiTruck, FiRefreshCw, FiShield } from 'react-icons/fi'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function Stars({ rating, count }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1,2,3,4,5].map(i =>
          i <= Math.floor(rating)
            ? <FaStar key={i} size={13} className="text-amber-400" />
            : i - 0.5 === rating
            ? <FaStarHalfAlt key={i} size={13} className="text-amber-400" />
            : <FaRegStar key={i} size={13} className="text-amber-300" />
        )}
      </div>
      {count !== undefined && (
        <span className="text-xs text-brand-serene-500 hover:text-brand-herb cursor-pointer transition-colors">
          Review {count}
        </span>
      )}
    </div>
  )
}

export default function ProductInfo({ product }) {
  const [qty,    setQty]    = useState(1)
  const [wished, setWished] = useState(false)
  const [added,  setAdded]  = useState(false)

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null

  function handleAdd() {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Title */}
      <h1 className="font-heading text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
        {product.name}
      </h1>

      {/* Brand + rating */}
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className="text-gray-500">Marque :</span>
        <span className="font-semibold text-brand-herb hover:underline cursor-pointer">
          {product.brand}
        </span>
        <div className="h-3 w-px bg-gray-200" />
        <Stars rating={product.rating} count={product.reviewCount} />
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-extrabold text-brand-herb">{product.price.toFixed(2)} TND</span>
        {product.oldPrice && (
          <>
            <span className="text-base text-gray-400 line-through">{product.oldPrice.toFixed(2)} TND</span>
            <span className="text-sm font-bold text-white bg-rose-500 px-2 py-0.5 rounded-badge">
              -{discount}%
            </span>
          </>
        )}
      </div>

      {/* Stock */}
      <p className="text-sm font-medium text-brand-serene-600 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-brand-herb inline-block" />
        En stock · {product.stock?.toLocaleString()} articles disponibles
      </p>

      {/* Description courte */}
      <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
        {product.description}
      </p>

      {/* Qty + CTA */}
      <div className="flex items-center gap-3 pt-2 flex-wrap">

        {/* Quantity */}
        <div className="flex items-center border border-gray-200 rounded-btn overflow-hidden">
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            className="w-9 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-brand-herb transition-colors"
          >
            <FiMinus size={14} />
          </button>
          <span className="w-10 text-center text-sm font-bold text-gray-800 border-x border-gray-200 h-10 flex items-center justify-center">
            {qty}
          </span>
          <button
            onClick={() => setQty(q => q + 1)}
            className="w-9 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-brand-herb transition-colors"
          >
            <FiPlus size={14} />
          </button>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAdd}
          className={`flex-1 min-w-40 flex items-center justify-center gap-2 font-bold text-sm py-2.5 px-6 rounded-btn transition-all duration-200 shadow-btn
            ${added
              ? 'bg-brand-herb-dark text-white'
              : 'bg-brand-herb text-white hover:bg-brand-herb-dark'
            }`}
        >
          <FiShoppingCart size={15} />
          {added ? 'Ajouté au panier ✓' : 'Ajouter au panier'}
        </button>

        {/* Wishlist */}
        <button
          onClick={() => setWished(w => !w)}
          className={`w-10 h-10 flex items-center justify-center rounded-btn border-2 transition-all duration-200
            ${wished
              ? 'border-rose-400 bg-rose-50 text-rose-500'
              : 'border-gray-200 text-gray-400 hover:border-rose-300 hover:text-rose-400'
            }`}
        >
          <FiHeart size={16} className={wished ? 'fill-rose-400 stroke-rose-400' : ''} />
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
        {[
          { icon: <FiTruck size={16} />,      label: 'Livraison gratuite', sub: 'Dès 50 TND' },
          { icon: <FiRefreshCw size={16} />,  label: 'Retour 30 jours',   sub: 'Satisfait ou remboursé' },
          { icon: <FiShield size={16} />,     label: 'Paiement sécurisé', sub: '100% protégé' },
        ].map((b, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-1 p-2 bg-brand-herb-50 rounded-input">
            <span className="text-brand-herb">{b.icon}</span>
            <span className="text-[10px] font-bold text-brand-azure-800">{b.label}</span>
            <span className="text-[9px] text-brand-serene-500">{b.sub}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
import { useState } from 'react'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import StarRating from '../star/StarRating';

export default function ProductCard({ product }) {
  const [wished, setWished] = useState(false)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="group bg-white rounded-card border border-gray-100 hover:border-brand-herb-200 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden">

      {/* Image area */}
      <div className="relative bg-gray-50 flex items-center justify-center h-40 overflow-hidden">
        {product.badge && (
          <span className="absolute top-2 left-2 z-10 text-[10px] font-bold bg-brand-herb text-white px-2 py-0.5 rounded-badge">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => setWished(w => !w)}
          className="absolute top-2 right-2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 transition-colors hover:border-rose-200"
        >
          <FiHeart
            size={13}
            className={wished ? 'fill-rose-500 stroke-rose-500' : 'stroke-gray-400'}
          />
        </button>
        <img
          src={product.img}
          alt={product.name}
          className="h-32 w-full object-contain group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.target.src = `https://placehold.co/200x200/EFF9EC/66B04B?text=${encodeURIComponent(product.name.split(' ')[0])}`
          }}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-3 flex-1">
        <p className="text-[11px] text-brand-serene-500 font-medium uppercase tracking-wide">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <StarRating rating={product.rating} />
        <div className="flex items-baseline gap-2 mt-auto pt-1">
          <span className="text-base font-extrabold text-brand-herb">{product.price} TND</span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">{product.oldPrice} TND</span>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="px-3 pb-3">
        <button
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 text-xs font-bold py-2.5 rounded-btn transition-all duration-200 border
            ${added
              ? 'bg-brand-herb text-white border-brand-herb'
              : 'bg-white text-brand-herb border-brand-herb-300 hover:bg-brand-herb hover:text-white hover:border-brand-herb'
            }`}
        >
          <FiShoppingCart size={13} />
          {added ? 'Ajouté ✓' : 'Ajouter au panier'}
        </button>
      </div>
    </div>
  )
}
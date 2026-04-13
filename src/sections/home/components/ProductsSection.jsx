import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiStar, FiArrowRight } from 'react-icons/fi'

// ── Star Rating ──────────────────────────────────────────────
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <FiStar
          key={star}
          size={11}
          className={star <= rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  )
}

// ── Product Card ─────────────────────────────────────────────
function ProductCard({ product }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-white border border-gray-100 rounded-card shadow-card hover:shadow-medical transition-all group flex flex-col">
      <div className="bg-gray-50 rounded-t-card p-3 flex items-center justify-center h-40">
        <img
          src={product.img}
          alt={product.name}
          className="h-32 w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs font-sans font-medium text-gray-800 leading-snug line-clamp-2 hover:text-brand-herb transition-colors">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} />
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-brand-herb font-bold text-sm">{product.price}</span>
          <span className="text-gray-400 text-xs line-through">{product.oldPrice}</span>
        </div>
        <button
          onClick={handleAdd}
          className={`w-full py-1.5 rounded-btn text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border mt-auto
            ${added
              ? 'bg-brand-herb text-white border-brand-herb'
              : 'border-brand-herb text-brand-herb hover:bg-brand-herb hover:text-white'
            }`}
        >
          <FiShoppingCart size={11} />
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

// ── Section Block ─────────────────────────────────────────────
function ProductSection({ title, viewAllPath, products }) {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-heading text-xl font-bold text-gray-800">{title}</h2>
        <Link
          to={viewAllPath}
          className="flex items-center gap-1 text-sm text-brand-herb font-semibold hover:text-brand-herb-dark transition-colors"
        >
          View All <FiArrowRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

// ── Data ──────────────────────────────────────────────────────
const makeProduct = (id, name, rating, img) => ({
  id, name, rating,
  price: '$25.99',
  oldPrice: '$38.10',
  img,
})

const LATEST = [
  makeProduct(1,  '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fef3c7/d97706?text=Pizza'),
  makeProduct(2,  '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/ecfdf5/059669?text=ACT'),
  makeProduct(3,  '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fff7ed/ea580c?text=Burger'),
  makeProduct(4,  '100 Percent Apple Juice – 64 fl oz Bottle', 5, 'https://placehold.co/160x140/eff6ff/2563eb?text=Aptamil'),
  makeProduct(5,  '100 Percent Apple Juice – 64 fl oz Bottle', 3, 'https://placehold.co/160x140/fef2f2/dc2626?text=Quest'),
  makeProduct(6,  '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/f0fdf4/16a34a?text=Soap'),
]

const FEATURED = [
  makeProduct(7,  '100 Percent Apple Juice – 64 fl oz Bottle', 3, 'https://placehold.co/160x140/fff7ed/ea580c?text=Chicken'),
  makeProduct(8,  '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fdf4ff/a21caf?text=Drink'),
  makeProduct(9,  '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fef9c3/ca8a04?text=Bread'),
  makeProduct(10, '100 Percent Apple Juice – 64 fl oz Bottle', 3, 'https://placehold.co/160x140/eff6ff/2563eb?text=Soap'),
  makeProduct(11, '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fef3c7/d97706?text=Pizza'),
  makeProduct(12, '100 Percent Apple Juice – 64 fl oz Bottle', 5, 'https://placehold.co/160x140/fef2f2/dc2626?text=Meat'),
]

const BREAKFAST = [
  makeProduct(13, '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fef9c3/ca8a04?text=Bread'),
  makeProduct(14, '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fef3c7/d97706?text=Bread2'),
  makeProduct(15, '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fef2f2/dc2626?text=Kelloggs'),
  makeProduct(16, '100 Percent Apple Juice – 64 fl oz Bottle', 3, 'https://placehold.co/160x140/fdf4ff/a21caf?text=Choco'),
  makeProduct(17, '100 Percent Apple Juice – 64 fl oz Bottle', 5, 'https://placehold.co/160x140/ecfdf5/059669?text=Muesli'),
  makeProduct(18, '100 Percent Apple Juice – 64 fl oz Bottle', 4, 'https://placehold.co/160x140/fff7ed/ea580c?text=Snack'),
]

// ── Export ────────────────────────────────────────────────────
export default function ProductsSection() {
  return (
    <>
      <ProductSection title="Latest Products"   viewAllPath="/latest"   products={LATEST} />
      <ProductSection title="Featured Products" viewAllPath="/featured" products={FEATURED} />
      <ProductSection title="Breaksfast & Dairy" viewAllPath="/breakfast" products={BREAKFAST} />
    </>
  )
}
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiStar, FiChevronRight } from 'react-icons/fi'

const TABS = [
  'Breads & Bakery',
  'Breaksfast & Dairy',
  'Meats & Seafood',
  'Fruits & Vegetables',
]

const PRODUCTS = [
  { id: 1, name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$25.99', oldPrice: '$38.10', rating: 4, img: 'https://placehold.co/160x180/fff7ed/ea580c?text=Apple+Juice' },
  { id: 2, name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$25.99', oldPrice: '$38.10', rating: 4, img: 'https://placehold.co/160x180/f0fdf4/16a34a?text=Rising+Crust' },
  { id: 3, name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$25.99', oldPrice: '$38.10', rating: 5, img: 'https://placehold.co/160x180/fff7ed/ea580c?text=Orange+Juice' },
  { id: 4, name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$25.99', oldPrice: '$38.10', rating: 4, img: 'https://placehold.co/160x180/1e1b4b/fff?text=Pizza' },
  { id: 5, name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$25.99', oldPrice: '$38.10', rating: 4, img: 'https://placehold.co/160x180/fef9c3/ca8a04?text=Lays' },
  { id: 6, name: '100 Percent Apple Juice – 64 fl oz Bottle', price: '$25.99', oldPrice: '$38.10', rating: 4, img: 'https://placehold.co/160x180/eff6ff/2563eb?text=Angel+Soft' },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <FiStar
          key={star}
          size={12}
          className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}
        />
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="bg-white border border-gray-100 rounded-card shadow-card hover:shadow-medical transition-shadow group flex flex-col">
      <div className="relative bg-gray-50 rounded-t-card p-4 flex items-center justify-center h-44">
        <img
          src={product.img}
          alt={product.name}
          className="h-36 w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 flex flex-col gap-2 flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-sans font-medium text-gray-800 leading-snug line-clamp-2 hover:text-brand-herb transition-colors">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} />
        <div className="flex items-center gap-2">
          <span className="text-brand-herb font-bold text-base">{product.price}</span>
          <span className="text-gray-400 text-xs line-through">{product.oldPrice}</span>
        </div>
        <button
          onClick={handleAdd}
          className={`w-full py-2 rounded-btn text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border mt-auto
            ${added
              ? 'bg-brand-herb text-white border-brand-herb'
              : 'border-brand-herb text-brand-herb hover:bg-brand-herb hover:text-white'
            }`}
        >
          <FiShoppingCart size={12} />
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default function PopularProductsSection() {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <section className="max-w-7xl mx-auto px-4 mb-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-5">
        <div className="min-w-fit">
          <h2 className="font-heading text-xl font-bold text-gray-800">Popular Products</h2>
          <p className="text-sm text-gray-400 mt-0.5">Do not miss the current offers</p>
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

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
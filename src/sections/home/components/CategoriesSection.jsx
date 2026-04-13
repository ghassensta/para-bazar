import { Link } from 'react-router-dom'

const CATEGORIES = [
  { img: '🥦', label: 'Fruits &\nVegetables',  path: '/category/fruits' },
  { img: '🥩', label: 'Meats &\nSeafood',      path: '/category/meats' },
  { img: '🥚', label: 'Breaksfast &\nDairy',   path: '/category/dairy' },
  { img: '🥖', label: 'Breads &\nBakery',      path: '/category/breads' },
  { img: '🧃', label: 'Beverages',             path: '/category/beverages' },
  { img: '🧊', label: 'Frozen\nFoods',         path: '/category/frozen' },
  { img: '🍪', label: 'Biscuits &\nSnacks',    path: '/category/snacks' },
  { img: '🛒', label: 'Grocery &\nStaples',    path: '/category/grocery' },
  { img: '🍼', label: 'Baby &\nPregnancy',     path: '/category/baby' },
  { img: '💊', label: 'Healthcare',            path: '/category/healthcare' },
]

export default function CategoriesSection() {
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

      {/* Grid */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
        {CATEGORIES.map((cat, i) => (
          <Link
            key={cat.path}
            to={cat.path}
            className={`flex flex-col items-center gap-2 bg-white border rounded-card py-4 px-2
                        hover:border-brand-herb-300 hover:shadow-medical transition-all group
                        ${i === 0
                          ? 'border-brand-herb-400 shadow-medical'
                          : 'border-gray-100'
                        }`}
          >
            <span className="text-4xl group-hover:scale-110 transition-transform">
              {cat.img}
            </span>
            <span
              className={`text-center leading-tight whitespace-pre-line font-sans text-[11px]
                ${i === 0 ? 'text-brand-herb-700 font-semibold' : 'text-gray-600'}`}
            >
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
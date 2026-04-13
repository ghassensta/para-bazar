import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

const NAV_ITEMS = [
  { label: 'Home',               path: '/' },
  { label: 'Fruits & Vegetables', path: '/category/fruits-vegetables' },
  { label: 'Meats & Seafood',    path: '/category/meats-seafood' },
  { label: 'Breaksfast & Dairy', path: '/category/breakfast-dairy' },
  { label: 'Breads & Bakery',    path: '/category/breads-bakery' },
  { label: 'Beverages',          path: '/category/beverages' },
  { label: 'Frozen Foods',       path: '/category/frozen-foods' },
  { label: 'Biscuits & Snacks',  path: '/category/biscuits-snacks' },
  { label: 'Grocery & Staples',  path: '/category/grocery-staples' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`whitespace-nowrap px-3 py-3 text-sm transition-colors border-b-2 font-sans
                ${pathname === item.path
                  ? 'text-brand-herb border-brand-herb font-semibold'
                  : 'text-gray-600 border-transparent hover:text-brand-herb'
                }`}
            >
              {item.label}
            </Link>
          ))}

          {/* More dropdown */}
          <button className="flex items-center gap-1 whitespace-nowrap px-3 py-3 text-sm text-gray-600 hover:text-brand-herb transition-colors ml-auto">
            More <FiChevronDown size={14} />
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center justify-between py-2">
          <span className="text-sm font-semibold text-gray-700">Categories</span>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1 text-gray-500">
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden flex flex-col pb-3 gap-1">
            {NAV_ITEMS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 text-sm rounded-input transition-colors
                  ${pathname === item.path
                    ? 'bg-brand-herb-50 text-brand-herb-800 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
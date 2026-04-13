import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Fruits & Vegetables', path: '/category/fruits-vegetables' },
  { label: 'Meats & Seafood', path: '/category/meats-seafood' },
  { label: 'Breakfast & Dairy', path: '/category/breakfast-dairy' },
  { label: 'Breads & Bakery', path: '/category/breads-bakery' },
  { label: 'Beverages', path: '/category/beverages' },
  { label: 'Frozen Foods', path: '/category/frozen-foods' },
  { label: 'Biscuits & Snacks', path: '/category/biscuits-snacks' },
  { label: 'Grocery & Staples', path: '/category/grocery-staples' },
]

export default function NavbarSimple() {
  const { pathname } = useLocation()

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className=" mx-auto px-4">
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
        </div>
      </div>
    </nav>
  )
}

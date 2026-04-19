// src/sections/shop/components/ShopSidebar.jsx
import { useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { FaStar, FaRegStar } from 'react-icons/fa'

const CATEGORIES = [
  { id: 'all', label: 'Tout', count: 120 },
  { id: 'visage', label: 'Soins du Visage', count: 34 },
  { id: 'corps', label: 'Soins du Corps', count: 27 },
  { id: 'cheveux', label: 'Cheveux', count: 18 },
  { id: 'vitamines', label: 'Vitamines & Compléments', count: 22 },
  { id: 'bebe', label: 'Bébé & Maman', count: 15 },
  { id: 'solaires', label: 'Solaires', count: 9 },
  { id: 'hygiene', label: 'Hygiène', count: 21 },
]

function FilterBlock({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-gray-100 pb-4 mb-4">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full mb-3"
      >
        <span className="text-sm font-bold text-brand-azure-900 uppercase tracking-wide">
          {title}
        </span>
        {open
          ? <FiChevronUp size={15} className="text-brand-serene-400" />
          : <FiChevronDown size={15} className="text-brand-serene-400" />
        }
      </button>
      {open && children}
    </div>
  )
}

export default function ShopSidebar({ filters, setFilters }) {
  return (
    <aside className="w-full bg-white rounded-card border border-gray-100 shadow-sm p-4">

      {/* Catégories */}
      <FilterBlock title="Catégorie">
        <div className="flex flex-col gap-1.5">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilters(f => ({ ...f, category: cat.id }))}
              className={`flex items-center justify-between text-left px-2.5 py-1.5 rounded-input text-sm transition-colors
                ${filters.category === cat.id
                  ? 'bg-brand-herb-50 text-brand-herb font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-badge
                ${filters.category === cat.id
                  ? 'bg-brand-herb text-white'
                  : 'bg-gray-100 text-gray-500'
                }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </FilterBlock>

      {/* Prix */}
      <FilterBlock title="Prix (TND)">
        <div className="px-1">
          <input
            type="range"
            min={0}
            max={300}
            value={filters.maxPrice}
            onChange={e => setFilters(f => ({ ...f, maxPrice: +e.target.value }))}
            className="w-full accent-brand-herb"
          />
          <div className="flex justify-between text-xs text-brand-serene-600 mt-2 font-medium">
            <span>0 TND</span>
            <span className="text-brand-herb font-bold">{filters.maxPrice} TND</span>
          </div>
        </div>
      </FilterBlock>

      {/* Note */}
      <FilterBlock title="Note Minimale" defaultOpen={true}>
        <div className="flex flex-col gap-1.5">
          {[5, 4, 3, 2, 1].map(star => (
            <button
              key={star}
              onClick={() => setFilters(f => ({ ...f, minRating: star }))}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-input transition-colors text-sm
                ${filters.minRating === star
                  ? 'bg-brand-herb-50 text-brand-herb font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  i <= star
                    ? <FaStar key={i} size={11} className="text-amber-400" />
                    : <FaRegStar key={i} size={11} className="text-amber-200" />
                ))}
              </div>
              {star < 5 && <span className="text-[11px] text-gray-400">& plus</span>}
            </button>
          ))}
          {filters.minRating > 0 && (
            <button
              onClick={() => setFilters(f => ({ ...f, minRating: 0 }))}
              className="text-[11px] text-brand-serene-500 hover:text-brand-herb mt-1 text-left px-2"
            >
              ✕ Réinitialiser
            </button>
          )}
        </div>
      </FilterBlock>

      {/* Remise */}
      <FilterBlock title="Promotions" defaultOpen={false}>
        {[
          { id: 'promo', label: 'En promotion' },
          { id: 'new', label: 'Nouveautés' },
          { id: 'bestseller', label: 'Best-sellers' },
        ].map(item => (
          <label key={item.id} className="flex items-center gap-2 px-2 py-1.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.tags?.includes(item.id) ?? false}
              onChange={e => {
                setFilters(f => {
                  const tags = f.tags || []
                  return {
                    ...f,
                    tags: e.target.checked
                      ? [...tags, item.id]
                      : tags.filter(t => t !== item.id),
                  }
                })
              }}
              className="accent-brand-herb w-3.5 h-3.5 rounded"
            />
            <span className="text-sm text-gray-600 group-hover:text-brand-herb transition-colors">
              {item.label}
            </span>
          </label>
        ))}
      </FilterBlock>
    </aside>
  )
}
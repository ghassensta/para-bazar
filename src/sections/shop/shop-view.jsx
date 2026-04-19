// src/sections/shop/shop-view.jsx
import { useState, useMemo } from 'react'
import { FiGrid, FiList, FiSearch, FiSliders, FiX } from 'react-icons/fi'
import ShopSidebar from './components/ShopSidebar'
import ProductCard from '../../components/product/ProductCard'


// ── Mock products — remplace par ton API ──────────────────────────────────────
const MOCK_PRODUCTS = [
  { id: 1,  name: 'Crème Hydratante Visage SPF 30',       category: 'Soins du Visage',       price: 32.90, oldPrice: 49.90, rating: 4.5, badge: '-34%',     img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop&q=80' },
  { id: 2,  name: 'Sérum Vitamine C Éclat',               category: 'Soins du Visage',       price: 45.00, oldPrice: 60.00, rating: 5,   badge: 'Nouveau',  img: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop&q=80' },
  { id: 3,  name: 'Shampoing Kérastase Nutritive',        category: 'Cheveux',               price: 28.50, oldPrice: null,  rating: 4,   badge: null,        img: 'https://images.unsplash.com/photo-1526758097130-bab247274f58?w=300&h=300&fit=crop&q=80' },
  { id: 4,  name: 'Complément Magnésium Marin',           category: 'Vitamines & Compléments', price: 19.90, oldPrice: 26.00, rating: 4.5, badge: '-24%',   img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop&q=80' },
  { id: 5,  name: 'Lait Corps Karité & Vanille',          category: 'Soins du Corps',        price: 15.90, oldPrice: null,  rating: 4,   badge: null,        img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=300&fit=crop&q=80' },
  { id: 6,  name: 'Crème Solaire SPF 50+ Visage',        category: 'Solaires',              price: 22.00, oldPrice: 29.90, rating: 5,   badge: 'Best',      img: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=300&h=300&fit=crop&q=80' },
  { id: 7,  name: 'Gel Douche Surgras Doux',              category: 'Hygiène',               price: 8.90,  oldPrice: null,  rating: 3.5, badge: null,        img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop&q=80' },
  { id: 8,  name: 'Huile de Coco Bio 100ml',              category: 'Soins du Corps',        price: 12.50, oldPrice: 18.00, rating: 4,   badge: '-31%',      img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop&q=80' },
  { id: 9,  name: 'Masque Visage Argile Blanche',         category: 'Soins du Visage',       price: 14.90, oldPrice: null,  rating: 4.5, badge: null,        img: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300&h=300&fit=crop&q=80' },
  { id: 10, name: 'Vitamine D3 2000 UI — 60 gélules',    category: 'Vitamines & Compléments', price: 16.90, oldPrice: 22.00, rating: 5,  badge: 'Promo',    img: 'https://images.unsplash.com/photo-1559181567-c3190ca9be21?w=300&h=300&fit=crop&q=80' },
  { id: 11, name: 'Dentifrice Blancheur Sensitive',       category: 'Hygiène',               price: 7.50,  oldPrice: null,  rating: 3,   badge: null,        img: 'https://images.unsplash.com/photo-1628251721369-9bab0845261e?w=300&h=300&fit=crop&q=80' },
  { id: 12, name: 'Liniment Oléocalcaire Bébé 480ml',    category: 'Bébé & Maman',          price: 10.90, oldPrice: null,  rating: 5,   badge: 'Nouveau',   img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=300&h=300&fit=crop&q=80' },
]

const SORT_OPTIONS = [
  { value: 'name-az',    label: 'Nom A → Z' },
  { value: 'name-za',    label: 'Nom Z → A' },
  { value: 'price-asc',  label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'rating',     label: 'Meilleures notes' },
]

const PAGE_SIZE = 12

export default function ShopView() {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 300,
    minRating: 0,
    tags: [],
    search: '',
  })
  const [sort, setSort]         = useState('name-az')
  const [page, setPage]         = useState(1)
  const [viewMode, setViewMode] = useState('grid')  // 'grid' | 'list'
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // ── Filter + sort ────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let list = [...MOCK_PRODUCTS]

    if (filters.search)
      list = list.filter(p => p.name.toLowerCase().includes(filters.search.toLowerCase()))

    if (filters.category !== 'all')
      list = list.filter(p => {
        const map = {
          visage:    'Soins du Visage',
          corps:     'Soins du Corps',
          cheveux:   'Cheveux',
          vitamines: 'Vitamines & Compléments',
          bebe:      'Bébé & Maman',
          solaires:  'Solaires',
          hygiene:   'Hygiène',
        }
        return p.category === map[filters.category]
      })

    list = list.filter(p => p.price <= filters.maxPrice)
    list = list.filter(p => p.rating >= filters.minRating)

    if (filters.tags?.includes('promo'))  list = list.filter(p => p.oldPrice)
    if (filters.tags?.includes('new'))    list = list.filter(p => p.badge === 'Nouveau')
    if (filters.tags?.includes('bestseller')) list = list.filter(p => p.badge === 'Best')

    switch (sort) {
      case 'name-az':   list.sort((a, b) => a.name.localeCompare(b.name)); break
      case 'name-za':   list.sort((a, b) => b.name.localeCompare(a.name)); break
      case 'price-asc': list.sort((a, b) => a.price - b.price); break
      case 'price-desc':list.sort((a, b) => b.price - a.price); break
      case 'rating':    list.sort((a, b) => b.rating - a.rating); break
    }

    return list
  }, [filters, sort])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleFilterChange(fn) {
    setFilters(fn)
    setPage(1)
  }

  return (
    <div className="min-h-screen bg-brand-herb-50/30">

      {/* ── Breadcrumb bar ─────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-gray-400">
          <span className="hover:text-brand-herb cursor-pointer transition-colors">Accueil</span>
          <span>/</span>
          <span className="text-brand-herb font-semibold">Produits</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">

        {/* ── Sidebar desktop ─────────────────────────────────────────── */}
        <div className="hidden lg:block w-60 flex-shrink-0">
          <ShopSidebar filters={filters} setFilters={handleFilterChange} />
        </div>

        {/* ── Sidebar mobile drawer ────────────────────────────────────── */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
            <div className="relative w-72 bg-white h-full overflow-y-auto p-4 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-brand-azure-900">Filtres</span>
                <button onClick={() => setSidebarOpen(false)}>
                  <FiX size={18} className="text-gray-500" />
                </button>
              </div>
              <ShopSidebar filters={filters} setFilters={fn => { handleFilterChange(fn); setSidebarOpen(false) }} />
            </div>
          </div>
        )}

        {/* ── Main content ─────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3 mb-5 bg-white rounded-card border border-gray-100 shadow-sm px-4 py-3">

            {/* Search */}
            <div className="relative flex-1 min-w-40">
              <FiSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={filters.search}
                onChange={e => handleFilterChange(f => ({ ...f, search: e.target.value }))}
                className="w-full pl-8 pr-3 py-2 text-sm rounded-input border border-gray-200 focus:outline-none focus:border-brand-herb-300 focus:ring-2 focus:ring-brand-herb-100 bg-gray-50"
              />
            </div>

            {/* Filtre mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex lg:hidden items-center gap-1.5 text-sm text-brand-herb border border-brand-herb-300 px-3 py-2 rounded-btn hover:bg-brand-herb-50 transition-colors"
            >
              <FiSliders size={13} />
              Filtres
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={e => { setSort(e.target.value); setPage(1) }}
              className="text-sm border border-gray-200 rounded-input px-3 py-2 bg-gray-50 focus:outline-none focus:border-brand-herb-300 text-gray-600"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>

            {/* View mode */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-input p-0.5 bg-gray-50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-sm transition-colors ${viewMode === 'grid' ? 'bg-brand-herb text-white' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <FiGrid size={14} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-sm transition-colors ${viewMode === 'list' ? 'bg-brand-herb text-white' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <FiList size={14} />
              </button>
            </div>

            {/* Count */}
            <span className="text-xs text-brand-serene-600 ml-auto whitespace-nowrap">
              {filtered.length} produit{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Active filters chips */}
          {(filters.category !== 'all' || filters.minRating > 0 || filters.search || (filters.tags?.length > 0)) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.search && (
                <Chip label={`"${filters.search}"`} onRemove={() => handleFilterChange(f => ({ ...f, search: '' }))} />
              )}
              {filters.category !== 'all' && (
                <Chip label={filters.category} onRemove={() => handleFilterChange(f => ({ ...f, category: 'all' }))} />
              )}
              {filters.minRating > 0 && (
                <Chip label={`≥ ${filters.minRating}★`} onRemove={() => handleFilterChange(f => ({ ...f, minRating: 0 }))} />
              )}
              {filters.tags?.map(tag => (
                <Chip key={tag} label={tag} onRemove={() => handleFilterChange(f => ({ ...f, tags: f.tags.filter(t => t !== tag) }))} />
              ))}
              <button
                onClick={() => handleFilterChange(() => ({ category: 'all', maxPrice: 300, minRating: 0, tags: [], search: '' }))}
                className="text-xs text-rose-500 hover:text-rose-600 underline"
              >
                Tout effacer
              </button>
            </div>
          )}

          {/* Products grid / list */}
          {paginated.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400">
              <span className="text-5xl mb-3">🔍</span>
              <p className="text-sm font-medium">Aucun produit trouvé</p>
              <p className="text-xs mt-1">Essayez d'ajuster vos filtres</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
              {paginated.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {paginated.map(p => <ProductCardList key={p.id} product={p} />)}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 mt-8">
              <PaginationBtn onClick={() => setPage(1)} disabled={page === 1}>«</PaginationBtn>
              <PaginationBtn onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹</PaginationBtn>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <PaginationBtn key={n} active={n === page} onClick={() => setPage(n)}>
                  {n}
                </PaginationBtn>
              ))}
              <PaginationBtn onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</PaginationBtn>
              <PaginationBtn onClick={() => setPage(totalPages)} disabled={page === totalPages}>»</PaginationBtn>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function Chip({ label, onRemove }) {
  return (
    <span className="flex items-center gap-1 text-xs bg-brand-herb-50 text-brand-herb font-medium px-2.5 py-1 rounded-badge border border-brand-herb-200">
      {label}
      <button onClick={onRemove} className="hover:text-brand-herb-dark ml-0.5">
        <FiX size={11} />
      </button>
    </span>
  )
}

function PaginationBtn({ children, active, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-8 h-8 text-xs font-semibold rounded-input flex items-center justify-center border transition-colors
        ${active
          ? 'bg-brand-herb text-white border-brand-herb shadow-btn'
          : disabled
          ? 'text-gray-300 border-gray-100 cursor-not-allowed'
          : 'text-gray-600 border-gray-200 hover:border-brand-herb-300 hover:text-brand-herb'
        }`}
    >
      {children}
    </button>
  )
}

function ProductCardList({ product }) {
  const [added, setAdded] = useState(false)

  return (
    <div className="flex gap-4 bg-white rounded-card border border-gray-100 hover:border-brand-herb-200 shadow-sm hover:shadow-card transition-all p-3">
      <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-input flex items-center justify-center overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain"
          onError={e => { e.target.src = `https://placehold.co/100x100/EFF9EC/66B04B?text=P` }}
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <p className="text-[10px] text-brand-serene-500 uppercase tracking-wide font-medium">{product.category}</p>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug">{product.name}</h3>
        <div className="flex items-center gap-0.5">
          {[1,2,3,4,5].map(i => (
            <span key={i} className={`text-[11px] ${i <= product.rating ? 'text-amber-400' : 'text-amber-200'}`}>★</span>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-base font-extrabold text-brand-herb">{product.price} TND</span>
          {product.oldPrice && <span className="text-xs text-gray-400 line-through">{product.oldPrice} TND</span>}
          {product.badge && (
            <span className="text-[10px] font-bold bg-brand-herb text-white px-2 py-0.5 rounded-badge">{product.badge}</span>
          )}
        </div>
      </div>
      <div className="flex items-center flex-shrink-0">
        <button
          onClick={() => { setAdded(true); setTimeout(() => setAdded(false), 1500) }}
          className={`text-xs font-bold py-2 px-4 rounded-btn border transition-all
            ${added ? 'bg-brand-herb text-white border-brand-herb' : 'bg-white text-brand-herb border-brand-herb-300 hover:bg-brand-herb hover:text-white'}`}
        >
          {added ? '✓ Ajouté' : '+ Panier'}
        </button>
      </div>
    </div>
  )
}
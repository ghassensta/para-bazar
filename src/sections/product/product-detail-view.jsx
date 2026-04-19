// src/sections/product/product-detail-view.jsx
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import ProductGallery     from './components/ProductGallery'
import ProductInfo        from './components/ProductInfo'
import ProductReviews     from './components/ProductReviews'
import RelatedProducts    from './components/RelatedProducts'

// ── Mock product — remplace par ton appel API (useEffect + fetch/axios) ───────
const MOCK_PRODUCT = {
  id: 1,
  name: "Crème Hydratante Visage Longue Durée SPF 30",
  brand: "Bioderma",
  category: "Soins du Visage",
  categorySlug: "visage",
  price: 32.90,
  oldPrice: 49.90,
  rating: 4.5,
  reviewCount: 101,
  stock: 74693,
  badge: "-34%",
  description: `Une crème hydratante haute performance qui protège votre peau toute la journée grâce à sa formule enrichie en acide hyaluronique et SPF 30.

Convient à tous les types de peau, même les plus sensibles. Texture légère, non grasse, absorption rapide pour un confort optimal du matin au soir.

Formulée sans parabènes, sans sulfates et testée dermatologiquement. Idéale comme base de maquillage.`,
  images: [
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=90',
    'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&h=600&fit=crop&q=90',
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=90',
  ],
}

export default function ProductDetailView() {
  // const { id } = useParams()
  // const [product, setProduct] = useState(null)
  // useEffect(() => { fetch(`/api/products/${id}`).then(...) }, [id])

  const product = MOCK_PRODUCT   // ← remplace par ton état API

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Chargement du produit...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-herb-50/20">

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
          <Link to="/" className="hover:text-brand-herb transition-colors">Accueil</Link>
          <FiChevronRight size={11} />
          <Link to="/shop" className="hover:text-brand-herb transition-colors">Produits</Link>
          <FiChevronRight size={11} />
          <Link
            to={`/shop/category/${product.categorySlug}`}
            className="hover:text-brand-herb transition-colors"
          >
            {product.category}
          </Link>
          <FiChevronRight size={11} />
          <span className="text-brand-herb font-semibold truncate max-w-[160px]">{product.name}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-0">

        {/* ── Product top section ────────────────────────────────────────── */}
        <div className="bg-white rounded-card border border-gray-100 shadow-sm p-5 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Gallery */}
            <div className="md:max-w-sm w-full mx-auto">
              <ProductGallery images={product.images} badge={product.badge} />
            </div>

            {/* Info */}
            <ProductInfo product={product} />
          </div>
        </div>

        {/* ── Tabs (description + reviews) ──────────────────────────────── */}
        <ProductReviews description={product.description} />

        {/* ── Related products ──────────────────────────────────────────── */}
        <RelatedProducts />

      </div>
    </div>
  )
}
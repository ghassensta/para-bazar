import { useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const MOCK_REVIEWS = [
  {
    id: 1,
    name: 'Amine Ben Ali',
    initials: 'AB',
    date: '2025-12-10',
    rating: 5,
    comment: 'Excellent produit, je suis très satisfait de la qualité. La livraison était rapide et l\'emballage parfait. Je recommande vivement à tous ceux qui cherchent un bon rapport qualité-prix.',
    color: 'bg-brand-herb-100 text-brand-herb-800',
  },
  {
    id: 2,
    name: 'Nadia Chouiref',
    initials: 'NC',
    date: '2025-11-28',
    rating: 4,
    comment: 'Très bon produit dans l\'ensemble. Correspond bien à la description. Le seul bémol est le délai de livraison un peu plus long qu\'annoncé, mais le produit vaut largement l\'attente.',
    color: 'bg-brand-azure-100 text-brand-azure-800',
  },
]

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(i => (
        <button
          key={i}
          type="button"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(i)}
          className="transition-transform hover:scale-110"
        >
          {i <= (hovered || value)
            ? <FaStar size={20} className="text-amber-400" />
            : <FaRegStar size={20} className="text-amber-300" />
          }
        </button>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${review.color}`}>
        {review.initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
          <div>
            <p className="text-sm font-bold text-gray-800">{review.name}</p>
            <p className="text-[11px] text-gray-400">{review.date}</p>
          </div>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              i <= review.rating
                ? <FaStar key={i} size={11} className="text-amber-400" />
                : <FaRegStar key={i} size={11} className="text-amber-200" />
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
      </div>
    </div>
  )
}

export default function ProductReviews({ description }) {
  const [tab, setTab] = useState('description')
  const [reviews, setReviews] = useState(MOCK_REVIEWS)
  const [form, setForm] = useState({ comment: '', rating: 0, name: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.comment.trim() || form.rating === 0) return
    const newReview = {
      id: Date.now(),
      name: form.name.trim() || 'Anonyme',
      initials: (form.name.trim() || 'AN').slice(0, 2).toUpperCase(),
      date: new Date().toISOString().slice(0, 10),
      rating: form.rating,
      comment: form.comment.trim(),
      color: 'bg-brand-medical-100 text-brand-medical-800',
    }
    setReviews(r => [newReview, ...r])
    setForm({ comment: '', rating: 0, name: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const tabs = [
    { key: 'description', label: 'Description' },
    { key: 'reviews',     label: `Avis (${reviews.length})` },
  ]

  return (
    <div className="mt-8 bg-white rounded-card border border-gray-100 shadow-sm overflow-hidden">

      {/* Tab bar */}
      <div className="flex border-b border-gray-100">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`relative px-6 py-3.5 text-sm font-semibold transition-colors
              ${tab === t.key
                ? 'text-brand-herb'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {t.label}
            {tab === t.key && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-herb rounded-t-full"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {tab === 'description' ? (
          <motion.div
            key="description"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="p-6"
          >
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {description || 'Aucune description disponible pour ce produit.'}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="reviews"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="p-6"
          >
            {/* Q&A title */}
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
              Questions & avis clients
            </h3>

            {/* Reviews list */}
            <div className="mb-8">
              {reviews.length === 0 ? (
                <p className="text-sm text-gray-400 py-4 text-center">
                  Aucun avis pour l'instant. Soyez le premier !
                </p>
              ) : (
                reviews.map(r => <ReviewCard key={r.id} review={r} />)
              )}
            </div>

            {/* Add review form */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold text-gray-700 mb-4">Laisser un avis</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    placeholder="Prénom Nom (optionnel)"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-input bg-gray-50 focus:outline-none focus:border-brand-herb-300 focus:ring-2 focus:ring-brand-herb-100 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Votre avis
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Partagez votre expérience avec ce produit..."
                    value={form.comment}
                    onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-input bg-gray-50 focus:outline-none focus:border-brand-herb-300 focus:ring-2 focus:ring-brand-herb-100 transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">
                    Note
                  </label>
                  <StarPicker value={form.rating} onChange={v => setForm(f => ({ ...f, rating: v }))} />
                </div>

                {submitted && (
                  <p className="text-sm text-brand-herb font-semibold bg-brand-herb-50 border border-brand-herb-200 rounded-input px-3 py-2">
                    ✓ Merci pour votre avis !
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!form.comment.trim() || form.rating === 0}
                  className="self-start bg-brand-herb hover:bg-brand-herb-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm px-6 py-2.5 rounded-btn shadow-btn transition-all duration-200"
                >
                  Soumettre l'avis
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
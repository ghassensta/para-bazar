import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiUser, FiClock } from 'react-icons/fi'

const POSTS = [
  {
    id: 1,
    tag: 'Health & Nutrition',
    title: 'Top 10 Organic Foods You Should Add to Your Diet',
    excerpt: 'Discover the most powerful organic foods that boost your immunity and improve your overall health naturally.',
    author: 'Dr. Sarah M.',
    date: 'April 10, 2026',
    readTime: '5 min read',
    img: 'https://placehold.co/400x220/f0fdf4/16a34a?text=Organic+Foods',
    path: '/blog/organic-foods',
  },
  {
    id: 2,
    tag: 'Recipes',
    title: 'Quick & Easy Breakfast Recipes for Busy Mornings',
    excerpt: 'Start your day right with these simple, nutritious, and delicious breakfast ideas ready in under 15 minutes.',
    author: 'Chef Lina B.',
    date: 'April 8, 2026',
    readTime: '4 min read',
    img: 'https://placehold.co/400x220/fff7ed/ea580c?text=Breakfast',
    path: '/blog/breakfast-recipes',
  },
  {
    id: 3,
    tag: 'Wellness',
    title: 'How to Choose the Best Dairy Products for Your Family',
    excerpt: 'A complete guide to understanding labels, ingredients, and what to look for when buying dairy products.',
    author: 'Emma T.',
    date: 'April 5, 2026',
    readTime: '6 min read',
    img: 'https://placehold.co/400x220/eff6ff/2563eb?text=Dairy',
    path: '/blog/dairy-guide',
  },
]

const TAG_COLORS = {
  'Health & Nutrition': 'bg-brand-herb-50 text-brand-herb-700',
  'Recipes':            'bg-brand-azure-50 text-brand-azure-700',
  'Wellness':           'bg-brand-medical-50 text-brand-medical-700',
}

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-2xs font-bold text-brand-herb uppercase tracking-widest mb-1">
            Our Blog
          </p>
          <h2 className="font-heading text-xl font-bold text-gray-800">
            Latest Articles & Tips
          </h2>
        </div>
        <Link
          to="/blog"
          className="flex items-center gap-1 text-sm text-brand-herb font-semibold hover:text-brand-herb-dark transition-colors"
        >
          View All <FiArrowRight size={14} />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {POSTS.map(post => (
          <Link
            key={post.id}
            to={post.path}
            className="bg-white border border-gray-100 rounded-card shadow-card hover:shadow-medical transition-all group flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden h-48">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1">

              {/* Tag */}
              <span className={`self-start text-2xs font-bold px-2.5 py-1 rounded-badge ${TAG_COLORS[post.tag] || 'bg-gray-100 text-gray-600'}`}>
                {post.tag}
              </span>

              {/* Title */}
              <h3 className="font-heading text-base font-bold text-gray-800 leading-snug group-hover:text-brand-herb transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                <span className="flex items-center gap-1 text-2xs text-gray-400">
                  <FiUser size={11} /> {post.author}
                </span>
                <span className="flex items-center gap-1 text-2xs text-gray-400">
                  <FiCalendar size={11} /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-2xs text-gray-400 ml-auto">
                  <FiClock size={11} /> {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi'
import logo from '../assets/images/para-bazar-logo.png'
export default function Header() {
  const [search, setSearch] = useState('')
  const cartCount = 1
  const wishCount = 2

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className=" mx-auto px-4 py-3 flex items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-fit">
          <img src={logo} alt="BoroJaar" className="h-9 w-auto" />
          <span className="font-heading font-bold text-xl text-brand-herb-800 hidden sm:block">
            Para Bazar
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-input px-4 py-2 pr-10 text-sm font-sans
                       focus:outline-none focus:ring-2 focus:ring-brand-serene-300 focus:border-brand-serene-400
                       placeholder-gray-400 text-gray-700"
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Auth */}
          <div className="hidden md:flex items-center gap-1 text-sm text-gray-600">
            <Link to="/login" className="hover:text-brand-herb transition-colors">Login</Link>
            <span className="text-gray-300">|</span>
            <Link to="/register" className="hover:text-brand-herb transition-colors">Register</Link>
          </div>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative p-1.5 text-gray-500 hover:text-brand-herb transition-colors">
            <FiHeart size={22} />
            {wishCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-herb text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative p-1.5 text-gray-500 hover:text-brand-herb transition-colors">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-herb text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
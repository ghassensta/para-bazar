// src/components/Navbar.jsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import { useDropdown } from '../hooks/use-dropdown'
import { NAV_ITEMS } from './navbar.config'

// ─────────────────────────────────────────────────────────────
// Mega Dropdown Panel
// ─────────────────────────────────────────────────────────────
function MegaDropdown({ item, onClose }) {
  if (!item.children) return null

  return (
    <div className="absolute top-full left-0 mt-0 z-50 w-64 bg-white border border-gray-100 rounded-b-card rounded-tr-card shadow-card overflow-hidden">

      {/* Header */}
      <div className="bg-brand-herb-50 border-b border-brand-herb-100 px-4 py-3 flex items-center gap-2">
        <span className="text-xl">{item.icon}</span>
        <div>
          <p className="text-xs font-bold text-brand-herb-700 leading-none">{item.label}</p>
          <p className="text-2xs text-brand-herb-500 mt-0.5">{item.children.length} subcategories</p>
        </div>
        <Link
          to={item.path}
          onClick={onClose}
          className="ml-auto flex items-center gap-1 text-2xs text-brand-herb-600 font-semibold hover:text-brand-herb transition-colors"
        >
          View all <FiArrowRight size={10} />
        </Link>
      </div>

      {/* Items */}
      <ul className="py-1.5">
        {item.children.map((child) => (
          <li key={child.path}>
            <Link
              to={child.path}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-brand-herb-50 hover:text-brand-herb-700 transition-colors group"
            >
              <span className="text-base w-5 text-center">{child.icon}</span>
              <span className="font-sans flex-1">{child.label}</span>
              <FiArrowRight
                size={12}
                className="text-gray-300 group-hover:text-brand-herb-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Single Desktop Nav Item
// ─────────────────────────────────────────────────────────────
function NavItem({ item, isActive }) {
  const { open, toggle, close, ref } = useDropdown()
  const hasChildren = Boolean(item.children?.length)

  return (
    <div ref={ref} className="relative">
      {hasChildren ? (
        <button
          onClick={toggle}
          aria-expanded={open}
          className={`flex items-center gap-1 whitespace-nowrap px-3 py-3 text-sm border-b-2 transition-all font-sans
            ${isActive || open
              ? 'text-brand-herb border-brand-herb font-semibold'
              : 'text-gray-600 border-transparent hover:text-brand-herb hover:border-brand-herb-200'
            }`}
        >
          {item.label}
          <FiChevronDown
            size={13}
            className={`transition-transform duration-200 ${open ? 'rotate-180 text-brand-herb' : ''}`}
          />
        </button>
      ) : (
        <Link
          to={item.path}
          className={`flex items-center whitespace-nowrap px-3 py-3 text-sm border-b-2 transition-all font-sans
            ${isActive
              ? 'text-brand-herb border-brand-herb font-semibold'
              : 'text-gray-600 border-transparent hover:text-brand-herb hover:border-brand-herb-200'
            }`}
        >
          {item.label}
        </Link>
      )}

      {/* Dropdown */}
      {hasChildren && open && (
        <MegaDropdown item={item} onClose={close} />
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Mobile Accordion Item
// ─────────────────────────────────────────────────────────────
function MobileNavItem({ item, isActive, onClose }) {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = Boolean(item.children?.length)

  return (
    <div className="border-b border-gray-50 last:border-0">

      {/* Main row */}
      <div className="flex items-center">
        <Link
          to={item.path}
          onClick={() => !hasChildren && onClose()}
          className={`flex-1 flex items-center gap-2.5 px-4 py-3 text-sm font-sans transition-colors
            ${isActive
              ? 'text-brand-herb-700 font-semibold bg-brand-herb-50'
              : 'text-gray-700 hover:bg-gray-50'
            }`}
        >
          {item.icon && <span className="text-base">{item.icon}</span>}
          {item.label}
        </Link>

        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-3 text-gray-400 hover:text-brand-herb transition-colors"
            aria-label={expanded ? 'Collapse' : 'Expand'}
          >
            <FiChevronDown
              size={15}
              className={`transition-transform duration-200 ${expanded ? 'rotate-180 text-brand-herb' : ''}`}
            />
          </button>
        )}
      </div>

      {/* Sub-items */}
      {hasChildren && expanded && (
        <div className="bg-gray-50 border-t border-gray-100">
          {item.children.map(child => (
            <Link
              key={child.path}
              to={child.path}
              onClick={onClose}
              className="flex items-center gap-3 px-6 py-2.5 text-sm text-gray-500 hover:text-brand-herb-700 hover:bg-brand-herb-50 transition-colors font-sans"
            >
              <span className="text-sm">{child.icon}</span>
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Main Navbar
// ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav className="bg-white border-b border-gray-100 shadow-sm relative z-40">
        <div className="max-w-7xl mx-auto px-4">

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1 flex-wrap">
            {NAV_ITEMS.map(item => (
              <NavItem
                key={item.path}
                item={item}
                isActive={pathname === item.path || pathname.startsWith(item.path + '/')}
              />
            ))}
          </div>

          {/* ── Mobile Toggle ── */}
          <div className="md:hidden flex items-center justify-between py-2.5">
            <span className="text-sm font-semibold text-gray-700 font-sans">
              All Categories
            </span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-gray-500 hover:text-brand-herb transition-colors rounded-input hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
            onClick={closeMobile}
          />

          {/* Panel */}
          <div className="fixed top-0 left-0 h-full w-72 bg-white z-40 md:hidden shadow-card overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-brand-herb-50">
              <span className="font-heading font-bold text-brand-herb-800">All Categories</span>
              <button
                onClick={closeMobile}
                className="p-1.5 text-gray-500 hover:text-brand-herb transition-colors"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex flex-col">
              {NAV_ITEMS.map(item => (
                <MobileNavItem
                  key={item.path}
                  item={item}
                  isActive={pathname === item.path}
                  onClose={closeMobile}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
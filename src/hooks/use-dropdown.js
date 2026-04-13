// src/hooks/use-dropdown.js
import { useState, useRef, useEffect } from 'react'

export function useDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const close = () => setOpen(false)
  const toggle = () => setOpen(prev => !prev)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return { open, toggle, close, ref }
}
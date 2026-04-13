// src/App.jsx
import { Toaster } from 'sonner'
import { Router } from './router'
import { useScrollToTop } from './hooks/use-scroll-to-top'

export default function App() {
  useScrollToTop()

  return (
    <>
      <Router />
      <Toaster
        position="top-right"
        richColors
        closeButton
      />
    </>
  )
}
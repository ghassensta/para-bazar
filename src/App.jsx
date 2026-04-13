import { Router } from './router'
import { useScrollToTop } from './hooks/use-scroll-to-top'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  useScrollToTop()

  return (
    <>
      <Router />
      <ToastContainer position="top-right" autoClose={3000} closeOnClick pauseOnHover />
    </>
  )
}
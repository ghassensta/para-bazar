
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import LayoutTheme    from '../layouts/layout'
import LoadingScreen  from '../components/loading-screen/loading-screen'

const Index   = lazy(() => import('../pages/home/index'))
const Shop    = lazy(() => import('../pages/shop/index'))
const Product = lazy(() => import('../pages/product/index'))   // ← NOUVEAU
const NotFound = lazy(() => import('../pages/not-found'))

export const routes = [
  {
    path: '/',
    element: (
      <LayoutTheme>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </LayoutTheme>
    ),
    children: [
      { index: true,  element: <Index /> },
      { path: 'home', element: <Index /> },

      // ── Shop ───────────────────────────────────────────────
      { path: 'shop',                       element: <Shop /> },
      { path: 'shop/category/:slug',        element: <Shop /> },

      // ── Product detail ─────────────────────────────────────
      { path: 'product/:id',                element: <Product /> },   // ← NOUVEAU

      // ── Catégories ─────────────────────────────────────────
      { path: 'category/:slug',             element: <Index /> },
      { path: 'category/:slug/:subSlug',    element: <Index /> },

      // ── 404 ────────────────────────────────────────────────
      { path: '*', element: <NotFound /> },
    ],
  },
]

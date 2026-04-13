import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import LayoutTheme from '../layouts/layout'
import LoadingScreen from '../components/loading-screen/loading-screen'
import { AuthGuard } from '../auth/guard/auth-guard'

const Index      = lazy(() => import('../pages/home/index'))
const NotFound   = lazy(() => import('../pages/not-found'))     // ← à créer

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
      { index: true,    element: <Index /> },
      { path: 'home',   element: <Index /> },

      // ── Routes catégories ──────────────────────────────────
      { path: 'category/:slug',             element: <Index /> }, // temporaire
      { path: 'category/:slug/:subSlug',    element: <Index /> }, // sous-catégories

      // ── 404 catch-all ──────────────────────────────────────
      { path: '*', element: <NotFound /> },
    ],
  },
]
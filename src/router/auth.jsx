import { lazy, Suspense } from 'react'
import AuthLayout from '../layouts/authLayout'
import LoadingScreen from '../components/loading-screen/loading-screen'
import { GuestGuard } from '../auth/guard/guest-guard'

const LoginPage    = lazy(() => import('../pages/auth/login'))
const RegisterPage = lazy(() => import('../pages/auth/register'))
const ForgotPage   = lazy(() => import('../pages/auth/forgot'))
const ResetPage    = lazy(() => import('../pages/auth/reset'))

export const authRoutes = [
  {
    path: '/auth',
    element: (
      <GuestGuard>
        <AuthLayout>
          <Suspense fallback={<LoadingScreen />}>
            <div />
          </Suspense>
        </AuthLayout>
      </GuestGuard>
    ),
    children: [
      { path: 'login',          element: <LoginPage /> },
      { path: 'register',       element: <RegisterPage /> },
      { path: 'forget-password', element: <ForgotPage /> },
      { path: 'reset-password', element: <ResetPage /> },
    ],
  },
]
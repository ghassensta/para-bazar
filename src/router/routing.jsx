import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import LayoutTheme from "../layouts/layout";
import LoadingScreen from "../components/loading-screen/loading-screen";
import DashboardLayout from "../layouts/dashboardLayout";
import { AuthGuard } from "../auth/guard/auth-guard";

// Pages principales
const Index = lazy(() => import("../pages/home/index"));

export const routes = [
  {
    path: "/",
    element: (
      <LayoutTheme>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </LayoutTheme>
    ),
    children: [
      // === Anciennes routes dynamiques ===
      { element: <Index />, index: true },
      { element: <Index />, path: "home" },
      {
        element: (
          <AuthGuard>
          </AuthGuard>
        ),
      },
   
      // === Nouvelles routes statiques ===
      // { element: <ViewProduct />, path: "spa" },
      //{ element: <Conditions />, path: "conditions" },

     
      // === Dashboard ===
      {
        path: "dashboard",
        element: (
          <AuthGuard>
            <DashboardLayout>
              <Suspense fallback={<LoadingScreen />}>
                <Outlet />
              </Suspense>
            </DashboardLayout>
          </AuthGuard>
        ),
        children: [
       //   { element: <DashboardMain />, index: true },

          

         // { path: "*", element: <DashboardMain /> },
        ],
      },
    ],
  },
];
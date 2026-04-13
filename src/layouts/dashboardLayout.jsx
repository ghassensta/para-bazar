import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Dashboard</h2>
            <nav className="space-y-2">
              <a href="/dashboard" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Overview</a>
              <a href="/dashboard/commandes" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Orders</a>
              <a href="/dashboard/bon-achats" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">Purchase Orders</a>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1">
          <div className="p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

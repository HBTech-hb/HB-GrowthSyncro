import React, { useState } from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)
  const isActive = (path) => location.pathname === path

  return (
    <div className="flex h-screen bg-slate-50 font-poppins overflow-hidden">
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white flex items-center justify-between px-4 z-40 shadow-sm">
        <h3 className="text-lg font-bold text-blue-500">Admin Panel</h3>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white"
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:static top-0 bottom-0 left-0 w-64 bg-slate-900 text-white p-6 flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 shrink-0`}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-blue-500">Admin Panel</h3>
            <button onClick={closeSidebar} className="md:hidden text-slate-400">
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3" style={{ backgroundColor: 'transparent' }}>
            <Link
              to="/admin/dashboard"
              onClick={closeSidebar}
              style={{
                backgroundColor: isActive('/admin/dashboard') ? '#2563eb' : '#1e293b',
                color: '#ffffff'
              }}
              className="px-4 py-3 rounded-xl font-medium transition flex items-center gap-3 hover:opacity-90"
            >
              <span>📊</span>
              <span>Dashboard</span>
            </Link>

            <Link
              to="/admin/leads"
              onClick={closeSidebar}
              style={{
                backgroundColor: isActive('/admin/leads') ? '#2563eb' : '#1e293b',
                color: '#ffffff'
              }}
              className="px-4 py-3 rounded-xl font-medium transition flex items-center gap-3 hover:opacity-90"
            >
              <span>📬</span>
              <span>Leads Management</span>
            </Link>

            {/* NEW: Projects Management Link */}
            <Link
              to="/admin/projects"
              onClick={closeSidebar}
              style={{
                backgroundColor: isActive('/admin/projects') ? '#2563eb' : '#1e293b',
                color: '#ffffff'
              }}
              className="px-4 py-3 rounded-xl font-medium transition flex items-center gap-3 hover:opacity-90"
            >
              <span>📁</span>
              <span>Projects Management</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition font-medium flex items-center justify-center gap-2 shadow-sm"
          >
            <span>🚪</span>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 md:p-8 mt-16 md:mt-0 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
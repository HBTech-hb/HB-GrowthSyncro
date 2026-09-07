import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ total: 0, pending: 0, contacted: 0 })
  const [recentLeads, setRecentLeads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && data) {
        setRecentLeads(data.slice(0, 5))
        setStats({
          total: data.length,
          pending: data.filter((l) => l.status === 'pending').length,
          contacted: data.filter((l) => l.status === 'contacted').length,
        })
      }
      setLoading(false)
    }

    fetchDashboardData()
  }, [])

  if (loading) {
    return <div className="p-4 text-slate-500">Loading metrics...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Overview of your lead pipeline performance.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Leads</p>
          <p className="text-3xl font-extrabold text-slate-900 mt-2">{stats.total}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-500">Pending</p>
          <p className="text-3xl font-extrabold text-amber-600 mt-2">{stats.pending}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">Contacted</p>
          <p className="text-3xl font-extrabold text-emerald-600 mt-2">{stats.contacted}</p>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Submissions</h2>
        <div className="divide-y divide-slate-100">
          {recentLeads.map((lead) => (
            <div key={lead.id} className="py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">{lead.name}</p>
                <p className="text-xs text-slate-500">{lead.email}</p>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                lead.status === 'pending' 
                  ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              }`}>
                {lead.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function LeadsPage() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  // 1. NEW STATES FOR SEARCH & FILTER
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  useEffect(() => {
    fetchLeads()

    const channel = supabase
      .channel('leads-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'leads' },
        () => fetchLeads()
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) console.error('Error fetching leads:', error.message)
    else setLeads(data)
    setLoading(false)
  }

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'pending' ? 'contacted' : 'pending'

    const { error } = await supabase
      .from('leads')
      .update({ status: newStatus })
      .eq('id', id)

    if (error) alert(error.message)
    else fetchLeads()
  }

  const handleDeleteLead = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return

    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id)

    if (error) alert(error.message)
    else fetchLeads()
  }

  // 2. CSV EXPORT FUNCTION
  const exportToCSV = () => {
    if (leads.length === 0) return alert('No leads to export!')
    const headers = ['ID,Name,Email,Status,Created At\n']
    const rows = leads.map(
      (l) => `"${l.id}","${l.name}","${l.email}","${l.status}","${l.created_at}"\n`
    )
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
  }

  // 3. FILTERED LEADS COMPUTATION
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 font-poppins">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Leads Management
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review inbound leads, filter records, or download reports.
          </p>
        </div>

        {/* Export Button */}
        <button
          onClick={exportToCSV}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-sm self-start sm:self-auto"
        >
          📥 Export CSV
        </button>
      </div>

      {/* 4. SEARCH & FILTER CONTROLS BAR */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sm:col-span-2 p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending Only</option>
          <option value="contacted">Contacted Only</option>
        </select>
      </div>

      {/* LEADS TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-6 text-slate-500 text-sm">Loading leads...</div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-6 text-slate-500 text-sm">No matching leads found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500 tracking-wider">
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 font-semibold text-slate-800">{lead.name}</td>
                    <td className="p-4 text-slate-600">{lead.email}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                          lead.status === 'pending'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleToggleStatus(lead.id, lead.status)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                          lead.status === 'pending'
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                        }`}
                      >
                        {lead.status === 'pending' ? 'Mark Contacted' : 'Mark Pending'}
                      </button>
                      <button
                        onClick={() => handleDeleteLead(lead.id)}
                        className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-lg text-xs font-semibold transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
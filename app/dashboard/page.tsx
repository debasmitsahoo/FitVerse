'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Registration {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  plan: string
  message?: string
}

export default function Dashboard() {
  const router = useRouter()
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
        return
      }
      setLoading(false)
    }

    checkAuth()

    // Initial fetch
    fetchRegistrations()

    // Subscribe to real-time changes
    const channel = supabase
      .channel('registrations')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'registrations'
        },
        (payload) => {
          console.log('Change received!', payload)
          fetchRegistrations()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [router])

  const fetchRegistrations = async () => {
    const { data, error } = await supabase
      .from('registrations')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching registrations:', error)
      return
    }

    setRegistrations(data || [])
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#111] to-[#1a1a1a] text-white flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <svg className="animate-spin h-8 w-8 text-[#45ffca]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-2xl">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#111] to-[#1a1a1a] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Gym <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45ffca] to-[#45ffca]/70">Dashboard</span>
            </h1>
            <p className="text-gray-400">Manage your gym registrations and members</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-gradient-to-r from-[#45ffca] to-[#45ffca]/80 text-black rounded-lg hover:shadow-[0_0_20px_#45ffca] hover:from-[#45ffca]/90 hover:to-[#45ffca]/70 transition-all duration-300 font-semibold"
          >
            Logout
          </button>
        </div>
        
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#45ffca]/10">
              <thead className="bg-black/30">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#45ffca] uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#45ffca] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#45ffca] uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#45ffca] uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#45ffca] uppercase tracking-wider">Plan</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#45ffca] uppercase tracking-wider">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#45ffca]/10">
                {registrations.map((registration) => (
                  <tr key={registration.id} className="hover:bg-[#45ffca]/5 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(registration.created_at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{registration.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {registration.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {registration.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#45ffca]/10 text-[#45ffca]">
                        {registration.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                      {registration.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 
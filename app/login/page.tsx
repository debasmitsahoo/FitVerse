'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/dashboard')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-[#111] to-[#1a1a1a] text-white pt-32 pb-20 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Gym Owner <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45ffca] to-[#45ffca]/70">Login</span>
          </h1>
          <p className="text-gray-400 text-lg">Access your gym management dashboard</p>
        </div>

        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-lg backdrop-blur-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-lg font-medium block text-gray-300">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-4 bg-black/50 border-2 border-[#45ffca]/20 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-lg transition-all duration-300"
                  placeholder="Enter your email"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#45ffca]/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none group-focus-within:opacity-100"></div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-lg font-medium block text-gray-300">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full p-4 bg-black/50 border-2 border-[#45ffca]/20 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-lg transition-all duration-300"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#45ffca]/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none group-focus-within:opacity-100"></div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#45ffca] to-[#45ffca]/80 text-black text-xl font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_#45ffca] hover:from-[#45ffca]/90 hover:to-[#45ffca]/70 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </span>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#45ffca]/5 to-transparent rounded-lg border border-[#45ffca]/10">
            <h3 className="text-lg font-semibold mb-3 text-[#45ffca]">Demo Credentials</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <span className="w-20">Email:</span>
                <span className="font-mono">admin@fitverse.com</span>
              </p>
              <p className="flex items-center">
                <span className="w-20">Password:</span>
                <span className="font-mono">admin123</span>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-[#45ffca] text-lg hover:text-[#45ffca]/80 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 
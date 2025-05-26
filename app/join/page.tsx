'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from "next/link"

export default function JoinPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'BASIC',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('registrations')
        .insert([formData])

      if (error) throw error

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: 'BASIC',
        message: ''
      })

      // Show success message or redirect
      alert('Registration successful! We will contact you soon.')
      router.push('/')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">
          Join <span className="text-[#45ffca]">FitVerse</span>
        </h1>

        <div className="bg-[#111] p-8 rounded-2xl shadow-lg shadow-[#45ffca]/20">
          <h2 className="text-3xl font-semibold mb-6 text-center">Registration Form</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xl font-medium block">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border-2 border-[#45ffca]/50 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-lg"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xl font-medium block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border-2 border-[#45ffca]/50 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xl font-medium block">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-black border-2 border-[#45ffca]/50 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-lg"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="plan" className="text-xl font-medium block">
                Membership Plan
              </label>
              <select
                id="plan"
                name="plan"
                required
                value={formData.plan}
                onChange={handleChange}
                className="w-full p-3 bg-black border-2 border-[#45ffca]/50 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-lg"
              >
                <option value="BASIC">BASIC - ₹800/Month</option>
                <option value="PRO">PRO - ₹1500/Month</option>
                <option value="PREMIUM">PREMIUM - ₹2500/Month</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xl font-medium block">
                Additional Information (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-black border-2 border-[#45ffca]/50 rounded-lg focus:border-[#45ffca] focus:outline-none text-white text-lg"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-[#45ffca] text-black text-xl font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_#45ffca] hover:bg-[#45ffca]/90 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Join Now'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="text-[#45ffca] text-lg hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

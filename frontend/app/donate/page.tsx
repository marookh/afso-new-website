'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DonatePage() {
  const [customAmount, setCustomAmount] = useState('')

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || (parseFloat(value) >= 0)) {
      setCustomAmount(value)
    }
  }
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Support Our Mission</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your generous donation helps us continue our work in supporting university women in Afghanistan through education and academic support.
        </p>
      </div>

      {/* Why Donate Section */}
      <section className="mb-12 rounded-lg p-8" style={{ backgroundColor: '#135f5c', color: '#FFFFFF' }}>
        <h2 className="text-2xl font-semibold mb-4 text-white">Why Your Support Matters</h2>
        <ul className="space-y-3 text-white">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-white mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Your donation directly supports educational programs that empower university women in Afghanistan</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-white mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Helps build academic bridges for students seeking enrollment in degree-granting institutions</span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-white mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Creates lasting positive change by educating the future leaders of Afghanistan</span>
          </li>
        </ul>
      </section>

      {/* Donation Options */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Ways to Give</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-colors hover:border-[#135f5c]">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">One-Time Donation</h3>
            <p className="text-gray-600 mb-4">
              Make a single donation to support our programs and initiatives.
            </p>
            <button className="w-full text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors" style={{ backgroundColor: '#135f5c' }}>
              Donate Now
            </button>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-colors hover:border-[#135f5c]">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Monthly Giving</h3>
            <p className="text-gray-600 mb-4">
              Become a monthly donor and provide consistent support for our ongoing programs.
            </p>
            <button className="w-full text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors" style={{ backgroundColor: '#135f5c' }}>
              Set Up Monthly Donation
            </button>
          </div>
        </div>
      </section>

      {/* Donation Amounts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Suggested Donation Amounts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[25, 50, 100, 250, 500, 1000].map((amount) => (
            <button
              key={amount}
              className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center hover:border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <span className="text-2xl font-bold text-gray-900">${amount}</span>
            </button>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="number"
            placeholder="Enter custom amount"
            min="0"
            step="0.01"
            value={customAmount}
            onChange={handleAmountChange}
            onKeyDown={(e) => {
              if (e.key === '-' || e.key === 'e' || e.key === 'E' || e.key === '+') {
                e.preventDefault()
              }
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </section>

      {/* Tax Information */}
      <section className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">Tax-Deductible Donations</h3>
        <p className="text-gray-600 text-sm">
          AFSO is a registered 501(c)(3) non-profit organization. All donations are tax-deductible
          to the extent allowed by law. You will receive a receipt for your donation for tax purposes.
        </p>
      </section>

      {/* Contact for Other Ways to Give */}
      <section className="text-center bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Other Ways to Support</h2>
        <p className="text-gray-700 mb-6">
          Interested in corporate sponsorship, in-kind donations, or planned giving? We'd love to discuss
          how you can support our mission.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}


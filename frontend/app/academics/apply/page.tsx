'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentEducation: '',
    desiredProgram: '',
    background: '',
    goals: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // TODO: Connect to your backend/application service
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        currentEducation: '',
        desiredProgram: '',
        background: '',
        goals: '',
      })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#135f5c' }}>Apply to AFSO</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our academic bridge programs and connect with volunteer professors from around the world.
        </p>
      </div>

      {/* Application Information */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Application Information</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#135f5c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Open to university women in Afghanistan at all levels</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#135f5c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No application fee required</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#135f5c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Programs designed to prepare you for enrollment in degree-granting institutions</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#135f5c] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Access to volunteer professors from around the world</span>
          </li>
        </ul>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135f5c] focus:border-[#135f5c]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135f5c] focus:border-[#135f5c]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135f5c] focus:border-[#135f5c]"
            />
          </div>

          <div>
            <label htmlFor="currentEducation" className="block text-sm font-medium text-gray-700 mb-2">
              Current Education Level *
            </label>
            <select
              id="currentEducation"
              name="currentEducation"
              required
              value={formData.currentEducation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135f5c] focus:border-[#135f5c]"
            >
              <option value="">Select your education level</option>
              <option value="high-school">High School Graduate</option>
              <option value="some-university">Some University (Incomplete)</option>
              <option value="university-student">Currently Enrolled in University</option>
              <option value="university-graduate">University Graduate</option>
            </select>
          </div>

          <div>
            <label htmlFor="desiredProgram" className="block text-sm font-medium text-gray-700 mb-2">
              Desired Program or Area of Study
            </label>
            <input
              type="text"
              id="desiredProgram"
              name="desiredProgram"
              value={formData.desiredProgram}
              onChange={handleChange}
              placeholder="e.g., Computer Science, Business, Medicine, etc."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135f5c] focus:border-[#135f5c]"
            />
          </div>

          <div>
            <label htmlFor="background" className="block text-sm font-medium text-gray-700 mb-2">
              Educational Background *
            </label>
            <textarea
              id="background"
              name="background"
              required
              rows={4}
              value={formData.background}
              onChange={handleChange}
              placeholder="Please describe your educational background and any relevant experience..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135f5c] focus:border-[#135f5c]"
            />
          </div>

          <div>
            <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
              Educational Goals *
            </label>
            <textarea
              id="goals"
              name="goals"
              required
              rows={4}
              value={formData.goals}
              onChange={handleChange}
              placeholder="Please describe your educational goals and how AFSO can help you achieve them..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#135f5c] focus:border-[#135f5c]"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              Thank you! Your application has been submitted successfully. We will review your application and contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              There was an error submitting your application. Please try again or contact us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#135f5c' }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>

      {/* Additional Information */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">Questions?</h3>
        <p className="text-gray-700 mb-4">
          If you have any questions about the application process or our programs, please don't hesitate to contact us.
        </p>
        <Link
          href="/contact"
          className="inline-block text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
          style={{ backgroundColor: '#135f5c' }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}


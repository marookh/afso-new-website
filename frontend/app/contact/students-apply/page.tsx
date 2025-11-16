'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'

export default function StudentsApplyPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentEducation: '',
    programInterest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // TODO: Connect to your backend/email service
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', currentEducation: '', programInterest: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
        imageAlt="Student Application"
        headline="Apply as a Student"
        subheadline="Join our academic bridge programs and take the next step in your educational journey."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Application Form</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below to apply for our academic bridge programs. Our team will review your application and get back to you soon.
          </p>

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
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ba5c1] focus:border-[#3ba5c1]"
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
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ba5c1] focus:border-[#3ba5c1]"
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
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ba5c1] focus:border-[#3ba5c1]"
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
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ba5c1] focus:border-[#3ba5c1]"
              >
                <option value="">Select education level</option>
                <option value="high-school">High School</option>
                <option value="some-university">Some University</option>
                <option value="university-graduate">University Graduate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="programInterest" className="block text-sm font-medium text-gray-700 mb-2">
                Program of Interest *
              </label>
              <select
                id="programInterest"
                name="programInterest"
                required
                value={formData.programInterest}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ba5c1] focus:border-[#3ba5c1]"
              >
                <option value="">Select a program</option>
                <option value="academic-bridge">Academic Bridge Program</option>
                <option value="toefl-prep">TOEFL Preparation</option>
                <option value="university-pathways">University Pathways</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about yourself and your educational goals *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ba5c1] focus:border-[#3ba5c1]"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Thank you! Your application has been submitted successfully. We will review it and get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg">
                There was an error submitting your application. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d8fa8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-[#3ba5c1]"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'

export default function StudentLoginPage() {
  useEffect(() => {
    // Redirect to AppSheet login
    window.location.href = 'https://www.appsheet.com/start/c60e5298-f454-4f78-9189-4a7619451156'
  }, [])

  return (
    <div>
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
        imageAlt="Student Login"
        headline="Student Login"
        subheadline="Redirecting to your student portal..."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600 mb-4">
            You are being redirected to the student login portal.
          </p>
          <p className="text-gray-500">
            If you are not redirected automatically,{' '}
            <a
              href="https://www.appsheet.com/start/c60e5298-f454-4f78-9189-4a7619451156"
              className="text-[#3ba5c1] hover:underline font-medium"
            >
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}


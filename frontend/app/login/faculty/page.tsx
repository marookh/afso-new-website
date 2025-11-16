'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'

export default function FacultyLoginPage() {
  useEffect(() => {
    // Redirect to AppSheet login
    window.location.href = 'https://www.appsheet.com/start/121cbcd8-3dbe-4a47-afe2-fc64844de8c1'
  }, [])

  return (
    <div>
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student in class with LF.jpeg"
        imageAlt="Faculty Login"
        headline="Faculty Login"
        subheadline="Redirecting to your faculty portal..."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-600 mb-4">
            You are being redirected to the faculty login portal.
          </p>
          <p className="text-gray-500">
            If you are not redirected automatically,{' '}
            <a
              href="https://www.appsheet.com/start/121cbcd8-3dbe-4a47-afe2-fc64844de8c1"
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


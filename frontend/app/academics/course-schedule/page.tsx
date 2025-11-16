import Hero from '@/components/Hero'
import Link from 'next/link'

export default function CourseSchedulePage() {
  return (
    <div>
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
        imageAlt="Course Schedule"
        headline="Course Schedule"
        subheadline="View our current academic offerings and plan your educational journey with AFSO."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Course Offerings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our current course schedule and find the classes that align with your academic goals.
            </p>
          </div>

          {/* Course Schedule Content */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <p className="text-gray-700 text-center mb-6">
              Our course schedule is updated regularly. Please check back for the latest class offerings and schedules.
            </p>
            <div className="text-center">
              <Link
                href="/academics/course-catalog"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors"
              >
                View Course Catalog
              </Link>
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#3ba5c1] transition-colors">
              <div className="w-12 h-12 bg-[#3ba5c1] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Our courses are designed to accommodate students across different time zones and schedules.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#3ba5c1] transition-colors">
              <div className="w-12 h-12 bg-[#3ba5c1] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Diverse Courses</h3>
              <p className="text-gray-600">
                Choose from a wide range of academic subjects and bridge programs to support your goals.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#3ba5c1] transition-colors">
              <div className="w-12 h-12 bg-[#3ba5c1] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced volunteer professors from around the world who are dedicated to your success.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#3ba5c1] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Enroll?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Apply now to join our academic bridge programs and take the next step in your educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/academics/apply"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white border-2 border-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


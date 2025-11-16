import Link from 'next/link'
import Hero from '@/components/Hero'

export default function CurrentStudentsProfessorsPage() {
  return (
    <div>
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
        imageAlt="Current Students & Professors"
        headline="Current Students & Professors"
        subheadline="Access your portal to manage your courses, assignments, and academic progress."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="bg-gradient-to-br from-[#3ba5c1] to-[#5acbed] p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">Current Students</h2>
                <p className="text-white/90 text-lg">
                  Access your student portal to view courses, assignments, and track your academic progress.
                </p>
              </div>
              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#3ba5c1] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">View your course schedule and upcoming classes</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#3ba5c1] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Access assignments and submit your work</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#3ba5c1] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Track your academic progress and grades</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#3ba5c1] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Communicate with professors and peers</p>
                  </div>
                </div>
                <Link
                  href="https://www.appsheet.com/start/c60e5298-f454-4f78-9189-4a7619451156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 text-base font-semibold text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors rounded-lg transform hover:scale-105 duration-200"
                >
                  Access Student Portal
                </Link>
              </div>
            </div>

            {/* Professor Card */}
            <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="bg-gradient-to-br from-[#2d8fa8] to-[#3ba5c1] p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2">Current Professors</h2>
                <p className="text-white/90 text-lg">
                  Access your faculty portal to manage courses, students, and teaching materials.
                </p>
              </div>
              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#3ba5c1] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Manage your course schedule and classes</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#3ba5c1] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Review and grade student assignments</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#3ba5c1] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Access teaching resources and materials</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#3ba5c1] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Communicate with students and colleagues</p>
                  </div>
                </div>
                <Link
                  href="https://www.appsheet.com/start/121cbcd8-3dbe-4a47-afe2-fc64844de8c1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 text-base font-semibold text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors rounded-lg transform hover:scale-105 duration-200"
                >
                  Access Faculty Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Need Help?</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4">
              If you're having trouble accessing your portal or have questions about your account, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#3ba5c1] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@afsousa.org" className="text-[#3ba5c1] hover:underline">
                  info@afsousa.org
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#3ba5c1] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <Link href="/contact" className="text-[#3ba5c1] hover:underline">
                  Visit our Contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


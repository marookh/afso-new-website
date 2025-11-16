import { getPrograms } from '@/lib/cms'
import Link from 'next/link'
import Image from 'next/image'

export default async function AcademicsProgramsPage() {
  const programs = await getPrograms()

  const flowSteps = [
    {
      step: '1',
      title: 'Apply',
      description: 'Submit your application to join our academic bridge programs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: '2',
      title: 'Learn',
      description: 'Engage with volunteer professors and access quality educational resources',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      step: '3',
      title: 'Graduate',
      description: 'Complete your program and prepare for enrollment in degree-granting institutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      step: '4',
      title: 'Continue',
      description: 'Enroll in degree-granting institutions and continue your educational journey',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      ),
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Programs / Academics</h1>
        <p className="text-xl text-gray-700 max-w-3xl">
          Comprehensive programs designed to support and empower university women in Afghanistan.
        </p>
      </div>

      {/* Flow Diagram */}
      <section className="mb-16 bg-gray-50 p-8 rounded-sm">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Your Journey With AFSO</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {flowSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-sm text-center">
                <div className="w-16 h-16 bg-[#3ba5c1] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-[#3ba5c1] mb-2">Step {step.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-[#3ba5c1]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {programs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">No programs are currently available.</p>
          <p className="text-gray-500">Check back soon for upcoming program offerings!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/programs/${program.slug}`}
              className="group"
            >
              <div className="bg-white hover:shadow-lg transition-shadow">
                {program.image ? (
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-[#3ba5c1] to-[#5acbed] flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AFSO</span>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-[#3ba5c1] transition-colors">
                    {program.title}
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{program.description}</p>
                  <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors">
                    View Program Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-12 bg-[#3ba5c1] text-white rounded-sm p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Interested in Our Programs?</h2>
        <p className="text-white mb-6 opacity-90">
          Discover how our programs can help you achieve your educational goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/academics/apply"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors rounded-sm"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white border-2 border-white hover:bg-white/10 transition-colors rounded-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}


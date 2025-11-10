import { getClasses } from '@/lib/cms'
import Link from 'next/link'

export default async function ClassesPage() {
  const classes = await getClasses()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Classes</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Courses are available in various subjects from English, to literature, sciences, social sciences, math to academic research and university application process.
        </p>
      </div>

      {classes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">No classes are currently available.</p>
          <p className="text-gray-500">Check back soon for upcoming class offerings!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {classItem.image && (
                <div className="h-48 bg-blue-200 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">{classItem.title}</h2>
                <p className="text-gray-600 mb-4">{classItem.description}</p>
                
                {classItem.schedule && (
                  <div className="mb-3">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" style={{ color: '#135f5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-700">{classItem.schedule}</span>
                    </div>
                  </div>
                )}

                {classItem.instructor && (
                  <div className="mb-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" style={{ color: '#135f5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm text-gray-700">Instructor: {classItem.instructor}</span>
                    </div>
                  </div>
                )}

                <Link
                  href={`/academics/classes/${classItem.slug}`}
                  className="afso-link font-medium inline-flex items-center"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 rounded-lg p-8 text-center" style={{ backgroundColor: '#135f5c' }}>
        <h2 className="text-2xl font-semibold mb-4 text-white">Interested in Teaching?</h2>
        <p className="text-white mb-6">
          We're always looking for passionate instructors to help expand our educational offerings.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#135f5c] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}


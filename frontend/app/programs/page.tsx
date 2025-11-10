import { getPrograms } from '@/lib/cms'
import Link from 'next/link'

export default async function ProgramsPage() {
  const programs = await getPrograms()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive programs designed to support and empower communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            {program.image && (
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900">{program.title}</h2>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Link
                href={`/programs/${program.slug}`}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
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
    </div>
  )
}


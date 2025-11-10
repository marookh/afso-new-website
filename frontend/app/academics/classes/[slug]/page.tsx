import { getClasses } from '@/lib/cms'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const classes = await getClasses()
  return classes.map((classItem) => ({
    slug: classItem.slug,
  }))
}

export default async function ClassDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const classes = await getClasses()
  const classItem = classes.find((c) => c.slug === params.slug)

  if (!classItem) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/academics/classes"
        className="text-[#135f5c] hover:opacity-80 mb-6 inline-flex items-center"
      >
        <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Classes
      </Link>

      <article>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{classItem.title}</h1>
        
        {classItem.image && (
          <div className="mb-8 h-64 bg-blue-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        )}

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 mb-6">{classItem.description}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Class Details</h2>
          <div className="space-y-4">
            {classItem.schedule && (
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#135f5c] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Schedule</h3>
                  <p className="text-gray-700">{classItem.schedule}</p>
                </div>
              </div>
            )}

            {classItem.instructor && (
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#135f5c] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Instructor</h3>
                  <p className="text-gray-700">{classItem.instructor}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Register for This Class</h2>
          <p className="text-gray-700 mb-6">
            Interested in joining this class? Contact us to register or learn more about enrollment.
          </p>
          <Link
            href="/contact"
            className="inline-block text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
            style={{ backgroundColor: '#135f5c' }}
          >
            Contact Us to Register
          </Link>
        </div>
      </article>
    </div>
  )
}


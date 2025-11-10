import { getPrograms } from '@/lib/cms'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const programs = await getPrograms()
  return programs.map((program) => ({
    slug: program.slug,
  }))
}

export default async function ProgramDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const programs = await getPrograms()
  const program = programs.find((p) => p.slug === params.slug)

  if (!program) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/programs"
        className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center"
      >
        <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Programs
      </Link>

      <article>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{program.title}</h1>
        
        {program.image && (
          <div className="mb-8 h-64 bg-blue-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">{program.description}</p>
          
          {program.content && (
            <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: program.content }} />
          )}

          {!program.content && (
            <div className="text-gray-600 leading-relaxed">
              <p className="mb-4">
                This program is designed to make a meaningful impact in our community. We work closely
                with local partners and volunteers to ensure the highest quality of service and support.
              </p>
              <p>
                For more information about this program or to get involved, please contact us through
                our contact page.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Get Involved</h2>
          <p className="text-gray-700 mb-4">
            Interested in learning more about this program or getting involved? We'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </div>
  )
}


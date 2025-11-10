import { getAnnouncements, getAnnouncementBySlug } from '@/lib/cms'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'

export async function generateStaticParams() {
  const announcements = await getAnnouncements()
  return announcements.map((announcement) => ({
    slug: announcement.slug,
  }))
}

export default async function AnnouncementDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const announcement = await getAnnouncementBySlug(params.slug)

  if (!announcement) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/announcements"
        className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center"
      >
        <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Announcements
      </Link>

      <article>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{announcement.title}</h1>
        <p className="text-gray-500 mb-8">
          {format(new Date(announcement.publishedAt), 'MMMM d, yyyy')}
        </p>

        {announcement.image && (
          <div className="mb-8 h-64 bg-blue-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {announcement.content}
          </div>
        </div>
      </article>
    </div>
  )
}


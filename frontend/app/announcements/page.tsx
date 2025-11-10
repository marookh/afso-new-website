import { getAnnouncements } from '@/lib/cms'
import Link from 'next/link'
import { format } from 'date-fns'

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Announcements</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest news and updates from AFSO.
        </p>
      </div>

      {announcements.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No announcements at this time.</p>
          <p className="text-gray-500 mt-2">Check back soon for updates!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <Link
              key={announcement.id}
              href={`/announcements/${announcement.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-600 block"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{announcement.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {announcement.excerpt || announcement.content}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  {format(new Date(announcement.publishedAt), 'MMMM d, yyyy')}
                </span>
                <span className="text-blue-600 font-medium">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}


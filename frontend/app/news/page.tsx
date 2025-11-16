import { getAnnouncements } from '@/lib/cms'
import ListComponent from '@/components/ListComponent'
import Hero from '@/components/Hero'

export default async function NewsPage() {
  const announcements = await getAnnouncements()

  const newsItems = announcements.map((announcement) => ({
    id: announcement.id,
    title: announcement.title,
    excerpt: announcement.excerpt || announcement.content.substring(0, 200) + '...',
    image: announcement.image || '/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG',
    date: new Date(announcement.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    href: `/announcements/${announcement.slug}`,
  }))

  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student studying TOEFL horizontal.JPG"
        imageAlt="AFSO News"
        headline="News"
        subheadline="Stay updated with the latest news and updates from AFSO."
      />

      {/* News List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {newsItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No news at this time.</p>
              <p className="text-gray-500 mt-2">Check back soon for updates!</p>
            </div>
          ) : (
            <ListComponent items={newsItems} />
          )}
        </div>
      </section>
    </div>
  )
}

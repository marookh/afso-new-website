import Link from 'next/link'
import { getAnnouncements, getPrograms } from '@/lib/cms'

export default async function Home() {
  const [announcements, programs] = await Promise.all([
    getAnnouncements(),
    getPrograms(),
  ])

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#135f5c' }}>
              Building Pathways Forward for University Women in Afghanistan
          </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#5ACBED' }}>
              AFSO is a collective of volunteer professors from around the world, teaching classes and building academic bridges for university women in Afghanistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5ACBED] transition-colors" style={{ backgroundColor: '#135f5c' }}
              >
                Donate Now
              </Link>
              <Link
                href="/academics/classes"
                className="bg-white text-[#000000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2" style={{ borderColor: '#135f5c' }}
              >
                Academics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#135f5c' }}>Our Mission</h2>
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Afghan Female Student Outreach (AFSO) is a collective of volunteer professors from around the world, teaching classes and building a pathway forward for university women in Afghanistan. We aim to educate university women at all levels who seek an academic bridge between their current situation and eventual enrollment in a degree-granting institution online or outside Afghanistan.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our long-term goal is to help educate the future leaders of Afghanistan, who will have the education and experience they need to help restore their country, and especially its women, if and when the regime changes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to recruiting and educating women from both dominant and underrepresented communities within Afghanistan.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#135f5c' }}>Our Classes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Academic Bridge Programs</h3>
              <p className="text-gray-600 mb-4">
                Classes designed to help university women prepare for enrollment in degree-granting institutions.
              </p>
              <Link
                href="/academics/classes"
                className="font-medium afso-link"
              >
                View Classes →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Volunteer Professors</h3>
              <p className="text-gray-600 mb-4">
                Our network of dedicated professors from around the world provides quality education and mentorship.
              </p>
              <Link
                href="/about"
                className="font-medium afso-link"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Future Leaders</h3>
              <p className="text-gray-600 mb-4">
                Empowering the next generation of Afghan women leaders through education and academic support.
              </p>
              <Link
                href="/contact"
                className="font-medium afso-link"
              >
                Get Involved →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#135f5c' }}>Latest Announcements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.slice(0, 3).map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4"
                style={{ borderLeftColor: '#135f5c' }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{announcement.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {announcement.excerpt || announcement.content}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(announcement.publishedAt).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/announcements/${announcement.slug}`}
                    className="font-medium text-sm afso-link"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/announcements"
              className="font-semibold text-lg afso-link"
            >
              View All Announcements →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16" style={{ backgroundColor: '#135f5c' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Join Us in Building Pathways Forward</h2>
          <p className="text-xl mb-8 text-white">
            Your support helps us continue our mission to educate and empower university women in Afghanistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-[#000000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Make a Donation
            </Link>
            <Link
              href="/contact"
              className="bg-[#000000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors border-2 border-white"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import { getAnnouncements, getPrograms } from '@/lib/cms'
import Hero from '@/components/Hero'
import ButtonStyleCard from '@/components/ButtonStyleCard'
import CountingStats from '@/components/CountingStats'
import ListComponent from '@/components/ListComponent'

export default async function Home() {
  const [announcements, programs] = await Promise.all([
    getAnnouncements(),
    getPrograms(),
  ])

  // Convert announcements to list items
  const newsItems = announcements.slice(0, 3).map((announcement) => ({
    id: announcement.id,
    title: announcement.title,
    excerpt: announcement.excerpt || announcement.content.substring(0, 150) + '...',
    image: announcement.image,
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
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Najma photos from UWC/IMG_4652.JPG"
        imageAlt="AFSO Students Learning"
        headline="Building Pathways Forward for University Women in Afghanistan"
        subheadline="AFSO is a collective of volunteer professors from around the world, teaching classes and building academic bridges for university women in Afghanistan."
        primaryCTA={{
          text: 'Become a Volunteer Professor',
          href: '/get-involved',
        }}
        secondaryCTA={{
          text: 'Support Afghan Students',
          href: '/donate',
        }}
      />

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 tracking-wide">Meet Our Professors</h2>
          <div className="max-w-4xl mx-auto">
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              poster="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
            >
              <source src="/assets/AFSO Web Assets/Videos/AFSO Teachers 2025.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Three-Column Section: Who We Are, What We Do, How to Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Who We Are */}
            <div className="text-center flex flex-col">
              <div className="w-16 h-16 bg-[#3ba5c1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                AFSO is a collective of volunteer professors from around the world, dedicated to building academic bridges for university women in Afghanistan. We provide educational opportunities when traditional pathways are closed.
              </p>
              <Link
                href="/about/story"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors mt-4"
              >
                Read Our Story
              </Link>
            </div>

            {/* What We Do */}
            <div className="text-center flex flex-col">
              <div className="w-16 h-16 bg-[#3ba5c1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">What We Do</h2>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                We provide academic bridge programs, classes, and mentorship to help university women prepare for enrollment in degree-granting institutions. Our network of volunteer professors offers quality education and support.
              </p>
              <Link
                href="/academics"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors mt-4"
              >
                Explore Programs
              </Link>
            </div>

            {/* How to Help */}
            <div className="text-center flex flex-col">
              <div className="w-16 h-16 bg-[#3ba5c1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Help</h2>
              <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                Join us as a volunteer professor, make a donation, or partner with us to expand our reach and impact. Your support helps us continue our mission to educate and empower university women in Afghanistan.
              </p>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors mt-4"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Button-Style Cards - Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Academic Bridge Programs"
              description="We provide classes and mentorship to help university women prepare for enrollment in degree-granting institutions."
              href="/academics/programs"
            />
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="Volunteer Professors"
              description="Our network of dedicated professors from around the world provides quality education and mentorship."
              href="/academics/faculty"
            />
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              }
              title="Student Success"
              description="Discover inspiring stories of our students and their achievements in pursuing higher education."
              href="/more/student-success"
            />
          </div>
        </div>
      </section>

      {/* Counting Stats Section */}
      <CountingStats
        sectionTitle="Our Impact"
        className="bg-white"
        stats={[
          { value: 800, suffix: '+', label: 'Total Students', description: 'Students enrolled in our programs' },
          { value: 50, suffix: '+', label: 'Classes', description: 'Academic bridge programs offered' },
          { value: 100, suffix: '+', label: 'Volunteers', description: 'Professors from around the world' },
          { value: 10, suffix: '+', label: 'Communities', description: 'Reached across Afghanistan' },
        ]}
      />

      {/* List Component - News/Announcements */}
      {newsItems.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ListComponent
              title="Latest News"
              items={newsItems}
            />
          <div className="text-center mt-8">
            <Link
                href="/news"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors"
            >
                View All News
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* Call to Action Section */}
      <section className="py-20 bg-[#3ba5c1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Building Pathways Forward</h2>
          <p className="text-xl mb-10 opacity-90">
            Your support helps us continue our mission to educate and empower university women in Afghanistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'

export default function MissionPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student in class with LF.jpeg"
        imageAlt="AFSO Mission"
        headline="Our Mission"
        subheadline="Building pathways forward for university women in Afghanistan"
      />

      {/* Mission Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-900 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  Our Mission Remains
                </h2>
                <div className="w-24 h-1 bg-[#3ba5c1] mx-auto"></div>
              </div>

              <div className="relative mb-12">
                <div className="relative h-80 md:h-[500px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
                    alt="AFSO Mission - Students Learning Together"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-800" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                Afghan Female Student Outreach (AFSO) is an international collective of volunteer professors, teaching classes and building a pathway forward for university women in Afghanistan.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                We aim to educate university women at all levels who seek an academic bridge between their current situation and eventual enrollment in a degree-granting institution online or outside Afghanistan.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                Our long-term goal is to help educate the future leaders of Afghanistan, who will have the education and experience they need to help restore their country, and especially its women, if and when the regime changes.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                We are committed to recruiting and educating women from both dominant and underrepresented communities within Afghanistan.
              </p>

              <div className="mt-12 pt-8 border-t-2 border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Commitment</h3>
                <ul className="space-y-4 text-lg md:text-xl leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#3ba5c1] mr-4 text-2xl">•</span>
                    <span>Providing academic bridge programs for university women at all levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3ba5c1] mr-4 text-2xl">•</span>
                    <span>Building pathways to degree-granting institutions worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3ba5c1] mr-4 text-2xl">•</span>
                    <span>Preparing future leaders with education and experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3ba5c1] mr-4 text-2xl">•</span>
                    <span>Serving women from all communities within Afghanistan</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Learn More</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/about/story"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#3ba5c1]"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Story</h3>
              <p className="text-gray-700">Read about how AFSO began and our journey of growth and impact.</p>
            </Link>
            <Link
              href="/about/impact"
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#3ba5c1]"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Our Impact</h3>
              <p className="text-gray-700">See the difference we're making in the lives of university women.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import QuoteCard from '@/components/QuoteCard'
import FiftyFiftyCard from '@/components/FiftyFiftyCard'
import Card from '@/components/Card'
import StatsCard from '@/components/StatsCard'

export default function StudentSuccessPage() {
  const successStories = [
    {
      name: 'student',
      quote: 'AFSO gave me the opportunity to continue my education when all doors seemed closed. The support from volunteer professors and the community has been life-changing.',
      image: '/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Smiling girl.jpg',
    },
    {
      name: 'student',
      quote: 'Through AFSO\'s programs, I was able to prepare for university admission and now I\'m pursuing my degree. The mentorship I received was invaluable.',
      image: '/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student studying TOEFL horizontal.JPG',
    },
  ]

  const studentArtwork = [
    {
      title: 'Rumi Dance',
      image: '/assets/AFSO Web Assets/All AFSO photos labeled/Student artwork/Rumi dance.jpg',
      description: 'A beautiful expression of cultural heritage through dance.',
    },
    {
      title: 'Peace Pen',
      image: '/assets/AFSO Web Assets/All AFSO photos labeled/Student artwork/Peace Pen[23].png',
      description: 'Artwork representing hope and peace through education.',
    },
    {
      title: 'Broken Kite',
      image: '/assets/AFSO Web Assets/All AFSO photos labeled/Student artwork/Broken Kite[10].png',
      description: 'A powerful metaphor for resilience and rebuilding.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
        imageAlt="AFSO Student Success"
        headline="Student Success"
        subheadline="Celebrating the achievements and stories of our students as they pursue higher education and build brighter futures."
      />

      {/* Student Success Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Student Achievements</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <StatsCard
              value="800+"
              label="Students Enrolled"
              description="Students who have benefited from our programs"
            />
            <StatsCard
              value="75%"
              label="Success Rate"
              description="Students who successfully enroll in universities"
            />
            <StatsCard
              value="46+"
              label="Students Enrolled in Universities"
              description="Students who have successfully enrolled in degree-granting institutions"
            />
            <StatsCard
              value="100+"
              label="Alumni"
              description="Graduates continuing their education"
            />
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Success Stories</h2>
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <QuoteCard
                key={index}
                image={story.image}
                imageAlt={story.name}
                quote={story.quote}
                attribution={story.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Our Students Have to Say */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">What Our Students Have to Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#3ba5c1] opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "... is a necessity for their survival. A soldier's biggest support is his weapon. For Afghan women, education is the weapon that is going to save our lives."
              </p>
              <p className="text-base text-[#3ba5c1] font-semibold">— Sadia G., AFSO student</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#3ba5c1] opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "I am really happy that I was a student in this program. I know a lot of things that are very useful for me. I didn't believe foreign people would help me because until now no one helped me. I cannot describe my feeling in two lines. Also, you were volunteers. Thank you all for serving us and everything that you are doing for us. AFSO is like a mother to her students."
              </p>
              <p className="text-base text-[#3ba5c1] font-semibold">— Anonymous</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#3ba5c1] opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "AFSO gave me back something I thought I had lost forever: hope for my education. Because of this program, I now believe my dreams still have a future."
              </p>
              <p className="text-base text-[#3ba5c1] font-semibold">— Khumari A., Student</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#3ba5c1] opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "I really appreciate each and every person who take the efforts for Afghan women and girls. From all the professors who spend their time at our disposal so that we can learn. And we know that you make every effort to educate us. And we will not disappoint you with our efforts."
              </p>
              <p className="text-base text-[#3ba5c1] font-semibold">— Shilla R., AFSO student, medical student</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#3ba5c1] opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "I think the most important experience that I've had in this semester was constancy, the constancy of the AFSO group for helping us Afghan girls."
              </p>
              <p className="text-base text-[#3ba5c1] font-semibold">— Fayezah M., Student</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#3ba5c1] opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                "I want other girls of my country to experience what I experienced with AFSO."
              </p>
              <p className="text-base text-[#3ba5c1] font-semibold">— Nadia A., Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Artwork Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Student Artwork</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {studentArtwork.map((artwork, index) => (
              <div key={index} className="bg-white overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative w-full bg-gray-100 flex items-center justify-center" style={{ minHeight: '400px' }}>
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    width={600}
                    height={600}
                    className="object-contain w-full h-full p-4"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{artwork.title}</h3>
                  {artwork.description && (
                    <p className="text-gray-700 leading-relaxed">{artwork.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Creativity - 50/50 Card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FiftyFiftyCard
            image="/assets/AFSO Web Assets/All AFSO photos labeled/Student artwork/Rumi dance.jpg"
            imageAlt="Student Artwork - Rumi Dance"
            title="Student Creativity and Expression"
            imagePosition="right"
            content={
              <>
                <p className="mb-4">
                  Our students express their creativity and cultural heritage through art. This artwork represents the resilience and hope of Afghan women pursuing education despite challenges.
                </p>
                <p className="mb-4">
                  Through their artistic expression, students share their stories, dreams, and the strength they find in education. Each piece reflects the journey of transformation and empowerment.
                </p>
                <Link
                  href="/about/impact"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors mt-4"
                >
                  View Our Impact
                </Link>
              </>
            }
          />
        </div>
      </section>

      {/* Student Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">The Student Journey</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">From Application to Success</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our students begin their journey by applying to AFSO programs, where they connect with volunteer professors and access academic resources. Through dedicated study and mentorship, they prepare for university admission.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Many of our students have successfully enrolled in degree-granting institutions around the world, continuing their education and working toward their goals of becoming future leaders.
              </p>
            </div>
            <div className="relative h-96 bg-gray-100 flex items-center justify-center">
              <img
                src="/assets/AFSO Web Assets/All AFSO photos labeled/Deba in library.jpg"
                alt="Student studying"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3ba5c1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Support Student Success</h2>
          <p className="text-xl mb-10 opacity-90">
            Help us continue to provide educational opportunities and support for university women in Afghanistan.
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


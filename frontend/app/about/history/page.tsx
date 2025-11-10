import Link from 'next/link'

export default function HistoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#135f5c' }}>Our History</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about the journey of AFSO and how we came to support university women in Afghanistan.
        </p>
      </div>

      {/* Founding Story */}
      <section className="mb-16">
        <div className="rounded-lg p-8 md:p-12" style={{ backgroundColor: '#135f5c', color: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-6 text-white">Our Founding Story</h2>
          <p className="text-lg text-white leading-relaxed mb-4">
            Afghan Female Student Outreach (AFSO) was founded to address the critical need for continued education for women in Afghanistan. In the face of significant barriers to education, a group of dedicated volunteer professors from around the world came together with a shared vision: to provide academic support and create pathways for university women who seek to continue their education.
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            Recognizing that education is a fundamental right and a powerful tool for empowerment, our founders established AFSO as a collective effort to bridge the gap between the current situation facing Afghan women and their aspirations for higher education.
          </p>
          <p className="text-lg text-white leading-relaxed">
            From the beginning, our mission has been clear: to educate university women at all levels who seek an academic bridge between their current situation and eventual enrollment in a degree-granting institution, whether online or outside Afghanistan.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#135f5c' }}>Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="rounded-full w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#135f5c' }}>
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div className="flex-1 pb-8 border-l-2 border-gray-300 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  AFSO was established by a group of volunteer professors who recognized the urgent need to support university women in Afghanistan. The organization began with a small but dedicated team committed to providing educational opportunities.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="rounded-full w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#135f5c' }}>
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div className="flex-1 pb-8 border-l-2 border-gray-300 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Building the Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  We expanded our network of volunteer professors from around the world, each bringing their expertise and passion for education. This global network became the foundation of our academic bridge programs.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="rounded-full w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#135f5c' }}>
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div className="flex-1 pb-8 border-l-2 border-gray-300 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Program Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  We developed comprehensive academic bridge programs designed to help university women prepare for enrollment in degree-granting institutions. These programs provide essential skills and knowledge needed for academic success.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="rounded-full w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#135f5c' }}>
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div className="flex-1 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Growing Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, AFSO continues to grow and expand its reach, serving hundreds of students and maintaining our commitment to recruiting and educating women from both dominant and underrepresented communities within Afghanistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Evolution */}
      <section className="mb-16">
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#135f5c' }}>Our Mission Evolution</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              While our core mission has remained constant, our approach has evolved to meet the changing needs of the communities we serve. We have continuously adapted our programs to provide the most effective support possible.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our long-term goal remains steadfast: to help educate the future leaders of Afghanistan, who will have the education and experience they need to help restore their country, and especially its women, if and when the regime changes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our network of volunteer professors, we provide classes and academic guidance that not only prepare students for future enrollment but also empower them with the knowledge and confidence to pursue their educational goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#135f5c' }}>What Drives Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#135f5c' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Dedication</h3>
            <p className="text-gray-600">
              Our volunteer professors are dedicated to providing quality education and mentorship to every student we serve.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#135f5c' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Resilience</h3>
            <p className="text-gray-600">
              We remain resilient in the face of challenges, continuing to provide support and education despite obstacles.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#135f5c' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Hope</h3>
            <p className="text-gray-600">
              We believe in the power of education to create positive change and provide hope for a better future.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center rounded-lg p-8 md:p-12" style={{ backgroundColor: '#000000' }}>
        <h2 className="text-3xl font-bold mb-4 text-white">Join Our Mission</h2>
        <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
          Help us continue our work in supporting university women in Afghanistan through education and academic support.
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
            className="bg-[#135f5c] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors border-2 border-white"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  )
}


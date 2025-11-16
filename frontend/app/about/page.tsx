import CountingStats from '@/components/CountingStats'

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#135f5c' }}>About AFSO</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building pathways forward for university women in Afghanistan through education and academic support.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="rounded-lg p-8 md:p-12" style={{ backgroundColor: '#135f5c', color: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
          <p className="text-lg text-white leading-relaxed mb-4">
            Afghan Female Student Outreach (AFSO) is a collective of volunteer professors from around the world, teaching classes and building a pathway forward for university women in Afghanistan. We aim to educate university women at all levels who seek an academic bridge between their current situation and eventual enrollment in a degree-granting institution online or outside Afghanistan.
          </p>
          <p className="text-lg text-white leading-relaxed mb-4">
            Our long-term goal is to help educate the future leaders of Afghanistan, who will have the education and experience they need to help restore their country, and especially its women, if and when the regime changes.
          </p>
          <p className="text-lg text-white leading-relaxed">
            We are committed to recruiting and educating women from both dominant and underrepresented communities within Afghanistan.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#135f5c' }}>Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#135f5c' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Community First</h3>
            <p className="text-gray-600">
              We prioritize the needs and voices of the communities we serve, ensuring our programs
              are responsive and relevant.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#135f5c' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Integrity</h3>
            <p className="text-gray-600">
              We operate with transparency, accountability, and the highest ethical standards in all
              our programs and operations.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#135f5c' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Impact</h3>
            <p className="text-gray-600">
              We measure our success by the positive, lasting impact we create in the lives of
              individuals and communities.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#135f5c' }}>Our History</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            AFSO was founded to address the critical need for continued education for women in Afghanistan. Since our inception, we have worked tirelessly to provide academic support and create pathways for university women who face barriers to education.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through our network of volunteer professors from around the world, we provide classes and academic guidance to help these women prepare for future enrollment in degree-granting institutions, whether online or outside Afghanistan.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <div className="bg-black py-16 rounded-lg">
        <CountingStats
          sectionTitle="Our Impact"
          className=""
          stats={[
            { value: 800, suffix: '+', label: 'Students Enrolled' },
            { value: 50, suffix: '+', label: 'Classes' },
            { value: 100, suffix: '+', label: 'Volunteers' },
            { value: 10, suffix: '+', label: 'Communities' },
          ]}
        />
      </div>
    </div>
  )
}


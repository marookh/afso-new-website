import Link from 'next/link'

export default function ImpactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#135f5c' }}>Our Impact</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how AFSO is making a difference in the lives of university women in Afghanistan.
        </p>
      </div>

      {/* Impact Stats */}
      <section className="mb-16">
        <div className="text-white rounded-lg p-8 md:p-12" style={{ backgroundColor: '#000000' }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#5ACBED' }}>800+</div>
              <div className="text-gray-300 text-lg">Students Enrolled</div>
              <p className="text-gray-400 text-sm mt-2">Students who have benefited from our programs</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#5ACBED' }}>50+</div>
              <div className="text-gray-300 text-lg">Classes</div>
              <p className="text-gray-400 text-sm mt-2">Academic bridge programs and courses</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#5ACBED' }}>100+</div>
              <div className="text-gray-300 text-lg">Volunteers</div>
              <p className="text-gray-400 text-sm mt-2">Dedicated professors from around the world</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#5ACBED' }}>10+</div>
              <div className="text-gray-300 text-lg">Communities</div>
              <p className="text-gray-400 text-sm mt-2">Reached across Afghanistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#135f5c' }}>Areas of Impact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-colors hover:border-[#135f5c]">
            <div className="flex items-center mb-4">
              <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4" style={{ backgroundColor: '#135f5c' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Academic Preparation</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our academic bridge programs prepare students for enrollment in degree-granting institutions, providing essential skills and knowledge needed for academic success. Students gain confidence and readiness for higher education opportunities.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-colors hover:border-[#135f5c]">
            <div className="flex items-center mb-4">
              <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4" style={{ backgroundColor: '#135f5c' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community Building</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We foster a supportive community of learners and educators, creating connections between students and volunteer professors. This network provides mentorship, guidance, and a sense of belonging that extends beyond the classroom.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-colors hover:border-[#135f5c]">
            <div className="flex items-center mb-4">
              <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4" style={{ backgroundColor: '#135f5c' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Empowerment</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Through education, we empower women to pursue their goals and become future leaders. Our programs help students develop critical thinking, problem-solving skills, and the confidence to make a positive impact in their communities.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 transition-colors hover:border-[#135f5c]">
            <div className="flex items-center mb-4">
              <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4" style={{ backgroundColor: '#135f5c' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Long-term Change</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are committed to creating lasting positive change by educating the future leaders of Afghanistan. Our students are equipped with the education and experience needed to help restore their country when the opportunity arises.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="mb-16">
        <div className="rounded-lg p-8 md:p-12" style={{ backgroundColor: '#135f5c', color: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-6 text-white">Making a Difference</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Student Success</h3>
              <p className="text-white leading-relaxed mb-4">
                Our students have successfully prepared for and enrolled in degree-granting institutions around the world. Through our academic bridge programs, they gain the skills and confidence needed to pursue their educational goals.
              </p>
              <p className="text-white leading-relaxed">
                Many of our students have gone on to pursue advanced degrees and are now contributing to their communities and working toward positive change in Afghanistan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">Community Reach</h3>
              <p className="text-white leading-relaxed mb-4">
                We are committed to reaching women from both dominant and underrepresented communities within Afghanistan. Our programs are designed to be accessible and inclusive, ensuring that all students have the opportunity to succeed.
              </p>
              <p className="text-white leading-relaxed">
                Through our network of volunteer professors and community partnerships, we continue to expand our reach and impact across Afghanistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Measure Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#135f5c' }}>How We Measure Impact</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#135f5c] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Student Enrollment</h3>
                  <p className="text-gray-600">Tracking the number of students who successfully enroll in degree-granting institutions after completing our programs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#135f5c] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Program Completion</h3>
                  <p className="text-gray-600">Monitoring completion rates and student progress through our academic bridge programs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#135f5c] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Community Engagement</h3>
                  <p className="text-gray-600">Measuring our reach across different communities and ensuring we serve both dominant and underrepresented groups.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#135f5c] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Long-term Outcomes</h3>
                  <p className="text-gray-600">Following up with alumni to track their continued success and contributions to their communities.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center rounded-lg p-8 md:p-12" style={{ backgroundColor: '#000000' }}>
        <h2 className="text-3xl font-bold mb-4 text-white">Help Us Expand Our Impact</h2>
        <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
          Your support helps us reach more students and create lasting positive change. Join us in building pathways forward for university women in Afghanistan.
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


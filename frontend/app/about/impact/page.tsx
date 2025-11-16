import Link from 'next/link'
import Hero from '@/components/Hero'
import CountingStats from '@/components/CountingStats'
import FiftyFiftyCard from '@/components/FiftyFiftyCard'
import QuoteCard from '@/components/QuoteCard'
import ButtonStyleCard from '@/components/ButtonStyleCard'
import Columns from '@/components/Columns'

export default function ImpactPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
        imageAlt="AFSO Impact"
        headline="Our Impact"
        subheadline="See how AFSO is making a difference in the lives of university women in Afghanistan."
      />

      {/* Impact Stats */}
      <CountingStats
        sectionTitle="By The Numbers"
        className="bg-white"
        stats={[
          { value: 800, suffix: '+', label: 'Students Enrolled', description: 'Students who have benefited from our programs' },
          { value: 50, suffix: '+', label: 'Classes', description: 'Academic bridge programs and courses' },
          { value: 100, suffix: '+', label: 'Volunteers', description: 'Dedicated professors from around the world' },
          { value: 10, suffix: '+', label: 'Communities', description: 'Reached across Afghanistan' },
        ]}
      />

      {/* Impact Areas - Button-Style Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Areas of Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Academic Preparation"
              description="Our academic bridge programs prepare students for enrollment in degree-granting institutions, providing essential skills and knowledge needed for academic success."
              href="/academics/programs"
            />
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Community Building"
              description="We foster a supportive community of learners and educators, creating connections between students and volunteer professors."
              href="/about/professors"
            />
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              }
              title="Empowerment"
              description="Through education, we empower women to pursue their goals and become future leaders with critical thinking and problem-solving skills."
              href="/get-involved"
            />
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Long-term Change"
              description="We are committed to creating lasting positive change by educating the future leaders of Afghanistan."
              href="/our-story"
            />
          </div>
        </div>
      </section>

      {/* Student Success Stories - 50/50 Card */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FiftyFiftyCard
            image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student studying textbook.JPG"
            imageAlt="AFSO Student Success"
            title="Student Success"
            imagePosition="left"
            content={
              <>
                <p className="mb-4">
                  Our students have successfully prepared for and enrolled in degree-granting institutions around the world. Through our academic bridge programs, they gain the skills and confidence needed to pursue their educational goals.
                </p>
                <p>
                  Many of our students have gone on to pursue advanced degrees and are now contributing to their communities and working toward positive change in Afghanistan.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* Student Artwork - Quote Card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCard
            image="/assets/AFSO Web Assets/All AFSO photos labeled/Student artwork/Broken Kite[10].png"
            imageAlt="Student Artwork - Broken Kite"
            quote="Through education, we rebuild what was broken. Like a kite that soars again, we rise above challenges to reach new heights."
            attribution="AFSO Student Artwork"
          />
        </div>
      </section>

      {/* Community Reach - Columns */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Community Reach</h2>
          <Columns
            leftContent={
              <div className="bg-gray-50 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Inclusive Access</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We are committed to reaching women from both dominant and underrepresented communities within Afghanistan. Our programs are designed to be accessible and inclusive, ensuring that all students have the opportunity to succeed.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through our network of volunteer professors and community partnerships, we continue to expand our reach and impact across Afghanistan.
                </p>
              </div>
            }
            rightContent={
              <div className="relative h-96 bg-gray-100">
                <img
                  src="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Two students with tablet bright.JPG"
                  alt="AFSO Students Learning Together"
                  className="w-full h-full object-cover"
                />
              </div>
            }
          />
        </div>
      </section>

      {/* How We Measure Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">How We Measure Impact</h2>
          <div className="bg-white p-8 space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#3ba5c1] rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Student Enrollment</h3>
                <p className="text-gray-600">Tracking the number of students who successfully enroll in degree-granting institutions after completing our programs.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#3ba5c1] rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Program Completion</h3>
                <p className="text-gray-600">Monitoring completion rates and student progress through our academic bridge programs.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#3ba5c1] rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Community Engagement</h3>
                <p className="text-gray-600">Measuring our reach across different communities and ensuring we serve both dominant and underrepresented groups.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#3ba5c1] rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Long-term Outcomes</h3>
                <p className="text-gray-600">Following up with alumni to track their continued success and contributions to their communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3ba5c1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Help Us Expand Our Impact</h2>
          <p className="text-xl mb-8 opacity-90">
            Your support helps us reach more students and create lasting positive change. Join us in building pathways forward for university women in Afghanistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors"
            >
              Make a Donation
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

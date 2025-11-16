import Link from 'next/link'
import Hero from '@/components/Hero'
import FiftyFiftyCard from '@/components/FiftyFiftyCard'
import ButtonStyleCard from '@/components/ButtonStyleCard'
import CountingStats from '@/components/CountingStats'

export default function GetInvolvedPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student in class with LF.jpeg"
        imageAlt="AFSO Get Involved"
        headline="Get Involved"
        subheadline="Join us in building pathways forward for university women in Afghanistan. There are many ways to support our mission and make a difference."
      />

      {/* Ways to Get Involved - 50/50 Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FiftyFiftyCard
            image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student studying TOEFL.jpeg"
            imageAlt="AFSO Students Learning"
            title="Make a Donation"
            imagePosition="left"
            content={
              <>
                <p className="mb-4">
                  Your financial support helps us provide classes, resources, and academic support to university women in Afghanistan. Every contribution makes a difference in helping students continue their education.
                </p>
                <Link
                  href="/donate"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors"
                >
                  Donate Now
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </>
            }
          />

          <FiftyFiftyCard
            image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student with notebook and computer.JPG"
            imageAlt="AFSO Volunteer Professors"
            title="Volunteer as a Professor"
            imagePosition="right"
            content={
              <>
                <p className="mb-4">
                  Join our network of volunteer professors from around the world. Share your expertise and help build academic bridges for university women in Afghanistan.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-[#3ba5c1] border-2 border-[#3ba5c1] hover:bg-[#3ba5c1] hover:text-white transition-colors"
                >
                  Contact Us
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </>
            }
          />
        </div>
      </section>

      {/* Additional Ways - Button-Style Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Other Ways to Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 11-5.368 2.684 3 3 0 005.368-2.684z" />
                </svg>
              }
              title="Spread the Word"
              description="Help us raise awareness about our mission by sharing our work with your network and community."
              href="/contact"
            />
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Partner With Us"
              description="Organizations and institutions can partner with us to expand our reach and impact."
              href="/partners"
            />
            <ButtonStyleCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Support Students"
              description="Provide mentorship, resources, or other forms of support to help students succeed."
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <CountingStats
        sectionTitle="Our Impact"
        className="bg-white"
        stats={[
          { value: 800, suffix: '+', label: 'Students Enrolled' },
          { value: 50, suffix: '+', label: 'Classes' },
          { value: 100, suffix: '+', label: 'Volunteers' },
          { value: 10, suffix: '+', label: 'Communities' },
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-[#3ba5c1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in building pathways forward for university women in Afghanistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

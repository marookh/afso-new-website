import { getClasses } from '@/lib/cms'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Card from '@/components/Card'

export default async function ClassesPage() {
  const classes = await getClasses()

  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student with notebook and computer.JPG"
        imageAlt="AFSO Classes"
        headline="Classes"
        subheadline="Courses are available in various subjects from English, to literature, sciences, social sciences, math to academic research and university application process."
      />

      {/* Classes Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {classes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No classes are currently available.</p>
              <p className="text-gray-500">Check back soon for upcoming class offerings!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.map((classItem) => (
                <Card
                  key={classItem.id}
                  title={classItem.title}
                  description={classItem.description}
                  image={classItem.image || '/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student studying textbook.JPG'}
                  imageAlt={classItem.title}
                  href={`/academics/classes/${classItem.slug}`}
                  footer={
                    <div className="space-y-2">
                      {classItem.schedule && (
                        <div className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-[#3ba5c1] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{classItem.schedule}</span>
                        </div>
                      )}
                      {classItem.instructor && (
                        <div className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-[#3ba5c1] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>Instructor: {classItem.instructor}</span>
                        </div>
                      )}
                    </div>
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3ba5c1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Teaching?</h2>
          <p className="text-lg mb-8 opacity-90">
            We're always looking for passionate instructors to help expand our educational offerings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import Hero from '@/components/Hero'

export default function CourseCatalogPage() {
  // Course data from Current Courses For Website spreadsheet
  // Note: This should be populated with actual data from the Excel file
  // Structure: Course title, description, instructor, schedule, etc.
  const courses = [
    {
      id: 1,
      title: "Academic English",
      description: "Comprehensive English language course focusing on academic writing, reading comprehension, and communication skills essential for university-level studies.",
      instructor: "Multiple Instructors",
      level: "All Levels",
      duration: "Full Semester",
      category: "Language & Communication"
    },
    {
      id: 2,
      title: "TOEFL Preparation",
      description: "Intensive preparation course for the TOEFL examination, covering all four sections: Reading, Listening, Speaking, and Writing.",
      instructor: "Multiple Instructors",
      level: "Intermediate to Advanced",
      duration: "12 Weeks",
      category: "Language & Communication"
    },
    {
      id: 3,
      title: "Introduction to Philosophy",
      description: "An exploration of fundamental philosophical questions and major thinkers, developing critical thinking and analytical skills.",
      instructor: "Multiple Instructors",
      level: "Beginner",
      duration: "Full Semester",
      category: "Humanities"
    },
    {
      id: 4,
      title: "Political Science",
      description: "Study of political systems, theories, and international relations, preparing students for advanced political science studies.",
      instructor: "Multiple Instructors",
      level: "Intermediate",
      duration: "Full Semester",
      category: "Social Sciences"
    },
    {
      id: 5,
      title: "Mathematics",
      description: "Comprehensive mathematics course covering algebra, calculus, and problem-solving techniques for university-level mathematics.",
      instructor: "Multiple Instructors",
      level: "All Levels",
      duration: "Full Semester",
      category: "STEM"
    },
    {
      id: 6,
      title: "Computer Science Fundamentals",
      description: "Introduction to programming, data structures, and computer science principles essential for technology-related fields.",
      instructor: "Multiple Instructors",
      level: "Beginner to Intermediate",
      duration: "Full Semester",
      category: "STEM"
    },
    {
      id: 7,
      title: "Engineering Principles",
      description: "Foundational engineering concepts and problem-solving approaches for students pursuing engineering degrees.",
      instructor: "Multiple Instructors",
      level: "Intermediate",
      duration: "Full Semester",
      category: "STEM"
    },
    {
      id: 8,
      title: "Academic Research Methods",
      description: "Training in research methodology, academic writing, and scholarly communication for university-level research.",
      instructor: "Multiple Instructors",
      level: "Intermediate to Advanced",
      duration: "Full Semester",
      category: "Academic Skills"
    },
    {
      id: 9,
      title: "University Application Process",
      description: "Guidance on preparing university applications, writing personal statements, and navigating the admissions process.",
      instructor: "Multiple Instructors",
      level: "All Levels",
      duration: "8 Weeks",
      category: "Academic Skills"
    },
    {
      id: 10,
      title: "Literature and Critical Analysis",
      description: "Study of literary texts with focus on critical analysis, interpretation, and academic writing about literature.",
      instructor: "Multiple Instructors",
      level: "Intermediate",
      duration: "Full Semester",
      category: "Humanities"
    },
    {
      id: 11,
      title: "Social Sciences Research",
      description: "Introduction to social science research methods, data collection, and analysis techniques.",
      instructor: "Multiple Instructors",
      level: "Intermediate",
      duration: "Full Semester",
      category: "Social Sciences"
    },
    {
      id: 12,
      title: "Creative Writing",
      description: "Workshop-style course developing creative writing skills in fiction, poetry, and creative nonfiction.",
      instructor: "Multiple Instructors",
      level: "All Levels",
      duration: "Full Semester",
      category: "Humanities"
    }
  ]

  const categories = ["All", "Language & Communication", "Humanities", "Social Sciences", "STEM", "Academic Skills"]

  return (
    <div>
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student studying TOEFL horizontal.JPG"
        imageAlt="Course Catalog"
        headline="Course Catalog"
        subheadline="Explore our comprehensive catalog of courses designed to prepare you for university-level studies."
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Available Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our course catalog features a wide range of academic subjects taught by volunteer professors from leading institutions worldwide. 
              Each course is designed to build the skills and knowledge needed for success in degree-granting programs.
            </p>
          </div>

          {/* Course Categories */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium bg-white border-2 border-gray-300 hover:border-[#3ba5c1] hover:bg-[#3ba5c1] hover:text-white rounded-md transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#3ba5c1] hover:shadow-lg transition-all h-full flex flex-col"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#3ba5c1]/10 text-[#3ba5c1] rounded mb-3">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{course.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{course.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#3ba5c1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#3ba5c1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-[#3ba5c1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#3ba5c1] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Flexible Learning</h3>
              <p className="text-gray-600">
                Our courses are designed to accommodate students across different time zones and schedules, with online delivery and flexible attendance options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#3ba5c1] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced professors from leading universities worldwide who are dedicated to your academic success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-[#3ba5c1] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">University Preparation</h3>
              <p className="text-gray-600">
                Our courses prepare you for enrollment in degree-granting institutions, building essential academic skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3ba5c1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enroll?</h2>
          <p className="text-xl mb-8 opacity-90">
            Apply now to join our academic bridge programs and take the next step in your educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/academics/apply"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/academics/course-schedule"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              View Course Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

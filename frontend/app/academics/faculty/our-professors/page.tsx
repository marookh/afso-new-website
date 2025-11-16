import Link from 'next/link'
import Hero from '@/components/Hero'
import Card from '@/components/Card'
import professorsData from '@/lib/professors-data.json'

export default function OurProfessorsPage() {
  // Function to extract title from bio
  function extractTitle(name: string, bio: string): string {
    const nameLower = name.toLowerCase()
    const bioLower = bio.toLowerCase()
    
    // Check for specific roles in bio or name
    if (bioLower.includes('president of the board') || nameLower.includes('lucy ferriss') || nameLower.includes('ferriss lucy')) {
      return 'President of the Board'
    }
    if (bioLower.includes('secretary') && (bioLower.includes('board') || nameLower.includes('judy lewis'))) {
      return 'Secretary'
    }
    if (bioLower.includes('treasurer') || nameLower.includes('j. donald moon') || nameLower.includes('moon don')) {
      return 'Treasurer'
    }
    if (bioLower.includes('vice-president') || bioLower.includes('vice president') || nameLower.includes('saleh keshawarz')) {
      return 'Vice-President'
    }
    if (bioLower.includes('executive director') || nameLower.includes('amran fatih')) {
      return 'Executive Director'
    }
    if (bioLower.includes('academic administrator') || nameLower.includes('katy masuga')) {
      return 'Academic Administrator'
    }
    if (bioLower.includes('student affairs coordinator') || nameLower.includes('irene burns')) {
      return 'Student Affairs Coordinator'
    }
    
    // Default to Professor
    return 'Professor'
  }

  // Function to extract courses from bio
  function extractCourses(name: string, bio: string): string[] {
    const courses: string[] = []
    const bioLower = bio.toLowerCase()
    const nameLower = name.toLowerCase()
    
    // Course keywords mapping
    const courseKeywords: { [key: string]: string[] } = {
      'creative writing': ['Creative Writing'],
      'literature': ['Literature'],
      'philosophy': ['Philosophy'],
      'mathematics': ['Mathematics'],
      'physics': ['Physics'],
      'chemistry': ['Chemistry'],
      'biology': ['Biology'],
      'political science': ['Political Science'],
      'international relations': ['International Relations'],
      'history': ['History'],
      'english': ['English'],
      'writing': ['Writing'],
      'statistics': ['Statistics'],
      'computer science': ['Computer Science'],
      'engineering': ['Engineering'],
      'sociology': ['Sociology'],
      'psychology': ['Psychology'],
      'economics': ['Economics'],
      'law': ['Law'],
      'public health': ['Public Health'],
      'environmental science': ['Environmental Science'],
      'art history': ['Art History'],
      'film studies': ['Film Studies'],
      'religious studies': ['Religious Studies'],
      'theater': ['Theater'],
      'performing arts': ['Performing Arts'],
    }
    
    // Check for course keywords in bio
    for (const [keyword, courseNames] of Object.entries(courseKeywords)) {
      if (bioLower.includes(keyword)) {
        courses.push(...courseNames)
      }
    }
    
    // Special cases based on name or specific bio content
    if (nameLower.includes('lucy ferriss') || nameLower.includes('ferriss lucy')) {
      if (!courses.includes('Creative Writing')) courses.push('Creative Writing')
      if (!courses.includes('Literature')) courses.push('Literature')
    }
    
    // Remove duplicates and return
    return [...new Set(courses)].slice(0, 3) // Limit to 3 courses max
  }

  // Map the data to include title and courses
  const professors = professorsData.map((prof) => {
    const title = extractTitle(prof.name, prof.bio || '')
    const courses = extractCourses(prof.name, prof.bio || '')
    
    return {
      name: prof.name,
      title: title,
      bio: prof.bio || 'Biography coming soon.',
      image: prof.image || '/assets/AFSO Web Assets/AFSO A to Z Professor Photos/AFSO-Logo-16-.png',
      courses: courses
    }
  })

  return (
    <div>
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Prof---class-online.jpg"
        imageAlt="Our Professors"
        headline="Our Professors"
        subheadline="Meet our dedicated team of volunteer professors from around the world who are committed to empowering Afghan university women through education."
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Faculty</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our professors come from leading institutions worldwide, bringing expertise, dedication, and a commitment 
              to empowering Afghan university women through quality education and mentorship.
            </p>
          </div>

          {/* Professors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professors.map((professor, index) => (
              <Card
                key={index}
                title={professor.name}
                description={professor.bio}
                image={professor.image}
                imageAlt={professor.name}
                footer={
                  <div>
                    <p className="text-[#3ba5c1] font-medium text-lg mb-2">{professor.title}</p>
                    {professor.courses && professor.courses.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {professor.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-2 py-1 text-xs font-medium bg-[#3ba5c1]/10 text-[#3ba5c1] rounded"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                }
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3ba5c1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Teaching?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our network of volunteer professors and help build academic bridges for university women in Afghanistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/volunteerism"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors"
            >
              Become a Volunteer Professor
            </Link>
            <Link
              href="/academics/course-catalog"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              View Course Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

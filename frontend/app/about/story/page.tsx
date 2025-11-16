import Link from 'next/link'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function StoryPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        video="/assets/AFSO Web Assets/Videos/Copy of Nowruz Fundraiser.mp4"
        imageAlt="AFSO Story"
        headline="The AFSO Story"
        subheadline="A journey of hope, resilience, and unwavering commitment to education"
      />

      {/* Main Story Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-900 leading-relaxed space-y-6" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light italic border-l-4 border-[#3ba5c1] pl-6 mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                In December 2022, 16 months after the Taliban seized power in Afghanistan, an emergency arose.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                More than 100,000 women had been summarily dismissed from their courses in universities at all levels, across the country. This ban followed the closure of schools to girls past the sixth grade. There ensued an epidemic of suicide and self-harm among the young women who were Afghanistan's greatest hope, its potential future doctors, lawyers, leaders, artists, scientists, and writers.
              </p>

              <div className="my-12 relative">
                <div className="relative h-64 md:h-96 w-full">
                  <Image
                    src="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Student studying TOEFL horizontal.JPG"
                    alt="AFSO Students Learning"
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl leading-relaxed">
                A small group of professors in Connecticut stepped into this crisis. That summer, Afghan Female Student Outreach began teaching courses in English, philosophy, political science, engineering, and mathematics to 75 women who had been ejected from universities around Kabul. We encountered every sort of problem—differences in language ability, differences in academic culture, multiple pressures on our students, the aftermath of trauma, and the internet and electricity deficiencies that plague Afghanistan. By the end of that first term, our students had made it clear that while they appreciated the learning, it was not enough. <span className="font-semibold text-[#3ba5c1]">They wanted a future.</span>
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                With the help of an anonymous donor, that fall AFSO was able to supply internet connection via mobile phone data to 125 students and hire an Executive Director. The news spread by word of mouth to students and professors alike. By Winter 2024, we had 150 students across Afghanistan and 24 professors across North America. By that summer, we had grown to 200 students, and our faculty was volunteering from institutions on four continents. When we reached 500 students and 50 instructors, we hired an Executive Director, a Student Affairs Coordinator, and an Academic Administrator—still our only paid staff.
              </p>

              <div className="bg-gray-50 p-8 rounded-lg my-12 border-l-4 border-[#3ba5c1]">
                <p className="text-xl md:text-2xl text-gray-900 leading-relaxed italic" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  Today, our student body stands at 800 and our faculty at 185, plus 175 course assistants from universities in Europe, America, and Asia. Of our original students, almost 50% are still with AFSO. Others have gone on to enroll with scholarships at universities in South Asia, the Middle East, Europe, and North America. Through our partnerships, we are now offering a clear pathway to the future for Afghan university women.
                </p>
              </div>

              <p className="text-lg md:text-xl leading-relaxed">
                Shortly after AFSO began, one of our amazing students found herself on the verge of despair. <span className="italic text-[#3ba5c1] text-xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>"Please, professor,"</span> she wrote, <span className="italic text-[#3ba5c1] text-xl" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>"do not alone me."</span> That plea has been our guiding light: to stay with our students through these difficult times, to offer them whatever we can provide, as educators, not to impose our goals on them, but to respond to their expressed hopes and needs. As the world presents challenges, we continue to grow and adapt. And with your help, we will see these indomitable young women become, one day, the new face of Afghanistan.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Join Us in This Mission</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Help us continue to provide educational opportunities and support for university women in Afghanistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-[#3ba5c1] border-2 border-[#3ba5c1] hover:bg-[#3ba5c1] hover:text-white transition-colors"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


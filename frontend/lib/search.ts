// Search functionality for the website
import { getAnnouncements, getPrograms, getClasses, Announcement, Program, Class } from './cms'

export interface SearchResult {
  id: string
  title: string
  description: string
  type: 'announcement' | 'program' | 'class' | 'page'
  href: string
  image?: string
}

// Static pages to search - comprehensive list of all pages
const staticPages: SearchResult[] = [
  {
    id: 'home',
    title: 'Home',
    description: 'AFSO homepage - Empowering Afghan Students Through Education',
    type: 'page',
    href: '/',
  },
  {
    id: 'about-story',
    title: 'Our Story',
    description: 'Learn about AFSO\'s founding story, history, and mission to empower university women in Afghanistan',
    type: 'page',
    href: '/about/story',
  },
  {
    id: 'about-mission',
    title: 'Our Mission',
    description: 'AFSO\'s mission to educate and empower university women in Afghanistan through academic support',
    type: 'page',
    href: '/about/mission',
  },
  {
    id: 'about-board',
    title: 'Board',
    description: 'Meet the members of AFSO\'s board of directors',
    type: 'page',
    href: '/about/board',
  },
  {
    id: 'about-administration',
    title: 'Administration',
    description: 'Meet AFSO\'s administrative team and staff',
    type: 'page',
    href: '/about/administration',
  },
  {
    id: 'about-partners',
    title: 'Partners & Supporters',
    description: 'Our partners and supporters who help us expand our reach and impact',
    type: 'page',
    href: '/about/partners',
  },
  {
    id: 'about-annual-reports',
    title: 'Annual Reports',
    description: 'Access AFSO\'s annual reports and financial statements',
    type: 'page',
    href: '/about/annual-reports',
  },
  {
    id: 'academics-course-schedule',
    title: 'Course Schedule',
    description: 'View our current academic course schedule and plan your educational journey',
    type: 'page',
    href: '/academics/course-schedule',
  },
  {
    id: 'academics-faculty',
    title: 'Faculty',
    description: 'Meet our volunteer professors from around the world',
    type: 'page',
    href: '/academics/faculty',
  },
  {
    id: 'academics-our-professors',
    title: 'Our Professors',
    description: 'Meet the dedicated team of professors and administrators who make AFSO\'s mission possible',
    type: 'page',
    href: '/academics/faculty/our-professors',
  },
  {
    id: 'academics-technical-assistants',
    title: 'Technical Assistants',
    description: 'Meet our technical assistants who support our faculty and students',
    type: 'page',
    href: '/academics/faculty/technical-assistants',
  },
  {
    id: 'academics-course-catalog',
    title: 'Course Catalog',
    description: 'Explore our comprehensive catalog of courses offered by AFSO',
    type: 'page',
    href: '/academics/course-catalog',
  },
  {
    id: 'academics-university-pathways',
    title: 'University Pathways',
    description: 'Discover pathways to higher education and degree-granting institutions',
    type: 'page',
    href: '/academics/university-pathways',
  },
  {
    id: 'academics-bard-ba-partnership',
    title: 'Bard BA Partnership',
    description: 'Learn about our partnership with Bard College for BA degree programs',
    type: 'page',
    href: '/academics/bard-ba-partnership',
  },
  {
    id: 'academics-programs',
    title: 'Programs',
    description: 'Academic bridge programs and courses offered by AFSO',
    type: 'page',
    href: '/academics/programs',
  },
  {
    id: 'academics-apply',
    title: 'Apply',
    description: 'Apply to AFSO\'s academic programs and courses',
    type: 'page',
    href: '/academics/apply',
  },
  {
    id: 'academics-classes',
    title: 'Classes',
    description: 'Browse all available classes and courses at AFSO',
    type: 'page',
    href: '/academics/classes',
  },
  {
    id: 'more-student-success',
    title: 'Student Success',
    description: 'Discover inspiring stories of our students and their achievements',
    type: 'page',
    href: '/more/student-success',
  },
  {
    id: 'get-involved',
    title: 'Get Involved',
    description: 'Ways to support AFSO - volunteer, donate, or partner with us',
    type: 'page',
    href: '/get-involved',
  },
  {
    id: 'news',
    title: 'News',
    description: 'Stay up-to-date with the latest news and announcements from AFSO',
    type: 'page',
    href: '/news',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with AFSO - send us a message or find our contact information',
    type: 'page',
    href: '/contact',
  },
  {
    id: 'contact-students-apply',
    title: 'Students Apply',
    description: 'Apply to AFSO\'s academic programs as a student',
    type: 'page',
    href: '/contact/students-apply',
  },
  {
    id: 'contact-volunteerism',
    title: 'Volunteerism',
    description: 'Become a volunteer professor and make a difference in students\' lives',
    type: 'page',
    href: '/contact/volunteerism',
  },
  {
    id: 'current-students-professors',
    title: 'Current Students & Professors',
    description: 'Access portals for current students and faculty members',
    type: 'page',
    href: '/current-students-professors',
  },
  {
    id: 'donate',
    title: 'Donate',
    description: 'Support AFSO\'s mission with a donation to help empower Afghan university women',
    type: 'page',
    href: '/donate',
  },
  {
    id: 'announcements',
    title: 'Announcements',
    description: 'View all announcements and updates from AFSO',
    type: 'page',
    href: '/announcements',
  },
  {
    id: 'classes',
    title: 'Classes',
    description: 'Browse all available classes and courses',
    type: 'page',
    href: '/classes',
  },
  {
    id: 'programs',
    title: 'Programs',
    description: 'Explore all academic programs offered by AFSO',
    type: 'page',
    href: '/programs',
  },
  {
    id: 'our-story',
    title: 'Our Story',
    description: 'Learn about AFSO\'s journey and impact',
    type: 'page',
    href: '/our-story',
  },
  {
    id: 'about',
    title: 'About Us',
    description: 'Learn about AFSO, our mission, board, administration, and partners',
    type: 'page',
    href: '/about',
  },
  {
    id: 'about-impact',
    title: 'Our Impact',
    description: 'See the impact AFSO has made in empowering Afghan university women',
    type: 'page',
    href: '/about/impact',
  },
  {
    id: 'about-history',
    title: 'History',
    description: 'Learn about AFSO\'s history and milestones',
    type: 'page',
    href: '/about/history',
  },
  {
    id: 'about-professors',
    title: 'Professors',
    description: 'Meet our dedicated professors',
    type: 'page',
    href: '/about/professors',
  },
]

// Search through content
export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query || query.trim().length < 2) {
    return []
  }

  const searchTerm = query.toLowerCase().trim()
  const results: SearchResult[] = []

  try {
    // Search static pages - improved matching
    staticPages.forEach((page) => {
      const searchableText = `${page.title} ${page.description}`.toLowerCase()
      if (
        searchableText.includes(searchTerm) ||
        page.title.toLowerCase().includes(searchTerm) ||
        page.description.toLowerCase().includes(searchTerm)
      ) {
        results.push(page)
      }
    })

    // Search announcements
    const announcements = await getAnnouncements()
    announcements.forEach((announcement: Announcement) => {
      const searchableText = `${announcement.title} ${announcement.content} ${announcement.excerpt || ''}`.toLowerCase()
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: announcement.id,
          title: announcement.title,
          description: announcement.excerpt || announcement.content.substring(0, 150) + '...',
          type: 'announcement',
          href: `/announcements/${announcement.slug}`,
          image: announcement.image,
        })
      }
    })

    // Search programs
    const programs = await getPrograms()
    programs.forEach((program: Program) => {
      const searchableText = `${program.title} ${program.description} ${program.content || ''}`.toLowerCase()
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: program.id,
          title: program.title,
          description: program.description,
          type: 'program',
          href: `/programs/${program.slug}`,
          image: program.image,
        })
      }
    })

    // Search classes
    const classes = await getClasses()
    classes.forEach((cls: Class) => {
      const searchableText = `${cls.title} ${cls.description}`.toLowerCase()
      if (searchableText.includes(searchTerm)) {
        results.push({
          id: cls.id,
          title: cls.title,
          description: cls.description,
          type: 'class',
          href: `/classes/${cls.slug}`,
          image: cls.image,
        })
      }
    })
  } catch (error) {
    console.error('Error searching content:', error)
  }

  // Remove duplicates and limit results
  const uniqueResults = Array.from(
    new Map(results.map(item => [item.href, item])).values()
  )

  // Limit results and prioritize by relevance
  return uniqueResults.slice(0, 20)
}

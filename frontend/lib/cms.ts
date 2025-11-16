// CMS Integration Layer - Contentful
import { createClient, Entry } from 'contentful'

// Contentful Client Setup - only create if credentials are available
let contentfulClient: ReturnType<typeof createClient> | null = null

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

if (spaceId && accessToken) {
  try {
    contentfulClient = createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  } catch (error) {
    console.warn('Failed to initialize Contentful client:', error)
  }
}

// Types for CMS content
export interface Announcement {
  id: string
  title: string
  content: string
  excerpt?: string
  publishedAt: string
  image?: string
  slug: string
}

export interface Class {
  id: string
  title: string
  description: string
  schedule?: string
  instructor?: string
  image?: string
  slug: string
}

export interface Program {
  id: string
  title: string
  description: string
  content?: string
  image?: string
  slug: string
}

export interface Professor {
  id: string
  name: string
  photo?: string
  role: string
  bio: string
  profileUrl?: string
}

export interface Metric {
  id: string
  name: string
  value: number
  suffix?: string
  icon?: string
}

export interface Story {
  id: string
  studentName: string
  quote: string
  photo?: string
  program?: string
  publishedAt: string
}

// Helper function to get image URL from Contentful
function getImageUrl(imageField: any): string | undefined {
  if (imageField?.fields?.file?.url) {
    return `https:${imageField.fields.file.url}`
  }
  return undefined
}

// Fetch announcements from Contentful
export async function getAnnouncements(): Promise<Announcement[]> {
  if (!contentfulClient) {
    // Return empty array if Contentful is not configured
    return []
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'announcement',
      order: ['-fields.publishedAt'],
    })

    return response.items.map((item: Entry<any>) => ({
      id: item.sys.id,
      title: String(item.fields.title || ''),
      content: String(item.fields.content || ''),
      excerpt: item.fields.excerpt ? String(item.fields.excerpt) : undefined,
      publishedAt: item.fields.publishedAt ? String(item.fields.publishedAt) : new Date().toISOString(),
      image: getImageUrl(item.fields.image),
      slug: String(item.fields.slug || ''),
    }))
  } catch (error) {
    console.error('Error fetching announcements:', error)
    return []
  }
}

// Fetch classes from Contentful
export async function getClasses(): Promise<Class[]> {
  if (!contentfulClient) {
    // Return empty array if Contentful is not configured
    return []
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'class',
    })

    return response.items.map((item: Entry<any>) => ({
      id: item.sys.id,
      title: String(item.fields.title || ''),
      description: String(item.fields.description || ''),
      schedule: item.fields.schedule ? String(item.fields.schedule) : undefined,
      instructor: item.fields.instructor ? String(item.fields.instructor) : undefined,
      image: getImageUrl(item.fields.image),
      slug: String(item.fields.slug || ''),
    }))
  } catch (error) {
    console.error('Error fetching classes:', error)
    return []
  }
}

// Fetch programs from Contentful
export async function getPrograms(): Promise<Program[]> {
  if (!contentfulClient) {
    // Return empty array if Contentful is not configured
    return []
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'program',
    })

    return response.items.map((item: Entry<any>) => ({
      id: item.sys.id,
      title: String(item.fields.title || ''),
      description: String(item.fields.description || ''),
      content: item.fields.content ? String(item.fields.content) : undefined,
      image: getImageUrl(item.fields.image),
      slug: String(item.fields.slug || ''),
    }))
  } catch (error) {
    console.error('Error fetching programs:', error)
    return []
  }
}

// Fetch single announcement by slug
export async function getAnnouncementBySlug(slug: string): Promise<Announcement | null> {
  if (!contentfulClient) {
    // Return null if Contentful is not configured
    return null
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'announcement',
      'fields.slug': slug,
      limit: 1,
    })

    if (response.items.length === 0) {
      return null
    }

    const item = response.items[0] as Entry<any>
    return {
      id: item.sys.id,
      title: String(item.fields.title || ''),
      content: String(item.fields.content || ''),
      excerpt: item.fields.excerpt ? String(item.fields.excerpt) : undefined,
      publishedAt: item.fields.publishedAt ? String(item.fields.publishedAt) : new Date().toISOString(),
      image: getImageUrl(item.fields.image),
      slug: String(item.fields.slug || ''),
    }
  } catch (error) {
    console.error('Error fetching announcement:', error)
    return null
  }
}
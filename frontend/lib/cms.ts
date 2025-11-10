// CMS Integration Layer - Ready for Sanity or Contentful
// This file provides a unified interface for CMS operations

// Sanity Client Setup (uncomment and configure when ready)
// import { createClient } from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

// export const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   useCdn: true,
//   apiVersion: '2024-01-01',
// })

// const builder = imageUrlBuilder(sanityClient)
// export function urlFor(source: any) {
//   return builder.image(source)
// }

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

// Mock data for development (replace with CMS calls later)
export async function getAnnouncements(): Promise<Announcement[]> {
  // TODO: Replace with actual CMS call
  // return sanityClient.fetch(`*[_type == "announcement"] | order(publishedAt desc)`)
  
  return [
    {
      id: '1',
      title: 'Welcome to AFSO',
      content: 'We are excited to announce our new website and expanded programs.',
      excerpt: 'We are excited to announce our new website...',
      publishedAt: new Date().toISOString(),
      slug: 'welcome-to-afso',
    },
  ]
}

export async function getClasses(): Promise<Class[]> {
  // TODO: Replace with actual CMS call
  return [
    {
      id: '1',
      title: 'Community English Class',
      description: 'Free English language classes for community members.',
      schedule: 'Every Monday and Wednesday, 6-8 PM',
      instructor: 'TBA',
      slug: 'community-english-class',
    },
  ]
}

export async function getPrograms(): Promise<Program[]> {
  // TODO: Replace with actual CMS call
  return [
    {
      id: '1',
      title: 'Community Outreach',
      description: 'Building stronger communities through outreach programs.',
      slug: 'community-outreach',
    },
  ]
}

export async function getAnnouncementBySlug(slug: string): Promise<Announcement | null> {
  // TODO: Replace with actual CMS call
  const announcements = await getAnnouncements()
  return announcements.find(a => a.slug === slug) || null
}


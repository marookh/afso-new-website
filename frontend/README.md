# AFSO USA Website

A modern, responsive website for AFSO USA built with Next.js, TypeScript, and Tailwind CSS. Designed to integrate with Firebase Hosting and a headless CMS (Sanity or Contentful) for easy content management.

## Features

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Navigation with dropdown menus
- ✅ Multiple pages: Home, About, Programs, Classes, Announcements, Contact, Donate
- ✅ CMS-ready architecture (Sanity/Contentful integration layer)
- ✅ Google Tag Manager and Google Analytics integration
- ✅ Firebase Hosting configuration
- ✅ SEO-friendly with proper metadata
- ✅ Mobile-responsive navigation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS Integration**: Ready for Sanity or Contentful
- **Hosting**: Firebase Hosting (Google Cloud)
- **Analytics**: Google Tag Manager & Google Analytics

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

4. Add your environment variables to `.env.local`:
```env
# Google Tag Manager ID (optional for now)
NEXT_PUBLIC_GTM_ID=

# Google Analytics ID (optional for now)
NEXT_PUBLIC_GA_ID=

# Sanity CMS Configuration (when ready to connect)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production

# Contentful CMS Configuration (alternative to Sanity)
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## CMS Integration

The website is set up with a CMS integration layer in `lib/cms.ts`. Currently, it uses mock data, but it's ready to connect to:

### Option 1: Sanity CMS

1. Create a Sanity project at [sanity.io](https://www.sanity.io)
2. Install Sanity CLI: `npm install -g @sanity/cli`
3. Initialize Sanity in your project
4. Update `lib/cms.ts` to use the Sanity client (uncomment the code)
5. Add your Sanity project ID and dataset to `.env.local`

### Option 2: Contentful CMS

1. Create a Contentful account at [contentful.com](https://www.contentful.com)
2. Create a space and content models
3. Install Contentful SDK: `npm install contentful`
4. Update `lib/cms.ts` to use Contentful client
5. Add your Contentful space ID and access token to `.env.local`

## Firebase Hosting Setup

### Prerequisites

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
cd frontend
firebase init hosting
```

4. Update `.firebaserc` with your Firebase project ID

### Deploy to Firebase

1. Build the Next.js app:
```bash
npm run build
```

2. Export the static site (if using static export):
```bash
npm run export
```

3. Deploy to Firebase:
```bash
firebase deploy --only hosting
```

**Note**: For Next.js with Firebase Hosting, you may need to configure it for server-side rendering or use static export. Consider using Firebase Functions for SSR or Vercel for easier Next.js deployment.

## Google Ads Integration

The website includes Google Tag Manager and Google Analytics components. To enable:

1. Get your Google Tag Manager ID from [tagmanager.google.com](https://tagmanager.google.com)
2. Add it to `.env.local` as `NEXT_PUBLIC_GTM_ID`
3. The GTM script will automatically load on all pages

For Google Analytics:
1. Get your Google Analytics ID from [analytics.google.com](https://analytics.google.com)
2. Add it to `.env.local` as `NEXT_PUBLIC_GA_ID`

## Project Structure

```
frontend/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── announcements/     # Announcements listing and detail
│   ├── classes/           # Classes listing and detail
│   ├── contact/           # Contact page
│   ├── donate/            # Donate page
│   ├── programs/          # Programs listing and detail
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation with dropdowns
│   ├── Footer.tsx         # Footer component
│   ├── GoogleTagManager.tsx
│   └── GoogleAnalytics.tsx
├── lib/                   # Utilities and API calls
│   └── cms.ts            # CMS integration layer
├── public/               # Static assets
├── firebase.json         # Firebase hosting config
└── .firebaserc           # Firebase project config
```

## Content Management

Once connected to a CMS, non-technical users can:

- Add/edit announcements
- Create new classes and programs
- Update content without writing code
- Upload images and media
- Manage all content through the CMS admin interface

## Customization

### Colors

The website uses a blue color scheme. To customize:
- Update Tailwind classes in components
- Modify color values in `tailwind.config.js` (if needed)

### Content

- Update mock data in `lib/cms.ts` for development
- Connect to CMS for production content management

## Support

For questions or issues, please contact the development team.

## License

Copyright © 2024 AFSO USA. All rights reserved.

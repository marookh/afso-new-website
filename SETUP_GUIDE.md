# AFSO USA Website - Setup Guide

This guide will help you set up the website and connect it to Firebase Hosting and a CMS.

## Quick Start

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your website!

## Connecting to Firebase Hosting

### Step 1: Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase

```bash
firebase login
```

### Step 3: Initialize Firebase Project

```bash
cd frontend
firebase init hosting
```

When prompted:
- Select "Use an existing project" or "Create a new project"
- Set public directory to: `.next` (or `out` if using static export)
- Configure as single-page app: **Yes**
- Set up automatic builds: **No** (for now)

### Step 4: Update Firebase Config

Edit `.firebaserc` and replace `your-firebase-project-id` with your actual Firebase project ID.

### Step 5: Build and Deploy

For Next.js with Firebase, you have two options:

#### Option A: Static Export (Simpler)

1. Update `next.config.ts` to enable static export:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
};
```

2. Build:
```bash
npm run build
```

3. Update `firebase.json` public directory to `out`

4. Deploy:
```bash
firebase deploy --only hosting
```

#### Option B: Server-Side Rendering (More Complex)

Requires Firebase Functions. See [Next.js on Firebase](https://firebase.google.com/docs/hosting/frameworks/nextjs) for detailed setup.

## Connecting to a CMS

### Option 1: Sanity CMS (Recommended)

#### Setup Sanity:

1. Create account at [sanity.io](https://www.sanity.io)

2. Install Sanity CLI:
```bash
npm install -g @sanity/cli
```

3. Create a new Sanity project:
```bash
cd frontend
sanity init
```

4. Create content schemas in `sanity/schemas/`:
   - `announcement.js`
   - `class.js`
   - `program.js`

5. Update `lib/cms.ts`:
   - Uncomment the Sanity client code
   - Replace mock data functions with Sanity queries

6. Add to `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

#### Example Sanity Schema (announcement.js):

```javascript
export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
```

### Option 2: Contentful CMS

#### Setup Contentful:

1. Create account at [contentful.com](https://www.contentful.com)

2. Create a new space

3. Create content models:
   - Announcement
   - Class
   - Program

4. Install Contentful SDK:
```bash
npm install contentful
```

5. Update `lib/cms.ts` to use Contentful client

6. Add to `.env.local`:
```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your-space-id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your-access-token
```

## Google Ads Integration

### Step 1: Google Tag Manager

1. Create a GTM account at [tagmanager.google.com](https://tagmanager.google.com)

2. Create a new container for your website

3. Copy your GTM Container ID (format: GTM-XXXXXXX)

4. Add to `.env.local`:
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

5. The GTM script will automatically load on all pages

### Step 2: Google Analytics (Optional)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)

2. Get your Measurement ID (format: G-XXXXXXXXXX)

3. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Step 3: Google Ads Setup

1. In Google Tag Manager, create a new tag
2. Tag type: Google Ads Conversion Tracking
3. Configure with your Google Ads conversion ID
4. Set trigger to fire on appropriate pages

## Content Management Workflow

Once CMS is connected:

1. **Non-technical users** log into the CMS admin panel (Sanity Studio or Contentful)
2. They can:
   - Create new announcements
   - Add new classes
   - Update program information
   - Upload images
   - Publish/unpublish content
3. Changes appear on the website automatically (may require rebuild/redeploy)

## Environment Variables

Create a `.env.local` file in the `frontend` directory:

```env
# Google Services
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# OR Contentful CMS
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your-space-id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your-access-token
```

## Troubleshooting

### Build Errors

- Make sure all dependencies are installed: `npm install`
- Check Node.js version (requires 18+)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

### Firebase Deployment Issues

- Ensure you're logged in: `firebase login`
- Check your project ID in `.firebaserc`
- Verify `firebase.json` configuration

### CMS Connection Issues

- Verify environment variables are set correctly
- Check API keys/tokens are valid
- Ensure content models match the expected structure in `lib/cms.ts`

## Next Steps

1. ✅ Set up Firebase Hosting
2. ✅ Connect to CMS (Sanity or Contentful)
3. ✅ Configure Google Tag Manager
4. ✅ Add Google Analytics
5. ✅ Set up Google Ads tracking
6. ✅ Customize content and styling
7. ✅ Train team members on CMS usage

## Support

For questions or issues:
- Check the main README.md
- Review Firebase/Next.js documentation
- Contact the development team


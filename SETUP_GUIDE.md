# AFSO USA Website - Setup Guide

This guide documents the actual setup process and tools used for the AFSO website.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Contentful
- **Hosting**: Netlify
- **Node Version**: 20.9.0+

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

## Deployment to Netlify

### Step 1: Create Netlify Account

1. Go to [netlify.com](https://www.netlify.com) and sign up
2. Connect your Git repository (GitHub, GitLab, or Bitbucket)

### Step 2: Configure Netlify Build Settings

1. In Netlify Dashboard → Site settings → Build & deploy → Build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Build timeout**: 900 seconds (15 minutes)

### Step 3: Configure netlify.toml

The `netlify.toml` file in the `frontend` directory contains:

```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = ".next"
  timeout = 900

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 4: Required Dependencies

Make sure `package.json` includes:

```json
{
  "engines": {
    "node": ">=20.9.0"
  },
  "devDependencies": {
    "@netlify/plugin-nextjs": "^4.39.0"
  }
}
```

### Step 5: Deploy

1. Push your code to your Git repository
2. Netlify will automatically detect the push and start building
3. The site will be deployed once the build completes

### Issues Fixed During Deployment

1. **Node Version**: Set to Node 20 (Next.js 16 requires >=20.9.0)
2. **Build Timeout**: Increased to 900 seconds
3. **Next.js Plugin**: Installed `@netlify/plugin-nextjs` for proper Next.js support
4. **TypeScript Errors**: Fixed `devIndicators` configuration in `next.config.ts`

## Connecting to Contentful CMS

### Step 1: Create Contentful Account

1. Go to [contentful.com](https://www.contentful.com) and sign up
2. Create a new space (e.g., "AFSO Website")

### Step 2: Get API Credentials

1. In Contentful, go to **Settings** → **API keys**
2. Click **Add API key**
3. Copy:
   - **Space ID**
   - **Content Delivery API - access token**

### Step 3: Install Contentful SDK

```bash
cd frontend
npm install contentful
```

### Step 4: Create Content Models in Contentful

Create three content types:

#### Announcement
- Title (Short text, required)
- Slug (Short text, required, unique)
- Content (Long text)
- Excerpt (Short text)
- Published At (Date & time)
- Image (Media - Images)

#### Class
- Title (Short text, required)
- Slug (Short text, required, unique)
- Description (Long text)
- Schedule (Short text)
- Instructor (Short text)
- Image (Media - Images)

#### Program
- Title (Short text, required)
- Slug (Short text, required, unique)
- Description (Long text)
- Content (Long text)
- Image (Media - Images)

### Step 5: Update CMS Integration

The `lib/cms.ts` file has been updated to use Contentful client with proper TypeScript types.

### Step 6: Set Environment Variables

#### Local Development (.env.local)

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your-space-id-here
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your-access-token-here
```

#### Netlify (Production)

1. Go to Netlify Dashboard → Your Site → **Site settings**
2. Click **Environment variables** (under Build & deploy)
3. Add two variables:
   - **Key**: `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
     **Value**: Your Contentful Space ID
   - **Key**: `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
     **Value**: Your Contentful Access Token
4. Click **Save** for each variable
5. Trigger a new deploy (Deploys → Trigger deploy → Deploy site)

### Step 7: Add Content

1. In Contentful, go to **Content**
2. Click **Add entry** for each content type
3. Fill in the fields and **Publish** the entries
4. The content will appear on your website after the next deploy

## Environment Variables

### Required Variables

```env
# Contentful CMS
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your-space-id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your-access-token
```

### Optional Variables (for future use)

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Troubleshooting

### Build Errors

- **Node version**: Ensure Node 20+ is set in `package.json` and `netlify.toml`
- **Missing dependencies**: Run `npm install` in the `frontend` directory
- **TypeScript errors**: Check that all types are properly defined in `lib/cms.ts`

### Netlify Deployment Issues

- **404 errors**: Ensure `@netlify/plugin-nextjs` is installed and configured
- **Build timeout**: Increase timeout in `netlify.toml` (max 900 seconds on free tier)
- **Publish directory**: Should be `.next` (not `frontend/.next`)

### Contentful Connection Issues

- **No content appearing**: 
  - Verify environment variables are set in Netlify
  - Check that content is **published** in Contentful (not just saved)
  - Verify content type IDs match (`announcement`, `class`, `program`)
- **API errors**: 
  - Check Space ID and Access Token are correct
  - Verify API rate limits (free tier: 25 requests/second)
  - Check browser console for specific error messages

## Project Structure

```
frontend/
├── app/                    # Next.js app router pages
│   ├── about/             # About pages
│   ├── academics/         # Academics pages
│   ├── announcements/      # Announcements
│   ├── classes/           # Classes
│   ├── contact/           # Contact page
│   ├── donate/            # Donate page
│   └── programs/          # Programs
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── GoogleTagManager.tsx
│   └── GoogleAnalytics.tsx
├── lib/
│   └── cms.ts            # Contentful integration
├── public/               # Static assets
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies
```

## Content Management Workflow

1. **Content creators** log into Contentful at [app.contentful.com](https://app.contentful.com)
2. They can:
   - Create new announcements
   - Add new classes
   - Update program information
   - Upload images
   - Publish/unpublish content
3. After publishing in Contentful:
   - Changes will appear on the website after the next Netlify rebuild
   - For immediate updates, trigger a manual deploy in Netlify

## Completed Setup Steps

- ✅ Next.js 16 project configured
- ✅ Tailwind CSS v4 integrated
- ✅ Deployed to Netlify
- ✅ Fixed build configuration issues
- ✅ Connected to Contentful CMS
- ✅ Environment variables configured
- ✅ TypeScript errors resolved

## Next Steps (Future Enhancements)

- [ ] Set up Google Tag Manager
- [ ] Add Google Analytics
- [ ] Connect to student/course data APIs for live statistics
- [ ] Implement PayPal donation integration
- [ ] Set up webhooks for automatic rebuilds on content changes

## Support

For questions or issues:
- Check `CONTENTFUL_SETUP.md` for detailed Contentful setup
- Review Netlify build logs for deployment errors
- Check Contentful API documentation for content issues

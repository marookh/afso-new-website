# How to Add Contentful Environment Variables in Netlify

## Step-by-Step Guide

### Step 1: Get Your Contentful Credentials

1. Go to [app.contentful.com](https://app.contentful.com)
2. Select your space
3. Go to **Settings** → **API keys**
4. Click **Add API key** (or use an existing one)
5. Copy these two values:
   - **Space ID** (looks like: `abc123xyz`)
   - **Content Delivery API - access token** (long string)

### Step 2: Add Environment Variables in Netlify

1. **Go to your Netlify Dashboard**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Select your site

2. **Navigate to Site Settings**
   - Click on your site name
   - Click **Site settings** (in the top navigation)

3. **Go to Environment Variables**
   - In the left sidebar, click **Environment variables**
   - Or go to: **Build & deploy** → **Environment**

4. **Add the First Variable**
   - Click **Add a variable** button
   - **Key**: `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
   - **Value**: Paste your Space ID from Contentful
   - **Scopes**: Leave as "All scopes" (or select specific scopes if needed)
   - Click **Save**

5. **Add the Second Variable**
   - Click **Add a variable** button again
   - **Key**: `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
   - **Value**: Paste your Access Token from Contentful
   - **Scopes**: Leave as "All scopes"
   - Click **Save**

### Step 3: Trigger a New Deploy

After adding the environment variables, you need to trigger a new deployment:

**Option A: Automatic (if connected to Git)**
- Make a small change and commit, or
- Push any commit to trigger a rebuild

**Option B: Manual**
- Go to **Deploys** tab
- Click **Trigger deploy** → **Deploy site**
- This will rebuild with the new environment variables

### Step 4: Verify It's Working

1. Check the build logs in Netlify
2. Look for any Contentful API errors
3. Visit your website and check if content appears

## Visual Guide

```
Netlify Dashboard
├── Your Site
    ├── Site settings
        ├── Build & deploy
            └── Environment variables
                ├── Add variable
                │   ├── Key: NEXT_PUBLIC_CONTENTFUL_SPACE_ID
                │   └── Value: [your-space-id]
                └── Add variable
                    ├── Key: NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
                    └── Value: [your-access-token]
```

## Important Notes

- **Variable Names**: Must be exactly as shown (case-sensitive)
- **NEXT_PUBLIC_ prefix**: Required for Next.js to expose these to the browser
- **Security**: Never commit these values to Git - always use environment variables
- **Scopes**: You can set variables for specific branches (production, preview, etc.)

## Troubleshooting

### Variables Not Working?
1. Make sure variable names are exactly correct
2. Check that you triggered a new deploy after adding variables
3. Verify your Contentful credentials are correct
4. Check Netlify build logs for errors

### Still Having Issues?
- Check that your Contentful content is **published** (not just saved)
- Verify your content type IDs match (`announcement`, `class`, `program`)
- Check browser console for API errors

## Local Development

For local testing, create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your-space-id-here
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your-access-token-here
```

**Important**: Add `.env.local` to `.gitignore` to keep credentials safe!


# Instructions to Merge and Overwrite Remote Repository

## Prerequisites
- Make sure you have a backup of the remote repository (just in case)
- Ensure all your current changes are committed or stashed

## Step 1: Remove Redundant Files First

Before merging, clean up redundant files:

```bash
# Remove duplicate routes
rm -rf app/classes
rm -rf app/our-story
rm -rf app/about/professors

# Remove unused components
rm components/HomePageMenu.tsx
rm components/SlideDownMenu.tsx
rm components/MetricsCounter.tsx

# Remove duplicate data file
rm public/assets/professors-data.json

# Optional: Remove SidebarNav if not used
# rm components/SidebarNav.tsx
```

## Step 2: Add Remote Repository

If you haven't already added the old remote repo:

```bash
# Add the old remote repo as "old-origin" (or any name you prefer)
git remote add old-origin <URL_OF_OLD_REPO>

# Or if you want to replace the current origin:
# git remote set-url origin <URL_OF_OLD_REPO>
```

## Step 3: Fetch from Old Repository

```bash
# Fetch all branches from the old remote
git fetch old-origin

# Or if you're using the same origin:
git fetch origin
```

## Step 4: Merge Strategy - Overwrite Remote

You have several options:

### Option A: Force Push (Recommended if you want to completely overwrite)

```bash
# Make sure you're on the main branch
git checkout main

# Add all your new files
git add .

# Commit all changes
git commit -m "Complete website redesign - merge new version"

# Force push to overwrite remote (WARNING: This will overwrite everything)
git push origin main --force
```

### Option B: Merge with Ours Strategy (Keep your version)

```bash
# Make sure you're on main branch
git checkout main

# Add all your new files
git add .

# Commit all changes
git commit -m "Complete website redesign - merge new version"

# Merge with strategy to prefer your changes
git merge -X ours old-origin/main --allow-unrelated-histories

# Resolve any conflicts by keeping your version
# Then push
git push origin main
```

### Option C: Create New Branch and Merge (Safest)

```bash
# Create a new branch from your current work
git checkout -b new-version

# Add and commit all changes
git add .
git commit -m "Complete website redesign"

# Switch to main
git checkout main

# Merge the new version
git merge new-version

# Push to remote
git push origin main --force
```

## Step 5: Update Netlify

After pushing:
1. Go to your Netlify dashboard
2. The site should auto-deploy if connected to GitHub
3. If not, trigger a manual deploy
4. Make sure environment variables are set (Contentful keys, etc.)

## Important Notes

⚠️ **WARNING**: Force push will overwrite the remote repository completely. Make sure:
- You have a backup
- You've tested your new version locally
- All environment variables are documented
- Contentful connection is still working

## Environment Variables to Check in Netlify

Make sure these are set in Netlify:
- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`
- `NEXT_PUBLIC_GTM_ID` (if using Google Tag Manager)
- `NEXT_PUBLIC_GA_ID` (if using Google Analytics)

## After Merging

1. Test the deployed site on Netlify
2. Verify Contentful connection is working
3. Check that all pages load correctly
4. Test the contact form (may need email service setup)
5. Verify search functionality works


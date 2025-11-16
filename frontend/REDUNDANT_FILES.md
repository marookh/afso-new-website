# Redundant Files to Remove

## Duplicate Routes (Keep one, remove the other)



## Unused Components

4. **`components/HomePageMenu.tsx`** - NOT USED
   - Removed from home page, no longer needed

5. **`components/SlideDownMenu.tsx`** - NOT USED
   - Removed from navbar, replaced with search functionality

6. **`components/SidebarNav.tsx`** - CHECK IF USED
   - May not be used if mobile menu was removed
   - Check if still needed for mobile navigation

7. **`components/MetricsCounter.tsx`** - REPLACED
   - Replaced by `CountingStats.tsx`
   - Can be removed if not used elsewhere

## Duplicate Data Files

8. **`public/assets/professors-data.json`** - DUPLICATE
   - Keep: `lib/professors-data.json` (used by the app)
   - Remove: `public/assets/professors-data.json`

## Development Scripts (Optional - Keep for future use or move to .gitignore)

9. **`scripts/`** folder - DEVELOPMENT TOOLS
   - `scripts/read-professors.js` - Used to read Excel file
   - `scripts/map-professors.js` - Used to map professors to photos
   - `scripts/check-photos.js` - Used to verify photos
   - **Decision**: Keep these for future updates, but they're not needed in production
   - Consider adding to `.gitignore` or keeping in a `dev-tools/` folder

## Summary

**Files/Folders to Remove:**
- `app/classes/` (entire folder)
- `app/our-story/` (entire folder)
- `app/about/professors/` (entire folder)
- `components/HomePageMenu.tsx`
- `components/SlideDownMenu.tsx`
- `components/MetricsCounter.tsx` (if not used)
- `public/assets/professors-data.json`

**Files/Folders to Consider:**
- `components/SidebarNav.tsx` - Check if still needed
- `scripts/` - Keep for development or move to separate folder


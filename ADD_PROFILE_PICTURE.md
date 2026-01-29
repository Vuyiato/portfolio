# 📸 How to Add Your Profile Picture

Your portfolio is now set up to display a profile picture! Follow these steps to add your photo:

## Step 1: Save Your Image
1. Download the image from wherever you're storing it
2. Name it: `profile.jpg`
3. Save it to the `public` folder in your project:
   ```
   portfolio/public/profile.jpg
   ```

## Step 2: Push to GitHub
```powershell
cd c:\Users\vuyia\portfolio
git add public/profile.jpg
git commit -m "Add profile picture"
git push origin main
```

That's it! GitHub Pages will automatically redeploy and your profile picture will show up in the hero section.

## Alternative: If the image doesn't appear
- Make sure the file is named exactly: `profile.jpg`
- Make sure it's in the `public` folder (not `src/public`)
- Wait 2-3 minutes for GitHub Pages to redeploy
- Hard refresh (Ctrl+F5) your browser

## Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Ideally 600x600px or larger
- **Aspect Ratio**: Square works best (1:1)

Your portfolio design is now much more impressive and developer-focused! 🚀

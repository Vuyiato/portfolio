# 🚀 GitHub Pages Deployment Guide

Your portfolio is now configured to deploy to GitHub Pages!

## ✅ Configuration Complete

I've already updated your project for GitHub Pages:

- ✅ `next.config.ts` - Set to static export with `/portfolio` base path
- ✅ `package.json` - Added export script
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow ready

## 📋 Setup Instructions

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio`
3. Choose "Public" (required for free GitHub Pages)
4. Don't initialize with README (you already have one)
5. Click "Create repository"

### Step 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd c:\Users\vuyia\portfolio

# Initialize git if not already done
git config --global user.email "vuyiato1@gmail.com"
git config --global user.name "Vuyisile Shokane"

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create main branch
git branch -M main

# Add remote
git remote add origin https://github.com/VUYIATO/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: `https://github.com/VUYIATO/portfolio`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will use your `.github/workflows/deploy.yml`
5. Click **Save**

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. Wait for the workflow to complete (usually 2-3 minutes)
3. You should see a green checkmark ✅

### Step 5: Access Your Live Portfolio

Your portfolio will be available at:

```
https://VUYIATO.github.io/portfolio/
```

Replace `VUYIATO` with your actual GitHub username.

---

## 🔄 How It Works

Every time you push to `main` branch:
1. GitHub Actions automatically builds your portfolio
2. The build process creates a static site in the `out/` folder
3. GitHub Pages deploys it automatically
4. Your changes are live in a few minutes!

---

## 🎯 Your Portfolio URL

After deployment is complete, your portfolio will be at:

**👉 https://VUYIATO.github.io/portfolio/**

---

## ✏️ Making Updates

After the initial setup, simply:

1. Make changes to your files
2. Commit: `git add . && git commit -m "Update portfolio"`
3. Push: `git push origin main`
4. GitHub Actions automatically builds and deploys! 🚀

---

## 🆘 Troubleshooting

### Workflow didn't run?
- Check the **Actions** tab
- If it shows an error, click on the workflow to see details
- Make sure you selected "GitHub Actions" as the source in Pages settings

### Site shows 404?
- Ensure you're visiting the correct URL: `https://VUYIATO.github.io/portfolio/`
- Wait 2-3 minutes after push before refreshing
- Clear browser cache (Ctrl+Shift+Del)

### Content not updated?
- Make sure you pushed your changes: `git push origin main`
- Check the Actions tab to confirm the deployment completed
- Refresh page with Ctrl+F5 (hard refresh)

### Base path issues?
- The `/portfolio` base path is already configured in `next.config.ts`
- All links are automatically adjusted
- No manual changes needed!

---

## 📱 Custom Domain (Optional)

If you want to use your own domain (e.g., vuyisile.dev):

1. Buy a domain from Namecheap, GoDaddy, or similar
2. Go to your repo **Settings → Pages**
3. Under "Custom domain", enter your domain: `vuyisile.dev`
4. Follow DNS configuration instructions
5. Click Save

---

## 🎉 You're All Set!

Your GitHub Pages deployment is ready. Just push your code and it automatically deploys!

**Next steps:**
1. Push your code using the git commands above
2. Enable GitHub Pages in repository settings
3. Wait for deployment to complete
4. Share your portfolio: `https://VUYIATO.github.io/portfolio/`

---

## 💡 Pro Tips

- **Keep updating**: Add new projects and update skills regularly
- **Commit messages**: Use clear commit messages like "Add new project" or "Update skills"
- **Branches**: Use feature branches for testing, then merge to main for deployment
- **CI/CD**: The GitHub Actions workflow handles everything automatically!

---

Happy deploying! 🚀

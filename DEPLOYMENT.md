# 🚀 Portfolio Deployment Guide

Your portfolio is ready to deploy! Here are multiple options:

## Option 1: Deploy to Vercel (Recommended) ⭐

**Vercel is the official host for Next.js and is the easiest option.**

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Go to [Vercel.com](https://vercel.com)**
   - Sign up with your GitHub account
   - Click "New Project"
   - Select your portfolio repository
   - Click "Import"

3. **Vercel will automatically:**
   - Detect Next.js configuration
   - Install dependencies
   - Build your project
   - Deploy to a live URL

**Your portfolio will be live at: `https://your-portfolio.vercel.app`**

---

## Option 2: Deploy to GitHub Pages

### Prerequisites:
- Repository must be public
- You'll need to configure Next.js for static export

### Steps:

1. **Update `next.config.ts`** to enable static export:
   ```typescript
   import type { NextConfig } from 'next';

   const nextConfig: NextConfig = {
     output: 'export',
     basePath: '/portfolio', // Replace 'portfolio' with your repo name
   };

   export default nextConfig;
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /(root) or /out (if you built locally)
   - Click Save

5. **Set up GitHub Actions for automatic deployment:**
   ```bash
   # A workflow file is already created at .github/workflows/deploy.yml
   # It will automatically build and deploy when you push to main
   ```

**Your portfolio will be live at: `https://YOUR_USERNAME.github.io/portfolio`**

---

## Option 3: Deploy to Netlify

### Steps:

1. **Connect your GitHub repository**
   - Go to [Netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your portfolio repository

2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

**Your portfolio will be live at: `https://your-portfolio-name.netlify.app`**

---

## Option 4: Deploy to Other Platforms

### AWS Amplify
- Push to GitHub
- Go to AWS Amplify Console
- Connect your repository
- Amplify auto-detects Next.js

### Railway.app
- Connect GitHub repo
- Set Node environment
- Auto-detects and deploys Next.js

### Render.com
- Similar to Vercel
- Supports Next.js natively

---

## 🔐 Environment Variables (if needed)

If you add environment variables later:

1. Create a `.env.local` file (keep this local, don't commit):
   ```
   NEXT_PUBLIC_API_URL=https://your-api.com
   ```

2. For production deployment platforms:
   - **Vercel**: Settings → Environment Variables
   - **GitHub Pages**: Settings → Secrets
   - **Netlify**: Site settings → Build & deploy → Environment

---

## ✅ Verify Your Deployment

After deploying:

1. ✓ Check if your portfolio loads
2. ✓ Test responsive design (mobile, tablet, desktop)
3. ✓ Test dark mode toggle
4. ✓ Test navigation links
5. ✓ Test contact form (you may need to set up a backend service)

---

## 📱 Custom Domain (Optional)

### For Vercel:
- Settings → Domains
- Add your custom domain
- Follow DNS configuration steps

### For GitHub Pages:
- Settings → Pages
- Custom domain section
- Add your domain

---

## 🆘 Troubleshooting

### Build fails on Vercel?
- Check if all dependencies are in `package.json`
- Ensure no hardcoded local paths

### Images not showing after deploy?
- Check if images are in the `public/` folder
- Update image paths if needed

### Dark mode not working?
- Ensure you have the dark mode toggle in navbar
- Check browser's dark mode preference

---

## 🎉 Next Steps

1. **Domain**: Get a custom domain from Namecheap, GoDaddy, or Google Domains
2. **Analytics**: Add Google Analytics to track visitors
3. **SEO**: Submit to Google Search Console and Bing Webmaster Tools
4. **Email**: Set up a contact form backend (Formspree, EmailJS, or similar)

---

**Recommended: Deploy to Vercel - it's the simplest and fastest!**

Need help? Check the [Next.js deployment docs](https://nextjs.org/docs/deployment)

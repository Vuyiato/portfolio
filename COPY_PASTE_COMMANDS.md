# 🚀 GitHub Pages Deployment - Copy & Paste Commands

Follow these commands exactly to deploy your portfolio to GitHub Pages!

## ⚡ Quick Copy-Paste Deploy

Open PowerShell and run these commands:

### 1️⃣ Navigate to your portfolio folder
```powershell
cd c:\Users\vuyia\portfolio
```

### 2️⃣ Configure Git (First time only)
```powershell
git config --global user.email "vuyiato1@gmail.com"
git config --global user.name "Vuyisile Shokane"
```

### 3️⃣ Initialize Git and commit
```powershell
git init
git add .
git commit -m "Initial portfolio commit"
```

### 4️⃣ Create main branch
```powershell
git branch -M main
```

### 5️⃣ Add GitHub as remote
```powershell
git remote add origin https://github.com/VUYIATO/portfolio.git
```

### 6️⃣ Push to GitHub
```powershell
git push -u origin main
```

---

## 🌐 Enable GitHub Pages (In Browser)

After pushing, do this in your browser:

1. Go to: `https://github.com/VUYIATO/portfolio`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select **"GitHub Actions"**
5. Click **Save**

---

## ✅ Done! Your portfolio is live!

Visit: `https://VUYIATO.github.io/portfolio/`

---

## 🔄 Next Time You Update

Just 3 commands:
```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

Done! GitHub automatically redeploys. 🎉

---

## 💾 Save These Commands

Save this file or bookmark these commands for future updates!

---

## 📝 Note

Replace:
- `VUYIATO` with your actual GitHub username (if different)
- The commit messages with your own (e.g., "Add new project")

---

**That's it! You're deploying to GitHub Pages!** 🚀

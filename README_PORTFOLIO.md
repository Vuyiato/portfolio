# Vuyisile Shokane's Portfolio

A modern, fully responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Responsive Design** - Mobile-first approach works on all devices
- **Dark Mode** - Built-in dark mode support
- **Modern UI** - Clean, professional design with smooth animations
- **SEO Optimized** - Proper meta tags and structured content
- **Fast Performance** - Optimized with Next.js 16
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Contact Form** - Easy way to get in touch

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills showcase
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects showcase
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer
├── data/
│   └── portfolio.ts         # Portfolio data and content
└── types/
    └── index.ts             # TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VUYIATO/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: npm

## 📝 Customization

To customize the portfolio with your information, edit:
- `src/data/portfolio.ts` - Update all portfolio content
- `src/app/layout.tsx` - Update metadata/SEO
- `src/app/globals.css` - Modify colors and styles

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to GitHub Pages

For GitHub Pages, you need to build as a static site:

1. Update `next.config.ts`:
```typescript
export default {
  output: 'export',
  basePath: '/portfolio', // Replace with your repo name
}
```

2. Build:
```bash
npm run build
```

3. Deploy the `out/` folder to GitHub Pages

## 📧 Contact

- **Email**: vuyiato1@gmail.com
- **Phone**: 0723012788
- **GitHub**: [VUYIATO](https://github.com/VUYIATO)
- **LinkedIn**: [Vuyisile Shokane](https://www.linkedin.com/in/vuyisile-thato-shokane-21b101196/)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Vuyisile Shokane

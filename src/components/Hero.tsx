import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center md:text-left relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/50 backdrop-blur-md">
              <p className="text-sm font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to my digital space
              </p>
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent drop-shadow-lg">
              {portfolioData.name}
            </h1>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                {portfolioData.title}
              </h2>
              <p className="text-xl text-gray-300 font-medium">Building the future, one line of code at a time</p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {portfolioData.subtitle}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 text-purple-200 text-sm font-semibold rounded-full backdrop-blur-sm hover:bg-purple-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-6">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-bold text-center shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform"
              >
                View My Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="px-8 py-4 border-2 border-purple-400 text-purple-200 rounded-lg hover:bg-purple-500/10 transition-all font-bold text-center backdrop-blur-sm"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center md:justify-start pt-4">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 hover:from-purple-500/40 hover:to-blue-500/40 transition-all hover:scale-110 transform"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 hover:from-purple-500/40 hover:to-blue-500/40 transition-all hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.047-8.836 0-9.754h3.554v1.381c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.755 1.395 3.755 4.383v5.6zM5.337 9.341c-1.144 0-1.915-.755-1.915-1.699 0-.958.768-1.7 1.959-1.7 1.19 0 1.916.742 1.938 1.7 0 .944-.748 1.699-1.982 1.699zm1.585 11.111H3.716V9.698h3.206v10.754zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 hover:from-purple-500/40 hover:to-blue-500/40 transition-all hover:scale-110 transform"
                aria-label="Email"
              >
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="relative w-80 h-80">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-2xl blur-2xl opacity-75 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Vuyisile Shokane"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
              </div>

              {/* Status badge */}
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-green-500/20 border border-green-400 text-green-300 rounded-full text-sm font-bold backdrop-blur-md">
                ✨ Available for work
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

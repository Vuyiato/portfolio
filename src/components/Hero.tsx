import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-black dark:via-slate-900 dark:to-black pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center md:text-left">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Welcome to my portfolio</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            {portfolioData.title}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {portfolioData.subtitle}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
            >
              View My Work
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-colors font-semibold text-center"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center md:justify-start pt-8">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.047-8.836 0-9.754h3.554v1.381c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.755 1.395 3.755 4.383v5.6zM5.337 9.341c-1.144 0-1.915-.755-1.915-1.699 0-.958.768-1.7 1.959-1.7 1.19 0 1.916.742 1.938 1.7 0 .944-.748 1.699-1.982 1.699zm1.585 11.111H3.716V9.698h3.206v10.754zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

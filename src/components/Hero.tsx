import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[120px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[120px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/10 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Text Content - 3 cols */}
          <div className="md:col-span-3 space-y-8 order-2 md:order-1 text-center md:text-left">
            {/* Founder badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm text-gray-400 font-medium">Founder of </span>
              <a href={portfolioData.contentwall} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                ContentWall Systems
              </a>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="text-white">I build</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                software that
              </span>
              <br />
              <span className="text-white">scales.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
              {portfolioData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="group px-8 py-4 bg-white text-slate-950 rounded-xl font-bold text-center hover:bg-gray-100 transition-all hover:scale-105 transform duration-300 inline-flex items-center justify-center gap-2"
              >
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href={portfolioData.contentwall}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-all font-bold text-center backdrop-blur-sm hover:border-white/40 duration-300"
              >
                ContentWall Systems
              </a>
            </div>

            {/* Social Links as minimal icons */}
            <div className="flex gap-4 justify-center md:justify-start pt-2">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.047-8.836 0-9.754h3.554v1.381c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.755 1.395 3.755 4.383v5.6zM5.337 9.341c-1.144 0-1.915-.755-1.915-1.699 0-.958.768-1.7 1.959-1.7 1.19 0 1.916.742 1.938 1.7 0 .944-.748 1.699-1.982 1.699zm1.585 11.111H3.716V9.698h3.206v10.754zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href={`mailto:${portfolioData.email}`} className="text-gray-500 hover:text-white transition-colors duration-300" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image - 2 cols */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30 rounded-3xl blur-2xl opacity-60"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/portfolio/profile.jpg" 
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-lg">{portfolioData.name}</p>
                  <p className="text-gray-300 text-sm">{portfolioData.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/40 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}

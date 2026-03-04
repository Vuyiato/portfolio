'use client';

import { portfolioData } from '@/data/portfolio';
import { Reveal, GradientDivider } from './AnimatedElements';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <GradientDivider />

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-8">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let&apos;s Work Together</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Got a project in mind? I&apos;d love to hear about it. Reach out and let&apos;s build something great.
            </p>
          </div>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <Reveal delay={100}>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex flex-col items-center gap-3 p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="text-white font-semibold text-sm">{portfolioData.email}</p>
              </div>
            </a>

            <a
              href={`tel:${portfolioData.phone}`}
              className="flex flex-col items-center gap-3 p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <p className="text-white font-semibold text-sm">{portfolioData.phone}</p>
              </div>
            </a>

            <a
              href={portfolioData.contentwall}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">My Company</p>
                <p className="text-white font-semibold text-sm">ContentWall Systems</p>
              </div>
            </a>
          </div>
          </Reveal>

          {/* Social row */}
          <Reveal delay={200}>
          <div className="flex justify-center gap-4">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 text-gray-500 hover:text-white" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/[0.02] border border-white/[0.06] rounded-xl flex items-center justify-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 text-gray-500 hover:text-white" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.047-8.836 0-9.754h3.554v1.381c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.755 1.395 3.755 4.383v5.6zM5.337 9.341c-1.144 0-1.915-.755-1.915-1.699 0-.958.768-1.7 1.959-1.7 1.19 0 1.916.742 1.938 1.7 0 .944-.748 1.699-1.982 1.699zm1.585 11.111H3.716V9.698h3.206v10.754zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

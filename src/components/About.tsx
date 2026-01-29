import { portfolioData, education } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/50 mb-4">
            <p className="text-sm font-bold text-purple-300">About Me</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
            Who I Am
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A passionate developer dedicated to building elegant solutions to complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Bio Card */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
            {/* Gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {portfolioData.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-4">What Drives Me</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I&apos;m passionate about creating scalable, user-focused applications that solve real problems. I thrive in collaborative environments where innovative thinking meets practical execution.
                </p>
              </div>

              <div className="pt-6 border-t border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Beyond Coding</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  When I&apos;m not building things, you&apos;ll find me exploring emerging technologies, contributing to open-source, or collaborating with talented teams to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="text-center pb-6 border-b border-purple-500/20">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  2025
                </div>
                <p className="text-gray-400 font-medium">Graduation Year</p>
              </div>

              <div className="text-center pb-6 border-b border-purple-500/20">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  3.7
                </div>
                <p className="text-gray-400 font-medium">GPA</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  8+
                </div>
                <p className="text-gray-400 font-medium">Languages & Tech</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Box */}
        <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
              </svg>
              Education
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl font-bold text-white mb-2">{education.school}</p>
                <p className="text-purple-300 font-semibold mb-1">{education.degree}</p>
                <p className="text-gray-400 text-sm">Graduated {education.graduationYear}</p>
                <div className="mt-4 pt-4 border-t border-purple-500/20">
                  <p className="text-sm text-gray-400 mb-2">GPA</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {education.gpa}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-4">Key Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-200 text-xs font-semibold rounded-lg border border-purple-400/30 hover:from-purple-500/40 hover:to-blue-500/40 hover:border-purple-400/60 transition-all duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

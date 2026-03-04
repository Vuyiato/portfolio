import { portfolioData, education } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Bio Card */}
          <div className="md:col-span-2 bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  {portfolioData.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <h4 className="text-lg font-bold text-white mb-3">What Drives Me</h4>
                <p className="text-gray-400 leading-relaxed">
                  I&apos;m passionate about creating scalable, user-focused applications that solve real problems. I thrive in collaborative environments where innovative thinking meets practical execution.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <h4 className="text-lg font-bold text-white mb-3">Beyond Coding</h4>
                <p className="text-gray-400 leading-relaxed">
                  When I&apos;m not building things, you&apos;ll find me exploring emerging technologies, contributing to open-source, or collaborating with talented teams to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="text-center pb-6 border-b border-white/[0.06]">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  2025
                </div>
                <p className="text-gray-500 text-sm font-medium">Graduation Year</p>
              </div>

              <div className="text-center pb-6 border-b border-white/[0.06]">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  3.7
                </div>
                <p className="text-gray-500 text-sm font-medium">GPA</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  8+
                </div>
                <p className="text-gray-500 text-sm font-medium">Languages & Tech</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" />
            </svg>
            Education
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg font-bold text-white mb-1">{education.school}</p>
              <p className="text-purple-400 font-semibold text-sm mb-1">{education.degree}</p>
              <p className="text-gray-500 text-sm">Graduated {education.graduationYear}</p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">GPA</p>
                <p className="text-2xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {education.gpa}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-4">Key Coursework</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

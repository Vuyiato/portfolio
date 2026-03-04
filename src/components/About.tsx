'use client';

import { portfolioData, education } from '@/data/portfolio';
import { Reveal, GradientDivider } from './AnimatedElements';
import { useCounter } from '@/hooks/useAnimations';

export default function About() {
  const gradYear = useCounter(2025, 1500);
  const gpa = useCounter(37, 1500); // multiply by 10 for 3.7
  const techCount = useCounter(8, 1200);

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <GradientDivider />

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-8">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Who I Am</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Bio Card */}
          <Reveal delay={100} className="md:col-span-2">
            <div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 h-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    My Journey
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {portfolioData.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    What Drives Me
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    I&apos;m passionate about creating scalable, user-focused applications that solve real problems. I thrive in collaborative environments where innovative thinking meets practical execution.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                    Beyond Coding
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    When I&apos;m not building things, you&apos;ll find me exploring emerging technologies, contributing to open-source, or collaborating with talented teams to deliver exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats Card with animated counters */}
          <Reveal delay={300}>
            <div className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 flex flex-col justify-between h-full">
              <div className="space-y-8">
                <div ref={gradYear.ref} className="text-center pb-6 border-b border-white/[0.06] group">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    {gradYear.count}
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Graduation Year</p>
                </div>

                <div ref={gpa.ref} className="text-center pb-6 border-b border-white/[0.06] group">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    {(gpa.count / 10).toFixed(1)}
                  </div>
                  <p className="text-gray-500 text-sm font-medium">GPA</p>
                </div>

                <div ref={techCount.ref} className="text-center group">
                  <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    {techCount.count}+
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Languages & Tech</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Education */}
        <Reveal delay={200}>
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
                  {education.coursework.map((course, i) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full hover:bg-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-200 cursor-default"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

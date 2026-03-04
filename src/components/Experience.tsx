import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">{exp.title}</h3>
                  <p className="text-purple-400 font-semibold mt-1">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 font-medium whitespace-nowrap bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-400 flex gap-3 leading-relaxed text-sm">
                    <span className="text-purple-500 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {exp.skills && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

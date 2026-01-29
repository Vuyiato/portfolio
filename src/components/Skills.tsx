import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/50 mb-4">
            <p className="text-sm font-bold text-purple-300">Expertise</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive toolkit of technologies and methodologies I use to build powerful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="group relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
            >
              {/* Gradient shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-100 text-sm font-semibold rounded-lg border border-purple-400/30 hover:from-purple-500/40 hover:to-blue-500/40 hover:border-purple-400/60 transition-all duration-200 cursor-default hover:scale-105 transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { icon: 'code', number: '8+', label: 'Programming Languages' },
            { icon: 'tool', number: '15+', label: 'Frameworks & Tools' },
            { icon: 'calendar', number: '3+', label: 'Years Experience' },
            { icon: 'target', number: '5+', label: 'Completed Projects' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all text-center group hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="flex justify-center mb-3">
                {stat.icon === 'code' && (
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {stat.icon === 'tool' && (
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )}
                {stat.icon === 'calendar' && (
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
                {stat.icon === 'target' && (
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { skills } from '@/data/portfolio';
import { Reveal, StaggerContainer, GradientDivider } from './AnimatedElements';
import { useCounter } from '@/hooks/useAnimations';

export default function Skills() {
  const langCount = useCounter(8, 1200);
  const toolCount = useCounter(15, 1200);
  const yearCount = useCounter(3, 1000);
  const projCount = useCounter(5, 1000);

  const stats = [
    { counter: langCount, suffix: '+', label: 'Languages' },
    { counter: toolCount, suffix: '+', label: 'Tools & Frameworks' },
    { counter: yearCount, suffix: '+', label: 'Years Experience' },
    { counter: projCount, suffix: '+', label: 'Projects Delivered' },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      <GradientDivider />

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-8">
        <Reveal>
          <div className="mb-16">
            <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </Reveal>

        {/* Stats Row — animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div
                ref={stat.counter.ref}
                className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-6 text-center hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 group cursor-default"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.counter.count}{stat.suffix}
                </div>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Skill Categories — staggered 3D cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={120}>
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white/[0.02] rounded-2xl border border-white/[0.06] p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 group transform-gpu hover:[transform:perspective(800px)_rotateX(2deg)_rotateY(-2deg)_translateZ(10px)] hover:shadow-xl hover:shadow-purple-500/5"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:scale-150 transition-transform duration-300"></div>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full hover:bg-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

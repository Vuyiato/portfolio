import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative border-l-4 border-blue-600 dark:border-blue-400 pl-6 pb-8"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2.5 top-0 ring-4 ring-white dark:ring-black" />

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                </div>

                <ul className="space-y-3 mb-4">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 flex gap-3 leading-relaxed">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {exp.skills && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

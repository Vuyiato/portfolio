import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center border border-gray-200 dark:border-gray-800">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">8+</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Programming Languages</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center border border-gray-200 dark:border-gray-800">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">3+</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Years of Experience</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center border border-gray-200 dark:border-gray-800">
            <p className="text-4xl font-bold text-pink-600 dark:text-pink-400">5+</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Completed Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

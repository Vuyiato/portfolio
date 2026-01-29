import { portfolioData, education } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {portfolioData.bio}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently a Computer Science graduate passionate about building scalable, user-focused applications. I thrive in collaborative environments where I can apply my technical skills and problem-solving abilities to create meaningful digital solutions.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or collaborating with teams to deliver exceptional results.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-lg">{education.school}</p>
                <p className="text-gray-600 dark:text-gray-400">{education.degree}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Graduated {education.graduationYear}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-2">GPA: {education.gpa}</p>
              </div>

              <div className="pt-6 border-t border-gray-300 dark:border-gray-600">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-300 dark:border-gray-600"
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

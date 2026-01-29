export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-gray-400">
              © {currentYear} Vuyisile Shokane. All rights reserved.
            </p>
          </div>

          <p className="text-gray-400 text-sm">
            Built with <span className="text-red-500">♥</span> using Next.js & Tailwind CSS
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Designed & Developed by Vuyisile Shokane</p>
        </div>
      </div>
    </footer>
  );
}

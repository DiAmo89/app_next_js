import Counter from "@/components/counter";

export default function More() {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
          More Features
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">
          Explore additional features and tools available in our application
        </p>

        {/* Counter Section */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
            Interactive Counter
          </h2>
          <Counter />
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              🎯 About Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              App_NextJs is a modern application built with Next.js 16, showcasing best practices in web development and user experience.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              🚀 Technology Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js, React, TypeScript, Tailwind CSS, and powered by NextAuth for secure authentication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

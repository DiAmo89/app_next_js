export default function LearningGrid() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-8 text-center">
          Learning Grid Layout
        </h1>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Example Grid
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-linear-to-br from-green-400 to-green-600 col-span-3 col-start-2 col-end-4 rounded-lg p-6 text-white font-bold text-center shadow-lg dark:shadow-slate-900/50">
              Grid Item 1
            </div>
            <div className="bg-linear-to-br from-green-500 to-green-700 col-span-4 rounded-lg p-6 text-white font-bold text-center shadow-lg dark:shadow-slate-900/50">
              Grid Item 2
            </div>
            <div className="bg-linear-to-br from-green-400 to-green-600 col-span-4 md:col-span-2 rounded-lg p-6 text-white font-bold text-center shadow-lg dark:shadow-slate-900/50">
              Grid Item 3
            </div>
            <div className="bg-linear-to-br from-green-500 to-green-700 col-span-4 md:col-span-2 rounded-lg p-6 text-white font-bold text-center shadow-lg dark:shadow-slate-900/50">
              Grid Item 4
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Responsive Grid Task
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-linear-to-br from-emerald-400 to-emerald-600 col-span-4 rounded-lg p-6 text-white font-bold text-center shadow-lg dark:shadow-slate-900/50">
              Item 1
            </div>
            <div className="bg-linear-to-br from-emerald-500 to-emerald-700 col-span-4 md:col-span-2 lg:col-span-4 rounded-lg p-6 text-white font-bold text-center shadow-lg dark:shadow-slate-900/50">
              Item 2
            </div>
            <div className="bg-linear-to-br from-emerald-400 to-emerald-600 col-span-4 md:col-span-2 lg:col-span-4 rounded-lg p-6 text-white font-bold text-center shadow-lg dark:shadow-slate-900/50">
              Item 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

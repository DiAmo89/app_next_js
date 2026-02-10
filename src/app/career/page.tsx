import Link from "next/link";

export default function Career() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 p-8 border border-green-100 dark:border-green-900/30">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-6">
            Career
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            Explore exciting career opportunities with us. We're always looking
            for talented individuals to join our team.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

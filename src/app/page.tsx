import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <h1 className="text-7xl md:text-8xl font-bold text-black dark:text-white mb-6 leading-tight">
            App_NextJs
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            A modern Next.js application showcasing products, reviews, and community features
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap justify-center mb-16">
            <Link href="/products" className="px-8 py-3 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105">
              🛍️ Explore Products
            </Link>
            <Link href="/reviews" className="px-8 py-3 bg-white dark:bg-slate-800 border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 font-bold rounded-lg hover:bg-green-50 dark:hover:bg-slate-700 transition-all duration-200">
              ⭐ Read Reviews
            </Link>
            <Link href="/news" className="px-8 py-3 bg-white dark:bg-slate-800 border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 font-bold rounded-lg hover:bg-green-50 dark:hover:bg-slate-700 transition-all duration-200">
              💬 Community
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Products</h3>
            <p className="text-gray-600 dark:text-gray-400">Browse our curated collection of premium products and find what you need.</p>
          </div>
          
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Reviews</h3>
            <p className="text-gray-600 dark:text-gray-400">Share your thoughts and read authentic reviews from our community members.</p>
          </div>
          
          <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Community</h3>
            <p className="text-gray-600 dark:text-gray-400">Join the conversation and connect with other users about our products.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-linear-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 text-green-100">Sign in with your Google account to unlock all features</p>
        </div>
      </div>
    </section>
  );
}

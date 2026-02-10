import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About page",
  description:
    "Immobilien is copy of real Immobilien, but in fact it is application to learn next js",
};

export default function About() {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 border border-green-100 dark:border-green-900/30">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-6">
            About Us
          </h1>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
            <p className="text-lg leading-relaxed">
              Welcome to Immobilien - a modern learning project built with
              Next.js. This application demonstrates real-world web development
              patterns and best practices.
            </p>
            <p className="text-lg leading-relaxed">
              We're showcasing how to build dynamic, responsive applications
              using cutting-edge technologies.
            </p>
          </div>
          <Link
            href="/about/me"
            className="inline-block px-8 py-3 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Learn More About Me →
          </Link>
        </div>
      </div>
    </section>
  );
}

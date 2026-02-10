import CreateReviewForm from "@/components/create-review-form";
import { db } from "@/db";
import { rewiesTable } from "@/db/schema";

export default async function ReviewsPage() {
  let reviews: any[] = [];
  let dbError = false;

  try {
    reviews = await db.select().from(rewiesTable);
  } catch (error) {
    dbError = true;
    console.error("Database error:", error);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-12 text-center">
          Reviews
        </h1>

        {dbError && (
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-300">
              ⚠️ Database connection unavailable. Please check your DATABASE_URL
              environment variable and ensure PostgreSQL is running.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* ADD REVIEW SECTION */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-slate-900/50 p-8 border border-green-100 dark:border-green-900/30 sticky top-4">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
                📝 Add Review
              </h2>
              <CreateReviewForm />
            </div>
          </div>

          {/* READ REVIEWS SECTION */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              ⭐ All Reviews
            </h2>
            {reviews.length === 0 && !dbError && (
              <div className="text-center p-12 bg-white dark:bg-slate-800 rounded-xl border border-green-100 dark:border-green-900/30">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No reviews yet. Be the first to share your feedback!
                </p>
              </div>
            )}
            <ul className="space-y-4">
              {reviews.map((r) => (
                <li
                  key={r.id}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-slate-900/50 p-6 border border-green-100 dark:border-green-900/30 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    ⭐ {r.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    {r.content}
                  </p>
                  <span className="inline-block text-sm text-gray-500 dark:text-gray-400 font-medium">
                    📅 {r.createdAt.toLocaleDateString()} at{" "}
                    {r.createdAt.toLocaleTimeString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

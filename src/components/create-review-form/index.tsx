import { createReview } from "@/app/actions/create-review";

export default function CreateReviewForm() {
  return (
    <form action={createReview} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          Review Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="e.g., Excellent service!"
          className="w-full border-2 border-green-300 dark:border-green-700 bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 dark:focus:border-green-600 transition-colors"
          required
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
        >
          Your Review
        </label>
        <textarea
          name="content"
          id="content"
          placeholder="Write your detailed review here..."
          rows={4}
          className="w-full border-2 border-green-300 dark:border-green-700 bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 dark:focus:border-green-600 transition-colors resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        ✈️ Submit Review
      </button>
    </form>
  );
}

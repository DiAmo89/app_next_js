"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateReviewLink() {
  const router = useRouter();
  function handleNavigate() {
    router.push("/reviews/new");
  }
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={handleNavigate}
        className="px-6 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        ✍️ Write Review
      </button>
      <Link
        href={"/reviews/new"}
        className="px-6 py-2 bg-white dark:bg-slate-800 border-2 border-green-400 dark:border-green-700 text-green-600 dark:text-green-400 font-semibold rounded-lg hover:bg-green-50 dark:hover:bg-slate-700 transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        ➔ Add Review
      </Link>
    </div>
  );
}
// - когда изменить историю - не хотим возвращаться на страницу откуда делаем переход

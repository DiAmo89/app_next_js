import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { Delete } from "lucide-react";
import DeletePostButton from "../delete-post-btn";

export default async function Forum() {
  let posts: any[] = [];
  let dbError = false;

  try {
    posts = await db.select().from(postsTable);
  } catch (error) {
    dbError = true;
    console.error("Database error:", error);
  }

  return (
    <div>
      <h2 className="text-4xl font-bold py-8 text-black dark:text-white">
        ✨ Fresh Updates
      </h2>

      {dbError && (
        <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-300">
            ⚠️ Database connection unavailable. Posts cannot be loaded. Check
            your DATABASE_URL environment variable.
          </p>
        </div>
      )}

      <ul className="flex flex-col gap-6 p-2">
        {posts.length === 0 && !dbError && (
          <li className="text-center p-8 text-gray-600 dark:text-gray-400">
            No posts yet. Be the first to share something!
          </li>
        )}
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-slate-900/50 border border-green-100 dark:border-green-900/30 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300"
          >
            <h3 className="font-bold text-xl text-black dark:text-white mb-2">
              {post.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.text}</p>
            <DeletePostButton id={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

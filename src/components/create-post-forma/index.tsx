import { createPost } from "@/app/actions/create-post";
import { Button } from "../ui/button";

export default function CreatePostForm() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-slate-900/50 border border-green-100 dark:border-green-900/30 overflow-hidden">
      <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
        <h2 className="font-bold text-xl text-white">➕ Create New Post</h2>
      </div>
      <form action={createPost} className="p-6">
        <div className="gap-4 flex flex-col sm:flex-row sm:items-end">
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full border-2 border-green-300 dark:border-green-700 bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg pl-4 py-2 focus:outline-none focus:border-green-500 dark:focus:border-green-600 transition-colors"
              placeholder="Enter post title"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Content
            </label>
            <input
              type="text"
              name="text"
              id="text"
              className="w-full border-2 border-green-300 dark:border-green-700 bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-lg pl-4 py-2 focus:outline-none focus:border-green-500 dark:focus:border-green-600 transition-colors"
              placeholder="What's on your mind?"
            />
          </div>
          <Button
            variant="default"
            type="submit"
            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white font-semibold px-6"
          >
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
}

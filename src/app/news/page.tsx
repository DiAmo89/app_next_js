import CreatePostForm from "@/components/create-post-forma";
import Forum from "@/components/forum";

export default function News() {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
            Community Forum
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Share your thoughts and connect with others
          </p>
          <div className="mb-8">
            <CreatePostForm />
          </div>
        </div>
        <Forum />
      </div>
    </section>
  );
}

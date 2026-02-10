import { Category } from "@/common/types/Category";
import Link from "next/link";
import Image from "next/image";

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export default async function Categories() {
  const categories = await fetchCategories();

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
            Categories
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Browse our product categories
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <li
              key={category.id}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl dark:shadow-slate-900/50 overflow-hidden border border-green-100 dark:border-green-900/30 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300"
            >
              <Link href={`/categories/${category.id}`}>
                <div className="relative overflow-hidden bg-gray-200 dark:bg-slate-700 h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={400}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {category.name}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

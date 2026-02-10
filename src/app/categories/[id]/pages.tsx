import { Category } from "@/common/types/Category";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

const fetchCategoryById = async (id: string): Promise<Category> => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to fetch category");

  return res.json();
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Category ${slug}`,
    description: `Reading ${slug} page`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const category = await fetchCategoryById(params.id);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 overflow-hidden border border-green-100 dark:border-green-900/30">
          <div className="relative w-full h-96 bg-linear-to-br from-green-100 to-green-200 dark:from-slate-700 dark:to-slate-600">
            <Image
              src={category.image}
              alt={category.name}
              width={800}
              height={600}
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="text-5xl font-bold text-black dark:text-white mb-6">
              {category.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Explore products in this category
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

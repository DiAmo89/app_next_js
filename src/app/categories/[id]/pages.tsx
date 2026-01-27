import { Category } from "@/common/types/Category";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

const fetchCategoryById = async (id: string): Promise<Category> => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to fetch category");

  return res.json();
};

export default async function CategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const category = await fetchCategoryById(params.id);

  return (
    <div>
      <h2>{category.name}</h2>
      <Image
        src={category.image}
        alt={category.name}
        width={400}
        height={400}
        unoptimized
      />
    </div>
  );
}

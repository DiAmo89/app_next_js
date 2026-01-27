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
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>
              <h2>{category.name}</h2>
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={400}
                unoptimized
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

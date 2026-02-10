import { Product } from "@/common/types/Product";
import ProductCard from "@/components/product-card";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
            Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our amazing collection of products
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <li key={p.id}>
              <ProductCard {...p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

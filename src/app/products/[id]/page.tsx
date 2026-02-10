import { Product } from "@/common/types/Product";
import ProductCarousel from "@/components/product-carousel";
import { notFound } from "next/navigation";

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    next: { revalidate: 60 },
    //   cache: "force-cache", // default
  });
  if (res.status === 404) notFound();
  if (!res.ok) {
    const err = await res.json();
    const { message } = err;
    throw new Error(message);
  }

  return res.json();
}

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await fetchProduct(id);
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Carousel */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 overflow-hidden border border-green-100 dark:border-green-900/30">
            <ProductCarousel images={product.images} />
          </div>

          {/* Product Info */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 p-8 border border-green-100 dark:border-green-900/30">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {product.title}
            </h1>
            <div className="mb-6">
              <span className="text-5xl font-bold text-black dark:text-white">
                ${product.price}
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-2 text-lg">
                USD
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {product.description ||
                "Premium quality product with excellent craftsmanship."}
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Product ID:</strong> {product.id}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Category:</strong>{" "}
                {product.category?.name || "Uncategorized"}
              </p>
            </div>

            <button className="w-full px-6 py-4 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 text-lg">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

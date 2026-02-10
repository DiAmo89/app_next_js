import { Product } from "@/common/types/Product";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard: FC<Product> = (product) => {
  const { id, title, price, images } = product;
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-100 dark:border-green-900/30 hover:border-green-400 dark:hover:border-green-600">
      <div className="relative overflow-hidden bg-linear-to-br from-green-50 to-green-100 dark:from-slate-700 dark:to-slate-600 h-64">
        <Image
          src={images[0]}
          alt={title}
          width={300}
          height={400}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
          <Link href={`/products/${id}`}>{title}</Link>
        </h3>
        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-slate-700">
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            {price}$
          </p>
          <Link
            href={`/products/${id}`}
            className="px-3 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handlePlus = () => setCount((prev) => prev + 1);
  const handleMinus = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 p-8 border border-green-100 dark:border-green-900/30 max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
        Counter
      </h2>
      <div className="text-6xl font-bold text-center text-green-600 dark:text-green-400 mb-8 py-4 bg-linear-to-br from-green-50 to-green-100 dark:from-slate-700 dark:to-slate-600 rounded-xl">
        {count}
      </div>
      <div className="flex gap-3 mb-4">
        <button
          type="button"
          onClick={handleMinus}
          className="flex-1 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          −
        </button>
        <button
          type="button"
          onClick={handlePlus}
          className="flex-1 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-bold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleReset}
        className="w-full bg-gray-400 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition-all duration-200"
      >
        Reset
      </button>
    </div>
  );
}

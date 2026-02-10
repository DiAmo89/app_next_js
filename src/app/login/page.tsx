"use client";

import { signIn } from "next-auth/react";

const LoginPage = ({}) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 p-8 border border-green-100 dark:border-green-900/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sign in to your account
          </p>
        </div>
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          🔐 Sign In with Google
        </button>
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Secure login powered by Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

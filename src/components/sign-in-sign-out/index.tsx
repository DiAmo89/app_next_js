"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function SignInSignOut() {
  const { data: session } = useSession();

  if (session)
    return (
      <div className="p-2 flex gap-2 bg-linear-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-full border border-green-300 dark:border-green-700 hover:border-green-400 transition-colors">
        <Image
          src={session.user?.image || ""}
          alt={session.user?.name || ""}
          width={32}
          height={32}
          unoptimized
          className="rounded-full border-2 border-green-400 dark:border-green-600"
        />
        <button
          type="button"
          onClick={() => signOut()}
          className="px-4 py-2 text-sm font-semibold text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-100 transition-colors rounded-full hover:bg-white/30 dark:hover:bg-black/20"
        >
          Sign Out
        </button>
      </div>
    );

  return (
    <button
      className="px-4 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-green-700 dark:to-green-800 dark:hover:from-green-600 dark:hover:to-green-700 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95"
      type="button"
      onClick={() => signIn("google")}
    >
      Sign In
    </button>
  );
}

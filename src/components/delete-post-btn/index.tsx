"use client";

import deletePost from "@/app/actions/delete-post";
import { useTransition } from "react";
import { Button } from "../ui/button";

export default function DeletePostButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => startTransition(() => deletePost(id))}
      disabled={isPending}
      className="bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700/50 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:border-red-400 dark:hover:border-red-600"
    >
      {isPending ? "🗑️ Deleting..." : "🗑️ Delete"}
    </Button>
  );
}

"use client";

import deletePost from "@/app/actions/delete-post";
import { useTransition } from "react";
import { Button } from "../ui/button";

export default function DeletePostButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();
  return (
    // <button className="border border-amber-950 rounded p-0.5 font-bold"
    //   type="button"
    //   onClick={() => startTransition(() => deletePost(id))}
    //   disabled={isPending}
    // >
    //   {isPending ? "Deleting..." : "Delete"}
    // </button>
    <Button
      variant="outline"
      type="button"
      onClick={() => startTransition(() => deletePost(id))}
      disabled={isPending}
    >
      {isPending ? "Deleting..." : "Delete"}
    </Button>
  );
}

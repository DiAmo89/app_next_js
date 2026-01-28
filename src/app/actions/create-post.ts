"use server";

import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import z from "zod";

const PostInsertSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Min length is 3 chars")
    .max(120, "Max length of title is 120 chars"),
  text: z
    .string()
    .trim()
    .min(3, "Min length is 3 chars")
    .max(300, "Max length of text is 300 chars"),
});

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const text = formData.get("text");

  const newPost = PostInsertSchema.parse({ title, text });

  await db.insert(postsTable).values(newPost);

  revalidatePath("/news");

}

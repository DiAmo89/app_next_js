"use server";

import { db } from "@/db";
import { rewiesTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function deletePost(id: number) {
  if (!id) return;
  await db.delete(rewiesTable).where(eq(rewiesTable.id, id));
  revalidatePath("/news");
}

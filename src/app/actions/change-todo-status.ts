"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function changeTodoStatus(id: number) {
  const updateTodo = await db
    .update(todos)
    .set({ status: sql`Not status` })
    .where(eq(todos.id, id));

  revalidatePath("/todos");
}

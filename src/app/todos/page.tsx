import ChangeTodoToggle from "@/components/change-todo-toggle";
import { db } from "@/db";
import { todos } from "@/db/schema";
import { authOptions } from "@/lib/auth/auth-options";
import { asc, eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";

async function getTodosByUserId(userId: number) {
  return db.query.todos.findMany({
    where: eq(todos.userId, userId),
    orderBy: asc(todos.createdAt),
  });
}

export default async function TodosPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.id) {
    throw new Error("Unauthorized");
  }

  const todos = await getTodosByUserId(session.user.id);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
            My Todos
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Stay organized and track your tasks
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-slate-900/50 gap-4 p-6 border border-green-100 dark:border-green-900/30 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {todo.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {todo.description}
              </p>
              <ChangeTodoToggle todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

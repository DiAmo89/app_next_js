"use client";

import changeTodoStatus from "@/app/actions/change-todo-status";
import { Badge, BadgeCheck } from "lucide-react";

interface Todo {
  id: number;
  title: string;
  createdAt: Date;
  description: string;
  status: boolean | null;
  userId: number;
}
export default function ChangeTodoToggle({ todo }: { todo: Todo }) {
  return (
    <button
      type="button"
      onClick={() => {
        changeTodoStatus(todo.id);
      }}
      className="p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
      title={todo.status ? "Mark as incomplete" : "Mark as complete"}
    >
      {todo.status ? (
        <BadgeCheck
          color="#22c55e"
          size={28}
          strokeWidth={2.5}
          className="animate-pulse"
        />
      ) : (
        <Badge color="#ef4444" size={28} strokeWidth={2.5} />
      )}
    </button>
  );
}

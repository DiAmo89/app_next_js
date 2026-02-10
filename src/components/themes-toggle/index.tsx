"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      className="p-2.5 rounded-full border-2 border-green-300 dark:border-green-700 bg-linear-to-br from-green-50 to-green-100 dark:from-slate-700 dark:to-slate-600 hover:border-green-500 dark:hover:border-green-600 transition-all duration-200 transform hover:scale-110 active:scale-95"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      title={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
    >
      {resolvedTheme === "light" ? (
        <Moon className="text-slate-600 w-5 h-5" />
      ) : (
        <Sun className="text-yellow-400 w-5 h-5" />
      )}
    </button>
  );
}

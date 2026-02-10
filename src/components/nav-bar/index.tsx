import Link from "next/link";
import SignInSignOut from "../sign-in-sign-out";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import ThemeToggle from "../themes-toggle";

const mainLinks = [
  { href: "/", text: "🏠 Home" },
  { href: "/products", text: "🛍️ Products" },
  { href: "/categories", text: "📂 Categories" },
  { href: "/news", text: "📰 News" },
  { href: "/about", text: "ℹ️ About" },
];

const moreLinks = [
  { href: "/more", text: "✨ More Features" },
  { href: "/users", text: "👥 Users" },
  { href: "/learning-grid", text: "📊 Grids" },
  { href: "/reviews", text: "⭐ Reviews" },
  { href: "/career", text: "💼 Career" },
];

const authorizedLinks = [
  { href: "/profile", text: "👤 Profile" },
  { href: "/todos", text: "✓ Todos" },
  { href: "/todos/new", text: "➕ New Todo" },
];

export default async function NavBar() {
  const session = await getServerSession(authOptions);
  const isAuth = !!session;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-green-200 dark:border-green-900/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-linear-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center text-white font-bold group-hover:shadow-lg transition-shadow">
              🏠
            </div>
            <span className="text-xl font-bold text-black dark:text-white hidden sm:inline">
              App_NextJs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {mainLinks.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {text}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors flex items-center gap-1">
                More ▾
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-700 rounded-lg shadow-lg dark:shadow-slate-900/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-green-100 dark:border-green-900/30">
                {moreLinks.map(({ href, text }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <SignInSignOut />
          </div>
        </div>
      </div>
    </nav>
  );
}

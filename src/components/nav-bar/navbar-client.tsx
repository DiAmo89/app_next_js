"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavLink {
  href: string;
  text: string;
}

interface NavbarClientProps {
  mainLinks: NavLink[];
  moreLinks: NavLink[];
  authorizedLinks: NavLink[];
  isAuth: boolean;
}

export default function NavbarClient({
  mainLinks,
  moreLinks,
  authorizedLinks,
  isAuth,
}: NavbarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden border-t border-green-200 dark:border-green-900/30 bg-gray-50 dark:bg-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainLinks.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </Link>
            ))}

            {/* More Links Mobile */}
            <div className="border-t border-green-200 dark:border-green-900/30 mt-2 pt-2">
              <p className="px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                More
              </p>
              {moreLinks.map(({ href, text }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </Link>
              ))}
            </div>

            {/* Auth Links Mobile */}
            {isAuth && (
              <div className="border-t border-green-200 dark:border-green-900/30 mt-2 pt-2">
                <p className="px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                  Account
                </p>
                {authorizedLinks.map(({ href, text }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import Link from 'next/link';
import { Film, Search, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Film className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-white">Streamix</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-white transition-colors hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-300"
            >
              TV Shows
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-300"
            >
              Movies
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-300"
            >
              My List
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white transition-colors hover:text-gray-300">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-white transition-colors hover:text-gray-300">
            <Bell className="h-5 w-5" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded bg-red-600 text-white transition-colors hover:bg-red-700">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

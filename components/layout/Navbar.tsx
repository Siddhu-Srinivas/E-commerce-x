"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    // init theme from localStorage or system
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', next);
  }

  function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    // navigate to home with query param (simple search feature)
    router.push(`/?q=${encodeURIComponent(query)}`);
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Zentro
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Home
            </Link>

            <form onSubmit={onSearchSubmit} className="flex items-center">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-40 md:w-64 bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
              />
            </form>

            <Link
              href="/cart"
              className="relative flex items-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                />
              </svg>
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              href="/admin"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Admin
            </Link>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                // sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3.22a.75.75 0 01.75-.72h0A.75.75 0 0111.5 3.22V5a.75.75 0 01-1.5 0V3.22zM15.364 4.636a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM16.78 10a.75.75 0 01.72.75v0a.75.75 0 01-.72.75H15a.75.75 0 010-1.5h1.78zM14.304 15.364a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 111.06-1.06l1.06 1.06a.75.75 0 010 1.06zM10 16.78a.75.75 0 01-.75.72h0A.75.75 0 018.5 16.78V15a.75.75 0 011.5 0v1.78zM5.696 15.364a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM3.22 10a.75.75 0 01-.72-.75v0A.75.75 0 013.22 8.5H5a.75.75 0 010 1.5H3.22zM5.636 4.636a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.636 5.696a.75.75 0 010-1.06z" />
                  <path d="M10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              ) : (
                // moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center space-x-2">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3.22a.75.75 0 01.75-.72h0A.75.75 0 0111.5 3.22V5a.75.75 0 01-1.5 0V3.22zM15.364 4.636a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM16.78 10a.75.75 0 01.72.75v0a.75.75 0 01-.72.75H15a.75.75 0 010-1.5h1.78zM14.304 15.364a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 111.06-1.06l1.06 1.06a.75.75 0 010 1.06zM10 16.78a.75.75 0 01-.75.72h0A.75.75 0 018.5 16.78V15a.75.75 0 011.5 0v1.78zM5.696 15.364a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM3.22 10a.75.75 0 01-.72-.75v0A.75.75 0 013.22 8.5H5a.75.75 0 010 1.5H3.22zM5.636 4.636a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.636 5.696a.75.75 0 010-1.06z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" /></svg>
              )}
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {/* hamburger */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden transform transition-transform duration-300 ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <Link href="/" className="block text-gray-700 dark:text-gray-200 py-2">Home</Link>
          <form onSubmit={onSearchSubmit} className="py-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-gray-100 dark:bg-gray-800 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
            />
          </form>
          <Link href="/cart" className="block text-gray-700 dark:text-gray-200 py-2 relative">
            Cart
            {itemCount > 0 && <span className="absolute -top-2 right-0 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">{itemCount}</span>}
          </Link>
          <Link href="/admin" className="block text-gray-700 dark:text-gray-200 py-2">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
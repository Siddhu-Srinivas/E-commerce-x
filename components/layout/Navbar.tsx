import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              Zentro
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              Home
            </Link>
            
            <Link
              href="/cart"
              className="relative flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
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
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link
              href="/admin"
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
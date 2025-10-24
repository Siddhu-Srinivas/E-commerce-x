import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'Zentro - Modern E-commerce',
  description = 'Shop the latest products with Zentro - your modern e-commerce destination',
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="pb-12">
          {children}
        </main>
        
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2024 Zentro. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { Product } from '@/lib/types';
import { mockProducts } from '@/lib/firebase';
import ProductGrid from '@/components/product/ProductGrid';

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zentro
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover amazing products at unbeatable prices
        </p>
        
        {/* Search and Filter */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {selectedCategory === 'all' ? 'All Products' : selectedCategory}
          </h2>
          <p className="text-gray-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <ProductGrid products={filteredProducts} loading={loading} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // In a real app, you would fetch from Firebase here
  // For now, we'll use mock data
  return {
    props: {
      products: mockProducts,
    },
    revalidate: 60, // Revalidate every minute
  };
};
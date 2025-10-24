import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { mockProducts } from '@/lib/firebase';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </li>
          <li>
            <span className="text-gray-500">{product.category}</span>
          </li>
          <li>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </li>
          <li>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          
          <div className="mb-6">
            <p className="text-4xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900 mr-2">Availability:</span>
              <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-auto">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1"
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
            
            <Link href="/cart">
              <Button variant="secondary">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all products
  const paths = mockProducts.map((product) => ({
    params: { id: product.id }
  }));

  return {
    paths,
    fallback: false, // Show 404 for unknown paths
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = mockProducts.find(p => p.id === params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60,
  };
};
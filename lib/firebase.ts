// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let app;
let db;

if (typeof window !== 'undefined') {
  // Only initialize on client side
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

// Mock data for development/testing when Firebase is not configured
export const mockProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced fitness tracking smartwatch with heart rate monitor and GPS.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Automatic drip coffee maker with programmable timer and thermal carafe.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    category: 'Home & Kitchen',
    inStock: true,
  },
  {
    id: '4',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'Sports',
    inStock: false,
  },
  {
    id: '5',
    name: 'Laptop Backpack',
    description: 'Durable laptop backpack with multiple compartments and water-resistant material.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Accessories',
    inStock: true,
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    category: 'Electronics',
    inStock: true,
  },
];

export { db };
export default app;
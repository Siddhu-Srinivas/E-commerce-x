// Product type definition
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Cart item type definition
export interface CartItem extends Product {
  quantity: number;
}

// Order type definition
export interface Order {
  id?: string;
  items: CartItem[];
  customerInfo: {
    name: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
  };
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}

// Form types
export interface CustomerInfo {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}
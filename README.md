# Zentro - Modern E-commerce Application

A minimal viable e-commerce web application built with Next.js, TypeScript, Tailwind CSS, and Firebase Firestore.

## Features

### Customer Features
- 🏠 **Home Page**: Browse products with search and category filtering
- 📱 **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- 🛒 **Shopping Cart**: Add items, modify quantities, remove items
- 💳 **Checkout Process**: Collect customer information and simulate order placement
- ✅ **Order Confirmation**: Success page with order tracking information

### Admin Features
- 👨‍💼 **Admin Dashboard**: Manage products with CRUD operations
- ➕ **Add Products**: Create new products with images and details
- ✏️ **Edit Products**: Update existing product information
- 🗑️ **Delete Products**: Remove products from the catalog
- 📊 **Product Overview**: View all products in a table format

### Technical Features
- 🔄 **State Management**: Global cart state using React Context
- 🎨 **Modern UI**: Clean, minimal design with Tailwind CSS
- 🔥 **Firebase Ready**: Configured for Firestore integration
- 📱 **Mobile-First**: Responsive design with mobile optimization
- 🚀 **Performance**: Optimized with Next.js features like SSG and Image optimization

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Backend**: Firebase Firestore (configurable)
- **Images**: Next.js Image optimization
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase account (optional, uses mock data by default)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zentro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   ```

4. **Configure Firebase (Optional)**
   
   If you want to use Firebase Firestore instead of mock data:
   
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Firestore Database
   - Get your Firebase configuration
   - Update `.env.local` with your Firebase credentials:
   
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
zentro/
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Navbar, Layout)
│   ├── product/        # Product-related components
│   ├── cart/           # Cart components
│   └── ui/             # UI components (Button, Input, Toast)
├── context/            # React Context for state management
│   └── CartContext.tsx # Shopping cart state
├── lib/                # Utility functions and types
│   ├── firebase.ts     # Firebase configuration
│   └── types.ts        # TypeScript type definitions
├── pages/              # Next.js pages
│   ├── api/            # API routes (if needed)
│   ├── admin/          # Admin dashboard
│   ├── product/        # Product detail pages
│   ├── cart.tsx        # Shopping cart page
│   ├── checkout.tsx    # Checkout page
│   ├── confirmation.tsx # Order confirmation
│   └── index.tsx       # Home page
├── styles/             # Global styles
└── public/             # Static assets
```

## Usage Guide

### For Customers

1. **Browse Products**: Visit the home page to see all available products
2. **Search & Filter**: Use the search bar and category filter to find specific items
3. **View Details**: Click on any product to see detailed information
4. **Add to Cart**: Click "Add to Cart" on product cards or detail pages
5. **Manage Cart**: View and modify your cart items on the cart page
6. **Checkout**: Provide shipping information and place your order
7. **Confirmation**: Receive order confirmation and tracking information

### For Administrators

1. **Access Admin**: Navigate to `/admin` to access the admin dashboard
2. **Add Products**: Click "Add New Product" and fill in the product details
3. **Edit Products**: Click "Edit" on any product in the admin table
4. **Delete Products**: Click "Delete" to remove products (with confirmation)
5. **Manage Inventory**: Update stock status and product information

## Firebase Firestore Schema

### Products Collection

```javascript
{
  id: string,                    // Auto-generated document ID
  name: string,                  // Product name
  description: string,           // Product description
  price: number,                 // Price in dollars
  image: string,                 // Image URL
  category: string,              // Product category
  inStock: boolean,              // Availability status
  createdAt: Date,              // Creation timestamp
  updatedAt: Date               // Last update timestamp
}
```

### Orders Collection

```javascript
{
  id: string,                    // Auto-generated document ID
  items: [                       // Array of cart items
    {
      id: string,               // Product ID
      name: string,             // Product name
      price: number,            // Product price
      quantity: number,         // Ordered quantity
      // ... other product fields
    }
  ],
  customerInfo: {
    name: string,               // Customer name
    email: string,              // Customer email
    address: string,            // Shipping address
    city: string,               // City
    postalCode: string          // Postal code
  },
  total: number,                // Order total
  status: string,               // Order status
  createdAt: Date              // Order timestamp
}
```

## Deployment

### Deploy to Vercel

1. **Push to GitHub**: Push your code to a GitHub repository

2. **Connect to Vercel**: 
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables in Vercel dashboard

3. **Environment Variables**: Add the following to your Vercel project:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   NEXT_PUBLIC_FIREBASE_PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID
   ```

4. **Deploy**: Vercel will automatically build and deploy your application

## Customization

### Adding New Features

- **Payment Integration**: Integrate Stripe, PayPal, or other payment providers
- **User Authentication**: Add Firebase Auth for user accounts
- **Order Tracking**: Implement order status tracking
- **Product Reviews**: Add product rating and review system
- **Wishlist**: Allow customers to save favorite products
- **Email Notifications**: Send order confirmations via email

### Styling Customization

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Add custom fonts in the Layout component
- **Components**: Modify component styles in the respective files
- **Responsive Design**: Adjust breakpoints and responsive classes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact support@zentro.com or create an issue in the GitHub repository.

---

**Note**: This is a demo application for educational purposes. The checkout process is simulated and no real payments are processed.
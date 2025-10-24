import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { CustomerInfo } from '@/lib/types';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleInputChange = (field: keyof CustomerInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would save the order to Firebase here
      const order = {
        items,
        customerInfo,
        total: total * 1.08, // Include tax
        status: 'confirmed' as const,
        createdAt: new Date(),
      };

      console.log('Order created:', order);
      
      // Clear cart and redirect to confirmation
      clearCart();
      router.push('/confirmation');
    } catch (error) {
      console.error('Order failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Add some products to your cart before proceeding to checkout.
          </p>
          <Button onClick={() => router.push('/')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Customer Information Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
              
              <div className="grid grid-cols-1 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  value={customerInfo.name}
                  onChange={handleInputChange('name')}
                  required
                  placeholder="Enter your full name"
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  value={customerInfo.email}
                  onChange={handleInputChange('email')}
                  required
                  placeholder="Enter your email address"
                />
                
                <Input
                  label="Street Address"
                  type="text"
                  value={customerInfo.address}
                  onChange={handleInputChange('address')}
                  required
                  placeholder="Enter your street address"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="City"
                    type="text"
                    value={customerInfo.city}
                    onChange={handleInputChange('city')}
                    required
                    placeholder="City"
                  />
                  
                  <Input
                    label="Postal Code"
                    type="text"
                    value={customerInfo.postalCode}
                    onChange={handleInputChange('postalCode')}
                    required
                    placeholder="Postal Code"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> This is a demo application. No real payment processing is implemented.
                  Your order will be simulated and confirmed without any actual charges.
                </p>
              </div>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            {/* Order Items */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  
                  <p className="font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Order Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>${(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${(total * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Button
              onClick={handleSubmit}
              loading={loading}
              className="w-full mt-6"
              disabled={!customerInfo.name || !customerInfo.email || !customerInfo.address || !customerInfo.city || !customerInfo.postalCode}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
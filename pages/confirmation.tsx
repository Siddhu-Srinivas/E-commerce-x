import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ConfirmationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase! Your order has been successfully placed and 
          you will receive a confirmation email shortly.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What's Next?
          </h2>
          <div className="text-left space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Order Processing</h3>
                <p className="text-gray-600 text-sm">
                  We're preparing your items for shipment
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Shipping</h3>
                <p className="text-gray-600 text-sm">
                  Your order will be shipped within 2-3 business days
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Estimated delivery: 5-7 business days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="secondary">
              Continue Shopping
            </Button>
          </Link>
          
          <Button onClick={() => window.print()}>
            Print Confirmation
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">
            Need Help?
          </h3>
          <p className="text-blue-700 text-sm">
            If you have any questions about your order, please contact our customer 
            service team at support@zentro.com or call 1-800-ZENTRO.
          </p>
        </div>
      </div>
    </div>
  );
}
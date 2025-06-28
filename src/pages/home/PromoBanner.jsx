import React from 'react';
import 'remixicon/fonts/remixicon.css';

const PromoBanner = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        {/* Banner Item 1 */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-3xl text-blue-600 mb-3">
            <i className="ri-truck-fill"></i>
          </span>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Free Shipping</h4>
          <p className="text-sm text-gray-600">Enjoy free shipping on all orders to your home.</p>
        </div>

        {/* Banner Item 2 */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-3xl text-blue-600 mb-3">
            <i className="ri-loop-left-line"></i>
          </span>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Easy Returns</h4>
          <p className="text-sm text-gray-600">Hassle-free returns within 30 days.</p>
        </div>

        {/* Banner Item 3 */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span className="text-3xl text-blue-600 mb-3">
            <i className="ri-customer-service-line"></i>
          </span>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer Support</h4>
          <p className="text-sm text-gray-600">Our team is here to help you 24/7.</p>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
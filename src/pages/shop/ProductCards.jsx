import React from 'react';
import { Link } from 'react-router-dom';
import RatingsStars from '../../components/RatingsStars';
import 'remixicon/fonts/remixicon.css'; // Ensure RemixIcon CSS is imported

const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <button
              className="absolute top-2 right-2 text-white bg-neutral-600/60 hover:bg-neutral-600 rounded-full p-2 transition-colors duration-200"
              aria-label="Add to cart"
              onClick={() => {
                // Add your cart functionality here, e.g., addToCart(product)
                console.log(`Added ${product.name} to cart`);
              }}
            >
              <i className="ri-shopping-basket-fill text-white text-xl"></i>
            </button>
            
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {product.name}
            </h3>
            <p className="text-base font-medium text-gray-600 mt-1">
              ${product.price.toFixed(2)}{' '}
              {product.oldPrice ? <s>${product?.oldPrice}</s> : null}
            </p>
            <RatingsStars rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
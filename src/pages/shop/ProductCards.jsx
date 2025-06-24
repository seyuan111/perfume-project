import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <Link to={`/shop/${product._id}`}>
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {product.name}
              </h3>
              <p className="text-base font-medium text-gray-600 mt-1">
                ${product.price.toFixed(2)} {product.oldPrice ? <s>${product?.oldPrice}</s> : null}
              </p>
              
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
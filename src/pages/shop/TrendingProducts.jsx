import React, { useState } from 'react';
import ProductCards from './ProductCards';
import products from '../../data/products.json';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  return (
    <section className="max-w-[1400px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
        Trending Products
      </h2>
      <p className="max-w-[600px] mx-auto text-center text-gray-500 text-base sm:text-lg mb-10">
        Discover the best men's cologne: iconic fragrances crafted in New York.
      </p>
      <ProductCards products={products.slice(0, visibleProducts)} />
      {visibleProducts < products.length && (
        <div className="text-center mt-10">
          <button
            onClick={loadMoreProducts}
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default TrendingProducts;
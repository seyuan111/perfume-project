import React from 'react';
import { Link } from 'react-router-dom';
import Perfume1 from '../../assets/Perfume1.png';

const Banner = () => {
  return (
    <section className="relative max-w-[1300px] mx-auto bg-gradient-to-r from-rose-50 to-red-200 overflow-hidden rounded">
      <div className="flex flex-col md:flex-row items-center min-h-[600px] px-6 py-12 md:px-12 md:py-20 gap-8">
        {/* Text Content */}
        <div className="flex-1 z-10 text-center md:text-left animate-fade-in">
          <h4 className="text-rose-400 text-lg md:text-xl font-semibold uppercase tracking-wide mb-4">
            Discover Isabella d'Or Perfume
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Men's Signature Fragrance
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">
            Experience the world's most iconic perfume with a captivating and long-lasting scent.
          </p>
          <button className="inline-block px-8 py-4 bg-rose-500 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-rose-600 focus:ring-4 focus:ring-rose-300 transition-all duration-300">
            <Link to="/shop">Shop Now</Link>
          </button>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex justify-center md:justify-end animate-slide-in">
          <div className="relative w-[200px] h-[250px] md:w-[300px] md:h-[350px]">
            <img
              src={Perfume1}
              alt="Men's Perfume"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-100/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Banner;
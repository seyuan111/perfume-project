import React from 'react';
import PerfumeDeals from '../../assets/PerfumeDeals.png';
import PerfumeDeals1 from '../../assets/PerfumeDeals1.jpg';
import PerfumeDeals2 from '../../assets/PerfumeDeals3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Array of slide data for easier management
const slides = [
  {
    image: PerfumeDeals,
    title: 'Exclusive Fragrance Deals',
    description: 'Discover luxurious scents at unbeatable prices. Limited time offer!',
    cta: 'Shop Now',
  },
  {
    image: PerfumeDeals1,
    title: 'Summer Scent Collection',
    description: 'Refresh your senses with our vibrant summer fragrances.',
    cta: 'Explore Now',
  },
  {
    image: PerfumeDeals2,
    title: 'Premium Perfume Sale',
    description: 'Indulge in top-tier perfumes with up to 50% off.',
    cta: 'Grab the Deal',
  },
];

const DealsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl"> {/* Reduced width */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Text Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 text-center md:text-left"> {/* Reduced padding */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3"> {/* Smaller text sizes */}
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-base"> {/* Smaller description text */}
                    {slide.description}
                  </p>
                  <Link
                    to="#"
                    className="inline-block bg-rose-500 text-white py-2 px-5 rounded-full font-semibold hover:bg-rose-600 transition duration-300"
                  >
                    {slide.cta}
                  </Link>
                </div>
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-56 md:h-80 object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .swiper {
          padding-bottom: 40px;
        }
        .swiper-pagination-bullet {
          background: #be123c;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #be123c;
          opacity: 1;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #be123c;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 36px; /* Smaller navigation buttons */
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px; /* Smaller arrow icons */
        }
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default DealsSection;
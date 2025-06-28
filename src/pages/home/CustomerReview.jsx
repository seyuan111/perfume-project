import React from 'react';
import Slider from 'react-slick';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomerReview = () => {
  // Expanded customer data
  const reviews = [
    {
      id: 1,
      name: "Joshua Doe",
      description: "This men's fragrance is a game-changer! The scent is bold and long-lasting, perfect for any occasion.",
      date: "12th August 2022",
      imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      id: 2,
      name: "John Doe",
      description: "I love the customer service, they are so nice and they help me!",
      date: "18th January 2023",
      imageUrl: "https://images.unsplash.com/photo-1700159017572-de76bb0c5719?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },
    {
      id: 3,
      name: "Jane Doe",
      description: "I just bought the lotion and it's amazing!",
      date: "5th January 2025",
      imageUrl: "https://plus.unsplash.com/premium_photo-1682142715511-27bfbfdc044f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
    {
      id: 4,
      name: "Nicole Doe",
      description: "I love the free shipping, it is really convenient and I don't have to pay a single penny!",
      date: "25th May 2025",
      imageUrl: "https://plus.unsplash.com/premium_photo-1713720663924-4e3fe8f20f79?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },
    {
      id: 5,
      name: "Emma Smith",
      description: "The skincare set is fantastic! My skin feels so soft and hydrated after using it.",
      date: "10th March 2024",
      imageUrl: "https://images.unsplash.com/photo-1524504388940-b792ed94d1ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
    },
    {
      id: 6,
      name: "Michael Brown",
      description: "The shoes I ordered are stylish and super comfortable. Great quality!",
      date: "15th June 2024",
      imageUrl: "https://images.unsplash.com/photo-1543364195-07733d56b1bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 4,
    },
    {
      id: 7,
      name: "Sarah Wilson",
      description: "The dress fits perfectly and the fabric is top-notch. Highly recommend!",
      date: "20th April 2025",
      imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      rating: 5,
    },
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={`ri-star-fill text-sm ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          ></i>
        ))}
      </div>
    );
  };

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        What Our Customers Say
      </h2>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-2">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[320px] md:min-h-[360px]">
              {/* Customer Image */}
              <img
                src={review.imageUrl}
                alt={`${review.name}'s review`}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4"
              />
              {/* Customer Name */}
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{review.name}</h4>
              <p className="text-xs mb-2 text-gray-500">{review.date}</p>
              {/* Star Rating */}
              <StarRating rating={review.rating} />
              {/* Description */}
              <p className="text-sm text-gray-600 mb-3 flex-1">{review.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CustomerReview;
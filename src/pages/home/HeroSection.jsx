import React from 'react';
import { Link } from 'react-router-dom';
import Card1 from '../../assets/card-1.png';
import Card2 from '../../assets/card-2.png';
import Card3 from '../../assets/card-3.png';

const cards = [
  {
    id: 1,
    image: Card1,
    trend: '2025 Trend',
    title: 'Perfume',
  },
  {
    id: 2,
    image: Card2,
    trend: '2025 Trend',
    title: 'Perfume',
  },
  {
    id: 3,
    image: Card3,
    trend: '2025 Trend',
    title: 'Perfume',
  },
];

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center p-5 box-border">
      <div className="flex flex-wrap justify-center gap-5 max-w-6xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative flex-1 min-w-[300px] max-w-[400px] overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 right-5 text-black text-left p-4 rounded-md">
              <p className="mb-2 text-base font-bold text-red-500">{card.trend}</p>
              <h2 className="mb-3 text-xl font-semibold">{card.title}</h2>
              <Link
                to="/about"
                className="text-black underline font-medium rounded-md transition-colors"
              >
                Discover More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react'
import CategoryPerfume from '../../assets/CategoryPerfume1.jpg'
import CategoryLotion from '../../assets/CategoryLotion.jpg'
import CategoryMen from '../../assets/CategoryMen.jpg'
import CategoryFeminine from '../../assets/CategoryFeminine.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
    const categories = [
        {name: "Perfume", path: "perfume", image: CategoryPerfume},
        {name: "Lotion", path: "lotion", image: CategoryLotion},
        {name: "Men", path: "men", image: CategoryMen},
        {name: "Feminine", path: "feminine", image: CategoryFeminine}
    ]
    
  return (
    <div className="max-w-[900px] mx-auto my-6 md:my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-4">
    {categories.map((category, index) => (
        <Link
        key={index}
        to={`/categories/${category.path}`}
        className="relative block rounded-full overflow-hidden shadow-sm active:scale-95 transition-transform duration-200"
        >
        <img
            src={category.image}
            alt={category.name}
            className="w-full h-16 sm:h-24 md:h-32 object-cover rounded-lg"
        />
        <h4 className="text-gray-900 text-base sm:text-lg font-semibold text-center mt-2 mb-3 px-2">
            {category.name}
        </h4>
        </Link>
    ))}
    </div>
  )
}

export default Categories
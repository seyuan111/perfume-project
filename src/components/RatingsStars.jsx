import React from 'react'

const RatingsStars = ({rating}) => {
    const stars = [];
    for(let i = 1; i <= 5; i++){
        stars.push(<span key={i} className={`ri-star${i <= rating ? '-fill' : '-line'}`}></span>)
    }
  return (
    <div className="text-yellow-400 text-xl mb-2">{stars}</div>
  )
}

export default RatingsStars
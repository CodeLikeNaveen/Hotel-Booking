import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 4 }) => {
    return (
        <>
            {Array(5).fill('').map((_, index) => (
                <img
                    className='w-4.5 h-4.5'
                    key={index}
                    src={rating > index ? 
                        assets.starIconFilled 
                        : 
                        assets.starIconOutlined} alt="star-icon-rating"
                    />
            ))}
        </>
    )
}

export default StarRating
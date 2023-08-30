"use client"
import React, { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  color: string;
}

const Cards: React.FC<CardProps> = ({ imageSrc, title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: color,
    transform: isHovered ? 'rotate(10deg)' : 'rotate(0)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div
      className='justify-between mt-28'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={cardStyle}
        className='block max-w-md w-96 h-56 m-4 p-6 border border-gray-200 rounded-lg  shadow hover:shadow-lg'
      >
        <img className='h-16 w-16' src={imageSrc} alt='Emoji' />
        <h2 className='mb-2 mt-1 text-xl font-bold tracking-tight text-gray-900 '>
          {title}
        </h2>
        <p className='font-normal text-gray-700 dark:text-gray-700'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;

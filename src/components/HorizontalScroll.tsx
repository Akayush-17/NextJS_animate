import React from 'react';
import Cards from './Cards';
import { cardData } from '.';

const HorizontalScrollCards = () => {
  return (
    <div className='mt-[13%] ml-48 overflow-x-hidden'>
      <h2 className='h-24 font-bold text-gray-900 text-5xl'>
        Does this sound familiar...
      </h2>

      <div className='overflow-x-hidden'>
        <div className='flex space-x-4 p-4'>
          {cardData.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc.src}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalScrollCards;

import React from 'react';
import Cards from './Cards';
import { cardData } from '.';

const HorizontalScrollCards = () => {
  return (
    <div className='mt-[13%]'>
      <h2 className='font-bold text-gray-900 text-5xl'>
        Does this sound familiar...
      </h2>

      <div className='overflow-x-auto flex space-x-4 p-4'>
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
  );
}

export default HorizontalScrollCards;

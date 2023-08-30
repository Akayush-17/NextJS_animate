import React from 'react';
import Cards from './Cards';
import { cardData } from '.';

const HorizontalScrollCards = () => {
  return (
    <div className='mt-[-30px] ml-48 '>
      

      <div className=''>
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

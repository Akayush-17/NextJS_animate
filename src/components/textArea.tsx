import React from 'react';
import "./style2.css"

const textArea = () => {
    
  return (
    <div>
    <div className='flex flex-row justify-around w-full p-10 mt-[8%]'>
        
        <div className='w-[20%]'>
            <h2 className='text-3xl font-bold'> EQ beats IQ</h2>
        </div>
        <div className='w-[22%] text-base text-gray-700 font-medium'>
            <p>
                People with high emotional intelligence (EQ) live more fulfilled lives. they tend to be happier and have healthier relationships.
            </p>
        </div>
        <div className='w-[22%] text-gray-700 font-medium'>
            <p>
               They are more successful in their pursuits and make for inspiring leaders. According to science, they warn $29k a year.
            </p>
        </div>
       

    </div>
     <div className='mt-24'>

     <h2 className=' font-bold text-gray-900 text-5xl relative slide-in'>
     Does this sound familiar...
     </h2>
     </div>
     </div>
  )
}

export default textArea